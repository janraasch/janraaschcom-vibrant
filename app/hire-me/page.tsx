import GeometricShapes from "@/components/geometric-shapes"
import HireMeHeroSection from "@/components/sections/hire-me-hero-section"
import IntroSection from "@/components/sections/intro-section"
import CoreCompetenciesSection from "@/components/sections/core-competencies-section"
import WorkApproachSection from "@/components/sections/work-approach-section"
import ServicesSection from "@/components/sections/services-section"
import CTASection from "@/components/sections/cta-section"

export default function HireMePage() {
  return (
    <div className="relative">
      <GeometricShapes />
      <HireMeHeroSection />
      <IntroSection />
      <CoreCompetenciesSection />
      <WorkApproachSection />
      <ServicesSection />
      <CTASection headline="Ready to Get Started?" />
    </div>
  )
}
