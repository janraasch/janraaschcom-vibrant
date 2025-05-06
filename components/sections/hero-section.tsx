"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import AnimatedText from "@/components/animated-text"
import ProfileImage from "@/components/profile-image"

export default function HeroSection() {
  return (
    <section className="relative pt-16 md:pt-24 pb-16 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 space-y-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight font-heading">
                <span className="gradient-text text-glow">Hello! I'm Jan,</span>
              </h1>
            </motion.div>
            <AnimatedText
              text="a full-stack developer passionate about creating digital products prioritizing impactful, serene, and human-centric experiences."
              className="text-xl md:text-2xl font-medium"
              once
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-muted-foreground text-lg"
            >
              I have been working as a professional software developer for over 13 years. In a previous life, over 13
              years ago, I used to be a mathematician.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="gradient-bg">
                <Link href="/hire-me">
                  Hire Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
          <div className="flex-1 flex justify-center">
            <ProfileImage />
          </div>
        </div>
      </div>
    </section>
  )
}
