import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/lib/sanity";

export const revalidate = 60;

type ProjectData = {
  title: string;
  slug: string;
  client: string;
  location: string;
  year?: string;
  photoUrl: string;
  excerpt?: string;
  overviewParagraphs: string[];
  secondaryListLabel?: string;
  secondaryListItems?: string[];
  scope?: string;
  costOfServices?: string;
  totalCapitalCost?: string;
};

// Matches what's live today for each of the six existing projects -- shown
// whenever a matching "Project" document hasn't been created/published in
// Sanity Studio yet, so the site never regresses.
const DEFAULT_PROJECTS: Record<string, ProjectData> = {
  amulsar: {
    title: "Lydian International – Amulsar Gold Project",
    slug: "amulsar",
    client: "Lydian International",
    location: "Vayots Dzor, Armenia",
    year: "2015 – 2018",
    photoUrl: "https://www.praetoriancm.com/wp-content/uploads/2018/08/Amulsar.jpg",
    excerpt: "Amulsar Gold Project is a greenfield 225,000 gold ounces per annum mine in the Republic of Armenia. Praetorian provided supports ranging from feasibility review, assistance in preparation for financing, environmental and social impact assessment review, project management, construction management and precommissioning.",
    overviewParagraphs: [
      "Amulsar Gold Project is a greenfield 225,000 gold ounces per annum mine in the Republic of Armenia. Praetorian provided supports ranging from feasibility review, assistance in preparation for financing, environmental and social impact assessment review, project management, construction management and precommissioning.",
      "Praetorian's unique skillsets were critical to the success of this project, including remote region construction expertise, experience with constructability reviews to capture cost savings, engineering interface for seamless integration with construction, construction driven-approach, early identification of contractor strengths and ability to breach gaps identified to ensure project success, staffing with Praetorian personnel with multidiscipline skillsets.",
    ],
    secondaryListLabel: "Facilities",
    secondaryListItems: [
      "Crusher Facility and Adsorption, Desorption and Recovery (ADR) Facility",
      "Heap Leach Facility (Ponds, Dams, Channels)",
      "Screening Facility, Water Channels, Ponds and Dams",
      "Explosive Storage and Accommodation Camps",
      "Conveyor Systems and Barren Rock Storage Facility",
      "Mine Shop and Related Facilities",
      "Site Services and Utilities (Water, Gas, Power) and Haul Roads",
    ],
    scope: "Feasibility Review and Input for Project Development, Support for Financing, Support for ESIA, Development, Value Engineering, Procurement, Contracts Development and Administration, Cost Control, Scheduling, Constructability, Survey Data Management, Survey, Overall Project Management, Construction Management, Pre-commissioning and Operations Preparations Support.",
  },
  conga: {
    title: "Newmont Mining Corp – Conga Mine",
    slug: "conga",
    client: "Newmont (Yanacocha – MYSRL)",
    location: "Cajamarca, Peru",
    year: "2010 – 2014",
    photoUrl: "https://www.praetoriancm.com/wp-content/uploads/2018/08/BannerConga.jpg",
    excerpt: "The Conga project is an open pit copper/gold mine covering approx. 6,000 ha in a remote area of the Peruvian Andes. The project involves a substantial amount of earthworks infrastructure with significant water management requirements.",
    overviewParagraphs: [
      "The Conga project is an open pit copper/gold mine. The project covers a vast area of approx. 6,000 ha and involves a substantial amount of earthworks infrastructure in a remote area of the Peruvian Andes. The average elevation is approximately 3,800 m and there is significant water management required during the wet season where annual rainfalls can exceed 1.2m.",
      "Praetorian provided survey data and Cadd Modelling management, collating data from multiple survey groups, overall site map information management, as-builts, quantity and quality control for contractor payment, and aggregate quantity management.",
    ],
    secondaryListLabel: "Key Quantities",
    secondaryListItems: [
      "20 water storage dams, tailings dams, and sediment ponds",
      "25 km of water diversion channels",
      "70 km of permanent and temporary roads",
      "25M m3 of contractor excavated earthworks",
      "10M m3 of Mine Operations supplied rock fill for earthworks structures",
    ],
    scope: "Earthworks Project and Construction Management, Value Engineering and Constructability, Survey Data Control and Cadd Modeling Management.",
  },
  penasquito: {
    title: "Goldcorp Inc. – Peñasquito Mine CLR Project",
    slug: "penasquito",
    client: "Goldcorp Inc.",
    location: "Zacatecas, Mexico",
    year: "2016 – 2019",
    photoUrl: "https://www.praetoriancm.com/wp-content/uploads/2018/09/Penasquito.jpg",
    excerpt: "Goldcorp’s Peñasquito Mine CLR (Centerline Raise) project is a brownfield expansion of the tailings facility and tailings systems involving the construction of lined tailings dams, reclaim ponds, access roads and tailings pumping systems.",
    overviewParagraphs: [
      "Goldcorp's Peñasquito Mine CLR (Centerline Raise) project is a brownfield expansion of the tailings facility and tailings systems. The project involves the construction of lined tailings dams, reclaim ponds, access roads, tailings pumping systems, tailings discharge and water reclaim systems for the purpose of increasing the overall capacity of the tailings storage facility.",
      "Praetorian provided Project Management services by integrating with the Goldcorp personnel as part of the owners' team, including training of Goldcorp staff for future tailings facility raises and heavy equipment operator training of local residents.",
    ],
    secondaryListLabel: "Key Quantities",
    secondaryListItems: [
      "20M m3 Bulk Excavation",
      "13M m3 Bulk Mine Waste Rock Fill",
      "790,000 m2 of geomembrane liner",
      "15 km of LB Pipe",
      "8.3 km of cable and 28 large diameter pumps",
      "220 person camp expansion",
    ],
    scope: "Project Management, Construction Management, Cost Control, Scheduling, Constructability, and CM Team Training.",
  },
  emigrant: {
    title: "Newmont Mining Corp – Emigrant Mine",
    slug: "emigrant",
    client: "Newmont Mining Corp",
    location: "Carlin, Nevada, USA",
    year: "2011 – 2012",
    photoUrl: "https://www.praetoriancm.com/wp-content/uploads/2018/08/Emigrant-Aerial.jpg",
    excerpt: "Newmont’s Emigrant Mine is a greenfield mine development near Carlin, Nevada. The project involves the construction of access roads, a leach pad, water management facilities, a carbon in column processing plant, and related infrastructure.",
    overviewParagraphs: [
      "Newmont's Emigrant Mine is a greenfield mine development near Carlin, Nevada. The project involves the construction of access roads, a leach pad, water management facilities, a carbon in column processing plant, and related infrastructure.",
      "Praetorian provided overall Project Management services by integrating with Newmont personnel as part of the owners' team. Responsibilities included feasibility support, management of engineering firms, constructability planning, equipment installation sequencing and feedback to designers to reduce construction costs.",
    ],
    secondaryListLabel: "Key Quantities",
    secondaryListItems: [
      "80 acre leach pad",
      "500,000 m2 of geomembrane liner",
      "53 km of HDPE and carbon steel pipelines",
      "3,000,000 m3 of material placed for roads, dams and leach pads",
      "New CIC process plant, fuel island, lube storage building, wash bay and truck shop expansion",
    ],
    scope: "Project Management, Construction Management, Cost Control, Scheduling, Constructability.",
  },
  diavik: {
    title: "Diavik Diamond Mines Inc. – Diavik Underground Project",
    slug: "diavik",
    client: "Diavik Diamond Mines Ltd.",
    location: "Lac De Gras, NWT, Canada",
    year: "2006 – 2013",
    photoUrl: "https://www.praetoriancm.com/wp-content/uploads/2018/08/Diavik.jpg",
    excerpt: "Diavik’s Underground Project covers work associated with the transition from an open pit to underground operation. Praetorian’s cold weather (arctic) construction expertise and detailed logistics support were critical to the success of this project.",
    overviewParagraphs: [
      "Diavik's Underground Project is the overall project title for work associated with the transition from an open pit to underground operation. There are numerous sub-projects within this major expansion. Several of Praetorian's key differentiators were critical to the success of this project, including cold weather (arctic) construction expertise and detailed materials and construction equipment logistic support due to ice road constraints.",
      "Praetorian provided Survey Data Control, Cadd Modeling and Site Mapping including earthwork layout and planning for contractor and client forces, survey data and Cadd Modelling management, collating data from multiple survey groups, overall site map information management, as-builts, quantity and quality control for contractor payment, and aggregate quantity management.",
    ],
    secondaryListLabel: "Sub-Projects",
    secondaryListItems: [
      "PKC (tailings) dam raises (4 ea @ 5m per)",
      "Power generation expansion (additional 25 MW)",
      "Water treatment expansion (45,000 m3/day)",
      "Aggregate production facility (600 T/hr)",
      "Cemented backfill facility including 5m ball mill and thickener",
      "Additional 54M litres of diesel storage",
      "240 room accommodation expansion and 700 room renovation",
      "Underground dewatering stations and maintenance shop",
      "Management of over 12M m3 of earthworks movement",
    ],
    scope: "Project Management, Construction Management, Cost Control, Scheduling, Constructability, Survey Data Management, Survey.",
  },
  so2clean: {
    title: "Calabrian Corporation – SO2Clean Production Facility",
    slug: "so2clean",
    client: "Calabrian Corporation",
    location: "Porcupine, Ontario, Canada",
    year: "2015 – 2017",
    photoUrl: "https://www.praetoriancm.com/wp-content/uploads/2018/08/Calabrian-Plant-1.jpg",
    excerpt: "Calabrian’s SO2Clean Production Facility is a 100 TPD Liquid Sulphur Dioxide Production Plant in Northern Ontario, Canada. Praetorian was responsible for overall Project Management and Construction Management.",
    overviewParagraphs: [
      "Calabrian's SO2Clean Production Facility Project is a 100 TPD Liquid Sulphur Dioxide Production Plant in Northern Ontario, Canada. Praetorian was responsible for overall Project Management and Construction Management. Praetorian's overall project management expertise including experience in remote locations construction and engineering/procurement/construction interface management was critical to the success of this project.",
      "Praetorian met with various local contractors to identify local skillset, made recommendations to client on community engagement, and proactively managed local community's expectations throughout the project lifecycle.",
    ],
    secondaryListLabel: "Services Delivered",
    secondaryListItems: [
      "Feasibility data review and validation (budget and schedule)",
      "Value engineering and constructability",
      "Civil, earthworks and full multi-discipline construction management",
      "Project controls (WBS, CBS, Primavera P6 scheduling, Prism G2 cost control)",
      "Contractor prequalification, RFP development and contract administration",
      "Community relations and local contractor engagement",
    ],
    scope: "Project Management, Construction Management, Cost Control, Scheduling, Constructability.",
  },
  cote: {
    title: "IAMGOLD/WOOD – Cote Gold Project",
    slug: "cote",
    client: "IAMGOLD",
    location: "Sudbury District, Ontario, Canada",
    year: "2021 – 2024",
    photoUrl: "/images/photos/pcml-project-cote.jpg",
    excerpt: "Cote Gold Project is a greenfield 495,000 gold ounces per annum mine located in Chester and Yeo Townships, Sudbury District, Ontario. Praetorian provided Project Management Support, Construction Advisory, Turnover and Commissioning Support across the full processing plant and facilities.",
    overviewParagraphs: [
      "Cote Gold Project is a greenfield 495,000 gold ounces per annum mine located in Chester and Yeo Townships, Sudbury District, Ontario. Praetorian provided Project Management Support, Construction Advisory, Turnover and Commissioning Support across the full processing plant and facilities.",
      "Praetorian's involvement was essential in managing supply, design and execution challenges during and after the Covid pandemic. Construction experts from Praetorian were assigned directly to contractors to augment planning and completion of contractor work packages, utilising multidiscipline skillsets to overcome worldwide supply chain issues and vendor delays.",
    ],
    secondaryListLabel: "Facilities",
    secondaryListItems: [
      "Primary and Secondary Crusher and HPGR",
      "Screening, Coarse and Fine Ore Storage",
      "Ball Mill and Pre-Leach Thickener",
      "Leach Tank Farm and Tailings Thickener",
      "Conveyor Systems and CIP Tanks",
      "Site Wide Power Distribution and Main Line 115 kV",
      "Substation",
    ],
    scope: "Project Manager Role (Process Plant and Facilities), Construction Specialists and Advisors, Field Engineers, Planning and Execution Supervision, Commercial and Contract Management, Punch List and Turnover Supervision, Commissioning Support.",
    costOfServices: ">US$8M",
    totalCapitalCost: ">US$1.9B",
  },
  kiena: {
    title: "Wesdome Gold Mines – Kiena Paste Plant Project",
    slug: "kiena",
    client: "Wesdome Gold Mines",
    location: "Val d'Or, Quebec, Canada",
    year: "2021 – 2022",
    photoUrl: "/images/photos/pcml-project-kiena.jpg",
    excerpt: "Praetorian provided on-site Construction Management and Contract Administration for the design, procurement and construction of a Tailings and Backfill System for the Kiena Mine in Val d'Or, Quebec.",
    overviewParagraphs: [
      "Praetorian was contracted by Wesdome Kiena Mine management to fully represent Wesdome's interests in the design, procurement and construction of a Tailings and Backfill System for the Kiena Mine, located in Val d'Or, Quebec.",
      "Responsibilities included on-site construction management and contract administration across all HSE, project controls, engineering, procurement, construction and commissioning deliverables. Following project completion, Praetorian continued to provide support for further improvements to the Paste Plant and additional capital projects on site.",
    ],
    secondaryListLabel: "Facilities",
    secondaryListItems: [
      "Thickener Building: Tailings Thickener, Rake Drive and Pumping Systems",
      "Paste Plant Building: 800m³ Tailings Buffer Tank, Vacuum Disc Filter, Cement Silo, Paste Mixer and Overhead Crane",
      "E-House: 1MVA Transformer, 1000kW Generator, 600V MCC and PLC",
      "Transfer Pipelines connecting all plant facilities and Tailings Storage",
    ],
    scope: "On-site Construction Management and Contract Administration, daily coordination of HSE, project controls, engineering, procurement, construction and commissioning deliverables.",
    costOfServices: "~CAD$2M",
    totalCapitalCost: "CAD$60M",
  },
};

