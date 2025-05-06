"use client"

import { motion } from "framer-motion"
import TechStack from "@/components/tech-stack"

export default function TechStackSection() {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight font-heading mb-4">My Tech Stack</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Technologies I've worked with to help my clients achieve their vision.
            </p>
          </motion.div>
        </div>
        <TechStack
          technologies={[
            { name: "React", icon: "⚛️" },
            { name: "Next.js", icon: "▲" },
            { name: "Ruby on Rails", icon: "💎" },
            { name: "GraphQL", icon: "💠" },
            { name: "TypeScript", icon: "🔷" },
            { name: "Elixir/Phoenix", icon: "🔥" },
            { name: "AI", icon: "🤖", link: "/hire-me" },
            { name: "No/Low-Code", icon: "🧙‍♂️" },
          ]}
        />
      </div>
    </section>
  )
}
