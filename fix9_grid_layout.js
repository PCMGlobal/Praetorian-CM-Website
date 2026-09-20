const fs = require('fs');
const lines = fs.readFileSync('app/page.tsx', 'utf8').split('\r\n').join('\n').split('\n');

// Fix the section grid — use 2 equal columns but constrain with proper aspect ratio on photo panels
const idx = lines.findIndex(l => l.includes("display: 'grid', gridTemplateColumns: 'repeat(2,1fr)'"));
console.log('Grid section found at line:', idx + 1);
console.log('Current:', lines[idx]);

lines[idx] = "          <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridAutoRows: '420px' }}>";

// Also fix all minHeight on photo panels — replace with height: 100%
let mhCount = 0;
for (let i = idx; i < Math.min(idx + 80, lines.length); i++) {
  if (lines[i].includes("minHeight: '340px'")) {
    lines[i] = lines[i].replace("minHeight: '340px'", "minHeight: '0', height: '100%'");
    mhCount++;
    console.log(`Fixed minHeight at line ${i+1}`);
  }
}

fs.writeFileSync('app/page.tsx', lines.join('\n'), 'utf8');
console.log(`Done. Fixed grid + ${mhCount} photo panel heights.`);
