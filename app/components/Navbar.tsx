"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const INK = "#003E52";
const ACTIVE = "#B06533";

type Item = { label: string; href: string };

const ABOUT: Item[] = [
  { label: "Who We Are", href: "/about" },
  { label: "Mission, Vision and Goals", href: "/about#pcml-mission" },
  { label: "Why Praetorian?", href: "/about" },
  { label: "Management Team", href: "/about#pcml-management" },
];

const SERVICES: Item[] = [
  { label: "Engineering Support and Constructability", href: "/services" },
  { label: "Early Planning and Financing Support", href: "/services" },
  { label: "Procurement and Logistics", href: "/services" },
  { label: "Project Controls", href: "/services" },
  { label: "Construction Management", href: "/services" },
  { label: "Quality, Commissioning and Turnover", href: "/services" },
];

const HSSE: Item[] = [
  { label: "H&S Policy Statement", href: "/hsse" },
  { label: "Project HSSE Approach", href: "/hsse" },
];

const CAREERS: Item[] = [
  { label: "Why Choose Us", href: "/careers#pcml-careers-why" },
  { label: "Our People, Our Value", href: "/careers#pcml-careers-people" },
  { label: "Employment Opportunities", href: "/careers#pcml-opportunities" },
];

const navLabel = {
  display: "flex",
  alignItems: "center",
  gap: 5,
  fontFamily: "var(--font-sora), sans-serif",
  fontWeight: 600,
  fontSize: 14,
  letterSpacing: ".02em",
} as const;

