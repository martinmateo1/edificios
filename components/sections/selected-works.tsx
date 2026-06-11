"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"

const works = [
  {
    id: 1,
    title: "Art-Tower",
    description: "Suministro y colocación de rejillas para AA, louver en PB y P24, y revestimientos en Alucobond.",
    image: "/images/proyecto-art-tower.jpg",
    tags: ["Rejillas AA", "Louver", "Alucobond"],
  },
  {
    id: 2,
    title: "Forum",
    description: "Suministro y colocación de rejillas para AA, y colocación de aberturas y cristales.",
    image: "/images/proyecto-forum.png",
    tags: ["Rejillas AA", "Aberturas", "Cristales"],
  },
  {
    id: 3,
    title: "Manglar Brava",
    description: "Colocación de barandas.",
    image: "/images/proyecto-manglar-brava.jpeg",
    tags: ["Barandas"],
  },
  {
    id: 4,
    title: "Manglar Albor",
    description:
      "Suministro y colocación de barandas, colocación de aberturas, rejillas para AA y curtainwall.",
    image: "/images/proyecto-manglar-albor.png",
    tags: ["Barandas", "Aberturas", "Rejillas AA", "Curtainwall"],
  },
  {
    id: 5,
    title: "Museo Atchugarry",
    description: "Colocación de aberturas de aluminio, curtainwall y cristales.",
    image: "/images/proyecto-museo-atchugarry.jpg",
    tags: ["Aberturas", "Curtainwall", "Cristales"],
  },
  {
    id: 6,
    title: "Parque Mansa",
    description: "Colocación de aberturas y barandas.",
    image: "/images/proyecto-parque-mansa.jpg",
    tags: ["Aberturas", "Barandas"],
  },
  {
    id: 7,
    title: "Torre Arenas",
    description: "Colocación de aberturas y barandas en Torre 5.",
    image: "/placeholder.svg?height=450&width=800",
    tags: ["Aberturas", "Barandas"],
  },
  {
    id: 8,
    title: "Nouveau Soho",
    description: "Suministro y colocación de aberturas de aluminio, barandas, rejillas y divisores de balcón.",
    image: "/images/proyecto-nouveau-soho.webp",
    tags: ["Aberturas", "Barandas", "Rejillas", "Divisores"],
  },
  {
    id: 9,
    title: "Cipriani",
    description: "Colocación de aberturas de aluminio.",
    image: "/images/proyecto-cipriani.webp",
    tags: ["Aberturas"],
  },
  {
    id: 10,
    title: "Brisas Guaná",
    description: "Colocación de aberturas y barandas.",
    image: "/images/proyecto-brisas-guana.jpg",
    tags: ["Aberturas", "Barandas"],
  },
  {
    id: 11,
    title: "Cosmos",
    description: "Colocación de aberturas de aluminio y cristales.",
    image: "/images/proyecto-cosmos.webp",
    tags: ["Aberturas", "Cristales"],
  },
  {
    id: 12,
    title: "Acapulco Roosevelt",
    description: "Producción y colocación de aberturas de aluminio, cristales y barandas.",
    image: "/images/proyecto-acapulco-roosevelt.jpg",
    tags: ["Aberturas", "Cristales", "Barandas"],
  },
  {
    id: 13,
    title: "INAVI",
    description: "Colocación de fachada vidriada.",
    image: "/images/proyecto-inavi.jpg",
    tags: ["Fachada vidriada"],
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <Link key={work.id} href="#" className="group block">
              <article className="overflow-hidden rounded-3xl border border-border bg-card flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
                  <Image
                    src={work.image || "/placeholder.svg"}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-balance">
                      {work.title}
                    </h3>
                    <ArrowUpRight
                      className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1"
                      style={{ color: "#16307a" }}
                    />
                  </div>

                  <p className="mt-4 text-muted-foreground leading-relaxed">{work.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-6">
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
          ))}
        </div>
      </div>
    </section>
  )
}
