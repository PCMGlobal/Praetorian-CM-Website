import type { Metadata } from "next";
import CTABanner from "@/app/components/CTABanner";
import Link from "next/link";
import { client } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "HSSE Leadership | Praetorian Construction Management",
  description: "Zero harm is the only acceptable outcome. Praetorian embeds HSSE leadership directly into the owner's team from mobilisation through handover.",
};

export const revalidate = 60;

type PillarCard = { _key?: string; title: string; description?: string };
type HsseStat = { _key?: string; value: string; suffix?: string; label: string; description?: string };

type HssePageData = {
  hero: { eyebrow?: string; headline: string; subhead?: string };
  pillars: PillarCard[];
  commitment: { eyebrow?: string; heading: string; body?: string; ctaLabel?: string };
  statsSection: { eyebrow?: string; heading?: string; stats: HsseStat[]; footnote?: string };
};

// Matches what's live today -- shown whenever the "HSSE Page" document hasn't
// been created/published in Sanity Studio yet, so the site never regresses.
const DEFAULT_HSSE: HssePageData = {
  hero: {
    eyebrow: "Health, Safety, Social, and Environment",
    headline: "Zero harm isn't a target. It's the only acceptable outcome.",
    subhead: "Praetorian embeds HSSE leadership directly into the owner's team. Safety culture starts at the top, and that means us.",
  },
  pillars: [
    { title: "H&S Policy Statement", description: "Our policy is unambiguous: no task is so urgent that it cannot be performed safely. Every Praetorian engagement begins with a documented safety framework aligned to the owner's standards and the jurisdiction's regulatory requirements." },
    { title: "Project HSSE Approach", description: "From pre-mobilisation planning through final demobilisation, Praetorian integrates HSSE into every stage gate. Our field leaders run toolbox talks, hazard assessments, and incident investigations as core delivery." },
    { title: "Owner's Team Culture", description: "Site culture follows the owner's team lead. Praetorian personnel are expected to stop unsafe work, engage contractors directly, and escalate immediately, from first induction to handover." },
    { title: "Regulatory Compliance", description: "Praetorian operates across multiple jurisdictions, Canada, USA, South America, and Eurasia. Our teams understand the local regulatory frameworks and ensure execution meets or exceeds applicable mining safety codes." },
    { title: "Incident Management", description: "When incidents occur, Praetorian leads root cause analysis, corrective action tracking, and lessons-learned dissemination. Transparency with the owner is non-negotiable." },
    { title: "Environment & Community", description: "Environmental stewardship and community engagement are embedded in our HSSE framework. Praetorian teams maintain the social licence to operate throughout the project lifecycle." },
  ],
  commitment: {
    eyebrow: "Our commitment",
    heading: "HSSE oversight isn't a checkbox. It's embedded leadership.",
    body: "From toolbox talk to turnover, Praetorian's owner's team culture sets the standard that contractors are held to. We don't audit from the sidelines, we lead from the front.",
    ctaLabel: "Speak with Our Team",
  },
  statsSection: {
    eyebrow: "By the numbers",
    heading: "Safety record across global operations",
    stats: [
      { value: "6", suffix: "+", label: "Countries of operation", description: "Consistent HSSE standards applied across every jurisdiction Praetorian has operated in." },
      { value: "20", suffix: "+", label: "Years of safe delivery", description: "A track record built project by project, site by site, across four continents." },
      { value: "100", suffix: "%", label: "Owner's team integration", description: "Every Praetorian engagement includes embedded HSSE leadership, no exceptions." },
      { value: "Zero", suffix: "", label: "Acceptable harm threshold", description: "No task is so urgent it cannot be performed safely. No outcome justifies a lost-time injury." },
    ],
    footnote: "Safety metrics are available to qualified clients on request. Content to be confirmed with Femi before publication.",
  },
};

async function getHssePage(): Promise<HssePageData | null> {
  try {
    return await client.fetch(
      `*[_type == "hssePage"][0]{
        hero{ eyebrow, headline, subhead },
        pillars[]{ _key, title, description },
        commitment{ eyebrow, heading, body, ctaLabel },
        statsSection{ eyebrow, heading, stats[]{ _key, value, suffix, label, description }, footnote }
      }`
    );
  } catch {
    return null;
  }
}

