const fs = require('fs');
const path = require('path');

function walk(d) {
  return fs.readdirSync(d, { withFileTypes: true }).flatMap(e =>
    e.isDirectory() ? walk(path.join(d, e.name)) :
    (e.name.endsWith('.tsx')) ? [path.join(d, e.name)] : []
  );
}

// The divider line we added
const DIVIDER_PATTERN = /^\s*<div style=\{\{ width: '48px', height: '3px', background: '#B06533', margin: '10px 0 0' \}\}><\/div>\n?/;

let totalFiles = 0;
let totalRemoved = 0;

walk('app').forEach(file => {
  if (file.includes('node_modules') || file.includes('.next')) return;

  let content = fs.readFileSync(file, 'utf8').split('\r\n').join('\n');
  const before = content;

  // Remove ALL instances of the divider we added
  const lines = content.split('\n');
  const newLines = lines.filter(l => {
    const isDivider = l.includes("width: '48px'") && l.includes("height: '3px'") && l.includes("'#B06533'") && l.includes("margin: '10px 0 0'");
    if (isDivider) { totalRemoved++; return false; }
    return true;
  });

  if (newLines.length !== lines.length) {
    fs.writeFileSync(file, newLines.join('\n'), 'utf8');
    totalFiles++;
    console.log(`Cleaned: ${file}`);
  }
});

console.log(`\nRemoved ${totalRemoved} dividers from ${totalFiles} files.`);
