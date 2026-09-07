import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lydian International – Amulsar Gold Project | Praetorian Construction Management",
  description: "Amulsar Gold Project is a greenfield 225,000 gold ounces per annum mine in the Republic of Armenia. Praetorian provided supports ranging from feasibility review",
};

export default function ProjectPage() {
  return (
    <main>
      <div>
        <section style={{ position: "relative", overflow: "hidden", minHeight: "420px" }}>
          <div style={{ position: "absolute", inset: "0", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundImage: "url(https://www.praetoriancm.com/wp-content/uploads/2018/08/Amulsar.jpg)" }}></div>
          <div style={{ position: "absolute", inset: "0", background: "linear-gradient(100deg,rgba(0,15,22,.9) 0%,rgba(0,25,36,.72) 48%,rgba(0,15,22,.4) 100%)" }}></div>
          <div style={{ position: "relative", maxWidth: "1400px", margin: "0 auto", padding: "clamp(40px,5vw,72px) clamp(16px,4vw,44px)" }}>
            <Link href="/projects" style={{ background: "none", border: "0", padding: "0", color: "#e3ab7c", fontSize: "13px", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px", fontFamily: "var(--font-sora), sans-serif", fontWeight: "600" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
              All Projects
            </Link>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "22px", flexWrap: "wrap" }}>
              <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#e3ab7c" }}>Projects</div>
              <span style={{ background: "#fbe9db", color: "#8f4f27", padding: "3px 10px", fontSize: "11.5px", fontFamily: "var(--font-sora), sans-serif", fontWeight: "600" }}>Flagship</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "800", fontSize: "clamp(28px,3.6vw,48px)", margin: "14px 0 0", color: "#fff", lineHeight: "1.1" }}>Lydian International – Amulsar Gold Project</h1>
            <div style={{ display: "flex", gap: "28px", flexWrap: "wrap", marginTop: "18px", fontSize: "14px", color: "#c3d0d4" }}>
              <span>Lydian International</span><span>Vayots Dzor, Armenia</span><span>2015 – 2018</span>
            </div>
          </div>
        </section>
        <section style={{ maxWidth: "1400px", margin: "0 auto", padding: "clamp(44px,6vw,72px) clamp(16px,4vw,44px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "clamp(28px,4vw,56px)" }}>
            <div>
              <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#B06533", marginBottom: "14px" }}>Overview</div>
              <p style={{ fontSize: "15.5px", lineHeight: "1.8", color: "#3a3f42", margin: "0 0 22px" }}>Amulsar Gold Project is a greenfield 225,000 gold ounces per annum mine in the Republic of Armenia. Praetorian provided supports ranging from feasibility review, assistance in preparation for financing, environmental and social impact assessment review, project management, construction management and precommissioning.</p>
              <p style={{ fontSize: "14.5px", lineHeight: "1.8", color: "#555c60", margin: "0" }}>Praetorian's unique skillsets were critical to the success of this project, including remote region construction expertise, experience with constructability reviews to capture cost savings, engineering interface for seamless integration with construction, construction driven-approach, early identification of contractor strengths and ability to breach gaps identified to ensure project success, staffing with Praetorian personnel with multidiscipline skillsets.</p>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#B06533", marginBottom: "14px" }}>Facilities</div>
              <ul style={{ fontSize: "14.5px", lineHeight: "1.9", color: "#555c60", margin: "0 0 28px", paddingLeft: "18px" }}>
                <li>Crusher Facility and Adsorption, Desorption and Recovery (ADR) Facility</li>
                <li>Heap Leach Facility (Ponds, Dams, Channels)</li>
                <li>Screening Facility, Water Channels, Ponds and Dams</li>
                <li>Explosive Storage and Accommodation Camps</li>
                <li>Conveyor Systems and Barren Rock Storage Facility</li>
                <li>Mine Shop and Related Facilities</li>
                <li>Site Services and Utilities (Water, Gas, Power) and Haul Roads</li>
              </ul>
              <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#B06533", marginBottom: "14px" }}>Praetorian's Scope</div>
              <p style={{ fontSize: "14.5px", lineHeight: "1.8", color: "#555c60", margin: "0" }}>Feasibility Review and Input for Project Development, Support for Financing, Support for ESIA, Development, Value Engineering, Procurement, Contracts Development and Administration, Cost Control, Scheduling, Constructability, Survey Data Management, Survey, Overall Project Management, Construction Management, Pre-commissioning and Operations Preparations Support.</p>
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