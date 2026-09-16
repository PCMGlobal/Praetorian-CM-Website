const fs = require('fs');
const file = 'C:\\Users\\Austin\\pcml-website\\app\\components\\Footer.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldPad = 'padding: "clamp(48px,6vw,84px) clamp(16px,4vw,44px) 0"';
const newPad = 'padding: "clamp(28px,3vw,48px) clamp(16px,4vw,44px) 0"';
if (!content.includes(oldPad)) { console.error('MISMATCH -- footer padding not found'); process.exit(1); }
content = content.replace(oldPad, newPad);
console.log('OK  Footer top padding reduced');

const oldBottom = 'paddingBottom: "clamp(40px,5vw,64px)"';
const newBottom = 'paddingBottom: "clamp(20px,3vw,36px)"';
if (!content.includes(oldBottom)) { console.error('MISMATCH -- footer bottom padding not found'); process.exit(1); }
content = content.replace(oldBottom, newBottom);
console.log('OK  Footer bottom padding reduced');

fs.writeFileSync(file, content, 'utf8');
console.log('\nDone.');