'use client';
import { useState, useEffect } from "react";
import Link from "next/link";

const IMAGES = [
  "/images/photos/pcml-hero-01.jpg",
  "/images/photos/pcml-hero-02.jpg",
  "/images/photos/pcml-hero-03.jpg",
  "/images/photos/pcml-hero-04.jpg",
];

export type HeroStat = { _key?: string; value: string; suffix?: string; label: string };
export type HeroContent = {
  eyebrow: string;
  headline: string;
  subhead: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  stats: HeroStat[];
};

export default function HeroSlideshow({ content }: { content: HeroContent }) {
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
            {content.eyebrow}
          </div>
          <h1 data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '800', fontSize: 'clamp(28px,3.9vw,46px)', lineHeight: '1.04', margin: '20px 0 0', color: '#fff', textWrap: 'balance' }}>{content.headline}</h1>
          <p data-reveal="" style={{ fontSize: 'clamp(15px,1.2vw,17.5px)', lineHeight: '1.62', maxWidth: '52ch', margin: '20px 0 0', color: '#dbe4e7', textWrap: 'pretty' }}>{content.subhead}</p>
          <div data-reveal="" style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '30px' }}>
            <Link href="/contact" style={{ background: '#B06533', color: '#fff', textDecoration: 'none', minHeight: '48px', display: 'flex', alignItems: 'center', padding: '0 24px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600', fontSize: '15px' }}>{content.primaryCtaLabel}</Link>
            <Link href="/projects" style={{ minHeight: '48px', padding: '0 22px', fontSize: '15px', color: '#fff', border: '1px solid rgba(255,255,255,.55)', background: 'transparent', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600', cursor: 'pointer' }}>
              {content.secondaryCtaLabel}
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
          </div>
        </div>
      </div>
      {/* Credentials bar */}
      <div style={{ position: 'absolute', left: '0', right: '0', bottom: '0', background: 'rgba(0,10,15,.55)', backdropFilter: 'blur(2px)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(16px,4vw,44px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))' }}>
          {content.stats.map((stat, i) => (
            <div key={stat._key ?? i} style={{ padding: '18px 20px', borderRight: i < content.stats.length - 1 ? '1px solid rgba(255,255,255,.16)' : undefined }}>
              <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '800', fontSize: 'clamp(26px,2.6vw,34px)', color: '#fff' }}>{stat.value}{stat.suffix ? <span style={{ color: '#e3ab7c' }}>{stat.suffix}</span> : null}</div>
              <div style={{ fontSize: '12px', letterSpacing: '.05em', textTransform: 'uppercase', color: '#a9b6bb', marginTop: '2px' }}>{stat.label}</div>
            </div>
          ))}
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
