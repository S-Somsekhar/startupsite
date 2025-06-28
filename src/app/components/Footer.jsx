import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-4 px-6 text-center text-sm bg-[#0f0f1a] text-white/70 border-t border-white/10">
      <div>© {new Date().getFullYear()} StartupSite. All rights reserved.</div>
      <div className="mt-2 text-white/40">
        Prototype by{" "}
        <Link
          href="https://sitenest.clientnesthq.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white"
        >
          SiteNest
        </Link>
      </div>
    </footer>
  )
}
