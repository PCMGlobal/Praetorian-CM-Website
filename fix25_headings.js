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

  // 1. Reduce all blue section h2 font sizes from clamp(30px,3.6vw,44px) to clamp(20px,2.2vw,28px)
  lines = lines.map((l, i) => {
    if (l.includes("clamp(30px,3.6vw,44px)") && (l.includes('#003E52') || l.includes('#0F3548')) && l.includes('h2')) {
      changed = true; totalChanges++;
      console.log(`${file}:${i+1} — reduced h2 font`);
      return l.replace("clamp(30px,3.6vw,44px)", "clamp(20px,2.2vw,28px)");
    }
    return l;
  });

  // 2. About page only — remove the blue h2 headings (keep eyebrow, remove h2)
  if (file.includes('about\\page.tsx') || file.includes('about/page.tsx')) {
    const newLines = [];
    for (let i = 0; i < lines.length; i++) {
      // Skip lines that are blue h2 headings with about data
      if (lines[i].includes('clamp(20px,2.2vw,28px)') && lines[i].includes('#003E52') && lines[i].includes('<h2')) {
        console.log(`${file}:${i+1} — removed about h2`);
        changed = true; totalChanges++;
        // skip this line
      } else {
        newLines.push(lines[i]);
      }
    }
    lines = newLines;
  }

  if (changed) fs.writeFileSync(file, lines.join('\n'), 'utf8');
});

console.log(`\nDone. ${totalChanges} changes across all files.`);
