const fs = require('fs');

// ── HeroSlideshow.tsx — reduce hero height ────────────────────────────────
let hero = fs.readFileSync('app/components/HeroSlideshow.tsx', 'utf8');
hero = hero.replace(
  "height: 'clamp(520px,78vh,760px)'",
  "height: 'clamp(380px,62vh,580px)'"
);
fs.writeFileSync('app/components/HeroSlideshow.tsx', hero, 'utf8');
console.log('HeroSlideshow.tsx: hero height reduced');

// ── page.tsx — three changes ──────────────────────────────────────────────
let page = fs.readFileSync('app/page.tsx', 'utf8');

// 1. What We Do section padding
page = page.replace(
  "padding: 'clamp(46px,6vw,84px) 0'",
  "padding: 'clamp(24px,3.5vw,44px) 0'"
);
console.log('page.tsx: What We Do padding reduced');

// 2. onTheGround h2 font size — all 3 instances
const oldH2 = "fontSize: 'clamp(26px,3vw,36px)', margin: '12px 0 16px'";
const newH2 = "fontSize: 'clamp(20px,2.2vw,27px)', margin: '10px 0 12px'";
const h2Count = page.split(oldH2).length - 1;
page = page.replaceAll(oldH2, newH2);
console.log(`page.tsx: onTheGround h2 font size reduced (${h2Count} instances)`);

// 3. onTheGround grid — fix to 2 columns so it never reflows to 1+remainder
// Also add a 4th panel pair so at narrow widths it becomes 2x2 not 2+1
page = page.replace(
  "gridTemplateColumns: 'repeat(auto-fit,minmax(420px,1fr))'",
  "gridTemplateColumns: 'repeat(2,1fr)'"
);
console.log('page.tsx: onTheGround grid fixed to 2 columns');

// 4. Reduce panel minHeight from 440px to 340px to reduce space
const oldMH = "minHeight: '440px'";
const newMH = "minHeight: '340px'";
const mhCount = page.split(oldMH).length - 1;
page = page.replaceAll(oldMH, newMH);
console.log(`page.tsx: panel minHeight reduced (${mhCount} instances)`);

// 5. Reduce onTheGround text panel padding
const oldPad = "padding: 'clamp(40px,5vw,66px)'";
const newPad = "padding: 'clamp(28px,3.5vw,48px)'";
const padCount = page.split(oldPad).length - 1;
page = page.replaceAll(oldPad, newPad);
console.log(`page.tsx: panel padding reduced (${padCount} instances)`);

fs.writeFileSync('app/page.tsx', page, 'utf8');
console.log('\nDone.');
