const fs = require('fs');
let c = fs.readFileSync('app/services/AccordionItem.tsx', 'utf8');
c = c.replace('padding: "4px 0"', 'padding: "3px 0"')
     .replace('padding: "8px 0"', 'padding: "3px 0"')
     .replace('padding: "13px 0"', 'padding: "3px 0"')
     .replace('fontSize: "14px", display', 'fontSize: "13px", display')
     .replace('paddingBottom: "14px"', 'paddingBottom: "8px"');
fs.writeFileSync('app/services/AccordionItem.tsx', c, 'utf8');
console.log('Done.');
