const fs = require('fs');
let page = fs.readFileSync('app/hsse/page.tsx', 'utf8');

// 1. Hero padding
page = page.replace(
  "padding: 'clamp(40px,5vw,72px) clamp(16px,4vw,44px)'",
  "padding: 'clamp(24px,3vw,40px) clamp(16px,4vw,44px)'"
);

// 2. Cards section padding
page = page.replaceAll(
  "padding: 'clamp(46px,6vw,84px) clamp(16px,4vw,44px)'",
  "padding: 'clamp(20px,2.5vw,32px) clamp(16px,4vw,44px)'"
);

// 3. Dark panel padding
page = page.replace(
  "padding: 'clamp(40px,5vw,66px)'",
  "padding: 'clamp(22px,2.8vw,36px)'"
);

// 4. Stats card padding
page = page.replace(
  "padding: '28px 24px'",
  "padding: '16px 20px'"
);

// 5. Card padding
page = page.replace(
  "padding: '26px 24px'",
  "padding: '16px 18px'"
);

// 6. h2 margin in stats section
page = page.replace(
  "margin: '12px 0 0', color: '#003E52'",
  "margin: '8px 0 0', color: '#003E52'"
);

// 7. Dark panel h2 margin
page = page.replace(
  "margin: '12px 0 16px', color: '#fff'",
  "margin: '8px 0 10px', color: '#fff'"
);

fs.writeFileSync('app/hsse/page.tsx', page, 'utf8');
console.log('Done.');
