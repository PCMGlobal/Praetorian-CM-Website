import type { Metadata } from "next";
import Link from "next/link";
import { client } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Careers | Praetorian Construction Management",
  description: "Build the world's most complex projects from the owner's side. Career opportunities in mining project management.",
};

export const revalidate = 60;

type Benefit = { _key?: string; title: string; description?: string };
type Discipline = { _key?: string; title: string; description?: string; tags?: string };
type Opening = { _key?: string; title: string; meta?: string };

type CareersPageData = {
  hero: {
    eyebrow?: string;
    headline: string;
    body?: string;
    primaryCtaLabel?: string;
    secondaryCtaLabel?: string;
  };
  whyChooseUs: {
    eyebrow?: string;
    heading: string;
    paragraphs: string[];
    benefits: Benefit[];
  };
  peopleSection: {
    eyebrow?: string;
    quote?: string;
    authorInitials?: string;
    authorName?: string;
    authorTitle?: string;
    ctaLabel?: string;
    stat1Value?: string;
    stat1Label?: string;
    stat2Value?: string;
    stat2Label?: string;
    stat3Title?: string;
    stat3Body?: string;
  };
  disciplinesSection: {
    eyebrow?: string;
    heading?: string;
    disciplines: Discipline[];
  };
  opportunities: {
    eyebrow?: string;
    heading?: string;
    paragraph1?: string;
    paragraph2Prefix?: string;
    contactCtaLabel?: string;
    stayConnectedLabel?: string;
    linkedinLabel?: string;
    currentOpeningsLabel?: string;
    openings: Opening[];
    careerOpportunitiesLabel?: string;
    roles: string[];
    disclaimerNote?: string;
  };
};

