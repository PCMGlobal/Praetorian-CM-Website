const fs = require('fs');
const lines = fs.readFileSync('app/about/page.tsx', 'utf8').split('\r\n').join('\n').split('\n');

// 1. Change grid alignItems from 'start' to 'stretch'
const gridIdx = lines.findIndex(l => l.includes('repeat(auto-fit,minmax(340px,1fr))') && l.includes('alignItems'));
lines[gridIdx] = lines[gridIdx].replace('alignItems: "start"', 'alignItems: "stretch"');
console.log('Grid alignItems changed to stretch at line:', gridIdx + 1);

// 2. Make left column a flex column with space-between so LinkedIn card sits at bottom
const leftColIdx = gridIdx + 1; // the <div> right after the grid
lines[leftColIdx] = lines[leftColIdx].replace(
  '<div>',
  '<div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>'
);
console.log('Left column flex column added at line:', leftColIdx + 1);

fs.writeFileSync('app/about/page.tsx', lines.join('\n'), 'utf8');
console.log('Done.');
