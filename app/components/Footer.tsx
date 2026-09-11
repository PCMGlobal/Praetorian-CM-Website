import Link from "next/link";

const linkStyle = {
  color: "#9aa9ae",
  textDecoration: "none" as const,
  fontSize: "14px",
  lineHeight: "1.8",
  fontFamily: "var(--font-work-sans), sans-serif",
  transition: "color 0.2s",
};

const headingStyle = {
  fontFamily: "var(--font-sora), sans-serif",
  fontWeight: 700,
  fontSize: "12px",
  letterSpacing: ".14em",
  textTransform: "uppercase" as const,
  color: "#ffffff",
  marginBottom: "18px",
};

const COL_COMPANY = [
  { label: "About Praetorian", href: "/about" },
  { label: "Our People", href: "/about#pcml-careers" },
  { label: "Projects", href: "/projects" },
  { label: "HSSE", href: "/hsse" },
  { label: "Contact", href: "/contact" },
];

const COL_SERVICES = [
  { label: "Pre-Construction", href: "/services#owners-team-support" },
  { label: "Project Services", href: "/services#project-services" },
  { label: "Construction Execution", href: "/services#construction-execution" },
  { label: "Post-Construction", href: "/services#operational-consulting" },
  { label: "Our Approach", href: "/services#our-approach" },
];

const COL_RESOURCES = [
  { label: "News and Insights", href: "/news" },
  { label: "Privacy Policy", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#012530", color: "#a9b6bb" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "clamp(48px,6vw,84px) clamp(16px,4vw,44px) 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "clamp(32px,4vw,64px)", paddingBottom: "clamp(40px,5vw,64px)" }}>
          
          {/* Brand column */}
          <div>
            <Link href="/" style={{ display: "inline-block", marginBottom: "20px" }}>
              <img src="/pcml-logo-footer.svg" alt="Praetorian Construction Management" style={{ height: "96px", width: "auto" }} />
            </Link>
            <p style={{ fontSize: "14px", lineHeight: "1.7", color: "#6b7f84", maxWidth: "34ch", margin: "0 0 22px" }}>
              Owner&apos;s team construction management for the global mining sector.
            </p>
            <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
              <a href="https://www.linkedin.com/company/praetorian-construction-management/" target="_blank" rel="noopener noreferrer" className="pcml-flink" style={{ color: "#6b7f84", textDecoration: "none", display: "flex", alignItems: "center" }} aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://www.youtube.com/@PraetorianCM" target="_blank" rel="noopener noreferrer" className="pcml-flink" style={{ color: "#6b7f84", textDecoration: "none", display: "flex", alignItems: "center" }} aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#012530"/></svg>
              </a>
              <a href="https://x.com/PraetorianCMgmt" target="_blank" rel="noopener noreferrer" className="pcml-flink" style={{ color: "#6b7f84", textDecoration: "none", display: "flex", alignItems: "center" }} aria-label="X">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
              </a>
              <a href="https://www.instagram.com/praetoriancm" target="_blank" rel="noopener noreferrer" className="pcml-flink" style={{ color: "#6b7f84", textDecoration: "none", display: "flex", alignItems: "center" }} aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          {/* Company column */}
          <div>
            <div style={headingStyle}>Company</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {COL_COMPANY.map(l => (
                <Link key={l.href} href={l.href} style={linkStyle} className="pcml-flink">{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div>
            <div style={headingStyle}>Services</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {COL_SERVICES.map(l => (
                <Link key={l.href} href={l.href} style={linkStyle} className="pcml-flink">{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Resources column */}
          <div>
            <div style={headingStyle}>Resources</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {COL_RESOURCES.map(l => (
                <Link key={l.href} href={l.href} style={linkStyle} className="pcml-flink">{l.label}</Link>
              ))}
            </div>
            <div style={{ marginTop: "32px" }}>
              <div style={{ ...headingStyle, marginBottom: "10px" }}>Head Office</div>
              <p style={{ fontSize: "13px", lineHeight: "1.7", color: "#6b7f84", margin: "0" }}>
                201, 10441-178 Street<br />
                Edmonton, Alberta T5S 1R5<br />
                Canada
              </p>
              <a href="tel:7809890289" style={{ ...linkStyle, display: "block", marginTop: "8px" }}>(780) 989-0289</a>
              <a href="mailto:info@praetoriancm.com" style={{ ...linkStyle, display: "block" }}>info@praetoriancm.com</a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,.08)", padding: "20px 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ fontSize: "13px", color: "#4a5c61", margin: "0" }}>
            &copy; {new Date().getFullYear()} Praetorian Construction Management Ltd. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            <Link href="/privacy" style={{ fontSize: "13px", color: "#4a5c61", textDecoration: "none" }}>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
