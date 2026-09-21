// One-time (re-runnable) script that surgically patches the LIVE
// homePage-singleton and aboutPage-singleton documents in Sanity to close
// two specific content gaps found while auditing Femi's Studio edits
// against Austin's website code changes:
//
//   1. Home page: a 4th "On the Ground" panel ("Project Controls") exists
//      as hardcoded text in the website's JSX, but was never added to the
//      homePage-singleton document, so Femi can't currently edit it in
//      Studio. This appends it as a real onTheGround[] array item -- but
//      ONLY if the array doesn't already have a 4th item, so re-running
//      this script is always a safe no-op.
//
//   2. About page: the "careers.heading" field ("Our people are our
//      delivery capability") is currently blank on the live document --
//      most likely cleared by accident while editing nearby text. This
//      restores it using Sanity's setIfMissing, which ONLY writes the
//      value if the field is completely unset. If Femi has since typed
//      his own heading there, this script will never touch or overwrite it.
//
// Unlike the seed-*.js scripts (which only ever create a document that
// doesn't exist yet), this script uses targeted field-level patches
// (.append / .setIfMissing) against documents that already exist and have
// already been edited live -- so it never risks any of Femi's other edits
// on either page.
//
// Usage (PowerShell, from the pcml-website folder):
//   $env:SANITY_WRITE_TOKEN = "paste-your-token-here"
//   node scripts/patch-live-fixes.js

const { createClient } = require('@sanity/client');

const token = process.env.SANITY_WRITE_TOKEN;
if (!token) {
  console.error('Missing SANITY_WRITE_TOKEN. Set it first with:');
  console.error('  $env:SANITY_WRITE_TOKEN = "your-token-here"');
  process.exit(1);
}

const client = createClient({
  projectId: 'ke8lgl8i',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
});

async function patchHomeOnTheGround() {
  const doc = await client.fetch(`*[_id == "homePage-singleton"][0]{ "count": count(onTheGround) }`);
  if (!doc) {
    console.log('Home Page: document not found -- skipping (run seed-home-page.js first).');
    return;
  }
  if (doc.count >= 4) {
    console.log(`Home Page: onTheGround already has ${doc.count} item(s) -- left untouched.`);
    return;
  }
  await client
    .patch('homePage-singleton')
    .setIfMissing({ onTheGround: [] })
    .append('onTheGround', [
      {
        _key: 'projectControls01',
        _type: 'groundPanel',
        eyebrow: 'Project Controls',
        heading: 'Cost and schedule visibility from day one',
        body:
          'Earned value tracking, progress measurement, and change management integrated from study through commissioning, so nothing surprises you at close-out.',
      },
    ])
    .commit();
  console.log('Home Page: added the 4th "Project Controls" panel to onTheGround. It is now editable in Studio.');
}

async function patchAboutCareersHeading() {
  const doc = await client.fetch(`*[_id == "aboutPage-singleton"][0]{ "heading": careers.heading }`);
  if (!doc) {
    console.log('About Page: document not found -- skipping (run seed-all-pages.js first).');
    return;
  }
  if (doc.heading) {
    console.log(`About Page: careers.heading already set to "${doc.heading}" -- left untouched.`);
    return;
  }
  await client
    .patch('aboutPage-singleton')
    .setIfMissing({ careers: {} })
    .setIfMissing({ 'careers.heading': 'Our people are our delivery capability' })
    .commit();
  console.log('About Page: restored the blank careers.heading field to "Our people are our delivery capability".');
}

async function run() {
  try {
    await patchHomeOnTheGround();
    await patchAboutCareersHeading();
    console.log('');
    console.log('Done. Both checks complete -- any Studio edits on these two documents were left exactly as they are.');
  } catch (err) {
    console.error('Patch failed.');
    console.error(err.message || err);
    process.exit(1);
  }
}

run();
