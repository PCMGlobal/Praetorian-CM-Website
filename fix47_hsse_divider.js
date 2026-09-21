const fs = require('fs');
const DIV = `<div style={{ width: '48px', height: '3px', background: '#B06533', margin: '8px 0 16px' }}></div>`;

// Fix HSSE — add divider after each section eyebrow
const lines = fs.readFileSync('app/hsse/page.tsx', 'utf8').split('\r\n').join('\n').split('\n');
const newLines = [];
let added = 0;

for (let i = 0; i < lines.length; i++) {
  newLines.push(lines[i]);
  const l = lines[i];
  if (l.includes('B06533') && l.includes('uppercase') && l.includes('letterSpacing') &&
      (l.includes('data-reveal') || l.includes('div style')) &&
      !lines[i+1]?.includes('48px')) {
    const indent = l.match(/^(\s*)/)[1];
    newLines.push(`${indent}${DIV}`);
    added++;
    console.log('Added divider at line:', i + 1);
  }
}

fs.writeFileSync('app/hsse/page.tsx', newLines.join('\n'), 'utf8');
console.log(`Done. ${added} dividers added to HSSE.`);
