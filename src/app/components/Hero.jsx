export default function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center px-6 text-center
      bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600
      bg-[length:300%_300%] animate-[gradientBG_15s_ease_infinite]">
      
      <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow">
        Something Awesome Is Coming
      </h1>
      <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8">
        We&apos;re building a tool that will help founders launch faster, convert better, and grow smarter.
      </p>

      <a
        href="#waitlist"
        className="inline-block bg-white text-gray-900 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition"
      >
        Join the Waitlist
      </a>
    </section>
  )
}