async function getProject(slug: string): Promise<ProjectData | null> {
  try {
    const fetched = await client.fetch(
      `*[_type == "project" && slug.current == $slug][0]{
        title,
        "slug": slug.current,
        client,
        location,
        year,
        photoUrl,
        excerpt,
        overviewParagraphs,
        secondaryListLabel,
        secondaryListItems,
        scope,
        costOfServices,
        totalCapitalCost
      }`,
      { slug }
    );
    return fetched ?? null;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = (await getProject(slug)) ?? DEFAULT_PROJECTS[slug];
  if (!data) {
    return { title: "Project | Praetorian Construction Management" };
  }
  return {
    title: `${data.title} | Praetorian Construction Management`,
    description: data.excerpt?.slice(0, 155),
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const fetched = await getProject(slug);
  const data = fetched ?? DEFAULT_PROJECTS[slug];

  if (!data) {
    notFound();
  }

  return (
    <main>
      <div>
        <section style={{ position: "relative", overflow: "hidden", minHeight: "420px" }}>
          <div style={{ position: "absolute", inset: "0", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundImage: `url(${data.photoUrl})` }}></div>
          <div style={{ position: "absolute", inset: "0", background: "linear-gradient(100deg,rgba(0,15,22,.9) 0%,rgba(0,25,36,.72) 48%,rgba(0,15,22,.4) 100%)" }}></div>
          <div style={{ position: "relative", maxWidth: "1400px", margin: "0 auto", padding: "clamp(40px,5vw,72px) clamp(16px,4vw,44px)" }}>
            <Link href="/projects" style={{ background: "none", border: "0", padding: "0", color: "#e3ab7c", fontSize: "13px", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px", fontFamily: "var(--font-sora), sans-serif", fontWeight: "600" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
              All Projects
            </Link>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "22px", flexWrap: "wrap" }}>
              <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#e3ab7c" }}>Projects</div>
            </div>
            <h1 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "800", fontSize: "clamp(28px,3.6vw,48px)", margin: "14px 0 0", color: "#fff", lineHeight: "1.1" }}>{data.title}</h1>
            <div style={{ display: "flex", gap: "28px", flexWrap: "wrap", marginTop: "18px", fontSize: "14px", color: "#c3d0d4" }}>
              <span>{data.client}</span><span>{data.location}</span>{data.year ? <span>{data.year}</span> : null}
            </div>
          </div>
        </section>
        <section style={{ maxWidth: "1400px", margin: "0 auto", padding: "clamp(44px,6vw,72px) clamp(16px,4vw,44px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "clamp(28px,4vw,56px)" }}>
            <div>
              <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "18px", letterSpacing: ".12em", textTransform: "uppercase", color: "#B06533", marginBottom: "14px" }}>Overview</div>
              {data.overviewParagraphs.map((paragraph, i) => (
                <p key={i} style={{ fontSize: i === 0 ? "15.5px" : "14.5px", lineHeight: "1.8", color: i === 0 ? "#3a3f42" : "#555c60", margin: i === data.overviewParagraphs.length - 1 ? "0" : "0 0 22px" }}>{paragraph}</p>
              ))}
            </div>
            <div>
              {data.secondaryListItems && data.secondaryListItems.length > 0 ? (
                <>
                  <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "18px", letterSpacing: ".12em", textTransform: "uppercase", color: "#B06533", marginBottom: "14px" }}>{data.secondaryListLabel}</div>
                  <ul style={{ fontSize: "14.5px", lineHeight: "1.9", color: "#555c60", margin: "0 0 28px", paddingLeft: "18px" }}>
                    {data.secondaryListItems.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              ) : null}
              {data.scope ? (
                <>
                  <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "18px", letterSpacing: ".12em", textTransform: "uppercase", color: "#B06533", marginBottom: "14px" }}>Praetorian&rsquo;s Scope</div>
                  <p style={{ fontSize: "14.5px", lineHeight: "1.8", color: "#555c60", margin: data.costOfServices || data.totalCapitalCost ? "0 0 16px" : "0" }}>{data.scope}</p>
                </>
              ) : null}
              {data.costOfServices || data.totalCapitalCost ? (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "8px" }}>
                  {data.costOfServices ? (
                    <div style={{ borderLeft: "3px solid #B06533", paddingLeft: "12px" }}>
                      <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: ".1em", color: "#9aa9ae", marginBottom: "4px" }}>Cost of Services</div>
                      <div style={{ fontSize: "15px", fontWeight: "700", color: "#003E52" }}>{data.costOfServices}</div>
                    </div>
                  ) : null}
                  {data.totalCapitalCost ? (
                    <div style={{ borderLeft: "3px solid #B06533", paddingLeft: "12px" }}>
                      <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: ".1em", color: "#9aa9ae", marginBottom: "4px" }}>Total Capital Cost</div>
                      <div style={{ fontSize: "15px", fontWeight: "700", color: "#003E52" }}>{data.totalCapitalCost}</div>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
        </section>
        <section style={{ background: "#003E52", padding: "clamp(36px,4vw,52px) 0" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 clamp(16px,4vw,44px)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
            <div>
              <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "14px", color: "#fff" }}>Ready to discuss your project?</div>
              <div style={{ fontSize: "13.5px", color: "#9aa9ae", marginTop: "4px" }}>Contact our Business Development team to learn more about how Praetorian can support your next project.</div>
            </div>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#B06533", color: "#fff", textDecoration: "none", minHeight: "44px", padding: "0 22px", fontFamily: "var(--font-sora), sans-serif", fontWeight: "600", fontSize: "14px", flexShrink: 0 }}>
              Speak with Our Team
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
          </div>
        </section>
        <section style={{ maxWidth: "1400px", margin: "0 auto", padding: "clamp(36px,4vw,52px) clamp(16px,4vw,44px)" }}>
          <Link href="/projects" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#003E52", fontFamily: "var(--font-sora), sans-serif", fontWeight: "600", fontSize: "14px", textDecoration: "none" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
            Back to All Projects
          </Link>
        </section>
      </div>
    </main>
  );
}
