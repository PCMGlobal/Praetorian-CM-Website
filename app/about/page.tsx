import Navbar from "../components/Navbar";
import Footer from "@/app/components/Footer";

export default function About() {
  return (
    <main>
      <Navbar />

      {/* Page Hero */}
      <div style={{ backgroundColor: "#003E52", marginTop: "72px" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#B06533" }}>Who We Are</div>
          <h1 className="text-5xl font-bold text-white mb-6">About Praetorian</h1>
          <p className="text-xl max-w-3xl leading-relaxed" style={{ color: "#98999B" }}>
            Praetorian Construction Management is a project management firm specialising in complex capital programmes across mining, energy, and infrastructure sectors in Canada and internationally.
          </p>
        </div>
      </div>

      {/* Mission, Vision, Values */}
      <div id="pcml-mission" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-12 mb-20">
            <div>
              <div className="w-10 h-1 mb-6 rounded" style={{ backgroundColor: "#B06533" }}></div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#003E52" }}>Our Mission</h2>
              <p className="text-gray-500 leading-relaxed">
                To deliver world-class project management services that protect owner interests, drive programme performance, and create lasting value across every project we support.
              </p>
            </div>
            <div>
              <div className="w-10 h-1 mb-6 rounded" style={{ backgroundColor: "#B06533" }}></div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#003E52" }}>Our Vision</h2>
              <p className="text-gray-500 leading-relaxed">
                To be the most trusted project management partner for capital project owners in the mining, energy, and infrastructure sectors across Canada and internationally.
              </p>
            </div>
            <div>
              <div className="w-10 h-1 mb-6 rounded" style={{ backgroundColor: "#B06533" }}></div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#003E52" }}>Our Values</h2>
              <ul className="space-y-2 text-gray-500">
                {["Integrity in everything we do", "Excellence in project delivery", "Safety above all else", "Accountability to our clients", "Collaboration with all stakeholders"].map((v) => (
                  <li key={v} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#B06533" }}></div>
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Company Story */}
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: "#003E52" }}>Built on Experience</h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                Praetorian Construction Management was founded on the principle that project owners deserve independent, experienced, and accountable project management support throughout the lifecycle of their capital programmes.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                With more than 20 years of experience and a portfolio spanning mining, energy, oil and gas, and heavy civil sectors, our team has delivered results on some of the most complex capital projects in Canada and internationally.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Headquartered in Edmonton, Alberta, Praetorian operates across Canada and has delivered projects in six countries, bringing consistent standards of project controls, safety, and delivery performance to every engagement.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "20+", label: "Years of Experience" },
                { number: "60+", label: "Projects Delivered" },
                { number: "6", label: "Countries" },
                { number: "CA$3.6B+", label: "Portfolio Value" },
              ].map((stat) => (
                <div key={stat.label} className="p-8 rounded-lg text-center" style={{ backgroundColor: "#F7F7F7" }}>
                  <div className="text-4xl font-bold mb-2" style={{ color: "#B06533" }}>{stat.number}</div>
                  <div className="text-sm font-medium" style={{ color: "#003E52" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Management Team */}
      <div id="pcml-management" className="py-24" style={{ backgroundColor: "#F7F7F7" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#B06533" }}>Leadership</div>
            <h2 className="text-4xl font-bold" style={{ color: "#003E52" }}>Management Team</h2>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {[
              { name: "Brad Walter", title: "President", bio: "Brad brings extensive experience in capital project delivery across mining and energy sectors, leading Praetorian's strategic direction and client relationships." },
              { name: "Femi Farinu", title: "VP Technical Services", bio: "Femi leads Praetorian's technical delivery teams, overseeing project controls, scheduling, and technology innovation including the Praetorian IQ platform." },
              { name: "Michael Cullerton", title: "CEO / CFO", bio: "Michael oversees Praetorian's financial operations and corporate governance, bringing deep expertise in capital project finance and business management." },
            ].map((member) => (
              <div key={member.name} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="h-48 flex items-center justify-center" style={{ backgroundColor: "#003E52" }}>
                  <div className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-white" style={{ backgroundColor: "rgba(176,101,51,0.3)", border: "2px solid #B06533" }}>
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1" style={{ color: "#003E52" }}>{member.name}</h3>
                  <div className="text-sm font-medium mb-3" style={{ color: "#B06533" }}>{member.title}</div>
                  <p className="text-sm text-gray-500 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs mt-8" style={{ color: "#98999B" }}>
            Management headshots and updated biographies to be provided by Praetorian Construction Management.
          </p>
        </div>
      </div>

      {/* CTA Band */}
      <div className="py-20" style={{ backgroundColor: "#003E52" }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Work With Us</h2>
          <p className="text-lg mb-8" style={{ color: "#98999B" }}>
            Talk to our team about how Praetorian can support your next capital programme.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/contact" style={{ backgroundColor: "#B06533" }} className="inline-block px-10 py-4 text-white font-semibold rounded hover:opacity-90">
              Contact Us
            </a>
            <a href="/careers" className="inline-block px-10 py-4 text-white font-semibold rounded border border-white hover:bg-white hover:text-teal-900 transition-colors">
              View Careers
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}