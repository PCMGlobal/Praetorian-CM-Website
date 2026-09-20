import type { Metadata } from "next";
import CTABanner from "@/app/components/CTABanner";
import MapSection from "@/app/components/MapSection";
import { type Pin } from "@/app/components/WorldMap";
import projectPins from "@/data/project-pins.json";
import Link from "next/link";
import HeroSlideshow, { type HeroContent } from "@/app/components/HeroSlideshow";
import { client } from "@/lib/sanity";
import GlobeWatermark from "@/app/components/GlobeWatermark";
import CountryCards from "@/app/components/CountryCards";

export const metadata: Metadata = {
  title: "Praetorian Construction Management | Mining Construction",
  description: "Owner's team construction management for the global mining industry. AI-powered cost intelligence, 20+ years of experience, operating across 6 countries.",
};

export const revalidate = 60;

type HomeArticle = {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  publishedAt: string;
  readTime: number;
  coverImageUrl: string | null;
};

type TitleDescription = { _key?: string; title: string; description?: string };
type GroundPanel = { _key?: string; eyebrow?: string; heading: string; body?: string };
type SectionIntro = { eyebrow?: string; heading?: string; subhead?: string; body?: string };

type HomePageData = {
  hero: HeroContent;
  serviceTeasers: Array<{ _key?: string; number?: string; title: string; description?: string }>;
  whatWeDo: SectionIntro & { cards: TitleDescription[] };
  onTheGround: GroundPanel[];
  footprint: SectionIntro;
  allLocations: SectionIntro;
  resources: SectionIntro & { cards: TitleDescription[] };
  newsSection: { eyebrow?: string; heading?: string };
};

// Matches what's live today -- shown whenever the "Home Page" document hasn't
// been created/published in Sanity Studio yet, so the site never regresses.
const DEFAULT_HOME: HomePageData = {
  hero: {
    eyebrow: "Global Mining · Built Right",
    headline: "Mining Construction Management with a Technology Edge",
    subhead: "Praetorian integrates directly into your ownership team, from feasibility through commissioning. AI-powered cost intelligence, global experience, and an unwavering focus on your project outcomes.",
    primaryCtaLabel: "Speak with Our Team",
    secondaryCtaLabel: "View Our Projects",
    stats: [
      { value: "20", suffix: "+", label: "Years delivering" },
      { value: "60", suffix: "+", label: "Projects globally" },
      { value: "6", suffix: "", label: "Countries of operation" },
    ],
  },
  serviceTeasers: [
    { number: "01", title: "Owner's Team Support", description: "Study development, execution readiness, and H&S oversight, embedded directly in your team." },
    { number: "02", title: "Project Services", description: "Procurement, cost control, scheduling, document management and risk, integrated from Day 1." },
    { number: "03", title: "Construction Execution", description: "On-the-ground construction management across civil, structural, mechanical, electrical and commissioning." },
    { number: "04", title: "Operational Consulting", description: "Leadership alignment, asset optimisation, and process safety for long-term operational performance." },
  ],
  whatWeDo: {
    eyebrow: "What we do",
    heading: "End-to-End Project Management Services",
    subhead: "From the first feasibility study to final commissioning, Praetorian provides integrated services across every phase of your project lifecycle.",
    cards: [
      { title: "Engineering Support", description: "Constructability reviews and value engineering that reduce cost before ground is broken." },
      { title: "Early Planning & Feasibility", description: "Stage gate development, feasibility, and financing support from inception through FS." },
      { title: "Procurement & Logistics", description: "Contract development, tendering strategy, and full vendor management through award." },
      { title: "Project Controls", description: "Cost, schedule, document management and reporting, integrated with your systems." },
      { title: "Construction Management", description: "On-site supervision, contractor management, and quality oversight as your owner's representative." },
      { title: "Quality, Commissioning & Turnover", description: "QA/QC frameworks, commissioning planning, and turnover packages that protect your investment." },
    ],
  },
  onTheGround: [
    { eyebrow: "On the ground", heading: "Mining operations, run by people who've stood on the pit floor", body: "Open pit, underground, heap leach, Praetorian's owner's teams have overseen fleet, crusher and haul-road programmes across every major mining geography." },
    { eyebrow: "Engineering & Construction", heading: "Structural steel to process plant, delivered on schedule", body: "Constructability review through commissioning, Praetorian's project controls keep complex builds on cost and on schedule." },
    { eyebrow: "Health, Safety, Social, and Environment", heading: "Owner's team culture sets the site culture", body: "HSSE oversight isn't a checkbox, it's embedded leadership, from toolbox talk to turnover." },
  ],
  footprint: {
    eyebrow: "Global presence",
    heading: "Praetorian Footprint",
    body: "Praetorian has worked extensively across Canada, the United States, South America, Central America and Eurasia. The tour runs on its own, hover a pin or pick a project to take control.",
  },
  allLocations: {
    eyebrow: "All Locations",
    heading: "Where we have worked",
    body: "A sample of 60 projects our team and senior managers have delivered across 6 countries. Select a country to expand the full list.",
  },
  resources: {
    eyebrow: "Knowledge Hub",
    heading: "Resources for Project Owners",
    cards: [
      { title: "Blog & Insights", description: "Industry commentary" },
      { title: "Business Guides", description: "Best-practice guides" },
      { title: "Case Studies", description: "Project case studies" },
      { title: "Whitepapers", description: "Downloadable reports" },
      { title: "Webinars & Video", description: "Expert-led sessions" },
    ],
  },
  newsSection: {
    eyebrow: "Latest from Praetorian",
    heading: "News & Insights",
  },
};

