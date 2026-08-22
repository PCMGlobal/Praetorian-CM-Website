import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <main>
      <Navbar />

      <div style={{ backgroundColor: "#003E52", marginTop: "72px" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#B06533" }}>Get in Touch</div>
          <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl leading-relaxed" style={{ color: "#98999B" }}>
            Whether you have a project enquiry, want to discuss a potential engagement, or simply want to learn more about Praetorian Construction Management, we would be glad to hear from you.
          </p>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold mb-8" style={{ color: "#003E52" }}>Send Us a Message</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#003E52" }}>First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded border text-sm" style={{ borderColor: "#E5E7EB" }} placeholder="First name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#003E52" }}>Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded border text-sm" style={{ borderColor: "#E5E7EB" }} placeholder="Last name" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "#003E52" }}>Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded border text-sm" style={{ borderColor: "#E5E7EB" }} placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "#003E52" }}>Company</label>
                  <input type="text" className="w-full px-4 py-3 rounded border text-sm" style={{ borderColor: "#E5E7EB" }} placeholder="Your company name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "#003E52" }}>Enquiry Type</label>
                  <select className="w-full px-4 py-3 rounded border text-sm" style={{ borderColor: "#E5E7EB", color: "#98999B" }}>
                    <option value="">Select an enquiry type</option>
                    <option value="project">Project Enquiry</option>
                    <option value="careers">Careers</option>
                    <option value="general">General Enquiry</option>
                    <option value="media">Media</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "#003E52" }}>Message</label>
                  <textarea rows={6} className="w-full px-4 py-3 rounded border text-sm resize-none" style={{ borderColor: "#E5E7EB" }} placeholder="Tell us about your project or enquiry..." />
                </div>
                <button className="w-full py-4 text-white font-semibold rounded hover:opacity-90" style={{ backgroundColor: "#B06533" }}>
                  Send Message
                </button>
                <p className="text-xs text-center" style={{ color: "#98999B" }}>Your information will be kept confidential and used only to respond to your enquiry.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-8" style={{ color: "#003E52" }}>Contact Information</h2>
              <div className="space-y-8 mb-12">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#B06533" }}>Office Address</div>
                  <p className="text-gray-500">201 - 10441 178 Street<br />Edmonton, Alberta T5S 1R5<br />Canada</p>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#B06533" }}>Phone</div>
                  <p className="text-gray-500">780.989.0289</p>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#B06533" }}>Email</div>
                  <a href="mailto:info@praetoriancm.com" className="hover:opacity-70" style={{ color: "#003E52" }}>info@praetoriancm.com</a>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#B06533" }}>Follow Us</div>
                  <div className="flex gap-3">
                    {["in", "X", "yt", "ig"].map((s) => (
                      <a key={s} href="#" className="w-10 h-10 rounded flex items-center justify-center text-xs font-bold" style={{ backgroundColor: "#003E52", color: "white" }}>{s}</a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="rounded-lg p-8" style={{ backgroundColor: "#F7F7F7" }}>
                <h3 className="text-lg font-bold mb-6" style={{ color: "#003E52" }}>How Can We Help?</h3>
                <div className="space-y-4">
                  {[
                    { title: "Project Enquiries", desc: "Discuss your capital project requirements and how Praetorian can provide project management support." },
                    { title: "Careers", desc: "Interested in joining our team? Send your resume to info@praetoriancm.com." },
                    { title: "General Enquiries", desc: "For any other questions about Praetorian Construction Management and our services." },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5" style={{ backgroundColor: "#B06533" }}></div>
                      <div>
                        <div className="text-sm font-semibold mb-1" style={{ color: "#003E52" }}>{item.title}</div>
                        <div className="text-sm text-gray-500">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer style={{ backgroundColor: "#002C3A" }} className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-4 gap-12 mb-12">
            <div className="col-span-1">
              <div className="text-white font-bold text-lg mb-4">Praetorian Construction Management</div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#98999B" }}>World-class project management across mining, energy, and infrastructure sectors.</p>
              <div className="flex gap-3">
                {["in", "X", "yt", "ig"].map((s) => (
                  <a key={s} href="#" className="w-8 h-8 rounded flex items-center justify-center text-xs font-bold" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#98999B" }}>{s}</a>
                ))}
              </div>
            </div>
            <div>
              <div className="text-white font-semibold mb-4">Services</div>
              <ul className="space-y-2 text-sm" style={{ color: "#98999B" }}>
                {["Project Controls", "Construction Management", "HSSE", "Scheduling and Planning", "Document Control"].map((s) => (
                  <li key={s}><a href="/services" className="hover:text-white transition-colors">{s}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-white font-semibold mb-4">Company</div>
              <ul className="space-y-2 text-sm" style={{ color: "#98999B" }}>
                {["About Us", "Projects", "Careers", "News and Events", "HSSE", "Contact"].map((s) => (
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
