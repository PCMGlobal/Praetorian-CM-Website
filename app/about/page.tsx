import type { Metadata } from "next";
import CTABanner from "@/app/components/CTABanner";
import Link from "next/link";
import { client } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Praetorian Construction Management | Mining Specialists",
  description: "Praetorian Construction Management brings 20+ years of owner's team expertise across mining, energy, and industrial construction worldwide.",
};

export const revalidate = 60;

type WhoWeArePoint = { _key?: string; title: string; body?: string };
type MvgColumn = { _key?: string; label: string; items?: string[] };
type WhyPraetorianPoint = { _key?: string; title: string; description?: string };
type CareerReason = { _key?: string; title: string; description?: string };
type TeamMember = { _key?: string; name: string; role?: string; bio?: string };

type AboutPageData = {
  hero: { eyebrow?: string; headline: string; body?: string };
  whoWeAre: {
    eyebrow?: string;
    heading?: string;
    paragraph1?: string;
    paragraph2?: string;
    points: WhoWeArePoint[];
  };
  missionVisionGoals: {
    eyebrow?: string;
    heading?: string;
    columns: MvgColumn[];
  };
  whyPraetorian: {
    eyebrow?: string;
    heading?: string;
    points: WhyPraetorianPoint[];
  };
  careers: {
    eyebrow?: string;
    heading?: string;
    paragraph1?: string;
    paragraph2?: string;
    paragraph3?: string;
    paragraph4?: string;
    resumeIntro?: string;
    stayConnectedLabel?: string;
    linkedinLabel?: string;
    reasons: CareerReason[];
  };
  management: {
    eyebrow?: string;
    heading?: string;
    members: TeamMember[];
  };
};

