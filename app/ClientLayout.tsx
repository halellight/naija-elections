"use client"
import Footer from "@/components/footer"
import { useState, useEffect } from "react"
import type React from "react"
import Link from "next/link"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Close menu when route changes or on outside click
  useEffect(() => {
    const handleRouteChange = () => {
      setMobileMenuOpen(false)
    }

    // Close menu when clicking outside
    const handleClickOutside = (e: MouseEvent) => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    window.addEventListener('popstate', handleRouteChange)

    return () => {
      document.removeEventListener('click', handleClickOutside)
      window.removeEventListener('popstate', handleRouteChange)
    }
  }, [mobileMenuOpen])

  // Stop propagation to prevent immediate closing when clicking menu items
  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <>
      <nav className={`bg-ng-white p-4 sticky top-0 z-50 shadow-md ${mobileMenuOpen ? "relative" : ""}`}>
        <div className="container flex justify-between items-center">
          <Link href="/" className="font-bold text-2xl text-ng-green flex items-center gap-2">
            NaijaElections
          </Link>
          <button 
            className="md:hidden text-2xl text-black" 
            onClick={(e) => {
              e.stopPropagation()
              setMobileMenuOpen(!mobileMenuOpen)
            }}
          >
            ☰
          </button>
          <div
            className={`${
              mobileMenuOpen 
                ? "absolute top-full left-0 right-0 bg-ng-white p-4 shadow-md flex flex-col gap-4" 
                : "hidden md:flex gap-6"
            }`}
            onClick={handleMenuClick}
          >
            <Link href="/events" className="text-ng-green hover:opacity-80 block py-2">
              Events
            </Link>
            <Link href="/learn" className="text-ng-green hover:opacity-80 block py-2">
              Learn
            </Link>
            <Link href="/presidents" className="text-ng-green hover:opacity-80 block py-2">
              Presidents
            </Link>
            <Link href="/parties" className="text-ng-green hover:opacity-80 block py-2">
              Parties
            </Link>
            <Link href="/movements" className="text-ng-green hover:opacity-80 block py-2">
              Movements
            </Link>
          </div>
        </div>
      </nav>

      <main>{children}</main>
    
      <Footer/>
    </>
  )
}