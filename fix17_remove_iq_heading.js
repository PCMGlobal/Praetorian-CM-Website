const fs = require('fs');
const lines = fs.readFileSync('app/page.tsx', 'utf8').split('\r\n').join('\n').split('\n');

let changes = 0;

for (let i = 0; i < lines.length; i++) {

  // 1. Remove the h2 "Praetorian IQ Proprietary Cost Intelligence" heading
  if (lines[i].includes('Praetorian IQ') && lines[i].includes('Proprietary Cost Intelligence') && lines[i].includes('<h2')) {
    lines[i] = '';
    changes++; console.log('Line', i+1, ': IQ h2 heading removed');
  }

  // 2. Tighten the eyebrow tag margin (was margin: "20px 0 0" before, now no heading below it)
  if (lines[i].includes('Proprietary Platform') && lines[i].includes('display: "inline-flex"')) {
    lines[i] = lines[i].replace('padding: "6px 13px"', 'padding: "6px 13px"');
    changes++;
  }

  // 3. Reduce body paragraph top margin since heading is gone
  if (lines[i].includes('Praetorian IQ is our proprietary')) {
    lines[i] = lines[i].replace('margin: "12px 0 18px"', 'margin: "16px 0 18px"');
    changes++; console.log('Line', i+1, ': body margin adjusted');
  }
}

fs.writeFileSync('app/page.tsx', lines.join('\n'), 'utf8');
console.log(`Done. ${changes} changes.`);
