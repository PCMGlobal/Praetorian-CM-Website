const fs = require('fs');
let c = fs.readFileSync('app/page.tsx', 'utf8');
c = c.replace(
  "padding: 'clamp(24px,3vw,40px) clamp(16px,4vw,44px) 0'",
  "padding: 'clamp(10px,1.2vw,16px) clamp(16px,4vw,44px) 0'"
);
fs.writeFileSync('app/page.tsx', c, 'utf8');
console.log('Done.');
