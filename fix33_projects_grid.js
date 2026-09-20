const fs = require('fs');
let c = fs.readFileSync('app/projects/page.tsx', 'utf8');

// Change grid from 3 columns to 4 columns by reducing minmax
c = c.replace(
  'gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))"',
  'gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))"'
);

fs.writeFileSync('app/projects/page.tsx', c, 'utf8');
console.log('Done.');
