"use client"

import { motion } from "framer-motion"
import { Code, Unplug, Users, Target, Lightbulb, Rocket } from "lucide-react"
import ServiceCard from "@/components/service-card"

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-muted/50 relative geometric-bg">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight font-heading mb-4">My Services & Expertise</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From working with founders to build their first MVPs to delivering high-priority features for larger
              companies, I've successfully contributed to a diverse range of projects.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            title="Full-Stack Development"
            description="Full-circle frontend and backend integration w/o communication bottlenecks to ensure seamless implementation from database to user interface."
            icon={Code}
            delay={0}
          />
          <ServiceCard
            title="Project Acceleration"
            description="Kick-starting major projects, integrating with internal & external staff, and providing ongoing technical support."
            icon={Users}
            delay={1}
          />
          <ServiceCard
            title="Strategic Delivery"
            description="Efficiently delivering high-priority features that drive business value while navigating complex organizational requirements."
            icon={Target}
            delay={2}
          />
          <ServiceCard
            title="Technical Consulting"
            description="Expert guidance on architecture, technology choices, and implementation strategies for your specific needs."
            icon={Lightbulb}
            delay={3}
          />
          <ServiceCard
            title="MVP Development"
            description="Rapid prototype development and MVP creation leveraging AI agents to accelerate development cycles and build innovative early-stage products."
            icon={Rocket}
            delay={4}
          />
          <ServiceCard
            title="API Development"
            description="Secure & scalable! Using robust authentication strategies and creating well-documented endpoints for partners and developers."
            icon={Unplug}
            delay={5}
          />
        </div>
      </div>
    </section>
  )
}
