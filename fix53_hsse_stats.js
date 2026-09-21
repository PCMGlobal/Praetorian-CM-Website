const fs = require('fs');
const lines = fs.readFileSync('app/hsse/page.tsx', 'utf8').split('\r\n').join('\n').split('\n');

let changes = 0;

for (let i = 0; i < lines.length; i++) {
  // 1. Reduce stat number font size
  if (lines[i].includes("clamp(32px,3.2vw,44px)") && lines[i].includes('stat.value')) {
    lines[i] = lines[i].replace("clamp(32px,3.2vw,44px)", "clamp(18px,1.8vw,22px)");
    changes++; console.log('Line', i+1, ': stat font size reduced');
  }
  // 2. Remove footnote paragraph
  if (lines[i].includes('data.statsSection.footnote') && lines[i].includes('<p')) {
    lines[i] = '';
    changes++; console.log('Line', i+1, ': footnote removed');
  }
}

fs.writeFileSync('app/hsse/page.tsx', lines.join('\n'), 'utf8');
console.log(`Done. ${changes} changes.`);
