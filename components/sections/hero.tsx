"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"

const DEEP_BLUE = "#16307a"

export function Hero() {
  const [maskReveal, setMaskReveal] = useState(0)
  const [opacity, setOpacity] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768)
    }

    checkDesktop()
    window.addEventListener("resize", checkDesktop)

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const maxScroll = 500
      const revealPercentage = Math.min(100, (scrollPosition / maxScroll) * 100)
      const calculatedOpacity = Math.min(1, scrollPosition / maxScroll)
      setMaskReveal(revealPercentage)
      setOpacity(calculatedOpacity)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", checkDesktop)
    }
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-20 md:py-32 md:pb-4 pb-4 pt-4 md:pt-32">
        <div className="max-w-4xl">
          <p className="text-muted-foreground mb-6 text-lg font-normal">DYELUX — Aluminio para la construcción</p>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-balance">
            Soluciones integrales en{" "}
            <span style={{ color: DEEP_BLUE }}>aluminio</span> para desarrollos
          </h1>

          <p className="mt-8 max-w-xl leading-relaxed text-left text-lg text-zinc-500 ml-0">
            Dedicados a la colocación y suministro de aberturas de aluminio para edificios, obras nuevas y proyectos de
            construcción. Trabajamos junto a desarrolladores, constructoras e inversores brindando soluciones técnicas
            de calidad.
          </p>

          <div className="flex flex-row items-start gap-4 mt-10">
            <Link
              href="#works"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white rounded-full transition-all"
              style={{
                background: DEEP_BLUE,
                boxShadow: "0 4px 20px rgba(22, 48, 122, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(22, 48, 122, 0.45)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(22, 48, 122, 0.3)"
              }}
            >
              Ver proyectos
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium transition-colors"
              style={{ color: DEEP_BLUE }}
            >
              Contacto
              <ArrowDown className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full mt-8">
        <Image
          src="/images/designer.png"
          alt="Designer workspace"
          width={1200}
          height={800}
          className="w-full h-auto transition-all duration-100 ease-out"
          style={{
            opacity: opacity,
            clipPath: isDesktop ? `inset(${100 - maskReveal}% 0 0 0)` : "none",
          }}
          priority
        />
      </div>
    </section>
  )
}
