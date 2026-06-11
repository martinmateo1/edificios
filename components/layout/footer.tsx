"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter, Dribbble } from "lucide-react"

const socialLinks = [
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
  { href: "#", icon: Github, label: "GitHub" },
  { href: "#", icon: Dribbble, label: "Dribbble" },
]

const footerLinks = [
  { href: "/", label: "Inicio" },
  { href: "#about", label: "Quiénes somos" },
  { href: "#services", label: "Servicios" },
  { href: "#works", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
]

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              DYELUX
            </Link>
            <p className="mt-4 text-muted-foreground text-sm max-w-xs leading-relaxed">
              Soluciones integrales en aluminio para desarrollos inmobiliarios y obras nuevas: colocación, suministro,
              barandas y cerramientos.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-full bg-secondary transition-colors hover:bg-opacity-10"
                  style={{ ["--hover-bg" as any]: "#16307a20" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#16307a20")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" style={{ color: "#16307a" }} />
                </Link>
              ))}
            </div>
            <div className="mt-4">
              <Link
                href="mailto:contacto@dyelux.com"
                className="text-sm transition-colors hover:underline"
                style={{ color: "#16307a" }}
              >
                contacto@dyelux.com
              </Link>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Navegación</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Contacto</h4>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              ¿Tenés un proyecto en marcha? Escribinos y nuestro equipo te asesora.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white rounded-full transition-all"
              style={{
                background: "#16307a",
                boxShadow: "0 4px 20px rgba(22, 48, 122, 0.3)",
              }}
            >
              Contactanos
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-16 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} DYELUX. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Política de privacidad
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Términos del servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
