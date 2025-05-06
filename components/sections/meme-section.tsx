import { MotionDiv } from "@/components/use-client-motion"

export default function MemeSection() {
  return (
    <section className="py-8 md:py-12 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <MotionDiv
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">When the code finally works after hours of debugging</h3>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/celebrating-code-cat.png"
                alt="Excited cat with raised paws celebrating code success"
                className="w-full"
              />
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}
