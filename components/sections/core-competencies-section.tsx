import type React from "react"

import { MotionDiv } from "@/components/use-client-motion"
import { Server, Code, GitGraphIcon as GraphQl, Zap, Sparkles, Rocket } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface CompetencyCardProps {
  title: string
  description: string
  icon: React.ElementType
  delay?: number
  link?: string
}

function CompetencyCard({ title, description, icon: Icon, delay = 0, link }: CompetencyCardProps) {
  const cardContent = (
    <Card className={`h-full transition-all ${link ? "cursor-pointer hover:shadow-md" : ""}`}>
      <CardHeader>
        <div className="mb-2 w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  )

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="h-full"
    >
      {link ? <Link href={link}>{cardContent}</Link> : cardContent}
    </MotionDiv>
  )
}

export default function CoreCompetenciesSection() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/50 relative geometric-bg">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight font-heading mb-4">Core Competencies</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My technical expertise spans a wide range of technologies and approaches, allowing me to tackle diverse
              challenges.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CompetencyCard
              title="Backend Development"
              description="10+ years of Ruby on Rails expertise"
              icon={Server}
              delay={0}
            />
            <CompetencyCard
              title="Frontend Development"
              description="Proficient in React, TypeScript, and modern JavaScript frameworks like NextJS"
              icon={Code}
              delay={1}
            />
            <CompetencyCard
              title="Full-Stack Integration"
              description="Skilled in GraphQL for seamless frontend-backend integration"
              icon={GraphQl}
              delay={2}
            />
            <CompetencyCard
              title="Emerging Technologies"
              description="Recent focus on Elixir & Phoenix LiveView for cutting-edge full-stack development"
              icon={Zap}
              delay={3}
            />
            <CompetencyCard
              title="AI & Mechanistic Interpretability"
              description="Completed AI Alignment course by BlueDot Impact and was awarded Best Interactive Deliverable for final project"
              icon={Sparkles}
              delay={4}
              link="https://bluedot.org/projects/activate-love-steering-ai-text-generation"
            />
            <CompetencyCard
              title="No/Low-Code & Rapid Prototyping"
              description="Adept at leveraging no-code tools like Bubble.io, Airtable, and Retool for quick MVP development"
              icon={Rocket}
              delay={5}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
