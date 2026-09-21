const fs = require('fs');
const lines = fs.readFileSync('app/page.tsx', 'utf8').split('\r\n').join('\n').split('\n');

// Find the cards section at line 198 (index 197)
const idx = lines.findIndex(l => l.includes("maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(16px,4vw,44px)', dis") && l.includes("repeat(2,1fr)"));
console.log('Section found at line:', idx + 1);

// Insert heading above the section
const heading = [
  "          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: 'clamp(24px,3vw,40px) clamp(16px,4vw,44px) 0' }}>",
  "            <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', letterSpacing: '.12em', textTransform: 'uppercase', color: '#B06533' }}>Boots on the Ground</div>",
  "          </div>",
];

lines.splice(idx, 0, ...heading);
fs.writeFileSync('app/page.tsx', lines.join('\n'), 'utf8');
console.log('Done.');
