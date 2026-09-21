const fs = require('fs');

// Update projects/page.tsx — DEFAULT_PROJECTS entry
let page = fs.readFileSync('app/projects/page.tsx', 'utf8');
page = page.replace(
  'IAMGOLD/WOOD \\u2013 Cote Gold Project',
  'IAMGOLD \\u2013 Cote Gold Project'
);
page = page.replace(
  '"2021 \\u2013 2026"',
  '"2021 \\u2013 2026 (Ongoing)"'
);
fs.writeFileSync('app/projects/page.tsx', page, 'utf8');
console.log('projects/page.tsx updated.');

// Update cote/page.tsx — title, metadata and header
let cote = fs.readFileSync('app/projects/cote/page.tsx', 'utf8');
cote = cote.replaceAll('IAMGOLD/WOOD – Cote Gold Project', 'IAMGOLD – Cote Gold Project');
cote = cote.replaceAll('IAMGOLD/WOOD \\u2013 Cote Gold Project', 'IAMGOLD \\u2013 Cote Gold Project');
cote = cote.replace('2021 – 2024', '2021 – 2026 (Ongoing)');
cote = cote.replace('2021 – 2026', '2021 – 2026 (Ongoing)');
// Remove duplicate if both replacements fired
cote = cote.replaceAll('2021 – 2026 (Ongoing) (Ongoing)', '2021 – 2026 (Ongoing)');
fs.writeFileSync('app/projects/cote/page.tsx', cote, 'utf8');
console.log('cote/page.tsx updated.');
