'use client'

export default function Waitlist() {
  return (
    <section id="waitlist" className="py-20 px-6 bg-gradient-to-b from-indigo-400 to-gray-200 text-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-4">Join Our Waitlist</h2>
      <p className="mb-6 text-lg">Be the first to know when we launch. No spam, just updates.</p>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="max-w-md mx-auto flex flex-col sm:flex-row items-center gap-4"
      >
        <input
          type="email"
          required
          placeholder="you@example.com"
          className="w-full px-4 py-3 rounded-lg border border-gray-500 focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Notify Me
        </button>
      </form>
    </section>
  )
}
