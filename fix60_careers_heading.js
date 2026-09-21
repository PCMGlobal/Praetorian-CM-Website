const fs = require('fs');
const lines = fs.readFileSync('app/about/page.tsx', 'utf8').split('\r\n').join('\n').split('\n');

const idx = lines.findIndex(l => l.includes('careers.heading') && l.includes('<h2'));
console.log('Found at line:', idx + 1);

// Replace h2 with a regular bold paragraph — same size as body text
lines[idx] = `              <p data-reveal="" style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "600", fontSize: "15.5px", margin: "0 0 20px", color: "#3a3f42", lineHeight: "1.5" }}>{about.careers.heading}</p>`;

fs.writeFileSync('app/about/page.tsx', lines.join('\n'), 'utf8');
console.log('Done.');
