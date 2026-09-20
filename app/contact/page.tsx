import type { Metadata } from "next";
import CTABanner from "@/app/components/CTABanner";
import ContactForm from "@/app/components/ContactForm";
import Link from "next/link";
import { client } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Contact Praetorian Construction Management",
  description: "Speak with Praetorian's team about your mining construction project. Owner's team specialists based in Edmonton, Alberta, operating globally.",
};

export const revalidate = 60;

type ContactPageData = {
  hero: {
    backLinkLabel?: string;
    eyebrow?: string;
    headline: string;
    subhead?: string;
  };
  formSection: {
    eyebrow?: string;
    heading?: string;
  };
  officeSection: {
    eyebrow?: string;
    heading?: string;
    locationLabel?: string;
    addressLine1?: string;
    addressLine2?: string;
    addressLine3?: string;
    phoneLabel?: string;
    phoneDisplay?: string;
    emailLabel?: string;
    emailPrimary?: string;
    emailSecondary?: string;
  };
};

// Matches what's live today -- shown whenever the "Contact Page" document
// hasn't been created/published in Sanity Studio yet, so the site never regresses.
const DEFAULT_CONTACT: ContactPageData = {
  hero: {
    backLinkLabel: "Home",
    eyebrow: "Contact",
    headline: "Let's talk about your project.",
    subhead: "Whether you are at feasibility, mid-execution, or dealing with a contractor performance issue, reach out. We will tell you honestly whether we can help.",
  },
  formSection: {
    eyebrow: "Send an enquiry",
    heading: "Tell us about your project",
  },
  officeSection: {
    eyebrow: "Get in touch directly",
    heading: "Our office",
    locationLabel: "Edmonton, Alberta",
    addressLine1: "201 - 10441 178 Street",
    addressLine2: "Edmonton, Alberta T5S 1R5",
    addressLine3: "Canada",
    phoneLabel: "Phone",
    phoneDisplay: "780.989.0289",
    emailLabel: "Email",
    emailPrimary: "info@praetoriancm.com",
    emailSecondary: "bd@praetoriancm.com",
  },
};

async function getContactPage(): Promise<ContactPageData | null> {
  try {
    return await client.fetch(
      `*[_type == "contactPage"][0]{
        hero{ backLinkLabel, eyebrow, headline, subhead },
        formSection{ eyebrow, heading },
        officeSection{ eyebrow, heading, locationLabel, addressLine1, addressLine2, addressLine3, phoneLabel, phoneDisplay, emailLabel, emailPrimary, emailSecondary }
      }`
    );
  } catch {
    return null;
  }
}

export default async function ContactPage() {
  const contactData = await getContactPage();
  const data = contactData ?? DEFAULT_CONTACT;

  return (
    <main>
      <div>
          <section style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: '0', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundImage: 'url(/images/photos/pcml-service-ownersTeam.jpg)' }}></div>
            <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(100deg,rgba(0,15,22,.9) 0%,rgba(0,25,36,.72) 48%,rgba(0,15,22,.4) 100%)' }}></div>
            <div style={{ position: 'relative', maxWidth: '1400px', margin: '0 auto', padding: 'clamp(40px,5vw,72px) clamp(16px,4vw,44px)' }}>
              <Link href="/" style={{ background: 'none', border: '0', padding: '0', color: '#e3ab7c', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
                {data.hero.backLinkLabel}
              </Link>
              <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#e3ab7c', marginTop: '22px' }}>{data.hero.eyebrow}</div>
              <h1 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '800', fontSize: 'clamp(34px,4.6vw,58px)', margin: '14px 0 0', color: '#fff', lineHeight: '1.04', maxWidth: '22ch' }}>{data.hero.headline}</h1>
              <p style={{ fontSize: '16.5px', lineHeight: '1.62', maxWidth: '58ch', color: '#c3d0d4', margin: '18px 0 0' }}>{data.hero.subhead}</p>
            </div>
          </section>
          <section style={{ maxWidth: '1400px', margin: '0 auto', padding: 'clamp(46px,6vw,84px) clamp(16px,4vw,44px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: 'clamp(40px,6vw,80px)' }}>
              <div>
                <div data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#B06533' }}>{data.formSection.eyebrow}</div>
                <h2 data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: 'clamp(26px,3vw,36px)', margin: '12px 0 28px', color: '#003E52' }}>{data.formSection.heading}</h2>
                <ContactForm />
              </div>
              <div>
                <div data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#B06533' }}>{data.officeSection.eyebrow}</div>
                <h2 data-reveal="" style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: 'clamp(26px,3vw,36px)', margin: '12px 0 28px', color: '#003E52' }}>{data.officeSection.heading}</h2>
                <div style={{ display: 'grid', gap: '24px' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '42px', height: '42px', background: '#003E52', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e3ab7c" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '14px', color: '#003E52', marginBottom: '4px' }}>{data.officeSection.locationLabel}</div>
                      <div style={{ fontSize: '14px', lineHeight: '1.7', color: '#555c60' }}>{data.officeSection.addressLine1}<br />{data.officeSection.addressLine2}<br />{data.officeSection.addressLine3}</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '42px', height: '42px', background: '#003E52', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e3ab7c" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" /></svg>
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '14px', color: '#003E52', marginBottom: '4px' }}>{data.officeSection.phoneLabel}</div>
                      <a href="tel:7809890289" style={{ fontSize: '14px', color: '#555c60', textDecoration: 'none' }}>{data.officeSection.phoneDisplay}</a>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '42px', height: '42px', background: '#003E52', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e3ab7c" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '14px', color: '#003E52', marginBottom: '4px' }}>{data.officeSection.emailLabel}</div>
                      <a href="mailto:info@praetoriancm.com" style={{ fontSize: '14px', color: '#B06533', textDecoration: 'none' }}>{data.officeSection.emailPrimary}</a>
                      <a href="mailto:bd@praetoriancm.com" style={{ fontSize: '14px', color: '#B06533', textDecoration: 'none', display: 'block', marginTop: '4px' }}>{data.officeSection.emailSecondary}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
          <CTABanner />
    </main>
  );
}
