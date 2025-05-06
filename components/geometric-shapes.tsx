import { MotionDiv } from "@/components/use-client-motion"

export default function GeometricShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <MotionDiv
        className="absolute top-20 left-[10%] w-16 h-16 md:w-24 md:h-24 bg-pink-500/30 rounded-lg"
        animate={{
          y: [0, 30, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <MotionDiv
        className="absolute top-40 right-[15%] w-20 h-20 md:w-32 md:h-32 bg-purple-500/20 rounded-full"
        animate={{
          y: [0, -40, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <MotionDiv
        className="absolute bottom-32 left-[20%] w-24 h-24 md:w-40 md:h-40 bg-yellow-500/20 rotate-45"
        animate={{
          y: [0, 50, 0],
          rotate: [45, 60, 45],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <MotionDiv
        className="absolute bottom-20 right-[25%] w-16 h-16 md:w-20 md:h-20 bg-blue-500/20 rounded-lg"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 9,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
