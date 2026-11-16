// Search titles and descriptions for articles whose Sanity title or excerpt does not suit
// Google's results page (too long, or not matching what people search for).
// The article's on-page heading and the News card text are unchanged.
// Source: Search Console queries and click rates, 19 Oct to 16 Nov 2026.
// Keep titles to 60 characters and descriptions to 155 so Google shows them in full.

export type SearchSnippet = { title: string; description: string };

export const ARTICLE_SEARCH_SNIPPETS: Record<string, SearchSnippet> = {
  "commissioning-and-turnover-on-mining-projects": {
    title: "Mining Commissioning and Turnover: What Owners Must Control",
    description:
      "Five things owners must control in mining commissioning: construction verification, mechanical completion, commissioning, turnover packages and ramp-up.",
  },
  "why-project-controls-matter-more-than-project-management-in-mining": {
    title: "Project Controls for Metals and Mining: Why They Matter",
    description:
      "Project controls for metals and mining: cost control, scheduling, earned value and change management, and why they decide if a project lands on budget.",
  },
  "what-an-owner-s-team-construction-manager-actually-does": {
    title: "Owner's Team Construction Manager: What the Role Involves",
    description:
      "What an owner's representative does on a mining project, how the role differs from an EPCM contractor, and how an owner's team protects cost and schedule.",
  },
  "meet-praetorian-at-cim-capital-projects-symposium-2026": {
    title: "CIM Capital Projects Symposium 2026 (CPS) in Toronto",
    description:
      "Praetorian at the CIM Capital Projects Symposium 2026, 8 to 10 November, Chelsea Hotel, Toronto. Talk to our team about your mining capital project.",
  },
};
