import { MotionDiv } from "@/components/use-client-motion"

export default function IntroSection() {
  return (
    <section id="intro" className="py-16 md:py-24 relative">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight font-heading mb-6">Intro</h2>
            <div className="space-y-6 text-lg">
              <p className="text-muted-foreground">
                With over 13 years of experience in web development, I bring a unique blend of mathematical
                problem-solving skills and technical prowess to every project.
              </p>
              <p className="text-muted-foreground">
                My journey began on the frontend during the twilight of jQuery and the dawn of technologies like
                Backbone, NodeJS and Grunt. Today, I'm a versatile full-stack developer. I thrive on translating product
                requirements into technical solutions.
              </p>
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold tracking-tight font-heading mb-4">Approach</h3>
            <p className="text-muted-foreground text-lg">
              My background in mathematics enables me to quickly adapt to new technologies and solve complex problems
              efficiently. I'm a strong advocate for functional programming and believe in building small prototypes to
              test ideas early in the development process.
            </p>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}
