import type { Metadata } from "next";
import CTABanner from "@/app/components/CTABanner";
import Link from "next/link";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { client } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Privacy Policy | Praetorian Construction Management",
  description: "Privacy policy for praetoriancm.com. How we collect, use and protect your information.",
};

export const revalidate = 60;

type PTSpan = {
  _key: string;
  _type: "span";
  text: string;
  marks?: string[];
};

type PTMarkDef = {
  _key: string;
  _type: string;
  href?: string;
};

type PTBlock = {
  _key: string;
  _type: "block";
  style?: string;
  listItem?: "bullet" | "number";
  level?: number;
  markDefs?: PTMarkDef[];
  children: PTSpan[];
};

type PrivacyPageData = {
  title: string;
  lastUpdated?: string;
  body: PTBlock[];
};

// Matches what's live today -- shown whenever the "Privacy Policy Page" document
// hasn't been created/published in Sanity Studio yet, so the site never regresses.
const DEFAULT_PRIVACY: PrivacyPageData = {
  title: "Privacy Policy",
  lastUpdated: "September 2026",
  body: [
    { _key: "k1", _type: "block", style: "h2", children: [{ _key: "k1c1", _type: "span", text: "Who We Are", marks: [] }] },
    { _key: "k2", _type: "block", style: "normal", children: [{ _key: "k2c1", _type: "span", text: "Praetorian is an industrial project management and construction management firm headquartered in Edmonton, Alberta, Canada. Our website is located at praetoriancm.com.", marks: [] }] },
    { _key: "k3", _type: "block", style: "normal", children: [{ _key: "k3c1", _type: "span", text: "This policy applies to the following entities operating under the Praetorian Group of Companies:", marks: [] }] },
    { _key: "k4", _type: "block", style: "normal", listItem: "number", level: 1, children: [{ _key: "k4c1", _type: "span", text: "Praetorian Construction Management Ltd.", marks: [] }] },
    { _key: "k5", _type: "block", style: "normal", listItem: "number", level: 1, children: [{ _key: "k5c1", _type: "span", text: "Praetorian Construction Management International Ltd.", marks: [] }] },
    { _key: "k6", _type: "block", style: "normal", listItem: "number", level: 1, children: [{ _key: "k6c1", _type: "span", text: "Praetorian Legate Corporation.", marks: [] }] },
    { _key: "k7", _type: "block", style: "normal", listItem: "number", level: 1, children: [{ _key: "k7c1", _type: "span", text: "PCMI US Inc.", marks: [] }] },
    { _key: "k8", _type: "block", style: "normal", listItem: "number", level: 1, children: [{ _key: "k8c1", _type: "span", text: "PCMI-México S. DE R.L. DE C.V.", marks: [] }] },
    { _key: "k9", _type: "block", style: "normal", listItem: "number", level: 1, children: [{ _key: "k9c1", _type: "span", text: "PCMI-Peru S.A.C.", marks: [] }] },
    { _key: "k10", _type: "block", style: "normal", listItem: "number", level: 1, children: [{ _key: "k10c1", _type: "span", text: "Eurasia Project Management Services Inc.", marks: [] }] },
    { _key: "k11", _type: "block", style: "normal", listItem: "number", level: 1, children: [{ _key: "k11c1", _type: "span", text: "Optios Properties Ltd.", marks: [] }] },
    { _key: "k12", _type: "block", style: "normal", listItem: "number", level: 1, children: [{ _key: "k12c1", _type: "span", text: "Scuta Project Management Limited.", marks: [] }] },
    { _key: "k13", _type: "block", style: "h2", children: [{ _key: "k13c1", _type: "span", text: "What Information We Collect", marks: [] }] },
    { _key: "k14", _type: "block", style: "normal", children: [{ _key: "k14c1", _type: "span", text: "We collect information in two ways:", marks: [] }] },
    { _key: "k15", _type: "block", style: "normal", children: [
      { _key: "k15c1", _type: "span", text: "Information you provide directly.", marks: ["strong"] },
      { _key: "k15c2", _type: "span", text: " When you submit our contact form, we collect your name, email address, company name, and the message you send. We do not collect payment information through our website.", marks: [] },
    ] },
    { _key: "k16", _type: "block", style: "normal", children: [
      { _key: "k16c1", _type: "span", text: "Information collected automatically.", marks: ["strong"] },
      { _key: "k16c2", _type: "span", text: " When you visit our website, we collect standard analytics data through Google Analytics 4, including pages visited, time spent on the site, general geographic location (city and country level), and device type. This data is aggregated and does not identify you personally.", marks: [] },
    ] },
    { _key: "k17", _type: "block", style: "h2", children: [{ _key: "k17c1", _type: "span", text: "How We Use Your Information", marks: [] }] },
    { _key: "k18", _type: "block", style: "normal", children: [{ _key: "k18c1", _type: "span", text: "We use the information you provide to:", marks: [] }] },
    { _key: "k19", _type: "block", style: "normal", listItem: "bullet", level: 1, children: [{ _key: "k19c1", _type: "span", text: "Respond to your enquiry or request", marks: [] }] },
    { _key: "k20", _type: "block", style: "normal", listItem: "bullet", level: 1, children: [{ _key: "k20c1", _type: "span", text: "Follow up on business development conversations", marks: [] }] },
    { _key: "k21", _type: "block", style: "normal", listItem: "bullet", level: 1, children: [{ _key: "k21c1", _type: "span", text: "Send information about our services if you have requested it", marks: [] }] },
    { _key: "k22", _type: "block", style: "normal", children: [{ _key: "k22c1", _type: "span", text: "We use analytics data to understand how visitors use our website and to improve its content and performance.", marks: [] }] },
    { _key: "k23", _type: "block", style: "normal", children: [{ _key: "k23c1", _type: "span", text: "We do not sell your personal information.", marks: [] }] },
    { _key: "k24", _type: "block", style: "normal", children: [{ _key: "k24c1", _type: "span", text: "We do not share your information with third parties except as described below.", marks: [] }] },
    { _key: "k25", _type: "block", style: "h2", children: [{ _key: "k25c1", _type: "span", text: "Third-Party Services", marks: [] }] },
    { _key: "k26", _type: "block", style: "normal", children: [{ _key: "k26c1", _type: "span", text: "Our website uses the following third-party services:", marks: [] }] },
    { _key: "k27", _type: "block", style: "normal", listItem: "bullet", level: 1, children: [
      { _key: "k27c1", _type: "span", text: "Google Analytics 4", marks: ["strong"] },
      { _key: "k27c2", _type: "span", text: " for website traffic and behaviour analysis. Google's privacy policy applies to data processed through this service.", marks: [] },
    ] },
    { _key: "k28", _type: "block", style: "normal", listItem: "bullet", level: 1, children: [
      { _key: "k28c1", _type: "span", text: "Resend", marks: ["strong"] },
      { _key: "k28c2", _type: "span", text: " to deliver contact form submissions to our team. Messages are transmitted securely and not stored beyond what is needed to process your enquiry.", marks: [] },
    ] },
    { _key: "k29", _type: "block", style: "h2", children: [{ _key: "k29c1", _type: "span", text: "Data Retention", marks: [] }] },
    { _key: "k30", _type: "block", style: "normal", children: [{ _key: "k30c1", _type: "span", text: "Contact form enquiries are retained for as long as necessary to respond to your request and for reasonable follow-up thereafter.", marks: [] }] },
    { _key: "k31", _type: "block", style: "normal", children: [{ _key: "k31c1", _type: "span", text: "Analytics data is retained in accordance with Google Analytics default settings (14 months).", marks: [] }] },
    { _key: "k32", _type: "block", style: "h2", children: [{ _key: "k32c1", _type: "span", text: "Your Rights", marks: [] }] },
    { _key: "k33", _type: "block", style: "normal", children: [{ _key: "k33c1", _type: "span", text: "If you are located in Canada, you have rights under the Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable provincial legislation. You may request access to, correction of, or deletion of your personal information by contacting us at the address below.", marks: [] }] },
    { _key: "k34", _type: "block", style: "normal", children: [{ _key: "k34c1", _type: "span", text: "If you are located in the European Economic Area, you have rights under the General Data Protection Regulation (GDPR), including the right to access, correct, and request deletion of your personal data.", marks: [] }] },
    { _key: "k35", _type: "block", style: "h2", children: [{ _key: "k35c1", _type: "span", text: "Cookies", marks: [] }] },
    { _key: "k36", _type: "block", style: "normal", children: [{ _key: "k36c1", _type: "span", text: "Our website uses cookies to support analytics functionality. You can control cookie settings through your browser. Disabling cookies may affect the functionality of some parts of the site.", marks: [] }] },
    { _key: "k37", _type: "block", style: "h2", children: [{ _key: "k37c1", _type: "span", text: "Contact", marks: [] }] },
    { _key: "k38", _type: "block", style: "normal", children: [{ _key: "k38c1", _type: "span", text: "For any privacy-related questions or requests, please contact:", marks: [] }] },
    {
      _key: "k39",
      _type: "block",
      style: "blockquote",
      markDefs: [
        { _key: "k39mEmail", _type: "link", href: "mailto:info@praetoriancm.com" },
        { _key: "k39mPhone", _type: "link", href: "tel:7809890289" },
      ],
      children: [
        { _key: "k39c1", _type: "span", text: "Praetorian Construction Management Ltd.\n", marks: ["strong"] },
        { _key: "k39c2", _type: "span", text: "201, 10441-178 Street\nEdmonton, Alberta, T5S 1R5, Canada\n", marks: [] },
        { _key: "k39c3", _type: "span", text: "info@praetoriancm.com", marks: ["k39mEmail"] },
        { _key: "k39c4", _type: "span", text: "\n", marks: [] },
        { _key: "k39c5", _type: "span", text: "(780) 989-0289", marks: ["k39mPhone"] },
      ],
    },
    { _key: "k40", _type: "block", style: "h2", children: [{ _key: "k40c1", _type: "span", text: "Changes to This Policy", marks: [] }] },
    { _key: "k41", _type: "block", style: "normal", children: [{ _key: "k41c1", _type: "span", text: "We may update this policy from time to time. The date at the top of this page reflects the most recent revision. Continued use of the website after any update constitutes acceptance of the revised policy.", marks: [] }] },
  ],
};

