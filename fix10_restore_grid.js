const fs = require('fs');
const lines = fs.readFileSync('app/page.tsx', 'utf8').split('\r\n').join('\n').split('\n');

// Restore original grid declaration
const gridIdx = lines.findIndex(l => l.includes("gridAutoRows: '420px'"));
console.log('Grid line found at:', gridIdx + 1);
lines[gridIdx] = "          <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(420px,1fr))' }}>";

// Restore minHeight on photo panels
let count = 0;
for (let i = gridIdx; i < Math.min(gridIdx + 80, lines.length); i++) {
  if (lines[i].includes("minHeight: '0', height: '100%'")) {
    lines[i] = lines[i].replace("minHeight: '0', height: '100%'", "minHeight: '340px'");
    count++;
    console.log(`Restored minHeight at line ${i+1}`);
  }
}

fs.writeFileSync('app/page.tsx', lines.join('\n'), 'utf8');
console.log(`Done. Restored grid + ${count} photo panel heights.`);
