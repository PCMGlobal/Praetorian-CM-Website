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
            <div style={{ position: 'relative', maxWidth: '1400px', margin: '0 auto', padding: 'clamp(24px,3vw,44px) clamp(16px,4vw,44px)' }}>
              <Link href="/" style={{ background: 'none', border: '0', padding: '0', color: '#e3ab7c', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
                Home
              </Link>
              <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#e3ab7c', marginTop: '22px' }}>About Us</div>
              <h1 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '800', fontSize: 'clamp(34px,4.6vw,58px)', margin: '14px 0 0', color: '#fff', lineHeight: '1.04', maxWidth: '26ch' }}>Mining Construction Management &amp; Project Management Experts.</h1>
              <p style={{ fontSize: '16.5px', lineHeight: '1.62', maxWidth: '70ch', color: '#c3d0d4', margin: '18px 0 0' }}>Praetorian Construction Management has experience in a diverse field of industrial construction including: mining, petrochemical, power, refineries, dams, roadways, water treatment plants, natural gas pipelines and compressor stations, forestry and marine. Over the past two decades, mining has been the primary focus of our work, and it is where our deepest expertise and reputation have been built.</p>
            </div>
          </section>
          <section style={{ maxWidth: '1400px', margin: '0 auto', padding: 'clamp(46px,6vw,84px) clamp(16px,4vw,44px)' }}>
            <div data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#B06533' }}>Who we are</div>
            <h2 data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: 'clamp(30px,3.6vw,44px)', margin: '12px 0 16px', color: '#003E52' }}>Who We Are</h2>
            <p style={{ fontSize: '16px', lineHeight: '1.7', maxWidth: '72ch', color: '#555c60', margin: '0 0 18px' }}>We are Mining Construction Management and Project Management Experts. While our project experience spans most major industrial sectors, we have developed a reputation as an expert in the mining sector.</p>
            <p style={{ fontSize: '16px', lineHeight: '1.7', maxWidth: '72ch', color: '#555c60', margin: '0 0 44px' }}>Given our team's unique skills, Praetorian offers a complete portfolio of services from reviewing a project's feasibility through to mine operations. We have both the experience and tools for establishing project control systems, contract management, purchasing services and construction management.</p>
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
      <section id="pcml-mission" style={{ background: "#f7f7f7", padding: "clamp(46px,6vw,84px) 0", scrollMarginTop: "120px" }}>
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
      <section id="whypraetorian" style={{ maxWidth: "1400px", margin: "0 auto", padding: "clamp(46px,6vw,84px) clamp(16px,4vw,44px)", scrollMarginTop: "120px" }}>
            <div data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#B06533' }}>Why Praetorian</div>
            <h2 data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: 'clamp(30px,3.6vw,44px)', margin: '12px 0 0', color: '#003E52' }}>Why Praetorian?</h2>
            <div style={{ width: '64px', height: '3px', background: '#B06533', margin: '18px 0 38px' }}></div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'clamp(20px,2.6vw,30px)' }}>
              <div data-reveal="" style={{ padding: '28px 26px', borderTop: '3px solid #003E52', background: '#f7f7f7' }}>
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>👷</div>
                <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', color: '#003E52', margin: '0 0 12px' }}>Balanced Team of Professionals</h4>
                <p style={{ fontSize: '14.5px', lineHeight: '1.7', color: '#555c60', margin: '0' }}>Our mixed team of trades, technologists and engineers results in a balanced, practical approach to contractor management, bringing the right discipline to every challenge on site.</p>
              </div>
              <div data-reveal="" style={{ padding: '28px 26px', borderTop: '3px solid #B06533', background: '#f7f7f7' }}>
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>🔍</div>
                <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', color: '#003E52', margin: '0 0 12px' }}>Project Execution &amp; Engineering Independence</h4>
                <p style={{ fontSize: '14.5px', lineHeight: '1.7', color: '#555c60', margin: '0' }}>We operate at arm&apos;s length from the engineering effort, giving us the ability to make recommendations and take actions that are unbiased and transparent on behalf of the owner.</p>
              </div>
              <div data-reveal="" style={{ padding: '28px 26px', borderTop: '3px solid #98999B', background: '#f7f7f7' }}>
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>🌍</div>
                <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', color: '#003E52', margin: '0 0 12px' }}>Global Experience &amp; Adaptability</h4>
                <p style={{ fontSize: '14.5px', lineHeight: '1.7', color: '#555c60', margin: '0' }}>Our ability to adapt to new environments, cultures and market locations sets us apart. We understand what it takes to operate effectively in international markets across six countries.</p>
              </div>
              <div data-reveal="" style={{ padding: '28px 26px', borderTop: '3px solid #003E52', background: '#f7f7f7' }}>
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>⚙️</div>
                <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', color: '#003E52', margin: '0 0 12px' }}>Efficient &amp; Economical Multi-Functional Teams</h4>
                <p style={{ fontSize: '14.5px', lineHeight: '1.7', color: '#555c60', margin: '0' }}>Our teams are cross-trained, enabling non-duplication of roles without sacrificing quality. This is especially important for rotational shift work, where versatility directly impacts project economics.</p>
              </div>
              <div data-reveal="" style={{ padding: '28px 26px', borderTop: '3px solid #B06533', background: '#f7f7f7' }}>
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>🤝</div>
                <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', color: '#003E52', margin: '0 0 12px' }}>Flexibility &amp; Integrated Team Approach</h4>
                <p style={{ fontSize: '14.5px', lineHeight: '1.7', color: '#555c60', margin: '0' }}>Our experience working as an integrated project management team alongside client personnel and other organisations gives us a unique advantage. We adapt our structure to fit seamlessly within the owner's team.</p>
              </div>
              <div data-reveal="" style={{ padding: '28px 26px', borderTop: '3px solid #98999B', background: '#f7f7f7' }}>
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>🏗️</div>
                <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', color: '#003E52', margin: '0 0 12px' }}>Extensive Direct-Hire Contracting Experience</h4>
                <p style={{ fontSize: '14.5px', lineHeight: '1.7', color: '#555c60', margin: '0' }}>A large proportion of our team came through the direct-hire contractor background. We understand how contractors operate, their challenges and the practical solutions that keep projects moving.</p>
              </div>
            </div>
          </section>
      <section id="pcml-careers" style={{ padding: "clamp(28px,3.5vw,48px) 0", scrollMarginTop: "120px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 clamp(16px,4vw,44px)" }}>
          <div data-reveal="" style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#B06533", marginBottom: "12px" }}>Why Choose Us</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: "clamp(36px,5vw,72px)", alignItems: "start" }}>
            <div>
              <h2 data-reveal="" style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "800", fontSize: "clamp(28px,3.2vw,40px)", margin: "0 0 20px", color: "#003E52", lineHeight: "1.08" }}>Our people are our delivery capability</h2>
              <p style={{ fontSize: "15.5px", lineHeight: "1.7", color: "#555c60", margin: "0 0 18px" }}>Our core training and development programs support the principle of mentoring through developmental delegation. This ensures a system of successor preparation and cross support of responsibilities for each position on a project team.</p>
              <p style={{ fontSize: "15.5px", lineHeight: "1.7", color: "#555c60", margin: "0 0 18px" }}>Team leaders are challenged to position their teams to optimise skills and abilities while setting individual growth goals for each project member. Our teams consist of Engineers, Technologists, and Tradespersons, providing a balanced approach to managing projects and the contractors who deliver them.</p>
              <p style={{ fontSize: "15.5px", lineHeight: "1.7", color: "#555c60", margin: "0 0 32px" }}>Recognising the value of the balance between profession and family, Praetorian has a high focus on quality of life promoted through optimised project shift schedules, team development retreats, sporting activities, and milestone celebrations where family participation is encouraged.</p>
              <p style={{ fontSize: "15.5px", lineHeight: "1.7", color: "#555c60", margin: "0 0 18px" }}>Praetorian is always looking for the right talent to join our team.</p>
              <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#555c60", margin: "0 0 8px" }}>Send your resume directly to: <a href="mailto:careers@praetoriancm.com" style={{ color: "#B06533", fontWeight: "600" }}>careers@praetoriancm.com</a></p>
              <div style={{ marginTop: "20px", padding: "20px 22px", background: "#f7f7f7", borderLeft: "3px solid #003E52" }}>
                <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "11px", color: "#003E52", marginBottom: "12px", letterSpacing: ".1em", textTransform: "uppercase" }}>Stay Connected</div>
                <a href="https://www.linkedin.com/company/praetorian-construction-management/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "10px", color: "#003E52", textDecoration: "none", fontFamily: "var(--font-sora), sans-serif", fontWeight: "600", fontSize: "14px" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#003E52"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  Follow us on LinkedIn for future opportunities
                </a>
              </div>
            </div>
            <div style={{ display: "grid", gap: "0", border: "1px solid #e4e6e7" }}>
              <div data-reveal="" style={{ padding: "28px 26px", borderBottom: "1px solid #e4e6e7", display: "flex", gap: "20px", alignItems: "flex-start" }}>
                <div style={{ flexShrink: "0", width: "42px", height: "42px", background: "#003E52", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e3ab7c" strokeWidth="1.6"><path d="M12 2L2 7l10 5 10-5-10-5ZM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                </div>
                <div><h4 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "17px", color: "#003E52", margin: "0 0 6px" }}>Global project exposure</h4><p style={{ fontSize: "13.5px", lineHeight: "1.6", color: "#555c60", margin: "0" }}>Operations in Canada, the USA, South America, Central America, and Eurasia. Our people work on projects that few firms in the world have access to.</p></div>
              </div>
              <div data-reveal="" style={{ padding: "28px 26px", borderBottom: "1px solid #e4e6e7", display: "flex", gap: "20px", alignItems: "flex-start" }}>
                <div style={{ flexShrink: "0", width: "42px", height: "42px", background: "#003E52", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e3ab7c" strokeWidth="1.6"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>
                </div>
                <div><h4 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "17px", color: "#003E52", margin: "0 0 6px" }}>Owner&apos;s team accountability</h4><p style={{ fontSize: "13.5px", lineHeight: "1.6", color: "#555c60", margin: "0" }}>Embedded directly in the client&apos;s ownership team, making decisions that directly affect project outcomes.</p></div>
              </div>
              <div data-reveal="" style={{ padding: "28px 26px", borderBottom: "1px solid #e4e6e7", display: "flex", gap: "20px", alignItems: "flex-start" }}>
                <div style={{ flexShrink: "0", width: "42px", height: "42px", background: "#003E52", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e3ab7c" strokeWidth="1.6"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                </div>
                <div><h4 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "17px", color: "#003E52", margin: "0 0 6px" }}>People-first culture</h4><p style={{ fontSize: "13.5px", lineHeight: "1.6", color: "#555c60", margin: "0" }}>Training programs in leadership, management systems, and technical subjects. Internal recognition, family-inclusive milestones, and a lower-than-average employee turnover rate.</p></div>
              </div>
              <div data-reveal="" style={{ padding: "28px 26px", display: "flex", gap: "20px", alignItems: "flex-start" }}>
                <div style={{ flexShrink: "0", width: "42px", height: "42px", background: "#003E52", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e3ab7c" strokeWidth="1.6"><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
                </div>
                <div><h4 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "17px", color: "#003E52", margin: "0 0 6px" }}>Technology-forward culture</h4><p style={{ fontSize: "13.5px", lineHeight: "1.6", color: "#555c60", margin: "0" }}>Praetorian is investing in AI-powered project intelligence through Praetorian IQ, reshaping how mining construction is managed globally.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="pcml-management" style={{ background: "#003E52", padding: "clamp(46px,6vw,84px) 0", scrollMarginTop: "120px" }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(16px,4vw,44px)' }}>
              <div data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#e3ab7c' }}>Management Team</div>
              <h2 data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: 'clamp(30px,3.6vw,44px)', margin: '12px 0 38px', color: '#fff' }}>Management Team</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'clamp(20px,2.6vw,28px)' }}>
                <div data-reveal="" style={{ background: 'rgba(255,255,255,.06)', padding: '28px 24px' }}>
                  <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', color: '#fff', marginBottom: '4px' }}>Michael P. Culleton P.Eng.</div>
                  <div style={{ fontSize: '13px', color: '#e3ab7c', marginBottom: '14px', fontFamily: 'var(--font-sora), sans-serif' }}>CEO</div>
                  <p style={{ fontSize: '13.5px', lineHeight: '1.65', color: '#c3d0d4', margin: '0' }}>Michael has almost four decades of construction experience with a strong project controls and engineering background. The greatest portion of his career has been spent on mining projects. His in-depth knowledge of management and controls has contributed to a reputation of competence, integrity and loyalty.</p>
                </div>
                <div data-reveal="" style={{ background: 'rgba(255,255,255,.06)', padding: '28px 24px' }}>
                  <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', color: '#fff', marginBottom: '4px' }}>K. Bradley Walter</div>
                  <div style={{ fontSize: '13px', color: '#e3ab7c', marginBottom: '14px', fontFamily: 'var(--font-sora), sans-serif' }}>President</div>
                  <p style={{ fontSize: '13.5px', lineHeight: '1.65', color: '#c3d0d4', margin: '0' }}>With more than four decades of construction experience, Brad has provided executive leadership to guide multiple industrial projects to successful completion. As an owner's representative, he has a reputation for getting contractors to produce high quality work on time and on budget.</p>
                </div>
                <div data-reveal="" style={{ background: 'rgba(255,255,255,.06)', padding: '28px 24px' }}>
                  <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', color: '#fff', marginBottom: '4px' }}>Femi R. Farinu, P.Eng., CPA</div>
                  <div style={{ fontSize: '13px', color: '#e3ab7c', marginBottom: '14px', fontFamily: 'var(--font-sora), sans-serif' }}>Vice President, Technical Services</div>
                  <p style={{ fontSize: '13.5px', lineHeight: '1.65', color: '#c3d0d4', margin: '0' }}>Femi has almost three decades of work experience in construction, manufacturing and finance. With a background in Mining, Oil and Gas and Infrastructure, he applies his leadership and project management skills in support of project teams. His strength lies in Project Controls, Commercial Management and Accounting.</p>
                </div>
                <div data-reveal="" style={{ background: 'rgba(255,255,255,.06)', padding: '28px 24px' }}>
                  <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', color: '#fff', marginBottom: '4px' }}>L. Annette Genge</div>
                  <div style={{ fontSize: '13px', color: '#e3ab7c', marginBottom: '14px', fontFamily: 'var(--font-sora), sans-serif' }}>Human Resources Manager</div>
                  <p style={{ fontSize: '13.5px', lineHeight: '1.65', color: '#c3d0d4', margin: '0' }}>Annette is a highly skilled Human Resources and Organization Management professional with more than two decades of experience spanning industrial construction and mining projects in Canada and international markets. She leads Employee Relations, Performance Management, Recruitment and HR Operations at Praetorian.</p>
                </div>
                <div data-reveal="" style={{ background: 'rgba(255,255,255,.06)', padding: '28px 24px' }}>
                  <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', color: '#fff', marginBottom: '4px' }}>Lisa Sander</div>
                  <div style={{ fontSize: '13px', color: '#e3ab7c', marginBottom: '14px', fontFamily: 'var(--font-sora), sans-serif' }}>Finance Manager</div>
                  <p style={{ fontSize: '13.5px', lineHeight: '1.65', color: '#c3d0d4', margin: '0' }}>Seasoned accounting specialist with almost three decades of experience, including 19 years specialising in the oil and mining industries. Proven ability to manage all accounting functions, financial reporting, and compliance. Adept at streamlining processes, ensuring accuracy, and delivering actionable financial insights to support strategic decision making. Skilled in corporate finance, budgeting, tax reporting, and regulatory compliance, with a track record of driving efficiency and financial integrity.</p>
                </div>
                <div data-reveal="" style={{ background: 'rgba(255,255,255,.06)', padding: '28px 24px' }}>
                  <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', color: '#fff', marginBottom: '4px' }}>Rob Ledgister</div>
                  <div style={{ fontSize: '13px', color: '#e3ab7c', marginBottom: '14px', fontFamily: 'var(--font-sora), sans-serif' }}>VP, Project Development</div>
                  <p style={{ fontSize: '13.5px', lineHeight: '1.65', color: '#c3d0d4', margin: '0', fontStyle: 'italic' }}>Biography details to follow.</p>
                </div>
              </div>
              <p style={{ fontSize: '12px', color: '#7d8899', marginTop: '28px', fontStyle: 'italic' }}></p>
            </div>
          </section>
        </div>
    </main>
  );
}
