import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/app/components/CTABanner";

export const metadata: Metadata = {
  title: "IAMGOLD/WOOD – Cote Gold Project | Praetorian Construction Management",
  description: "Cote Gold Project is a greenfield 495,000 gold ounces per annum mine in Ontario, Canada. Praetorian provided Project Management, Construction Advisory, Turnover and Commissioning Support.",
};

export default function ProjectPage() {
  return (
    <main>
      <div>
        <section style={{ position: "relative", overflow: "hidden", minHeight: "420px" }}>
          <div style={{ position: "absolute", inset: "0", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundImage: "url(/images/photos/pcml-project-cote.jpg)" }}></div>
          <div style={{ position: "absolute", inset: "0", background: "linear-gradient(100deg,rgba(0,15,22,.9) 0%,rgba(0,25,36,.72) 48%,rgba(0,15,22,.4) 100%)" }}></div>
          <div style={{ position: "relative", maxWidth: "1400px", margin: "0 auto", padding: "clamp(40px,5vw,72px) clamp(16px,4vw,44px)" }}>
            <Link href="/projects" style={{ background: "none", border: "0", padding: "0", color: "#e3ab7c", fontSize: "13px", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px", fontFamily: "var(--font-sora), sans-serif", fontWeight: "600" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
              All Projects
            </Link>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "22px", flexWrap: "wrap" }}>
              <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#e3ab7c" }}>Projects</div>
            </div>
            <h1 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "800", fontSize: "clamp(28px,3.6vw,48px)", margin: "14px 0 0", color: "#fff", lineHeight: "1.1" }}>IAMGOLD/WOOD – Cote Gold Project</h1>
            <div style={{ display: "flex", gap: "28px", flexWrap: "wrap", marginTop: "18px", fontSize: "14px", color: "#c3d0d4" }}>
              <span>IAMGOLD</span><span>Sudbury District, Ontario, Canada</span><span>2021 – 2024</span>
            </div>
          </div>
        </section>
        <section style={{ maxWidth: "1400px", margin: "0 auto", padding: "clamp(44px,6vw,72px) clamp(16px,4vw,44px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "clamp(28px,4vw,56px)" }}>
            <div>
              <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "18px", letterSpacing: ".12em", textTransform: "uppercase", color: "#B06533", marginBottom: "14px" }}>Overview</div>
              <p style={{ fontSize: "15.5px", lineHeight: "1.8", color: "#3a3f42", margin: "0 0 22px" }}>Cote Gold Project is a greenfield 495,000 gold ounces per annum mine located in Chester and Yeo Townships, Sudbury District, Ontario. Praetorian provided Project Management Support, Construction Advisory, Turnover and Commissioning Support across the full processing plant and facilities.</p>
              <p style={{ fontSize: "14.5px", lineHeight: "1.8", color: "#555c60", margin: "0" }}>Praetorian's involvement was essential in managing supply, design and execution challenges during and after the Covid pandemic. Construction experts from Praetorian were assigned directly to contractors to augment planning and completion of contractor work packages, utilising multidiscipline skillsets to overcome worldwide supply chain issues and vendor delays.</p>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "18px", letterSpacing: ".12em", textTransform: "uppercase", color: "#B06533", marginBottom: "14px" }}>Facilities</div>
              <ul style={{ fontSize: "14.5px", lineHeight: "1.9", color: "#555c60", margin: "0 0 28px", paddingLeft: "18px" }}>
                <li>Primary and Secondary Crusher and HPGR</li>
                <li>Screening, Coarse and Fine Ore Storage</li>
                <li>Ball Mill and Pre-Leach Thickener</li>
                <li>Leach Tank Farm and Tailings Thickener</li>
                <li>Conveyor Systems and CIP Tanks</li>
                <li>Site Wide Power Distribution and Main Line 115 kV</li>
                <li>Substation</li>
              </ul>
              <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "18px", letterSpacing: ".12em", textTransform: "uppercase", color: "#B06533", marginBottom: "14px" }}>Praetorian's Scope</div>
              <p style={{ fontSize: "14.5px", lineHeight: "1.8", color: "#555c60", margin: "0 0 16px" }}>Project Manager Role (Process Plant and Facilities), Construction Specialists and Advisors, Field Engineers, Planning and Execution Supervision, Commercial and Contract Management, Punch List and Turnover Supervision, Commissioning Support.</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "8px" }}>
                <div style={{ borderLeft: "3px solid #B06533", paddingLeft: "12px" }}>
                  <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: ".1em", color: "#9aa9ae", marginBottom: "4px" }}>Cost of Services</div>
                  <div style={{ fontSize: "15px", fontWeight: "700", color: "#003E52" }}>&gt;US$8M</div>
                </div>
                <div style={{ borderLeft: "3px solid #B06533", paddingLeft: "12px" }}>
                  <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: ".1em", color: "#9aa9ae", marginBottom: "4px" }}>Total Capital Cost</div>
                  <div style={{ fontSize: "15px", fontWeight: "700", color: "#003E52" }}>&gt;US$1.9B</div>
                </div>
              </div>
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
      </div>
    </main>
  );
}
