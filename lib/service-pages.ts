// Content for the four individual service pages under /services/<slug>.
// Drafted on 1 Oct 2026 from wording already published on this site (the Services page,
// About page, project pages and articles) so each service can rank for its own searches.
// The "What's included" list on each page comes live from the matching column of the
// Services Page document in Sanity, so edits made in the Studio appear on both pages.

import type { ServiceSlug } from "@/lib/project-facts";

export type ServicePageContent = {
  slug: ServiceSlug;
  columnKey: string; // _key of the matching serviceColumns entry in the Sanity servicePage document
  number: string;
  navLabel: string;
  title: string; // H1 and page title
  metaDescription: string;
  serviceType: string;
  intro: string[];
  whenToEngage: { lead: string; points: string[] };
  sections: { heading: string; paragraphs: string[] }[];
  projects: { slug: string; note: string }[];
  faqs: { q: string; a: string }[];
  articles: { slug: string; title: string }[];
};

const ARTICLES = {
  early: { slug: "feasibility-to-commissioning-the-case-for-early-owner-engagement", title: "Feasibility to Commissioning: The Case for Early Owner Engagement" },
  overruns: { slug: "mining-construction-cost-overruns", title: "Why Mining Construction Projects Go Over Budget, and What Actually Fixes It" },
  ownersTeam: { slug: "what-an-owner-s-team-construction-manager-actually-does", title: "What an Owner's Team Construction Manager Actually Does" },
  controls: { slug: "why-project-controls-matter-more-than-project-management-in-mining", title: "Why Project Controls Matter More Than Project Management in Mining" },
  contracts: { slug: "how-praetorian-manages-contracts-on-complex-mining-projects", title: "How Praetorian Manages Contracts on Complex Mining Projects" },
  iq: { slug: "praetorian-iq-how-we-built-a-proprietary-cost-intelligence-platform-for-mining-construction", title: "Praetorian IQ: How We Built a Proprietary Cost Intelligence Platform for Mining Construction" },
  hsse: { slug: "hsse-culture-on-remote-mining-projects-what-zero-harm-actually-requires", title: "HSSE Culture on Remote Mining Projects: What Zero Harm Actually Requires" },
  remote: { slug: "managing-construction-projects-in-remote-and-international-locations", title: "Managing Construction Projects in Remote and International Locations" },
};

