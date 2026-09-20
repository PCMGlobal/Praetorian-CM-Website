const fs = require('fs');
const lines = fs.readFileSync('app/page.tsx', 'utf8').split('\r\n').join('\n').split('\n');

let changes = 0;

for (let i = 0; i < lines.length; i++) {

  // 1. Widen body text maxWidth so it wraps to ~3 lines
  if (lines[i].includes('Praetorian IQ is our proprietary')) {
    lines[i] = lines[i].replace('maxWidth: "56ch"', 'maxWidth: "72ch"');
    changes++; console.log('Line', i+1, ': body maxWidth widened');
  }

  // 2. Remove gap between button and features grid
  if (lines[i].includes("marginTop: '20px'") && lines[i].includes("border: '1px solid rgba(255,255,255,.2)'")) {
    lines[i] = lines[i].replace("marginTop: '20px'", "marginTop: '12px'");
    changes++; console.log('Line', i+1, ': features grid margin reduced');
  }

  // 3. Reduce button margin-bottom so it sits closer to the grid
  if (lines[i].includes('display: \'flex\', flexWrap: \'wrap\', gap: \'14px\'') && 
      lines[i].includes('margin') === false) {
    lines[i] = lines[i].replace(
      "display: 'flex', flexWrap: 'wrap', gap: '14px'",
      "display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '0'"
    );
    changes++; console.log('Line', i+1, ': button container margin removed');
  }

  // 4. Make the left column use flex column with space-between to push grid to bottom
  if (lines[i].includes("data-reveal=\"\"") && lines[i].includes('maxWidth') === false &&
      i > 245 && i < 265) {
    if (!lines[i].includes('flexDirection')) {
      lines[i] = lines[i].replace(
        'data-reveal=""',
        'data-reveal="" style={{ display: "flex", flexDirection: "column", height: "100%" }}'
      );
      changes++; console.log('Line', i+1, ': left column flex column added');
    }
  }
}

fs.writeFileSync('app/page.tsx', lines.join('\n'), 'utf8');
console.log(`Done. ${changes} changes.`);
