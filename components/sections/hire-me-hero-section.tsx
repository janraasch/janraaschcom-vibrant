import { MotionDiv } from "@/components/use-client-motion"
import AnimatedText from "@/components/animated-text"

export default function HireMeHeroSection() {
  return (
    <section id="hero" className="relative pt-16 md:pt-24 pb-16">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-heading mb-4">
              <span className="gradient-text text-glow">Hire Me</span>
            </h1>
          </MotionDiv>
          <AnimatedText
            text="Let's create something amazing together. I offer a range of services to help you build and improve your digital products."
            className="text-xl md:text-2xl font-medium"
            once
          />
        </div>
      </div>
    </section>
  )
}
