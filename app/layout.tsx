import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter_Tight } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { MagneticCursor } from "@/components/ui/magnetic-cursor"
import "./globals.css"

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
})

export const metadata: Metadata = {
  title: "DYELUX | Soluciones integrales en aluminio",
  description:
    "Colocación y suministro de aberturas de aluminio, barandas y cerramientos para edificios, obras nuevas y proyectos de construcción.",
  keywords: ["aluminio", "aberturas", "curtainwall", "cerramientos", "barandas", "construcción", "obra nueva"],
  authors: [{ name: "DYELUX" }],
  openGraph: {
    title: "DYELUX | Soluciones integrales en aluminio",
    description:
      "Colocación y suministro de aberturas de aluminio, barandas y cerramientos para edificios, obras nuevas y proyectos de construcción.",
    type: "website",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${interTight.className} font-sans antialiased`}>
        <MagneticCursor />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
