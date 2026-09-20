const fs = require('fs');
let c = fs.readFileSync('app/projects/page.tsx', 'utf8');

// Force exactly 4 columns regardless of screen width
c = c.replace(
  'gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))"',
  'gridTemplateColumns: "repeat(4,1fr)"'
);

fs.writeFileSync('app/projects/page.tsx', c, 'utf8');
console.log('Done.');
