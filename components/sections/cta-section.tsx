"use client"

import { MotionDiv } from "@/components/use-client-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Calendar } from "lucide-react"
import Link from "next/link"
import ConsultationForm from "@/components/consultation-form"
import { useState } from "react"

interface CTASectionProps {
  headline?: string
  description?: string
}

export default function CTASection({
  headline = "Let's Work Together",
  description = "I'm excited to hear about your project! Please select your preferred way to connect.",
}: CTASectionProps) {
  const [activeTab, setActiveTab] = useState<"email" | "calendar" | null>(null)

  return (
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight font-heading mb-4">{headline}</h2>
            <p className="text-muted-foreground text-lg">{description}</p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 max-w-2xl mx-auto">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full cursor-pointer transition-all" onClick={() => setActiveTab("email")}>
                <CardHeader className="text-center">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/20 flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-yellow-500" />
                  </div>
                  <CardTitle>Send an Email</CardTitle>
                  <CardDescription>Reach out directly to my inbox</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button asChild variant="outline">
                    <Link href="mailto:jan@janraasch.com">Email Me</Link>
                  </Button>
                </CardContent>
              </Card>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full cursor-pointer transition-all" onClick={() => setActiveTab("calendar")}>
                <CardHeader className="text-center">
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-6 w-6 text-purple-500" />
                  </div>
                  <CardTitle>Book a 30min 1-on-1</CardTitle>
                  <CardDescription>Schedule a video call with me</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button asChild variant="outline">
                    <Link href="https://calendly.com/janraasch/30min" target="_blank" rel="noopener noreferrer">
                      Book a Call
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </MotionDiv>
          </div>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold tracking-tight font-heading mb-2">Send a Direct Message</h3>
              <p className="text-muted-foreground">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </div>
            <div id="free-consultation">
              <ConsultationForm />
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}
