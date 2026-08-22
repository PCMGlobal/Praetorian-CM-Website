import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects | Praetorian Construction Management",
  description: "A working selection of projects delivered across Canada, the USA, Mexico, Peru, Guatemala and Armenia.",
};

export default function ProjectsPage() {
  return (
    <main>
      <div>
          <section style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: '0', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundImage: 'url(https://images.unsplash.com/photo-1523848309072-c199db53f137?w=1400&auto=format&fit=crop&q=80)' }}></div>
            <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(100deg,rgba(0,15,22,.9) 0%,rgba(0,25,36,.72) 48%,rgba(0,15,22,.4) 100%)' }}></div>
            <div style={{ position: 'relative', maxWidth: '1400px', margin: '0 auto', padding: 'clamp(40px,5vw,72px) clamp(16px,4vw,44px)' }}>
              <Link href="/" style={{ background: 'none', border: '0', padding: '0', color: '#e3ab7c', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
                Home
              </Link>
              <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#e3ab7c', marginTop: '22px' }}>Projects</div>
              <h1 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '800', fontSize: 'clamp(34px,4.6vw,58px)', margin: '14px 0 0', color: '#fff', lineHeight: '1.04', maxWidth: '24ch' }}>40+ projects, eight countries, $3.6B under management</h1>
              <p style={{ fontSize: '16.5px', lineHeight: '1.62', maxWidth: '62ch', color: '#c3d0d4', margin: '18px 0 0' }}>A working selection for review. The full confirmed list is pending sign-off before it goes public.</p>
            </div>
          </section>

          <section style={{ maxWidth: '1400px', margin: '0 auto', padding: 'clamp(40px,5vw,66px) clamp(16px,4vw,44px)' }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', minWidth: '720px' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #e4e6e7' }}><th style={{ textAlign: 'left', padding: '10px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: '#5b6266' }}>Sample Project</th><th style={{ textAlign: 'left', padding: '10px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: '#5b6266' }}>Location</th><th style={{ textAlign: 'left', padding: '10px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: '#5b6266' }}>Client</th><th style={{ textAlign: 'left', padding: '10px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: '#5b6266' }}>Scope</th><th style={{ textAlign: 'left', padding: '10px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: '#5b6266' }}>Phase</th></tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '10px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '16px', color: '#003E52' }}>Amulsar Gold Project</td><td style={{ padding: '10px' }}>Vayots Dzor, Armenia</td><td style={{ padding: '10px' }}>Lydian International</td><td style={{ padding: '10px' }}>Full-scope owner's team</td><td style={{ padding: '10px' }}><span style={{ background: '#fbe9db', color: '#8f4f27', padding: '3px 10px', fontSize: '11.5px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600' }}>Flagship</span></td></tr>
                  <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '10px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '16px', color: '#003E52' }}>Conga</td><td style={{ padding: '10px' }}>Cajamarca, Peru</td><td style={{ padding: '10px' }}>Newmont</td><td style={{ padding: '10px' }}>25M m³ earthworks programme</td><td style={{ padding: '10px' }}><span style={{ background: '#eceeee', color: '#4a4e50', padding: '3px 10px', fontSize: '11.5px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600' }}>Execution</span></td></tr>
                  <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '10px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '16px', color: '#003E52' }}>Peñasquito CLR</td><td style={{ padding: '10px' }}>Zacatecas, Mexico</td><td style={{ padding: '10px' }}>Goldcorp</td><td style={{ padding: '10px' }}>Expansion project controls</td><td style={{ padding: '10px' }}><span style={{ background: '#eceeee', color: '#4a4e50', padding: '3px 10px', fontSize: '11.5px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600' }}>Execution</span></td></tr>
                  <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '10px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '16px', color: '#003E52' }}>Emigrant Mine</td><td style={{ padding: '10px' }}>Nevada, USA</td><td style={{ padding: '10px' }}>Newmont</td><td style={{ padding: '10px' }}>Heap leach facility</td><td style={{ padding: '10px' }}><span style={{ background: '#eceeee', color: '#4a4e50', padding: '3px 10px', fontSize: '11.5px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600' }}>Commissioned</span></td></tr>
                  <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '10px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '16px', color: '#003E52' }}>Diavik Diamond Mine</td><td style={{ padding: '10px' }}>NWT, Canada</td><td style={{ padding: '10px' }}>Rio Tinto</td><td style={{ padding: '10px' }}>Remote arctic operations support</td><td style={{ padding: '10px' }}><span style={{ background: '#eceeee', color: '#4a4e50', padding: '3px 10px', fontSize: '11.5px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600' }}>Operations</span></td></tr>
                  <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '10px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '16px', color: '#003E52' }}>SO2Clean Facility</td><td style={{ padding: '10px' }}>Ontario, Canada</td><td style={{ padding: '10px' }}>Calabrian</td><td style={{ padding: '10px' }}>100 TPD chemical facility</td><td style={{ padding: '10px' }}><span style={{ background: '#eceeee', color: '#4a4e50', padding: '3px 10px', fontSize: '11.5px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600' }}>Commissioned</span></td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(16px,4vw,44px) clamp(46px,6vw,80px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 'clamp(18px,2.4vw,28px)' }}>
              <figure style={{ margin: '0' }}>
                <div style={{ position: 'relative', height: 'clamp(200px,20vw,260px)', overflow: 'hidden' }}><div style={{ position: 'absolute', inset: '0', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundImage: 'url(https://images.unsplash.com/photo-1523848309072-c199db53f137?w=800&auto=format&fit=crop&q=70)' }} ></div></div>
                <figcaption style={{ marginTop: '12px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600', fontSize: '12px', letterSpacing: '.14em', textTransform: 'uppercase', color: '#003E52' }}>Amulsar · Armenia</figcaption>
              </figure>
              <figure style={{ margin: '0' }}>
                <div style={{ position: 'relative', height: 'clamp(200px,20vw,260px)', overflow: 'hidden' }}><div style={{ position: 'absolute', inset: '0', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundImage: 'url(https://images.unsplash.com/photo-1582280871722-424e91cbee8b?w=800&auto=format&fit=crop&q=70)' }} ></div></div>
                <figcaption style={{ marginTop: '12px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600', fontSize: '12px', letterSpacing: '.14em', textTransform: 'uppercase', color: '#003E52' }}>Conga · Peru</figcaption>
              </figure>
              <figure style={{ margin: '0' }}>
                <div style={{ position: 'relative', height: 'clamp(200px,20vw,260px)', overflow: 'hidden' }}><div style={{ position: 'absolute', inset: '0', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundImage: 'url(https://images.unsplash.com/photo-1444136393836-70a14068c669?w=800&auto=format&fit=crop&q=70)' }} ></div></div>
                <figcaption style={{ marginTop: '12px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600', fontSize: '12px', letterSpacing: '.14em', textTransform: 'uppercase', color: '#003E52' }}>Diavik · NWT</figcaption>
              </figure>
            </div>
          </section>
        </div>
    </main>
  );
}