function formatHomeDate(dateStr: string): string {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-CA", { month: "short", year: "numeric" });
}

async function getLatestArticles() {
  try {
    return await client.fetch(
      `*[_type == "article" && defined(slug.current)] | order(publishedAt desc) [0...3] {
        _id, title, slug, category, publishedAt, readTime,
        "coverImageUrl": heroImage.asset->url
      }`
    );
  } catch {
    return [];
  }
}

async function getHomePage(): Promise<HomePageData | null> {
  try {
    return await client.fetch(
      `*[_type == "homePage"][0]{
        hero{ eyebrow, headline, subhead, primaryCtaLabel, secondaryCtaLabel, stats[]{ _key, value, suffix, label } },
        serviceTeasers[]{ _key, number, title, description },
        whatWeDo{ eyebrow, heading, subhead, cards[]{ _key, title, description } },
        onTheGround[]{ _key, eyebrow, heading, body },
        footprint{ eyebrow, heading, body },
        allLocations{ eyebrow, heading, body },
        resources{ eyebrow, heading, cards[]{ _key, title, description } },
        newsSection{ eyebrow, heading }
      }`
    );
  } catch {
    return null;
  }
}

export default async function HomePage() {
  const [latestArticles, homeData] = await Promise.all([getLatestArticles(), getHomePage()]);
  const home = homeData ?? DEFAULT_HOME;
  const serviceAnchors = ["owners-team-support", "project-services", "construction-execution", "operational-consulting"];
  const whatWeDoIcons = [
    <svg key="0" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#003E52" strokeWidth="1.6"><path d="M3 21 21 3M14 3h7v7" /><path d="M3 15v6h6" /><circle cx="7" cy="7" r="3" /></svg>,
    <svg key="1" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#003E52" strokeWidth="1.6"><rect x="4" y="3" width="16" height="18" /><path d="M8 8h8M8 12h8M8 16h5" /></svg>,
    <svg key="2" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#003E52" strokeWidth="1.6"><path d="M3 17h4l3-3 4 4 3-3h4" /><path d="M3 7h6l3 3 3-3h6" /></svg>,
    <svg key="3" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#003E52" strokeWidth="1.6"><path d="M3 3v18h18" /><path d="M7 16v-5M12 16V7M17 16v-8" /></svg>,
    <svg key="4" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#003E52" strokeWidth="1.6"><path d="M2 20h20" /><path d="M5 20V9l7-5 7 5v11" /><path d="M9 20v-6h6v6" /></svg>,
    <svg key="5" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#003E52" strokeWidth="1.6"><path d="M12 3l8 3v6c0 5-3.4 8.2-8 9-4.6-.8-8-4-8-9V6l8-3Z" /><path d="m9 12 2 2 4-4" /></svg>,
  ];
  const groundPanelImages = [
    "/images/photos/pcml-service-ownersTeam.jpg",
    "/images/photos/pcml-service-hsse.jpg",
    "/images/photos/pcml-service-commitment.jpg",
  ];
  const resourceMeta = [
    { href: "/news", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B06533" strokeWidth="1.6"><path d="M4 4h16v16H4z" /><path d="M8 9h8M8 13h5" /></svg> },
    { href: "/news", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B06533" strokeWidth="1.6"><path d="M12 5v15" /><path d="M12 5c-1.5-1.3-4-2-8-2v15c4 0 6.5.7 8 2 1.5-1.3 4-2 8-2V3c-4 0-6.5.7-8 2Z" /></svg> },
    { href: "/projects", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B06533" strokeWidth="1.6"><path d="M3 3v18h18" /><path d="M7 16v-5M12 16V7M17 16v-8" /></svg> },
    { href: "/news", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B06533" strokeWidth="1.6"><path d="M14 3H6v18h12V7l-4-4Z" /><path d="M14 3v4h4" /><path d="M9 13h6M9 17h4" /></svg> },
    { href: "/news", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B06533" strokeWidth="1.6"><rect x="2" y="5" width="14" height="14" /><path d="m16 10 6-3v10l-6-3z" /></svg> },
  ];

  return (
    <main>
      <div>
          <HeroSlideshow content={home.hero} />


          <section style={{ background: '#f7f7f7', padding: 'clamp(46px,6vw,84px) 0', position: 'relative', overflow: 'hidden' }}>
            <GlobeWatermark side="left" opacity={0.05} size={360} />
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(16px,4vw,44px)' }}>
              <div data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#B06533' }}>{home.whatWeDo.eyebrow}</div>
              <h2 data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: 'clamp(30px,3.6vw,44px)', margin: '12px 0 0', maxWidth: '24ch', lineHeight: '1.06', color: '#003E52' }}>{home.whatWeDo.heading}</h2>
              <p data-reveal="" style={{ fontSize: '16px', lineHeight: '1.6', maxWidth: '66ch', color: '#555c60', margin: '18px 0 38px' }}>{home.whatWeDo.subhead}</p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'clamp(20px,2.6vw,26px)' }}>
                {home.whatWeDo.cards.map((card, i) => (
                  <div key={card._key ?? i} data-reveal="" style={{ background: '#fff', padding: '26px 24px', boxShadow: '0 2px 14px rgba(0,20,30,.06)', borderTop: '3px solid #B06533' }}>
                    {whatWeDoIcons[i]}
                    <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '20px', margin: '16px 0 8px', color: '#003E52' }}>{card.title}</h4>
                    <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#5b6266', margin: '0' }}>{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(420px,1fr))' }}>
            <div style={{ position: 'relative', minHeight: '440px', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: '0', animation: 'pcmlDrift 26s ease-in-out infinite alternate' }}>
                <div style={{ position: 'absolute', inset: '0', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundImage: `url(${groundPanelImages[0]})` }} ></div>
              </div>
              <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(0deg,rgba(0,15,22,.35),rgba(0,15,22,0))' }}></div>
            </div>
            <div style={{ background: '#003E52', display: 'flex', alignItems: 'center', padding: 'clamp(40px,5vw,66px)' }}>
              <div data-reveal="right" style={{ maxWidth: '44ch' }}>
                <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#e3ab7c' }}>{home.onTheGround[0]?.eyebrow}</div>
                <h2 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: 'clamp(26px,3vw,36px)', margin: '12px 0 16px', color: '#fff', lineHeight: '1.1' }}>{home.onTheGround[0]?.heading}</h2>
                <p style={{ fontSize: '15px', lineHeight: '1.65', color: '#c3d0d4', margin: '0' }}>{home.onTheGround[0]?.body}</p>
              </div>
            </div>

            <div style={{ background: '#f7f7f7', display: 'flex', alignItems: 'center', padding: 'clamp(40px,5vw,66px)', order: '3' }}>
              <div data-reveal="left" style={{ maxWidth: '44ch' }}>
                <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#B06533' }}>{home.onTheGround[1]?.eyebrow}</div>
                <h2 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: 'clamp(26px,3vw,36px)', margin: '12px 0 16px', color: '#003E52', lineHeight: '1.1' }}>{home.onTheGround[1]?.heading}</h2>
                <p style={{ fontSize: '15px', lineHeight: '1.65', color: '#555c60', margin: '0' }}>{home.onTheGround[1]?.body}</p>
              </div>
            </div>
            <div style={{ position: 'relative', minHeight: '440px', overflow: 'hidden', order: '4' }}>
              <div style={{ position: 'absolute', inset: '0', animation: 'pcmlDrift 22s ease-in-out infinite alternate-reverse' }}>
                <div style={{ position: 'absolute', inset: '0', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundImage: `url(${groundPanelImages[1]})` }} ></div>
              </div>
            </div>

            <div style={{ position: 'relative', minHeight: '440px', overflow: 'hidden', order: '5' }}>
              <div style={{ position: 'absolute', inset: '0', animation: 'pcmlDrift 24s ease-in-out infinite alternate' }}>
                <div style={{ position: 'absolute', inset: '0', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundImage: `url(${groundPanelImages[2]})` }} ></div>
              </div>
              <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(0deg,rgba(0,15,22,.35),rgba(0,15,22,0))' }}></div>
            </div>
            <div style={{ background: '#003E52', display: 'flex', alignItems: 'center', padding: 'clamp(40px,5vw,66px)', order: '6' }}>
              <div data-reveal="right" style={{ maxWidth: '44ch' }}>
                <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#e3ab7c' }}>{home.onTheGround[2]?.eyebrow}</div>
                <h2 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: 'clamp(26px,3vw,36px)', margin: '12px 0 16px', color: '#fff', lineHeight: '1.1' }}>{home.onTheGround[2]?.heading}</h2>
                <p style={{ fontSize: '15px', lineHeight: '1.65', color: '#c3d0d4', margin: '0' }}>{home.onTheGround[2]?.body}</p>
              </div>
            </div>
          </section>

          <section style={{ background: '#003E52', color: '#e9eef0' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: 'clamp(28px,3.5vw,52px) clamp(16px,4vw,44px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 'clamp(30px,4vw,56px)', alignItems: 'start' }}>
              <div data-reveal="">
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', border: '1px solid rgba(176,101,51,.5)', padding: '6px 13px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600', fontSize: '12px', letterSpacing: '.16em', textTransform: 'uppercase', color: '#e3ab7c' }}>
                  <span style={{ width: "6px", height: "6px", background: "#B06533" }}></span>Proprietary Platform
                </div>
                <h2 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "800", fontSize: "clamp(30px,3.6vw,44px)", margin: "20px 0 0", color: "#fff", lineHeight: "1.06" }}>Praetorian IQ<br />Proprietary Cost Intelligence</h2>
                <p style={{ fontSize: "16px", lineHeight: "1.62", maxWidth: "56ch", color: "#c3d0d4", margin: "18px 0 26px" }}>Praetorian IQ is our proprietary cost intelligence platform, built on Microsoft Azure and Claude AI. Embedded in every engagement, it gives our teams and their clients real-time benchmarking, document intelligence and predictive analysis drawn from Praetorian's own delivered project record.</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
                  <Link href="/praetorian-iq" style={{ background: "#B06533", color: "#fff", border: "0", minHeight: "46px", padding: "0 20px", fontSize: "15px", fontFamily: "var(--font-sora), sans-serif", fontWeight: "600", cursor: "pointer", display: "inline-flex", alignItems: "center" }}>Learn About Praetorian IQ</Link>
                </div>

                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(170px,1fr))', gap: '0', marginTop: '36px', border: '1px solid rgba(255,255,255,.2)' }}>
                  <div style={{ padding: '20px', borderRight: '1px solid rgba(255,255,255,.2)' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e3ab7c" strokeWidth="1.6"><path d="M3 3v18h18" /><path d="M7 16v-5M12 16V7M17 16v-8" /></svg>
                    <h5 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '16px', color: '#fff', margin: '12px 0 6px' }}>Cost Benchmarking</h5>
                    <p style={{ fontSize: '13px', color: '#9aa9ae', margin: '0', lineHeight: '1.55' }}>Real-time estimate accuracy and variance analysis.</p>
                  </div>
                  <div style={{ padding: '20px', borderRight: '1px solid rgba(255,255,255,.2)' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e3ab7c" strokeWidth="1.6"><circle cx="11" cy="11" r="7" /><path d="m16.5 16.5 4.5 4.5" /></svg>
                    <h5 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '16px', color: '#fff', margin: '12px 0 6px' }}>Document Intelligence</h5>
                    <p style={{ fontSize: '13px', color: '#9aa9ae', margin: '0', lineHeight: '1.55' }}>AI search across project records and contracts.</p>
                  </div>
                  <div style={{ padding: '20px' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e3ab7c" strokeWidth="1.6"><path d="m3 17 6-6 4 4 8-8" /><path d="M15 7h6v6" /></svg>
                    <h5 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '16px', color: '#fff', margin: '12px 0 6px' }}>Predictive Analysis</h5>
                    <p style={{ fontSize: '13px', color: '#9aa9ae', margin: '0', lineHeight: '1.55' }}>Identify cost outliers before they become issues.</p>
                  </div>
                </div>
              </div>
              <div data-reveal="right" style={{ border: "1px solid rgba(255,255,255,.22)", background: "#04222c", padding: "32px 28px" }}>
                <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#e3ab7c", marginBottom: "20px" }}>Included in every engagement</div>
                <div style={{ display: "grid", gap: "20px" }}>
                  <div style={{ borderLeft: "3px solid #B06533", paddingLeft: "16px" }}>
                    <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "15px", color: "#fff", marginBottom: "6px" }}>Your estimates, benchmarked in real time</div>
                    <div style={{ fontSize: "13px", color: "#9aa9ae", lineHeight: "1.6" }}>As your project develops, Praetorian IQ compares your cost position against comparable delivered projects at the same stage gate.</div>
                  </div>
                  <div style={{ borderLeft: "3px solid #B06533", paddingLeft: "16px" }}>
                    <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "15px", color: "#fff", marginBottom: "6px" }}>Your documents, instantly searchable</div>
                    <div style={{ fontSize: "13px", color: "#9aa9ae", lineHeight: "1.6" }}>Contracts, estimates and reports indexed and searchable in natural language -- no more hunting through shared drives.</div>
                  </div>
                  <div style={{ borderLeft: "3px solid #B06533", paddingLeft: "16px" }}>
                    <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "15px", color: "#fff", marginBottom: "6px" }}>Risk flagged before it becomes a problem</div>
                    <div style={{ fontSize: "13px", color: "#9aa9ae", lineHeight: "1.6" }}>Cost outliers and schedule drift identified against the benchmark before they show up in a monthly report.</div>
                  </div>
                </div>
                <div style={{ marginTop: "28px", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,.14)", fontSize: "13px", color: "#6b7a80", lineHeight: "1.6" }}>
                  Access to Praetorian IQ is embedded in our client engagements. It is not a standalone subscription product.
                </div>
              </div>
            </div>
          </section>
*/}

          <section style={{ maxWidth: '1400px', margin: '0 auto', padding: 'clamp(28px,3.5vw,52px) clamp(16px,4vw,44px)', background: '#ffffff' }}>
            <div data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#B06533' }}>{home.resources.eyebrow}</div>
            <h2 data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: 'clamp(30px,3.6vw,44px)', margin: '12px 0 0', color: '#003E52' }}>{home.resources.heading}</h2>
            <div style={{ width: '64px', height: '3px', background: '#B06533', margin: '18px 0 34px' }}></div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 'clamp(16px,2vw,22px)', textAlign: 'left' }}>
              {home.resources.cards.map((card, i) => (
                <a key={card._key ?? i} data-reveal="" href={resourceMeta[i]?.href ?? "/news"} style={{ background: '#fff', boxShadow: '0 2px 14px rgba(0,20,30,.06)', padding: '22px 20px', textDecoration: 'none', color: 'inherit', display: 'block' }}>
                  {resourceMeta[i]?.icon}
                  <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '19px', margin: '16px 0 5px', color: '#003E52' }}>{card.title}</h4>
                  <p style={{ fontSize: '13px', margin: '0', color: '#687074' }}>{card.description}</p>
                </a>
              ))}
            </div>
          </section>

          <section style={{ borderTop: '1px solid #e4e6e7', background: '#f7f7f7' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: 'clamp(28px,3.5vw,52px) clamp(16px,4vw,44px)' }}>
              <div data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#B06533' }}>{home.newsSection.eyebrow}</div>
              <h2 data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: 'clamp(30px,3.6vw,44px)', margin: '12px 0 0', color: '#003E52' }}>{home.newsSection.heading}</h2>
              <div style={{ width: '64px', height: '3px', background: '#B06533', margin: '18px 0 34px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(20px,2.6vw,30px)' }}>
                {latestArticles.map((article: HomeArticle) => (
                  <Link
                    key={article._id}
                    href={'/news/' + article.slug.current}
                    data-reveal=''
                    style={{ textDecoration: 'none', color: 'inherit', display: 'block', background: '#fff', boxShadow: '0 2px 14px rgba(0,20,30,.06)' }}
                  >
                    <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                      {article.coverImageUrl ? (
                        <div style={{ position: 'absolute', inset: '0', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundImage: 'url(' + article.coverImageUrl + ')' }} />
                      ) : (
                        <div style={{ position: 'absolute', inset: '0', background: '#003E52' }} />
                      )}
                    </div>
                    <div style={{ padding: '18px 20px 22px' }}>
                      <span style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600', fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', color: '#B06533' }}>{article.category}</span>
                      <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '20px', margin: '10px 0 8px', lineHeight: '1.25', color: '#003E52' }}>{article.title}</h4>
                      <div style={{ fontSize: '12.5px', color: '#7d8288' }}>{formatHomeDate(article.publishedAt)}{article.readTime ? ' · ' + article.readTime + ' min read' : ''}</div>
                    </div>
                  </Link>
                ))}
              </div>
              <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <Link href='/news' style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#003E52', color: '#fff', textDecoration: 'none', minHeight: '44px', padding: '0 24px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600', fontSize: '14px' }}>View All Articles</Link>
              </div>
            </div>
          </section>
        </div>
          <CTABanner />
    </main>
  );
}
