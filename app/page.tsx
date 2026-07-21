import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Services } from "@/components/sections/services"
import { SelectedWorks } from "@/components/sections/selected-works"
import { Clients } from "@/components/sections/clients"
import { FinalCTA } from "@/components/sections/final-cta"
import { GradientBar } from "@/components/ui/gradient-bar"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <SelectedWorks />
        <Clients />
        <FinalCTA />
      </main>
      <Footer />
      <GradientBar />
    </>
  )
}
