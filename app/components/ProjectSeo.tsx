import Image from "next/image";
import Link from "next/link";
import { PROJECT_FACTS } from "@/lib/project-facts";
import { SERVICE_PAGES, servicePath } from "@/lib/service-pages";

// Project hero photo as a real image with descriptive alt text, so search engines can read it.
export function ProjectHeroImage({ slug }: { slug: string }) {
  const facts = PROJECT_FACTS[slug];
  if (!facts) return null;
  return (
    <Image
      src={facts.image}
      alt={facts.imageAlt}
      fill
      priority
      sizes="100vw"
      style={{ objectFit: "cover", objectPosition: "center" }}
    />
  );
}

// One-line summary in the words owners search with: commodity, project type, location, role.
export function ProjectFactLine({ slug }: { slug: string }) {
  const facts = PROJECT_FACTS[slug];
  if (!facts) return null;
  return (
    <p style={{ margin: "14px 0 0", fontSize: "14.5px", lineHeight: "1.6", color: "#e3ab7c", fontFamily: "var(--font-sora), sans-serif", fontWeight: 600, maxWidth: "90ch" }}>
      {facts.factLine.join(" · ")}
    </p>
  );
}

// Links from each project to the service pages it demonstrates.
export function ProjectRelatedServices({ slug }: { slug: string }) {
  const facts = PROJECT_FACTS[slug];
  if (!facts || facts.services.length === 0) return null;
  const services = SERVICE_PAGES.filter((s) => facts.services.includes(s.slug));
  return (
    <section style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 clamp(16px,4vw,44px) clamp(36px,4vw,52px)" }}>
      <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "18px", letterSpacing: ".12em", textTransform: "uppercase", color: "#B06533", marginBottom: "14px" }}>Services on this project</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
        {services.map((s) => (
          <Link key={s.slug} href={servicePath(s.slug)} style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "1px solid #d5d9db", padding: "10px 16px", color: "#003E52", fontFamily: "var(--font-sora), sans-serif", fontWeight: "600", fontSize: "14px", textDecoration: "none" }}>
            {s.title}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </Link>
        ))}
      </div>
    </section>
  );
}
