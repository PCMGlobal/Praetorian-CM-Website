const fs = require('fs');
const lines = fs.readFileSync('app/page.tsx', 'utf8').split('\r\n').join('\n').split('\n');

// Find and fix the groundPanelImages array entirely
const startIdx = lines.findIndex(l => l.includes('const groundPanelImages = ['));
let endIdx = -1;
for (let i = startIdx + 1; i < startIdx + 10; i++) {
  if (lines[i].trim() === '];') { endIdx = i; break; }
}

console.log(`Array found lines ${startIdx + 1} to ${endIdx + 1}`);
console.log('Current content:');
for (let i = startIdx; i <= endIdx; i++) console.log(lines[i]);

// Replace the entire array with correct content
const newArray = [
  '  const groundPanelImages = [',
  '    "/images/photos/pcml-service-ownersTeam.jpg",',
  '    "/images/photos/pcml-service-hsse.jpg",',
  '    "/images/photos/pcml-service-commitment.jpg",',
  '    "/images/photos/pcml-service-projectControls.jpg",',
  '  ];',
];

lines.splice(startIdx, endIdx - startIdx + 1, ...newArray);

fs.writeFileSync('app/page.tsx', lines.join('\n'), 'utf8');
console.log('\nFixed array:');
for (let i = startIdx; i < startIdx + 6; i++) console.log(lines[i]);
console.log('Done.');
