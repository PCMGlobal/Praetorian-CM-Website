import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Praetorian Construction Management",
  description: "Privacy policy for praetoriancm.com -- how we collect, use and protect your information.",
};

export default function PrivacyPage() {
  return (
    <main>
      <section style={{ background: "#003E52", padding: "clamp(48px,6vw,84px) 0" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 clamp(16px,4vw,44px)" }}>
          <Link href="/" style={{ color: "#e3ab7c", fontSize: "13px", display: "flex", alignItems: "center", gap: "6px", fontFamily: "var(--font-sora), sans-serif", fontWeight: "600", textDecoration: "none", marginBottom: "22px" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
            Home
          </Link>
          <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#e3ab7c", marginBottom: "12px" }}>Legal</div>
          <h1 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "800", fontSize: "clamp(32px,4vw,52px)", margin: "0", color: "#fff", lineHeight: "1.06" }}>Privacy Policy</h1>
          <p style={{ fontSize: "15px", color: "#c3d0d4", margin: "14px 0 0" }}>Last updated: September 2026</p>
        </div>
      </section>

      <section style={{ maxWidth: "860px", margin: "0 auto", padding: "clamp(48px,6vw,84px) clamp(16px,4vw,44px)" }}>
        <div style={{ fontSize: "15px", lineHeight: "1.8", color: "#3a4449" }}>

          <h2 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "20px", color: "#003E52", margin: "0 0 12px" }}>Who We Are</h2>
          <p style={{ margin: "0 0 12px" }}>Praetorian is an industrial project management and construction management firm headquartered in Edmonton, Alberta, Canada. Our website is located at praetoriancm.com.</p>
          <p style={{ margin: "0 0 8px" }}>This policy applies to the following entities operating under the Praetorian Group of Companies:</p>
          <ol style={{ margin: "0 0 32px", paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "4px" }}>
            <li>Praetorian Construction Management Ltd.</li>
            <li>Praetorian Construction Management International Ltd.</li>
            <li>Praetorian Legate Corporation.</li>
            <li>PCMI US Inc.</li>
            <li>PCMI-México S. DE R.L. DE C.V.</li>
            <li>PCMI-Peru S.A.C.</li>
            <li>Eurasia Project Management Services Inc.</li>
            <li>Optios Properties Ltd.</li>
            <li>Scuta Project Management Limited.</li>
          </ol>

          <h2 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "20px", color: "#003E52", margin: "0 0 12px" }}>What Information We Collect</h2>
          <p style={{ margin: "0 0 16px" }}>We collect information in two ways:</p>
          <p style={{ margin: "0 0 12px" }}><strong>Information you provide directly.</strong> When you submit our contact form, we collect your name, email address, company name, and the message you send. We do not collect payment information through our website.</p>
          <p style={{ margin: "0 0 32px" }}><strong>Information collected automatically.</strong> When you visit our website, we collect standard analytics data through Google Analytics 4, including pages visited, time spent on the site, general geographic location (city and country level), and device type. This data is aggregated and does not identify you personally.</p>

          <h2 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "20px", color: "#003E52", margin: "0 0 12px" }}>How We Use Your Information</h2>
          <p style={{ margin: "0 0 12px" }}>We use the information you provide to:</p>
          <ul style={{ margin: "0 0 16px", paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "6px" }}>
            <li>Respond to your enquiry or request</li>
            <li>Follow up on business development conversations</li>
            <li>Send information about our services if you have requested it</li>
          </ul>
          <p style={{ margin: "0 0 12px" }}>We use analytics data to understand how visitors use our website and to improve its content and performance.</p>
          <p style={{ margin: "0 0 12px" }}>We do not sell your personal information.</p>
          <p style={{ margin: "0 0 32px" }}>We do not share your information with third parties except as described below.</p>

          <h2 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "20px", color: "#003E52", margin: "0 0 12px" }}>Third-Party Services</h2>
          <p style={{ margin: "0 0 12px" }}>Our website uses the following third-party services:</p>
          <ul style={{ margin: "0 0 32px", paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <li><strong>Google Analytics 4</strong> for website traffic and behaviour analysis. Google&apos;s privacy policy applies to data processed through this service.</li>
            <li><strong>Resend</strong> to deliver contact form submissions to our team. Messages are transmitted securely and not stored beyond what is needed to process your enquiry.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "20px", color: "#003E52", margin: "0 0 12px" }}>Data Retention</h2>
          <p style={{ margin: "0 0 12px" }}>Contact form enquiries are retained for as long as necessary to respond to your request and for reasonable follow-up thereafter.</p>
          <p style={{ margin: "0 0 32px" }}>Analytics data is retained in accordance with Google Analytics default settings (14 months).</p>

          <h2 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "20px", color: "#003E52", margin: "0 0 12px" }}>Your Rights</h2>
          <p style={{ margin: "0 0 12px" }}>If you are located in Canada, you have rights under the Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable provincial legislation. You may request access to, correction of, or deletion of your personal information by contacting us at the address below.</p>
          <p style={{ margin: "0 0 32px" }}>If you are located in the European Economic Area, you have rights under the General Data Protection Regulation (GDPR), including the right to access, correct, and request deletion of your personal data.</p>

          <h2 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "20px", color: "#003E52", margin: "0 0 12px" }}>Cookies</h2>
          <p style={{ margin: "0 0 32px" }}>Our website uses cookies to support analytics functionality. You can control cookie settings through your browser. Disabling cookies may affect the functionality of some parts of the site.</p>

          <h2 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "20px", color: "#003E52", margin: "0 0 12px" }}>Contact</h2>
          <p style={{ margin: "0 0 8px" }}>For any privacy-related questions or requests, please contact:</p>
          <div style={{ background: "#f7f7f7", padding: "24px 28px", borderLeft: "3px solid #003E52", margin: "0 0 32px" }}>
            <p style={{ margin: "0 0 4px", fontWeight: 600, color: "#003E52", fontFamily: "var(--font-sora), sans-serif" }}>Praetorian Construction Management Ltd.</p>
            <p style={{ margin: "0 0 4px" }}>201, 10441-178 Street</p>
            <p style={{ margin: "0 0 4px" }}>Edmonton, Alberta, T5S 1R5, Canada</p>
            <a href="mailto:info@praetoriancm.com" style={{ color: "#B06533", textDecoration: "none", display: "block", marginTop: "8px" }}>info@praetoriancm.com</a>
            <a href="tel:7809890289" style={{ color: "#B06533", textDecoration: "none", display: "block" }}>(780) 989-0289</a>
          </div>

          <h2 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "20px", color: "#003E52", margin: "0 0 12px" }}>Changes to This Policy</h2>
          <p style={{ margin: "0" }}>We may update this policy from time to time. The date at the top of this page reflects the most recent revision. Continued use of the website after any update constitutes acceptance of the revised policy.</p>

        </div>
      </section>
    </main>
  );
}
