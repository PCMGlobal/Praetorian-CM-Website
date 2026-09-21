const fs = require('fs');
const path = require('path');

function walk(d) {
  return fs.readdirSync(d, { withFileTypes: true }).flatMap(e =>
    e.isDirectory() ? walk(path.join(d, e.name)) :
    e.name.endsWith('.tsx') ? [path.join(d, e.name)] : []
  );
}

const DIVIDER = `<div style={{ width: '48px', height: '3px', background: '#B06533', margin: '8px 0 16px' }}></div>`;

let totalChanges = 0;

walk('app').forEach(file => {
  if (file.includes('node_modules') || file.includes('.next')) return;
  let lines = fs.readFileSync(file, 'utf8').split('\r\n').join('\n').split('\n');
  let changed = false;
  const newLines = [];

  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    const next = lines[i + 1] || '';
    const isDivider = l.includes("width: '48px'") && l.includes("height: '3px'") && l.includes("'#B06533'");

    if (isDivider) {
      // Check what came BEFORE this divider (the previous non-empty line)
      let prevIdx = newLines.length - 1;
      while (prevIdx >= 0 && newLines[prevIdx].trim() === '') prevIdx--;
      const prev = newLines[prevIdx] || '';

      const afterCopper = (prev.includes('#B06533') || prev.includes('e3ab7c')) && prev.includes('uppercase');
      const afterBlue = prev.includes('#003E52') || prev.includes('#fff') || prev.includes('h2') || prev.includes('h3');
      const nextIsDivider = next.includes("width: '48px'") && next.includes("height: '3px'");

      if (afterBlue && !afterCopper) {
        // Remove divider that appears after a blue heading
        totalChanges++; console.log(`Removed (after blue): ${file}:${i+1}`);
        continue;
      }
      if (nextIsDivider) {
        // Remove duplicate — keep only one
        totalChanges++; console.log(`Removed (duplicate): ${file}:${i+1}`);
        continue;
      }
    }
    newLines.push(l);
  }

  if (newLines.length !== lines.length) {
    fs.writeFileSync(file, newLines.join('\n'), 'utf8');
    changed = true;
  }
  if (changed) console.log(`Updated: ${file}`);
});

// Fix services page — remove "What We Do" h2, ensure divider under OUR SERVICES eyebrow
let svc = fs.readFileSync('app/services/page.tsx', 'utf8').split('\r\n').join('\n');

// Remove "What We Do" h2
svc = svc.replace(
  /\s*<h2[^>]*>What We Do<\/h2>/,
  ''
);

// Add divider after OUR SERVICES eyebrow if not already there
const svcLines = svc.split('\n');
const ourServicesIdx = svcLines.findIndex(l => l.includes('Our Services') && l.includes('B06533') && l.includes('uppercase'));
if (ourServicesIdx !== -1 && !svcLines[ourServicesIdx + 1]?.includes('48px')) {
  const indent = svcLines[ourServicesIdx].match(/^(\s*)/)[1];
  svcLines.splice(ourServicesIdx + 1, 0, `${indent}${DIVIDER}`);
  console.log('Added divider under OUR SERVICES');
  totalChanges++;
}
fs.writeFileSync('app/services/page.tsx', svcLines.join('\n'), 'utf8');

console.log(`\nDone. ${totalChanges} changes.`);
