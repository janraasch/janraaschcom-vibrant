import Link from "next/link"
import { Github, Mail, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col gap-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <Link
              href="mailto:jan@janraasch.com"
              className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>Email</span>
            </Link>
            <Link
              href="https://github.com/janraasch"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </Link>
            <Link
              href="https://huggingface.co/janraasch"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-5 0v-15A2.5 2.5 0 0 1 9.5 2Z" />
                <path d="M14.5 2A2.5 2.5 0 0 1 17 4.5v15a2.5 2.5 0 0 1-5 0v-15A2.5 2.5 0 0 1 14.5 2Z" />
              </svg>
              <span>Hugging Face</span>
            </Link>
          </div>
          <Button asChild variant="outline" className="animate-pulse-slow">
            <Link href="#free-consultation">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule a 30min 1-on-1 now
            </Link>
          </Button>
        </div>
        <div className="text-center text-sm text-foreground/60">
          <p>Feel free to get in touch in English and/or German</p>
          <p className="mt-1">
            © {new Date().getFullYear()} Jan Raasch ·
            <Link href="/imprint" className="ml-1 hover:text-foreground transition-colors">
              Imprint
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
