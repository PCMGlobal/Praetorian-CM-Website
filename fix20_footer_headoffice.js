const fs = require('fs');
const lines = fs.readFileSync('app/components/Footer.tsx', 'utf8').split('\r\n').join('\n').split('\n');

// 1. Change grid from 1fr 1fr 1fr 1fr to 1fr 1fr 1fr 1fr 1fr (add Head Office as 5th column)
const gridIdx = lines.findIndex(l => l.includes('"1fr 1fr 1fr 1fr"'));
lines[gridIdx] = lines[gridIdx].replace('"1fr 1fr 1fr 1fr"', '"1fr 1fr 1fr 1fr 1fr"');
console.log('Line', gridIdx + 1, ': grid changed to 5 columns');

// 2. Find the Head Office block inside Resources column and extract it
// Remove it from Resources column (lines 102-111) and add as new column before closing </div>
const hoStart = lines.findIndex(l => l.includes('marginTop: "32px"') && l.includes('{'));
const hoEnd = lines.findIndex(l => l.includes('info@praetoriancm.com') && l.includes('</a>'));
console.log(`Head Office block: lines ${hoStart + 1} to ${hoEnd + 1}`);

// Extract the Head Office content
const headOfficeCol = [
  '',
  '          {/* Head Office column */}',
  '          <div style={{ paddingTop: "0" }}>',
  '            <div style={headingStyle}>Head Office</div>',
  '            <p style={{ fontSize: "13px", lineHeight: "1.7", color: "#6b7f84", margin: "0 0 8px" }}>',
  '              201, 10441-178 Street<br />',
  '              Edmonton, Alberta T5S 1R5<br />',
  '              Canada',
  '            </p>',
  '            <a href="tel:7809890289" style={{ ...linkStyle, display: "block", marginTop: "8px" }}>(780) 989-0289</a>',
  '            <a href="mailto:info@praetoriancm.com" style={{ ...linkStyle, display: "block" }}>info@praetoriancm.com</a>',
  '          </div>',
];

// Remove Head Office from inside Resources column (lines hoStart to hoEnd+1)
// hoStart is the <div style={{ marginTop: "32px" }}> line
// Need to also remove its closing </div>
let endDiv = hoEnd + 1;
// Find the closing </div> of the marginTop div
for (let i = hoEnd + 1; i < hoEnd + 5; i++) {
  if (lines[i].trim() === '</div>') { endDiv = i; break; }
}
console.log(`Removing lines ${hoStart + 1} to ${endDiv + 1}`);
lines.splice(hoStart, endDiv - hoStart + 1);

// Now find the closing </div> of the grid (was line 114, now shifted)
const gridCloseIdx = lines.findIndex((l, i) => i > 90 && l.includes('        </div>') && l.trim() === '</div>');
console.log('Grid close at line:', gridCloseIdx + 1);

// Insert Head Office column before grid close
lines.splice(gridCloseIdx, 0, ...headOfficeCol);

fs.writeFileSync('app/components/Footer.tsx', lines.join('\n'), 'utf8');
console.log('Done.');
