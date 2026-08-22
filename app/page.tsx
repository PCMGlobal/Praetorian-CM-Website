import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <div style={{ backgroundColor: "#003E52", marginTop: "72px" }} className="min-h-screen flex items-center justify-center">
        <div className="text-center text-white px-6">
          <h1 className="text-5xl font-bold mb-6">Building What Matters</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: "#98999B" }}>
            Praetorian Construction Management delivers world-class project management across mining, energy, and infrastructure sectors.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/projects" style={{ backgroundColor: "#B06533" }} className="px-8 py-3 text-white font-semibold rounded hover:opacity-90">Our Projects</a>
            <a href="/contact" className="px-8 py-3 border border-white text-white font-semibold rounded hover:bg-white hover:text-teal-900">Contact Us</a>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div style={{ backgroundColor: "#003E52" }} className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 gap-8 text-center text-white">
          <div>
            <div style={{ color: "#B06533" }} className="text-5xl font-bold">20+</div>
            <div className="mt-2 text-lg">Years of Experience</div>
          </div>
          <div>
            <div style={{ color: "#B06533" }} className="text-5xl font-bold">60+</div>
            <div className="mt-2 text-lg">Projects Delivered</div>
          </div>
          <div>
            <div style={{ color: "#B06533" }} className="text-5xl font-bold">6</div>
            <div className="mt-2 text-lg">Countries</div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: "#003E52" }}>End-to-End Project Management Services</h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "#98999B" }}>
              From project controls and scheduling to HSSE and owner representation, we provide integrated expertise across the full project lifecycle.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {[
              { title: "Project Controls", desc: "Cost management, schedule development, and earned value analysis across complex capital programmes." },
              { title: "Owner's Representative", desc: "Independent oversight and advocacy for project owners from feasibility through commissioning." },
              { title: "Construction Management", desc: "On-site leadership and coordination across civil, structural, mechanical, and electrical scopes." },
              { title: "Scheduling & Planning", desc: "Primavera P6 and MS Project scheduling, baseline development, and recovery planning." },
              { title: "HSSE Management", desc: "Health, safety, security, and environmental programme development and field implementation." },
              { title: "Document Control", desc: "Structured document management systems and controlled workflows for capital projects." },
            ].map((service) => (
              <div key={service.title} className="p-8 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-10 h-1 mb-4 rounded" style={{ backgroundColor: "#B06533" }}></div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "#003E52" }}>{service.title}</h3>
                <p className="text-gray-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="/services" style={{ backgroundColor: "#003E52" }} className="inline-block px-8 py-3 text-white font-semibold rounded hover:opacity-90">
              View All Services
            </a>
          </div>
        </div>
      </div>

      {/* Projects Teaser */}
      <div className="py-24" style={{ backgroundColor: "#F7F7F7" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: "#003E52" }}>Featured Projects</h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "#98999B" }}>
              A track record built across mining, oil and gas, energy, and heavy civil sectors in Canada and internationally.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {[
              { name: "Lydian Amulsar Gold Mine", location: "Armenia", sector: "Mining", value: "CA$3.4B" },
              { name: "Alamos Island Gold", location: "Canada", sector: "Mining", value: "CA$205M" },
              { name: "Bestech Calabrian", location: "Canada", sector: "Industrial", value: "CA$35M" },
            ].map((project) => (
              <div key={project.name} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 flex items-end p-6" style={{ backgroundColor: "#003E52" }}>
                  <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded" style={{ backgroundColor: "#B06533", color: "white" }}>{project.sector}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1" style={{ color: "#003E52" }}>{project.name}</h3>
                  <p className="text-sm mb-3" style={{ color: "#98999B" }}>{project.location}</p>
                  <p className="text-sm font-semibold" style={{ color: "#B06533" }}>{project.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="/projects" className="inline-block px-8 py-3 font-semibold rounded border-2 hover:opacity-90 transition-colors" style={{ borderColor: "#003E52", color: "#003E52" }}>
              View All Projects
            </a>
          </div>
        </div>
      </div>

      {/* Praetorian IQ Panel */}
      <div className="py-24" style={{ backgroundColor: "#003E52" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#B06533" }}>Technology</div>
              <h2 className="text-4xl font-bold text-white mb-6">Praetorian IQ</h2>
              <p className="text-lg mb-4 leading-relaxed" style={{ color: "#98999B" }}>
                An AI-powered project management platform developed by Praetorian Construction Management to deliver intelligent cost intelligence and document management across capital portfolios.
              </p>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: "#98999B" }}>
                Praetorian IQ integrates structured cost data, scheduling inputs, and AI-assisted analysis to give project teams and ownership groups real-time visibility across complex programmes.
              </p>
              <div className="flex gap-4">
                <div className="flex-1 p-4 rounded" style={{ backgroundColor: "rgba(255,255,255,0.07)" }}>
                  <div className="text-2xl font-bold mb-1" style={{ color: "#B06533" }}>AI Insights</div>
                  <div className="text-sm" style={{ color: "#98999B" }}>Cost and schedule intelligence</div>
                </div>
                <div className="flex-1 p-4 rounded" style={{ backgroundColor: "rgba(255,255,255,0.07)" }}>
                  <div className="text-2xl font-bold mb-1" style={{ color: "#B06533" }}>Document Library</div>
                  <div className="text-sm" style={{ color: "#98999B" }}>AI-powered search and retrieval</div>
                </div>
              </div>
            </div>
            <div className="rounded-lg p-8" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#B06533" }}></div>
                <span className="text-white font-semibold text-lg">Cost Intelligence</span>
              </div>
              <div className="space-y-3">
                {[
                  { project: "Amulsar Gold Mine", value: "CA$3.4B" },
                  { project: "Island Gold Mine", value: "CA$205M" },
                  { project: "Calabrian Facility", value: "CA$35M" },
                  { project: "Back River", value: "Pending Validation" },
                ].map((item) => (
                  <div key={item.project} className="flex items-center justify-between py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                    <span className="text-sm" style={{ color: "#98999B" }}>{item.project}</span>
                    <span className="text-sm font-semibold" style={{ color: "#B06533" }}>{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-xs" style={{ color: "rgba(152,153,155,0.6)" }}>
                Platform capabilities summary only. Cost data shown for illustrative purposes.
              </div>
            </div>
          </div>
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