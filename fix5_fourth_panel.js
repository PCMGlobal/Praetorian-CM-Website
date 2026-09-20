const fs = require('fs');

let content = fs.readFileSync('app/page.tsx', 'utf8');
const lines = content.split('\n');

// Find the closing </section> after order:'6' panel
const orderSixIdx = lines.findIndex(l => l.includes("order: '6'") && l.includes('003E52'));
console.log('order:6 panel found at line:', orderSixIdx + 1);

// From there, find the next </section> closing line
let sectionCloseIdx = -1;
for (let i = orderSixIdx; i < lines.length; i++) {
  if (lines[i].trim() === '</section>') {
    sectionCloseIdx = i;
    break;
  }
}
console.log('</section> found at line:', sectionCloseIdx + 1);
console.log('Line content:', lines[sectionCloseIdx]);

// Insert 4th panel pair BEFORE the </section> closing line
const fourthPanel = [
  '',
  "            <div style={{ background: '#f7f7f7', display: 'flex', alignItems: 'center', padding: 'clamp(28px,3.5vw,48px)', order: '7' }}>",
  "              <div data-reveal=\"left\" style={{ maxWidth: '44ch' }}>",
  "                <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#B06533' }}>PROJECT CONTROLS</div>",
  "                <h2 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: 'clamp(20px,2.2vw,27px)', margin: '10px 0 12px', color: '#003E52', lineHeight: '1.1' }}>Cost and schedule visibility from day one</h2>",
  "                <p style={{ fontSize: '15px', lineHeight: '1.65', color: '#555c60', margin: '0' }}>Earned value tracking, progress measurement, and change management integrated from study through commissioning — so nothing surprises you at close-out.</p>",
  "              </div>",
  "            </div>",
  "            <div style={{ position: 'relative', minHeight: '340px', overflow: 'hidden', order: '8' }}>",
  "              <div style={{ position: 'absolute', inset: '0', animation: 'pcmlDrift 20s ease-in-out infinite alternate' }}>",
  "                <div style={{ position: 'absolute', inset: '0', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundImage: `url(${groundPanelImages[3]})` }}></div>",
  "              </div>",
  "              <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(0deg,rgba(0,15,22,.35),rgba(0,15,22,0))' }}></div>",
  "            </div>",
];

lines.splice(sectionCloseIdx, 0, ...fourthPanel);
fs.writeFileSync('app/page.tsx', lines.join('\n'), 'utf8');
console.log('Fourth panel inserted successfully.');