async function getPrivacyPage(): Promise<PrivacyPageData | null> {
  try {
    return await client.fetch(
      `*[_type == "privacyPage"][0]{
        title, lastUpdated, body
      }`
    );
  } catch {
    return null;
  }
}

const ptComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "20px", color: "#003E52", margin: "0 0 12px" }}>{children}</h2>
    ),
    normal: ({ children }) => (
      <p style={{ margin: "0 0 12px" }}>{children}</p>
    ),
    blockquote: ({ children }) => (
      <div style={{ background: "#f7f7f7", padding: "24px 28px", borderLeft: "3px solid #003E52", margin: "0 0 32px", whiteSpace: "pre-line" }}>{children}</div>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul style={{ margin: "0 0 16px", paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "6px" }}>{children}</ul>
    ),
    number: ({ children }) => (
      <ol style={{ margin: "0 0 32px", paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "4px" }}>{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    link: ({ value, children }) => (
      <a href={value?.href} style={{ color: "#B06533", textDecoration: "none" }}>{children}</a>
    ),
  },
};

export default async function PrivacyPage() {
  const fetched = await getPrivacyPage();
  const data = fetched ?? DEFAULT_PRIVACY;

  return (
    <main>
      <section style={{ background: "#003E52", padding: "clamp(48px,6vw,84px) 0" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 clamp(16px,4vw,44px)" }}>
          <Link href="/" style={{ color: "#e3ab7c", fontSize: "13px", display: "flex", alignItems: "center", gap: "6px", fontFamily: "var(--font-sora), sans-serif", fontWeight: "600", textDecoration: "none", marginBottom: "22px" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
            Home
          </Link>
          <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#e3ab7c", marginBottom: "12px" }}>Legal</div>
          <h1 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "800", fontSize: "clamp(24px,3vw,39px)", margin: "0", color: "#fff", lineHeight: "1.06" }}>{data.title}</h1>
          {data.lastUpdated ? (
            <p style={{ fontSize: "15px", color: "#c3d0d4", margin: "14px 0 0" }}>Last updated: {data.lastUpdated}</p>
          ) : null}
        </div>
      </section>

      <section style={{ maxWidth: "860px", margin: "0 auto", padding: "clamp(48px,6vw,84px) clamp(16px,4vw,44px)" }}>
        <div style={{ fontSize: "15px", lineHeight: "1.8", color: "#3a4449" }}>
          <PortableText value={data.body} components={ptComponents} />
        </div>
      </section>
      <CTABanner />
    </main>
  );
}
