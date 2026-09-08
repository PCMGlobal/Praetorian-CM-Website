import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Newmont Mining Corp – Conga Mine | Praetorian Construction Management",
  description: "The Conga project is an open pit copper/gold mine. The project covers a vast area of approx. 6,000 ha and involves a substantial amount of earthworks infrastruc",
};

export default function ProjectPage() {
  return (
    <main>
      <div>
        <section style={{ position: "relative", overflow: "hidden", minHeight: "420px" }}>
          <div style={{ position: "absolute", inset: "0", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundImage: "url(https://www.praetoriancm.com/wp-content/uploads/2018/08/BannerConga.jpg)" }}></div>
          <div style={{ position: "absolute", inset: "0", background: "linear-gradient(100deg,rgba(0,15,22,.9) 0%,rgba(0,25,36,.72) 48%,rgba(0,15,22,.4) 100%)" }}></div>
          <div style={{ position: "relative", maxWidth: "1400px", margin: "0 auto", padding: "clamp(40px,5vw,72px) clamp(16px,4vw,44px)" }}>
            <Link href="/projects" style={{ background: "none", border: "0", padding: "0", color: "#e3ab7c", fontSize: "13px", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px", fontFamily: "var(--font-sora), sans-serif", fontWeight: "600" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
              All Projects
            </Link>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "22px", flexWrap: "wrap" }}>
              <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#e3ab7c" }}>Projects</div>
            </div>
            <h1 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "800", fontSize: "clamp(28px,3.6vw,48px)", margin: "14px 0 0", color: "#fff", lineHeight: "1.1" }}>Newmont Mining Corp – Conga Mine</h1>
            <div style={{ display: "flex", gap: "28px", flexWrap: "wrap", marginTop: "18px", fontSize: "14px", color: "#c3d0d4" }}>
              <span>Newmont (Yanacocha – MYSRL)</span><span>Cajamarca, Peru</span><span>2010 – 2014</span>
            </div>
          </div>
        </section>
        <section style={{ maxWidth: "1400px", margin: "0 auto", padding: "clamp(44px,6vw,72px) clamp(16px,4vw,44px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "clamp(28px,4vw,56px)" }}>
            <div>
              <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#B06533", marginBottom: "14px" }}>Overview</div>
              <p style={{ fontSize: "15.5px", lineHeight: "1.8", color: "#3a3f42", margin: "0 0 22px" }}>The Conga project is an open pit copper/gold mine. The project covers a vast area of approx. 6,000 ha and involves a substantial amount of earthworks infrastructure in a remote area of the Peruvian Andes. The average elevation is approximately 3,800 m and there is significant water management required during the wet season where annual rainfalls can exceed 1.2m.</p>
              <p style={{ fontSize: "14.5px", lineHeight: "1.8", color: "#555c60", margin: "0" }}>Praetorian provided survey data and Cadd Modelling management, collating data from multiple survey groups, overall site map information management, as-builts, quantity and quality control for contractor payment, and aggregate quantity management.</p>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#B06533", marginBottom: "14px" }}>Key Quantities</div>
              <ul style={{ fontSize: "14.5px", lineHeight: "1.9", color: "#555c60", margin: "0 0 28px", paddingLeft: "18px" }}>
                <li>20 water storage dams, tailings dams, and sediment ponds</li>
                <li>25 km of water diversion channels</li>
                <li>70 km of permanent and temporary roads</li>
                <li>25M m3 of contractor excavated earthworks</li>
                <li>10M m3 of Mine Operations supplied rock fill for earthworks structures</li>
              </ul>
              <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#B06533", marginBottom: "14px" }}>Praetorian's Scope</div>
              <p style={{ fontSize: "14.5px", lineHeight: "1.8", color: "#555c60", margin: "0" }}>Earthworks Project and Construction Management, Value Engineering and Constructability, Survey Data Control and Cadd Modeling Management.</p>
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