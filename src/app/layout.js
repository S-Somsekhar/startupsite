import { Outfit } from 'next/font/google'
import "./globals.css";

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export const metadata = {
  title: 'StartupSite – A Better Way to Launch SaaS',
  description: 'Minimal landing page template to hype your next product. Built with Next.js + Tailwind by SiteNest.',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} bg-[#0f0f1a] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