// Matches what's live today -- shown whenever the "Careers Page" document
// hasn't been created/published in Sanity Studio yet, so the site never regresses.
const DEFAULT_CAREERS: CareersPageData = {
  hero: {
    eyebrow: "Careers",
    headline: "Build the world's most complex projects. From the owner's side.",
    body: "Praetorian offers career opportunities in project management with a primary focus on capital project development in the mining industry. Successful candidates demonstrate an interest and personal drive towards growth in their leadership and technical abilities.",
    primaryCtaLabel: "View Opportunities",
    secondaryCtaLabel: "Submit a Profile",
  },
  whyChooseUs: {
    eyebrow: "Why Choose Us",
    heading: "Our people are our delivery capability",
    paragraphs: [
      "Our core training and development programs support the principle of mentoring through developmental delegation. This ensures a system of successor preparation and cross support of responsibilities for each position on a project team.",
      "Team leaders are challenged to position their teams to optimise skills and abilities while setting individual growth goals for each project member. Our teams consist of Engineers, Technologists, and Tradespersons, providing a balanced approach to managing projects and the contractors who deliver them.",
      "Recognising the value of the balance between profession and family, Praetorian has a high focus on quality of life promoted through optimised project shift schedules, team development retreats, sporting activities, and milestone celebrations where family participation is encouraged.",
    ],
    benefits: [
      { title: "Global project exposure", description: "Operations in Canada, the USA, South America, Central America, and Eurasia. Our people work on projects that few firms in the world have access to." },
      { title: "Owner's team accountability", description: "Embedded directly in the client's ownership team, making decisions that directly affect project outcomes." },
      { title: "People-first culture", description: "Training programs in leadership, management systems, and technical subjects. Internal recognition, family-inclusive milestones, and a lower-than-average employee turnover rate." },
      { title: "Technology-forward culture", description: "Praetorian is investing in AI-powered project intelligence through Praetorian IQ, reshaping how mining construction is managed globally." },
    ],
  },
  peopleSection: {
    eyebrow: "Our People, Our Value",
    quote: "I have been working with Praetorian for 7 years as Human Resource Manager and my favourite part about the company is the diverse work experience and locations, the international work and how much I am involved as a whole with the day to day operations. Working at Praetorian, the day to day direct contact with all members of the Team provides that “home” and “human” element to an industry that is sometimes lost with a larger organisation. Praetorian’s employee turnover rate is lower and they take care of their Team! Calling for all talents, the opportunities are endless and the next exciting opportunity is just around the corner!",
    authorInitials: "AG",
    authorName: "Annette Genge",
    authorTitle: "Human Resource Manager",
    ctaLabel: "Apply Now",
    stat1Value: "7+",
    stat1Label: "Years average tenure for senior staff",
    stat2Value: "6",
    stat2Label: "Countries with active project deployments",
    stat3Title: "Equal opportunity employer",
    stat3Body: "We do not discriminate on the basis of race, gender, age, religion, disability, or sexual orientation",
  },
  disciplinesSection: {
    eyebrow: "Disciplines we hire",
    heading: "What we look for",
    disciplines: [
      { title: "Project Controls", description: "Cost engineers, schedulers, estimators, and document controllers with mining or heavy industrial project experience.", tags: "P6 · Prism · ACCE · Excel" },
      { title: "Construction Management", description: "Field-experienced construction managers, superintendent-level personnel, and quality leads who have run contractor teams on complex builds.", tags: "Open pit · Process plant · Infrastructure" },
      { title: "Engineering Support", description: "Engineers with constructability review and value engineering backgrounds, able to interrogate contractor designs on behalf of the owner.", tags: "Civil · Structural · Process · Mechanical" },
      { title: "Procurement and Contracts", description: "Contracts administrators and procurement specialists with experience managing major vendor packages and subcontract performance.", tags: "FIDIC · NEC · Lump sum · EPCM" },
      { title: "HSSE Leadership", description: "Health, safety, and environmental professionals who lead from the field, experienced in remote, high-hazard mining and heavy construction environments.", tags: "CRSP · NEBOSH · ISO 14001" },
      { title: "Commissioning and Turnover", description: "Commissioning managers and QA/QC leads experienced in punch list closure, system handover packages, and ramp-up performance management.", tags: "Mechanical · Electrical · Instrumentation" },
    ],
  },
  opportunities: {
    eyebrow: "Employment Opportunities",
    heading: "Live Positions",
    paragraph1: "Thank you for considering employment with Praetorian. Specific openings are posted as engagements are confirmed. If you don't see a role that matches your background, send us a profile; we maintain a register of qualified candidates for upcoming projects.",
    paragraph2Prefix: "Send your resume directly to:",
    contactCtaLabel: "Contact Careers",
    stayConnectedLabel: "Stay Connected",
    linkedinLabel: "Follow us on LinkedIn for future opportunities",
    currentOpeningsLabel: "Current Openings",
    openings: [
      { title: "Senior Cost Engineer", meta: "Location TBC · Project-based engagement" },
      { title: "Construction Manager", meta: "Location TBC · Project-based engagement" },
      { title: "Project Controls Lead", meta: "Location TBC · Project-based engagement" },
    ],
    careerOpportunitiesLabel: "Career Opportunities Include",
    roles: [
      "Project Managers",
      "Contracts Managers",
      "Construction Managers",
      "Safety Professionals",
      "Project Engineers",
      "IT Specialists",
      "Business Managers",
      "Survey and CAD Managers",
      "Superintendents",
      "Procurement Specialists",
      "Cost Controllers",
      "Warehouse and Inventory",
      "Planners and Schedulers",
      "Quality Assurance Managers",
      "Field Engineers",
      "QC Inspectors",
      "Commissioning Supts.",
      "Administration Personnel",
      "Document Controllers",
      "Logistics Specialists",
    ],
    disclaimerNote: "Live job listings will be CMS-driven at launch. Placeholder roles shown for layout review.",
  },
};

