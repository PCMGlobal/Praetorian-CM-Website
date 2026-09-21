const fs = require('fs');
const path = require('path');

function walk(d) {
  return fs.readdirSync(d, { withFileTypes: true }).flatMap(e =>
    e.isDirectory() ? walk(path.join(d, e.name)) :
    (e.name.endsWith('.tsx') || e.name.endsWith('.ts')) ? [path.join(d, e.name)] : []
  );
}

const DIVIDER = `<div style={{ width: '48px', height: '3px', background: '#B06533', margin: '10px 0 0' }}></div>`;

let totalFiles = 0;
let totalChanges = 0;

walk('app').forEach(file => {
  // Skip node_modules and .next
  if (file.includes('node_modules') || file.includes('.next')) return;

  let content = fs.readFileSync(file, 'utf8').split('\r\n').join('\n');
  const lines = content.split('\n');
  const newLines = [];
  let changed = false;

  for (let i = 0; i < lines.length; i++) {
    newLines.push(lines[i]);

    const l = lines[i];
    // Match copper eyebrow divs (B06533 color, uppercase, letterSpacing)
    const isEyebrow = (l.includes('#B06533') || l.includes('e3ab7c')) &&
      l.includes('uppercase') &&
      l.includes('letterSpacing') &&
      (l.includes('<div') || l.includes('div style'));

    if (isEyebrow) {
      // Check next line is NOT already a divider
      const nextLine = lines[i + 1] || '';
      const alreadyHasDivider = nextLine.includes("width: '48px'") || 
        nextLine.includes('height: \'3px\'') ||
        nextLine.includes('64px') && nextLine.includes('3px');

      if (!alreadyHasDivider) {
        // Get indentation from current line
        const indent = l.match(/^(\s*)/)[1];
        newLines.push(`${indent}${DIVIDER}`);
        changed = true;
        totalChanges++;
        console.log(`${file}:${i+1} — added divider`);
      }
    }
  }

  if (changed) {
    fs.writeFileSync(file, newLines.join('\n'), 'utf8');
    totalFiles++;
  }
});

console.log(`\nDone. ${totalChanges} dividers added across ${totalFiles} files.`);
