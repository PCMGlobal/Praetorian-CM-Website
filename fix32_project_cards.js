const fs = require('fs');
const lines = fs.readFileSync('app/projects/page.tsx', 'utf8').split('\r\n').join('\n').split('\n');

// Find the line with so2clean (last entry) and insert after it
const idx = lines.findIndex(l => l.includes('slug: "so2clean"'));
console.log('so2clean found at line:', idx + 1);

const newCards = [
  '  { slug: "cote", title: "IAMGOLD/WOOD \\u2013 Cote Gold Project", location: "Sudbury District, Ontario, Canada", client: "IAMGOLD", year: "2021 \\u2013 2024", photoUrl: "/images/photos/pcml-project-cote.jpg", excerpt: "Cote Gold Project is a greenfield 495,000 gold ounces per annum mine in Ontario. Praetorian provided Project Management Support, Construction Advisory, Turnover and Commissioning Support across the full processing plant and facilities." },',
  '  { slug: "kiena", title: "Wesdome Gold Mines \\u2013 Kiena Paste Plant Project", location: "Val d\'Or, Quebec, Canada", client: "Wesdome Gold Mines", year: "2021 \\u2013 2022", photoUrl: "/images/photos/pcml-project-kiena.jpg", excerpt: "Praetorian provided on-site Construction Management and Contract Administration for the design, procurement and construction of a Tailings and Backfill System for the Kiena Mine in Val d\'Or, Quebec." },',
];

lines.splice(idx + 1, 0, ...newCards);
fs.writeFileSync('app/projects/page.tsx', lines.join('\n'), 'utf8');
console.log('Added Cote and Kiena cards to DEFAULT_PROJECTS.');
