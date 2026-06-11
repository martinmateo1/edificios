"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"

const works = [
  {
    id: 1,
    title: "Edificio residencial",
    category: "Desarrollo inmobiliario",
    description: "Colocación de aberturas de aluminio, barandas y cerramientos en obra nueva.",
    image: "/images/work-onboarding.png",
    tags: ["Aberturas", "Barandas", "Cerramientos"],
  },
  {
    id: 2,
    title: "Torre de departamentos",
    category: "Obra nueva",
    description: "Suministro y colocación de curtainwall y soluciones de aluminio a gran escala.",
    image: "/images/work-fashion.png",
    tags: ["Curtainwall", "Suministro", "Colocación"],
  },
  {
    id: 3,
    title: "Complejo comercial",
    category: "Construcción",
    description: "Provisión de materiales y ejecución de cerramientos de aluminio para locales y oficinas.",
    image: "/images/work-tasks.png",
    tags: ["Cerramientos", "Materiales", "Rejillas"],
  },
  {
    id: 4,
    title: "Desarrollo de viviendas",
    category: "Desarrollo inmobiliario",
    description: "Coordinación operativa e instalación de aberturas en múltiples unidades.",
    image: "/images/work-crypto.png",
    tags: ["Aberturas", "Instalación", "Obra nueva"],
  },
]

export function SelectedWorks() {
  return (
    <section id="works" className="py-20 md:py-10 md:pt-32 pb-4">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12 md:mb-16">
          <div className="max-w-2xl">
            <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              Proyectos en los que trabajamos
            </SectionTitle>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Hemos participado en distintos desarrollos inmobiliarios y obras nuevas, aportando soluciones técnicas y
              operativas adaptadas a cada proyecto.
            </p>
          </div>
        </div>

        <div className="relative">
          {works.map((work, index) => (
            <div
              key={work.id}
              className="sticky"
              style={{
                top: `${70 + index * 0}px`,
                zIndex: index + 1,
              }}
            >
              <Link href="#" className="group block pt-10">
                <article className="overflow-hidden rounded-2xl md:rounded-3xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative aspect-[2/1] overflow-hidden bg-secondary">
                    <Image
                      src={work.image || "/placeholder.svg"}
                      alt={work.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-3 md:p-3">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold">{work.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{work.description}</p>
                      </div>
                      <ArrowUpRight
                        className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1"
                        style={{ color: "#203eec" }}
                      />
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
