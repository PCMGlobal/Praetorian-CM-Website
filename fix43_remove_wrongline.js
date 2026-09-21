const fs = require('fs');
const lines = fs.readFileSync('app/about/page.tsx', 'utf8').split('\r\n').join('\n').split('\n');

// Find and remove the hardcoded "Our people are our delivery capability" paragraph
// that was inserted under whyPraetorian eyebrow
const idx = lines.findIndex(l => l.includes('Our people are our delivery capability') && l.includes('<p'));
console.log('Found at line:', idx + 1);

if (idx !== -1) {
  lines.splice(idx, 1);
  console.log('Removed.');
}

fs.writeFileSync('app/about/page.tsx', lines.join('\n'), 'utf8');
console.log('Done.');
