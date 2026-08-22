import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Praetorian IQ | AI-Powered Cost Intelligence",
  description: "Cost intelligence built on Microsoft Azure and Claude AI. Benchmarking, document intelligence and predictive analysis.",
};

export default function PraetorianIQPage() {
  return (
    <main>
      <div>
          <section style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: '0', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&auto=format&fit=crop&q=80)' }}></div>
            <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(100deg,rgba(0,15,22,.9) 0%,rgba(0,25,36,.72) 48%,rgba(0,15,22,.4) 100%)' }}></div>
            <div style={{ position: 'relative', maxWidth: '1400px', margin: '0 auto', padding: 'clamp(40px,5vw,72px) clamp(16px,4vw,44px) clamp(46px,6vw,80px)' }}>
              <Link href="/" style={{ background: 'none', border: '0', padding: '0', color: '#e3ab7c', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
                Home
              </Link>
              <div style={{ marginTop: '22px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', border: '1px solid rgba(176,101,51,.5)', padding: '6px 13px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600', fontSize: '12px', letterSpacing: '.16em', textTransform: 'uppercase', color: '#e3ab7c' }}>
                  <span style={{ width: '6px', height: '6px', background: '#B06533', animation: 'pcmlBlink 2s ease-in-out infinite' }}></span>Live Platform
                </div>
              </div>
              <h1 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '800', fontSize: 'clamp(34px,4.6vw,58px)', margin: '16px 0 0', color: '#fff', lineHeight: '1.04' }}>Praetorian IQ</h1>
              <p style={{ fontSize: '17px', lineHeight: '1.62', maxWidth: '60ch', color: '#c3d0d4', margin: '16px 0 0' }}>Cost intelligence built on Microsoft Azure and Claude AI, benchmarking, document intelligence and predictive analysis against Praetorian's own delivered project record.</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '0', marginTop: '38px', border: '1px solid rgba(255,255,255,.2)' }}>
                <div style={{ padding: '22px', borderRight: '1px solid rgba(255,255,255,.2)' }}>
                  <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '800', fontSize: '38px', lineHeight: '1', color: '#fff' }}>$3.6<span style={{ color: '#e3ab7c' }}>B+</span></div>
                  <div style={{ fontSize: '12.5px', letterSpacing: '.06em', textTransform: 'uppercase', color: '#9aa9ae', marginTop: '6px' }}>Capital in the benchmark set</div>
                </div>
                <div style={{ padding: '22px', borderRight: '1px solid rgba(255,255,255,.2)' }}>
                  <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '800', fontSize: '38px', lineHeight: '1', color: '#fff' }}>40<span style={{ color: '#e3ab7c' }}>+</span></div>
                  <div style={{ fontSize: '12.5px', letterSpacing: '.06em', textTransform: 'uppercase', color: '#9aa9ae', marginTop: '6px' }}>Projects referenced</div>
                </div>
                <div style={{ padding: '22px' }}>
                  <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '800', fontSize: '38px', lineHeight: '1', color: '#fff' }}>Azure</div>
                  <div style={{ fontSize: '12.5px', letterSpacing: '.06em', textTransform: 'uppercase', color: '#9aa9ae', marginTop: '6px' }}>Hosted &amp; access controlled</div>
                </div>
              </div>
            </div>
          </section>

          <section style={{ maxWidth: '1400px', margin: '0 auto', padding: 'clamp(44px,6vw,78px) clamp(16px,4vw,44px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(290px,1fr))', gap: 'clamp(20px,2.6vw,30px)' }}>
              <div style={{ background: '#fff', boxShadow: '0 2px 14px rgba(0,20,30,.06)', padding: '26px 24px', borderTop: '3px solid #B06533' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#003E52" strokeWidth="1.6"><path d="M3 3v18h18" /><path d="M7 16v-5M12 16V7M17 16v-8" /></svg>
                <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '21px', margin: '16px 0 8px', color: '#003E52' }}>Cost Benchmarking</h4>
                <p style={{ fontSize: '14px', lineHeight: '1.6', margin: '0', color: '#5b6266' }}>Compare a live estimate against delivered actuals by cost category, stage gate and region, accuracy and variance in one view.</p>
              </div>
              <div style={{ background: '#fff', boxShadow: '0 2px 14px rgba(0,20,30,.06)', padding: '26px 24px', borderTop: '3px solid #B06533' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#003E52" strokeWidth="1.6"><circle cx="11" cy="11" r="7" /><path d="m16.5 16.5 4.5 4.5" /></svg>
                <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '21px', margin: '16px 0 8px', color: '#003E52' }}>Document Intelligence</h4>
                <p style={{ fontSize: '14px', lineHeight: '1.6', margin: '0', color: '#5b6266' }}>Ask questions across contracts, estimates and reports in natural language, with citations back to the source document.</p>
              </div>
              <div style={{ background: '#fff', boxShadow: '0 2px 14px rgba(0,20,30,.06)', padding: '26px 24px', borderTop: '3px solid #B06533' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#003E52" strokeWidth="1.6"><path d="m3 17 6-6 4 4 8-8" /><path d="M15 7h6v6" /></svg>
                <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '21px', margin: '16px 0 8px', color: '#003E52' }}>Predictive Analysis</h4>
                <p style={{ fontSize: '14px', lineHeight: '1.6', margin: '0', color: '#5b6266' }}>Flag cost outliers and schedule drift against comparable projects before they show up in the monthly report.</p>
              </div>
            </div>

            <div style={{ marginTop: 'clamp(36px,4vw,58px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(24px,3vw,44px)', alignItems: 'start' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#B06533' }}>Estimate accuracy</div>
                <h2 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: 'clamp(26px,3vw,36px)', margin: '12px 0 22px', color: '#003E52' }}>Benchmarked by stage gate</h2>
                <div style={{ display: 'grid', gap: '16px' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13.5px', marginBottom: '6px' }}><span>Order of magnitude</span><span style={{ color: '#8b9095' }}>±30–50%</span></div>
                    <div style={{ height: '8px', background: '#eceeee' }}><div style={{ width: '32%', height: '100%', background: '#d9a878' }}></div></div>
                  </div>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13.5px', marginBottom: '6px' }}><span>Pre-feasibility</span><span style={{ color: '#8b9095' }}>±20–30%</span></div>
                    <div style={{ height: '8px', background: '#eceeee' }}><div style={{ width: '52%', height: '100%', background: '#c58e5b' }}></div></div>
                  </div>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13.5px', marginBottom: '6px' }}><span>Feasibility</span><span style={{ color: '#8b9095' }}>±10–15%</span></div>
                    <div style={{ height: '8px', background: '#eceeee' }}><div style={{ width: '74%', height: '100%', background: '#B06533' }}></div></div>
                  </div>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13.5px', marginBottom: '6px' }}><span>Control estimate</span><span style={{ color: '#8b9095' }}>±5–10%</span></div>
                    <div style={{ height: '8px', background: '#eceeee' }}><div style={{ width: '90%', height: '100%', background: '#003E52' }}></div></div>
                  </div>
                </div>
                <p style={{ fontSize: '12.5px', marginTop: '18px', color: '#8b9095' }}>Indicative ranges shown for layout review, platform values are drawn from the confirmed project set.</p>
              </div>
              <div style={{ border: '1px solid rgba(0,62,82,.18)', background: '#003E52', color: '#e9eef0' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '13px 16px', borderBottom: '1px solid rgba(255,255,255,.16)' }}>
                  <span style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '15px', color: '#fff' }}>AI Insights</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', color: '#e3ab7c' }}>
                    <span style={{ width: '6px', height: '6px', background: '#e3ab7c', animation: 'pcmlBlink 1.6s ease-in-out infinite' }}></span>Claude · Live
                  </span>
                </div>
                <div style={{ padding: '18px 16px 20px' }}>
                  <div style={{ fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', color: '#7d8b90', marginBottom: '12px' }}>Try asking</div>
                  <div style={{ display: 'grid', gap: '9px' }}>
                    <span style={{ border: '1px solid rgba(176,101,51,.4)', padding: '9px 12px', fontSize: '13px', color: '#d7dfe1' }}>"Which estimate has the highest total value?"</span>
                    <span style={{ border: '1px solid rgba(176,101,51,.4)', padding: '9px 12px', fontSize: '13px', color: '#d7dfe1' }}>"Compare accuracy across all stage gates"</span>
                    <span style={{ border: '1px solid rgba(176,101,51,.4)', padding: '9px 12px', fontSize: '13px', color: '#d7dfe1' }}>"Amulsar actuals vs IFC estimate difference"</span>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', marginTop: '18px' }}>
                    <input placeholder="Ask Praetorian IQ…" aria-label="Ask Praetorian IQ" style={{ flex: '1', background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.28)', color: '#fff', minHeight: '42px', padding: '0 12px', font: 'inherit' }} />
                    <button type="button" style={{ background: '#B06533', color: '#fff', border: '0', minHeight: '42px', padding: '0 16px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600', cursor: 'pointer' }}>Ask</button>
                  </div>
                  <div style={{ marginTop: '18px', paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,.12)', fontSize: '11.5px', color: '#6b7a80', lineHeight: '1.6' }}>
                    Demonstration surface only. Disclosure level: platform name and capabilities.
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    </main>
  );
}
