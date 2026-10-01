// Search-facing facts for each project page: a one-line summary in the words owners search
// with (commodity, project type, location, Praetorian's role), descriptive image alt text,
// and the service pages each project supports. Every fact is taken from the project's own
// page on this site; nothing here should state more than those pages do.

export type ServiceSlug = "pre-construction" | "project-services" | "planning-and-execution" | "post-construction";

export type ProjectFacts = {
  name: string;
  factLine: string[];
  image: string;
  imageAlt: string;
  services: ServiceSlug[];
};

export const PROJECT_FACTS: Record<string, ProjectFacts> = {
  cote: {
    name: "IAMGOLD Cote Gold Project",
    factLine: ["Gold", "Greenfield mine and processing plant", "Ontario, Canada", "Project management support, construction advisory, commissioning and turnover"],
    image: "/images/photos/pcml-project-cote.jpg",
    imageAlt: "Aerial winter view of the Cote Gold processing plant under construction in Ontario, with the mill building, leach tanks and a large thickener",
    services: ["planning-and-execution", "project-services", "post-construction"],
  },
  kiena: {
    name: "Wesdome Kiena Paste Plant",
    factLine: ["Gold", "Tailings thickener and paste backfill plant", "Quebec, Canada", "Owner's representative for construction management and contract administration"],
    image: "/images/photos/pcml-project-kiena.jpg",
    imageAlt: "Aerial view of the Kiena Mine site at Val d'Or, Quebec, surrounded by water, with the headframe, conveyors and plant buildings",
    services: ["planning-and-execution", "project-services", "post-construction"],
  },
  penasquito: {
    name: "Goldcorp Peñasquito CLR Project",
    factLine: ["Mine tailings", "Brownfield tailings storage facility expansion", "Zacatecas, Mexico", "Owner's team project management and construction management"],
    image: "/images/photos/pcml-project-penasquito.jpg",
    imageAlt: "Aerial view of the Peñasquito tailings storage facility in Zacatecas, Mexico, with a lined tailings dam raise under construction and the tailings pond beyond",
    services: ["planning-and-execution", "project-services"],
  },
  amulsar: {
    name: "Lydian Amulsar Gold Project",
    factLine: ["Gold", "Greenfield heap leach mine", "Armenia", "Feasibility review, project management, construction management and pre-commissioning"],
    image: "/images/photos/pcml-project-amulsar.jpg",
    imageAlt: "Aerial view of early construction at the Amulsar gold project in Armenia, showing the site camp, laydown yard, haul roads and earthworks on green hillsides",
    services: ["pre-construction", "project-services", "planning-and-execution", "post-construction"],
  },
  so2clean: {
    name: "Calabrian SO2Clean Production Facility",
    factLine: ["Liquid sulphur dioxide", "100 tonne per day production plant", "Northern Ontario, Canada", "Project management and construction management"],
    image: "/images/photos/pcml-project-so2clean.jpg",
    imageAlt: "The SO2Clean liquid sulphur dioxide production facility in Northern Ontario in winter, with the plant building, storage tanks and rail tank cars",
    services: ["pre-construction", "project-services", "planning-and-execution"],
  },
  conga: {
    name: "Newmont Conga Mine",
    factLine: ["Copper and gold", "Open pit mine earthworks", "Cajamarca, Peru", "Earthworks construction management, survey data and CADD modelling"],
    image: "/images/photos/pcml-project-conga.jpg",
    imageAlt: "Green valley in the Peruvian Andes at the Conga project area near Cajamarca, with access roads and scattered farm buildings",
    services: ["pre-construction", "planning-and-execution"],
  },
  diavik: {
    name: "Diavik Underground Project",
    factLine: ["Diamonds", "Open pit to underground transition", "Northwest Territories, Canada", "Project and construction management, survey data control and site mapping"],
    image: "/images/photos/pcml-project-diavik.jpg",
    imageAlt: "Aerial view of surface facilities under construction for the Diavik underground project, with large blue air ducts, equipment buildings and concrete foundations",
    services: ["project-services", "planning-and-execution"],
  },
  emigrant: {
    name: "Newmont Emigrant Mine",
    factLine: ["Gold", "Greenfield heap leach mine", "Nevada, USA", "Owner's team project management, feasibility support and constructability planning"],
    image: "/images/photos/pcml-project-emigrant.jpg",
    imageAlt: "Aerial view of the Emigrant Mine heap leach pad, lined process ponds and haul roads under construction in the Nevada high desert",
    services: ["pre-construction", "project-services", "planning-and-execution"],
  },
};
