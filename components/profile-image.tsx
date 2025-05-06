"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl transition-all duration-500 group hover:scale-105 hover:rotate-3 hover:shadow-2xl">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jan-raasch-profile-v1.jpg-XvNtnm732PVovc6skMJHvzUul4RvB9.jpeg"
          alt="Jan Raasch"
          fill
          className="object-cover transition-all duration-500 group-hover:scale-110"
          priority
        />
      </div>
      <motion.div
        className="absolute -top-4 -right-4 w-20 h-8 bg-pink-500/70 rounded-md"
        animate={{
          y: [0, 5, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-4 -left-4 w-16 h-16 bg-yellow-500/70 rotate-45"
        animate={{
          y: [0, -5, 0],
          rotate: [45, 55, 45],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 -right-8 w-12 h-4 bg-purple-500/70 rounded-md"
        animate={{
          x: [0, 5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  )
}
