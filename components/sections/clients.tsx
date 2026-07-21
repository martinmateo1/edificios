import Image from "next/image"

const clients = [
  { name: "Norte Construcciones", src: "/images/clients/norte.png" },
  { name: "Alumex", src: "/images/clients/alumex.png" },
  { name: "Alufran", src: "/images/clients/alufran.png" },
  { name: "Corallo Aberturas", src: "/images/clients/corallo.png" },
  { name: "Blende", src: "/images/clients/blende.png" },
  { name: "Criba", src: "/images/clients/criba.png" },
]

export function Clients() {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-10 md:mb-14">
          Empresas que confían en nosotros
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-10 items-center">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center"
            >
              <Image
                src={client.src}
                alt={client.name}
                width={160}
                height={80}
                className="w-full max-w-[140px] h-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
