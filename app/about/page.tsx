import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Praetorian Construction Management",
  description: "Mining construction and project management specialists with experience across industrial sectors worldwide.",
};

export default function AboutPage() {
  return (
    <main>
      <div>
          <section style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: '0', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundImage: 'url(https://images.unsplash.com/photo-1582280871722-424e91cbee8b?w=1400&auto=format&fit=crop&q=80)' }}></div>
            <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(100deg,rgba(0,15,22,.9) 0%,rgba(0,25,36,.72) 48%,rgba(0,15,22,.4) 100%)' }}></div>
            <div style={{ position: 'relative', maxWidth: '1400px', margin: '0 auto', padding: 'clamp(40px,5vw,72px) clamp(16px,4vw,44px)' }}>
              <Link href="/" style={{ background: 'none', border: '0', padding: '0', color: '#e3ab7c', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
                Home
              </Link>
              <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#e3ab7c', marginTop: '22px' }}>About Us</div>
              <h1 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '800', fontSize: 'clamp(34px,4.6vw,58px)', margin: '14px 0 0', color: '#fff', lineHeight: '1.04', maxWidth: '26ch' }}>Mining construction and project management specialists.</h1>
              <p style={{ fontSize: '16.5px', lineHeight: '1.62', maxWidth: '70ch', color: '#c3d0d4', margin: '18px 0 0' }}>Praetorian Construction Management has experience in a diverse field of industrial construction including: mining, petrochemical, power, refineries, dams, roadways, water treatment plants, natural gas pipelines and compressor stations, forestry and marine.</p>
            </div>
          </section>
          <section style={{ maxWidth: '1400px', margin: '0 auto', padding: 'clamp(46px,6vw,84px) clamp(16px,4vw,44px)' }}>
            <div data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#B06533' }}>Who we are</div>
            <h2 data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: 'clamp(30px,3.6vw,44px)', margin: '12px 0 16px', color: '#003E52' }}>Who We Are</h2>
            <p style={{ fontSize: '16px', lineHeight: '1.7', maxWidth: '72ch', color: '#555c60', margin: '0 0 18px' }}>We are mining construction and project management specialists. While our project experience spans most major industrial sectors, we have developed a reputation as an expert in the mining sector.</p>
            <p style={{ fontSize: '16px', lineHeight: '1.7', maxWidth: '72ch', color: '#555c60', margin: '0 0 44px' }}>Given our team's unique project management skills, Praetorian offers a complete portfolio of services from reviewing a project's feasibility through to mine operations. We have both the experience and tools for establishing project control systems, contract management, purchasing services and construction management.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(20px,2.6vw,28px)' }}>
              <div data-reveal="" style={{ padding: '28px 26px', borderTop: '3px solid #003E52', background: '#f7f7f7' }}>
                <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '20px', color: '#003E52', margin: '0 0 12px' }}>Leadership and Teamwork</h4>
                <p style={{ fontSize: '14.5px', lineHeight: '1.7', color: '#555c60', margin: '0' }}>We build leaders who lead their team using effective communication and a focus on continuous improvement to achieve team excellence. Through this, we are able to provide exceptional and reliable project management services to our clients.</p>
              </div>
              <div data-reveal="" style={{ padding: '28px 26px', borderTop: '3px solid #B06533', background: '#f7f7f7' }}>
                <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '20px', color: '#003E52', margin: '0 0 12px' }}>Balanced Approach</h4>
                <p style={{ fontSize: '14.5px', lineHeight: '1.7', color: '#555c60', margin: '0' }}>Our team comprises of roughly one-third Trades, one-third Technologists and one-third Engineers which provides a balanced approach to managing projects and the contractors who deliver the projects. Our team excels in both technical expertise and the soft skills required to lead.</p>
              </div>
              <div data-reveal="" style={{ padding: '28px 26px', borderTop: '3px solid #98999B', background: '#f7f7f7' }}>
                <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '20px', color: '#003E52', margin: '0 0 12px' }}>Footprints and Cultural Sensitivity</h4>
                <p style={{ fontSize: '14.5px', lineHeight: '1.7', color: '#555c60', margin: '0' }}>We have worked on projects across Canada, US, Central and South America and Eurasia. We have an understanding of various cultures and are able to work efficiently while being sensitive to the local culture.</p>
              </div>
            </div>
          </section>
          <section id="pcml-mission" style={{ background: '#f7f7f7', padding: 'clamp(46px,6vw,84px) 0' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(16px,4vw,44px)' }}>
              <div data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#B06533' }}>Mission, Vision and Goals</div>
              <h2 data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: 'clamp(30px,3.6vw,44px)', margin: '12px 0 0', color: '#003E52' }}>Mission, Vision and Goals</h2>
              <div style={{ width: '64px', height: '3px', background: '#B06533', margin: '18px 0 38px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'clamp(20px,2.6vw,30px)' }}>
                <div data-reveal="" style={{ background: '#fff', padding: '28px 26px', boxShadow: '0 2px 14px rgba(0,20,30,.06)', borderTop: '3px solid #003E52' }}>
                  <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.15em', textTransform: 'uppercase', color: '#003E52', marginBottom: '14px' }}>Mission</div>
                  <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#555c60', margin: '0' }}>Provide exceptional reliable project management services to select clients in the resource sector through team excellence, leadership, effective communications and a focus on continuous improvement.</p>
                </div>
                <div data-reveal="" style={{ background: '#fff', padding: '28px 26px', boxShadow: '0 2px 14px rgba(0,20,30,.06)', borderTop: '3px solid #B06533' }}>
                  <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.15em', textTransform: 'uppercase', color: '#B06533', marginBottom: '14px' }}>Vision</div>
                  <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#555c60', margin: '0' }}>Develop an elite team of project management specialists who provide our clients with expertise for the development and construction of projects at both new and existing facilities in the resource sector. Continuously strive to develop a culture of excellence between our contractors and ourselves that is evolutionary; having the potential to grow, adapt and excel in an ever-changing work landscape.</p>
                </div>
                <div data-reveal="" style={{ background: '#fff', padding: '28px 26px', boxShadow: '0 2px 14px rgba(0,20,30,.06)', borderTop: '3px solid #98999B' }}>
                  <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.15em', textTransform: 'uppercase', color: '#5b6266', marginBottom: '14px' }}>Goals</div>
                  <ul style={{ fontSize: '14.5px', lineHeight: '1.8', color: '#555c60', margin: '0', paddingLeft: '18px' }}>
                    <li>Create a legacy of excellence in the work Praetorian Construction Management does for our clients.</li>
                    <li>Be recognized by our clients, industry and our team for developing a built-to-last group of professionals who retain and promote a balance between work and family.</li>
                    <li>Build on our reputation as a leader in the management of resource projects in remote locations worldwide.</li>
                    <li>Instill a safety culture of zero harm on every project.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section id="whypraetorian" style={{ maxWidth: '1400px', margin: '0 auto', padding: 'clamp(46px,6vw,84px) clamp(16px,4vw,44px)' }}>
            <div data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#B06533' }}>Why Praetorian</div>
            <h2 data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: 'clamp(30px,3.6vw,44px)', margin: '12px 0 0', color: '#003E52' }}>Why Praetorian?</h2>
            <div style={{ width: '64px', height: '3px', background: '#B06533', margin: '18px 0 38px' }}></div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'clamp(20px,2.6vw,30px)' }}>
              <div data-reveal="" style={{ padding: '28px 26px', borderTop: '3px solid #003E52', background: '#f7f7f7' }}>
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>⚙️</div>
                <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', color: '#003E52', margin: '0 0 12px' }}>Project Execution and Engineering Independence</h4>
                <p style={{ fontSize: '14.5px', lineHeight: '1.7', color: '#555c60', margin: '0' }}>We are at arm's length to the engineering efforts giving us the ability to make recommendations and take actions that are unbiased and transparent.</p>
              </div>
              <div data-reveal="" style={{ padding: '28px 26px', borderTop: '3px solid #B06533', background: '#f7f7f7' }}>
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>🌐</div>
                <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', color: '#003E52', margin: '0 0 12px' }}>Global Experience and Adaptability</h4>
                <p style={{ fontSize: '14.5px', lineHeight: '1.7', color: '#555c60', margin: '0' }}>Our ability to adapt to new environments, cultures and market locations. We understand what it takes to operate in international markets.</p>
              </div>
              <div data-reveal="" style={{ padding: '28px 26px', borderTop: '3px solid #003E52', background: '#f7f7f7' }}>
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>👥</div>
                <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', color: '#003E52', margin: '0 0 12px' }}>Efficient and Economical Multi-Functional Teams</h4>
                <p style={{ fontSize: '14.5px', lineHeight: '1.7', color: '#555c60', margin: '0' }}>Our teams are cross-trained, leading to non-duplication of roles without sacrificing quality. This is especially important for rotational shift works.</p>
              </div>
              <div data-reveal="" style={{ padding: '28px 26px', borderTop: '3px solid #B06533', background: '#f7f7f7' }}>
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>🧩</div>
                <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', color: '#003E52', margin: '0 0 12px' }}>Flexibility and Integrated Team Approach</h4>
                <p style={{ fontSize: '14.5px', lineHeight: '1.7', color: '#555c60', margin: '0' }}>Our experience working as an integrated project management team alongside client personnel and/or other organisations gives us a unique advantage in the industry.</p>
              </div>
            </div>
          </section>
          <section id="pcml-management" style={{ background: '#003E52', padding: 'clamp(46px,6vw,84px) 0' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(16px,4vw,44px)' }}>
              <div data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#e3ab7c' }}>Management Team</div>
              <h2 data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: 'clamp(30px,3.6vw,44px)', margin: '12px 0 38px', color: '#fff' }}>Management Team</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'clamp(20px,2.6vw,28px)' }}>
                <div data-reveal="" style={{ background: 'rgba(255,255,255,.06)', padding: '28px 24px' }}>
                  <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', color: '#fff', marginBottom: '4px' }}>Michael P. Culleton P.Eng.</div>
                  <div style={{ fontSize: '13px', color: '#e3ab7c', marginBottom: '14px', fontFamily: 'var(--font-sora), sans-serif' }}>Chief Financial Officer</div>
                  <p style={{ fontSize: '13.5px', lineHeight: '1.65', color: '#c3d0d4', margin: '0' }}>Michael has over 36 years of construction experience with a strong project controls and engineering background. The greatest portion of his career has been spent on mining projects. His in-depth knowledge of management and controls has contributed to a reputation of competence, integrity and loyalty.</p>
                </div>
                <div data-reveal="" style={{ background: 'rgba(255,255,255,.06)', padding: '28px 24px' }}>
                  <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', color: '#fff', marginBottom: '4px' }}>K. Bradley Walter</div>
                  <div style={{ fontSize: '13px', color: '#e3ab7c', marginBottom: '14px', fontFamily: 'var(--font-sora), sans-serif' }}>President</div>
                  <p style={{ fontSize: '13.5px', lineHeight: '1.65', color: '#c3d0d4', margin: '0' }}>With over 40 years of construction experience, Brad has provided executive leadership to guide multiple industrial projects to successful completion. As an owner's representative, he has a reputation for getting contractors to produce high quality work on time and on budget.</p>
                </div>
                <div data-reveal="" style={{ background: 'rgba(255,255,255,.06)', padding: '28px 24px' }}>
                  <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', color: '#fff', marginBottom: '4px' }}>Femi R. Farinu, P.Eng., CPA, CMA</div>
                  <div style={{ fontSize: '13px', color: '#e3ab7c', marginBottom: '14px', fontFamily: 'var(--font-sora), sans-serif' }}>Vice President, Technical Services</div>
                  <p style={{ fontSize: '13.5px', lineHeight: '1.65', color: '#c3d0d4', margin: '0' }}>Femi has over 23 years of work experience in construction, manufacturing and finance. With a background in Mining, Oil and Gas and Infrastructure, he applies his leadership and project management skills in support of project teams. His strength lies in Project Controls, Commercial Management and Accounting.</p>
                </div>
                <div data-reveal="" style={{ background: 'rgba(255,255,255,.06)', padding: '28px 24px' }}>
                  <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', color: '#fff', marginBottom: '4px' }}>L. Annette Genge</div>
                  <div style={{ fontSize: '13px', color: '#e3ab7c', marginBottom: '14px', fontFamily: 'var(--font-sora), sans-serif' }}>Human Resources Manager</div>
                  <p style={{ fontSize: '13.5px', lineHeight: '1.65', color: '#c3d0d4', margin: '0' }}>Annette is a highly skilled Human Resources and Organization Management professional with more than 18 years of experience spanning industrial construction and mining projects in Canada and international markets. She leads Employee Relations, Performance Management, Recruitment and HR Operations at Praetorian.</p>
                </div>
                <div data-reveal="" style={{ background: 'rgba(255,255,255,.06)', padding: '28px 24px' }}>
                  <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', color: '#fff', marginBottom: '4px' }}>Lisa Sander</div>
                  <div style={{ fontSize: '13px', color: '#e3ab7c', marginBottom: '14px', fontFamily: 'var(--font-sora), sans-serif' }}>Finance Manager</div>
                  <p style={{ fontSize: '13.5px', lineHeight: '1.65', color: '#c3d0d4', margin: '0' }}>Seasoned accounting specialist with 25 years of experience, including 19 years specialising in the oil and mining industries. Proven ability to manage all accounting functions, financial reporting, and compliance. Adept at streamlining processes, ensuring accuracy, and delivering actionable financial insights to support strategic decision making. Skilled in corporate finance, budgeting, tax reporting, and regulatory compliance, with a track record of driving efficiency and financial integrity.</p>
                </div>
                <div data-reveal="" style={{ background: 'rgba(255,255,255,.06)', padding: '28px 24px' }}>
                  <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', color: '#fff', marginBottom: '4px' }}>Rob Ledgister</div>
                  <div style={{ fontSize: '13px', color: '#e3ab7c', marginBottom: '14px', fontFamily: 'var(--font-sora), sans-serif' }}>VP, Project Development</div>
                  <p style={{ fontSize: '13.5px', lineHeight: '1.65', color: '#c3d0d4', margin: '0', fontStyle: 'italic' }}>Biography details to follow.</p>
                </div>
              </div>
              <p style={{ fontSize: '12px', color: '#7d8899', marginTop: '28px', fontStyle: 'italic' }}>Management team headshots and additional bios to be confirmed with Femi (OI-6).</p>
            </div>
          </section>
        </div>
    </main>
  );
}
