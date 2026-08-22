import Link from "next/link";

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/praetorian-construction-management/",
    size: 22,
    fill: true,
    path: "M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9.5h4V21H3V9.5Zm6.5 0h3.8v1.6a4.2 4.2 0 0 1 3.7-2c2.7 0 4 1.8 4 5V21h-4v-6c0-1.5-.5-2.4-1.8-2.4-1.1 0-1.7.7-2 1.4-.1.3-.1.7-.1 1V21h-4V9.5Z",
  },
  {
    label: "X",
    href: "#",
    size: 20,
    fill: true,
    path: "M17.5 3h3.2l-7 8 7.3 10h-5.6l-4.4-6.2L5.8 21H2.6l7.4-8.4L3 3h5.7l4.1 5.8L17.5 3Zm-1.1 16h1.7L7.6 4.8H5.8L16.4 19Z",
  },
  {
    label: "YouTube",
    href: "#",
    size: 22,
    fill: true,
    path: "M22.5 7.3a3 3 0 0 0-2.1-2.1C18.6 4.7 12 4.7 12 4.7s-6.6 0-8.4.5A3 3 0 0 0 1.5 7.3C1 9.1 1 12 1 12s0 2.9.5 4.7a3 3 0 0 0 2.1 2.1c1.8.5 8.4.5 8.4.5s6.6 0 8.4-.5a3 3 0 0 0 2.1-2.1c.5-1.8.5-4.7.5-4.7s0-2.9-.5-4.7ZM9.8 15.4V8.6l6 3.4-6 3.4Z",
  },
];

const COL_SERVICES = [
  { label: "Owner's Team Support", href: "/services" },
  { label: "Project Services", href: "/services" },
  { label: "Operational Consulting", href: "/services" },
  { label: "Engineering Support", href: "/services" },
  { label: "Project Controls", href: "/services" },
  { label: "Quality and Commissioning", href: "/services" },
];

const COL_RESOURCES = [
  { label: "Blog and Insights", href: "/news" },
  { label: "Business Guides", href: "/news" },
  { label: "Whitepapers", href: "/news" },
  { label: "Case Studies", href: "/news" },
  { label: "Webinars", href: "/news" },
];

const COL_COMPANY = [
  { label: "About Praetorian", href: "/about" },
  { label: "Praetorian IQ", href: "/praetorian-iq" },
  { label: "Projects", href: "/projects" },
  { label: "Careers", href: "/careers" },
  { label: "HSSE", href: "/hsse" },
  { label: "Contact", href: "/contact" },
];

const headingStyle = {
  fontFamily: "var(--font-sora), sans-serif",
  fontWeight: 700,
  fontSize: 13,
  letterSpacing: ".16em",
  textTransform: "uppercase",
  color: "#fff",
  margin: "0 0 14px",
} as const;

const linkStyle = { color: "#a9b6bb", textDecoration: "none" } as const;

