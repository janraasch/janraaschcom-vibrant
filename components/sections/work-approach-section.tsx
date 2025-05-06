import { MotionDiv } from "@/components/use-client-motion"

export default function WorkApproachSection() {
  return (
    <section id="work-style" className="py-16 md:py-24 bg-background relative">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight font-heading mb-6">Working Style</h2>
            <p className="text-muted-foreground text-lg">
              As a remote worker, I prioritize focused deep work and asynchronous communication. However, I'm always
              ready to engage in valuable synchronous discussions when needed and enjoy participating in kick-off
              workshops or team meetings in person when possible.
            </p>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold tracking-tight font-heading mb-4">Logistics</h3>
            <p className="text-muted-foreground text-lg">
              My time commitment is tailored to each project's unique needs. For focused projects, I typically dedicate
              2-3 man-days (8 hours each) spread across 3-4 days per week. I'm also available for smaller
              consulting-type engagements, which might involve only one or two calls per month. This flexibility allows
              me to accommodate various project scales and client needs, ensuring I can provide the right level of
              attention and expertise to each engagement.
            </p>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}
