'use client'
import { useState } from 'react'

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setEmail('')
  }

  return (
    <section id="waitlist" className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Section header */}
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-6">
          🚀 Early Access
        </div>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Get <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Early Access</span>
        </h2>
        
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Join our exclusive waitlist and be among the first to experience StartupSite. 
          Plus get <span className="font-semibold text-indigo-600">special founding member perks</span> when we launch.
        </p>

        {/* Waitlist form */}
        <div className="max-w-md mx-auto">
          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎉</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">You're on the list!</h3>
              <p className="text-gray-600">
                We'll send you early access details soon. Keep an eye on your inbox!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed min-w-[140px]"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Joining...
                    </span>
                  ) : (
                    'Join Waitlist'
                  )}
                </button>
              </div>
              <p className="text-xs text-gray-500">
                No spam, ever. Unsubscribe at any time.
              </p>
            </form>
          )}
        </div>

        {/* Perks grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {[
            { icon: '🎁', title: 'Founder Perks', desc: 'Special lifetime discounts' },
            { icon: '⚡', title: 'Early Access', desc: 'Be first to try new features' },
            { icon: '💬', title: 'Direct Feedback', desc: 'Shape the product roadmap' }
          ].map((perk, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl mb-3">{perk.icon}</div>
              <h4 className="font-semibold text-gray-900 mb-2">{perk.title}</h4>
              <p className="text-sm text-gray-600">{perk.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}