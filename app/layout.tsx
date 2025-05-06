import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Jan Raasch | Full-Stack Developer & Consultant",
  description:
    "Jan Raasch. Hello! I'm Jan, a full-stack developer passionate about creating digital products prioritizing impactful, serene, and human-centric experiences. I have been working as a professional software developer for over 13 years. In a previous life, over 13 years ago, I used to be a mathematician. If you want to learn more about my services and how we can work together, reach out!",
  generator: 'v0.dev',
  keywords: [
    "Full-Stack Developer",
    "Consultant",
    "Software Engineer",
    "Web Developer",
    "Mobile Developer",
    "Full-Stack Development",
    "Digital Product Development",
    "Impactful Experiences",
    "Human-Centric",
    "Consulting",
    "Software Development",
    "Web Development",
    "Mobile Development",
    "Jan Raasch"
  ],
  authors: [{ name: "Jan Raasch" }],
  creator: "Jan Raasch",
  publisher: "Jan Raasch",
  metadataBase: new URL("https://www.janraasch.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jan Raasch, full-stack developer & consultant",
    description:
      "Hello! I'm Jan, a full-stack developer passionate about creating digital products prioritizing impactful, serene, and human-centric experiences. I have been working as a professional software developer for over 13 years. In a previous life, over 13 years ago, I used to be a mathematician. If you want to learn more about my services and how we can work together, reach out!",
    url: "https://www.janraasch.com",
    siteName: "Jan Raasch | Full-Stack Developer & Consultant",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: 'https://www.janraasch.com/images/og-image-home-available-for-new-projects.jpg', // Must be an absolute URL
        width: 1200,
        height: 630,
        alt: 'Jan Raasch | Full-Stack Developer & Consultant'
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jan Raasch | Full-Stack Developer & Consultant",
    description:
      "Hello! I'm Jan, a full-stack developer passionate about creating digital products prioritizing impactful, serene, and human-centric experiences. I have been working as a professional software developer for over 13 years. In a previous life, over 13 years ago, I used to be a mathematician. If you want to learn more about my services and how we can work together, reach out!",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
