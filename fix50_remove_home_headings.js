const fs = require('fs');
const lines = fs.readFileSync('app/page.tsx', 'utf8').split('\r\n').join('\n').split('\n');
let removed = 0;

const filtered = lines.filter(l => {
  // Remove "Resources for Project Owners" h2
  if (l.includes('home.resources.heading') && l.includes('h2')) { removed++; return false; }
  // Remove "News & Insights" h2
  if (l.includes('home.newsSection.heading') && l.includes('h2')) { removed++; return false; }
  // Remove any divider immediately after those headings
  return true;
});

fs.writeFileSync('app/page.tsx', filtered.join('\n'), 'utf8');
console.log(`Removed ${removed} headings.`);
