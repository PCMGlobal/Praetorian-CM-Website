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
  // WordPress service and company pages
  ["/construction-management", "/services"],
  ["/early-planning-and-financing-support", "/services"],
  ["/engineering-support-and-constructability", "/services"],
  ["/procurement-and-logistics", "/services"],
  ["/project-controls", "/services"],
  ["/quality-commissioning-and-turnover", "/services"],
  ["/health-safety", "/hsse"],
  ["/contact-us", "/contact"],
  ["/page/2", "/news"],
  // WordPress job postings
  ["/quality-assurance-manager", "/careers"],
  ["/warehouse-and-inventory-expert", "/careers"],
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
  ["/services_constructability.html", "/services"],
  ["/services_heavy.html", "/services"],
  ["/services_mining.html", "/services"],
  ["/services_project.html", "/services"],
  ["/brochure/index.html", "/"],
  ["/brochure_mining/index.html", "/"],
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
      ...LEGACY_REDIRECTS.map(([source, destination]) => ({
        source,
        destination,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
