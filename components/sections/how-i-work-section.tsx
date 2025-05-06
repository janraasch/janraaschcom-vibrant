"use client"

import { motion } from "framer-motion"
import { MessageSquare, Code, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function HowIWorkSection() {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight font-heading mb-4">How I Work</h2>
            <p className="text-muted-foreground text-lg">
              My approach is centered around understanding your needs and delivering high-quality solutions that exceed
              expectations.
            </p>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center shrink-0">
                      <MessageSquare className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Discovery & Planning</h3>
                      <p className="text-muted-foreground">
                        We start with a thorough discussion of your project goals, requirements, and constraints. This
                        helps me understand your vision and create a detailed plan for implementation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center shrink-0">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Development & Iteration</h3>
                      <p className="text-muted-foreground">
                        I follow an iterative development process, delivering working versions of your product at
                        regular intervals. This allows for feedback and adjustments throughout the project.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center shrink-0">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Testing & Deployment</h3>
                      <p className="text-muted-foreground">
                        Every feature is thoroughly tested to ensure quality and reliability. Once approved, I handle
                        the deployment process to get your product live and running smoothly.
                      </p>
                    </div>
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
