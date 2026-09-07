import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Newmont Mining Corp – Emigrant Mine | Praetorian Construction Management",
  description: "Newmont's Emigrant Mine is a greenfield mine development near Carlin, Nevada. The project involves the construction of access roads, a leach pad, water manageme",
};

export default function ProjectPage() {
  return (
    <main>
      <div>
        <section style={{ position: "relative", overflow: "hidden", minHeight: "420px" }}>
          <div style={{ position: "absolute", inset: "0", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundImage: "url(https://www.praetoriancm.com/wp-content/uploads/2018/08/Emigrant-Aerial.jpg)" }}></div>
          <div style={{ position: "absolute", inset: "0", background: "linear-gradient(100deg,rgba(0,15,22,.9) 0%,rgba(0,25,36,.72) 48%,rgba(0,15,22,.4) 100%)" }}></div>
          <div style={{ position: "relative", maxWidth: "1400px", margin: "0 auto", padding: "clamp(40px,5vw,72px) clamp(16px,4vw,44px)" }}>
            <Link href="/projects" style={{ background: "none", border: "0", padding: "0", color: "#e3ab7c", fontSize: "13px", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px", fontFamily: "var(--font-sora), sans-serif", fontWeight: "600" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
              All Projects
            </Link>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "22px", flexWrap: "wrap" }}>
              <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#e3ab7c" }}>Projects</div>
              <span style={{ background: "#eceeee", color: "#4a4e50", padding: "3px 10px", fontSize: "11.5px", fontFamily: "var(--font-sora), sans-serif", fontWeight: "600" }}>Commissioned</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "800", fontSize: "clamp(28px,3.6vw,48px)", margin: "14px 0 0", color: "#fff", lineHeight: "1.1" }}>Newmont Mining Corp – Emigrant Mine</h1>
            <div style={{ display: "flex", gap: "28px", flexWrap: "wrap", marginTop: "18px", fontSize: "14px", color: "#c3d0d4" }}>
              <span>Newmont Mining Corp</span><span>Carlin, Nevada, USA</span><span>2011 – 2012</span>
            </div>
          </div>
        </section>
        <section style={{ maxWidth: "1400px", margin: "0 auto", padding: "clamp(44px,6vw,72px) clamp(16px,4vw,44px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "clamp(28px,4vw,56px)" }}>
            <div>
              <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#B06533", marginBottom: "14px" }}>Overview</div>
              <p style={{ fontSize: "15.5px", lineHeight: "1.8", color: "#3a3f42", margin: "0 0 22px" }}>Newmont's Emigrant Mine is a greenfield mine development near Carlin, Nevada. The project involves the construction of access roads, a leach pad, water management facilities, a carbon in column processing plant, and related infrastructure.</p>
              <p style={{ fontSize: "14.5px", lineHeight: "1.8", color: "#555c60", margin: "0" }}>Praetorian provided overall Project Management services by integrating with Newmont personnel as part of the owners' team. Responsibilities included feasibility support, management of engineering firms, constructability planning, equipment installation sequencing and feedback to designers to reduce construction costs.</p>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#B06533", marginBottom: "14px" }}>Key Quantities</div>
              <ul style={{ fontSize: "14.5px", lineHeight: "1.9", color: "#555c60", margin: "0 0 28px", paddingLeft: "18px" }}>
                <li>80 acre leach pad</li>
                <li>500,000 m2 of geomembrane liner</li>
                <li>53 km of HDPE and carbon steel pipelines</li>
                <li>3,000,000 m3 of material placed for roads, dams and leach pads</li>
                <li>New CIC process plant, fuel island, lube storage building, wash bay and truck shop expansion</li>
              </ul>
              <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#B06533", marginBottom: "14px" }}>Praetorian's Scope</div>
              <p style={{ fontSize: "14.5px", lineHeight: "1.8", color: "#555c60", margin: "0" }}>Project Management, Construction Management, Cost Control, Scheduling, Constructability.</p>
            </div>
          </div>
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
        <section style={{ maxWidth: "1400px", margin: "0 auto", padding: "clamp(36px,4vw,52px) clamp(16px,4vw,44px)" }}>
          <Link href="/projects" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#003E52", fontFamily: "var(--font-sora), sans-serif", fontWeight: "600", fontSize: "14px", textDecoration: "none" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
            Back to All Projects
          </Link>
        </section>
      </div>
    </main>
  );
}