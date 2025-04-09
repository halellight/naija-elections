"use client"
import { useEffect, useState } from "react"

export default function Home() {
  // Next Nigerian presidential election is expected in February 2027
  const targetDate = new Date("2027-02-25T00:00:00")

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
  }, [])

  return (
    <div>
    <div className="relative min-h-70vh flex flex-col justify-center items-center bg-gradient-to-r from-[#004d40] to-[#00695c] text-white overflow-hidden px-6 pt-24">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Nigeria's Next Presidential Election
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10">
          Stay informed about Nigeria's democratic process and upcoming presidential election. 
          Explore our comprehensive resources on Nigerian politics, elections, and democracy.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href="/learn">
          <button className="px-6 py-3 bg-white text-green-800 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
    Learn More
          </button>
        </a>

        <a href="/events">
          <button className="px-6 py-3 border border-white font-semibold rounded-lg hover:bg-white hover:text-green-800 transition">
            View Events
          </button>
        </a>
        </div>
      </div>
      <div className="flex justify-center flex-wrap gap-6 my-12">
          <div className="bg-white border-2 border-ng-green p-6 rounded-lg shadow-md text-center min-w-[120px] transition-transform hover:-translate-y-1 duration-200">
            <div className="text-4xl font-bold text-ng-green">{timeLeft.days}</div>
            <div className="text-sm uppercase text-ng-gray-600 font-medium">Days</div>
          </div>

          <div className="bg-white border-2 border-ng-green p-6 rounded-lg shadow-md text-center min-w-[120px] transition-transform hover:-translate-y-1 duration-200">
            <div className="text-4xl font-bold text-ng-green">{timeLeft.hours}</div>
            <div className="text-sm uppercase text-ng-gray-600 font-medium">Hours</div>
          </div>

          <div className="bg-white border-2 border-ng-green p-6 rounded-lg shadow-md text-center min-w-[120px] transition-transform hover:-translate-y-1 duration-200">
            <div className="text-4xl font-bold text-ng-green">{timeLeft.minutes}</div>
            <div className="text-sm uppercase text-ng-gray-600 font-medium">Minutes</div>
          </div>

          <div className="bg-white border-2 border-ng-green p-6 rounded-lg shadow-md text-center min-w-[120px] transition-transform hover:-translate-y-1 duration-200">
            <div className="text-4xl font-bold text-ng-green">{timeLeft.seconds}</div>
            <div className="text-sm uppercase text-ng-gray-600 font-medium">Seconds</div>
          </div>
        </div>
    

      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00c85333] via-transparent to-transparent pointer-events-none z-0" />
    </div>

      <div className="container">
        

        

        <h2 className="section-title">Explore Nigerian Politics</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card">
            <div className="flex-1">
              <h3 className="card-title">Upcoming Election Events</h3>
              <p className="mb-4">
                Events leading up to the next Nigerian Presidential election. Events are listed in reverse chronological
                order, with the Inauguration being the first event.
              </p>
            </div>
            <div className="card-footer">
              <a href="/events" className="text-ng-green font-bold hover:underline">
                View All Events
              </a>
            </div>
          </div>

          <div className="card">
            <div className="flex-1">
              <h3 className="card-title">Presidents</h3>
              <p className="mb-4">
                Explore the history of Nigerian leadership through our comprehensive guides about Nigerian
                Presidents and their legacies.
              </p>
            </div>
            <div className="card-footer">
              <a href="/presidents" className="text-ng-green font-bold hover:underline">
                View Presidents
              </a>
            </div>
          </div>

          <div className="card">
            <div className="flex-1">
              <h3 className="card-title">Political Parties</h3>
              <p className="mb-4">
                Learn about the major political parties in Nigeria, their histories, ideologies, and their impact on the
                nation's political landscape.
              </p>
            </div>
            <div className="card-footer">
              <a href="/parties" className="text-ng-green font-bold hover:underline">
                Explore Parties
              </a>
            </div>
          </div>
        </div>

        <div className="bg-ng-gray-100 border border-ng-gray-200 rounded-lg p-6 mt-12 mb-12">
          
          <h3 className="font-bold mb-2">ℹ️Note on Usage</h3>
          <p className="text-sm text-ng-gray-600">
            All content on this site is intended for educational purposes. We strive to provide accurate, nonpartisan
            information about Nigerian politics and history. While we draw from these authoritative sources, any errors
            or omissions are our own.
          </p>
        </div>
      </div>
    </div>
  )
}
