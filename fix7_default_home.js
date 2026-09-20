const fs = require('fs');
const lines = fs.readFileSync('app/page.tsx', 'utf8').split('\r\n').join('\n').split('\n');

// Find line with the HSSE entry (3rd onTheGround item) — line 81 (index 80)
const idx = lines.findIndex(l => l.includes("Owner's team culture sets the site culture"));
console.log('Found HSSE entry at line:', idx + 1);
console.log(lines[idx]);

// Insert 4th entry after it
const newEntry = '    { eyebrow: "Project Controls", heading: "Cost and schedule visibility from day one", body: "Earned value tracking, progress measurement, and change management integrated from study through commissioning — so nothing surprises you at close-out." },';
lines.splice(idx + 1, 0, newEntry);

fs.writeFileSync('app/page.tsx', lines.join('\n'), 'utf8');
console.log('Added 4th DEFAULT_HOME onTheGround entry.');
console.log('Verify:');
console.log(lines[idx]);
console.log(lines[idx + 1]);
console.log(lines[idx + 2]);
