const fs = require('fs');
const lines = fs.readFileSync('app/about/page.tsx', 'utf8').split('\r\n').join('\n').split('\n');

const idx = lines.findIndex(l => l.includes('about.careers.heading') && l.includes('<h2'));
console.log('Found at line:', idx + 1);

lines[idx] = `              <p data-reveal="" style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "clamp(16px,1.6vw,20px)", margin: "0 0 20px", color: "#003E52", lineHeight: "1.3" }}>{about.careers.heading}</p>`;

fs.writeFileSync('app/about/page.tsx', lines.join('\n'), 'utf8');
console.log('Done.');
