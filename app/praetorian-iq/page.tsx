import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Praetorian IQ | Proprietary Cost Intelligence Platform",
  description: "Praetorian IQ is our proprietary cost intelligence platform built on Microsoft Azure and Claude AI, embedded in every client engagement.",
};

export default function PraetorianIQPage() {
  return (
    <main>
      <div>
        <section style={{ position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: "0", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundImage: "url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&auto=format&fit=crop&q=80)" }}></div>
          <div style={{ position: "absolute", inset: "0", background: "linear-gradient(100deg,rgba(0,15,22,.9) 0%,rgba(0,25,36,.72) 48%,rgba(0,15,22,.4) 100%)" }}></div>
          <div style={{ position: "relative", maxWidth: "1400px", margin: "0 auto", padding: "clamp(40px,5vw,72px) clamp(16px,4vw,44px) clamp(46px,6vw,80px)" }}>
            <Link href="/" style={{ background: "none", border: "0", padding: "0", color: "#e3ab7c", fontSize: "13px", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px", fontFamily: "var(--font-sora), sans-serif", fontWeight: "600" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
              Home
            </Link>
            <div style={{ marginTop: "22px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "9px", border: "1px solid rgba(176,101,51,.5)", padding: "6px 13px", fontFamily: "var(--font-sora), sans-serif", fontWeight: "600", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "#e3ab7c" }}>
                <span style={{ width: "6px", height: "6px", background: "#B06533" }}></span>Proprietary Platform
              </div>
            </div>
            <h1 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "800", fontSize: "clamp(34px,4.6vw,58px)", margin: "16px 0 0", color: "#fff", lineHeight: "1.04" }}>Praetorian IQ</h1>
            <p style={{ fontSize: "17px", lineHeight: "1.62", maxWidth: "62ch", color: "#c3d0d4", margin: "16px 0 0" }}>Praetorian IQ is our proprietary cost intelligence platform, built on Microsoft Azure and Claude AI. Embedded in every engagement, it gives our teams and their clients real-time benchmarking, document intelligence and predictive analysis drawn from Praetorian's own delivered project record.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "0", marginTop: "38px", border: "1px solid rgba(255,255,255,.2)" }}>
              <div style={{ padding: "22px", borderRight: "1px solid rgba(255,255,255,.2)" }}>
                <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "800", fontSize: "38px", lineHeight: "1", color: "#fff" }}>40<span style={{ color: "#e3ab7c" }}>+</span></div>
                <div style={{ fontSize: "12.5px", letterSpacing: ".06em", textTransform: "uppercase", color: "#9aa9ae", marginTop: "6px" }}>Projects referenced</div>
              </div>
              <div style={{ padding: "22px", borderRight: "1px solid rgba(255,255,255,.2)" }}>
                <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "800", fontSize: "38px", lineHeight: "1", color: "#fff" }}>20<span style={{ color: "#e3ab7c" }}>+</span></div>
                <div style={{ fontSize: "12.5px", letterSpacing: ".06em", textTransform: "uppercase", color: "#9aa9ae", marginTop: "6px" }}>Years of delivered project data</div>
              </div>
              <div style={{ padding: "22px" }}>
                <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "800", fontSize: "38px", lineHeight: "1", color: "#fff" }}>Azure</div>
                <div style={{ fontSize: "12.5px", letterSpacing: ".06em", textTransform: "uppercase", color: "#9aa9ae", marginTop: "6px" }}>Hosted &amp; access controlled</div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ maxWidth: "1400px", margin: "0 auto", padding: "clamp(44px,6vw,78px) clamp(16px,4vw,44px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))", gap: "clamp(20px,2.6vw,30px)" }}>
            <div style={{ background: "#fff", boxShadow: "0 2px 14px rgba(0,20,30,.06)", padding: "26px 24px", borderTop: "3px solid #B06533" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#003E52" strokeWidth="1.6"><path d="M3 3v18h18" /><path d="M7 16v-5M12 16V7M17 16v-8" /></svg>
              <h4 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "21px", margin: "16px 0 8px", color: "#003E52" }}>Cost Benchmarking</h4>
              <p style={{ fontSize: "14px", lineHeight: "1.6", margin: "0", color: "#5b6266" }}>Compare a live estimate against delivered actuals by cost category, stage gate and region. Accuracy and variance visible in one view, drawn from Praetorian's own project record.</p>
            </div>
            <div style={{ background: "#fff", boxShadow: "0 2px 14px rgba(0,20,30,.06)", padding: "26px 24px", borderTop: "3px solid #B06533" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#003E52" strokeWidth="1.6"><circle cx="11" cy="11" r="7" /><path d="m16.5 16.5 4.5 4.5" /></svg>
              <h4 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "21px", margin: "16px 0 8px", color: "#003E52" }}>Document Intelligence</h4>
              <p style={{ fontSize: "14px", lineHeight: "1.6", margin: "0", color: "#5b6266" }}>Ask questions across contracts, estimates and reports in natural language, with citations back to the source document. No manual searching through folders.</p>
            </div>
            <div style={{ background: "#fff", boxShadow: "0 2px 14px rgba(0,20,30,.06)", padding: "26px 24px", borderTop: "3px solid #B06533" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#003E52" strokeWidth="1.6"><path d="m3 17 6-6 4 4 8-8" /><path d="M15 7h6v6" /></svg>
              <h4 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "21px", margin: "16px 0 8px", color: "#003E52" }}>Predictive Analysis</h4>
              <p style={{ fontSize: "14px", lineHeight: "1.6", margin: "0", color: "#5b6266" }}>Flag cost outliers and schedule drift against comparable projects before they appear in the monthly report. Early signals that protect the owner's position.</p>
            </div>
          </div>
        </section>

        <section style={{ background: "#f7f7f7", padding: "clamp(44px,6vw,78px) 0" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 clamp(16px,4vw,44px)" }}>
            <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#B06533", marginBottom: "12px" }}>The data behind it</div>
            <h2 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "clamp(28px,3.2vw,40px)", margin: "0 0 20px", color: "#003E52" }}>Built on Praetorian's Delivered Project Record</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "clamp(24px,3vw,44px)", alignItems: "start" }}>
              <div>
                <p style={{ fontSize: "15.5px", lineHeight: "1.75", color: "#555c60", margin: "0 0 18px" }}>Praetorian IQ draws on data from projects our teams have actually delivered. The benchmark is not theoretical -- it reflects real cost outcomes, real stage gate accuracy, and real contractor performance from mining and industrial construction projects across North America, South America and Eurasia.</p>
                <p style={{ fontSize: "15.5px", lineHeight: "1.75", color: "#555c60", margin: "0" }}>Access to Praetorian IQ is embedded in our client engagements. It is not a standalone subscription product. When you engage Praetorian, you engage the platform.</p>
              </div>
              <div style={{ display: "grid", gap: "0", border: "1px solid #e4e6e7" }}>
                <div style={{ padding: "28px 26px", borderBottom: "1px solid #e4e6e7", display: "flex", gap: "20px", alignItems: "flex-start" }}>
                  <div style={{ flexShrink: "0", width: "42px", height: "42px", background: "#003E52", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e3ab7c" strokeWidth="1.6"><path d="M3 3v18h18" /><path d="M7 16v-5M12 16V7M17 16v-8" /></svg>
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "17px", color: "#003E52", margin: "0 0 6px" }}>40+ Projects across 6 countries</h4>
                    <p style={{ fontSize: "13.5px", lineHeight: "1.6", color: "#555c60", margin: "0" }}>Real delivered project data from mining and industrial construction across North America, South America and Eurasia.</p>
                  </div>
                </div>
                <div style={{ padding: "28px 26px", borderBottom: "1px solid #e4e6e7", display: "flex", gap: "20px", alignItems: "flex-start" }}>
                  <div style={{ flexShrink: "0", width: "42px", height: "42px", background: "#003E52", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e3ab7c" strokeWidth="1.6"><circle cx="12" cy="12" r="9" /><path d="M12 8v4l3 3" /></svg>
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "17px", color: "#003E52", margin: "0 0 6px" }}>20+ Years of delivered project data</h4>
                    <p style={{ fontSize: "13.5px", lineHeight: "1.6", color: "#555c60", margin: "0" }}>Two decades of cost outcomes, stage gate performance and contractor data built into the benchmark set.</p>
                  </div>
                </div>
                <div style={{ padding: "28px 26px", display: "flex", gap: "20px", alignItems: "flex-start" }}>
                  <div style={{ flexShrink: "0", width: "42px", height: "42px", background: "#003E52", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e3ab7c" strokeWidth="1.6"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "17px", color: "#003E52", margin: "0 0 6px" }}>Azure hosted and access controlled</h4>
                    <p style={{ fontSize: "13.5px", lineHeight: "1.6", color: "#555c60", margin: "0" }}>Built on Microsoft Azure with enterprise-grade security. Access is managed and controlled -- client data stays protected.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ background: "#003E52", padding: "clamp(44px,6vw,78px) 0" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 clamp(16px,4vw,44px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "clamp(24px,3vw,44px)", alignItems: "center" }}>
            <div>
              <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#e3ab7c", marginBottom: "12px" }}>Included in every engagement</div>
              <h2 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "clamp(28px,3.2vw,40px)", margin: "0 0 20px", color: "#fff" }}>How It Works For You</h2>
              <p style={{ fontSize: "15.5px", lineHeight: "1.75", color: "#c3d0d4", margin: "0 0 18px" }}>Praetorian IQ is not a product you subscribe to separately. It is part of how Praetorian works. When our team is embedded in your project, the platform is working in the background -- benchmarking your estimates, analysing your documents, and flagging risks before they become problems.</p>
              <p style={{ fontSize: "15.5px", lineHeight: "1.75", color: "#c3d0d4", margin: "0 0 28px" }}>No other construction management firm in the mining sector has built this capability from their own delivered project data. It is a genuine differentiator, and it comes standard with every Praetorian engagement.</p>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#B06533", color: "#fff", textDecoration: "none", minHeight: "46px", padding: "0 22px", fontFamily: "var(--font-sora), sans-serif", fontWeight: "600", fontSize: "14px" }}>
                Speak with Our Team
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
            </div>
            <div style={{ display: "grid", gap: "16px" }}>
              <div style={{ background: "rgba(255,255,255,.06)", borderLeft: "3px solid #B06533", padding: "22px 24px" }}>
                <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "15px", color: "#fff", marginBottom: "8px" }}>Your estimates, benchmarked in real time</div>
                <div style={{ fontSize: "13.5px", color: "#9aa9ae", lineHeight: "1.6" }}>As your project develops, Praetorian IQ compares your cost position against comparable delivered projects at the same stage gate.</div>
              </div>
              <div style={{ background: "rgba(255,255,255,.06)", borderLeft: "3px solid #B06533", padding: "22px 24px" }}>
                <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "15px", color: "#fff", marginBottom: "8px" }}>Your documents, instantly searchable</div>
                <div style={{ fontSize: "13.5px", color: "#9aa9ae", lineHeight: "1.6" }}>Contracts, estimates, reports and correspondence are indexed and searchable in natural language -- no more hunting through shared drives.</div>
              </div>
              <div style={{ background: "rgba(255,255,255,.06)", borderLeft: "3px solid #B06533", padding: "22px 24px" }}>
                <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "15px", color: "#fff", marginBottom: "8px" }}>Risk flagged before it becomes a problem</div>
                <div style={{ fontSize: "13.5px", color: "#9aa9ae", lineHeight: "1.6" }}>Cost outliers and schedule drift are identified against the benchmark before they show up in a monthly report -- giving the owner time to act.</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}