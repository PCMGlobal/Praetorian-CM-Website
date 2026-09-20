const fs = require('fs');

const cta = `"use client";
import Link from "next/link";

export default function CTABanner() {
  return (
    <section style={{ background: "#B06533", color: "#fff", position: "relative", overflow: "hidden" }}>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/pcml-logo-nav.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "70%",
          backgroundAttachment: "fixed",
          opacity: 0.06,
          filter: "brightness(0) saturate(100%) invert(18%) sepia(49%) saturate(541%) hue-rotate(152deg) brightness(94%) contrast(96%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div style={{ position: "relative", zIndex: 1, maxWidth: "1000px", margin: "0 auto", padding: "clamp(10px,1.2vw,16px) clamp(16px,4vw,44px)", textAlign: "center" }}>
        <h2 data-reveal="" style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "800", fontSize: "clamp(16px,1.8vw,22px)", margin: "0 0 8px", color: "#fff" }}>Ready to discuss your project?</h2>
        <p data-reveal="" style={{ fontSize: "14px", lineHeight: "1.5", margin: "0 auto 12px", maxWidth: "80ch", color: "rgba(255,255,255,.92)" }}>Praetorian embeds directly into your ownership team, from early feasibility through final commissioning. Let us talk about what that looks like for your project.</p>
        <Link href="/contact" style={{ display: "inline-flex", minHeight: "40px", padding: "0 22px", fontSize: "14px", background: "#003E52", color: "#fff", textDecoration: "none", alignItems: "center", fontFamily: "var(--font-sora), sans-serif", fontWeight: "600" }}>Speak with Our Team</Link>
      </div>
    </section>
  );
}
`;

fs.writeFileSync('app/components/CTABanner.tsx', cta, 'utf8');
console.log('CTABanner.tsx rewritten.');
