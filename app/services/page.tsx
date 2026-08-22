import Navbar from "../components/Navbar";
import Footer from "@/app/components/Footer";

export default function Services() {
  return (
    <main>
      <Navbar />

      {/* Page Hero */}
      <div style={{ backgroundColor: "#003E52", marginTop: "72px" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#B06533" }}>What We Do</div>
          <h1 className="text-5xl font-bold text-white mb-6">End-to-End Project Management Services</h1>
          <p className="text-xl max-w-3xl leading-relaxed" style={{ color: "#98999B" }}>
            From feasibility through commissioning, Praetorian Construction Management provides integrated project management expertise across mining, energy, and infrastructure sectors.
          </p>
        </div>
      </div>

      {/* Services Detail */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Project Controls */}
          <div className="grid grid-cols-2 gap-16 items-start mb-20 pb-20 border-b border-gray-100">
            <div>
              <div className="w-12 h-1 mb-6 rounded" style={{ backgroundColor: "#B06533" }}></div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: "#003E52" }}>Project Controls</h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Praetorian delivers rigorous project controls frameworks across complex capital programmes. Our team embeds directly with ownership groups and construction teams to provide real-time cost and schedule visibility from early-stage estimating through to final account.
              </p>
              <p className="text-gray-500 leading-relaxed">
                We apply earned value management, cost forecasting, change management, and risk quantification to keep projects within approved budgets and timelines.
              </p>
            </div>
            <div className="space-y-4">
              {["Cost Management & Forecasting", "Earned Value Management (EVM)", "Change Order Management", "Risk Quantification & Contingency", "Budget Tracking & Reporting", "Owner's Cost Advisory"].map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 rounded-lg" style={{ backgroundColor: "#F7F7F7" }}>
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#B06533" }}></div>
                  <span className="text-sm font-medium" style={{ color: "#003E52" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Owner's Representative */}
          <div className="grid grid-cols-2 gap-16 items-start mb-20 pb-20 border-b border-gray-100">
            <div>
              <div className="w-12 h-1 mb-6 rounded" style={{ backgroundColor: "#B06533" }}></div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: "#003E52" }}>Owner's Representative</h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                As an independent owner's representative, Praetorian acts as the primary interface between project owners and their contractors, engineers, and consultants. We protect ownership interests at every stage of the project lifecycle.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Our team has represented owners on projects ranging from early feasibility studies through to multi-billion dollar capital programmes in remote and complex operating environments.
              </p>
            </div>
            <div className="space-y-4">
              {["Contractor Oversight & Management", "Design Review & Constructability", "Procurement Support", "Claims Management", "Commissioning Oversight", "Feasibility & Front-End Planning"].map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 rounded-lg" style={{ backgroundColor: "#F7F7F7" }}>
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#B06533" }}></div>
                  <span className="text-sm font-medium" style={{ color: "#003E52" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Construction Management */}
          <div className="grid grid-cols-2 gap-16 items-start mb-20 pb-20 border-b border-gray-100">
            <div>
              <div className="w-12 h-1 mb-6 rounded" style={{ backgroundColor: "#B06533" }}></div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: "#003E52" }}>Construction Management</h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Praetorian provides on-site construction management leadership across civil, structural, mechanical, and electrical scopes. We coordinate multi-disciplinary contractor teams to deliver projects safely, on schedule, and within budget.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Our construction managers bring hands-on experience from mining, processing, and heavy industrial environments across Canada and internationally.
              </p>
            </div>
            <div className="space-y-4">
              {["Multi-Discipline Coordination", "Contractor Supervision", "Field Progress Monitoring", "Quality Assurance & Control", "Subcontractor Management", "Punch List & Closeout"].map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 rounded-lg" style={{ backgroundColor: "#F7F7F7" }}>
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#B06533" }}></div>
                  <span className="text-sm font-medium" style={{ color: "#003E52" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Scheduling & Planning */}
          <div className="grid grid-cols-2 gap-16 items-start mb-20 pb-20 border-b border-gray-100">
            <div>
              <div className="w-12 h-1 mb-6 rounded" style={{ backgroundColor: "#B06533" }}></div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: "#003E52" }}>Scheduling & Planning</h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Our scheduling specialists develop and maintain integrated project schedules using Primavera P6 and MS Project. We work with ownership teams and contractors to build realistic baselines, monitor progress, and develop recovery plans when required.
              </p>
              <p className="text-gray-500 leading-relaxed">
                We provide schedule risk analysis, critical path analysis, and look-ahead planning to keep project teams focused on what matters most.
              </p>
            </div>
            <div className="space-y-4">
              {["Primavera P6 Scheduling", "MS Project Scheduling", "Baseline Development", "Critical Path Analysis", "Schedule Risk Analysis", "Recovery Planning"].map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 rounded-lg" style={{ backgroundColor: "#F7F7F7" }}>
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#B06533" }}></div>
                  <span className="text-sm font-medium" style={{ color: "#003E52" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* HSSE Management */}
          <div className="grid grid-cols-2 gap-16 items-start mb-20 pb-20 border-b border-gray-100">
            <div>
              <div className="w-12 h-1 mb-6 rounded" style={{ backgroundColor: "#B06533" }}></div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: "#003E52" }}>HSSE Management</h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Health, safety, security, and environmental management is embedded in everything Praetorian does. We develop and implement HSSE programmes that meet regulatory requirements and reflect best practice for each project environment.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Our HSSE professionals have delivered programmes in remote mining environments, industrial facilities, and international project sites with complex regulatory frameworks.
              </p>
            </div>
            <div className="space-y-4">
              {["HSSE Programme Development", "Site Safety Management", "Environmental Compliance", "Incident Investigation", "Safety Audits & Inspections", "Regulatory Reporting"].map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 rounded-lg" style={{ backgroundColor: "#F7F7F7" }}>
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#B06533" }}></div>
                  <span className="text-sm font-medium" style={{ color: "#003E52" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Document Control */}
          <div className="grid grid-cols-2 gap-16 items-start">
            <div>
              <div className="w-12 h-1 mb-6 rounded" style={{ backgroundColor: "#B06533" }}></div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: "#003E52" }}>Document Control</h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Effective document control is critical on complex capital projects. Praetorian establishes and manages structured document management systems that ensure the right information reaches the right people at the right time.
              </p>
              <p className="text-gray-500 leading-relaxed">
                We implement controlled document workflows, version management, and transmittal systems that meet owner and regulatory requirements from project initiation through to handover.
              </p>
            </div>
            <div className="space-y-4">
              {["Document Management Systems", "Controlled Workflows", "Version & Revision Control", "Transmittal Management", "SharePoint & EDMS Implementation", "Project Closeout & Handover"].map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 rounded-lg" style={{ backgroundColor: "#F7F7F7" }}>
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#B06533" }}></div>
                  <span className="text-sm font-medium" style={{ color: "#003E52" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* CTA Band */}
      <div className="py-20" style={{ backgroundColor: "#003E52" }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Talk About Your Project?</h2>
          <p className="text-lg mb-8" style={{ color: "#98999B" }}>
            Our team is available to discuss your project requirements and how Praetorian can support your programme.
          </p>
          <a href="/contact" style={{ backgroundColor: "#B06533" }} className="inline-block px-10 py-4 text-white font-semibold rounded hover:opacity-90">
            Contact Us
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
}