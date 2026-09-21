const fs = require('fs');

// The divider
const DIV = `<div style={{ width: '48px', height: '3px', background: '#B06533', margin: '8px 0 16px' }}></div>`;

// Files and exact eyebrow text to add dividers after
// Format: [file, search_text_in_eyebrow_line]
const TARGETS = [
  // Home page — section eyebrows only
  ['app/page.tsx', 'home.whatWeDo.eyebrow'],
  ['app/page.tsx', 'home.footprint.eyebrow'],
  ['app/page.tsx', 'home.resources.eyebrow'],
  ['app/page.tsx', 'home.newsSection.eyebrow'],
  // About page — section eyebrows
  ['app/about/page.tsx', 'about.whoWeAre.eyebrow'],
  ['app/about/page.tsx', 'about.missionVisionGoals.eyebrow'],
  ['app/about/page.tsx', 'about.whyPraetorian.eyebrow'],
  ['app/about/page.tsx', 'about.careers.eyebrow'],
  // Services page
  ['app/services/page.tsx', 'Our Approach'],
  // HSSE page
  ['app/hsse/page.tsx', 'hsse.cards.eyebrow'],
  ['app/hsse/page.tsx', 'hsse.statsSection.eyebrow'],
  // Projects page
  ['app/projects/page.tsx', 'Featured Projects'],
];

TARGETS.forEach(([file, search]) => {
  if (!fs.existsSync(file)) { console.log(`SKIP (not found): ${file}`); return; }
  const lines = fs.readFileSync(file, 'utf8').split('\r\n').join('\n').split('\n');
  const idx = lines.findIndex(l => l.includes(search) && l.includes('B06533') && l.includes('uppercase'));
  if (idx === -1) { console.log(`MISS: ${search} in ${file}`); return; }
  // Check not already there
  if (lines[idx + 1]?.includes('48px')) { console.log(`SKIP (already has divider): ${search}`); return; }
  const indent = lines[idx].match(/^(\s*)/)[1];
  lines.splice(idx + 1, 0, `${indent}${DIV}`);
  fs.writeFileSync(file, lines.join('\n'), 'utf8');
  console.log(`Added divider after: ${search} in ${file}`);
});

console.log('Done.');
