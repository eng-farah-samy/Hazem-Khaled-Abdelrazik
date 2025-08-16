import type React from "react"
import type { Metadata } from "next"
import { Amiri, Cairo } from "next/font/google"
import "./globals.css"

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
})

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  variable: "--font-cairo",
  display: "swap",
})

export const metadata: Metadata = {
  title: "المحامي حازم خالد عبد الرازق - محامي متخصص",
  description: "موقع المحامي حازم خالد عبد الرازق - ماجستير القانون العام والخاص",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${amiri.variable} ${cairo.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
