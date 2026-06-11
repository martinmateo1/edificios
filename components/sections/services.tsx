"use client"

import Image from "next/image"
import { Check } from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"

const services = [
  {
    id: 1,
    label: "A",
    title: "Colocación de aberturas y soluciones de aluminio",
    description:
      "Brindamos servicios especializados de colocación para proyectos residenciales y desarrollos inmobiliarios, con experiencia en coordinación operativa y ejecución en edificios de distintas características y escalas.",
    items: ["Aberturas de aluminio", "Barandas", "Rejillas", "Cerramientos", "Curtainwall", "Soluciones de obra nueva"],
    image: "/images/work-onboarding.png",
  },
  {
    id: 2,
    label: "B",
    title: "Suministro de aberturas y materiales para obra",
    description:
      "Incorporamos soluciones de suministro de aberturas y materiales vinculados al desarrollo de obras nuevas, acompañando las necesidades de constructoras, desarrolladores e inversores.",
    items: ["Calidad", "Diseño", "Funcionalidad", "Eficiencia"],
    image: "/images/work-fashion.png",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 border-border border-t-0">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-12 md:mb-16">
          Servicios
        </SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <article
              key={service.id}
              className="overflow-hidden rounded-3xl border border-border bg-card flex flex-col"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-1">
                <span
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full text-sm font-semibold text-white mb-5"
                  style={{ background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)" }}
                >
                  {service.label}
                </span>

                <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-balance">{service.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{service.description}</p>

                <ul className="grid grid-cols-2 gap-3 mt-6">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 flex-shrink-0" style={{ color: "#203eec" }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
