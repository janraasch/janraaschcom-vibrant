"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function ExperienceSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/50 relative geometric-bg">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight font-heading mb-4">What I've Done</h2>
            <p className="text-muted-foreground text-lg">
              With over 13 years of experience, I've worked on a wide range of projects across various industries.
            </p>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">E-commerce Platforms</h3>
                  <p className="text-muted-foreground mb-4">
                    Developed scalable e-commerce solutions with secure payment processing, inventory management, and
                    personalized user experiences.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm">React</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm">Node.js</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm">PostgreSQL</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm">AWS</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">AI-Powered Applications</h3>
                  <p className="text-muted-foreground mb-4">
                    Integrated machine learning models into web applications for content generation, data analysis, and
                    predictive features.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm">Python</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm">TensorFlow</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm">Next.js</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm">Hugging Face</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">SaaS Products</h3>
                  <p className="text-muted-foreground mb-4">
                    Built subscription-based software services with robust authentication, payment processing, and user
                    management systems.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm">TypeScript</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm">React</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm">Node.js</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm">MongoDB</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
