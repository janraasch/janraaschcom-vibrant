"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionLink {
  id: string
  label: string
}

interface SectionNavigationProps {
  sections: SectionLink[]
}

export default function SectionNavigation({ sections }: SectionNavigationProps) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || "")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100 // Offset for better UX

      // Find the section that is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id)
        if (section) {
          const sectionTop = section.offsetTop
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i].id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [sections])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for header
        behavior: "smooth",
      })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed left-0 right-0 top-20 z-40 flex justify-center pointer-events-none"
    >
      <div className="bg-background/80 backdrop-blur-md shadow-md rounded-full px-4 py-2 pointer-events-auto">
        <nav className="flex space-x-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={cn(
                "px-3 py-1.5 text-sm font-medium rounded-full transition-colors",
                activeSection === section.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted",
              )}
              aria-current={activeSection === section.id ? "page" : undefined}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </div>
    </motion.div>
  )
}
