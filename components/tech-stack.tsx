"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

interface Technology {
  name: string
  icon: string
  link?: string
}

interface TechStackProps {
  technologies: Technology[]
}

export default function TechStack({ technologies }: TechStackProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
      {technologies.map((tech, index) => {
        // Create card content once to avoid duplication
        const cardContent = (
          <Card className={`h-full transition-all ${tech.link ? "cursor-pointer animate-pulse-gradient" : ""}`}>
            <CardContent className="flex flex-col items-center justify-center p-6 h-full relative z-10">
              <span className="text-4xl mb-2">{tech.icon}</span>
              <h3 className="font-medium">{tech.name}</h3>
            </CardContent>
          </Card>
        )

        return (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            {tech.link ? <Link href={tech.link}>{cardContent}</Link> : cardContent}
          </motion.div>
        )
      })}
    </div>
  )
}
