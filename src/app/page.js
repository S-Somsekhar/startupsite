import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Countdown from "./components/Countdown"
import Waitlist from "./components/Waitlist"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <div className="h-10 w-full bg-gradient-to-b from-purple-700 to-indigo-700" />
    <Countdown />
    <Waitlist />

      {/* FEATURES */}
    <section className="py-16 px-6 bg-gradient-to-b from-gray-200 to-gray-50 text-gray-900 text-center">
  <h2 className="text-3xl font-bold mb-6">Why You&apos;ll Love Using [Startup-Name]</h2>
  <p className="mb-10 max-w-2xl mx-auto">
    Our platform makes your workflow faster, your team happier, and your results better. Here&apos;s how.
  </p>
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto ">
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
      <h3 className="font-semibold text-lg mb-2">⚡ Instant Onboarding</h3>
      <p className="text-sm text-gray-600">Get started in minutes with no code and zero friction.</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
      <h3 className="font-semibold text-lg mb-2">📊 Smart Dashboards</h3>
      <p className="text-sm text-gray-600">See your KPIs at a glance and make better decisions.</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
      <h3 className="font-semibold text-lg mb-2">🔐 Bank-Grade Security</h3>
      <p className="text-sm text-gray-600">We follow best practices for privacy, encryption & storage.</p>
    </div>
  </div>
</section>

  {/* JOIN-US */}
<section id="join-us" className="py-16 px-6 text-center bg-indigo-700 text-white">
  <h2 className="text-2xl font-bold mb-4">We&apos;re Just Getting Started</h2>
  <p className="mb-6 max-w-xl mx-auto">
    We&apos;re building a future-proof solution and we&apos;d love to connect with passionate devs, designers, and marketers.
  </p>
  <a
    href="mailto:founder@startup.com"
    className="inline-block bg-white text-indigo-800 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
  >
    Join Our Mission
  </a>
</section>

  {/* FAQ */}
<section id="faq" className="py-20 px-6 bg-gray-50 text-gray-900 text-center">
  <h2 className="text-2xl font-bold mb-4">What&apos;s Next?</h2>
  <p className="mb-8 max-w-xl mx-auto">
    We&apos;re building fast. Here&apos;s a quick look at what&apos;s coming soon to the platform.
  </p>
  <div className="max-w-2xl mx-auto text-left space-y-4">
    <div>
      <h3 className="font-semibold">Will there be an API?</h3>
      <p className="text-sm text-gray-600">Yes, a full developer API is scheduled for post-launch.</p>
    </div>
    <div>
      <h3 className="font-semibold">What platforms are supported?</h3>
      <p className="text-sm text-gray-600">We&apos;re optimized for web and plan to release mobile apps in Q4.</p>
    </div>
    <div>
      <h3 className="font-semibold">Can I invest or partner?</h3>
      <p className="text-sm text-gray-600">We&apos;re open to angel partners. Contact us to chat.</p>
    </div>
  </div>
</section>

    <Footer />
    </>
  );
}
