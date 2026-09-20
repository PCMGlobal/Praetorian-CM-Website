const fs = require('fs');
const lines = fs.readFileSync('app/page.tsx', 'utf8').split('\r\n').join('\n').split('\n');

// All 4 photo divs need height:'100%' not just minHeight
// Also the card wrapper needs alignItems:'stretch' so children fill height
let changes = 0;
for (let i = 0; i < lines.length; i++) {
  // Fix photo container divs
  if (lines[i].includes("position: 'relative', overflow: 'hidden', minHeight: '100%'")) {
    lines[i] = lines[i].replace(
      "position: 'relative', overflow: 'hidden', minHeight: '100%'",
      "position: 'relative', overflow: 'hidden', minHeight: '260px'"
    );
    changes++;
  }
  // Fix card wrappers — add alignItems stretch so both columns fill equal height
  if (lines[i].includes("gridTemplateColumns: '1fr 1fr', minHeight: '260px'")) {
    lines[i] = lines[i].replace(
      "gridTemplateColumns: '1fr 1fr', minHeight: '260px'",
      "gridTemplateColumns: '1fr 1fr', minHeight: '260px', alignItems: 'stretch'"
    );
    changes++;
  }
}

console.log(`Changes: ${changes}`);
fs.writeFileSync('app/page.tsx', lines.join('\n'), 'utf8');
console.log('Done.');
