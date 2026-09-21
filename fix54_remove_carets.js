const fs = require('fs');
const lines = fs.readFileSync('app/components/Navbar.tsx', 'utf8').split('\r\n').join('\n').split('\n');

const filtered = lines.filter(l => !l.includes('<Caret />'));
const removed = lines.length - filtered.length;

fs.writeFileSync('app/components/Navbar.tsx', filtered.join('\n'), 'utf8');
console.log(`Removed ${removed} Caret instances.`);
