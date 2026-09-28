// Single source of truth for site-wide SEO values.
// NAP (name, address, phone) here must match the website footer, Google Business Profile
// and every directory listing exactly.

export const SITE_URL = "https://www.praetoriancm.com";
export const SITE_NAME = "Praetorian Construction Management";
export const LEGAL_NAME = "Praetorian Construction Management Ltd.";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      legalName: LEGAL_NAME,
      alternateName: ["Praetorian CM", "PCML"],
      url: `${SITE_URL}/`,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/pcml-logo-nav.svg`,
      },
      image: `${SITE_URL}/og-image.jpg`,
      description:
        "Owner's team construction management for the global mining sector, with AI-powered cost intelligence built in.",
      telephone: "+1-780-989-0289",
      email: "info@praetoriancm.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "201-10441 178 Street NW",
        addressLocality: "Edmonton",
        addressRegion: "AB",
        postalCode: "T5S 1R5",
        addressCountry: "CA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 53.5476,
        longitude: -113.6266,
      },
      areaServed: ["Canada", "United States", "Mexico", "Peru", "Guatemala", "Armenia"].map(
        (name) => ({ "@type": "Country", name })
      ),
      knowsAbout: [
        "Owner's team construction management",
        "Mining construction management",
        "EPCM advisory",
        "Project controls",
        "Construction cost intelligence",
        "HSSE leadership",
      ],
      sameAs: [
        "https://www.linkedin.com/company/praetorian-construction-management",
        "https://www.youtube.com/@PraetorianCM",
        "https://x.com/PraetorianCMgmt",
        "https://www.instagram.com/praetoriancm",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      alternateName: "Praetorian CM",
      inLanguage: "en-CA",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};
