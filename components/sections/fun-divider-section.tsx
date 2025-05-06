"use client"

import { MotionDiv } from "@/components/use-client-motion"
import { Code, Coffee, Lightbulb } from "lucide-react"

export default function FunDividerSection() {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold tracking-tight font-heading mb-4">How I Work</h3>
            <p className="text-muted-foreground text-lg">Turning coffee into code since 2010</p>
          </MotionDiv>

          <div className="flex justify-center items-center gap-8 md:gap-16 py-6">
            <MotionDiv
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mb-3">
                <Coffee className="h-8 w-8 text-white" />
              </div>
              <span className="text-sm font-medium">Fuel</span>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl font-light text-muted-foreground"
            >
              +
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mb-3">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <span className="text-sm font-medium">Ideas</span>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-4xl font-light text-muted-foreground"
            >
              =
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mb-3">
                <Code className="h-8 w-8 text-white" />
              </div>
              <span className="text-sm font-medium">Solutions</span>
            </MotionDiv>
          </div>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <p className="text-lg font-medium italic">
              "The best code is no code at all. Every new line of code you willingly bring into the world is code that
              has to be debugged, code that has to be read and understood, code that has to be supported."
            </p>
            <p className="mt-2 text-muted-foreground">— Jeff Atwood</p>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}
