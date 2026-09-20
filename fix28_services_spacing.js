const fs = require('fs');

// Fix services/page.tsx
let page = fs.readFileSync('app/services/page.tsx', 'utf8');

// 1. Section padding for each service block
page = page.replace(
  'padding: "clamp(24px,3vw,40px) 0"',
  'padding: "clamp(10px,1.5vw,18px) 0"'
);

// 2. Section header margin bottom
page = page.replace(
  'marginBottom: "clamp(24px,3vw,40px)"',
  'marginBottom: "clamp(12px,1.5vw,18px)"'
);

// 3. Our Approach section padding
page = page.replace(
  '"clamp(46px,6vw,84px) 0", scrollMarginTop: "120px"',
  '"clamp(24px,3vw,36px) 0", scrollMarginTop: "120px"'
);

// 4. Approach body margin
page = page.replace(
  'margin: "0 0 44px"',
  'margin: "0 0 20px"'
);

// 5. Gap between left col and accordion
page = page.replace(
  '"clamp(36px,5vw,72px)"',
  '"clamp(20px,3vw,40px)"'
);

fs.writeFileSync('app/services/page.tsx', page, 'utf8');
console.log('page.tsx done.');

// Fix AccordionItem.tsx
let acc = fs.readFileSync('app/services/AccordionItem.tsx', 'utf8');
acc = acc.replace('padding: "13px 0"', 'padding: "8px 0"');
fs.writeFileSync('app/services/AccordionItem.tsx', acc, 'utf8');
console.log('AccordionItem.tsx done.');
