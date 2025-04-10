import type React from "react"
import "./globals.css"
import ClientLayout from "./ClientLayout"

export const metadata = {
  title: "Next Presidential Election Nigeria",
  description: "Information about Nigeria's upcoming presidential elections, past presidents, and political guides.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}