export default async function HSSEPage() {
  const fetched = await getHssePage();
  const data = fetched ?? DEFAULT_HSSE;
  const pillarIcons = [
    <svg key="0" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#003E52" strokeWidth="1.6"><path d="M12 3l8 3v6c0 5-3.4 8.2-8 9-4.6-.8-8-4-8-9V6l8-3Z" /><path d="m9 12 2 2 4-4" /></svg>,
    <svg key="1" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#003E52" strokeWidth="1.6"><circle cx="12" cy="12" r="9" /><path d="M12 8v4l3 3" /></svg>,
    <svg key="2" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#003E52" strokeWidth="1.6"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
    <svg key="3" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#003E52" strokeWidth="1.6"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>,
    <svg key="4" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#003E52" strokeWidth="1.6"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" /><path d="M14 2v6h6M9 13h6M9 17h4" /></svg>,
    <svg key="5" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#003E52" strokeWidth="1.6"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" /><path d="M9 22V12h6v10" /></svg>,
  ];

  return (
    <main>
      <div>
          <section style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: '0', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundImage: 'url(/images/photos/pcml-service-hsse.jpg)' }}></div>
            <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(100deg,rgba(0,15,22,.9) 0%,rgba(0,25,36,.72) 48%,rgba(0,15,22,.4) 100%)' }}></div>
            <div style={{ position: 'relative', maxWidth: '1400px', margin: '0 auto', padding: 'clamp(24px,3vw,40px) clamp(16px,4vw,44px)' }}>
              <Link href="/" style={{ background: 'none', border: '0', padding: '0', color: '#e3ab7c', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
                Home
              </Link>
              <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#e3ab7c', marginTop: '22px' }}>{data.hero.eyebrow}</div>
              <h1 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '800', fontSize: 'clamp(25px,3.45vw,43px)', margin: '14px 0 0', color: '#fff', lineHeight: '1.04', maxWidth: '24ch' }}>{data.hero.headline}</h1>
              <p style={{ fontSize: '16.5px', lineHeight: '1.62', maxWidth: '62ch', color: '#c3d0d4', margin: '18px 0 0' }}>{data.hero.subhead}</p>
            </div>
          </section>

          <section style={{ maxWidth: '1400px', margin: '0 auto', padding: 'clamp(20px,2.5vw,32px) clamp(16px,4vw,44px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'clamp(20px,2.6vw,32px)' }}>
              {data.pillars.map((card, i) => (
                <div key={card._key ?? i} data-reveal="" style={{ background: '#fff', padding: '16px 18px', boxShadow: '0 2px 14px rgba(0,20,30,.06)', borderTop: '3px solid #B06533' }}>
                  {pillarIcons[i]}
                  <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '20px', margin: '16px 0 8px', color: '#003E52' }}>{card.title}</h4>
                  <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#5b6266', margin: '0' }}>{card.description}</p>
                </div>
              ))}
            </div>
          </section>
          <section style={{ background: '#003E52' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(420px,1fr))' }}>
              <div style={{ position: 'relative', minHeight: '400px', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: '0', animation: 'pcmlDrift 28s ease-in-out infinite alternate' }}>
                  <div style={{ position: 'absolute', inset: '0', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundImage: 'url(/images/photos/pcml-service-commitment.jpg)' }} ></div>
                </div>
                <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(0deg,rgba(0,15,22,.4),rgba(0,15,22,0))' }}></div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', padding: 'clamp(22px,2.8vw,36px)' }}>
                <div data-reveal="right" style={{ maxWidth: '80ch' }}>
                  <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#e3ab7c' }}>{data.commitment.eyebrow}</div>
                  <h2 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: 'clamp(26px,3vw,36px)', margin: '8px 0 10px', color: '#fff', lineHeight: '1.1' }}>HSSE oversight isn&apos;t a checkbox.<br />It&apos;s embedded leadership.</h2>
                  <p style={{ fontSize: '15px', lineHeight: '1.65', color: '#c3d0d4', margin: '0 0 24px' }}>{data.commitment.body}</p>
                  <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#B06533', color: '#fff', textDecoration: 'none', minHeight: '46px', padding: '0 22px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600', fontSize: '14px' }}>{data.commitment.ctaLabel}</Link>
                </div>
              </div>
            </div>
          </section>
          <section style={{ maxWidth: '1400px', margin: '0 auto', padding: 'clamp(20px,2.5vw,32px) clamp(16px,4vw,44px)' }}>
            <div data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', letterSpacing: '.12em', textTransform: 'uppercase', color: '#B06533' }}>{data.statsSection.eyebrow}</div>
            <h2 data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: 'clamp(20px,2.2vw,28px)', margin: '8px 0 0', color: '#003E52' }}>{data.statsSection.heading}</h2>
            <div style={{ width: '64px', height: '3px', background: '#B06533', margin: '18px 0 38px' }}></div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '0', border: '1px solid #e4e6e7' }}>
              {data.statsSection.stats.map((stat, i) => (
                <div key={stat._key ?? i} data-reveal="" style={{ padding: '16px 20px', borderRight: i < data.statsSection.stats.length - 1 ? '1px solid #e4e6e7' : undefined }}>
                  <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '800', fontSize: 'clamp(18px,1.8vw,22px)', color: '#003E52' }}>{stat.value}<span style={{ color: '#B06533' }}>{stat.suffix}</span></div>
                  <div style={{ fontSize: '12px', letterSpacing: '.05em', textTransform: 'uppercase', color: '#7d8288', marginTop: '6px' }}>{stat.label}</div>
                  <p style={{ fontSize: '13.5px', color: '#5b6266', margin: '10px 0 0', lineHeight: '1.5' }}>{stat.description}</p>
                </div>
              ))}
            </div>

          </section>
        </div>
          <CTABanner />
    </main>
  );
}
