const fs = require('fs');
const lines = fs.readFileSync('app/page.tsx', 'utf8').split('\r\n').join('\n').split('\n');

// Find the 4-card section
const idx = lines.findIndex(l => l.includes("repeat(2,1fr)") && l.includes("margin: '0 auto'"));
console.log('Cards section at line:', idx + 1);

const heading = [
  "          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '8px clamp(16px,4vw,44px) 0' }}>",
  "            <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', letterSpacing: '.12em', textTransform: 'uppercase', color: '#B06533' }}>Boots on the Ground</div>",
  "          </div>",
];

lines.splice(idx, 0, ...heading);
fs.writeFileSync('app/page.tsx', lines.join('\n'), 'utf8');
console.log('Done.');
