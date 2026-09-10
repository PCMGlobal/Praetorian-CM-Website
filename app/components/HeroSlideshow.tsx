'use client';
import { useState, useEffect } from "react";
import Link from "next/link";

const IMAGES = [
  "https://images.unsplash.com/photo-1523660778745-247ed0bcce31?w=1400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1581092921461-7031e4bfb83b?w=1400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1400&auto=format&fit=crop&q=80",
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent(c => (c + 1) % IMAGES.length);
        setNext(c => (c + 2) % IMAGES.length);
        setFading(false);
      }, 1000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{ position: 'relative', height: 'clamp(520px,78vh,760px)', overflow: 'hidden' }}>
      {/* Current image */}
      <div style={{
        position: 'absolute', inset: '0',
        backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${IMAGES[current]})`,
        opacity: fading ? 0 : 1,
        transition: 'opacity 1s ease-in-out',
      }} />
      {/* Next image -- always underneath */}
      <div style={{
        position: 'absolute', inset: '0',
        backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${IMAGES[next]})`,
        opacity: 1,
        zIndex: -1,
      }} />
      <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(100deg,rgba(0,15,22,.86) 0%,rgba(0,25,36,.62) 46%,rgba(0,15,22,.2) 100%)' }}></div>
      <div style={{ position: 'relative', height: '100%', maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(16px,4vw,44px)', display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: '640px' }}>
          <div data-reveal="" style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', border: '1px solid rgba(176,101,51,.55)', padding: '6px 14px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600', fontSize: '12px', letterSpacing: '.16em', textTransform: 'uppercase', color: '#e3ab7c' }}>
            <span style={{ width: '6px', height: '6px', background: '#B06533', animation: 'pcmlBlink 2.4s ease-in-out infinite' }}></span>
            Global Mining · Built Right
          </div>
          <h1 data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '800', fontSize: 'clamp(38px,5.2vw,62px)', lineHeight: '1.04', margin: '20px 0 0', color: '#fff', textWrap: 'balance' }}>Mining Construction Management with a Technology Edge</h1>
          <p data-reveal="" style={{ fontSize: 'clamp(15px,1.2vw,17.5px)', lineHeight: '1.62', maxWidth: '52ch', margin: '20px 0 0', color: '#dbe4e7', textWrap: 'pretty' }}>Praetorian integrates directly into your ownership team, from feasibility through commissioning. AI-powered cost intelligence, global experience, and an unwavering focus on your project outcomes.</p>
          <div data-reveal="" style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '30px' }}>
            <Link href="/contact" style={{ background: '#B06533', color: '#fff', textDecoration: 'none', minHeight: '48px', display: 'flex', alignItems: 'center', padding: '0 24px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600', fontSize: '15px' }}>Speak with Our Team</Link>
            <Link href="/projects" style={{ minHeight: '48px', padding: '0 22px', fontSize: '15px', color: '#fff', border: '1px solid rgba(255,255,255,.55)', background: 'transparent', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600', cursor: 'pointer' }}>
              View Our Projects
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
          </div>
        </div>
      </div>
      {/* Credentials bar */}
      <div style={{ position: 'absolute', left: '0', right: '0', bottom: '0', background: 'rgba(0,10,15,.55)', backdropFilter: 'blur(2px)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(16px,4vw,44px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))' }}>
          <div style={{ padding: '18px 20px', borderRight: '1px solid rgba(255,255,255,.16)' }}><div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '800', fontSize: 'clamp(26px,2.6vw,34px)', color: '#fff' }}>20<span style={{ color: '#e3ab7c' }}>+</span></div><div style={{ fontSize: '12px', letterSpacing: '.05em', textTransform: 'uppercase', color: '#a9b6bb', marginTop: '2px' }}>Years delivering</div></div>
          <div style={{ padding: '18px 20px', borderRight: '1px solid rgba(255,255,255,.16)' }}><div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '800', fontSize: 'clamp(26px,2.6vw,34px)', color: '#fff' }}>60<span style={{ color: '#e3ab7c' }}>+</span></div><div style={{ fontSize: '12px', letterSpacing: '.05em', textTransform: 'uppercase', color: '#a9b6bb', marginTop: '2px' }}>Projects globally</div></div>
          <div style={{ padding: '18px 20px' }}><div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '800', fontSize: 'clamp(26px,2.6vw,34px)', color: '#fff' }}>6</div><div style={{ fontSize: '12px', letterSpacing: '.05em', textTransform: 'uppercase', color: '#a9b6bb', marginTop: '2px' }}>Countries of operation</div></div>
        </div>
      </div>
      {/* Dot indicators */}
      <div style={{ position: 'absolute', bottom: '108px', right: 'clamp(16px,4vw,44px)', zIndex: 10, display: 'flex', gap: '8px' }}>
        {IMAGES.map((_, i) => (
          <button key={i} onClick={() => { setCurrent(i); setNext((i + 1) % IMAGES.length); }} style={{ width: i === current ? '24px' : '8px', height: '8px', borderRadius: '4px', background: i === current ? '#B06533' : 'rgba(255,255,255,.45)', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease', padding: 0 }} />
        ))}
      </div>
    </section>
  );
}
