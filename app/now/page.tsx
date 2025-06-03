import Link from "next/link"
import { Calendar, MapPin } from "lucide-react"
import { MotionDiv } from "@/components/use-client-motion"
import GeometricShapes from "@/components/geometric-shapes"
import AnimatedText from "@/components/animated-text"
import CTASection from "@/components/sections/cta-section"

export default function NowPage() {
  return (
    <div className="relative">
      <GeometricShapes />

      {/* Hero Section */}
      <section className="relative pt-16 md:pt-24 pb-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-heading mb-4">
                <span className="gradient-text text-glow">Now</span>
              </h1>
            </MotionDiv>
            <AnimatedText
              text="What I'm focused on at this moment in time."
              className="text-xl md:text-2xl font-medium"
              once
            />
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-center justify-center gap-2 mt-4 text-muted-foreground"
            >
              <Calendar className="h-4 w-4 hidden sm:inline" />
              <span>Last updated June 3, 2025, from my home in Lübeck, Germany.</span>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Now Content */}
      <section className="py-8 md:py-16 relative">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12 p-6 border rounded-lg bg-card"
            >
              <div className="text-primary mb-4">
                <Link href="https://www.google.com/maps/place/Lübeck" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span className="font-medium">Lübeck, Germany</span>
                </Link>
              </div>
              <h2 className="text-2xl font-bold mb-4">Birthday Month 🎉</h2>
              <p className="text-muted-foreground mb-4">
                It's my birthday this month! Celebrating another year and enjoying the good birthday vibes.
              </p>
              <p className="text-muted-foreground mb-4">
                If you'd like to send birthday wishes or just want to connect, <Link href="#contact" className="text-primary hover:underline">feel free to reach out</Link>!
              </p>
              <div className="animate-bounce-slow inline-block">
                <span className="text-xl">🎂</span>
              </div>
            </MotionDiv>

            <div className="space-y-12">
              {/* Freelance Work Section */}
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold tracking-tight font-heading mb-4">Freelance Work</h2>
                <p className="text-muted-foreground text-lg">
                  Ready to take on new projects starting Q2 2025! Whether you have a specific project in mind or just
                  want to explore possibilities, let's chat - you can book a <Link href="https://calendly.com/jan-raasch/office-hours" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">free 30-min call</Link>, check out my previous
                  work on the <Link href="/hire-me" className="text-primary hover:underline">hire me</Link> page or <Link href="mailto:jan@janraasch.com" className="text-primary hover:underline">send me an email</Link> to get in touch.
                </p>
              </MotionDiv>

              {/* Open Source Projects Section */}
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h2 id="bear-feed" className="text-2xl font-bold tracking-tight font-heading mb-4">ʕ •ᴥ• ʔ Bear Feed</h2>
                <p className="text-muted-foreground text-lg mb-2">
                  A simple, content-focused social platform where you can share thoughts and connect with friends. In web arithmetic it is the sum of <Link href="http://blog.friendfeed.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">FriendFeed</Link>, 
                  {" "}<Link href="https://bearblog.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Bear Blog</Link>
                  {" "}& <Link href="https://v0.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">v0</Link>.
                </p>
                <p className="text-muted-foreground text-lg mb-2">
                  I initially considered building this with <Link href="https://rubyonrails.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Rails</Link>. However, I wanted the project to be something anyone could easily run, edit, and extend, so I chose <Link href="https://v0.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">v0</Link> instead. I'm excited to see what new possibilities the increasing accessibility of web development will bring.
                </p>
                <div className="text-muted-foreground text-lg transition-all group inline-block">
                    <span>Currently in alpha with two close friends </span>
                    <span className="inline-block group-hover:hidden">ʕっ•ᴥ•ʔっ🥳.</span>
                    <span className="hidden group-hover:inline-block">ʕᵔᴥᵔʔﾉ☆ﾟ.*･｡ﾟ🎊.</span>
                </div>
              </MotionDiv>

              {/* AI Explorations Section */}
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold tracking-tight font-heading mb-4">AI Explorations</h2>
                <p className="text-muted-foreground text-lg mb-2">
                  I'm thoroughly enjoying the process of exploring a range of AI tools, including <Link href="https://cursor.sh" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Cursor</Link>, <Link href="https://v0.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">v0</Link>, and <Link href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Claude AI</Link>. 
                </p>
                <p className="text-muted-foreground text-lg">
                  This site is a product of my experiments with <Link href="https://v0.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">v0</Link>, and I've recently released a new version of <Link href="https://www.isabellmartins.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.isabellmartins.de</Link> (my fiancée's website) built with the same technology. It's been both fun and insightful to see what these tools can do!
                </p>
              </MotionDiv>

              {/* Reading Section */}
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold tracking-tight font-heading mb-4">Reading</h2>
                <p className="text-muted-foreground text-lg">
                  Next up: <Link href="https://www.oreilly.com/library/view/tidy-first/9781098151232" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Tidy First?</Link> by Kent Beck. His talk on <Link href="https://events.zoom.us/ev/AoBzBRhcVMMq4J3MKjDkLjKXiYznxXar-HuG7ZR1B0HClF3DRAcL~AoVa6EvJ3UVK8t3V_A6F2wHac2fZueGMdfvHz7XEuHcGevPQekb6RavBRQ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Empirical Software Design: When & Why</Link> (Spoiler alert: make design decisions later and in small, safe steps :)) really sparked my interest. If you're interested, check out the recording of the talk.
                </p>
              </MotionDiv>

              {/* Yoga Section */}
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold tracking-tight font-heading mb-4">Yoga</h2>
                <p className="text-muted-foreground text-lg">
                  While recovering from a shoulder injury (no bouldering for me for now...), I've deepened my yoga practice. 
                  I practice daily, often following along with <Link href="https://yogawithadriene.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Adriene Mishler</Link>,{" "}
                  <Link href="https://www.timsenesiyoga.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Tim Senesi</Link>,{" "}
                  or <Link href="https://saturnomovement.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Gabo Saturno</Link>.
                </p>
              </MotionDiv>

              {/* Gaming Section */}
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold tracking-tight font-heading mb-4">Gaming</h2>
                <p className="text-muted-foreground text-lg mb-2">
                Just finished <Link 
                  href="https://www.ea.com/games/split-fiction/split-fiction" 
                  target="_blank" rel="noopener noreferrer" 
                  className="text-primary hover:underline"
                >
                Split Fiction
                </Link> with my fiancée - what an absolute blast! Gameplay-wise, it's a little bit harder than <Link 
                  href="https://www.ea.com/games/it-takes-two/it-takes-two" 
                  target="_blank" rel="noopener noreferrer" 
                  className="text-primary hover:underline"
                >It Takes Two
                </Link> - developed by the same team - but that makes it even more rewarding.
                </p>
                <div className="text-muted-foreground text-lg transition-all group inline-block">
                  Plus, I'm very excited about the{' '}
                  <Link 
                    href="https://www.nintendo.com/us/gaming-systems/switch-2/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:underline"
                  >
                    Switch 2
                  </Link>{' '}
                  launch & a new <Link 
                    href="https://www.nintendo.com/us/gaming-systems/switch-2/featured-games/mario-kart-world/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:underline"
                  >
                    Mario Kart
                  </Link> game {' '}
                  <span className="inline-block group-hover:hidden">🏎️ 💣 🏎️ 🏎️.</span>
                  <span className="hidden group-hover:inline-block">🏎️ 💥 🏎️ ... 🏎️.</span>
                </div>
              </MotionDiv>
            </div>
          </div>
        </div>
      </section>
      <CTASection
        headline="Let's Connect"
        description="Want to know more about what I'm up to or discuss a potential collaboration?"
      />
    </div>
  )
}
