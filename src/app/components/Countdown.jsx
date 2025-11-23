'use client'
import { useEffect, useState } from 'react'

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 })

  useEffect(() => {
    const launchDate = new Date('2026-08-01T00:00:00')

    const updateCountdown = () => {
      const now = new Date()
      const diff = launchDate - now

      if (diff <= 0) return

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const mins = Math.floor((diff / (1000 * 60)) % 60)
      const secs = Math.floor((diff / 1000) % 60)

      setTimeLeft({ days, hours, mins, secs })
    }

    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 text-center bg-gradient-to-br from-pink-500 via-purple-600 to-pink-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 drop-shadow">
          Launching in:
        </h2>
        
        {/* Countdown grid */}
        <div className="flex justify-center gap-3 sm:gap-6 max-w-2xl mx-auto">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div key={label} className="flex-1 flex flex-col items-center">
              {/* Time unit card */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 sm:p-6 w-full max-w-24 sm:max-w-none">
                <div className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-1 drop-shadow-lg">
                  {value.toString().padStart(2, '0')}
                </div>
                <div className="text-xs sm:text-sm font-medium text-white/80 uppercase tracking-wider">
                  {label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-8 max-w-md mx-auto">
          <div className="bg-white/20 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-green-400 to-cyan-400 h-2 rounded-full transition-all duration-1000"
              style={{
                width: `${100 - (timeLeft.days / 365 * 100)}%`
              }}
            ></div>
          </div>
          <p className="text-white/70 text-sm mt-3">
            {Math.max(0, 100 - Math.floor(timeLeft.days / 365 * 100))}% closer to launch
          </p>
        </div>
      </div>
    </section>
  )
}