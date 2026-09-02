import type { Metadata } from "next";
import ContactForm from "@/app/components/ContactForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | Praetorian Construction Management",
  description: "Let's talk about your project. Praetorian Construction Management, Edmonton, Alberta.",
};

export default function ContactPage() {
  return (
    <main>
      <div>
          <section style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: '0', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundImage: 'url(https://images.unsplash.com/photo-1586161148512-64a1b3dac527?w=1400&auto=format&fit=crop&q=80)' }}></div>
            <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(100deg,rgba(0,15,22,.9) 0%,rgba(0,25,36,.72) 48%,rgba(0,15,22,.4) 100%)' }}></div>
            <div style={{ position: 'relative', maxWidth: '1400px', margin: '0 auto', padding: 'clamp(40px,5vw,72px) clamp(16px,4vw,44px)' }}>
              <Link href="/" style={{ background: 'none', border: '0', padding: '0', color: '#e3ab7c', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
                Home
              </Link>
              <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#e3ab7c', marginTop: '22px' }}>Contact</div>
              <h1 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '800', fontSize: 'clamp(34px,4.6vw,58px)', margin: '14px 0 0', color: '#fff', lineHeight: '1.04', maxWidth: '22ch' }}>Let's talk about your project.</h1>
              <p style={{ fontSize: '16.5px', lineHeight: '1.62', maxWidth: '58ch', color: '#c3d0d4', margin: '18px 0 0' }}>Whether you are at feasibility, mid-execution, or dealing with a contractor performance issue, reach out. We will tell you honestly whether we can help.</p>
            </div>
          </section>
          <section style={{ maxWidth: '1400px', margin: '0 auto', padding: 'clamp(46px,6vw,84px) clamp(16px,4vw,44px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: 'clamp(40px,6vw,80px)' }}>
              <div>
                <div data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#B06533' }}>Send an enquiry</div>
                <h2 data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: 'clamp(26px,3vw,36px)', margin: '12px 0 28px', color: '#003E52' }}>Tell us about your project</h2>
                <ContactForm />
              </div>
              <div>
                <div data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#B06533' }}>Get in touch directly</div>
                <h2 data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: 'clamp(26px,3vw,36px)', margin: '12px 0 28px', color: '#003E52' }}>Our office</h2>
                <div style={{ display: 'grid', gap: '24px' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '42px', height: '42px', background: '#003E52', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e3ab7c" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '14px', color: '#003E52', marginBottom: '4px' }}>Edmonton, Alberta</div>
                      <div style={{ fontSize: '14px', lineHeight: '1.7', color: '#555c60' }}>201 - 10441 178 Street<br />Edmonton, Alberta T5S 1R5<br />Canada</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '42px', height: '42px', background: '#003E52', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e3ab7c" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" /></svg>
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '14px', color: '#003E52', marginBottom: '4px' }}>Phone</div>
                      <a href="tel:7809890289" style={{ fontSize: '14px', color: '#555c60', textDecoration: 'none' }}>780.989.0289</a>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '42px', height: '42px', background: '#003E52', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e3ab7c" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '14px', color: '#003E52', marginBottom: '4px' }}>Email</div>
                      <a href="mailto:info@praetoriancm.com" style={{ fontSize: '14px', color: '#B06533', textDecoration: 'none' }}>info@praetoriancm.com</a>
                      <a href="mailto:bd@praetoriancm.com" style={{ fontSize: '14px', color: '#B06533', textDecoration: 'none', display: 'block', marginTop: '4px' }}>bd@praetoriancm.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    </main>
  );
}
