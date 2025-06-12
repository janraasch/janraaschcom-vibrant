import GeometricShapes from "@/components/geometric-shapes"
import HireMeHeroSection from "@/components/sections/hire-me-hero-section"
import IntroSection from "@/components/sections/intro-section"
import CoreCompetenciesSection from "@/components/sections/core-competencies-section"
import WorkApproachSection from "@/components/sections/work-approach-section"
import ServicesSection from "@/components/sections/services-section"
import CTASection from "@/components/sections/cta-section"
import TableOfContents from "@/components/table-of-contents"

export default function HireMePage() {
  const tocItems = [
    { id: "intro", label: "Intro" },
    { id: "skills", label: "Core Competencies" },
    { id: "work-style", label: "Working Style" },
    { id: "services", label: "Services & Expertise" },
    { id: "contact", label: "Ready to Get Started?" },
  ]
  
  return (
    <div className="relative">
      <GeometricShapes />
      <HireMeHeroSection />
      <TableOfContents items={tocItems} />
      <IntroSection />
      <CoreCompetenciesSection />
      <WorkApproachSection />
      <ServicesSection />
      <CTASection headline="Ready to Get Started?" />
    </div>
  )
}
