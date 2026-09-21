const fs = require('fs');
const lines = fs.readFileSync('app/about/page.tsx', 'utf8').split('\r\n').join('\n').split('\n');

// Find the copper eyebrow line in the whyPraetorian section
const idx = lines.findIndex(l => l.includes('about.whyPraetorian.eyebrow'));
console.log('Eyebrow found at line:', idx + 1);

// Insert paragraph after the eyebrow line
const newLine = `            <p data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: 'clamp(18px,2vw,24px)', color: '#003E52', margin: '12px 0 0', lineHeight: '1.2' }}>{about.whyPraetorian.heading}</p>`;

lines.splice(idx + 1, 0, newLine);
fs.writeFileSync('app/about/page.tsx', lines.join('\n'), 'utf8');
console.log('Done.');
