"use client"

import { useEffect, useState } from "react"

interface CountdownTimerProps {
  targetDate: Date
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex justify-center gap-4 my-12 flex-wrap">
      <div className="bg-ng-black p-6 rounded-lg shadow-md text-center min-w-[120px] border-2 border-ng-green">
        <div className="text-4xl font-bold text-white">{timeLeft.days}</div>
        <div className="text-sm uppercase text-ng-green">Days</div>
      </div>

      <div className="bg-ng-black p-6 rounded-lg shadow-md text-center min-w-[120px] border-2 border-ng-green">
        <div className="text-4xl font-bold text-white">{timeLeft.hours}</div>
        <div className="text-sm uppercase text-ng-green">Hours</div>
      </div>

      <div className="bg-ng-black p-6 rounded-lg shadow-md text-center min-w-[120px] border-2 border-ng-green">
        <div className="text-4xl font-bold text-white">{timeLeft.minutes}</div>
        <div className="text-sm uppercase text-ng-green">Minutes</div>
      </div>

      <div className="bg-ng-black p-6 rounded-lg shadow-md text-center min-w-[120px] border-2 border-ng-green">
        <div className="text-4xl font-bold text-white">{timeLeft.seconds}</div>
        <div className="text-sm uppercase text-ng-green">Seconds</div>
      </div>
    </div>
  )
}
