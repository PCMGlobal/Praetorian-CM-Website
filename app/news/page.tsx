import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "News and Insights | Praetorian Construction Management",
  description: "Perspectives from the owner's side of the table. Cost intelligence, project controls and safety leadership.",
};

export default function NewsPage() {
  return (
    <main>
      <div>
          <section style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: '0', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundImage: 'url(https://images.unsplash.com/photo-1444136393836-70a14068c669?w=1400&auto=format&fit=crop&q=80)' }}></div>
            <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(100deg,rgba(0,15,22,.9) 0%,rgba(0,25,36,.72) 48%,rgba(0,15,22,.4) 100%)' }}></div>
            <div style={{ position: 'relative', maxWidth: '1400px', margin: '0 auto', padding: 'clamp(40px,5vw,72px) clamp(16px,4vw,44px)' }}>
              <Link href="/" style={{ background: 'none', border: '0', padding: '0', color: '#e3ab7c', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
                Home
              </Link>
              <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#e3ab7c', marginTop: '22px' }}>News and Insights</div>
              <h1 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '800', fontSize: 'clamp(34px,4.6vw,58px)', margin: '14px 0 0', color: '#fff', lineHeight: '1.04', maxWidth: '26ch' }}>Perspectives from the owner's side of the table</h1>
              <p style={{ fontSize: '16.5px', lineHeight: '1.62', maxWidth: '62ch', color: '#c3d0d4', margin: '18px 0 0' }}>Praetorian's team writes about what they see on the ground, cost intelligence, project controls, safety leadership, and the application of AI to mining construction management.</p>
            </div>
          </section>
          <section style={{ maxWidth: '1400px', margin: '0 auto', padding: 'clamp(46px,6vw,84px) clamp(16px,4vw,44px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(20px,2.6vw,30px)' }}>
              <a data-reveal="" href="#" style={{ textDecoration: 'none', color: 'inherit', display: 'block', background: '#fff', boxShadow: '0 2px 14px rgba(0,20,30,.06)' }}>
                <div style={{ position: 'relative', height: '210px', overflow: 'hidden' }}><div style={{ position: 'absolute', inset: '0', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundImage: 'url(https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=800&auto=format&fit=crop&q=70)' }} ></div></div>
                <div style={{ padding: '20px 22px 24px' }}>
                  <span style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600', fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', color: '#B06533' }}>Cost Intelligence</span>
                  <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '20px', margin: '10px 0 8px', lineHeight: '1.25', color: '#003E52' }}>How AI is reshaping project cost benchmarking in global mining</h4>
                  <p style={{ fontSize: '13.5px', lineHeight: '1.6', color: '#5b6266', margin: '0 0 14px' }}>Praetorian IQ draws on Praetorian's own delivered project actuals to give owners a benchmark that consultants and contractors can't replicate. Here's how it works.</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12.5px', color: '#7d8288' }}><span>Aug 2026 · 5 min read</span><span style={{ color: '#B06533', fontWeight: '600' }}>Read</span></div>
                </div>
              </a>
              <a data-reveal="" href="#" style={{ textDecoration: 'none', color: 'inherit', display: 'block', background: '#fff', boxShadow: '0 2px 14px rgba(0,20,30,.06)' }}>
                <div style={{ position: 'relative', height: '210px', overflow: 'hidden' }}><div style={{ position: 'absolute', inset: '0', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundImage: 'url(https://images.unsplash.com/photo-1709489662983-3674d790b224?w=800&auto=format&fit=crop&q=70)' }} ></div></div>
                <div style={{ padding: '20px 22px 24px' }}>
                  <span style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600', fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', color: '#B06533' }}>Project Controls</span>
                  <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '20px', margin: '10px 0 8px', lineHeight: '1.25', color: '#003E52' }}>Five lessons from managing $1B+ projects in remote environments</h4>
                  <p style={{ fontSize: '13.5px', lineHeight: '1.6', color: '#5b6266', margin: '0 0 14px' }}>Remote logistics, contractor dependency, and communication latency create a category of risk that standard project controls frameworks weren't built for.</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12.5px', color: '#7d8288' }}><span>Aug 2026 · 7 min read</span><span style={{ color: '#B06533', fontWeight: '600' }}>Read</span></div>
                </div>
              </a>
              <a data-reveal="" href="#" style={{ textDecoration: 'none', color: 'inherit', display: 'block', background: '#fff', boxShadow: '0 2px 14px rgba(0,20,30,.06)' }}>
                <div style={{ position: 'relative', height: '210px', overflow: 'hidden' }}><div style={{ position: 'absolute', inset: '0', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundImage: 'url(https://images.unsplash.com/photo-1586161148512-64a1b3dac527?w=800&auto=format&fit=crop&q=70)' }} ></div></div>
                <div style={{ padding: '20px 22px 24px' }}>
                  <span style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600', fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', color: '#B06533' }}>Health and Safety</span>
                  <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '20px', margin: '10px 0 8px', lineHeight: '1.25', color: '#003E52' }}>HSSE leadership: why owner's team culture sets the site culture</h4>
                  <p style={{ fontSize: '13.5px', lineHeight: '1.6', color: '#5b6266', margin: '0 0 14px' }}>The contractor's safety record is heavily influenced by what the owner's team models and enforces from Day 1. Praetorian builds this expectation into every engagement.</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12.5px', color: '#7d8288' }}><span>Jul 2026 · 4 min read</span><span style={{ color: '#B06533', fontWeight: '600' }}>Read</span></div>
                </div>
              </a>
              <a data-reveal="" href="#" style={{ textDecoration: 'none', color: 'inherit', display: 'block', background: '#fff', boxShadow: '0 2px 14px rgba(0,20,30,.06)' }}>
                <div style={{ position: 'relative', height: '210px', overflow: 'hidden' }}><div style={{ position: 'absolute', inset: '0', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundImage: 'url(https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&auto=format&fit=crop&q=70)' }} ></div></div>
                <div style={{ padding: '20px 22px 24px' }}>
                  <span style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600', fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', color: '#B06533' }}>Praetorian IQ</span>
                  <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '20px', margin: '10px 0 8px', lineHeight: '1.25', color: '#003E52' }}>What document intelligence means for the mining owner's team</h4>
                  <p style={{ fontSize: '13.5px', lineHeight: '1.6', color: '#5b6266', margin: '0 0 14px' }}>Asking a natural language question across a project's full document set and getting a cited answer in seconds is no longer a prototype. It's live at Praetorian.</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12.5px', color: '#7d8288' }}><span>Jul 2026 · 6 min read</span><span style={{ color: '#B06533', fontWeight: '600' }}>Read</span></div>
                </div>
              </a>
              <a data-reveal="" href="#" style={{ textDecoration: 'none', color: 'inherit', display: 'block', background: '#fff', boxShadow: '0 2px 14px rgba(0,20,30,.06)' }}>
                <div style={{ position: 'relative', height: '210px', overflow: 'hidden' }}><div style={{ position: 'absolute', inset: '0', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundImage: 'url(https://images.unsplash.com/photo-1523848309072-c199db53f137?w=800&auto=format&fit=crop&q=70)' }} ></div></div>
                <div style={{ padding: '20px 22px 24px' }}>
                  <span style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600', fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', color: '#B06533' }}>Project Controls</span>
                  <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '20px', margin: '10px 0 8px', lineHeight: '1.25', color: '#003E52' }}>The commissioning gap: why turnover packages fail and how to fix them</h4>
                  <p style={{ fontSize: '13.5px', lineHeight: '1.6', color: '#5b6266', margin: '0 0 14px' }}>Punch list closure delays usually trace back to how turnover requirements were defined, or weren't, at execution start.</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12.5px', color: '#7d8288' }}><span>Jun 2026 · 8 min read</span><span style={{ color: '#B06533', fontWeight: '600' }}>Read</span></div>
                </div>
              </a>
              <a data-reveal="" href="#" style={{ textDecoration: 'none', color: 'inherit', display: 'block', background: '#fff', boxShadow: '0 2px 14px rgba(0,20,30,.06)' }}>
                <div style={{ position: 'relative', height: '210px', overflow: 'hidden' }}><div style={{ position: 'absolute', inset: '0', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundImage: 'url(https://images.unsplash.com/photo-1444136393836-70a14068c669?w=800&auto=format&fit=crop&q=70)' }} ></div></div>
                <div style={{ padding: '20px 22px 24px' }}>
                  <span style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600', fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', color: '#B06533' }}>Cost Intelligence</span>
                  <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '20px', margin: '10px 0 8px', lineHeight: '1.25', color: '#003E52' }}>Stage gate estimates: what the industry gets wrong about contingency</h4>
                  <p style={{ fontSize: '13.5px', lineHeight: '1.6', color: '#5b6266', margin: '0 0 14px' }}>Contingency isn't a buffer for optimism bias, most PFS-stage contingencies are set too low based on comparable project actuals.</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12.5px', color: '#7d8288' }}><span>May 2026 · 5 min read</span><span style={{ color: '#B06533', fontWeight: '600' }}>Read</span></div>
                </div>
              </a>
            </div>
            <div style={{ textAlign: 'center', marginTop: '46px', paddingTop: '34px', borderTop: '1px solid #e4e6e7' }}>
              <p style={{ fontSize: '13.5px', color: '#7d8288', margin: '0 0 16px' }}>News and Insights will be CMS-driven at launch, Femi and Araceli manage posts directly through Sanity. Placeholder articles shown for layout review.</p>
              <a href="mailto:info@praetoriancm.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#003E52', color: '#fff', textDecoration: 'none', minHeight: '44px', padding: '0 22px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600', fontSize: '14px' }}>Subscribe to Insights</a>
            </div>
          </section>
        </div>
    </main>
  );
}
