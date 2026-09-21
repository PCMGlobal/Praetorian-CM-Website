const fs = require('fs');
const lines = fs.readFileSync('app/about/page.tsx', 'utf8').split('\r\n').join('\n').split('\n');

// Find the line we just added and replace with hardcoded text
const idx = lines.findIndex(l => l.includes('about.whyPraetorian.heading') && l.includes('fontFamily'));
console.log('Found at line:', idx + 1);

if (idx !== -1) {
  lines[idx] = `            <p data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: 'clamp(18px,2vw,24px)', color: '#003E52', margin: '12px 0 0', lineHeight: '1.2' }}>Our people are our delivery capability</p>`;
  console.log('Updated to hardcoded text.');
} else {
  // Not found — find eyebrow and insert after
  const eyeIdx = lines.findIndex(l => l.includes('about.whyPraetorian.eyebrow'));
  console.log('Eyebrow at line:', eyeIdx + 1);
  lines.splice(eyeIdx + 1, 0, `            <p data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: 'clamp(18px,2vw,24px)', color: '#003E52', margin: '12px 0 0', lineHeight: '1.2' }}>Our people are our delivery capability</p>`);
  console.log('Inserted after eyebrow.');
}

fs.writeFileSync('app/about/page.tsx', lines.join('\n'), 'utf8');
console.log('Done.');