export const SERVICE_PAGES: ServicePageContent[] = [
  {
    slug: "pre-construction",
    columnKey: "col01",
    number: "01",
    navLabel: "Pre-Construction",
    title: "Mining Pre-Construction and Feasibility Support",
    metaDescription: "Owner's team pre-construction support for mining projects: feasibility review, capital cost estimate review, constructability and stage gate planning.",
    serviceType: "Mining pre-construction and feasibility support",
    intro: [
      "The decisions made before construction begins set most of a mining project's final cost. By the time a project reaches detailed engineering, the vast majority of its cost is committed, and changes during construction cost more still.",
      "Praetorian embeds experienced construction managers in the owner's team from concept through feasibility, so the scope, budget and schedule assumptions are set by people who will be accountable for execution.",
    ],
    whenToEngage: {
      lead: "Owners usually bring Praetorian in at one of three points:",
      points: [
        "At the study stage (PEA, PFS or feasibility study), for an independent review of the construction cost estimate, the contracting strategy and the project execution plan before the investment decision.",
        "During project definition, when the scope is firmed up, the execution strategy is set and contracts are structured. This is the highest-leverage period in the project lifecycle.",
        "Ahead of financing, to build the financial and planning foundation that lenders and boards require. Praetorian has sat in interviews with clients and financing bodies, including the World Bank, to present and defend project plans.",
      ],
    },
    sections: [
      {
        heading: "How it works alongside the engineering and EPCM teams",
        paragraphs: [
          "Most feasibility studies are produced by engineering consultants whose primary expertise is technical: defining what needs to be built. Praetorian adds the construction view, covering what the project should cost, how it should be contracted and what the construction risks are in the jurisdiction where it will be built.",
          "We operate at arm's length from the engineering effort, so our recommendations on scope, constructability and cost are independent and made on the owner's behalf. We work with the owner's design team to improve quality and reduce construction risk, and our constructability reviews identify inefficiencies early, before ground is broken.",
          "Our estimate reviews draw on Praetorian's own delivered project actuals. Praetorian IQ, our cost intelligence platform, compares the cost position against comparable delivered projects at the same stage gate, so assumptions can be tested against what similar projects actually cost to build.",
        ],
      },
    ],
    projects: [
      { slug: "amulsar", note: "Feasibility review, support for financing, ESIA review and value engineering before construction." },
      { slug: "emigrant", note: "Feasibility support, management of engineering firms, constructability planning and feedback to designers to reduce construction costs." },
      { slug: "so2clean", note: "Feasibility data review and validation of budget and schedule, value engineering and constructability." },
      { slug: "conga", note: "Value engineering and constructability on a large earthworks program in the Peruvian Andes." },
    ],
    faqs: [
      {
        q: "When should a mining owner engage an owner's team?",
        a: "As early as possible, ideally at the feasibility stage. By the time a project reaches detailed engineering, most of its cost is committed. Early engagement also brings continuity: the people who set up the project controls framework during planning are the same people who hold contractors accountable during execution.",
      },
      {
        q: "What does an independent review of a feasibility study cover?",
        a: "The construction cost estimate, the contracting strategy and the project execution plan. Praetorian tests the estimate's assumptions against its own delivered project actuals and challenges assumptions about constructability, schedule and contractor capability for the location where the project will be built.",
      },
      {
        q: "Can Praetorian support NI 43-101 studies and project financing?",
        a: "Yes. Praetorian supports 43-101 compliant study development and FEED processes, aligns deliverables to stage gate requirements at PEA, PFS and feasibility study level, and helps owners build the financial and planning basis that lenders and boards require.",
      },
      {
        q: "Does Praetorian prepare the engineering design?",
        a: "No. Praetorian operates at arm's length from the engineering work on its projects, which keeps its advice independent. Its role is design input with a construction focus: constructability reviews, value engineering and budget validation within the owner's execution team.",
      },
    ],
    articles: [ARTICLES.early, ARTICLES.overruns, ARTICLES.ownersTeam],
  },
  {
    slug: "project-services",
    columnKey: "col02",
    number: "02",
    navLabel: "Project Services",
    title: "Mining Project Controls and Owner's Team Support",
    metaDescription: "Owner-side project controls for mining construction: cost control and estimating, scheduling, procurement and contracts, and risk and change management.",
    serviceType: "Mining project controls and owner's team support",
    intro: [
      "On a large mining project, project controls are how the owner knows where the project really stands. Multiple contractors, long-lead procurement and remote logistics generate more information than any team can process through intuition alone.",
      "Praetorian provides the technical and commercial controls across the full project lifecycle, embedded in the owner's team from day one, so cost, schedule and contract performance are visible, forecast and acted on before problems reach a monthly report.",
    ],
    whenToEngage: {
      lead: "Owners usually bring Praetorian in:",
      points: [
        "Before sanction or execution, to put the controls framework, procurement strategy and change process in place so the first dollar of execution is spent against a plan that will hold.",
        "When the owner's team needs experienced project controls, procurement or contracts specialists to work alongside its own staff in an integrated team.",
        "When project control systems need to be selected, integrated or improved, whether that means a new system or getting more from one already in place.",
      ],
    },
    sections: [
      {
        heading: "How it works alongside the EPCM contractor",
        paragraphs: [
          "Under an EPCM model, the owner often sits at the top of a reporting chain, receiving monthly updates from the firm that is managing its own design through construction. An owner's team controls function works for the owner instead.",
          "Praetorian tracks commitments, accruals, trends and forecasts against the owner's budget, uses earned value analysis and regular site-level reviews to manage contractor performance, and makes sure every change is identified, evaluated and approved by the owner before work proceeds. The question is never simply what was spent last month. It is what the forecast at completion is, what changed it, and what decisions need to be made today to protect the budget.",
        ],
      },
      {
        heading: "Systems and Praetorian IQ",
        paragraphs: [
          "Praetorian implements and integrates controls technologies including Primavera, Contruent, Sequence, SAP, Microsoft Dynamics and NetSuite, with document control on SharePoint and Aconex, configured to the project from day one.",
          "Every engagement also includes Praetorian IQ, our cost intelligence platform. It benchmarks the project's cost position against comparable delivered projects and flags cost outliers and schedule drift before they appear in a monthly report.",
        ],
      },
    ],
    projects: [
      { slug: "so2clean", note: "Project controls (WBS, CBS, Primavera P6 scheduling, Prism G2 cost control), contractor prequalification, RFP development and contract administration." },
      { slug: "amulsar", note: "Procurement, contracts development and administration, cost control and scheduling." },
      { slug: "kiena", note: "Contract administration and daily coordination of HSE, project controls, engineering, procurement and construction deliverables." },
      { slug: "cote", note: "Commercial and contract management alongside planning and execution supervision." },
      { slug: "penasquito", note: "Cost control and scheduling as part of an integrated owner's team." },
    ],
    faqs: [
      {
        q: "What is the difference between project management and project controls?",
        a: "Project management is the human activity of directing and coordinating a project. Project controls is the structured system through which a project is measured, monitored and forecast: cost control, schedule control, earned value analysis and change management. On a large mining project, strong project management is not enough without it.",
      },
      {
        q: "What does an owner's team controls function do that the EPCM contractor's does not?",
        a: "It works for the owner. It checks contractor reporting independently, forecasts the final cost in the owner's interest, and makes sure every change is evaluated and approved by the owner before work proceeds.",
      },
      {
        q: "Which project controls systems does Praetorian work with?",
        a: "Praetorian has hands-on experience with Primavera, Contruent, Sequence, SAP, Microsoft Dynamics and NetSuite, and with SharePoint and Aconex for document control. We help owners implement a new system or get more from the one they already have.",
      },
      {
        q: "How does Praetorian handle change on a mining project?",
        a: "Through a formal change management process set up from day one. Every potential change is identified, evaluated for scope, cost and schedule impact, and approved by the owner before work proceeds, so the baseline stays clear and the owner is never surprised by the final account.",
      },
    ],
    articles: [ARTICLES.controls, ARTICLES.contracts, ARTICLES.iq],
  },
  {
    slug: "planning-and-execution",
    columnKey: "col03",
    number: "03",
    navLabel: "Planning and Execution",
    title: "Mining Construction Management and EPCM Oversight",
    metaDescription: "Owner's team construction management for mining projects: contractor management, EPCM oversight and HSSE leadership, from earthworks to process plant.",
    serviceType: "Mining construction management and EPCM oversight",
    intro: [
      "Praetorian provides on-the-ground construction management for mining projects across all disciplines, from civil works and earthworks through structural, mechanical, electrical and process plant construction.",
      "Our people work inside the owner's team, on site, so the owner keeps control of scope, cost and schedule while contractors build.",
    ],
    whenToEngage: {
      lead: "Owners usually bring Praetorian in:",
      points: [
        "To provide the full owner's team for execution, from project director and project manager to discipline superintendents, construction supervisors, QA/QC and HSE specialists, scaled to the project's stage and complexity.",
        "To strengthen an existing team with experienced construction specialists. On the Cote Gold Project, Praetorian construction experts were assigned directly to contractors to help plan and complete their work packages through supply chain disruption.",
        "For remote and international sites, where logistics, local labour and community expectations need active management throughout construction.",
      ],
    },
    sections: [
      {
        heading: "EPCM oversight: how it works alongside the EPCM contractor",
        paragraphs: [
          "An EPCM firm designs the project and then manages its own design through construction. An owner's team construction manager works for the owner instead: on site, accountable to the owner, and independent of the engineering.",
          "Praetorian reviews engineering deliverables critically, pushes back where scope is being added unnecessarily, tracks actual progress against plan and escalates schedule risk before it becomes a crisis. Many of our people come from direct-hire contractor backgrounds, so they understand how contractors price risk and manage their margins, and they use that understanding to keep contractor success and owner success aligned.",
        ],
      },
    ],
    projects: [
      { slug: "cote", note: "Project manager role for the process plant and facilities, construction specialists, field engineers and planning and execution supervision." },
      { slug: "kiena", note: "On-site construction management representing the owner through design, procurement and construction." },
      { slug: "penasquito", note: "Owner's team project and construction management of a tailings dam raise, including training owner staff for future raises." },
      { slug: "amulsar", note: "Overall project management and construction management of a greenfield heap leach gold mine." },
      { slug: "emigrant", note: "Owner's team project management, equipment installation sequencing and constructability planning." },
      { slug: "so2clean", note: "Overall project management and construction management, including local contractor engagement." },
    ],
    faqs: [
      {
        q: "What is EPCM oversight?",
        a: "Owner-side oversight of an EPCM (engineering, procurement and construction management) contractor. The owner's team checks progress, cost, quality and contract performance independently, reviews engineering and scope decisions, and represents the owner on site rather than relying only on the EPCM's own reporting.",
      },
      {
        q: "What is the difference between an owner's representative and a contractor's project manager?",
        a: "A contractor's project manager is accountable to an employer whose primary objective is to complete the scope within its own budget and margin. An owner's representative is accountable to the owner, whose objective is to deliver the project at the right cost, on the right schedule and with the right quality.",
      },
      {
        q: "Does an owner's team create an adversarial relationship with contractors?",
        a: "No. The goal is to set up the contract structure, reporting cadence, quality requirements and payment mechanisms so that contractor success and owner success are aligned. Praetorian's contractor experience makes its people more effective at managing contractor relationships, not less.",
      },
      {
        q: "Which construction disciplines does Praetorian manage?",
        a: "Civil works and earthworks, structural steel and concrete, mechanical and piping, electrical and instrumentation, process plant construction (including ADR facilities, heap leach pads, paste plants and concentrators) and underground construction, together with HSSE oversight and logistics.",
      },
    ],
    articles: [ARTICLES.ownersTeam, ARTICLES.contracts, ARTICLES.hsse, ARTICLES.remote],
  },
  {
    slug: "post-construction",
    columnKey: "col04",
    number: "04",
    navLabel: "Post-Construction",
    title: "Mine Commissioning, Turnover and Sustaining Capital",
    metaDescription: "Owner-side mine commissioning and turnover support: construction verification, pre-commissioning, commissioning, turnover packages and ramp-up.",
    serviceType: "Mine commissioning, turnover and sustaining capital support",
    intro: [
      "Commissioning is where mining projects most commonly lose time and money in the final phase. Turnover packages are incomplete, punch lists are poorly managed and the handover from construction to operations is poorly planned.",
      "Praetorian manages commissioning and turnover as an integrated phase of the project, not an afterthought, so the owner takes possession of a fully functional facility on the agreed date, ready for first production.",
    ],
    whenToEngage: {
      lead: "Owners usually bring Praetorian in:",
      points: [
        "At the start of execution, to set commissioning requirements and track turnover package completion throughout construction.",
        "As construction nears completion, to verify mechanical completion system by system and manage punch lists, pre-commissioning, commissioning and turnover.",
        "After first production, to support ramp-up to nameplate capacity and further improvement and capital projects on the operating site.",
      ],
    },
    sections: [
      {
        heading: "How it works alongside the construction and commissioning teams",
        paragraphs: [
          "Praetorian works system by system against approved completion databases, so no system is handed to commissioning until it meets the agreed mechanical completion criteria. We coordinate vendor representatives, manage cold and hot commissioning, and prepare turnover packages with as-built drawings, equipment manuals, inspection records and training materials.",
          "Independent construction verification, including inspection plan reviews, hold point witnessing and non-conformance management, gives the owner objective assurance that what was built matches the approved design.",
        ],
      },
      {
        heading: "Sustaining capital and improvement projects",
        paragraphs: [
          "Praetorian's support does not have to end at handover. At Wesdome's Kiena Mine, Praetorian continued after the paste plant was completed, supporting further improvements to the plant and additional capital projects on site. Owners can bring the same owner's team discipline in project controls, contracts and construction management to sustaining capital work on an operating mine.",
        ],
      },
    ],
    projects: [
      { slug: "cote", note: "Punch list and turnover supervision and commissioning support across the processing plant and facilities." },
      { slug: "kiena", note: "Commissioning deliverables, then continued support for paste plant improvements and additional capital projects on site." },
      { slug: "amulsar", note: "Pre-commissioning and operations preparation support." },
    ],
    faqs: [
      {
        q: "What is the difference between pre-commissioning and commissioning?",
        a: "Pre-commissioning confirms that each system is mechanically complete: punch lists closed, loops checked, instruments calibrated and equipment aligned. Commissioning then introduces process fluids, energizes electrical systems and runs process circuits under controlled conditions, through cold and hot commissioning and performance testing.",
      },
      {
        q: "What should a turnover package include?",
        a: "As-built drawings, equipment manuals, inspection records, training materials and confirmation that all spares are procured, for each system and for the complete facility.",
      },
      {
        q: "When should commissioning planning start?",
        a: "At the start of execution. Praetorian sets commissioning requirements early and tracks turnover package completion throughout construction, rather than leaving it to the final weeks.",
      },
      {
        q: "Does Praetorian support sustaining capital projects on operating mines?",
        a: "Yes. At the Kiena Mine, for example, Praetorian continued after project completion, supporting further improvements to the paste plant and additional capital projects on site.",
      },
    ],
    articles: [ARTICLES.early, ARTICLES.ownersTeam],
  },
];

export function getServicePage(slug: string): ServicePageContent | undefined {
  return SERVICE_PAGES.find((s) => s.slug === slug);
}

export function servicePath(slug: ServiceSlug): string {
  return `/services/${slug}`;
}
