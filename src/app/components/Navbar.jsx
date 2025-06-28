export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent shadow-sm px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-indigo-700 drop-shadow-[0_0_2px_white]">StartupSite</h1>
      <ul className="flex gap-6 text-mid font-medium text-gray-900">
        <li><a href="#waitlist" className="hover:text-indigo-600">Join Waitlist</a></li>
        <li><a href="#join-us" className="hover:text-indigo-600">Work for us</a></li>
        <li><a href="#faq" className="hover:text-indigo-600">FAQ</a></li>
      </ul>
    </nav>
  )
}
