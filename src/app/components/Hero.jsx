export default function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 text-center relative overflow-hidden">
      {/* Enhanced gradient background with particles effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl">
        {/* Badge for urgency */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-ping mr-2"></span>
          <span className="text-white/90 text-sm font-medium">Launching Q1 2024 • Limited Early Access</span>
        </div>

        {/* Headline with more impact */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
          Stop Building
          <br />
          <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
            Start Launching
          </span>
        </h1>

        {/* Subtitle with benefits */}
        <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-3xl mb-8 leading-relaxed">
          The all-in-one platform for founders to <span className="font-semibold text-white">validate ideas faster</span>, 
          {' '}<span className="font-semibold text-white">convert visitors better</span>, and 
          {' '}<span className="font-semibold text-white">grow smarter</span> from day one.
        </p>

        {/* Enhanced CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#waitlist"
            className="group bg-white text-gray-900 px-8 py-4 rounded-full font-bold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            🚀 Join the Waitlist 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#demo"
            className="group border-2 border-white/60 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 hover:border-white/80 backdrop-blur-sm transition-all duration-300"
          >
            Watch Demo Video
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-12 flex flex-col items-center">
          <p className="text-white/70 text-sm mb-4">Trusted by 500+ founders from</p>
          <div className="flex gap-6 text-white/50 text-sm">
            <span>Y Combinator</span>
            <span>•</span>
            <span>Techstars</span>
            <span>•</span>
            <span>500 Startups</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}