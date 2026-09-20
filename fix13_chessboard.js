const fs = require('fs');
const lines = fs.readFileSync('app/page.tsx', 'utf8').split('\r\n').join('\n').split('\n');

// Find the 4 cards section start
const sectionStart = lines.findIndex(l => l.includes("gridTemplateColumns: 'repeat(2,1fr)'") && l.includes("marginTop: '40px'"));
console.log('Section found at line:', sectionStart + 1);

let changed = 0;
for (let i = sectionStart; i < Math.min(sectionStart + 70, lines.length); i++) {

  // Fix: ensure photo divs have height: 100% so they fill the card
  if (lines[i].includes("position: 'relative', overflow: 'hidden'") && !lines[i].includes('background:')) {
    lines[i] = lines[i].replace("position: 'relative', overflow: 'hidden'", "position: 'relative', overflow: 'hidden', minHeight: '100%'");
    changed++;
  }

  // Chessboard pattern: Card1=Blue, Card2=White, Card3=White, Card4=Blue
  // Card 3 — currently #003E52 → change to #f7f7f7, text colours from white to navy
  // Card 4 — currently #f7f7f7 → change to #003E52, text colours from navy to white

  // We identify cards by their eyebrow content
  if (lines[i].includes("home.onTheGround?.[2]?.eyebrow")) {
    // Card 3 text panel — change to light
    for (let j = i - 3; j < i + 8; j++) {
      lines[j] = lines[j]
        .replace("background: '#003E52'", "background: '#f7f7f7'")
        .replace("color: '#e3ab7c'", "color: '#B06533'")
        .replace("color: '#fff'", "color: '#003E52'")
        .replace("color: '#c3d0d4'", "color: '#555c60'");
    }
    changed++;
    console.log('Card 3 changed to light at line:', i + 1);
  }

  if (lines[i].includes("PROJECT CONTROLS")) {
    // Card 4 text panel — change to dark navy
    for (let j = i - 3; j < i + 8; j++) {
      lines[j] = lines[j]
        .replace("background: '#f7f7f7'", "background: '#003E52'")
        .replace("color: '#B06533'", "color: '#e3ab7c'")
        .replace("color: '#003E52'", "color: '#fff'")
        .replace("color: '#555c60'", "color: '#c3d0d4'");
    }
    changed++;
    console.log('Card 4 changed to dark at line:', i + 1);
  }
}

fs.writeFileSync('app/page.tsx', lines.join('\n'), 'utf8');
console.log(`Done. ${changed} changes made.`);
