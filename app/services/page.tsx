import type { Metadata } from "next";
import Link from "next/link";
import { previewClient } from "@/lib/sanity";
import { AccordionItem } from "./AccordionItem";

export const metadata: Metadata = {
  title: "Services | Praetorian Construction Management",
  description: "Four service families, one integrated owner's team. From early planning through commissioning.",
};

export const revalidate = 60;

type AccordionItemType = { _key: string; title: string; body: string };
type ServiceColumn = { _key: string; number: string; title: string; subtitle: string; items: AccordionItemType[] };
type DeliveryCard = { _key: string; title: string; borderColour: string; body: Array<{children: Array<{text: string}>}> };
type ServicePageData = { serviceColumns: ServiceColumn[]; deliveryCards: DeliveryCard[] };

function getPortableText(body: Array<{children: Array<{text: string}>}>): string {
  if (!body || !Array.isArray(body)) return "";
  return body.map(block => block.children?.map((c: {text: string}) => c.text).join("")).join("\n\n");
}

async function getServicePage(): Promise<ServicePageData | null> {
  try {
    return await previewClient.fetch(
      `*[_type == "servicePage"][0]{
        serviceColumns[]{ _key, number, title, subtitle, items[]{ _key, title, body } },
        deliveryCards[]{ _key, title, borderColour, body }
      }`
    );
  } catch {
    return null;
  }
}

const colIds = ["owners-team-support", "project-services", "construction-execution", "operational-consulting"];

export default async function ServicesPage() {
  const data = await getServicePage();
  const columns = data?.serviceColumns ?? [];
  const cards = data?.deliveryCards ?? [];

  return (
    <main>
      <div>
        <section style={{ position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: "0", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundImage: "url(https://images.unsplash.com/photo-1523660778745-247ed0bcce31?w=1400&auto=format&fit=crop&q=80)" }}></div>
          <div style={{ position: "absolute", inset: "0", background: "linear-gradient(100deg,rgba(0,15,22,.9) 0%,rgba(0,25,36,.72) 48%,rgba(0,15,22,.4) 100%)" }}></div>
          <div style={{ position: "relative", maxWidth: "1400px", margin: "0 auto", padding: "clamp(40px,5vw,72px) clamp(16px,4vw,44px)" }}>
            <Link href="/" style={{ background: "none", border: "0", padding: "0", color: "#e3ab7c", fontSize: "13px", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px", fontFamily: "var(--font-sora), sans-serif", fontWeight: "600" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
              Home
            </Link>
            <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#e3ab7c", marginTop: "22px" }}>Services</div>
            <h1 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "800", fontSize: "clamp(34px,4.6vw,58px)", margin: "14px 0 0", color: "#fff", lineHeight: "1.04", maxWidth: "22ch" }}>Four service families, one integrated owner&apos;s team</h1>
            <p style={{ fontSize: "16.5px", lineHeight: "1.62", maxWidth: "62ch", color: "#c3d0d4", margin: "18px 0 0" }}>Praetorian scales from a single embedded specialist to a full owner&apos;s project management office. Every engagement is staffed against your stage gates, not ours.</p>
          </div>
        </section>
        <section style={{ maxWidth: "1400px", margin: "0 auto", padding: "clamp(40px,5vw,64px) clamp(16px,4vw,44px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "0", borderBottom: "1px solid #e4e6e7" }}>
            {columns.map((col, i) => (
              <div
                key={col._key}
                id={colIds[i]}
                style={{
                  padding: i === 0 ? "0 clamp(14px,1.8vw,22px) 34px 0" : i === columns.length - 1 ? "0 0 34px clamp(14px,1.8vw,22px)" : "0 clamp(14px,1.8vw,22px) 34px",
                  borderRight: i < columns.length - 1 ? "1px solid #e4e6e7" : "none",
                  scrollMarginTop: "100px"
                }}
              >
                <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "800", fontSize: "13px", letterSpacing: ".2em", color: "#B06533" }}>{col.number}</div>
                <h3 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "20px", margin: "12px 0 10px", color: "#003E52" }}>{col.title}</h3>
                <p style={{ fontSize: "13px", lineHeight: "1.6", color: "#5b6266", margin: "0 0 18px" }}>{col.subtitle}</p>
                <div style={{ borderTop: "1px solid #e4e6e7" }}>
                  {(col.items ?? []).map(item => <AccordionItem key={item._key} title={item.title} body={item.body} />)}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section style={{ background: "#f7f7f7", padding: "clamp(46px,6vw,84px) 0" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 clamp(16px,4vw,44px)" }}>
            <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#B06533", marginBottom: "12px" }}>Our Approach</div>
            <h2 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "clamp(30px,3.6vw,44px)", margin: "0 0 12px", color: "#003E52" }}>How We Deliver</h2>
            <p style={{ fontSize: "16px", lineHeight: "1.7", maxWidth: "72ch", color: "#555c60", margin: "0 0 44px" }}>Praetorian offers a range of services to clients in the industrial sector. From Early Planning to Project Turnover, we optimize the value added to our clients through projects that are executed safely and delivered on time and on budget.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(480px,1fr))", gap: "clamp(20px,2.6vw,28px)" }}>
              {cards.map(card => (
                <div key={card._key} data-reveal="" style={{ background: "#fff", padding: "32px 30px", borderLeft: `4px solid ${card.borderColour}` }}>
                  <h3 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "20px", color: "#003E52", margin: "0 0 14px" }}>{card.title}</h3>
                  {getPortableText(card.body).split("\n\n").map((para, idx, arr) => (
                    <p key={idx} style={{ fontSize: "14.5px", lineHeight: "1.75", color: "#555c60", margin: idx < arr.length - 1 ? "0 0 14px" : "0" }}>{para}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
