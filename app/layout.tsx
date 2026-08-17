import type { Metadata, Viewport } from "next"
import { Manrope, DM_Mono } from "next/font/google"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
})

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["400", "500"],
})

export const metadata: Metadata = {
  title: "Lakshan Adhithyaa — Software Engineer",
  description:
    "Portfolio of Lakshan Adhithyaa, an AI & ML student building responsive interfaces, practical applications, and AI-driven workflows.",
  openGraph: {
    title: "Lakshan Adhithyaa — Software Engineer",
    description:
      "Portfolio of Lakshan Adhithyaa, an AI & ML student building responsive interfaces, practical applications, and AI-driven workflows.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0d0b",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`bg-background ${manrope.variable} ${dmMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
