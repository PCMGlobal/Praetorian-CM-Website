const fs = require('fs');
const path = require('path');

function walk(d) {
  return fs.readdirSync(d, { withFileTypes: true }).flatMap(e =>
    e.isDirectory() ? walk(path.join(d, e.name)) :
    e.name.endsWith('.tsx') ? [path.join(d, e.name)] : []
  );
}

let totalRemoved = 0;

// Step 1: Remove ALL copper dividers from every file
walk('app').forEach(file => {
  if (file.includes('node_modules') || file.includes('.next')) return;
  const lines = fs.readFileSync(file, 'utf8').split('\r\n').join('\n').split('\n');
  const filtered = lines.filter(l => {
    const isDivider = l.includes("width: '48px'") && l.includes("height: '3px'") && l.includes("'#B06533'") ||
                      l.includes('width: "48px"') && l.includes('height: "3px"') && l.includes('"#B06533"') ||
                      l.includes("width: '64px'") && l.includes("height: '3px'") && l.includes("'#B06533'") && l.includes("margin: '8px");
    if (isDivider) { totalRemoved++; return false; }
    return true;
  });
  if (filtered.length !== lines.length) {
    fs.writeFileSync(file, filtered.join('\n'), 'utf8');
  }
});
console.log(`Step 1: Removed ${totalRemoved} dividers from all files.`);

// Step 2: Add dividers ONLY after copper eyebrow divs, NOT after blue headings
// Strategy: insert divider only when the NEXT sibling is an h2/h3/p (content), not when it follows an h2

const DIVIDER = `<div style={{ width: '48px', height: '3px', background: '#B06533', margin: '8px 0 14px' }}></div>`;

// Explicit targets: [file, unique string that identifies the eyebrow line]
const TARGETS = [
  // Home page
  { file: 'app/page.tsx', match: "home.whatWeDo.eyebrow" },
  { file: 'app/page.tsx', match: "home.resources.eyebrow" },
  { file: 'app/page.tsx', match: "home.newsSection.eyebrow" },
  // About page
  { file: 'app/about/page.tsx', match: "about.whoWeAre.eyebrow" },
  { file: 'app/about/page.tsx', match: "about.missionVisionGoals.eyebrow" },
  { file: 'app/about/page.tsx', match: "about.whyPraetorian.eyebrow" },
  { file: 'app/about/page.tsx', match: "about.careers.eyebrow" },
  // Services page
  { file: 'app/services/page.tsx', match: "'Our Services'" },
  // HSSE page  
  { file: 'app/hsse/page.tsx', match: "hsse.statsSection" },
  // Projects page
  { file: 'app/projects/page.tsx', match: "'Featured Projects'" },
];

TARGETS.forEach(({ file, match }) => {
  if (!fs.existsSync(file)) { console.log(`SKIP: ${file}`); return; }
  const lines = fs.readFileSync(file, 'utf8').split('\r\n').join('\n').split('\n');
  const idx = lines.findIndex(l => l.includes(match) && l.includes('B06533') && l.includes('uppercase'));
  if (idx === -1) { console.log(`MISS: ${match}`); return; }
  const indent = lines[idx].match(/^(\s*)/)[1];
  lines.splice(idx + 1, 0, `${indent}${DIVIDER}`);
  fs.writeFileSync(file, lines.join('\n'), 'utf8');
  console.log(`Added: ${match} in ${file}`);
});

console.log('\nDone.');
