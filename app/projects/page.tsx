import Navbar from "../components/Navbar";
import Footer from "@/app/components/Footer";

export default function Projects() {
  const projects = [
    {
      name: "Lydian Amulsar Gold Mine",
      client: "Lydian International",
      location: "Armenia",
      sector: "Mining",
      value: "CA$3.4B",
      scope: "Owner's representative and project controls services across a large open-pit gold mine development in southern Armenia. Scope included cost management, schedule oversight, and contractor interface management.",
    },
    {
      name: "Alamos Island Gold Mine",
      client: "Alamos Gold",
      location: "Ontario, Canada",
      sector: "Mining",
      value: "CA$205M",
      scope: "Project controls and scheduling support for underground mine expansion. Delivered earned value reporting, schedule maintenance, and change management services throughout construction.",
    },
    {
      name: "Bestech Calabrian",
      client: "Bestech",
      location: "British Columbia, Canada",
      sector: "Industrial",
      value: "CA$35M",
      scope: "Construction management and project controls for an industrial facility project. Scope covered multi-discipline contractor coordination, progress monitoring, and cost reporting.",
    },
    {
      name: "Conuma Coal Operations",
      client: "Conuma Coal Resources",
      location: "British Columbia, Canada",
      sector: "Mining",
      value: "Confidential",
      scope: "Project management and scheduling services supporting coal mining operations and capital project delivery in northeast British Columbia.",
    },
  ];

  const sectors = ["All", "Mining", "Industrial", "Energy", "Infrastructure"];

  return (
    <main>
      <Navbar />

      {/* Page Hero */}
      <div style={{ backgroundColor: "#003E52", marginTop: "72px" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#B06533" }}>Our Work</div>
          <h1 className="text-5xl font-bold text-white mb-6">Projects</h1>
          <p className="text-xl max-w-3xl leading-relaxed" style={{ color: "#98999B" }}>
            A track record built across mining, energy, oil and gas, and heavy civil sectors in Canada and internationally. Praetorian has supported project owners and teams on programmes ranging from feasibility through to full capital delivery.
          </p>
        </div>
      </div>

      {/* Sector Filter */}
      <div className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-3 flex-wrap">
            {sectors.map((sector) => (
              <button
                key={sector}
                className="px-5 py-2 rounded text-sm font-medium border transition-colors"
                style={{
                  borderColor: sector === "All" ? "#003E52" : "#E5E7EB",
                  backgroundColor: sector === "All" ? "#003E52" : "white",
                  color: sector === "All" ? "white" : "#98999B",
                }}
              >
                {sector}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-16" style={{ backgroundColor: "#F7F7F7" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.name} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-40 flex items-end p-6" style={{ backgroundColor: "#003E52" }}>
                  <span
                    className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded"
                    style={{ backgroundColor: "#B06533", color: "white" }}
                  >
                    {project.sector}
                  </span>
                </div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1" style={{ color: "#003E52" }}>{project.name}</h3>
                      <p className="text-sm" style={{ color: "#98999B" }}>{project.location}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold" style={{ color: "#B06533" }}>{project.value}</div>
                      <div className="text-xs mt-1" style={{ color: "#98999B" }}>Project Value</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">{project.scope}</p>
                  <div className="flex items-center gap-2 text-xs" style={{ color: "#98999B" }}>
                    <span className="font-medium">Client:</span>
                    <span>{project.client}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sample data note */}
          <div className="mt-8 text-center text-sm" style={{ color: "#98999B" }}>
            Sample project data shown. Full project list to be confirmed by Praetorian Construction Management.
          </div>
        </div>
      </div>

      {/* CTA Band */}
      <div className="py-20" style={{ backgroundColor: "#003E52" }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Have a Project in Mind?</h2>
          <p className="text-lg mb-8" style={{ color: "#98999B" }}>
            Talk to our team about how Praetorian can support your next capital programme.
          </p>
          <a href="/contact" style={{ backgroundColor: "#B06533" }} className="inline-block px-10 py-4 text-white font-semibold rounded hover:opacity-90">
            Get in Touch
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
}