export default function Footer() {
  return (
    <>
      <section style={{ background: "#B06533", color: "#fff" }}>
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "clamp(48px,6vw,88px) clamp(16px,4vw,44px)",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-sora), sans-serif",
              fontWeight: 800,
              fontSize: "clamp(30px,3.8vw,46px)",
              margin: 0,
              color: "#fff",
            }}
          >
            Ready to discuss your project?
          </h2>
          <p
            style={{
              fontSize: 16.5,
              lineHeight: 1.62,
              margin: "18px auto 30px",
              maxWidth: "60ch",
              color: "rgba(255,255,255,.92)",
            }}
          >
            Praetorian embeds directly into your ownership team, from early feasibility through final
            commissioning. Let&apos;s talk about what that looks like for your project.
          </p>
          <Link
            href="/contact"
            className="pcml-cta-dark"
            style={{
              display: "inline-flex",
              minHeight: 50,
              padding: "0 26px",
              fontSize: 16,
              background: "#003E52",
              color: "#fff",
              textDecoration: "none",
              alignItems: "center",
              fontFamily: "var(--font-sora), sans-serif",
              fontWeight: 600,
            }}
          >
            Speak with Our Team
          </Link>
        </div>
      </section>

      <footer style={{ background: "#012530", color: "#a9b6bb" }}>
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            padding: "clamp(44px,5vw,72px) clamp(16px,4vw,44px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))",
            gap: "clamp(28px,3vw,44px)",
          }}
        >
          <div style={{ gridColumn: "span 2", minWidth: 0 }}>
            <img
              src="/pcml-logo-footer.svg"
              alt="Praetorian Construction Management"
              style={{ height: 68, width: "auto" }}
            />
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.6,
                maxWidth: "38ch",
                margin: "20px 0 24px",
                color: "#8fa0a6",
              }}
            >
              Owner&apos;s team construction management for the global mining sector, with AI-powered
              cost intelligence built in.
            </p>
            <div
              style={{
                fontFamily: "var(--font-sora), sans-serif",
                fontWeight: 600,
                fontSize: 11,
                letterSpacing: ".18em",
                textTransform: "uppercase",
                color: "#7d8b90",
                marginBottom: 10,
              }}
            >
              Subscribe to Insights
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", maxWidth: 360 }}>
              <input
                type="email"
                placeholder="Your email address"
                aria-label="Email address"
                style={{
                  flex: "1 1 190px",
                  minHeight: 44,
                  background: "rgba(255,255,255,.06)",
                  border: "1px solid rgba(255,255,255,.22)",
                  color: "#fff",
                  padding: "0 12px",
                  font: "inherit",
                }}
              />
              <button
                type="button"
                className="pcml-cta"
                style={{
                  background: "#B06533",
                  color: "#fff",
                  border: 0,
                  minHeight: 44,
                  padding: "0 18px",
                  fontFamily: "var(--font-sora), sans-serif",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Subscribe
              </button>
            </div>
            <div style={{ display: "flex", gap: 12, marginTop: 26 }}>
              {SOCIALS.map((s) => ( <a key={s.label} href={s.href} aria-label={s.label} target={s.href === "#" ? undefined : "_blank"} rel={s.href === "#" ? undefined : "noopener noreferrer"} className="pcml-social" style={{ display: "grid", placeItems: "center", width: 46, height: 46, background: "#B06533", color: "#fff" }}><svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="currentColor"><path d={s.path} /></svg></a> ))}
              <a href="#" aria-label="Instagram" className="pcml-social" style={{ display: "grid", placeItems: "center", width: 46, height: 46, background: "#B06533", color: "#fff" }}>
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="3" width="18" height="18" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 style={headingStyle}>Services</h4>
            <div style={{ display: "grid", gap: 9, fontSize: 13.5 }}>
              {COL_SERVICES.map((l, i) => ( <Link key={`svc-${i}`} href={l.href} style={linkStyle} className="pcml-flink">{l.label}</Link> ))}
            </div>
          </div>

          <div>
            <h4 style={headingStyle}>Resources</h4>
            <div style={{ display: "grid", gap: 9, fontSize: 13.5 }}>
              {COL_RESOURCES.map((l, i) => ( <Link key={`res-${i}`} href={l.href} style={linkStyle} className="pcml-flink">{l.label}</Link> ))}
            </div>
          </div>

          <div>
            <h4 style={headingStyle}>Company</h4>
            <div style={{ display: "grid", gap: 9, fontSize: 13.5 }}>
              {COL_COMPANY.map((l, i) => ( <Link key={`co-${i}`} href={l.href} style={linkStyle} className="pcml-flink">{l.label}</Link> ))}
            </div>
          </div>

          <div>
            <h4 style={headingStyle}>Contact</h4>
            <div style={{ display: "grid", gap: 9, fontSize: 13.5 }}>
              <a href="tel:7809890289" style={linkStyle} className="pcml-flink">780.989.0289</a>
              <a href="mailto:info@praetoriancm.com" style={linkStyle} className="pcml-flink">info@praetoriancm.com</a>
              <a href="mailto:careers@praetoriancm.com" style={linkStyle} className="pcml-flink">careers@praetoriancm.com</a>
            </div>
            <address
              style={{
                fontStyle: "normal",
                fontSize: 13.5,
                lineHeight: 1.6,
                marginTop: 14,
                color: "#7d8b90",
              }}
            >
              201 - 10441 178 Street
              <br />
              Edmonton, Alberta
              <br />
              T5S 1R5, Canada
            </address>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,.12)" }}>
          <div
            style={{
              maxWidth: 1400,
              margin: "0 auto",
              padding: "18px clamp(16px,4vw,44px)",
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              justifyContent: "space-between",
              fontSize: 12,
              color: "#6b7a80",
            }}
          >
            <span>
              &copy; 2026 Praetorian Construction Management Ltd. All rights reserved. Edmonton,
              Alberta.
            </span>
            <span>praetoriancm.com</span>
          </div>
        </div>
      </footer>
    </>
  );
}
