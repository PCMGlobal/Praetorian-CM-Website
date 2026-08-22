import Navbar from "../components/Navbar";

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

      {/* Footer */}
      <footer style={{ backgroundColor: "#002C3A" }} className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-4 gap-12 mb-12">
            <div className="col-span-1">
              <div className="text-white font-bold text-lg mb-4">Praetorian Construction Management</div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#98999B" }}>
                World-class project management across mining, energy, and infrastructure sectors.
              </p>
              <div className="flex gap-3">
                {["in", "X", "yt", "ig"].map((s) => (
                  <a key={s} href="#" className="w-8 h-8 rounded flex items-center justify-center text-xs font-bold" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#98999B" }}>{s}</a>
                ))}
              </div>
            </div>
            <div>
              <div className="text-white font-semibold mb-4">Services</div>
              <ul className="space-y-2 text-sm" style={{ color: "#98999B" }}>
                {["Project Controls", "Owner's Representative", "Construction Management", "HSSE", "Scheduling & Planning", "Document Control"].map((s) => (
                  <li key={s}><a href="/services" className="hover:text-white transition-colors">{s}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-white font-semibold mb-4">Company</div>
              <ul className="space-y-2 text-sm" style={{ color: "#98999B" }}>
                {["About Us", "Projects", "Careers", "News & Events", "HSSE", "Contact"].map((s) => (
                  <li key={s}><a href="#" className="hover:text-white transition-colors">{s}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-white font-semibold mb-4">Contact</div>
              <ul className="space-y-3 text-sm" style={{ color: "#98999B" }}>
                <li>201 - 10441 178 Street<br />Edmonton, Alberta T5S 1R5</li>
                <li>780.989.0289</li>
                <li>info@praetoriancm.com</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 flex items-center justify-between text-xs" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", color: "#98999B" }}>
            <span>2026 Praetorian Construction Management Ltd. All rights reserved.</span>
            <span>Edmonton, Alberta, Canada</span>
          </div>
        </div>
      </footer>
    </main>
  );
}