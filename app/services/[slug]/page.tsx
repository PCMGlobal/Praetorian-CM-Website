import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTABanner from "@/app/components/CTABanner";
import { client } from "@/lib/sanity";
import { SITE_URL } from "@/lib/seo";
import { SERVICE_PAGES, getServicePage, servicePath } from "@/lib/service-pages";
import { PROJECT_FACTS } from "@/lib/project-facts";

export const revalidate = 60;
export const dynamicParams = false;

type ColumnItem = { _key: string; title: string; body: string };
type Column = { title?: string; subtitle?: string; items?: ColumnItem[] };

export function generateStaticParams() {
  return SERVICE_PAGES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = getServicePage(params.slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.metaDescription,
    alternates: { canonical: servicePath(page.slug) },
    openGraph: { title: page.title, description: page.metaDescription, url: servicePath(page.slug) },
  };
}

async function getColumn(key: string): Promise<Column | null> {
  try {
    return await client.fetch(
      `*[_type == "servicePage"][0].serviceColumns[_key == $key][0]{ title, subtitle, items[]{ _key, title, body } }`,
      { key }
    );
  } catch {
    return null;
  }
}

const sora = "var(--font-sora), sans-serif";
const eyebrowStyle = { fontFamily: sora, fontWeight: "700", fontSize: "18px", letterSpacing: ".12em", textTransform: "uppercase" as const, color: "#B06533" };
const h2Style = { fontFamily: sora, fontWeight: "700", fontSize: "clamp(20px,2.2vw,28px)", margin: "0 0 16px", color: "#003E52", lineHeight: "1.2" };
const bodyStyle = { fontSize: "16px", lineHeight: "1.75", color: "#3a3f42", margin: "0 0 16px" };
const wrap = { maxWidth: "1100px", margin: "0 auto", padding: "0 clamp(16px,4vw,44px)" };
const arrow = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;

