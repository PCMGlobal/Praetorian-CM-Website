// One-time (re-runnable) script that creates and publishes the seven
// remaining page singleton documents in Sanity -- About, Careers, Contact,
// HSSE, Praetorian IQ, Privacy Policy, and the News page header -- with the
// current live copy for each, so you don't have to type every field into
// Studio by hand. This is the same pattern already used successfully for
// scripts/seed-home-page.js.
//
// Usage (PowerShell, from the pcml-website folder):
//   $env:SANITY_WRITE_TOKEN = "paste-your-token-here"
//   node scripts/seed-all-pages.js
//
// The token needs "Editor" (or higher) permissions. Create one at
// https://manage.sanity.io -> Praetorian-CM-Website project -> API -> Tokens.
// Never commit the token or put it in .env.local -- it's only used for this
// one run, straight from the terminal's environment variable.
//
// Safe to run more than once: each document uses createOrReplace with a
// fixed _id, so re-running just republishes the same content.

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

const pages = [
  { label: 'About Page', doc: require('./seed-data/aboutPage.js') },
  { label: 'Careers Page', doc: require('./seed-data/careersPage.js') },
  { label: 'Contact Page', doc: require('./seed-data/contactPage.js') },
  { label: 'HSSE Page', doc: require('./seed-data/hssePage.js') },
  { label: 'Praetorian IQ Page', doc: require('./seed-data/praetorianIqPage.js') },
  { label: 'Privacy Policy Page', doc: require('./seed-data/privacyPage.js') },
  { label: 'News Page', doc: require('./seed-data/newsPage.js') },
];

async function run() {
  let successCount = 0;
  let failCount = 0;

  for (const page of pages) {
    try {
      const res = await client.createOrReplace(page.doc);
      console.log(`Success. ${page.label} document created and published: ${res._id}`);
      successCount += 1;
    } catch (err) {
      console.error(`Failed to create the ${page.label} document.`);
      console.error(err.message || err);
      failCount += 1;
    }
  }

  console.log('');
  console.log(`Done. ${successCount} of ${pages.length} pages published.`);
  if (failCount > 0) {
    console.log(`${failCount} page(s) failed -- see errors above. You can re-run this script safely; successful pages will just be republished with the same content.`);
    process.exit(1);
  } else {
    console.log('Open Sanity Studio to review each page, or hand it straight to Femi.');
  }
}

run();
