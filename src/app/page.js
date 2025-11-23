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
    <Countdown />
    <Waitlist />

{/* FEATURES */}
<section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50">
  <div className="max-w-6xl mx-auto text-center">
    
    {/* Section Header */}
    <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-6">
      ✨ Why Choose Us
    </div>
    
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
      Built for <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Modern Founders</span>
    </h2>
    
    <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
      Everything you need to launch, grow, and scale your startup—without the complexity.
    </p>

    {/* Features Grid */}
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          icon: '⚡',
          title: 'Instant Onboarding',
          description: 'Get started in minutes with no code and zero friction.',
          gradient: 'from-purple-500 to-pink-500'
        },
        {
          icon: '📊',
          title: 'Smart Dashboards',
          description: 'See your KPIs at a glance and make better decisions faster.',
          gradient: 'from-blue-500 to-cyan-500'
        },
        {
          icon: '🔐',
          title: 'Bank-Grade Security',
          description: 'Enterprise-level security with privacy-first data handling.',
          gradient: 'from-green-500 to-emerald-500'
        },
        {
          icon: '🚀',
          title: 'Lightning Fast',
          description: 'Built for speed with 99.9% uptime and global CDN.',
          gradient: 'from-orange-500 to-red-500'
        },
        {
          icon: '🔄',
          title: 'Automated Workflows',
          description: 'Streamline repetitive tasks with smart automation.',
          gradient: 'from-indigo-500 to-purple-500'
        },
        {
          icon: '🌍',
          title: 'Global Scale',
          description: 'Scale effortlessly with multi-region infrastructure.',
          gradient: 'from-teal-500 to-blue-500'
        }
      ].map((feature, index) => (
        <div 
          key={index}
          className="group bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300 hover:-translate-y-1"
        >
          {/* Icon with gradient background */}
          <div className={`w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
            {feature.icon}
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
            {feature.title}
          </h3>
          
          <p className="text-gray-600 leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* JOIN-US */}
<section id="join-us" className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white text-center">
  <div className="max-w-4xl mx-auto">
    
    {/* Section Header */}
    <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm font-medium mb-6">
      🚀 Join Our Journey
    </div>
    
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 drop-shadow">
      Help Us Build The Future
    </h2>
    
    <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
      We're assembling a world-class team of visionaries, builders, and innovators who are passionate about transforming how startups operate.
    </p>

    {/* Perks */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
      {[
        { icon: '💼', text: 'Competitive Equity' },
        { icon: '🏖️', text: 'Unlimited PTO' },
        { icon: '🚀', text: 'Early Stage Impact' }
      ].map((perk, index) => (
        <div key={index} className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
          <span className="text-lg">{perk.icon}</span>
          <span className="text-sm font-medium">{perk.text}</span>
        </div>
      ))}
    </div>

    {/* CTA */}
    <a
      href="mailto:founder@startup.com"
      className="group inline-flex items-center gap-3 bg-white text-indigo-600 font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg"
    >
      ✨ Join Our Mission
      <span className="group-hover:translate-x-1 transition-transform">→</span>
    </a>

    <p className="text-white/70 text-sm mt-6">
      Open roles: Full-Stack Engineers • Product Designers • Growth Marketers
    </p>
  </div>
</section>

{/* FAQ */}
<section id="faq" className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-4xl mx-auto text-center">
    
    {/* Section Header */}
    <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-6">
      ❓ Your Questions
    </div>
    
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
      Frequently Asked Questions
    </h2>
    
    <p className="text-lg text-gray-600 max-w-xl mx-auto mb-12">
      Everything you need to know about our launch and future plans.
    </p>

    {/* FAQ Grid */}
    <div className="grid gap-6 text-left max-w-3xl mx-auto">
      {[
        {
          question: "Will there be an API for developers?",
          answer: "Yes! We're building a comprehensive REST API that will be available to all Pro and Enterprise users post-launch. Early access for beta testers starts next month."
        },
        {
          question: "What platforms are supported?",
          answer: "We're fully optimized for web with a responsive PWA. Native iOS and Android apps are scheduled for Q4 2024, with desktop apps coming early next year."
        },
        {
          question: "Can I invest or partner with you?",
          answer: "We're currently bootstrapped but open to strategic angel investors and technology partners. Reach out to discuss potential collaboration opportunities."
        },
        {
          question: "How is my data protected?",
          answer: "We use enterprise-grade encryption, SOC 2 compliant infrastructure, and follow strict data privacy protocols. Your data never leaves our secure cloud environment."
        },
        {
          question: "What makes you different from competitors?",
          answer: "We focus exclusively on startup needs with features built for rapid iteration, team collaboration, and investor reporting—all in one intuitive platform."
        }
      ].map((faq, index) => (
        <div 
          key={index}
          className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-300"
        >
          <h3 className="font-bold text-gray-900 text-lg mb-3 flex items-start gap-3">
            <span className="text-indigo-600 mt-1">•</span>
            {faq.question}
          </h3>
          <p className="text-gray-600 leading-relaxed pl-6">
            {faq.answer}
          </p>
        </div>
      ))}
    </div>

    {/* Additional CTA */}
    <div className="mt-12 p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
      <p className="text-gray-700 mb-4">
        Still have questions? We're here to help!
      </p>
      <a 
        href="mailto:hello@startup.com" 
        className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
      >
        📧 Contact our team
      </a>
    </div>
  </div>
</section>
    <Footer />
    </>
  );
}
