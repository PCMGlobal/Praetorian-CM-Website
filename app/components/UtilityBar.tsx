const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/praetorian-construction-management/",
    size: 14,
    path: "M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9.5h4V21H3V9.5Zm6.5 0h3.8v1.6a4.2 4.2 0 0 1 3.7-2c2.7 0 4 1.8 4 5V21h-4v-6c0-1.5-.5-2.4-1.8-2.4-1.1 0-1.7.7-2 1.4-.1.3-.1.7-.1 1V21h-4V9.5Z",
  },
  {
    label: "X",
    href: "#",
    size: 13,
    path: "M17.5 3h3.2l-7 8 7.3 10h-5.6l-4.4-6.2L5.8 21H2.6l7.4-8.4L3 3h5.7l4.1 5.8L17.5 3Zm-1.1 16h1.7L7.6 4.8H5.8L16.4 19Z",
  },
  {
    label: "YouTube",
    href: "#",
    size: 14,
    path: "M22.5 7.3a3 3 0 0 0-2.1-2.1C18.6 4.7 12 4.7 12 4.7s-6.6 0-8.4.5A3 3 0 0 0 1.5 7.3C1 9.1 1 12 1 12s0 2.9.5 4.7a3 3 0 0 0 2.1 2.1c1.8.5 8.4.5 8.4.5s6.6 0 8.4-.5a3 3 0 0 0 2.1-2.1c.5-1.8.5-4.7.5-4.7s0-2.9-.5-4.7ZM9.8 15.4V8.6l6 3.4-6 3.4Z",
  },
];

export default function UtilityBar() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 20,
        padding: "0 clamp(16px,4vw,44px)",
        height: 38,
        background: "#003E52",
        color: "#cfd8dc",
        fontSize: 12.5,
      }}
    >
      <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ display: "flex", alignItems: "center", gap: 7 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.4 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
          </svg>
          <a href="tel:7809890289" style={{ color: "#cfd8dc", textDecoration: "none" }}>
            780.989.0289
          </a>
        </span>

        <span style={{ display: "flex", alignItems: "center", gap: 7 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="2" y="4" width="20" height="16" />
            <path d="m2 6 10 7 10-7" />
          </svg>
          <a href="mailto:info@praetoriancm.com" style={{ color: "#cfd8dc", textDecoration: "none" }}>
            info@praetoriancm.com
          </a>
        </span>

        <span style={{ width: 1, height: 14, background: "rgba(255,255,255,.3)" }} />

        {SOCIALS.map((s) => ( <a key={s.label} href={s.href} aria-label={s.label} target={s.href === "#" ? undefined : "_blank"} rel={s.href === "#" ? undefined : "noopener noreferrer"} className="pcml-social" style={{ display: "grid", placeItems: "center", width: 26, height: 26, background: "#B06533", color: "#fff" }}><svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="currentColor"><path d={s.path} /></svg></a> ))}

        <a href="#" aria-label="Instagram" className="pcml-social" style={{ display: "grid", placeItems: "center", width: 26, height: 26, background: "#B06533", color: "#fff" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
            <rect x="3" y="3" width="18" height="18" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
          </svg>
        </a>
      </span>
    </div>
  );
}
