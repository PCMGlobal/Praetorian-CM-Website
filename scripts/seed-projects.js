// One-time (re-runnable) script that creates and publishes the six existing
// project case studies -- Amulsar, Conga, Peñasquito, Emigrant, Diavik,
// SO2Clean -- as "project" documents in Sanity, matching the content that
// used to live in the six separate static project folders. Same automation
// pattern already used for scripts/seed-home-page.js and
// scripts/seed-all-pages.js.
//
// Usage (PowerShell, from the pcml-website folder):
//   $env:SANITY_WRITE_TOKEN = "paste-your-token-here"
//   node scripts/seed-projects.js
//
// The token needs "Editor" (or higher) permissions. Create one at
// https://manage.sanity.io -> Praetorian-CM-Website project -> API -> Tokens.
// Never commit the token or put it in .env.local -- it's only used for this
// one run, straight from the terminal's environment variable.
//
// SAFE TO RE-RUN: uses createIfNotExists with a fixed _id, so if a project
// document already exists (including if Femi has since edited it in
// Studio), this script leaves it completely untouched. It only ever
// creates a project the very first time it's missing -- which is exactly
// how new projects (e.g. Cote, Kiena) added to seed-data/projects.js later
// get created without touching any of the earlier ones.

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

const projects = require('./seed-data/projects.js');

async function run() {
  let successCount = 0;
  let failCount = 0;

  for (const projectDoc of projects) {
    try {
      const res = await client.createIfNotExists(projectDoc);
      if (res._createdAt === res._updatedAt) {
        console.log(`Success. Project document created and published: ${res._id} (${projectDoc.title})`);
      } else {
        console.log(`Project ${res._id} already exists (created ${res._createdAt}) -- left untouched so no Studio edits were overwritten.`);
      }
      successCount += 1;
    } catch (err) {
      console.error(`Failed to create the project document for "${projectDoc.title}".`);
      console.error(err.message || err);
      failCount += 1;
    }
  }

  console.log('');
  console.log(`Done. ${successCount} of ${projects.length} projects processed.`);
  if (failCount > 0) {
    console.log(`${failCount} project(s) failed -- see errors above. You can re-run this script safely; projects that already exist are always left untouched.`);
    process.exit(1);
  } else {
    console.log('Open Sanity Studio to review each project under "Project", or hand it straight to Femi.');
    console.log('');
    console.log('Reminder: once you have confirmed /projects and all project pages look correct live,');
    console.log('you can delete these now-unused folders from pcml-website/app/projects/:');
    console.log('  amulsar, conga, diavik, emigrant, penasquito, so2clean, cote, kiena');
    console.log('(Their content now lives in Sanity and is served by app/projects/[slug]/page.tsx instead.)');
  }
}

run();
