import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers | Praetorian Construction Management",
  description: "Build the world's most complex projects from the owner's side. Career opportunities in mining project management.",
};

export default function CareersPage() {
  return (
    <main>
      <div>
          <section style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: '0', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundImage: 'url(https://images.unsplash.com/photo-1680463990599-9d318aaecf71?w=1400&auto=format&fit=crop&q=80)' }}></div>
            <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(100deg,rgba(0,15,22,.9) 0%,rgba(0,25,36,.72) 48%,rgba(0,15,22,.4) 100%)' }}></div>
            <div style={{ position: 'relative', maxWidth: '1400px', margin: '0 auto', padding: 'clamp(40px,5vw,72px) clamp(16px,4vw,44px)' }}>
              <Link href="/" style={{ background: 'none', border: '0', padding: '0', color: '#e3ab7c', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
                Home
              </Link>
              <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#e3ab7c', marginTop: '22px' }}>Careers</div>
              <h1 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '800', fontSize: 'clamp(34px,4.6vw,58px)', margin: '14px 0 0', color: '#fff', lineHeight: '1.04', maxWidth: '24ch' }}>Build the world&apos;s most complex projects. From the owner&apos;s side.</h1>
              <p style={{ fontSize: '16.5px', lineHeight: '1.62', maxWidth: '62ch', color: '#c3d0d4', margin: '18px 0 0' }}>Praetorian offers career opportunities in project management with a primary focus on capital project development in the mining industry. Successful candidates demonstrate an interest and personal drive towards growth in their leadership and technical abilities.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '28px' }}>
                <a href="#pcml-opportunities" style={{ background: '#B06533', color: '#fff', textDecoration: 'none', minHeight: '48px', display: 'flex', alignItems: 'center', padding: '0 24px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600', fontSize: '15px' }}>View Opportunities</a>
                <a href="mailto:careers@praetoriancm.com" style={{ minHeight: '48px', display: 'flex', alignItems: 'center', padding: '0 22px', fontSize: '15px', color: '#fff', border: '1px solid rgba(255,255,255,.55)', textDecoration: 'none', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600' }}>Submit a Profile</a>
              </div>
            </div>
          </section>

          <section id="pcml-careers-why" style={{ maxWidth: '1400px', margin: '0 auto', padding: 'clamp(46px,6vw,84px) clamp(16px,4vw,44px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: 'clamp(36px,5vw,72px)', alignItems: 'start' }}>
              <div>
                <div data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#B06533', marginBottom: '12px' }}>Why Choose Us</div>
                <h2 data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '800', fontSize: 'clamp(28px,3.2vw,40px)', margin: '0 0 20px', color: '#003E52', lineHeight: '1.08' }}>Our people are our delivery capability</h2>
                <p style={{ fontSize: '15.5px', lineHeight: '1.7', color: '#555c60', margin: '0 0 18px' }}>Our core training and development programs support the principle of mentoring through developmental delegation. This ensures a system of successor preparation and cross support of responsibilities for each position on a project team.</p>
                <p style={{ fontSize: '15.5px', lineHeight: '1.7', color: '#555c60', margin: '0 0 18px' }}>Team leaders are challenged to position their teams to optimise skills and abilities while setting individual growth goals for each project member. Our teams consist of Engineers, Technologists, and Tradespersons, providing a balanced approach to managing projects and the contractors who deliver them.</p>
                <p style={{ fontSize: '15.5px', lineHeight: '1.7', color: '#555c60', margin: '0' }}>Recognising the value of the balance between profession and family, Praetorian has a high focus on quality of life promoted through optimised project shift schedules, team development retreats, sporting activities, and milestone celebrations where family participation is encouraged.</p>
              </div>
              <div style={{ display: 'grid', gap: '0', border: '1px solid #e4e6e7' }}>
                <div data-reveal="" style={{ padding: '28px 26px', borderBottom: '1px solid #e4e6e7', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <div style={{ flexShrink: '0', width: '42px', height: '42px', background: '#003E52', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e3ab7c" strokeWidth="1.6"><path d="M12 2L2 7l10 5 10-5-10-5ZM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '17px', color: '#003E52', margin: '0 0 6px' }}>Global project exposure</h4>
                    <p style={{ fontSize: '13.5px', lineHeight: '1.6', color: '#555c60', margin: '0' }}>Operations in Canada, the USA, South America, Central America, and Eurasia. Our people work on projects that few firms in the world have access to.</p>
                  </div>
                </div>
                <div data-reveal="" style={{ padding: '28px 26px', borderBottom: '1px solid #e4e6e7', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <div style={{ flexShrink: '0', width: '42px', height: '42px', background: '#003E52', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e3ab7c" strokeWidth="1.6"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '17px', color: '#003E52', margin: '0 0 6px' }}>Owner&apos;s team accountability</h4>
                    <p style={{ fontSize: '13.5px', lineHeight: '1.6', color: '#555c60', margin: '0' }}>Embedded directly in the client&apos;s ownership team, making decisions that directly affect project outcomes.</p>
                  </div>
                </div>
                <div data-reveal="" style={{ padding: '28px 26px', borderBottom: '1px solid #e4e6e7', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <div style={{ flexShrink: '0', width: '42px', height: '42px', background: '#003E52', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e3ab7c" strokeWidth="1.6"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '17px', color: '#003E52', margin: '0 0 6px' }}>People-first culture</h4>
                    <p style={{ fontSize: '13.5px', lineHeight: '1.6', color: '#555c60', margin: '0' }}>Training programs in leadership, management systems, and technical subjects. Internal recognition, family-inclusive milestones, and a lower-than-average employee turnover rate.</p>
                  </div>
                </div>
                <div data-reveal="" style={{ padding: '28px 26px', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <div style={{ flexShrink: '0', width: '42px', height: '42px', background: '#003E52', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e3ab7c" strokeWidth="1.6"><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '17px', color: '#003E52', margin: '0 0 6px' }}>Technology-forward culture</h4>
                    <p style={{ fontSize: '13.5px', lineHeight: '1.6', color: '#555c60', margin: '0' }}>Praetorian is investing in AI-powered project intelligence through Praetorian IQ, reshaping how mining construction is managed globally.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="pcml-careers-people" style={{ background: '#003E52', padding: 'clamp(46px,6vw,84px) 0' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(16px,4vw,44px)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 'clamp(36px,5vw,64px)', alignItems: 'center' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#e3ab7c', marginBottom: '20px' }}>Our People, Our Value</div>
                  <svg width="36" height="28" viewBox="0 0 40 30" fill="#B06533" style={{ marginBottom: '20px' }}><path d="M0 30V19C0 8 6 2 18 0l3 4C15 5.5 12 8 11 12h6V30H0zm22 0V19C22 8 28 2 40 0l3 4C37 5.5 34 8 33 12h6V30H22z" /></svg>
                  <p style={{ fontSize: '16px', lineHeight: '1.75', color: '#e9eef0', fontStyle: 'italic', margin: '0 0 28px' }}>I have been working with Praetorian for 7 years as Human Resource Manager and my favourite part about the company is the diverse work experience and locations, the international work and how much I am involved as a whole with the day to day operations. Working at PCML, the day to day direct contact with all members of the Team provides that &#8220;home&#8221; and &#8220;human&#8221; element to an industry that is sometimes lost with a larger organisation. Praetorian&#8217;s employee turnover rate is lower and they take care of their Team! Calling for all talents, the opportunities are endless and the next exciting opportunity is just around the corner!</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '48px', height: '48px', background: '#B06533', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '800', fontSize: '18px', color: '#fff' }}>AG</div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '16px', color: '#fff' }}>Annette Genge</div>
                      <div style={{ fontSize: '13px', color: '#9aa9ae', marginTop: '3px' }}>Human Resource Manager</div>
                    </div>
                  </div>
                  <div style={{ marginTop: '28px' }}>
                    <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#B06533', color: '#fff', padding: '0 24px', minHeight: '46px', fontSize: '15px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600', textDecoration: 'none' }}>Apply Now</a>
                  </div>
                </div>
                <div style={{ display: 'grid', gap: '16px' }}>
                  <div style={{ background: 'rgba(255,255,255,.06)', borderLeft: '3px solid #B06533', padding: '22px 24px' }}>
                    <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '32px', color: '#e3ab7c', lineHeight: '1' }}>7+</div>
                    <div style={{ fontSize: '13px', color: '#9aa9ae', marginTop: '6px' }}>Years average tenure for senior staff</div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,.06)', borderLeft: '3px solid #B06533', padding: '22px 24px' }}>
                    <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '32px', color: '#e3ab7c', lineHeight: '1' }}>6</div>
                    <div style={{ fontSize: '13px', color: '#9aa9ae', marginTop: '6px' }}>Countries with active project deployments</div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,.06)', borderLeft: '3px solid #B06533', padding: '22px 24px' }}>
                    <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '14px', color: '#e3ab7c', lineHeight: '1.3', marginBottom: '6px' }}>Equal opportunity employer</div>
                    <div style={{ fontSize: '13px', color: '#9aa9ae' }}>We do not discriminate on the basis of race, gender, age, religion, disability, or sexual orientation</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section style={{ background: '#f7f7f7', padding: 'clamp(46px,6vw,84px) 0' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(16px,4vw,44px)' }}>
              <div data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#B06533' }}>Disciplines we hire</div>
              <h2 data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '800', fontSize: 'clamp(28px,3.2vw,40px)', margin: '12px 0 0', color: '#003E52' }}>What we look for</h2>
              <div style={{ width: '64px', height: '3px', background: '#B06533', margin: '18px 0 38px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'clamp(20px,2.6vw,26px)' }}>
                <div data-reveal="" style={{ background: '#fff', padding: '24px', boxShadow: '0 2px 14px rgba(0,20,30,.06)', borderLeft: '3px solid #B06533' }}>
                  <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', color: '#003E52', margin: '0 0 8px' }}>Project Controls</h4>
                  <p style={{ fontSize: '13.5px', lineHeight: '1.6', color: '#5b6266', margin: '0 0 12px' }}>Cost engineers, schedulers, estimators, and document controllers with mining or heavy industrial project experience.</p>
                  <div style={{ fontSize: '12px', letterSpacing: '.08em', textTransform: 'uppercase', color: '#B06533', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600' }}>P6 · Prism · ACCE · Excel</div>
                </div>
                <div data-reveal="" style={{ background: '#fff', padding: '24px', boxShadow: '0 2px 14px rgba(0,20,30,.06)', borderLeft: '3px solid #B06533' }}>
                  <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', color: '#003E52', margin: '0 0 8px' }}>Construction Management</h4>
                  <p style={{ fontSize: '13.5px', lineHeight: '1.6', color: '#5b6266', margin: '0 0 12px' }}>Field-experienced construction managers, superintendent-level personnel, and quality leads who have run contractor teams on complex builds.</p>
                  <div style={{ fontSize: '12px', letterSpacing: '.08em', textTransform: 'uppercase', color: '#B06533', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600' }}>Open pit · Process plant · Infrastructure</div>
                </div>
                <div data-reveal="" style={{ background: '#fff', padding: '24px', boxShadow: '0 2px 14px rgba(0,20,30,.06)', borderLeft: '3px solid #B06533' }}>
                  <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', color: '#003E52', margin: '0 0 8px' }}>Engineering Support</h4>
                  <p style={{ fontSize: '13.5px', lineHeight: '1.6', color: '#5b6266', margin: '0 0 12px' }}>Engineers with constructability review and value engineering backgrounds, able to interrogate contractor designs on behalf of the owner.</p>
                  <div style={{ fontSize: '12px', letterSpacing: '.08em', textTransform: 'uppercase', color: '#B06533', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600' }}>Civil · Structural · Process · Mechanical</div>
                </div>
                <div data-reveal="" style={{ background: '#fff', padding: '24px', boxShadow: '0 2px 14px rgba(0,20,30,.06)', borderLeft: '3px solid #B06533' }}>
                  <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', color: '#003E52', margin: '0 0 8px' }}>Procurement and Contracts</h4>
                  <p style={{ fontSize: '13.5px', lineHeight: '1.6', color: '#5b6266', margin: '0 0 12px' }}>Contracts administrators and procurement specialists with experience managing major vendor packages and subcontract performance.</p>
                  <div style={{ fontSize: '12px', letterSpacing: '.08em', textTransform: 'uppercase', color: '#B06533', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600' }}>FIDIC · NEC · Lump sum · EPCM</div>
                </div>
                <div data-reveal="" style={{ background: '#fff', padding: '24px', boxShadow: '0 2px 14px rgba(0,20,30,.06)', borderLeft: '3px solid #B06533' }}>
                  <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', color: '#003E52', margin: '0 0 8px' }}>HSSE Leadership</h4>
                  <p style={{ fontSize: '13.5px', lineHeight: '1.6', color: '#5b6266', margin: '0 0 12px' }}>Health, safety, and environmental professionals who lead from the field, experienced in remote, high-hazard mining and heavy construction environments.</p>
                  <div style={{ fontSize: '12px', letterSpacing: '.08em', textTransform: 'uppercase', color: '#B06533', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600' }}>CRSP · NEBOSH · ISO 14001</div>
                </div>
                <div data-reveal="" style={{ background: '#fff', padding: '24px', boxShadow: '0 2px 14px rgba(0,20,30,.06)', borderLeft: '3px solid #B06533' }}>
                  <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '18px', color: '#003E52', margin: '0 0 8px' }}>Commissioning and Turnover</h4>
                  <p style={{ fontSize: '13.5px', lineHeight: '1.6', color: '#5b6266', margin: '0 0 12px' }}>Commissioning managers and QA/QC leads experienced in punch list closure, system handover packages, and ramp-up performance management.</p>
                  <div style={{ fontSize: '12px', letterSpacing: '.08em', textTransform: 'uppercase', color: '#B06533', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600' }}>Mechanical · Electrical · Instrumentation</div>
                </div>
              </div>
            </div>
          </section>

          <section id="pcml-opportunities" style={{ maxWidth: '1400px', margin: '0 auto', padding: 'clamp(46px,6vw,84px) clamp(16px,4vw,44px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: 'clamp(36px,5vw,64px)', alignItems: 'start' }}>
              <div>
                <div data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#B06533' }}>Employment Opportunities</div>
                <h2 data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: 'clamp(28px,3.2vw,40px)', margin: '12px 0 16px', color: '#003E52' }}>Live Positions</h2>
                <p style={{ fontSize: '15px', lineHeight: '1.65', color: '#555c60', margin: '0 0 16px' }}>Thank you for considering employment with Praetorian. Specific openings are posted as engagements are confirmed. If you don&apos;t see a role that matches your background, send us a profile; we maintain a register of qualified candidates for upcoming projects.</p>
                <p style={{ fontSize: '15px', lineHeight: '1.65', color: '#555c60', margin: '0 0 28px' }}>Send your resume directly to: <a href="mailto:careers@praetoriancm.com" style={{ color: '#B06533', fontWeight: '600' }}>careers@praetoriancm.com</a></p>
                <a href="mailto:careers@praetoriancm.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#B06533', color: '#fff', textDecoration: 'none', minHeight: '46px', padding: '0 22px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600', fontSize: '14px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  Contact Careers
                </a>
                <div style={{ marginTop: '28px', padding: '20px 22px', background: '#f7f7f7', borderLeft: '3px solid #003E52' }}>
                  <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '11px', color: '#003E52', marginBottom: '12px', letterSpacing: '.1em', textTransform: 'uppercase' }}>Stay Connected</div>
                  <a href="https://www.linkedin.com/company/praetorian-construction-management/" target="_blank" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: '#003E52', textDecoration: 'none', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600', fontSize: '14px' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#003E52"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                    Follow us on LinkedIn for future opportunities
                  </a>
                </div>
              </div>
              <div data-reveal="right" style={{ background: '#fff', border: '1px solid #e4e6e7', padding: 'clamp(24px,3vw,36px)' }}>
                <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '14px', color: '#003E52', marginBottom: '14px' }}>Current Openings</div>
                <div style={{ display: 'grid', gap: '10px', marginBottom: '24px' }}>
                  <div style={{ padding: '14px 16px', background: '#f7f7f7', border: '1px solid #e4e6e7' }}>
                    <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '16px', color: '#003E52' }}>Senior Cost Engineer</div>
                    <div style={{ fontSize: '13px', color: '#7d8288', marginTop: '4px' }}>Location TBC · Project-based engagement</div>
                  </div>
                  <div style={{ padding: '14px 16px', background: '#f7f7f7', border: '1px solid #e4e6e7' }}>
                    <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '16px', color: '#003E52' }}>Construction Manager</div>
                    <div style={{ fontSize: '13px', color: '#7d8288', marginTop: '4px' }}>Location TBC · Project-based engagement</div>
                  </div>
                  <div style={{ padding: '14px 16px', background: '#f7f7f7', border: '1px solid #e4e6e7' }}>
                    <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '16px', color: '#003E52' }}>Project Controls Lead</div>
                    <div style={{ fontSize: '13px', color: '#7d8288', marginTop: '4px' }}>Location TBC · Project-based engagement</div>
                  </div>
                </div>
                <div style={{ borderTop: '1px solid #e4e6e7', paddingTop: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '11px', color: '#003E52', marginBottom: '14px', letterSpacing: '.1em', textTransform: 'uppercase' }}>Career Opportunities Include</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
                    <div style={{ fontSize: '13px', color: '#555c60', padding: '7px 0', borderBottom: '1px solid #eef0f1' }}>Project Managers</div>
                    <div style={{ fontSize: '13px', color: '#555c60', padding: '7px 8px', borderBottom: '1px solid #eef0f1' }}>Contracts Managers</div>
                    <div style={{ fontSize: '13px', color: '#555c60', padding: '7px 0', borderBottom: '1px solid #eef0f1' }}>Construction Managers</div>
                    <div style={{ fontSize: '13px', color: '#555c60', padding: '7px 8px', borderBottom: '1px solid #eef0f1' }}>Safety Professionals</div>
                    <div style={{ fontSize: '13px', color: '#555c60', padding: '7px 0', borderBottom: '1px solid #eef0f1' }}>Project Engineers</div>
                    <div style={{ fontSize: '13px', color: '#555c60', padding: '7px 8px', borderBottom: '1px solid #eef0f1' }}>IT Specialists</div>
                    <div style={{ fontSize: '13px', color: '#555c60', padding: '7px 0', borderBottom: '1px solid #eef0f1' }}>Business Managers</div>
                    <div style={{ fontSize: '13px', color: '#555c60', padding: '7px 8px', borderBottom: '1px solid #eef0f1' }}>Survey and CAD Managers</div>
                    <div style={{ fontSize: '13px', color: '#555c60', padding: '7px 0', borderBottom: '1px solid #eef0f1' }}>Superintendents</div>
                    <div style={{ fontSize: '13px', color: '#555c60', padding: '7px 8px', borderBottom: '1px solid #eef0f1' }}>Procurement Specialists</div>
                    <div style={{ fontSize: '13px', color: '#555c60', padding: '7px 0', borderBottom: '1px solid #eef0f1' }}>Cost Controllers</div>
                    <div style={{ fontSize: '13px', color: '#555c60', padding: '7px 8px', borderBottom: '1px solid #eef0f1' }}>Warehouse and Inventory</div>
                    <div style={{ fontSize: '13px', color: '#555c60', padding: '7px 0', borderBottom: '1px solid #eef0f1' }}>Planners and Schedulers</div>
                    <div style={{ fontSize: '13px', color: '#555c60', padding: '7px 8px', borderBottom: '1px solid #eef0f1' }}>Quality Assurance Managers</div>
                    <div style={{ fontSize: '13px', color: '#555c60', padding: '7px 0', borderBottom: '1px solid #eef0f1' }}>Field Engineers</div>
                    <div style={{ fontSize: '13px', color: '#555c60', padding: '7px 8px', borderBottom: '1px solid #eef0f1' }}>QC Inspectors</div>
                    <div style={{ fontSize: '13px', color: '#555c60', padding: '7px 0', borderBottom: '1px solid #eef0f1' }}>Commissioning Supts.</div>
                    <div style={{ fontSize: '13px', color: '#555c60', padding: '7px 8px', borderBottom: '1px solid #eef0f1' }}>Administration Personnel</div>
                    <div style={{ fontSize: '13px', color: '#555c60', padding: '7px 0', borderBottom: '1px solid #eef0f1' }}>Document Controllers</div>
                    <div style={{ fontSize: '13px', color: '#555c60', padding: '7px 8px', borderBottom: '1px solid #eef0f1' }}>Logistics Specialists</div>
                  </div>
                  <p style={{ fontSize: '12px', color: '#8b9095', margin: '16px 0 0', fontStyle: 'italic' }}>Live job listings will be CMS-driven at launch. Placeholder roles shown for layout review.</p>
                </div>
              </div>
            </div>
          </section>
      </div>
    </main>
  );
}