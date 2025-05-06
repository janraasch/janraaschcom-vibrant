import { MotionDiv } from "../use-client-motion";

export default function ProjectNotification() {
  return (
    <div className="container px-4 md:px-6 mt-4">
    <MotionDiv
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-md bg-accent p-4 text-sm text-accent-foreground mb-4"
      >
        🚀 I'm currently available for new projects.
      </MotionDiv>
    </div>
  )
}