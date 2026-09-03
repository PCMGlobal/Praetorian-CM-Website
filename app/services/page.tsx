import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Praetorian Construction Management",
  description: "Three service families, one integrated owner's team. Engineering support, project services and operational consulting.",
};

export default function ServicesPage() {
  return (
    <main>
      <div>
          <section style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: '0', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundImage: 'url(https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1400&auto=format&fit=crop&q=80)' }}></div>
            <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(100deg,rgba(0,15,22,.9) 0%,rgba(0,25,36,.72) 48%,rgba(0,15,22,.4) 100%)' }}></div>
            <div style={{ position: 'relative', maxWidth: '1400px', margin: '0 auto', padding: 'clamp(40px,5vw,72px) clamp(16px,4vw,44px)' }}>
              <Link href="/" style={{ background: 'none', border: '0', padding: '0', color: '#e3ab7c', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
                Home
              </Link>
              <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#e3ab7c', marginTop: '22px' }}>Services</div>
              <h1 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '800', fontSize: 'clamp(34px,4.6vw,58px)', margin: '14px 0 0', color: '#fff', lineHeight: '1.04', maxWidth: '22ch' }}>Three service families, one integrated owner's team</h1>
              <p style={{ fontSize: '16.5px', lineHeight: '1.62', maxWidth: '62ch', color: '#c3d0d4', margin: '18px 0 0' }}>Praetorian scales from a single embedded specialist to a full owner's project management office. Every engagement is staffed against your stage gates, not ours.</p>
            </div>
          </section>

          <section style={{ maxWidth: '1400px', margin: '0 auto', padding: 'clamp(44px,6vw,78px) clamp(16px,4vw,44px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '0', borderBottom: '1px solid #e4e6e7' }}>
            <div id="owners-team-support" style={{ padding: '0 clamp(20px,2.4vw,32px) 34px 0', borderRight: '1px solid #e4e6e7', scrollMarginTop: '100px' }}>
              <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '800', fontSize: '13px', letterSpacing: '.2em', color: '#B06533' }}>01</div>
              <h3 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '26px', margin: '12px 0 10px', color: '#003E52' }}>Owner's Team Support</h3>
              <p style={{ fontSize: '14.5px', lineHeight: '1.6', color: '#5b6266', margin: '0 0 18px' }}>Embedded directly in your team, from study through handover.</p>
              <div style={{ display: 'grid', gap: '0', borderTop: '1px solid #e4e6e7' }}>
                <div style={{ padding: '11px 0', borderBottom: '1px solid #e4e6e7', fontSize: '14px', display: 'flex', justifyContent: 'space-between', gap: '10px', color: '#1c2226' }}>Study Development &amp; Planning</div>
                <div style={{ padding: '11px 0', borderBottom: '1px solid #e4e6e7', fontSize: '14px', display: 'flex', justifyContent: 'space-between', gap: '10px', color: '#1c2226' }}>Project Execution Readiness</div>
                <div style={{ padding: '11px 0', borderBottom: '1px solid #e4e6e7', fontSize: '14px', display: 'flex', justifyContent: 'space-between', gap: '10px', color: '#1c2226' }}>Project Execution Support</div>
                <div style={{ padding: '11px 0', borderBottom: '1px solid #e4e6e7', fontSize: '14px', display: 'flex', justifyContent: 'space-between', gap: '10px', color: '#1c2226' }}>Project Due Diligence</div>
                <div style={{ padding: '11px 0', borderBottom: '1px solid #e4e6e7', fontSize: '14px', display: 'flex', justifyContent: 'space-between', gap: '10px', color: '#1c2226' }}>Health, Safety, Security, and Environment Oversight</div>
                <div style={{ padding: '11px 0', borderBottom: '1px solid #e4e6e7', fontSize: '14px', display: 'flex', justifyContent: 'space-between', gap: '10px', color: '#1c2226' }}>Shutdown &amp; Turnaround</div>
              </div>
            </div>
            <div id="project-services" style={{ padding: '0 clamp(20px,2.4vw,32px) 34px', borderRight: '1px solid #e4e6e7', scrollMarginTop: '100px' }}>
              <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '800', fontSize: '13px', letterSpacing: '.2em', color: '#B06533' }}>02</div>
              <h3 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '26px', margin: '12px 0 10px', color: '#003E52' }}>Project Services</h3>
              <p style={{ fontSize: '14.5px', lineHeight: '1.6', color: '#5b6266', margin: '0 0 18px' }}>Technical and commercial controls across the full project lifecycle.</p>
              <div style={{ display: 'grid', gap: '0', borderTop: '1px solid #e4e6e7' }}>
                <div style={{ padding: '11px 0', borderBottom: '1px solid #e4e6e7', fontSize: '14px', display: 'flex', justifyContent: 'space-between', gap: '10px', color: '#1c2226' }}>Procurement &amp; Contracts</div>
                <div style={{ padding: '11px 0', borderBottom: '1px solid #e4e6e7', fontSize: '14px', display: 'flex', justifyContent: 'space-between', gap: '10px', color: '#1c2226' }}>Cost Control &amp; Estimating</div>
                <div style={{ padding: '11px 0', borderBottom: '1px solid #e4e6e7', fontSize: '14px', display: 'flex', justifyContent: 'space-between', gap: '10px', color: '#1c2226' }}>Planning &amp; Scheduling</div>
                <div style={{ padding: '11px 0', borderBottom: '1px solid #e4e6e7', fontSize: '14px', display: 'flex', justifyContent: 'space-between', gap: '10px', color: '#1c2226' }}>Document Management</div>
                <div style={{ padding: '11px 0', borderBottom: '1px solid #e4e6e7', fontSize: '14px', display: 'flex', justifyContent: 'space-between', gap: '10px', color: '#1c2226' }}>Risk Management</div>
              </div>
            </div>
            <div id="operational-consulting" style={{ padding: '0 0 34px clamp(20px,2.4vw,32px)', scrollMarginTop: '100px' }}>
              <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '800', fontSize: '13px', letterSpacing: '.2em', color: '#B06533' }}>03</div>
              <h3 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '26px', margin: '12px 0 10px', color: '#003E52' }}>Operational Consulting</h3>
              <p style={{ fontSize: '14.5px', lineHeight: '1.6', color: '#5b6266', margin: '0 0 18px' }}>Long-term operational performance after the project is handed over.</p>
              <div style={{ display: 'grid', gap: '0', borderTop: '1px solid #e4e6e7' }}>
                <div style={{ padding: '11px 0', borderBottom: '1px solid #e4e6e7', fontSize: '14px', display: 'flex', justifyContent: 'space-between', gap: '10px', color: '#1c2226' }}>Leadership Alignment</div>
                <div style={{ padding: '11px 0', borderBottom: '1px solid #e4e6e7', fontSize: '14px', display: 'flex', justifyContent: 'space-between', gap: '10px', color: '#1c2226' }}>Change Management</div>
                <div style={{ padding: '11px 0', borderBottom: '1px solid #e4e6e7', fontSize: '14px', display: 'flex', justifyContent: 'space-between', gap: '10px', color: '#1c2226' }}>Asset Integrity</div>
                <div style={{ padding: '11px 0', borderBottom: '1px solid #e4e6e7', fontSize: '14px', display: 'flex', justifyContent: 'space-between', gap: '10px', color: '#1c2226' }}>Asset Optimisation</div>
                <div style={{ padding: '11px 0', borderBottom: '1px solid #e4e6e7', fontSize: '14px', display: 'flex', justifyContent: 'space-between', gap: '10px', color: '#1c2226' }}>Process Safety Management</div>
                
              </div>
            </div>
          </section>

          <section style={{ maxWidth: '1400px', margin: '0 auto', padding: 'clamp(44px,6vw,78px) clamp(16px,4vw,44px)' }}>
            <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#B06533' }}>Coverage by phase</div>
            <h2 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: 'clamp(28px,3.2vw,40px)', margin: '12px 0 26px', color: '#003E52' }}>Where we plug into your stage gates</h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', minWidth: '640px' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #e4e6e7' }}><th style={{ textAlign: 'left', padding: '10px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: '#5b6266' }}>Phase</th><th style={{ textAlign: 'left', padding: '10px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: '#5b6266' }}>Scope</th><th style={{ textAlign: 'left', padding: '10px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: '#5b6266' }}>Typical team</th><th style={{ textAlign: 'left', padding: '10px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: '#5b6266' }}>Deliverable</th></tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '10px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '16px', color: '#003E52' }}>Concept / PEA</td><td style={{ padding: '10px' }}>Study management, options analysis</td><td style={{ padding: '10px' }}>1–2 specialists</td><td style={{ padding: '10px' }}>Study framework, cost basis</td></tr>
                  <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '10px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '16px', color: '#003E52' }}>Pre-feasibility</td><td style={{ padding: '10px' }}>Estimate review, constructability</td><td style={{ padding: '10px' }}>2–4</td><td style={{ padding: '10px' }}>PFS cost &amp; schedule basis</td></tr>
                  <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '10px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '16px', color: '#003E52' }}>Feasibility</td><td style={{ padding: '10px' }}>Execution readiness, contracting strategy</td><td style={{ padding: '10px' }}>4–8</td><td style={{ padding: '10px' }}>Execution plan, tender packages</td></tr>
                  <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '10px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '16px', color: '#003E52' }}>Execution</td><td style={{ padding: '10px' }}>Full owner's team, controls, HSE oversight</td><td style={{ padding: '10px' }}>8–30+</td><td style={{ padding: '10px' }}>Monthly cost/schedule reporting</td></tr>
                  <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '10px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '16px', color: '#003E52' }}>Commissioning</td><td style={{ padding: '10px' }}>QA/QC, turnover, ramp-up support</td><td style={{ padding: '10px' }}>4–10</td><td style={{ padding: '10px' }}>Turnover packages, punch closure</td></tr>
                  <tr><td style={{ padding: '10px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '16px', color: '#003E52' }}>Operations</td><td style={{ padding: '10px' }}>Asset optimisation, process safety</td><td style={{ padding: '10px' }}>1–4</td><td style={{ padding: '10px' }}>Performance improvement plan</td></tr>
          
                  <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '10px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '16px', color: '#003E52' }}>IAMGold - Cote Gold</td><td style={{ padding: '10px' }}>Ontario, Canada</td><td style={{ padding: '10px' }}>IAMGold</td><td style={{ padding: '10px' }}>Owner's team, execution oversight</td><td style={{ padding: '10px' }}><span style={{ background: '#eceeee', color: '#4a4e50', padding: '3px 10px', fontSize: '11.5px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600' }}>Execution</span></td></tr>
                  <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '10px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '16px', color: '#003E52' }}>Anglo American - Quellaveco</td><td style={{ padding: '10px' }}>Moquegua, Peru</td><td style={{ padding: '10px' }}>Anglo American</td><td style={{ padding: '10px' }}>Copper mine owner's team</td><td style={{ padding: '10px' }}><span style={{ background: '#eceeee', color: '#4a4e50', padding: '3px 10px', fontSize: '11.5px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600' }}>Commissioned</span></td></tr>
                  <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '10px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '16px', color: '#003E52' }}>Teck - Elk Valley</td><td style={{ padding: '10px' }}>BC, Canada</td><td style={{ padding: '10px' }}>Teck Resources</td><td style={{ padding: '10px' }}>Steelmaking coal operations support</td><td style={{ padding: '10px' }}><span style={{ background: '#eceeee', color: '#4a4e50', padding: '3px 10px', fontSize: '11.5px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600' }}>Operations</span></td></tr>
                  <tr><td style={{ padding: '10px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '16px', color: '#003E52' }}>Newmont - Phoenix Mill</td><td style={{ padding: '10px' }}>Nevada, USA</td><td style={{ padding: '10px' }}>Newmont</td><td style={{ padding: '10px' }}>Mill expansion, project controls</td><td style={{ padding: '10px' }}><span style={{ background: '#eceeee', color: '#4a4e50', padding: '3px 10px', fontSize: '11.5px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600' }}>Execution</span></td></tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
    </main>
  );
}
