import GeometricShapes from "@/components/geometric-shapes"
import { MotionDiv } from "@/components/use-client-motion"
import AnimatedText from "@/components/animated-text"
import CTASection from "@/components/sections/cta-section"
import { StickerIcon } from "lucide-react"

export default function BioPage() {
  return (
    <div className="relative">
      <GeometricShapes />

      {/* Hero Section */}
      <section className="relative pt-16 md:pt-24 pb-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-heading mb-4">
                <span className="gradient-text text-glow">Bio</span>
              </h1>
            </MotionDiv>
            <AnimatedText
              text="A brief overview of Jan's professional journey and expertise."
              className="text-xl md:text-2xl font-medium"
              once
            />
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-center justify-center gap-2 mt-4 text-muted-foreground"
            >
              <StickerIcon className="h-4 w-4 hidden sm:inline" />
              <span>Written in 3rd person, because that's how bios work.<span className="sm:hidden"> :-)</span></span>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Bio Content */}
      <section className="py-8 md:py-16 relative">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card border border-border rounded-2xl shadow-lg p-8 md:p-12 space-y-10">
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-foreground leading-relaxed font-light font-sans">
                  <span className="font-bold">Jan Raasch</span> is a versatile full-stack developer with over 13 years of experience in web development. His journey began on the frontend during the transition from jQuery to modern frameworks, and he has since evolved into a comprehensive technologist with a mathematician's approach to problem-solving.
                </p>
              </MotionDiv>

              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-foreground leading-relaxed font-light font-sans">
                  With a strong foundation in Ruby on Rails (10+ years), React, TypeScript, and GraphQL, Jan has recently focused on Elixir & Phoenix LiveView for cutting-edge full-stack development. His mathematical background enables rapid adaptation to new technologies and efficient problem-solving, making him a strong advocate for functional programming principles.
                </p>
              </MotionDiv>

              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-foreground leading-relaxed font-light font-sans">
                  Jan excels at translating product requirements into technical solutions across diverse projects—from MVP creation for startups to delivering high-priority features for established companies. His collaborative approach not only delivers immediate results but also enhances the capabilities of in-house teams, fostering long-term success.
                </p>
              </MotionDiv>

              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-foreground leading-relaxed font-light font-sans">
                In addition to his development expertise, Jan has delved into AI & mechanistic interpretability, having completed the AI Alignment course by BlueDot Impact where his final project earned the Best Interactive Deliverable award.
                </p>
              </MotionDiv>

              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-foreground leading-relaxed font-light font-sans">
                  As a remote worker prioritizing deep focus and asynchronous communication, Jan brings a balanced blend of independent execution and meaningful collaboration to every project he undertakes.
                </p>
              </MotionDiv>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Work with Jan"
        description="Interested in collaborating on a project or learning more about Jan's services?"
      />
    </div>
  )
} 