import Link from "next/link"
import { ArrowUpRight, MapPin, Phone, Mail } from "lucide-react"

const contactInfo = [
  { icon: MapPin, label: "Dirección", value: "[Completar]" },
  { icon: Phone, label: "Teléfono", value: "[Completar]" },
  { icon: Mail, label: "Mail", value: "[Completar]" },
]

export function FinalCTA() {
  return (
    <section id="contact" className="py-20 border-border md:py-20 border-t-0">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-6">Contacto</p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
            Contactanos
          </h2>

          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Si desea recibir asesoramiento o conocer más sobre nuestros servicios, puede contactarse con nuestro equipo.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 text-left">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-center gap-3 p-5 bg-secondary rounded-2xl">
                <span
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full text-white flex-shrink-0"
                  style={{ background: "#16307a" }}
                >
                  <item.icon className="w-5 h-5" />
                </span>
                <div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                  <div className="text-sm font-medium">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              href="mailto:contacto@dyelux.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white rounded-full transition-all hover:shadow-2xl"
              style={{
                background: "#16307a",
                boxShadow: "0 8px 32px rgba(22, 48, 122, 0.4)",
              }}
            >
              Escribinos
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Closing statement */}
      <div className="mt-20 md:mt-28 py-16 md:py-20 text-white" style={{ background: "#16307a" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <p className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance text-center uppercase">
            Soluciones integrales para tus proyectos
          </p>
        </div>
      </div>
    </section>
  )
}
