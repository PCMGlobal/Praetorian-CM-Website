// Fix 2: Reduce hero h1 font size on all other page-level heroes
// These use inline style fontSize on <h1> — pattern: fontSize: 'var(--font... or clamp
const fs = require('fs');
const path = require('path');
const glob = require('child_process').execSync(
  "find app -name 'page.tsx' -not -path '*/node_modules/*'", {encoding:'utf8'}
).trim().split('\n');

const OLD = /fontFamily: 'var\(--font-sora\)[^']*', fontWeight: '700', fontSize: 'clamp\((\d+)px,([\d.]+)vw,(\d+)px\)', margin: '[^']*', color: '#0+3E52'[^}]*\}>[^<]*<\/h1>/g;

let total = 0;
glob.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // Target h1 hero headings with the specific large font pattern
  const patterns = [
    // about, hsse, contact, careers — all use same inline style on h1
    { old: "fontWeight: '700', fontSize: 'clamp(36px,4.2vw,54px)'", new: "fontWeight: '700', fontSize: 'clamp(27px,3.15vw,40px)'" },
    { old: "fontWeight: '700', fontSize: 'clamp(34px,4vw,52px)'",   new: "fontWeight: '700', fontSize: 'clamp(25px,3vw,39px)'" },
    { old: "fontWeight: '700', fontSize: 'clamp(32px,3.8vw,50px)'", new: "fontWeight: '700', fontSize: 'clamp(24px,2.85vw,37px)'" },
    { old: "fontWeight: '800', fontSize: 'clamp(36px,4.2vw,54px)'", new: "fontWeight: '800', fontSize: 'clamp(27px,3.15vw,40px)'" },
    { old: "fontWeight: '800', fontSize: 'clamp(34px,4vw,52px)'",   new: "fontWeight: '800', fontSize: 'clamp(25px,3vw,39px)'" },
  ];
  let changed = false;
  patterns.forEach(p => {
    if (content.includes(p.old)) {
      content = content.replaceAll(p.old, p.new);
      changed = true; total++;
      console.log(`${file}: ${p.old.substring(0,40)}...`);
    }
  });
  if (changed) fs.writeFileSync(file, content, 'utf8');
});
console.log(`Total replacements across page files: ${total}`);
