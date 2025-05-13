"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { MotionDiv, MotionForm } from "@/components/use-client-motion"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ConsultationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [privacyAccepted, setPrivacyAccepted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    surname: "",
  })
  const [formError, setFormError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    if (!privacyAccepted) {
      setFormError("Please accept the privacy policy to continue.")
      return
    }

    setFormError("")
    setIsSubmitting(true)

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          ...formData,
        }).toString(),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        setFormError("Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error(error)
      setFormError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div id="free-consultation" className="w-full max-w-md mx-auto">
      {!isSubmitted ? (
        <MotionForm
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          name="contact"
          method="POST"
        >
          <input type="hidden" name="form-name" value="consultation" />
          <div className="hidden">
            <Input
              type="text"
              name="surname"
              tabIndex={-1}
              autoComplete="off"
              value={formData.surname}
              onChange={handleChange}
            />
          </div>
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <Textarea
              name="message"
              placeholder="What would you like to discuss?"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="privacy"
              checked={privacyAccepted}
              required
              onCheckedChange={(checked) => setPrivacyAccepted(checked as boolean)}
              className="mt-1.5"
            />
            <label htmlFor="privacy" className="text-sm text-muted-foreground leading-tight cursor-pointer">
              I consent to my data being processed as described in the{" "}
              <Link href="/imprint" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                privacy policy
              </Link>
              .
            </label>
          </div>

          {formError && <p className="text-sm text-red-500">{formError}</p>}

          <Button type="submit" className="w-full gradient-bg" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send a message"}
          </Button>
        </MotionForm>
      ) : (
        <MotionDiv
          className="text-center py-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <CheckCircle className="w-16 h-16 mx-auto text-green-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Thanks for reaching out!</h3>
        </MotionDiv>
      )}
    </div>
  )
}
