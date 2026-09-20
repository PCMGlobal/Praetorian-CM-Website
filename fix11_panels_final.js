const fs = require('fs');
const lines = fs.readFileSync('app/page.tsx', 'utf8').split('\r\n').join('\n').split('\n');

// 1. Replace the section wrapper — add maxWidth container and strict 2-col grid
const gridIdx = lines.findIndex(l => l.includes("repeat(auto-fit,minmax(420px,1fr))"));
console.log('Grid section at line:', gridIdx + 1);
lines[gridIdx] = "          <section style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(2,1fr)' }}>";

// 2. Reduce minHeight on photo panels from 340px to 280px
let mhCount = 0;
for (let i = gridIdx; i < Math.min(gridIdx + 80, lines.length); i++) {
  if (lines[i].includes("minHeight: '340px'")) {
    lines[i] = lines[i].replace("minHeight: '340px'", "minHeight: '280px'");
    mhCount++;
  }
}
console.log(`Reduced minHeight on ${mhCount} photo panels`);

// 3. Reduce h2 font size in all 4 text panels
let h2Count = 0;
for (let i = gridIdx; i < Math.min(gridIdx + 80, lines.length); i++) {
  if (lines[i].includes("clamp(20px,2.2vw,27px)")) {
    lines[i] = lines[i].replace("clamp(20px,2.2vw,27px)", "clamp(17px,1.8vw,22px)");
    h2Count++;
  }
}
console.log(`Reduced h2 font size on ${h2Count} text panels`);

// 4. Reduce text panel padding
let padCount = 0;
for (let i = gridIdx; i < Math.min(gridIdx + 80, lines.length); i++) {
  if (lines[i].includes("padding: 'clamp(28px,3.5vw,48px)'")) {
    lines[i] = lines[i].replace("padding: 'clamp(28px,3.5vw,48px)'", "padding: 'clamp(20px,2.5vw,36px)'");
    padCount++;
  }
}
console.log(`Reduced padding on ${padCount} text panels`);

// 5. Fix Project Controls photo — it's showing grey because the 4th panel 
// has order:'8' which pushes it out of the 2-col grid flow. Remove order attributes.
let orderCount = 0;
for (let i = gridIdx; i < Math.min(gridIdx + 80, lines.length); i++) {
  if (lines[i].includes("order: '3'") || lines[i].includes("order: '4'") || 
      lines[i].includes("order: '5'") || lines[i].includes("order: '6'") ||
      lines[i].includes("order: '7'") || lines[i].includes("order: '8'")) {
    lines[i] = lines[i]
      .replace(", order: '3'", "").replace(", order: '4'", "")
      .replace(", order: '5'", "").replace(", order: '6'", "")
      .replace(", order: '7'", "").replace(", order: '8'", "");
    orderCount++;
  }
}
console.log(`Removed ${orderCount} order attributes`);

fs.writeFileSync('app/page.tsx', lines.join('\n'), 'utf8');
console.log('Done.');
