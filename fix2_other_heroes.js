// Fix 2: Reduce hero h1 font size to 75% across all page-level heroes
// Windows-compatible recursive file finder
const fs = require('fs');
const path = require('path');

function findFiles(dir, filename, results = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== '.next') {
      findFiles(full, filename, results);
    } else if (entry.isFile() && entry.name === filename) {
      results.push(full);
    }
  }
  return results;
}

const pages = findFiles('app', 'page.tsx');

// 75% of each original value (rounded to nearest px / 2 decimal places on vw)
const patterns = [
  // Main hero pages — about, hsse, contact, careers, services, news, praetorian-iq
  { old: 'fontSize: "clamp(34px,4.6vw,58px)"', new: 'fontSize: "clamp(25px,3.45vw,43px)"' },
  { old: "fontSize: 'clamp(34px,4.6vw,58px)'", new: "fontSize: 'clamp(25px,3.45vw,43px)'" },
  // Projects listing page
  { old: 'fontSize: "clamp(32px,4vw,52px)"',   new: 'fontSize: "clamp(24px,3vw,39px)"' },
  { old: "fontSize: 'clamp(32px,4vw,52px)'",   new: "fontSize: 'clamp(24px,3vw,39px)'" },
  // News article slug
  { old: 'fontSize: "clamp(28px,3.8vw,52px)"', new: 'fontSize: "clamp(21px,2.85vw,39px)"' },
  { old: "fontSize: 'clamp(28px,3.8vw,52px)'", new: "fontSize: 'clamp(21px,2.85vw,39px)'" },
];

// Exclude project detail pages (clamp(28px,3.6vw,48px)) — already small, leave alone
const EXCLUDE = ['amulsar', 'conga', 'diavik', 'emigrant', 'penasquito', 'so2clean', '[slug]'];

let totalFiles = 0;
let totalReplacements = 0;

pages.forEach(file => {
  const normalised = file.replace(/\\/g, '/');
  if (EXCLUDE.some(ex => normalised.includes(ex))) {
    console.log(`  Skipped: ${path.relative('.', file)}`);
    return;
  }
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  patterns.forEach(p => {
    if (content.includes(p.old)) {
      const count = content.split(p.old).length - 1;
      content = content.replaceAll(p.old, p.new);
      console.log(`  ${path.relative('.', file)}: replaced ${count}x  ${p.old.slice(10,30)}...`);
      totalReplacements += count;
      changed = true;
    }
  });
  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    totalFiles++;
  }
});

console.log(`\nDone. ${totalFiles} file(s) updated, ${totalReplacements} replacement(s) made.`);
