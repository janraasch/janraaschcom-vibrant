"use client"

import { motion } from "framer-motion"
import { Clock, MessageSquare, Laptop } from "lucide-react"

export default function WorkingStyleSection() {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold tracking-tight font-heading mb-4">Working Style</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              As a remote worker, I prioritize focused deep work and asynchronous communication. However, I'm always
              ready to engage in valuable synchronous discussions when needed and enjoy participating in kick-off
              workshops or team meetings in person when possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Deep Focus</h3>
              <p className="text-muted-foreground">
                I structure my day around focused work blocks to maximize productivity and creative problem-solving.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mb-4">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Clear Communication</h3>
              <p className="text-muted-foreground">
                I value thoughtful, well-documented communication that respects everyone's time and priorities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mb-4">
                <Laptop className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Flexible Collaboration</h3>
              <p className="text-muted-foreground">
                While I thrive in asynchronous environments, I'm always available for real-time collaboration when it
                adds value.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-lg font-medium italic">
              "The best code is no code at all. Every new line of code you willingly bring into the world is code that
              has to be debugged, code that has to be read and understood, code that has to be supported."
            </p>
            <p className="mt-2 text-muted-foreground">— Jeff Atwood</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
