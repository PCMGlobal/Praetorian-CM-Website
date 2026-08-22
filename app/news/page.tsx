import Navbar from "../components/Navbar";
import Footer from "@/app/components/Footer";

export default function News() {
  const articles = [
    {
      category: "Company News",
      date: "August 2026",
      title: "Praetorian Launches AI-Powered Project Management Platform",
      summary: "Praetorian Construction Management has developed Praetorian IQ, an AI-powered platform delivering intelligent cost intelligence and document management across capital project portfolios.",
    },
    {
      category: "Projects",
      date: "July 2026",
      title: "Praetorian Expands Project Controls Practice Across Western Canada",
      summary: "Praetorian Construction Management continues to grow its project controls and scheduling capabilities, supporting capital programmes across mining and energy sectors in Alberta and British Columbia.",
    },
    {
      category: "Industry",
      date: "June 2026",
      title: "Capital Project Delivery in Canadian Mining: Trends and Outlook",
      summary: "A look at the current landscape for capital project delivery in the Canadian mining sector, including cost pressures, labour availability, and the growing role of technology in project controls.",
    },
    {
      category: "Company News",
      date: "May 2026",
      title: "Praetorian Strengthens HSSE Programme Across All Active Projects",
      summary: "Praetorian Construction Management has reinforced its health, safety, security, and environment programme with updated standards and enhanced training requirements across all project sites.",
    },
    {
      category: "Projects",
      date: "April 2026",
      title: "Owner Representative Services: Supporting Complex Mine Development",
      summary: "Praetorian reflects on the delivery of owner representative and project controls services on large-scale mine development programmes, sharing lessons learned and best practices.",
    },
    {
      category: "Industry",
      date: "March 2026",
      title: "The Role of Technology in Modern Project Controls",
      summary: "How AI-assisted analysis, structured cost data, and integrated scheduling tools are transforming the way capital project teams manage cost and schedule performance.",
    },
  ];

  const categories = ["All", "Company News", "Projects", "Industry"];

  return (
    <main>
      <Navbar />

      {/* Page Hero */}
      <div style={{ backgroundColor: "#003E52", marginTop: "72px" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#B06533" }}>Latest Updates</div>
          <h1 className="text-5xl font-bold text-white mb-6">News &amp; Events</h1>
          <p className="text-xl max-w-3xl leading-relaxed" style={{ color: "#98999B" }}>
            Stay up to date with the latest news, project updates, and industry insights from Praetorian Construction Management.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-3 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-5 py-2 rounded text-sm font-medium border transition-colors"
                style={{
                  borderColor: cat === "All" ? "#003E52" : "#E5E7EB",
                  backgroundColor: cat === "All" ? "#003E52" : "white",
                  color: cat === "All" ? "white" : "#98999B",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="py-16" style={{ backgroundColor: "#F7F7F7" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8">
            {articles.map((article) => (
              <div key={article.title} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-40 flex items-end p-6" style={{ backgroundColor: "#003E52" }}>
                  <span
                    className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded"
                    style={{ backgroundColor: "#B06533", color: "white" }}
                  >
                    {article.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="text-xs mb-3" style={{ color: "#98999B" }}>{article.date}</div>
                  <h3 className="text-lg font-bold mb-3 leading-snug" style={{ color: "#003E52" }}>{article.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{article.summary}</p>
                  <a href="#" className="text-sm font-semibold hover:opacity-70 transition-opacity" style={{ color: "#B06533" }}>
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs mt-8" style={{ color: "#98999B" }}>
            News content to be provided and updated by Praetorian Construction Management.
          </p>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#B06533" }}>Stay Informed</div>
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#003E52" }}>Subscribe to Our Newsletter</h2>
          <p className="text-lg mb-8" style={{ color: "#98999B" }}>
            Receive the latest news and project updates from Praetorian Construction Management directly to your inbox.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded border text-sm focus:outline-none focus:ring-2"
              style={{ borderColor: "#E5E7EB" }}
            />
            <button
              className="px-6 py-3 text-white text-sm font-semibold rounded hover:opacity-90"
              style={{ backgroundColor: "#B06533" }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* CTA Band */}
      <div className="py-20" style={{ backgroundColor: "#003E52" }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Have a Project Enquiry?</h2>
          <p className="text-lg mb-8" style={{ color: "#98999B" }}>
            Talk to our team about how Praetorian can support your next capital programme.
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