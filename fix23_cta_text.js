const fs = require('fs');
let c = fs.readFileSync('app/components/CTABanner.tsx', 'utf8');
c = c.replace(
  'Praetorian embeds directly into your ownership team, from early feasibility through final commissioning. Let us talk about what that looks like for your project.',
  'Praetorian embeds directly into your ownership team, from early feasibility through final commissioning.<br />Let us talk about what that looks like for your project.'
);
// Also need to change <p> to allow dangerouslySetInnerHTML or just split into two <p> tags
// Simplest: use two separate lines
c = c.replace(
  `<p data-reveal="" style={{ fontSize: "14px", lineHeight: "1.5", margin: "0 auto 12px", maxWidth: "80ch", color: "rgba(255,255,255,.92)" }}>Praetorian embeds directly into your ownership team, from early feasibility through final commissioning.<br />Let us talk about what that looks like for your project.</p>`,
  `<p data-reveal="" style={{ fontSize: "14px", lineHeight: "1.5", margin: "0 auto 2px", maxWidth: "80ch", color: "rgba(255,255,255,.92)" }}>Praetorian embeds directly into your ownership team, from early feasibility through final commissioning.</p>
        <p data-reveal="" style={{ fontSize: "14px", lineHeight: "1.5", margin: "0 auto 12px", maxWidth: "80ch", color: "rgba(255,255,255,.92)" }}>Let us talk about what that looks like for your project.</p>`
);
fs.writeFileSync('app/components/CTABanner.tsx', c, 'utf8');
console.log('Done.');
