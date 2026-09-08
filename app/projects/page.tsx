import type { Metadata } from "next";
import Link from "next/link";
import MapSection from "@/app/components/MapSection";
import { type Pin } from "@/app/components/WorldMap";
import projectPins from "@/data/project-pins.json";

export const metadata: Metadata = {
  title: "Projects | Praetorian Construction Management",
  description: "A working selection of projects delivered across Canada, the USA, Mexico, Peru, Guatemala and Armenia.",
};

const PROJECTS = [
  { slug: "amulsar", title: "Lydian International – Amulsar Gold Project", location: "Vayots Dzor, Armenia", client: "Lydian International", year: "2015 – 2018", phase: "Flagship", phaseColor: "#fbe9db", phaseText: "#8f4f27", photo: "https://www.praetoriancm.com/wp-content/uploads/2018/08/Amulsar.jpg", excerpt: "Amulsar Gold Project is a greenfield 225,000 gold ounces per annum mine in the Republic of Armenia. Praetorian provided supports ranging from feasibility review, assistance in preparation for financing, environmental and social impact assessment review, project management, construction management and precommissioning." },
  { slug: "conga", title: "Newmont Mining Corp – Conga Mine", location: "Cajamarca, Peru", client: "Newmont (Yanacocha)", year: "2010 – 2014", phase: "Execution", phaseColor: "#eceeee", phaseText: "#4a4e50", photo: "https://www.praetoriancm.com/wp-content/uploads/2018/08/BannerConga.jpg", excerpt: "The Conga project is an open pit copper/gold mine covering approx. 6,000 ha in a remote area of the Peruvian Andes. The project involves a substantial amount of earthworks infrastructure with significant water management requirements." },
  { slug: "penasquito", title: "Goldcorp Inc. – Peñasquito Mine CLR Project", location: "Zacatecas, Mexico", client: "Goldcorp Inc.", year: "2016 – 2019", phase: "Execution", phaseColor: "#eceeee", phaseText: "#4a4e50", photo: "https://www.praetoriancm.com/wp-content/uploads/2018/09/Penasquito.jpg", excerpt: "Goldcorp’s Peñasquito Mine CLR (Centerline Raise) project is a brownfield expansion of the tailings facility and tailings systems involving the construction of lined tailings dams, reclaim ponds, access roads and tailings pumping systems." },
  { slug: "emigrant", title: "Newmont Mining Corp – Emigrant Mine", location: "Carlin, Nevada, USA", client: "Newmont Mining Corp", year: "2011 – 2012", phase: "Commissioned", phaseColor: "#eceeee", phaseText: "#4a4e50", photo: "https://www.praetoriancm.com/wp-content/uploads/2018/08/Emigrant-Aerial.jpg", excerpt: "Newmont’s Emigrant Mine is a greenfield mine development near Carlin, Nevada. The project involves the construction of access roads, a leach pad, water management facilities, a carbon in column processing plant, and related infrastructure." },
  { slug: "diavik", title: "Diavik Diamond Mines Inc. – Diavik Underground Project", location: "Lac De Gras, NWT, Canada", client: "Diavik Diamond Mines Ltd.", year: "2006 – 2013", phase: "Operations", phaseColor: "#eceeee", phaseText: "#4a4e50", photo: "https://www.praetoriancm.com/wp-content/uploads/2018/08/Diavik.jpg", excerpt: "Diavik’s Underground Project covers work associated with the transition from an open pit to underground operation. Praetorian’s cold weather (arctic) construction expertise and detailed logistics support were critical to the success of this project." },
  { slug: "so2clean", title: "Calabrian Corporation – SO2Clean Production Facility", location: "Porcupine, Ontario, Canada", client: "Calabrian Corporation", year: "2015 – 2017", phase: "Commissioned", phaseColor: "#eceeee", phaseText: "#4a4e50", photo: "https://www.praetoriancm.com/wp-content/uploads/2018/08/Calabrian-Plant-1.jpg", excerpt: "Calabrian’s SO2Clean Production Facility is a 100 TPD Liquid Sulphur Dioxide Production Plant in Northern Ontario, Canada. Praetorian was responsible for overall Project Management and Construction Management." },
];

