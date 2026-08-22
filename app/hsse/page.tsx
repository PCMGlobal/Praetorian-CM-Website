import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HSSE | Praetorian Construction Management",
  description: "Zero harm is the only acceptable outcome. Praetorian embeds HSSE leadership directly into the owner's team.",
};

export default function HSSEPage() {
  return (
    <main>
      <div>
          <section style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: '0', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundImage: 'url(https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1400&auto=format&fit=crop&q=80)' }}></div>
            <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(100deg,rgba(0,15,22,.9) 0%,rgba(0,25,36,.72) 48%,rgba(0,15,22,.4) 100%)' }}></div>
            <div style={{ position: 'relative', maxWidth: '1400px', margin: '0 auto', padding: 'clamp(40px,5vw,72px) clamp(16px,4vw,44px)' }}>
              <Link href="/" style={{ background: 'none', border: '0', padding: '0', color: '#e3ab7c', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
                Home
              </Link>
              <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#e3ab7c', marginTop: '22px' }}>Health, Safety, Security, and Environment</div>
              <h1 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '800', fontSize: 'clamp(34px,4.6vw,58px)', margin: '14px 0 0', color: '#fff', lineHeight: '1.04', maxWidth: '24ch' }}>Zero harm isn't a target. It's the only acceptable outcome.</h1>
              <p style={{ fontSize: '16.5px', lineHeight: '1.62', maxWidth: '62ch', color: '#c3d0d4', margin: '18px 0 0' }}>Praetorian embeds HSSE leadership directly into the owner's team. Safety culture starts at the top, and that means us.</p>
            </div>
          </section>
   
          <section style={{ maxWidth: '1400px', margin: '0 auto', padding: 'clamp(46px,6vw,84px) clamp(16px,4vw,44px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'clamp(20px,2.6vw,32px)' }}>
              <div data-reveal="" style={{ background: '#fff', padding: '26px 24px', boxShadow: '0 2px 14px rgba(0,20,30,.06)', borderTop: '3px solid #B06533' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#003E52" strokeWidth="1.6"><path d="M12 3l8 3v6c0 5-3.4 8.2-8 9-4.6-.8-8-4-8-9V6l8-3Z" /><path d="m9 12 2 2 4-4" /></svg>
                <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '20px', margin: '16px 0 8px', color: '#003E52' }}>H&amp;S Policy Statement</h4>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#5b6266', margin: '0' }}>Our policy is unambiguous: no task is so urgent that it cannot be performed safely. Every Praetorian engagement begins with a documented safety framework aligned to the owner's standards and the jurisdiction's regulatory requirements.</p>
              </div>
              <div data-reveal="" style={{ background: '#fff', padding: '26px 24px', boxShadow: '0 2px 14px rgba(0,20,30,.06)', borderTop: '3px solid #B06533' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#003E52" strokeWidth="1.6"><circle cx="12" cy="12" r="9" /><path d="M12 8v4l3 3" /></svg>
                <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '20px', margin: '16px 0 8px', color: '#003E52' }}>Project HSSE Approach</h4>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#5b6266', margin: '0' }}>From pre-mobilisation planning through final demobilisation, Praetorian integrates HSSE into every stage gate. Our field leaders run toolbox talks, hazard assessments, and incident investigations as core delivery.</p>
              </div>
              <div data-reveal="" style={{ background: '#fff', padding: '26px 24px', boxShadow: '0 2px 14px rgba(0,20,30,.06)', borderTop: '3px solid #B06533' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#003E52" strokeWidth="1.6"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '20px', margin: '16px 0 8px', color: '#003E52' }}>Owner's Team Culture</h4>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#5b6266', margin: '0' }}>Site culture follows the owner's team lead. Praetorian personnel are expected to stop unsafe work, engage contractors directly, and escalate immediately, from first induction to handover.</p>
              </div>
              <div data-reveal="" style={{ background: '#fff', padding: '26px 24px', boxShadow: '0 2px 14px rgba(0,20,30,.06)', borderTop: '3px solid #B06533' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#003E52" strokeWidth="1.6"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
                <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '20px', margin: '16px 0 8px', color: '#003E52' }}>Regulatory Compliance</h4>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#5b6266', margin: '0' }}>Praetorian operates across multiple jurisdictions, Canada, USA, South America, and Eurasia. Our teams understand the local regulatory frameworks and ensure execution meets or exceeds applicable mining safety codes.</p>
              </div>
              <div data-reveal="" style={{ background: '#fff', padding: '26px 24px', boxShadow: '0 2px 14px rgba(0,20,30,.06)', borderTop: '3px solid #B06533' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#003E52" strokeWidth="1.6"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" /><path d="M14 2v6h6M9 13h6M9 17h4" /></svg>
                <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '20px', margin: '16px 0 8px', color: '#003E52' }}>Incident Management</h4>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#5b6266', margin: '0' }}>When incidents occur, Praetorian leads root cause analysis, corrective action tracking, and lessons-learned dissemination. Transparency with the owner is non-negotiable.</p>
              </div>
              <div data-reveal="" style={{ background: '#fff', padding: '26px 24px', boxShadow: '0 2px 14px rgba(0,20,30,.06)', borderTop: '3px solid #B06533' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#003E52" strokeWidth="1.6"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" /><path d="M9 22V12h6v10" /></svg>
                <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '20px', margin: '16px 0 8px', color: '#003E52' }}>Environment &amp; Community</h4>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#5b6266', margin: '0' }}>Environmental stewardship and community engagement are embedded in our HSSE framework. Praetorian teams maintain the social licence to operate throughout the project lifecycle.</p>
              </div>
            </div>
          </section>
          <section style={{ background: '#003E52' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(420px,1fr))' }}>
              <div style={{ position: 'relative', minHeight: '400px', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: '0', animation: 'pcmlDrift 28s ease-in-out infinite alternate' }}>
                  <div style={{ position: 'absolute', inset: '0', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundImage: 'url(https://images.unsplash.com/photo-1586161148512-64a1b3dac527?w=1200&auto=format&fit=crop&q=80)' }} ></div>
                </div>
                <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(0deg,rgba(0,15,22,.4),rgba(0,15,22,0))' }}></div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', padding: 'clamp(40px,5vw,66px)' }}>
                <div data-reveal="right" style={{ maxWidth: '44ch' }}>
                  <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#e3ab7c' }}>Our commitment</div>
                  <h2 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: 'clamp(26px,3vw,36px)', margin: '12px 0 16px', color: '#fff', lineHeight: '1.1' }}>HSSE oversight isn't a checkbox. It's embedded leadership.</h2>
                  <p style={{ fontSize: '15px', lineHeight: '1.65', color: '#c3d0d4', margin: '0 0 24px' }}>From toolbox talk to turnover, Praetorian's owner's team culture sets the standard that contractors are held to. We don't audit from the sidelines, we lead from the front.</p>
                  <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#B06533', color: '#fff', textDecoration: 'none', minHeight: '46px', padding: '0 22px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600', fontSize: '14px' }}>Speak with Our Team</Link>
                </div>
              </div>
            </div>
          </section>
          <section style={{ maxWidth: '1400px', margin: '0 auto', padding: 'clamp(46px,6vw,84px) clamp(16px,4vw,44px)' }}>
            <div data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#B06533' }}>By the numbers</div>
            <h2 data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: 'clamp(30px,3.6vw,44px)', margin: '12px 0 0', color: '#003E52' }}>Safety record across global operations</h2>
            <div style={{ width: '64px', height: '3px', background: '#B06533', margin: '18px 0 38px' }}></div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '0', border: '1px solid #e4e6e7' }}>
              <div data-reveal="" style={{ padding: '28px 24px', borderRight: '1px solid #e4e6e7' }}>
                <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '800', fontSize: 'clamp(32px,3.2vw,44px)', color: '#003E52' }}>6<span style={{ color: '#B06533' }}>+</span></div>
                <div style={{ fontSize: '12px', letterSpacing: '.05em', textTransform: 'uppercase', color: '#7d8288', marginTop: '6px' }}>Countries of operation</div>
                <p style={{ fontSize: '13.5px', color: '#5b6266', margin: '10px 0 0', lineHeight: '1.5' }}>Consistent HSSE standards applied across every jurisdiction Praetorian has operated in.</p>
              </div>
              <div data-reveal="" style={{ padding: '28px 24px', borderRight: '1px solid #e4e6e7' }}>
                <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '800', fontSize: 'clamp(32px,3.2vw,44px)', color: '#003E52' }}>20<span style={{ color: '#B06533' }}>+</span></div>
                <div style={{ fontSize: '12px', letterSpacing: '.05em', textTransform: 'uppercase', color: '#7d8288', marginTop: '6px' }}>Years of safe delivery</div>
                <p style={{ fontSize: '13.5px', color: '#5b6266', margin: '10px 0 0', lineHeight: '1.5' }}>A track record built project by project, site by site, across four continents.</p>
              </div>
              <div data-reveal="" style={{ padding: '28px 24px', borderRight: '1px solid #e4e6e7' }}>
                <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '800', fontSize: 'clamp(32px,3.2vw,44px)', color: '#003E52' }}>100<span style={{ color: '#B06533' }}>%</span></div>
                <div style={{ fontSize: '12px', letterSpacing: '.05em', textTransform: 'uppercase', color: '#7d8288', marginTop: '6px' }}>Owner's team integration</div>
                <p style={{ fontSize: '13.5px', color: '#5b6266', margin: '10px 0 0', lineHeight: '1.5' }}>Every Praetorian engagement includes embedded HSSE leadership, no exceptions.</p>
              </div>
              <div data-reveal="" style={{ padding: '28px 24px' }}>
                <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '800', fontSize: 'clamp(32px,3.2vw,44px)', color: '#003E52' }}>Zero</div>
                <div style={{ fontSize: '12px', letterSpacing: '.05em', textTransform: 'uppercase', color: '#7d8288', marginTop: '6px' }}>Acceptable harm threshold</div>
                <p style={{ fontSize: '13.5px', color: '#5b6266', margin: '10px 0 0', lineHeight: '1.5' }}>No task is so urgent it cannot be performed safely. No outcome justifies a lost-time injury.</p>
              </div>
            </div>
            <p style={{ fontSize: '12px', color: '#8b9095', marginTop: '14px', fontStyle: 'italic' }}>Safety metrics are available to qualified clients on request. Content to be confirmed with Femi before publication.</p>
          </section>
        </div>
    </main>
  );
}
