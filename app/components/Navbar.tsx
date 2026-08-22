import Link from "next/link";

export default function Navbar() {
  const links = [
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "HSSE", href: "/hsse" },
    { label: "Careers", href: "/careers" },
    { label: "News", href: "/news" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav style={{ backgroundColor: "#003E52" }} className="w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-white font-bold text-xl hover:text-amber-400 transition-colors">
          Praetorian Construction Management
        </Link>
        <div className="hidden md:flex gap-8 text-white text-sm">
          {links.map((l) => ( <Link key={l.href} href={l.href} className="hover:text-amber-400 transition-colors">{l.label}</Link> ))}
        </div>
      </div>
    </nav>
  );
}