export default function ProjectsPage() {
  return (
    <main>
      <div>
        <section style={{ position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: "0", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundImage: "url(https://images.unsplash.com/photo-1523848309072-c199db53f137?w=1400&auto=format&fit=crop&q=80)" }}></div>
          <div style={{ position: "absolute", inset: "0", background: "linear-gradient(100deg,rgba(0,15,22,.9) 0%,rgba(0,25,36,.72) 48%,rgba(0,15,22,.4) 100%)" }}></div>
          <div style={{ position: "relative", maxWidth: "1400px", margin: "0 auto", padding: "clamp(40px,5vw,72px) clamp(16px,4vw,44px) clamp(16px,2vw,28px)" }}>
            <Link href="/" style={{ background: "none", border: "0", padding: "0", color: "#e3ab7c", fontSize: "13px", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px", fontFamily: "var(--font-sora), sans-serif", fontWeight: "600" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
              Home
            </Link>
            <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#e3ab7c", marginTop: "22px" }}>Projects</div>
            <h1 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "800", fontSize: "clamp(34px,4.6vw,58px)", margin: "14px 0 0", color: "#fff", lineHeight: "1.04", maxWidth: "24ch" }}>40+ projects across six countries, two decades of mining construction expertise</h1>
          </div>
        </section>
        <section style={{ maxWidth: "1400px", margin: "0 auto", padding: "clamp(40px,5vw,66px) clamp(16px,4vw,44px)" }}>
          <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#B06533", marginBottom: "12px" }}>Featured Projects</div>
          <h2 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "clamp(28px,3.2vw,40px)", margin: "0 0 38px", color: "#003E52" }}>Sample Past Projects</h2>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#555c60", margin: "0 0 38px", maxWidth: "72ch" }}>Praetorian's experience cuts across various industries, regions and project scopes. Below are some of our past projects. For a comprehensive past projects list, please contact our <Link href="/contact" style={{ color: "#B06533" }}>Business Development team</Link>.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "clamp(20px,2.6vw,28px)" }}>
            {PROJECTS.map(p => (
              <div key={p.slug} style={{ background: "#fff", boxShadow: "0 2px 14px rgba(0,20,30,.06)", overflow: "hidden" }}>
                <div style={{ position: "relative", height: "240px", overflow: "hidden" }}>
                  <div style={{ position: "absolute", inset: "0", backgroundSize: "cover", backgroundPosition: "center", backgroundImage: `url(${p.photo})` }}></div>

                </div>
                <div style={{ padding: "24px" }}>
                  <div style={{ fontSize: "12px", color: "#8b9095", marginBottom: "8px" }}>{p.location} &middot; {p.year}</div>
                  <h3 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "17px", color: "#003E52", margin: "0 0 12px", lineHeight: "1.3" }}>{p.title}</h3>
                  <p style={{ fontSize: "13.5px", lineHeight: "1.7", color: "#5b6266", margin: "0 0 18px" }}>{p.excerpt}</p>
                  <Link href={`/projects/${p.slug}`} style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#B06533", fontFamily: "var(--font-sora), sans-serif", fontWeight: "600", fontSize: "13.5px", textDecoration: "none" }}>
                    Read More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Global Footprint Map -- teal section */}
        <section style={{ background: '#003E52', padding: 'clamp(46px,6vw,84px) 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(16px,4vw,44px)' }}>
            <div data-reveal='' style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#e3ab7c', marginBottom: '12px' }}>Global Presence</div>
            <h2 data-reveal='' style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: 'clamp(28px,3.2vw,40px)', margin: '0 0 8px', color: '#fff' }}>Praetorian Footprint</h2>
            <p data-reveal='' style={{ fontSize: '15px', lineHeight: '1.7', color: '#c3d0d4', margin: '0 0 32px', maxWidth: '66ch' }}>Praetorian has delivered projects across Canada, the United States, South America, Central America and Eurasia. Hover a pin or select a country to explore our global deployment.</p>
          </div>
          <MapSection projects={projectPins as Pin[]} />
        </section>

        {/* Copper CTA strip */}
        <section style={{ background: '#B06533', color: '#fff' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: 'clamp(48px,6vw,88px) clamp(16px,4vw,44px)', textAlign: 'center' }}>
            <h2 data-reveal='' style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '800', fontSize: 'clamp(28px,3.4vw,42px)', margin: '0', color: '#fff' }}>Ready to discuss your project?</h2>
            <p data-reveal='' style={{ fontSize: '16px', lineHeight: '1.65', margin: '18px auto 30px', maxWidth: '58ch', color: 'rgba(255,255,255,.92)' }}>Praetorian embeds directly into your ownership team, from early feasibility through final commissioning. Let us talk about what that looks like for your project.</p>
            <a href='/contact' style={{ display: 'inline-flex', minHeight: '50px', padding: '0 26px', fontSize: '16px', background: '#003E52', color: '#fff', textDecoration: 'none', alignItems: 'center', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600' }}>Speak with Our Team</a>
          </div>
        </section>
      </div>
    </main>
  );
}