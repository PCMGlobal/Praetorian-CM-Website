const fs = require('fs');
const path = require('path');

function walk(d) {
  return fs.readdirSync(d, { withFileTypes: true }).flatMap(e =>
    e.isDirectory() ? walk(path.join(d, e.name)) :
    e.name.endsWith('.tsx') ? [path.join(d, e.name)] : []
  );
}

let totalChanges = 0;

walk('app').forEach(file => {
  let lines = fs.readFileSync(file, 'utf8').split('\r\n').join('\n').split('\n');
  let changed = false;

  lines = lines.map((l, i) => {
    // 1. Double copper eyebrow font size: 12px → 18px, letterSpacing reduced slightly
    if (l.includes("fontSize: '12px'") && l.includes('#B06533') && l.includes('letterSpacing') && l.includes('uppercase')) {
      changed = true; totalChanges++;
      console.log(`${file}:${i+1} — copper eyebrow enlarged`);
      return l.replace("fontSize: '12px'", "fontSize: '18px'")
               .replace("letterSpacing: '.2em'", "letterSpacing: '.12em'");
    }
    if (l.includes('fontSize: "12px"') && l.includes('#B06533') && l.includes('letterSpacing') && l.includes('uppercase')) {
      changed = true; totalChanges++;
      console.log(`${file}:${i+1} — copper eyebrow enlarged (double quotes)`);
      return l.replace('fontSize: "12px"', 'fontSize: "18px"')
               .replace('letterSpacing: ".2em"', 'letterSpacing: ".12em"');
    }
    // 2. About page — remove Management Team blue h2 (line 323)
    if ((file.includes('about\\page.tsx') || file.includes('about/page.tsx')) &&
        l.includes('clamp(30px,3.6vw,44px)') && l.includes('h2') && l.includes('#003E52')) {
      changed = true; totalChanges++;
      console.log(`${file}:${i+1} — removed Management Team h2`);
      return '';
    }
    return l;
  });

  if (changed) fs.writeFileSync(file, lines.join('\n'), 'utf8');
});

console.log(`\nDone. ${totalChanges} changes.`);
