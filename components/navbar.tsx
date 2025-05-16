"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"
import { MotionDiv } from "@/components/use-client-motion"
import { AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <MotionDiv initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-2xl font-bold gradient-text font-heading">janraasch.com</span>
          </MotionDiv>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <MotionDiv
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link href="/now" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              Now
            </Link>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/bio" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              Bio
            </Link>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="/hire-me" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              Hire Me
            </Link>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button asChild className="gradient-bg">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <ModeToggle />
          </MotionDiv>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <MotionDiv
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-md"
          >
            <div className="container py-4 flex flex-col gap-4">
              <Link
                href="/"
                className="py-2 text-foreground/80 hover:text-foreground transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/now"
                className="py-2 text-foreground/80 hover:text-foreground transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Now
              </Link>
              <Link
                href="/bio"
                className="py-2 text-foreground/80 hover:text-foreground transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Bio
              </Link>
              <Link
                href="/hire-me"
                className="py-2 text-foreground/80 hover:text-foreground transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Hire Me
              </Link>
              <Button asChild className="gradient-bg w-full">
                <Link href="mailto:jan@janraasch.com" onClick={() => setIsOpen(false)}>
                  Get in Touch
                </Link>
              </Button>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </header>
  )
}
