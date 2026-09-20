const fs = require('fs');
const lines = fs.readFileSync('app/about/page.tsx', 'utf8').split('\r\n').join('\n').split('\n');

// Fix the management section eyebrow — line 322 (index 321)
// Also scan all lines for e3ab7c eyebrows with 12px that were missed
let changes = 0;
for (let i = 0; i < lines.length; i++) {
  if ((lines[i].includes('#e3ab7c') || lines[i].includes('e3ab7c')) &&
      lines[i].includes("fontSize: '12px'") &&
      lines[i].includes('uppercase')) {
    lines[i] = lines[i]
      .replace("fontSize: '12px'", "fontSize: '18px'")
      .replace("letterSpacing: '.2em'", "letterSpacing: '.12em'");
    changes++;
    console.log('Fixed line:', i + 1);
  }
}

fs.writeFileSync('app/about/page.tsx', lines.join('\n'), 'utf8');
console.log(`Done. ${changes} changes.`);
