export default function Navbar() {
  return (
    <nav style={{ backgroundColor: "#003E52" }} className="w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-white font-bold text-xl">
          Praetorian Construction Management
        </div>
        <div className="hidden md:flex gap-8 text-white text-sm">
          <a href="#" className="hover:text-amber-400">Services</a>
          <a href="#" className="hover:text-amber-400">Projects</a>
          <a href="#" className="hover:text-amber-400">HSSE</a>
          <a href="#" className="hover:text-amber-400">Careers</a>
          <a href="#" className="hover:text-amber-400">News</a>
          <a href="#" className="hover:text-amber-400">About</a>
          <a href="#" className="hover:text-amber-400">Contact</a>
        </div>
      </div>
    </nav>
  )
}
