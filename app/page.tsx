import GeometricShapes from "@/components/geometric-shapes"
import HeroSection from "@/components/sections/hero-section"
import TechStackSection from "@/components/sections/tech-stack-section"
import ServicesSection from "@/components/sections/services-section"
import CTASection from "@/components/sections/cta-section"
import MemeSection from "@/components/sections/meme-section"

export default function Home() {
  return (
    <div className="relative">
      <GeometricShapes />
      <HeroSection />
      <TechStackSection />
      <ServicesSection />
      <CTASection />
      <MemeSection />
    </div>
  )
}
