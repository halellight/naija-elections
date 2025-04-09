import Link from "next/link"
"use client"

import { useState } from "react"
import type React from "react"

const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

export default function Navbar() {
  return (
    <nav className="bg-ng-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold flex items-center gap-2">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 bg-white rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-ng-green"></div>
            </div>
          </div>
          NaijaElections
        </Link>
        <div className="space-x-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/events" className="hover:underline">
            Events
          </Link>
          <Link href="/learn" className="hover:underline">
            Learn
          </Link>
          <Link href="/presidents" className="hover:underline">
            Presidents
          </Link>
          <Link href="/parties" className="hover:underline">
            Parties
          </Link>
          <Link href="/movements" className="hover:underline">
            Movements
          </Link>
        </div>
      </div>
    </nav>
  )
}
