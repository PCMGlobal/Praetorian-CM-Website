const fs = require('fs');
const lines = fs.readFileSync('app/components/WorldMap.tsx', 'utf8').split('\r\n').join('\n').split('\n');

// Find and remove the logo+label overlay div (lines 355-383)
const startIdx = lines.findIndex(l => l.includes('position: "absolute"') && l.includes('left: 16') === false && 
  lines[lines.indexOf(l) + 2]?.includes('left: 16'));

// Better approach — find the div that contains the logo img
let logoLineIdx = lines.findIndex(l => l.includes('src={logo}') && l.includes('height: 56'));
console.log('Logo line:', logoLineIdx + 1);

// Walk back to find the opening <div
let divStart = logoLineIdx;
for (let i = logoLineIdx; i >= logoLineIdx - 15; i--) {
  if (lines[i].trim() === '<div') { divStart = i; break; }
  if (lines[i].includes('<div') && lines[i].includes('position: "absolute"')) { divStart = i; break; }
}
console.log('Div start:', divStart + 1);

// Walk forward to find the closing </div>
let divEnd = logoLineIdx;
let depth = 0;
for (let i = divStart; i < divStart + 40; i++) {
  if (lines[i].includes('<div')) depth++;
  if (lines[i].includes('</div>')) {
    depth--;
    if (depth === 0) { divEnd = i; break; }
  }
}
console.log('Div end:', divEnd + 1);

// Remove the overlay
lines.splice(divStart, divEnd - divStart + 2); // +2 for the blank line after

fs.writeFileSync('app/components/WorldMap.tsx', lines.join('\n'), 'utf8');
console.log('Logo overlay removed.');
