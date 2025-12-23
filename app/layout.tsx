import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import "./globals.css"
import { ThemeProvider } from "./provider"
import Navbar from "@/components/Navbar"
import { Footer } from "@/components/footer"
import { Github, Twitter, Linkedin, Facebook } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GyraLabs - Agentic AI",
  description: "Build, deploy, and orchestrate autonomous AI agents.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className} suppressHydrationWarning>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Footer
              logoSrc="/globe.svg"
              companyName="GyraLabs"
              description="Building agentic AI systems designed for autonomy, memory, and real-time intelligence at scale."
              usefulLinks={[
                { label: "About", href: "/about" },
                { label: "Peanut", href: "/peanut" },
                { label: "Pricing", href: "/pricing" },
                { label: "Contact", href: "/contact" },
              ]}
              socialLinks={[
                { label: "Twitter", href: "#", icon: <Twitter className="h-5 w-5" /> },
                { label: "GitHub", href: "#", icon: <Github className="h-5 w-5" /> },
                { label: "LinkedIn", href: "https://www.linkedin.com/company/gyralabs", icon: <Linkedin className="h-5 w-5" /> },
              ]}
            />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
