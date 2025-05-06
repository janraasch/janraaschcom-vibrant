"use client"

import { motion } from "framer-motion"
import { SpaceIcon as Yoga, Code } from "lucide-react"

export default function FunClosingSection() {
  return (
    <section className="py-16 md:py-20 bg-background relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold tracking-tight font-heading mb-4">My Secret Formula</h3>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 py-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mb-3">
                <Yoga className="h-8 w-8 text-purple-500" />
              </div>
              <span className="text-sm font-medium">Yoga & Meditation</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl font-light text-muted-foreground"
            >
              +
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-green-500"
                >
                  <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
                  <path d="M13 8h-2a4 4 0 0 0-4 4 4 4 0 0 0 4 4h2"></path>
                  <path d="M14 8V6.5a3.5 3.5 0 0 0-7 0V8"></path>
                  <path d="M14 16v1.5a3.5 3.5 0 0 1-7 0V16"></path>
                </svg>
              </div>
              <span className="text-sm font-medium">Tea</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-4xl font-light text-muted-foreground"
            >
              =
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mb-3">
                <Code className="h-8 w-8 text-white" />
              </div>
              <span className="text-sm font-medium">Great Code</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <p className="text-lg text-muted-foreground">
              To be completely honest, these days it's tea, yoga & meditation more than coffee that's the fuel :)
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
