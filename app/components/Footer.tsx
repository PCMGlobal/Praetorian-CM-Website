import Link from "next/link";

export default function Footer() {
  const services = [
    "Project Controls",
    "Owner's Representative",
    "Construction Management",
    "HSSE",
    "Scheduling & Planning",
    "Document Control",
  ];

  const company = [
    { label: "About Us", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Careers", href: "/careers" },
    { label: "News & Events", href: "/news" },
    { label: "HSSE", href: "/hsse" },
    { label: "Contact", href: "/contact" },
  ];

  const socials = [
    { label: "in", href: "https://www.linkedin.com/company/praetorian-construction-management/" },
    { label: "X", href: "#" },
    { label: "yt", href: "#" },
    { label: "ig", href: "#" },
  ];

  return (
    <footer style={{ backgroundColor: "#002C3A" }} className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-4 gap-12 mb-12">
          <div className="col-span-1">
            <div className="text-white font-bold text-lg mb-4">Praetorian Construction Management</div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#98999B" }}>
              World-class project management across mining, energy, and infrastructure sectors.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => ( <a key={s.label} href={s.href} target={s.href === "#" ? undefined : "_blank"} rel={s.href === "#" ? undefined : "noopener noreferrer"} className="w-8 h-8 rounded flex items-center justify-center text-xs font-bold" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#98999B" }}>{s.label}</a> ))}
         
            </div>
          </div>

          <div>
            <div className="text-white font-semibold mb-4">Services</div>
            <ul className="space-y-2 text-sm" style={{ color: "#98999B" }}>
              {services.map((s) => (
                <li key={s}>
                  <Link href="/services" className="hover:text-white transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-white font-semibold mb-4">Company</div>
            <ul className="space-y-2 text-sm" style={{ color: "#98999B" }}>
              {company.map((c) => (
                <li key={c.label}>
                  <Link href={c.href} className="hover:text-white transition-colors">{c.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-white font-semibold mb-4">Contact</div>
            <ul className="space-y-3 text-sm" style={{ color: "#98999B" }}>
              <li>201 - 10441 178 Street<br />Edmonton, Alberta T5S 1R5</li>
              <li><a href="tel:7809890289" className="hover:text-white transition-colors">780.989.0289</a></li>
              <li><a href="mailto:info@praetoriancm.com" className="hover:text-white transition-colors">info@praetoriancm.com</a></li>
            </ul>
          </div>
        </div>

        <div
          className="pt-8 flex items-center justify-between text-xs"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)", color: "#98999B" }}
        >
          <span>&copy; 2026 Praetorian Construction Management Ltd. All rights reserved.</span>
          <span>Edmonton, Alberta, Canada</span>
        </div>
      </div>
    </footer>
  );
}