/** @type {import('next').NextConfig} */

// Permanent redirects from URLs of the previous praetoriancm.com sites (WordPress and the
// earlier static HTML site) so existing Google results and backlinks land on the new pages.
// Source list: URLs recorded for praetoriancm.com in the Internet Archive and Google's index, 28 Sep 2026.
const LEGACY_REDIRECTS = [
  // WordPress project pages
  ["/amulsar-gold-project", "/projects/amulsar"],
  ["/conga-mine", "/projects/conga"],
  ["/diavik-underground-project", "/projects/diavik"],
  ["/emigrant-mine", "/projects/emigrant"],
  ["/penasquito-mine-clr-project", "/projects/penasquito"],
  ["/so2clean-production-facility", "/projects/so2clean"],
  // WordPress service and company pages (service pages point to the matching service page from 1 Oct 2026)
  ["/construction-management", "/services/planning-and-execution"],
  ["/early-planning-and-financing-support", "/services/pre-construction"],
  ["/engineering-support-and-constructability", "/services/pre-construction"],
  ["/procurement-and-logistics", "/services/project-services"],
  ["/project-controls", "/services/project-services"],
  ["/quality-commissioning-and-turnover", "/services/post-construction"],
  ["/health-safety", "/hsse"],
  ["/contact-us", "/contact"],
  ["/page/2", "/news"],
  // WordPress job postings
  ["/quality-assurance-manager", "/careers"],
  ["/warehouse-and-inventory-expert", "/careers"],
  ["/category/jobs", "/careers"],
  // Earlier static HTML site
  ["/index.html", "/"],
  ["/about.html", "/about"],
  ["/about_company.html", "/about"],
  ["/about_management.html", "/about"],
  ["/careers.html", "/careers"],
  ["/careers_postings.html", "/careers"],
  ["/contact.html", "/contact"],
  ["/literature.html", "/news"],
  ["/safety.html", "/hsse"],
  ["/services.html", "/services"],
  ["/services_civil.html", "/services"],
  ["/services_constructability.html", "/services/pre-construction"],
  ["/services_heavy.html", "/services"],
  ["/services_mining.html", "/services"],
  ["/services_project.html", "/services/project-services"],
  ["/brochure/index.html", "/"],
  ["/brochure_mining/index.html", "/"],
];

// Articles merged into a stronger article on the same topic (28 Sep 2026), so the two
// versions no longer compete with each other in search. The merged-away article is
// unpublished in Sanity and its address now leads to the combined article.
const MERGED_ARTICLE_REDIRECTS = [
  [
    "/news/what-owner-s-team-construction-management-means-in-practice",
    "/news/what-an-owner-s-team-construction-manager-actually-does",
  ],
  [
    "/news/praetorian-iq-ai-powered-cost-intelligence-for-mining-construction",
    "/news/praetorian-iq-how-we-built-a-proprietary-cost-intelligence-platform-for-mining-construction",
  ],
];

const nextConfig = {
  async redirects() {
    return [
      // Send the default Vercel production hostname to the real domain so Google never
      // indexes a duplicate copy of the site. Branch preview URLs are not affected.
      {
        source: "/:path*",
        has: [{ type: "host", value: "praetorian-cm-website.vercel.app" }],
        destination: "https://www.praetoriancm.com/:path*",
        permanent: true,
      },
      ...[...LEGACY_REDIRECTS, ...MERGED_ARTICLE_REDIRECTS].map(([source, destination]) => ({
        source,
        destination,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
