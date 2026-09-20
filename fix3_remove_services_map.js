// Fix 3: Remove services teaser section and Global Presence + All Locations from app/page.tsx
const fs = require('fs');
let content = fs.readFileSync('app/page.tsx', 'utf8');
const original = content.length;

// ── REMOVE 1: Services teaser section ────────────────────────────────────────
// Starts with: <section style={{ position: 'relative' }}>  (the one with serviceTeasers.map)
// Ends before: <section style={{ background: '#f7f7f7' (whatWeDo section)
const svcStart = content.indexOf("          <section style={{ position: 'relative' }}>\n            <GlobeWatermark side=\"right\"");
const svcEnd = content.indexOf("\n          <section style={{ background: '#f7f7f7', padding: 'clamp(46px");
if (svcStart !== -1 && svcEnd !== -1) {
  content = content.slice(0, svcStart) + content.slice(svcEnd);
  console.log('Removed: services teaser section');
} else {
  console.log('MISS: services teaser section — start:', svcStart, 'end:', svcEnd);
}

// ── REMOVE 2: Global Presence (map) section ───────────────────────────────────
// Starts with: <section style={{ padding: 'clamp(28px,3.5vw,52px) 0' }}>  (the footprint/map one)
const mapStart = content.indexOf("\n          <section style={{ padding: 'clamp(28px,3.5vw,52px) 0' }}>");
// Ends before: <section style={{ background: '#f7f7f7', padding: '0 0 clamp  (allLocations)
const mapEnd = content.indexOf("\n          <section style={{ background: '#f7f7f7', padding: '0 0 clamp");
if (mapStart !== -1 && mapEnd !== -1) {
  content = content.slice(0, mapStart) + content.slice(mapEnd);
  console.log('Removed: Global Presence / map section');
} else {
  console.log('MISS: map section — start:', mapStart, 'end:', mapEnd);
}

// ── REMOVE 3: All Locations section ──────────────────────────────────────────
// Starts with: <section style={{ background: '#f7f7f7', padding: '0 0 clamp(46px,6vw,72px)' }}>
// Ends before: the Resources section or next section
const locStart = content.indexOf("\n          <section style={{ background: '#f7f7f7', padding: '0 0 clamp");
// Next section after allLocations is Resources (background '#f7f7f7' with different padding) or news
const locEnd = content.indexOf("\n          <section", locStart + 100);
if (locStart !== -1 && locEnd !== -1) {
  content = content.slice(0, locStart) + content.slice(locEnd);
  console.log('Removed: All Locations section');
} else {
  console.log('MISS: All Locations — start:', locStart, 'end:', locEnd);
}

fs.writeFileSync('app/page.tsx', content, 'utf8');
console.log(`\nDone. File size: ${original} → ${content.length} bytes (removed ${original - content.length} chars)`);
