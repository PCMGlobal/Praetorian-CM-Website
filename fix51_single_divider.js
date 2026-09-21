const fs = require('fs');

// Fix app/page.tsx only — remove duplicate dividers
const lines = fs.readFileSync('app/page.tsx', 'utf8').split('\r\n').join('\n').split('\n');
const newLines = [];
let removed = 0;

for (let i = 0; i < lines.length; i++) {
  const l = lines[i];
  const isDivider = l.includes("width: '48px'") && l.includes("height: '3px'") && l.includes("'#B06533'");
  
  if (isDivider) {
    // Check if the previous non-empty line was also a divider
    let prevIdx = newLines.length - 1;
    while (prevIdx >= 0 && newLines[prevIdx].trim() === '') prevIdx--;
    const prev = newLines[prevIdx] || '';
    const prevIsDivider = prev.includes("width: '48px'") && prev.includes("height: '3px'") && prev.includes("'#B06533'");
    
    if (prevIsDivider) {
      removed++;
      console.log(`Removed duplicate divider at line ${i + 1}`);
      continue;
    }
  }
  newLines.push(l);
}

fs.writeFileSync('app/page.tsx', newLines.join('\n'), 'utf8');
console.log(`Done. Removed ${removed} duplicate dividers.`);
