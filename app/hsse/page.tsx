import Navbar from "../components/Navbar";

export default function HSSE() {
  return (
    <main>
      <Navbar />

      {/* Page Hero */}
      <div style={{ backgroundColor: "#003E52", marginTop: "72px" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#B06533" }}>Safety First</div>
          <h1 className="text-5xl font-bold text-white mb-6">Health, Safety, Security &amp; Environment</h1>
          <p className="text-xl max-w-3xl leading-relaxed" style={{ color: "#98999B" }}>
            At Praetorian Construction Management, HSSE is not a programme we implement -- it is a value we live. The safety of our people, our clients, and the communities in which we work is our first priority on every project.
          </p>
        </div>
      </div>

      {/* HSSE Commitment */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="w-12 h-1 mb-6 rounded" style={{ backgroundColor: "#B06533" }}></div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: "#003E52" }}>Our Commitment to Safety</h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                Praetorian Construction Management is committed to providing a safe and healthy work environment for all personnel on every project we manage. Our HSSE management system is designed to identify, assess, and control hazards before work begins.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                We believe that all incidents are preventable. Our teams are empowered to stop work whenever they identify an unsafe condition, and we foster a culture where safety observations and near-miss reporting are encouraged and valued.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Our HSSE professionals bring experience from remote mining sites, industrial facilities, and complex construction environments across Canada and internationally.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "0", label: "Lost Time Incidents Target" },
                { number: "100%", label: "Sites with Active HSSE Plans" },
                { number: "20+", label: "Years Safety Experience" },
                { number: "6", label: "Countries Operated In" },
              ].map((stat) => (
                <div key={stat.label} className="p-8 rounded-lg text-center" style={{ backgroundColor: "#F7F7F7" }}>
                  <div className="text-4xl font-bold mb-2" style={{ color: "#B06533" }}>{stat.number}</div>
                  <div className="text-sm font-medium" style={{ color: "#003E52" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* HSSE Pillars */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold" style={{ color: "#003E52" }}>Our HSSE Framework</h2>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {[
              {
                letter: "H",
                title: "Health",
                items: ["Occupational health monitoring", "Fitness for work programmes", "Mental health and wellness", "Medical emergency response", "Hygiene and exposure controls"],
              },
              {
                letter: "S",
                title: "Safety",
                items: ["Hazard identification and control", "Work permit systems", "Stop work authority", "Incident investigation", "Safety leadership programmes"],
              },
              {
                letter: "S",
                title: "Security",
                items: ["Site access control", "Personnel tracking", "Threat and risk assessment", "Emergency response planning", "Security protocol development"],
              },
              {
                letter: "E",
                title: "Environment",
                items: ["Environmental impact assessment", "Spill prevention and response", "Waste management", "Regulatory compliance", "Environmental monitoring"],
              },
            ].map((pillar) => (
              <div key={pillar.title} className="rounded-lg overflow-hidden shadow-sm">
                <div className="p-6 text-center" style={{ backgroundColor: "#003E52" }}>
                  <div className="text-4xl font-bold mb-1" style={{ color: "#B06533" }}>{pillar.letter}</div>
                  <div className="text-white font-semibold">{pillar.title}</div>
                </div>
                <div className="p-6 bg-white">
                  <ul className="space-y-3">
                    {pillar.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ backgroundColor: "#B06533" }}></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* HSSE Standards */}
      <div className="py-24" style={{ backgroundColor: "#F7F7F7" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#003E52" }}>Standards and Compliance</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#98999B" }}>
              Praetorian operates in compliance with applicable regulatory requirements and industry best practice standards across all jurisdictions.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {[
              { title: "Regulatory Compliance", desc: "Full compliance with provincial and federal occupational health and safety regulations across all Canadian jurisdictions, and applicable regulations in international operating environments." },
              { title: "Industry Standards", desc: "Our HSSE management system aligns with internationally recognised standards including ISO 45001 occupational health and safety, and ISO 14001 environmental management." },
              { title: "Client Requirements", desc: "We adapt our HSSE programmes to meet and exceed client-specific requirements, integrating seamlessly with owner HSSE management systems on every project." },
              { title: "Incident Reporting", desc: "Transparent and timely incident reporting to clients, regulatory authorities, and other stakeholders in accordance with applicable requirements and Praetorian protocols." },
              { title: "Audits and Inspections", desc: "Regular internal and third-party HSSE audits and field inspections to verify compliance, identify improvement opportunities, and drive continuous performance improvement." },
              { title: "Training and Competency", desc: "Mandatory HSSE orientation, role-specific training, and competency verification for all Praetorian personnel and subcontractors working on our projects." },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-10 h-1 mb-4 rounded" style={{ backgroundColor: "#B06533" }}></div>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#003E52" }}>{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Band */}
      <div className="py-20" style={{ backgroundColor: "#003E52" }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Questions About Our HSSE Programme?</h2>
          <p className="text-lg mb-8" style={{ color: "#98999B" }}>
            Contact our team to discuss how Praetorian manages health, safety, security, and environment on capital projects.
          </p>
          <a href="/contact" style={{ backgroundColor: "#B06533" }} className="inline-block px-10 py-4 text-white font-semibold rounded hover:opacity-90">
            Contact Us
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