export default async function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const page = getServicePage(params.slug);
  if (!page) notFound();
  const column = await getColumn(page.columnKey);
  const items = column?.items ?? [];
  const url = `${SITE_URL}${servicePath(page.slug)}`;
  const otherServices = SERVICE_PAGES.filter((s) => s.slug !== page.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: page.title,
        serviceType: page.serviceType,
        description: page.metaDescription,
        url,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: ["Canada", "United States", "Mexico", "Peru", "Guatemala", "Armenia"].map((name) => ({ "@type": "Country", name })),
        ...(items.length
          ? { hasOfferCatalog: { "@type": "OfferCatalog", name: page.title, itemListElement: items.map((it) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: it.title } })) } }
          : {}),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
          { "@type": "ListItem", position: 3, name: page.title, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: "0", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundImage: "url(/images/photos/pcml-hero-02.jpg)" }}></div>
        <div style={{ position: "absolute", inset: "0", background: "linear-gradient(100deg,rgba(0,15,22,.92) 0%,rgba(0,25,36,.78) 55%,rgba(0,15,22,.5) 100%)" }}></div>
        <div style={{ position: "relative", maxWidth: "1400px", margin: "0 auto", padding: "clamp(40px,5vw,72px) clamp(16px,4vw,44px)" }}>
          <Link href="/services" style={{ color: "#e3ab7c", fontSize: "13px", display: "flex", alignItems: "center", gap: "6px", fontFamily: sora, fontWeight: "600", textDecoration: "none" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
            All Services
          </Link>
          <div style={{ fontFamily: sora, fontWeight: "700", fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#e3ab7c", marginTop: "22px" }}>Services · {page.number} {column?.title ?? page.navLabel}</div>
          <h1 style={{ fontFamily: sora, fontWeight: "800", fontSize: "clamp(26px,3.45vw,43px)", margin: "14px 0 0", color: "#fff", lineHeight: "1.08", maxWidth: "24ch" }}>{page.title}</h1>
          {page.intro.map((para, i) => (
            <p key={i} style={{ fontSize: "16.5px", lineHeight: "1.62", maxWidth: "66ch", color: "#c3d0d4", margin: i === 0 ? "18px 0 0" : "12px 0 0" }}>{para}</p>
          ))}
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "26px", background: "#B06533", color: "#fff", textDecoration: "none", minHeight: "44px", padding: "0 22px", fontFamily: sora, fontWeight: "600", fontSize: "14px" }}>
            Speak with Our Team {arrow}
          </Link>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "clamp(32px,4vw,56px) 0" }}>
        <div style={wrap}>
          <div style={eyebrowStyle}>When to engage us</div>
          <div style={{ width: "64px", height: "3px", background: "#B06533", margin: "18px 0 18px" }}></div>
          <h2 style={h2Style}>When owners bring Praetorian in</h2>
          <p style={bodyStyle}>{page.whenToEngage.lead}</p>
          <ul style={{ ...bodyStyle, paddingLeft: "20px" }}>
            {page.whenToEngage.points.map((pt, i) => <li key={i} style={{ marginBottom: "10px" }}>{pt}</li>)}
          </ul>
          {page.sections.map((s) => (
            <div key={s.heading} style={{ marginTop: "32px" }}>
              <h2 style={h2Style}>{s.heading}</h2>
              {s.paragraphs.map((para, i) => <p key={i} style={bodyStyle}>{para}</p>)}
            </div>
          ))}
        </div>
      </section>

      {items.length > 0 && (
        <section style={{ background: "#f7f7f7", padding: "clamp(32px,4vw,56px) 0" }}>
          <div style={wrap}>
            <div style={eyebrowStyle}>What&apos;s included</div>
            <div style={{ width: "64px", height: "3px", background: "#B06533", margin: "18px 0 18px" }}></div>
            <h2 style={h2Style}>{column?.title ?? page.navLabel} services</h2>
            {column?.subtitle && <p style={bodyStyle}>{column.subtitle}</p>}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "clamp(16px,2vw,24px)", marginTop: "12px" }}>
              {items.map((it) => (
                <div key={it._key} style={{ background: "#fff", padding: "22px 22px 20px", borderTop: "3px solid #B06533", boxShadow: "0 2px 14px rgba(0,20,30,.06)" }}>
                  <h3 style={{ fontFamily: sora, fontWeight: "700", fontSize: "17px", margin: "0 0 10px", color: "#003E52" }}>{it.title}</h3>
                  {(it.body ?? "").trim().split(/\n+/).map((para, i) => (
                    <p key={i} style={{ fontSize: "14.5px", lineHeight: "1.7", color: "#555c60", margin: "0 0 8px" }}>{para.trim()}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section style={{ background: "#fff", padding: "clamp(32px,4vw,56px) 0" }}>
        <div style={wrap}>
          <div style={eyebrowStyle}>Project experience</div>
          <div style={{ width: "64px", height: "3px", background: "#B06533", margin: "18px 0 18px" }}></div>
          <h2 style={h2Style}>Where Praetorian has delivered this service</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "clamp(16px,2vw,24px)" }}>
            {page.projects.map((p) => {
              const facts = PROJECT_FACTS[p.slug];
              if (!facts) return null;
              return (
                <Link key={p.slug} href={`/projects/${p.slug}`} style={{ display: "block", textDecoration: "none", color: "inherit", border: "1px solid #e4e6e7", padding: "20px 22px" }}>
                  <div style={{ fontSize: "12px", color: "#8b9095", marginBottom: "6px" }}>{facts.factLine[0]} · {facts.factLine[2]}</div>
                  <h3 style={{ fontFamily: sora, fontWeight: "700", fontSize: "17px", margin: "0 0 8px", color: "#003E52" }}>{facts.name}</h3>
                  <p style={{ fontSize: "14.5px", lineHeight: "1.65", color: "#555c60", margin: "0 0 10px" }}>{p.note}</p>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#B06533", fontFamily: sora, fontWeight: "600", fontSize: "13.5px" }}>View project {arrow}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ background: "#f7f7f7", padding: "clamp(32px,4vw,56px) 0" }}>
        <div style={wrap}>
          <div style={eyebrowStyle}>Common questions</div>
          <div style={{ width: "64px", height: "3px", background: "#B06533", margin: "18px 0 18px" }}></div>
          <h2 style={h2Style}>Questions owners ask</h2>
          {page.faqs.map((f) => (
            <div key={f.q} style={{ borderBottom: "1px solid #e4e6e7", padding: "18px 0" }}>
              <h3 style={{ fontFamily: sora, fontWeight: "700", fontSize: "17px", margin: "0 0 8px", color: "#003E52" }}>{f.q}</h3>
              <p style={{ fontSize: "15.5px", lineHeight: "1.7", color: "#3a3f42", margin: "0" }}>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#fff", padding: "clamp(32px,4vw,56px) 0" }}>
        <div style={{ ...wrap, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "clamp(24px,3vw,40px)" }}>
          <div>
            <div style={eyebrowStyle}>Further reading</div>
            <div style={{ width: "64px", height: "3px", background: "#B06533", margin: "18px 0 18px" }}></div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {page.articles.map((a) => (
                <li key={a.slug} style={{ marginBottom: "12px" }}>
                  <Link href={`/news/${a.slug}`} style={{ color: "#003E52", fontSize: "15.5px", lineHeight: "1.5", fontWeight: 600 }}>{a.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div style={eyebrowStyle}>Other services</div>
            <div style={{ width: "64px", height: "3px", background: "#B06533", margin: "18px 0 18px" }}></div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {otherServices.map((s) => (
                <li key={s.slug} style={{ marginBottom: "12px" }}>
                  <Link href={servicePath(s.slug)} style={{ color: "#003E52", fontSize: "15.5px", lineHeight: "1.5", fontWeight: 600 }}>{s.title}</Link>
                </li>
              ))}
              <li style={{ marginBottom: "12px" }}>
                <Link href="/praetorian-iq" style={{ color: "#003E52", fontSize: "15.5px", lineHeight: "1.5", fontWeight: 600 }}>Praetorian IQ cost intelligence</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
