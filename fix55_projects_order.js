const fs = require('fs');
let content = fs.readFileSync('app/projects/page.tsx', 'utf8').split('\r\n').join('\n');

// Find and replace the DEFAULT_PROJECTS array entirely
const arrayStart = content.indexOf('const DEFAULT_PROJECTS: ProjectCard[] = [');
const arrayEnd = content.indexOf('];', arrayStart) + 2;

const newArray = `const DEFAULT_PROJECTS: ProjectCard[] = [
  { slug: "cote", title: "IAMGOLD/WOOD \\u2013 Cote Gold Project", location: "Sudbury District, Ontario, Canada", client: "IAMGOLD", year: "2021 \\u2013 2026", photoUrl: "/images/photos/pcml-project-cote.jpg", excerpt: "Cote Gold Project is a greenfield 495,000 gold ounces per annum mine in Ontario. Praetorian provided Project Management Support, Construction Advisory, Turnover and Commissioning Support across the full processing plant and facilities." },
  { slug: "kiena", title: "Wesdome Gold Mines \\u2013 Kiena Paste Plant Project", location: "Val d'Or, Quebec, Canada", client: "Wesdome Gold Mines", year: "2021 \\u2013 2022", photoUrl: "/images/photos/pcml-project-kiena.jpg", excerpt: "Praetorian provided on-site Construction Management and Contract Administration for the design, procurement and construction of a Tailings and Backfill System for the Kiena Mine in Val d'Or, Quebec." },
  { slug: "penasquito", title: "Goldcorp Inc. \\u2013 Pe\\u00f1asquito Mine CLR Project", location: "Zacatecas, Mexico", client: "Goldcorp Inc.", year: "2016 \\u2013 2019", photoUrl: "https://www.praetoriancm.com/wp-content/uploads/2018/09/Penasquito.jpg", excerpt: "Goldcorp's Pe\\u00f1asquito Mine CLR (Centerline Raise) project is a brownfield expansion of the tailings facility and tailings systems involving the construction of lined tailings dams, reclaim ponds, access roads and tailings pumping systems." },
  { slug: "amulsar", title: "Lydian International \\u2013 Amulsar Gold Project", location: "Vayots Dzor, Armenia", client: "Lydian International", year: "2015 \\u2013 2018", photoUrl: "https://www.praetoriancm.com/wp-content/uploads/2018/08/Amulsar.jpg", excerpt: "Amulsar Gold Project is a greenfield 225,000 gold ounces per annum mine in the Republic of Armenia. Praetorian provided supports ranging from feasibility review, assistance in preparation for financing, environmental and social impact assessment review, project management, construction management and precommissioning." },
  { slug: "so2clean", title: "Calabrian Corporation \\u2013 SO2Clean Production Facility", location: "Porcupine, Ontario, Canada", client: "Calabrian Corporation", year: "2015 \\u2013 2017", photoUrl: "https://www.praetoriancm.com/wp-content/uploads/2018/08/Calabrian-Plant-1.jpg", excerpt: "Calabrian's SO2Clean Production Facility is a 100 TPD Liquid Sulphur Dioxide Production Plant in Northern Ontario, Canada. Praetorian was responsible for overall Project Management and Construction Management." },
  { slug: "conga", title: "Newmont Mining Corp \\u2013 Conga Mine", location: "Cajamarca, Peru", client: "Newmont (Yanacocha)", year: "2010 \\u2013 2014", photoUrl: "https://www.praetoriancm.com/wp-content/uploads/2018/08/BannerConga.jpg", excerpt: "The Conga project is an open pit copper/gold mine covering approx. 6,000 ha in a remote area of the Peruvian Andes. The project involves a substantial amount of earthworks infrastructure with significant water management requirements." },
  { slug: "diavik", title: "Diavik Diamond Mines Inc. \\u2013 Diavik Underground Project", location: "Lac De Gras, NWT, Canada", client: "Diavik Diamond Mines Ltd.", year: "2006 \\u2013 2013", photoUrl: "https://www.praetoriancm.com/wp-content/uploads/2018/08/Diavik.jpg", excerpt: "Diavik's Underground Project covers work associated with the transition from an open pit to underground operation. Praetorian's cold weather (arctic) construction expertise and detailed logistics support were critical to the success of this project." },
  { slug: "emigrant", title: "Newmont Mining Corp \\u2013 Emigrant Mine", location: "Carlin, Nevada, USA", client: "Newmont Mining Corp", year: "2011 \\u2013 2012", photoUrl: "https://www.praetoriancm.com/wp-content/uploads/2018/08/Emigrant-Aerial.jpg", excerpt: "Newmont's Emigrant Mine is a greenfield mine development near Carlin, Nevada. The project involves the construction of access roads, a leach pad, water management facilities, a carbon in column processing plant, and related infrastructure." },
];`;

content = content.slice(0, arrayStart) + newArray + content.slice(arrayEnd);
fs.writeFileSync('app/projects/page.tsx', content, 'utf8');
console.log('DEFAULT_PROJECTS reordered.');

// Also update Cote detail page year
let cote = fs.readFileSync('app/projects/cote/page.tsx', 'utf8');
cote = cote.replace('2021 – 2024', '2021 – 2026');
fs.writeFileSync('app/projects/cote/page.tsx', cote, 'utf8');
console.log('Cote page year updated to 2021 – 2026.');
