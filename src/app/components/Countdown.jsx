'use client'
import { useEffect, useState } from 'react'

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 })

  useEffect(() => {
    const launchDate = new Date('2025-08-01T00:00:00') // 🗓️ Change to your actual launch date

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
    <section className="py-16 text-center bg-gradient-to-b from-indigo-700 to-indigo-400">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
        We&apos;re launching in:
      </h2>
      <div className="flex justify-center gap-6 text-white text-lg font-medium">
        {Object.entries(timeLeft).map(([label, value]) => (
          <div key={label} className="flex flex-col items-center">
            <div className="text-3xl font-bold">{value}</div>
            <div className="uppercase text-xs">{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
