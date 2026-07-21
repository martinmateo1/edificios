"use client"

const values = [
  { title: "Calidad", description: "Compromiso con altos estándares de ejecución y terminación." },
  { title: "Experiencia", description: "Trayectoria en proyectos de distinta escala y complejidad." },
  {
    title: "Capacidad operativa",
    description: "Ejecución en obras de distintas escalas y soluciones técnicas adaptadas a cada proyecto.",
  },
  { title: "Cumplimiento", description: "Planificación y responsabilidad en tiempos de obra." },
]

import { SectionTitle } from "@/components/ui/section-title"

export function About() {
  return (
    <section id="about" className="border-border border-t-0">
      {/* Parallax image band */}
      <div
        aria-label="Proyecto Forum, obra de aluminio realizada por DYELUX"
        role="img"
        className="h-[50vh] md:h-[70vh] bg-cover bg-center bg-fixed bg-no-repeat"
        style={{ backgroundImage: "url('/images/proyecto-forum.png')" }}
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Quiénes somos</p>
            <div className="space-y-3">
              <SectionTitle className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-balance">
                +28 años de experiencia en el mercado
              </SectionTitle>
              <SectionTitle className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-balance">
                +50 proyectos ejecutados
              </SectionTitle>
              <SectionTitle className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-balance">
                +100.000 m² instalados
              </SectionTitle>
            </div>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              DYELUX es una empresa especializada en soluciones de aluminio para desarrollos inmobiliarios y obras
              nuevas. A lo largo de los años hemos participado en múltiples proyectos junto a desarrolladores,
              constructoras e inversores, consolidando una trayectoria basada en calidad de materiales y ejecución,
              cumplimiento, confianza y profesionalismo.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Nuestro trabajo combina experiencia técnica, capacidad operativa y conocimiento real de las necesidades
              del sector de la construcción.
            </p>
          </div>

          {/* Right Content - Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value) => (
              <div key={value.title} className="p-6 bg-secondary rounded-2xl">
                <h3 className="text-lg font-semibold">{value.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
