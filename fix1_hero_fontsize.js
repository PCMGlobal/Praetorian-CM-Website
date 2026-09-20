// Fix 1: Reduce hero h1 font size to 75% in HeroSlideshow.tsx
// clamp(38px,5.2vw,62px) → clamp(28px,3.9vw,46px)
const fs = require('fs');

const file = 'app/components/HeroSlideshow.tsx';
let content = fs.readFileSync(file, 'utf8');

const old = "fontSize: 'clamp(38px,5.2vw,62px)'";
const updated = "fontSize: 'clamp(28px,3.9vw,46px)'";

const count = (content.match(new RegExp(old.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
content = content.replaceAll(old, updated);
fs.writeFileSync(file, content, 'utf8');
console.log(`HeroSlideshow.tsx: replaced ${count} instance(s)`);
