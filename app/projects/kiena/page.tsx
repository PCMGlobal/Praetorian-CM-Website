import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/app/components/CTABanner";

export const metadata: Metadata = {
  title: "Wesdome Gold Mines â€“ Kiena Paste Plant Project | Praetorian Construction Management",
  description: "Design, procurement and construction of a Tailings and Backfill System for the Kiena Mine. Praetorian provided on-site Construction Management and Contract Administration.",
};

export default function ProjectPage() {
  return (
    <main>
      <div>
        <section style={{ position: "relative", overflow: "hidden", minHeight: "420px" }}>
          <div style={{ position: "absolute", inset: "0", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundImage: "url(/images/photos/pcml-project-kiena.jpg)" }}></div>
          <div style={{ position: "absolute", inset: "0", background: "linear-gradient(100deg,rgba(0,15,22,.9) 0%,rgba(0,25,36,.72) 48%,rgba(0,15,22,.4) 100%)" }}></div>
          <div style={{ position: "relative", maxWidth: "1400px", margin: "0 auto", padding: "clamp(40px,5vw,72px) clamp(16px,4vw,44px)" }}>
            <Link href="/projects" style={{ background: "none", border: "0", padding: "0", color: "#e3ab7c", fontSize: "13px", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px", fontFamily: "var(--font-sora), sans-serif", fontWeight: "600" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
              All Projects
            </Link>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "22px", flexWrap: "wrap" }}>
              <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#e3ab7c" }}>Projects</div>
            </div>
            <h1 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "800", fontSize: "clamp(28px,3.6vw,48px)", margin: "14px 0 0", color: "#fff", lineHeight: "1.1" }}>Wesdome Gold Mines â€“ Kiena Paste Plant Project</h1>
            <div style={{ display: "flex", gap: "28px", flexWrap: "wrap", marginTop: "18px", fontSize: "14px", color: "#c3d0d4" }}>
              <span>Wesdome Gold Mines</span><span>Val d&apos;Or, Quebec, Canada</span><span>2021 â€“ 2022</span>
            </div>
          </div>
        </section>
        <section style={{ maxWidth: "1400px", margin: "0 auto", padding: "clamp(44px,6vw,72px) clamp(16px,4vw,44px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "clamp(28px,4vw,56px)" }}>
            <div>
              <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "18px", letterSpacing: ".12em", textTransform: "uppercase", color: "#B06533", marginBottom: "14px" }}>Overview</div>
              <p style={{ fontSize: "15.5px", lineHeight: "1.8", color: "#3a3f42", margin: "0 0 22px" }}>Praetorian was contracted by Wesdome Kiena Mine management to fully represent Wesdome's interests in the design, procurement and construction of a Tailings and Backfill System for the Kiena Mine, located in Val d'Or, Quebec.</p>
              <p style={{ fontSize: "14.5px", lineHeight: "1.8", color: "#555c60", margin: "0" }}>Responsibilities included on-site construction management and contract administration across all HSE, project controls, engineering, procurement, construction and commissioning deliverables. Following project completion, Praetorian continued to provide support for further improvements to the Paste Plant and additional capital projects on site.</p>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "18px", letterSpacing: ".12em", textTransform: "uppercase", color: "#B06533", marginBottom: "14px" }}>Facilities</div>
              <ul style={{ fontSize: "14.5px", lineHeight: "1.9", color: "#555c60", margin: "0 0 28px", paddingLeft: "18px" }}>
                <li>Thickener Building â€” Tailings Thickener, Rake Drive and Pumping Systems</li>
                <li>Paste Plant Building â€” 800mÂ³ Tailings Buffer Tank, Vacuum Disc Filter, Cement Silo, Paste Mixer and Overhead Crane</li>
                <li>E-House â€” 1MVA Transformer, 1000kW Generator, 600V MCC and PLC</li>
                <li>Transfer Pipelines connecting all plant facilities and Tailings Storage</li>
              </ul>
              <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "18px", letterSpacing: ".12em", textTransform: "uppercase", color: "#B06533", marginBottom: "14px" }}>Praetorian's Scope</div>
              <p style={{ fontSize: "14.5px", lineHeight: "1.8", color: "#555c60", margin: "0 0 16px" }}>On-site Construction Management and Contract Administration, daily coordination of HSE, project controls, engineering, procurement, construction and commissioning deliverables.</p>
        </section>
        <section style={{ background: "#003E52", padding: "clamp(36px,4vw,52px) 0" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 clamp(16px,4vw,44px)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
            <div>
              <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "14px", color: "#fff" }}>Ready to discuss your project?</div>
              <div style={{ fontSize: "13.5px", color: "#9aa9ae", marginTop: "4px" }}>Contact our Business Development team to learn more about how Praetorian can support your next project.</div>
            </div>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#B06533", color: "#fff", textDecoration: "none", minHeight: "44px", padding: "0 22px", fontFamily: "var(--font-sora), sans-serif", fontWeight: "600", fontSize: "14px", flexShrink: 0 }}>
              Speak with Our Team
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
