"use client"

import { MotionDiv } from "@/components/use-client-motion"
import { Calendar, MapPin } from "lucide-react"
import GeometricShapes from "@/components/geometric-shapes"
import AnimatedText from "@/components/animated-text"
import CTASection from "@/components/sections/cta-section"

export default function NowPage() {
  return (
    <div className="relative">
      <GeometricShapes />

      {/* Hero Section */}
      <section className="relative pt-16 md:pt-24 pb-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-heading mb-4">
                <span className="gradient-text text-glow">Now</span>
              </h1>
            </MotionDiv>
            <AnimatedText
              text="What I'm focused on at this moment in time."
              className="text-xl md:text-2xl font-medium"
              once
            />
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-center justify-center gap-2 mt-4 text-muted-foreground"
            >
              <Calendar className="h-4 w-4" />
              <span>Last updated: April 29, 2025</span>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Now Content */}
      <section className="py-8 md:py-16 relative">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12 p-6 border rounded-lg bg-card"
            >
              <div className="flex items-center gap-2 text-primary mb-4">
                <MapPin className="h-5 w-5" />
                <span className="font-medium">OMR Conference, Hamburg</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">Attending OMR Conference</h2>
              <p className="text-muted-foreground mb-4">
                I'm excited to be attending the Online Marketing Rockstars (OMR) Conference in Hamburg next week! If
                you're also attending, I'd love to connect and chat about technology, development, or potential
                collaborations.
              </p>
              <div className="animate-bounce-slow inline-block">
                <span className="text-xl">👋</span>
              </div>
            </MotionDiv>

            <div className="space-y-12">
              {/* Freelance Work Section */}
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold tracking-tight font-heading mb-4">Freelance Work</h2>
                <p className="text-muted-foreground text-lg">
                  Ready to take on new projects starting Q2 2025! Whether you have a specific project in mind or just
                  want to explore possibilities, let's chat - you can book a free 30-min call, check out my previous
                  work on the hire me page or send me an email to get in touch.
                </p>
              </MotionDiv>

              {/* Open Source Projects Section */}
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold tracking-tight font-heading mb-4">Open Source Projects</h2>
                <h3 className="text-xl font-bold mb-2">BearFeed</h3>
                <p className="text-muted-foreground text-lg">
                  A social feed for you and your close friends. In web arithmetic it is the sum of FriendFeed, Bear Blog
                  & v0. Currently building this with v0.
                </p>
              </MotionDiv>

              {/* AI Explorations Section */}
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold tracking-tight font-heading mb-4">AI Explorations</h2>
                <p className="text-muted-foreground text-lg">
                  Exploring various AI tools including Cursor, v0, and ClaudeAI. As part of this exploration, I'm in the
                  process of building a new version of janraasch.com & isabellmartins.com (my girlfriend's website)
                  using v0.
                </p>
              </MotionDiv>

              {/* Reading Section */}
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold tracking-tight font-heading mb-4">Reading</h2>
                <p className="text-muted-foreground text-lg">
                  Always :). Next up: Tidy First by Kent Beck - Empirical Software Design.
                </p>
              </MotionDiv>

              {/* Yoga Section */}
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold tracking-tight font-heading mb-4">Yoga</h2>
                <p className="text-muted-foreground text-lg">
                  Since I have to cut down on bouldering because of an injury I am focussing a lot more on Yoga. I
                  practice daily, often following along with Adriene Mishler, Tim Senesi or Saturno Movement.
                </p>
              </MotionDiv>
            </div>
          </div>
        </div>
      </section>
      {/* <FunClosingSection /> */}
      <CTASection
        headline="Let's Connect"
        description="Want to know more about what I'm up to or discuss a potential collaboration?"
      />
    </div>
  )
}
