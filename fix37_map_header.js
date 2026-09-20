const fs = require('fs');

// 1. Update projects/page.tsx — remove the header div, keep MapSection call
let page = fs.readFileSync('app/projects/page.tsx', 'utf8').split('\r\n').join('\n');

// Remove the header div inside the teal section (keep section wrapper and MapSection)
page = page.replace(
  `          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(16px,4vw,44px)' }}>
            <div data-reveal='' style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#e3ab7c', marginBottom: '12px' }}>Global Presence</div>
            <h2 data-reveal='' style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: 'clamp(28px,3.2vw,40px)', margin: '0 0 8px', color: '#fff' }}>Praetorian Footprint</h2>
            <p data-reveal='' style={{ fontSize: '15px', lineHeight: '1.7', color: '#c3d0d4', margin: '0 0 32px' }}>Praetorian has delivered projects across Canada, the United States, South America, Central America and Eurasia. Hover a pin or select a country to explore our global deployment.</p>
          </div>`,
  ''
);

// Also reduce the teal section padding since header is gone
page = page.replace(
  "background: '#003E52', padding: 'clamp(46px,6vw,84px) 0'",
  "background: '#003E52', padding: '0'"
);

fs.writeFileSync('app/projects/page.tsx', page, 'utf8');
console.log('projects/page.tsx updated.');

// 2. Update MapSection.tsx — add header overlay inside the map wrapper
let map = fs.readFileSync('app/components/MapSection.tsx', 'utf8').split('\r\n').join('\n');

// Replace the return block to add overlay header
map = map.replace(
  `  return (
    <>
      <div data-reveal="">
        <WorldMap`,
  `  return (
    <>
      <div data-reveal="" style={{ position: 'relative' }}>
        <div style={{
          position: 'absolute',
          top: 20,
          left: 20,
          zIndex: 10,
          padding: '14px 20px',
          background: 'rgba(4,20,28,.78)',
          border: '1px solid rgba(176,101,51,.4)',
          pointerEvents: 'none',
        }}>
          <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '11px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#e3ab7c', marginBottom: '6px' }}>Global Presence</div>
          <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '22px', color: '#ffffff', lineHeight: '1.1' }}>Praetorian Footprint</div>
        </div>
        <WorldMap`
);

// Close the extra div
map = map.replace(
  `        />
      </div>
      <CountryBoxes`,
  `        />
      </div>
      <CountryBoxes`
);

fs.writeFileSync('app/components/MapSection.tsx', map, 'utf8');
console.log('MapSection.tsx updated.');
