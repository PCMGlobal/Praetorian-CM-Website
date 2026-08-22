import Navbar from "../components/Navbar";
import Footer from "@/app/components/Footer";

export default function Careers() {
  const roles = [
    { title: "Senior Project Manager", discipline: "Project Management", location: "Edmonton, AB", type: "Full-Time" },
    { title: "Project Controls Engineer", discipline: "Project Controls", location: "Edmonton, AB", type: "Full-Time" },
    { title: "Senior Scheduler", discipline: "Scheduling", location: "Edmonton, AB", type: "Full-Time" },
    { title: "Cost Engineer", discipline: "Project Controls", location: "Vancouver, BC", type: "Full-Time" },
    { title: "Construction Manager", discipline: "Construction Management", location: "Remote / Site", type: "Full-Time" },
    { title: "Owner's Representative", discipline: "Project Management", location: "Remote / Site", type: "Contract" },
    { title: "HSSE Manager", discipline: "HSSE", location: "Remote / Site", type: "Full-Time" },
    { title: "Document Controller", discipline: "Document Control", location: "Edmonton, AB", type: "Full-Time" },
    { title: "Primavera P6 Scheduler", discipline: "Scheduling", location: "Edmonton, AB", type: "Contract" },
    { title: "Project Administrator", discipline: "Project Management", location: "Edmonton, AB", type: "Full-Time" },
  ];

  return (
    <main>
      <Navbar />

      {/* Page Hero */}
      <div style={{ backgroundColor: "#003E52", marginTop: "72px" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#B06533" }}>Join Our Team</div>
          <h1 className="text-5xl font-bold text-white mb-6">Careers at Praetorian</h1>
          <p className="text-xl max-w-3xl leading-relaxed" style={{ color: "#98999B" }}>
            We are always looking for experienced project management professionals to join our team. Praetorian offers challenging work on complex capital programmes across Canada and internationally.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div id="pcml-careers-why" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#B06533" }}>Why Praetorian</div>
            <h2 className="text-4xl font-bold" style={{ color: "#003E52" }}>Why Choose Us</h2>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {[
              { title: "Complex Projects", desc: "Work on some of the most technically demanding capital programmes in mining, energy, and infrastructure sectors across Canada and internationally." },
              { title: "Expert Team", desc: "Collaborate with experienced project management professionals who bring decades of capital project delivery expertise to every engagement." },
              { title: "Growth Opportunities", desc: "Build your career across diverse sectors and project types, with opportunities to take on increasing responsibility as you develop your expertise." },
              { title: "Competitive Compensation", desc: "Praetorian offers competitive salaries and contract rates that reflect the expertise and commitment we expect from our team members." },
              { title: "Flexible Arrangements", desc: "We offer a mix of office-based, remote, and site-based roles depending on project requirements and individual circumstances." },
              { title: "Meaningful Work", desc: "Contribute to projects that matter, from critical infrastructure to resource development programmes that support communities and economies." },
            ].map((item) => (
              <div key={item.title} className="p-8 rounded-lg" style={{ backgroundColor: "#F7F7F7" }}>
                <div className="w-10 h-1 mb-4 rounded" style={{ backgroundColor: "#B06533" }}></div>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#003E52" }}>{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our People */}
      <div id="pcml-careers-people" className="py-24" style={{ backgroundColor: "#003E52" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#B06533" }}>Our People</div>
              <h2 className="text-4xl font-bold text-white mb-6">Our People, Our Value</h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "#98999B" }}>
                At Praetorian, our people are our greatest asset. We invest in building teams of skilled professionals who are committed to delivering excellence on every project we undertake.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "#98999B" }}>
                We foster a culture of accountability, collaboration, and continuous improvement, where every team member has the opportunity to contribute, grow, and make a real difference on complex capital programmes.
              </p>
            </div>
            <div className="rounded-lg p-8" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <div className="text-lg font-semibold text-white mb-2">Annette Genge</div>
              <div className="text-sm mb-6" style={{ color: "#B06533" }}>Senior Project Controls Specialist</div>
              <p className="text-gray-300 leading-relaxed italic">
                "Working at Praetorian has given me the opportunity to work on some of the most complex and rewarding capital projects of my career. The team's commitment to excellence and the quality of work we deliver together is something I am genuinely proud of."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Live Positions */}
      <div id="pcml-opportunities" className="py-24" style={{ backgroundColor: "#F7F7F7" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#B06533" }}>Opportunities</div>
            <h2 className="text-4xl font-bold" style={{ color: "#003E52" }}>Current Openings</h2>
            <p className="text-lg mt-4 max-w-2xl mx-auto" style={{ color: "#98999B" }}>
              We are actively recruiting experienced professionals across project management, controls, scheduling, and HSSE disciplines.
            </p>
          </div>
          <div className="space-y-4">
            {roles.map((role) => (
              <div key={role.title} className="bg-white rounded-lg p-6 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-6">
                  <div>
                    <h3 className="text-lg font-bold mb-1" style={{ color: "#003E52" }}>{role.title}</h3>
                    <div className="flex items-center gap-4 text-sm" style={{ color: "#98999B" }}>
                      <span>{role.discipline}</span>
                      <span>|</span>
                      <span>{role.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded" style={{
                    backgroundColor: role.type === "Contract" ? "rgba(176,101,51,0.1)" : "rgba(0,62,82,0.08)",
                    color: role.type === "Contract" ? "#B06533" : "#003E52"
                  }}>
                    {role.type}
                  </span>
                  <a href="/contact" className="text-sm font-semibold px-5 py-2 rounded text-white hover:opacity-90" style={{ backgroundColor: "#003E52" }}>
                    Apply
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs mt-8" style={{ color: "#98999B" }}>
            Don't see a role that fits? Send your resume to info@praetoriancm.com and we will keep it on file for future opportunities.
          </p>
        </div>
      </div>

      {/* CTA Band */}
      <div className="py-20" style={{ backgroundColor: "#003E52" }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Our Team?</h2>
          <p className="text-lg mb-8" style={{ color: "#98999B" }}>
            Send us your resume or reach out to discuss current and upcoming opportunities.
          </p>
          <a href="mailto:info@praetoriancm.com" style={{ backgroundColor: "#B06533" }} className="inline-block px-10 py-4 text-white font-semibold rounded hover:opacity-90">
            Get in Touch
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
}