function Caret() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function Dropdown({ items, width, align = "left" }: { items: Item[]; width: number; align?: "left" | "right" }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "100%",
        [align]: -20,
        width,
        background: "#fff",
        border: "1px solid #e4e6e7",
        boxShadow: "0 18px 40px rgba(0,20,30,.14)",
        zIndex: 50,
      }}
    >
      <div style={{ padding: "16px 20px", display: "grid", gap: 8, fontSize: 13.5 }}>
        {items.map((i, n) => ( <Link key={`${i.href}-${n}`} href={i.href} style={{ textDecoration: "none", color: "#B06533" }}>{i.label}</Link> ))}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [menu, setMenu] = useState<string | null>(null);
  const [drawer, setDrawer] = useState(false);
  const [narrow, setNarrow] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1100px)");
    const set = () => {
      setNarrow(mq.matches);
      setDrawer(false);
    };
    mq.addEventListener("change", set);
    set();
    return () => mq.removeEventListener("change", set);
  }, []);

  useEffect(() => {
    setMenu(null);
    setDrawer(false);
  }, [pathname]);

  const colour = (path: string) => (pathname === path ? ACTIVE : INK);

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: "#ffffff",
        borderBottom: "1px solid #e4e6e7",
        boxShadow: "0 1px 0 rgba(0,0,0,.02)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "clamp(14px,2vw,30px)",
          padding: "10px clamp(16px,4vw,44px)",
          maxWidth: 1400,
          margin: "0 auto",
        }}
      >
        <Link href="/" style={{ display: "block", flex: "none", padding: "6px 0" }}>
          <img
            src="/pcml-logo-nav.svg"
            alt="Praetorian Construction Management"
            style={{ height: "clamp(70px,7vw,96px)", width: "auto", display: "block", animation: "pcmlLogoPulse 3s ease-in-out infinite", transformOrigin: "left center" }}
          />
        </Link>

        {!narrow && (
          <nav style={{ display: "flex", alignItems: "center", gap: "clamp(6px,1.4vw,20px)", marginLeft: "auto" }}>
            <div
              onMouseEnter={() => setMenu("about")}
              onMouseLeave={() => setMenu(null)}
              style={{ position: "relative", padding: "10px 0" }}
            >
              <span style={{ ...navLabel, color: colour("/about"), cursor: "default" }}>
                About Us
                <Caret />
              </span>
              {menu === "about" && <Dropdown items={ABOUT} width={260} />}
            </div>

            <div
              onMouseEnter={() => setMenu("svc")}
              onMouseLeave={() => setMenu(null)}
              style={{ position: "relative", padding: "10px 0" }}
            >
              <Link href="/services" style={{ ...navLabel, color: colour("/services"), textDecoration: "none" }}>
                Services
                <Caret />
              </Link>
              {menu === "svc" && <Dropdown items={SERVICES} width={300} />}
            </div>

            <div
              onMouseEnter={() => setMenu("hs")}
              onMouseLeave={() => setMenu(null)}
              style={{ position: "relative", padding: "10px 0" }}
            >
              <Link href="/hsse" style={{ ...navLabel, color: colour("/hsse"), textDecoration: "none" }}>
                HSSE
                <Caret />
              </Link>
              {menu === "hs" && <Dropdown items={HSSE} width={240} />}
            </div>

            <Link
              href="/praetorian-iq"
              style={{ ...navLabel, color: colour("/praetorian-iq"), textDecoration: "none", padding: "10px 0" }}
            >
              Praetorian IQ
            </Link>

            <Link
              href="/projects"
              style={{ ...navLabel, color: colour("/projects"), textDecoration: "none", padding: "10px 0" }}
            >
              Projects
            </Link>

            <div
              onMouseEnter={() => setMenu("careers")}
              onMouseLeave={() => setMenu(null)}
              style={{ position: "relative", padding: "10px 0" }}
            >
              <Link href="/careers" style={{ ...navLabel, color: colour("/careers"), textDecoration: "none" }}>
                Careers
                <Caret />
              </Link>
              {menu === "careers" && <Dropdown items={CAREERS} width={240} align="right" />}
            </div>

            <Link
              href="/news"
              style={{ ...navLabel, color: colour("/news"), textDecoration: "none", padding: "10px 0" }}
            >
              News and Insights
            </Link>

            <Link
              href="/contact"
              style={{ ...navLabel, color: colour("/contact"), textDecoration: "none", padding: "10px 0" }}
            >
              Contact Us
            </Link>

            <Link
              href="/contact"
              className="pcml-cta"
              style={{
                marginLeft: 8,
                background: "#B06533",
                color: "#fff",
                textDecoration: "none",
                padding: "11px 20px",
                fontFamily: "var(--font-sora), sans-serif",
                fontWeight: 600,
                fontSize: 13.5,
              }}
            >
              Speak with Our Team
            </Link>
          </nav>
        )}

        {narrow && (
          <button
            type="button"
            onClick={() => setDrawer((d) => !d)}
            aria-label="Menu"
            aria-expanded={drawer}
            style={{
              marginLeft: "auto",
              width: 46,
              height: 46,
              display: "grid",
              placeItems: "center",
              background: "none",
              border: "1px solid #e4e6e7",
              cursor: "pointer",
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#003E52" strokeWidth="1.6">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        )}
      </div>

      {drawer && narrow && (
        <div
          style={{
            borderTop: "1px solid #e4e6e7",
            padding: "14px clamp(16px,4vw,44px) 22px",
            display: "grid",
            gap: 2,
            maxHeight: "70vh",
            overflow: "auto",
          }}
        >
          {[
            { label: "About Us", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "HSSE", href: "/hsse" },
            { label: "Praetorian IQ", href: "/praetorian-iq" },
            { label: "Projects", href: "/projects" },
            { label: "Careers", href: "/careers" },
            { label: "News and Insights", href: "/news" },
            { label: "Contact Us", href: "/contact" },
          ].map((l) => ( <Link key={l.href} href={l.href} style={{ borderBottom: "1px solid #e4e6e7", padding: "14px 0", fontFamily: "var(--font-sora), sans-serif", fontWeight: 700, fontSize: 19, color: "#003E52", textDecoration: "none" }}>{l.label}</Link> ))}

          <Link
            href="/contact"
            style={{
              minHeight: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#B06533",
              color: "#fff",
              textDecoration: "none",
              marginTop: 16,
              fontFamily: "var(--font-sora), sans-serif",
              fontWeight: 600,
            }}
          >
            Speak with Our Team
          </Link>
        </div>
      )}
    </div>
  );
}