async function getCareersPage(): Promise<CareersPageData | null> {
  try {
    return await client.fetch(
      `*[_type == "careersPage"][0]{
        hero{ eyebrow, headline, body, primaryCtaLabel, secondaryCtaLabel },
        whyChooseUs{ eyebrow, heading, paragraphs, benefits[]{ _key, title, description } },
        peopleSection{ eyebrow, quote, authorInitials, authorName, authorTitle, ctaLabel, stat1Value, stat1Label, stat2Value, stat2Label, stat3Title, stat3Body },
        disciplinesSection{ eyebrow, heading, disciplines[]{ _key, title, description, tags } },
        opportunities{ eyebrow, heading, paragraph1, paragraph2Prefix, contactCtaLabel, stayConnectedLabel, linkedinLabel, currentOpeningsLabel, openings[]{ _key, title, meta }, careerOpportunitiesLabel, roles, disclaimerNote }
      }`
    );
  } catch {
    return null;
  }
}

export default async function CareersPage() {
  const fetched = await getCareersPage();
  const data = fetched ?? DEFAULT_CAREERS;

  const benefitIcons = [
    <svg key="0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e3ab7c" strokeWidth="1.6"><path d="M12 2L2 7l10 5 10-5-10-5ZM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>,
    <svg key="1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e3ab7c" strokeWidth="1.6"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>,
    <svg key="2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e3ab7c" strokeWidth="1.6"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
    <svg key="3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e3ab7c" strokeWidth="1.6"><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>,
  ];

  return (
    <main>
      <div>
          <section style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: '0', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundImage: 'url(/images/photos/pcml-hero-03.jpg)' }}></div>
            <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(100deg,rgba(0,15,22,.9) 0%,rgba(0,25,36,.72) 48%,rgba(0,15,22,.4) 100%)' }}></div>
            <div style={{ position: 'relative', maxWidth: '1400px', margin: '0 auto', padding: 'clamp(40px,5vw,72px) clamp(16px,4vw,44px)' }}>
              <Link href="/" style={{ background: 'none', border: '0', padding: '0', color: '#e3ab7c', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
                Home
              </Link>
              <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#e3ab7c', marginTop: '22px' }}>{data.hero.eyebrow}</div>
              <h1 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '800', fontSize: 'clamp(34px,4.6vw,58px)', margin: '14px 0 0', color: '#fff', lineHeight: '1.04', maxWidth: '24ch' }}>{data.hero.headline}</h1>
              <p style={{ fontSize: '16.5px', lineHeight: '1.62', maxWidth: '62ch', color: '#c3d0d4', margin: '18px 0 0' }}>{data.hero.body}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '28px' }}>
                <a href="#pcml-opportunities" style={{ background: '#B06533', color: '#fff', textDecoration: 'none', minHeight: '48px', display: 'flex', alignItems: 'center', padding: '0 24px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600', fontSize: '15px' }}>{data.hero.primaryCtaLabel}</a>
                <a href="mailto:careers@praetoriancm.com" style={{ minHeight: '48px', display: 'flex', alignItems: 'center', padding: '0 22px', fontSize: '15px', color: '#fff', border: '1px solid rgba(255,255,255,.55)', textDecoration: 'none', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600' }}>{data.hero.secondaryCtaLabel}</a>
              </div>
            </div>
          </section>

          <section id="pcml-careers-why" style={{ maxWidth: '1400px', margin: '0 auto', padding: 'clamp(46px,6vw,84px) clamp(16px,4vw,44px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: 'clamp(36px,5vw,72px)', alignItems: 'start' }}>
              <div>
                <div data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#B06533', marginBottom: '12px' }}>{data.whyChooseUs.eyebrow}</div>
                <h2 data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '800', fontSize: 'clamp(28px,3.2vw,40px)', margin: '0 0 20px', color: '#003E52', lineHeight: '1.08' }}>{data.whyChooseUs.heading}</h2>
                {data.whyChooseUs.paragraphs.map((paragraph, i) => (
                  <p key={i} style={{ fontSize: '15.5px', lineHeight: '1.7', color: '#555c60', margin: i === data.whyChooseUs.paragraphs.length - 1 ? '0' : '0 0 18px' }}>{paragraph}</p>
                ))}
              </div>
              <div style={{ display: 'grid', gap: '0', border: '1px solid #e4e6e7' }}>
                {data.whyChooseUs.benefits.map((benefit, i) => (
                  <div key={benefit._key ?? i} data-reveal="" style={{ padding: '28px 26px', borderBottom: i < data.whyChooseUs.benefits.length - 1 ? '1px solid #e4e6e7' : undefined, display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                    <div style={{ flexShrink: '0', width: '42px', height: '42px', background: '#003E52', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {benefitIcons[i]}
                    </div>
                    <div>
                      <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '17px', color: '#003E52', margin: '0 0 6px' }}>{benefit.title}</h4>
                      <p style={{ fontSize: '13.5px', lineHeight: '1.6', color: '#555c60', margin: '0' }}>{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="pcml-careers-people" style={{ background: '#003E52', padding: 'clamp(46px,6vw,84px) 0' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(16px,4vw,44px)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 'clamp(36px,5vw,64px)', alignItems: 'center' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#e3ab7c', marginBottom: '20px' }}>{data.peopleSection.eyebrow}</div>
                  <svg width="36" height="28" viewBox="0 0 40 30" fill="#B06533" style={{ marginBottom: '20px' }}><path d="M0 30V19C0 8 6 2 18 0l3 4C15 5.5 12 8 11 12h6V30H0zm22 0V19C22 8 28 2 40 0l3 4C37 5.5 34 8 33 12h6V30H22z" /></svg>
                  <p style={{ fontSize: '16px', lineHeight: '1.75', color: '#e9eef0', fontStyle: 'italic', margin: '0 0 28px' }}>{data.peopleSection.quote}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '48px', height: '48px', background: '#B06533', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '800', fontSize: '18px', color: '#fff' }}>{data.peopleSection.authorInitials}</div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '16px', color: '#fff' }}>{data.peopleSection.authorName}</div>
                      <div style={{ fontSize: '13px', color: '#9aa9ae', marginTop: '3px' }}>{data.peopleSection.authorTitle}</div>
                    </div>
                  </div>
                  <div style={{ marginTop: '28px' }}>
                    <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#B06533', color: '#fff', padding: '0 24px', minHeight: '46px', fontSize: '15px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600', textDecoration: 'none' }}>{data.peopleSection.ctaLabel}</a>
                  </div>
                </div>
                <div style={{ display: 'grid', gap: '16px' }}>
                  <div style={{ background: 'rgba(255,255,255,.06)', borderLeft: '3px solid #B06533', padding: '22px 24px' }}>
                    <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '32px', color: '#e3ab7c', lineHeight: '1' }}>{data.peopleSection.stat1Value}</div>
                    <div style={{ fontSize: '13px', color: '#9aa9ae', marginTop: '6px' }}>{data.peopleSection.stat1Label}</div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,.06)', borderLeft: '3px solid #B06533', padding: '22px 24px' }}>
                    <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '32px', color: '#e3ab7c', lineHeight: '1' }}>{data.peopleSection.stat2Value}</div>
                    <div style={{ fontSize: '13px', color: '#9aa9ae', marginTop: '6px' }}>{data.peopleSection.stat2Label}</div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,.06)', borderLeft: '3px solid #B06533', padding: '22px 24px' }}>
                    <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '14px', color: '#e3ab7c', lineHeight: '1.3', marginBottom: '6px' }}>{data.peopleSection.stat3Title}</div>
                    <div style={{ fontSize: '13px', color: '#9aa9ae' }}>{data.peopleSection.stat3Body}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section style={{ background: '#f7f7f7', padding: 'clamp(46px,6vw,84px) 0' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(16px,4vw,44px)' }}>
              <div data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#B06533' }}>{data.disciplinesSection.eyebrow}</div>
              <h2 data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '800', fontSize: 'clamp(28px,3.2vw,40px)', margin: '12px 0 0', color: '#003E52' }}>{data.disciplinesSection.heading}</h2>
              <div style={{ width: '64px', height: '3px', background: '#B06533', margin: '18px 0 38px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'clamp(20px,2.6vw,26px)' }}>
                {data.disciplinesSection.disciplines.map((discipline, i) => (
                  <div key={discipline._key ?? i} data-reveal="" style={{ background: '#fff', padding: '24px', boxShadow: '0 2px 14px rgba(0,20,30,.06)', borderLeft: '3px solid #B06533' }}>
                    <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', color: '#003E52', margin: '0 0 8px' }}>{discipline.title}</h4>
                    <p style={{ fontSize: '13.5px', lineHeight: '1.6', color: '#5b6266', margin: '0 0 12px' }}>{discipline.description}</p>
                    <div style={{ fontSize: '12px', letterSpacing: '.08em', textTransform: 'uppercase', color: '#B06533', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600' }}>{discipline.tags}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="pcml-opportunities" style={{ maxWidth: '1400px', margin: '0 auto', padding: 'clamp(46px,6vw,84px) clamp(16px,4vw,44px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: 'clamp(36px,5vw,64px)', alignItems: 'start' }}>
              <div>
                <div data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#B06533' }}>{data.opportunities.eyebrow}</div>
                <h2 data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: 'clamp(28px,3.2vw,40px)', margin: '12px 0 16px', color: '#003E52' }}>{data.opportunities.heading}</h2>
                <p style={{ fontSize: '15px', lineHeight: '1.65', color: '#555c60', margin: '0 0 16px' }}>{data.opportunities.paragraph1}</p>
                <p style={{ fontSize: '15px', lineHeight: '1.65', color: '#555c60', margin: '0 0 28px' }}>{data.opportunities.paragraph2Prefix} <a href="mailto:careers@praetoriancm.com" style={{ color: '#B06533', fontWeight: '600' }}>careers@praetoriancm.com</a></p>
                <a href="mailto:careers@praetoriancm.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#B06533', color: '#fff', textDecoration: 'none', minHeight: '46px', padding: '0 22px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600', fontSize: '14px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  {data.opportunities.contactCtaLabel}
                </a>
                <div style={{ marginTop: '28px', padding: '20px 22px', background: '#f7f7f7', borderLeft: '3px solid #003E52' }}>
                  <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '11px', color: '#003E52', marginBottom: '12px', letterSpacing: '.1em', textTransform: 'uppercase' }}>{data.opportunities.stayConnectedLabel}</div>
                  <a href="https://www.linkedin.com/company/praetorian-construction-management/" target="_blank" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: '#003E52', textDecoration: 'none', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600', fontSize: '14px' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#003E52"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                    {data.opportunities.linkedinLabel}
                  </a>
                </div>
              </div>
              <div data-reveal="right" style={{ background: '#fff', border: '1px solid #e4e6e7', padding: 'clamp(24px,3vw,36px)' }}>
                <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '14px', color: '#003E52', marginBottom: '14px' }}>{data.opportunities.currentOpeningsLabel}</div>
                <div style={{ display: 'grid', gap: '10px', marginBottom: '24px' }}>
                  {data.opportunities.openings.map((opening, i) => (
                    <div key={opening._key ?? i} style={{ padding: '14px 16px', background: '#f7f7f7', border: '1px solid #e4e6e7' }}>
                      <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '16px', color: '#003E52' }}>{opening.title}</div>
                      <div style={{ fontSize: '13px', color: '#7d8288', marginTop: '4px' }}>{opening.meta}</div>
                    </div>
                  ))}
                </div>
                <div style={{ borderTop: '1px solid #e4e6e7', paddingTop: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '11px', color: '#003E52', marginBottom: '14px', letterSpacing: '.1em', textTransform: 'uppercase' }}>{data.opportunities.careerOpportunitiesLabel}</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
                    {data.opportunities.roles.map((role, i) => (
                      <div key={i} style={{ fontSize: '13px', color: '#555c60', padding: i % 2 === 0 ? '7px 0' : '7px 8px', borderBottom: '1px solid #eef0f1' }}>{role}</div>
                    ))}
                  </div>
                  <p style={{ fontSize: '12px', color: '#8b9095', margin: '16px 0 0', fontStyle: 'italic' }}>{data.opportunities.disclaimerNote}</p>
                </div>
              </div>
            </div>
          </section>
      </div>
    </main>
  );
}