// Matches what's live today -- shown whenever the "About Page" document hasn't
// been created/published in Sanity Studio yet, so the site never regresses.
const DEFAULT_ABOUT: AboutPageData = {
  hero: {
    eyebrow: "About Us",
    headline: "Mining Construction Management & Project Management Experts.",
    body: "Praetorian Construction Management has experience in a diverse field of industrial construction including: mining, petrochemical, power, refineries, dams, roadways, water treatment plants, natural gas pipelines and compressor stations, forestry and marine. Over the past two decades, mining has been the primary focus of our work, and it is where our deepest expertise and reputation have been built.",
  },
  whoWeAre: {
    eyebrow: "Who we are",
    heading: "Who We Are",
    paragraph1: "We are Mining Construction Management and Project Management Experts. While our project experience spans most major industrial sectors, we have developed a reputation as an expert in the mining sector.",
    paragraph2: "Given our team's unique skills, Praetorian offers a complete portfolio of services from reviewing a project's feasibility through to mine operations. We have both the experience and tools for establishing project control systems, contract management, purchasing services and construction management.",
    points: [
      { title: "Leadership and Teamwork", body: "We build leaders who lead their team using effective communication and a focus on continuous improvement to achieve team excellence. Through this, we are able to provide exceptional and reliable project management services to our clients." },
      { title: "Balanced Approach", body: "Our team comprises of roughly one-third Trades, one-third Technologists and one-third Engineers which provides a balanced approach to managing projects and the contractors who deliver the projects. Our team excels in both technical expertise and the soft skills required to lead." },
      { title: "Footprints and Cultural Sensitivity", body: "We have worked on projects across Canada, US, Central and South America and Eurasia. We have an understanding of various cultures and are able to work efficiently while being sensitive to the local culture." },
    ],
  },
  missionVisionGoals: {
    eyebrow: "Mission, Vision and Goals",
    heading: "Mission, Vision and Goals",
    columns: [
      {
        label: "Mission",
        items: [
          "Provide exceptional reliable project management services to select clients in the resource sector.",
          "Build team excellence through leadership, effective communications and a focus on continuous improvement.",
        ],
      },
      {
        label: "Vision",
        items: [
          "Develop an elite team of project management specialists who provide our clients with expertise for the development and construction of projects at both new and existing facilities in the resource sector.",
          "Continuously strive to develop a culture of excellence between our contractors and ourselves that is evolutionary, having the potential to grow, adapt and excel in an ever-changing work landscape.",
        ],
      },
      {
        label: "Goals",
        items: [
          "Create a legacy of excellence in the work Praetorian Construction Management does for our clients.",
          "Be recognized by our clients, industry and our team for developing a built-to-last group of professionals who retain and promote a balance between work and family.",
          "Build on our reputation as a leader in the management of resource projects in remote locations worldwide.",
          "Instill a safety culture of zero harm on every project.",
        ],
      },
    ],
  },
  whyPraetorian: {
    eyebrow: "Why Praetorian",
    heading: "Why Praetorian?",
    points: [
      { title: "Balanced Team of Professionals", description: "Our mixed team of trades, technologists and engineers results in a balanced, practical approach to contractor management, bringing the right discipline to every challenge on site." },
      { title: "Project Execution & Engineering Independence", description: "We operate at arm's length from the engineering effort, giving us the ability to make recommendations and take actions that are unbiased and transparent on behalf of the owner." },
      { title: "Global Experience & Adaptability", description: "Our ability to adapt to new environments, cultures and market locations sets us apart. We understand what it takes to operate effectively in international markets across six countries." },
      { title: "Efficient & Economical Multi-Functional Teams", description: "Our teams are cross-trained, enabling non-duplication of roles without sacrificing quality. This is especially important for rotational shift work, where versatility directly impacts project economics." },
      { title: "Flexibility & Integrated Team Approach", description: "Our experience working as an integrated project management team alongside client personnel and other organisations gives us a unique advantage. We adapt our structure to fit seamlessly within the owner's team." },
      { title: "Extensive Direct-Hire Contracting Experience", description: "A large proportion of our team came through the direct-hire contractor background. We understand how contractors operate, their challenges and the practical solutions that keep projects moving." },
    ],
  },
  careers: {
    eyebrow: "Why Choose Us",
    heading: "Our people are our delivery capability",
    paragraph1: "Our core training and development programs support the principle of mentoring through developmental delegation. This ensures a system of successor preparation and cross support of responsibilities for each position on a project team.",
    paragraph2: "Team leaders are challenged to position their teams to optimise skills and abilities while setting individual growth goals for each project member. Our teams consist of Engineers, Technologists, and Tradespersons, providing a balanced approach to managing projects and the contractors who deliver them.",
    paragraph3: "Recognising the value of the balance between profession and family, Praetorian has a high focus on quality of life promoted through optimised project shift schedules, team development retreats, sporting activities, and milestone celebrations where family participation is encouraged.",
    paragraph4: "Praetorian is always looking for the right talent to join our team.",
    resumeIntro: "Send your resume directly to:",
    stayConnectedLabel: "Stay Connected",
    linkedinLabel: "Follow us on LinkedIn for future opportunities",
    reasons: [
      { title: "Global project exposure", description: "Operations in Canada, the USA, South America, Central America, and Eurasia. Our people work on projects in remote and challenging locations." },
      { title: "Owner's team accountability", description: "Embedded within the client's ownership team, supporting the Owners in making decisions that positively impact project outcomes." },
      { title: "People-first culture", description: "Leadership and technical training programs. Family-oriented schedules and lower-than-average employee turnover." },
      { title: "Technology-forward culture", description: "Praetorian is investing in AI-powered project intelligence through Praetorian IQ, reshaping how mining construction is managed." },
    ],
  },
  management: {
    eyebrow: "Management Team",
    heading: "Management Team",
    members: [
      { name: "Michael P. Culleton P.Eng.", role: "CEO", bio: "Michael has almost four decades of construction experience with a strong project controls and engineering background. The greatest portion of his career has been spent on mining projects. His in-depth knowledge of management and controls has contributed to a reputation of competence, integrity and loyalty." },
      { name: "K. Bradley Walter", role: "President", bio: "With more than four decades of construction experience, Brad has provided executive leadership to guide multiple industrial projects to successful completion. As an owner's representative, he has a reputation for getting contractors to produce high quality work on time and on budget." },
      { name: "Femi R. Farinu, P.Eng., CPA", role: "Vice President, Technical Services", bio: "Femi has almost three decades of work experience in construction, manufacturing and finance. With a background in Mining, Oil and Gas and Infrastructure, he applies his leadership and project management skills in support of project teams. His strength lies in Project Controls, Commercial Management and Accounting." },
      { name: "L. Annette Genge", role: "Human Resources Manager", bio: "Annette is a highly skilled Human Resources and Organization Management professional with more than two decades of experience spanning industrial construction and mining projects in Canada and international markets. She leads Employee Relations, Performance Management, Recruitment and HR Operations at Praetorian." },
      { name: "Lisa Sander", role: "Finance Manager", bio: "Seasoned accounting specialist with almost three decades of experience, including 19 years specialising in the oil and mining industries. Proven ability to manage all accounting functions, financial reporting, and compliance. Adept at streamlining processes, ensuring accuracy, and delivering actionable financial insights to support strategic decision making. Skilled in corporate finance, budgeting, tax reporting, and regulatory compliance, with a track record of driving efficiency and financial integrity." },
      { name: "Rob Ledgister", role: "VP, Project Development", bio: "Rob brings almost three decades of multidisciplinary project management experience, with a strong foundation in project controls, scheduling and QA/QC. The greatest portion of his career has been spent on mining and industrial projects across Canada, where his methodical approach to project setup and execution has earned him a reputation for reliability and technical rigour." },
    ],
  },
};

