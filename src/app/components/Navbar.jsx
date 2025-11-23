export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/60 px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
      {/* Logo with better branding */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">SS</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-700 to-purple-600 bg-clip-text text-transparent">
          StartupSite
        </h1>
      </div>
      
      {/* Navigation - mobile friendly */}
      <ul className="flex gap-4 sm:gap-6 text-sm sm:text-base font-medium text-gray-700">
        <li>
          <a href="#waitlist" className="hover:text-indigo-600 transition-colors duration-200 hover:font-semibold">
            Join Waitlist
          </a>
        </li>
        <li className="hidden sm:block">
          <a href="#join-us" className="hover:text-indigo-600 transition-colors duration-200 hover:font-semibold">
            Work for us
          </a>
        </li>
        <li>
          <a href="#faq" className="hover:text-indigo-600 transition-colors duration-200 hover:font-semibold">
            FAQ
          </a>
        </li>
      </ul>
    </nav>
  )
}