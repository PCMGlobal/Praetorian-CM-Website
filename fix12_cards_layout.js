const fs = require('fs');
const lines = fs.readFileSync('app/page.tsx', 'utf8').split('\r\n').join('\n').split('\n');

// Find start and end of the section (lines 197-252)
const sectionStart = lines.findIndex(l => l.includes("maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(2,1fr)'"));
let sectionEnd = -1;
for (let i = sectionStart + 1; i < lines.length; i++) {
  if (lines[i].trim() === '</section>' && i < sectionStart + 60) {
    sectionEnd = i;
    break;
  }
}
console.log(`Replacing lines ${sectionStart + 1} to ${sectionEnd + 1}`);

// New section — 4 cards in 2x2 grid, each card has photo left + text right
const newSection = [
  "          <section style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(16px,4vw,44px)', display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '24px', marginTop: '40px', marginBottom: '40px' }}>",

  // Card 1 — On the Ground (dark navy text panel)
  "            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '260px', overflow: 'hidden', borderRadius: '2px' }}>",
  "              <div style={{ position: 'relative', overflow: 'hidden' }}>",
  "                <div style={{ position: 'absolute', inset: '0', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(${groundPanelImages[0]})`, animation: 'pcmlDrift 26s ease-in-out infinite alternate' }}></div>",
  "              </div>",
  "              <div style={{ background: '#003E52', display: 'flex', alignItems: 'center', padding: '28px 24px' }}>",
  "                <div>",
  "                  <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '11px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#e3ab7c', marginBottom: '8px' }}>{home.onTheGround?.[0]?.eyebrow}</div>",
  "                  <h3 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: 'clamp(15px,1.4vw,18px)', margin: '0 0 10px', color: '#fff', lineHeight: '1.2' }}>{home.onTheGround?.[0]?.heading}</h3>",
  "                  <p style={{ fontSize: '13px', lineHeight: '1.6', color: '#c3d0d4', margin: '0' }}>{home.onTheGround?.[0]?.body}</p>",
  "                </div>",
  "              </div>",
  "            </div>",

  // Card 2 — Engineering & Construction (light panel)
  "            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '260px', overflow: 'hidden', borderRadius: '2px' }}>",
  "              <div style={{ position: 'relative', overflow: 'hidden' }}>",
  "                <div style={{ position: 'absolute', inset: '0', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(${groundPanelImages[1]})`, animation: 'pcmlDrift 22s ease-in-out infinite alternate-reverse' }}></div>",
  "              </div>",
  "              <div style={{ background: '#f7f7f7', display: 'flex', alignItems: 'center', padding: '28px 24px' }}>",
  "                <div>",
  "                  <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '11px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#B06533', marginBottom: '8px' }}>{home.onTheGround?.[1]?.eyebrow}</div>",
  "                  <h3 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: 'clamp(15px,1.4vw,18px)', margin: '0 0 10px', color: '#003E52', lineHeight: '1.2' }}>{home.onTheGround?.[1]?.heading}</h3>",
  "                  <p style={{ fontSize: '13px', lineHeight: '1.6', color: '#555c60', margin: '0' }}>{home.onTheGround?.[1]?.body}</p>",
  "                </div>",
  "              </div>",
  "            </div>",

  // Card 3 — HSSE (dark navy)
  "            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '260px', overflow: 'hidden', borderRadius: '2px' }}>",
  "              <div style={{ position: 'relative', overflow: 'hidden' }}>",
  "                <div style={{ position: 'absolute', inset: '0', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(${groundPanelImages[2]})`, animation: 'pcmlDrift 24s ease-in-out infinite alternate' }}></div>",
  "              </div>",
  "              <div style={{ background: '#003E52', display: 'flex', alignItems: 'center', padding: '28px 24px' }}>",
  "                <div>",
  "                  <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '11px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#e3ab7c', marginBottom: '8px' }}>{home.onTheGround?.[2]?.eyebrow}</div>",
  "                  <h3 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: 'clamp(15px,1.4vw,18px)', margin: '0 0 10px', color: '#fff', lineHeight: '1.2' }}>{home.onTheGround?.[2]?.heading}</h3>",
  "                  <p style={{ fontSize: '13px', lineHeight: '1.6', color: '#c3d0d4', margin: '0' }}>{home.onTheGround?.[2]?.body}</p>",
  "                </div>",
  "              </div>",
  "            </div>",

  // Card 4 — Project Controls (light panel)
  "            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '260px', overflow: 'hidden', borderRadius: '2px' }}>",
  "              <div style={{ position: 'relative', overflow: 'hidden' }}>",
  "                <div style={{ position: 'absolute', inset: '0', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(${groundPanelImages[3]})`, animation: 'pcmlDrift 20s ease-in-out infinite alternate' }}></div>",
  "              </div>",
  "              <div style={{ background: '#f7f7f7', display: 'flex', alignItems: 'center', padding: '28px 24px' }}>",
  "                <div>",
  "                  <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '11px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#B06533', marginBottom: '8px' }}>PROJECT CONTROLS</div>",
  "                  <h3 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: 'clamp(15px,1.4vw,18px)', margin: '0 0 10px', color: '#003E52', lineHeight: '1.2' }}>Cost and schedule visibility from day one</h3>",
  "                  <p style={{ fontSize: '13px', lineHeight: '1.6', color: '#555c60', margin: '0' }}>Earned value tracking, progress measurement, and change management integrated from study through commissioning \u2014 so nothing surprises you at close-out.</p>",
  "                </div>",
  "              </div>",
  "            </div>",

  "          </section>",
];

// Replace the old section
lines.splice(sectionStart, sectionEnd - sectionStart + 1, ...newSection);

fs.writeFileSync('app/page.tsx', lines.join('\n'), 'utf8');
console.log(`Done. Replaced ${sectionEnd - sectionStart + 1} lines with ${newSection.length} lines.`);