async function getAboutPage(): Promise<AboutPageData | null> {
  try {
    return await client.fetch(
      `*[_type == "aboutPage"][0]{
        hero{ eyebrow, headline, body },
        whoWeAre{ eyebrow, heading, paragraph1, paragraph2, points[]{ _key, title, body } },
        missionVisionGoals{ eyebrow, heading, columns[]{ _key, label, items } },
        whyPraetorian{ eyebrow, heading, points[]{ _key, title, description } },
        careers{ eyebrow, heading, paragraph1, paragraph2, paragraph3, paragraph4, resumeIntro, stayConnectedLabel, linkedinLabel, reasons[]{ _key, title, description } },
        management{ eyebrow, heading, members[]{ _key, name, role, bio } }
      }`
    );
  } catch {
    return null;
  }
}

export default async function AboutPage() {
  const aboutData = await getAboutPage();
  const about = aboutData ?? DEFAULT_ABOUT;

  return (
    <main>
      <div>
          <section style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: '0', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundImage: 'url(/images/photos/pcml-hero-01.jpg)' }}></div>
            <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(100deg,rgba(0,15,22,.9) 0%,rgba(0,25,36,.72) 48%,rgba(0,15,22,.4) 100%)' }}></div>
            <div style={{ position: 'relative', maxWidth: '1400px', margin: '0 auto', padding: 'clamp(24px,3vw,44px) clamp(16px,4vw,44px)' }}>
              <Link href="/" style={{ background: 'none', border: '0', padding: '0', color: '#e3ab7c', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
                Home
              </Link>
              <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', letterSpacing: '.12em', textTransform: 'uppercase', color: '#e3ab7c', marginTop: '22px' }}>{about.hero.eyebrow}</div>
              <h1 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '800', fontSize: 'clamp(25px,3.45vw,43px)', margin: '14px 0 0', color: '#fff', lineHeight: '1.04', maxWidth: '26ch' }}>{about.hero.headline}</h1>
              <p style={{ fontSize: '16.5px', lineHeight: '1.62', maxWidth: '70ch', color: '#c3d0d4', margin: '18px 0 0' }}>{about.hero.body}</p>
            </div>
          </section>
          <section style={{ maxWidth: '1400px', margin: '0 auto', padding: 'clamp(46px,6vw,84px) clamp(16px,4vw,44px)' }}>
            <div data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', letterSpacing: '.12em', textTransform: 'uppercase', color: '#B06533' }}>{about.whoWeAre.eyebrow}</div>
            <p style={{ fontSize: '16px', lineHeight: '1.7', maxWidth: '72ch', color: '#555c60', margin: '0 0 18px' }}>{about.whoWeAre.paragraph1}</p>
            <p style={{ fontSize: '16px', lineHeight: '1.7', maxWidth: '72ch', color: '#555c60', margin: '0 0 44px' }}>{about.whoWeAre.paragraph2}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(20px,2.6vw,28px)' }}>
              <div data-reveal="" style={{ padding: '28px 26px', borderTop: '3px solid #003E52', background: '#f7f7f7' }}>
                <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '20px', color: '#003E52', margin: '0 0 12px' }}>{about.whoWeAre.points[0]?.title}</h4>
                <p style={{ fontSize: '14.5px', lineHeight: '1.7', color: '#555c60', margin: '0' }}>{about.whoWeAre.points[0]?.body}</p>
              </div>
              <div data-reveal="" style={{ padding: '28px 26px', borderTop: '3px solid #B06533', background: '#f7f7f7' }}>
                <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '20px', color: '#003E52', margin: '0 0 12px' }}>{about.whoWeAre.points[1]?.title}</h4>
                <p style={{ fontSize: '14.5px', lineHeight: '1.7', color: '#555c60', margin: '0' }}>{about.whoWeAre.points[1]?.body}</p>
              </div>
              <div data-reveal="" style={{ padding: '28px 26px', borderTop: '3px solid #98999B', background: '#f7f7f7' }}>
                <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '20px', color: '#003E52', margin: '0 0 12px' }}>{about.whoWeAre.points[2]?.title}</h4>
                <p style={{ fontSize: '14.5px', lineHeight: '1.7', color: '#555c60', margin: '0' }}>{about.whoWeAre.points[2]?.body}</p>
              </div>
            </div>
          </section>
      <section id="pcml-mission" style={{ background: "#f7f7f7", padding: "clamp(46px,6vw,84px) 0", scrollMarginTop: "120px" }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(16px,4vw,44px)' }}>
              <div data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', letterSpacing: '.12em', textTransform: 'uppercase', color: '#B06533' }}>{about.missionVisionGoals.eyebrow}</div>
              <div style={{ width: '64px', height: '3px', background: '#B06533', margin: '18px 0 38px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'clamp(20px,2.6vw,30px)' }}>
                <div data-reveal="" style={{ background: '#fff', padding: '28px 26px', boxShadow: '0 2px 14px rgba(0,20,30,.06)', borderTop: '3px solid #003E52' }}>
                  <div style={{ fontSize: '36px', marginBottom: '10px' }}>🎯</div><div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.15em', textTransform: 'uppercase', color: '#003E52', marginBottom: '14px' }}>{about.missionVisionGoals.columns[0]?.label}</div>
                  <ul style={{ fontSize: '14.5px', lineHeight: '1.8', color: '#555c60', margin: '0', paddingLeft: '18px' }}>
                    {about.missionVisionGoals.columns[0]?.items?.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div data-reveal="" style={{ background: '#fff', padding: '28px 26px', boxShadow: '0 2px 14px rgba(0,20,30,.06)', borderTop: '3px solid #B06533' }}>
                  <div style={{ fontSize: '36px', marginBottom: '10px' }}>💡</div><div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', letterSpacing: '.15em', textTransform: 'uppercase', color: '#B06533', marginBottom: '14px' }}>{about.missionVisionGoals.columns[1]?.label}</div>
                  <ul style={{ fontSize: '14.5px', lineHeight: '1.8', color: '#555c60', margin: '0', paddingLeft: '18px' }}>
                    {about.missionVisionGoals.columns[1]?.items?.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div data-reveal="" style={{ background: '#fff', padding: '28px 26px', boxShadow: '0 2px 14px rgba(0,20,30,.06)', borderTop: '3px solid #98999B' }}>
                  <div style={{ fontSize: '36px', marginBottom: '10px' }}>🏆</div><div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.15em', textTransform: 'uppercase', color: '#5b6266', marginBottom: '14px' }}>{about.missionVisionGoals.columns[2]?.label}</div>
                  <ul style={{ fontSize: '14.5px', lineHeight: '1.8', color: '#555c60', margin: '0', paddingLeft: '18px' }}>
                    {about.missionVisionGoals.columns[2]?.items?.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
      <section id="whypraetorian" style={{ maxWidth: "1400px", margin: "0 auto", padding: "clamp(46px,6vw,84px) clamp(16px,4vw,44px)", scrollMarginTop: "120px" }}>
            <div data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', letterSpacing: '.12em', textTransform: 'uppercase', color: '#B06533' }}>{about.whyPraetorian.eyebrow}</div>
            <div style={{ width: '64px', height: '3px', background: '#B06533', margin: '18px 0 38px' }}></div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'clamp(20px,2.6vw,30px)' }}>
              <div data-reveal="" style={{ padding: '28px 26px', borderTop: '3px solid #003E52', background: '#f7f7f7' }}>
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>👷</div>
                <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', color: '#003E52', margin: '0 0 12px' }}>{about.whyPraetorian.points[0]?.title}</h4>
                <p style={{ fontSize: '14.5px', lineHeight: '1.7', color: '#555c60', margin: '0' }}>{about.whyPraetorian.points[0]?.description}</p>
              </div>
              <div data-reveal="" style={{ padding: '28px 26px', borderTop: '3px solid #B06533', background: '#f7f7f7' }}>
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>🔍</div>
                <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', color: '#003E52', margin: '0 0 12px' }}>{about.whyPraetorian.points[1]?.title}</h4>
                <p style={{ fontSize: '14.5px', lineHeight: '1.7', color: '#555c60', margin: '0' }}>{about.whyPraetorian.points[1]?.description}</p>
              </div>
              <div data-reveal="" style={{ padding: '28px 26px', borderTop: '3px solid #98999B', background: '#f7f7f7' }}>
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>🌍</div>
                <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', color: '#003E52', margin: '0 0 12px' }}>{about.whyPraetorian.points[2]?.title}</h4>
                <p style={{ fontSize: '14.5px', lineHeight: '1.7', color: '#555c60', margin: '0' }}>{about.whyPraetorian.points[2]?.description}</p>
              </div>
              <div data-reveal="" style={{ padding: '28px 26px', borderTop: '3px solid #003E52', background: '#f7f7f7' }}>
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>⚙️</div>
                <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', color: '#003E52', margin: '0 0 12px' }}>{about.whyPraetorian.points[3]?.title}</h4>
                <p style={{ fontSize: '14.5px', lineHeight: '1.7', color: '#555c60', margin: '0' }}>{about.whyPraetorian.points[3]?.description}</p>
              </div>
              <div data-reveal="" style={{ padding: '28px 26px', borderTop: '3px solid #B06533', background: '#f7f7f7' }}>
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>🤝</div>
                <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', color: '#003E52', margin: '0 0 12px' }}>{about.whyPraetorian.points[4]?.title}</h4>
                <p style={{ fontSize: '14.5px', lineHeight: '1.7', color: '#555c60', margin: '0' }}>{about.whyPraetorian.points[4]?.description}</p>
              </div>
              <div data-reveal="" style={{ padding: '28px 26px', borderTop: '3px solid #98999B', background: '#f7f7f7' }}>
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>🏗️</div>
                <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', color: '#003E52', margin: '0 0 12px' }}>{about.whyPraetorian.points[5]?.title}</h4>
                <p style={{ fontSize: '14.5px', lineHeight: '1.7', color: '#555c60', margin: '0' }}>{about.whyPraetorian.points[5]?.description}</p>
              </div>
            </div>
          </section>
      <section id="pcml-careers" style={{ padding: "clamp(16px,2vw,28px) 0", scrollMarginTop: "120px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 clamp(16px,4vw,44px)" }}>
          <div data-reveal="" style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "18px", letterSpacing: ".12em", textTransform: "uppercase", color: "#B06533", marginBottom: "8px" }}>{about.careers.eyebrow}</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: "clamp(24px,3vw,44px)", alignItems: "stretch" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <p data-reveal="" style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "600", fontSize: "15.5px", margin: "0 0 20px", color: "#3a3f42", lineHeight: "1.5" }}>{about.careers.heading}</p>
              <p style={{ fontSize: "15.5px", lineHeight: "1.7", color: "#555c60", margin: "0 0 6px" }}>{about.careers.paragraph1}</p>
              <p style={{ fontSize: "15.5px", lineHeight: "1.7", color: "#555c60", margin: "0 0 6px" }}>{about.careers.paragraph2}</p>
              <p style={{ fontSize: "15.5px", lineHeight: "1.7", color: "#555c60", margin: "0 0 6px" }}>{about.careers.paragraph3}</p>
              <p style={{ fontSize: "15.5px", lineHeight: "1.7", color: "#555c60", margin: "0 0 6px" }}>{about.careers.paragraph4}</p>
              <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#555c60", margin: "0 0 6px" }}>{about.careers.resumeIntro} <a href="mailto:careers@praetoriancm.com" style={{ color: "#B06533", fontWeight: "600" }}>careers@praetoriancm.com</a></p>
              <div style={{ marginTop: "8px", padding: "20px 22px", background: "#f7f7f7", borderLeft: "3px solid #003E52" }}>
                <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "11px", color: "#003E52", marginBottom: "12px", letterSpacing: ".1em", textTransform: "uppercase" }}>{about.careers.stayConnectedLabel}</div>
                <a href="https://www.linkedin.com/company/praetorian-construction-management/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "10px", color: "#003E52", textDecoration: "none", fontFamily: "var(--font-sora), sans-serif", fontWeight: "600", fontSize: "14px" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#003E52"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  {about.careers.linkedinLabel}
                </a>
              </div>
            </div>
            <div style={{ display: "grid", gap: "0", border: "1px solid #e4e6e7" }}>
              <div data-reveal="" style={{ padding: "28px 26px", borderBottom: "1px solid #e4e6e7", display: "flex", gap: "20px", alignItems: "flex-start" }}>
                <div style={{ flexShrink: "0", width: "42px", height: "42px", background: "#003E52", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e3ab7c" strokeWidth="1.6"><path d="M12 2L2 7l10 5 10-5-10-5ZM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                </div>
                <div><h4 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "17px", color: "#003E52", margin: "0 0 6px" }}>{about.careers.reasons[0]?.title}</h4><p style={{ fontSize: "13.5px", lineHeight: "1.6", color: "#555c60", margin: "0" }}>{about.careers.reasons[0]?.description}</p></div>
              </div>
              <div data-reveal="" style={{ padding: "28px 26px", borderBottom: "1px solid #e4e6e7", display: "flex", gap: "20px", alignItems: "flex-start" }}>
                <div style={{ flexShrink: "0", width: "42px", height: "42px", background: "#003E52", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e3ab7c" strokeWidth="1.6"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>
                </div>
                <div><h4 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "17px", color: "#003E52", margin: "0 0 6px" }}>{about.careers.reasons[1]?.title}</h4><p style={{ fontSize: "13.5px", lineHeight: "1.6", color: "#555c60", margin: "0" }}>{about.careers.reasons[1]?.description}</p></div>
              </div>
              <div data-reveal="" style={{ padding: "28px 26px", borderBottom: "1px solid #e4e6e7", display: "flex", gap: "20px", alignItems: "flex-start" }}>
                <div style={{ flexShrink: "0", width: "42px", height: "42px", background: "#003E52", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e3ab7c" strokeWidth="1.6"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                </div>
                <div><h4 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "17px", color: "#003E52", margin: "0 0 6px" }}>{about.careers.reasons[2]?.title}</h4><p style={{ fontSize: "13.5px", lineHeight: "1.6", color: "#555c60", margin: "0" }}>{about.careers.reasons[2]?.description}</p></div>
              </div>
              <div data-reveal="" style={{ padding: "28px 26px", display: "flex", gap: "20px", alignItems: "flex-start" }}>
                <div style={{ flexShrink: "0", width: "42px", height: "42px", background: "#003E52", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e3ab7c" strokeWidth="1.6"><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
                </div>
                <div><h4 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "17px", color: "#003E52", margin: "0 0 6px" }}>{about.careers.reasons[3]?.title}</h4><p style={{ fontSize: "13.5px", lineHeight: "1.6", color: "#555c60", margin: "0" }}>{about.careers.reasons[3]?.description}</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="pcml-management" style={{ background: "#003E52", padding: "clamp(46px,6vw,84px) 0", scrollMarginTop: "120px" }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(16px,4vw,44px)' }}>
              <div data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', letterSpacing: '.12em', textTransform: 'uppercase', color: '#e3ab7c' }}>{about.management.eyebrow}</div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'clamp(20px,2.6vw,28px)' }}>
                <div data-reveal="" style={{ background: 'rgba(255,255,255,.06)', padding: '28px 24px' }}>
                  <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', color: '#fff', marginBottom: '4px' }}>{about.management.members[0]?.name}</div>
                  <div style={{ fontSize: '13px', color: '#e3ab7c', marginBottom: '14px', fontFamily: 'var(--font-sora), sans-serif' }}>{about.management.members[0]?.role}</div>
                  <p style={{ fontSize: '13.5px', lineHeight: '1.65', color: '#c3d0d4', margin: '0' }}>{about.management.members[0]?.bio}</p>
                </div>
                <div data-reveal="" style={{ background: 'rgba(255,255,255,.06)', padding: '28px 24px' }}>
                  <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', color: '#fff', marginBottom: '4px' }}>{about.management.members[1]?.name}</div>
                  <div style={{ fontSize: '13px', color: '#e3ab7c', marginBottom: '14px', fontFamily: 'var(--font-sora), sans-serif' }}>{about.management.members[1]?.role}</div>
                  <p style={{ fontSize: '13.5px', lineHeight: '1.65', color: '#c3d0d4', margin: '0' }}>{about.management.members[1]?.bio}</p>
                </div>
                <div data-reveal="" style={{ background: 'rgba(255,255,255,.06)', padding: '28px 24px' }}>
                  <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', color: '#fff', marginBottom: '4px' }}>{about.management.members[2]?.name}</div>
                  <div style={{ fontSize: '13px', color: '#e3ab7c', marginBottom: '14px', fontFamily: 'var(--font-sora), sans-serif' }}>{about.management.members[2]?.role}</div>
                  <p style={{ fontSize: '13.5px', lineHeight: '1.65', color: '#c3d0d4', margin: '0' }}>{about.management.members[2]?.bio}</p>
                </div>
                <div data-reveal="" style={{ background: 'rgba(255,255,255,.06)', padding: '28px 24px' }}>
                  <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', color: '#fff', marginBottom: '4px' }}>{about.management.members[3]?.name}</div>
                  <div style={{ fontSize: '13px', color: '#e3ab7c', marginBottom: '14px', fontFamily: 'var(--font-sora), sans-serif' }}>{about.management.members[3]?.role}</div>
                  <p style={{ fontSize: '13.5px', lineHeight: '1.65', color: '#c3d0d4', margin: '0' }}>{about.management.members[3]?.bio}</p>
                </div>
                <div data-reveal="" style={{ background: 'rgba(255,255,255,.06)', padding: '28px 24px' }}>
                  <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', color: '#fff', marginBottom: '4px' }}>{about.management.members[4]?.name}</div>
                  <div style={{ fontSize: '13px', color: '#e3ab7c', marginBottom: '14px', fontFamily: 'var(--font-sora), sans-serif' }}>{about.management.members[4]?.role}</div>
                  <p style={{ fontSize: '13.5px', lineHeight: '1.65', color: '#c3d0d4', margin: '0' }}>{about.management.members[4]?.bio}</p>
                </div>
                <div data-reveal="" style={{ background: 'rgba(255,255,255,.06)', padding: '28px 24px' }}>
                  <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', color: '#fff', marginBottom: '4px' }}>{about.management.members[5]?.name}</div>
                  <div style={{ fontSize: '13px', color: '#e3ab7c', marginBottom: '14px', fontFamily: 'var(--font-sora), sans-serif' }}>{about.management.members[5]?.role}</div>
                  <p style={{ fontSize: '13.5px', lineHeight: '1.65', color: '#c3d0d4', margin: '0', fontStyle: 'italic' }}>{about.management.members[5]?.bio}</p>
                </div>
              </div>
              <p style={{ fontSize: '12px', color: '#7d8899', marginTop: '28px', fontStyle: 'italic' }}></p>
            </div>
          </section>
        </div>
          <CTABanner />
    </main>
  );
}
