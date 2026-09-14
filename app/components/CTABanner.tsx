"use client";
import Link from "next/link";

export default function CTABanner() {
  return (
    <section style={{ background: "#B06533", color: "#fff", position: "relative", overflow: "hidden" }}>
      {/* Full logo teal ghost -- fixed parallax effect */}
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
      <div style={{ position: "relative", zIndex: 1, maxWidth: "900px", margin: "0 auto", padding: "clamp(48px,6vw,88px) clamp(16px,4vw,44px)", textAlign: "center" }}>
        <h2 data-reveal="" style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "800", fontSize: "clamp(28px,3.4vw,42px)", margin: "0", color: "#fff" }}>Ready to discuss your project?</h2>
        <p data-reveal="" style={{ fontSize: "16px", lineHeight: "1.65", margin: "18px auto 30px", maxWidth: "58ch", color: "rgba(255,255,255,.92)" }}>Praetorian embeds directly into your ownership team, from early feasibility through final commissioning. Let us talk about what that looks like for your project.</p>
        <Link href="/contact" style={{ display: "inline-flex", minHeight: "50px", padding: "0 26px", fontSize: "16px", background: "#003E52", color: "#fff", textDecoration: "none", alignItems: "center", fontFamily: "var(--font-sora), sans-serif", fontWeight: "600" }}>Speak with Our Team</Link>
      </div>
    </section>
  );
}
