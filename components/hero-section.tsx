"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Software Developer | Problem Solver | Competitive Programmer"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-slide-in-left">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">MD. Hasibur Rahman</h1>
            <div className="h-12 flex items-center">
              <p className="text-xl lg:text-2xl text-muted-foreground font-mono">
                {displayText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
            I build accessible, pixel-perfect digital experiences for the web, specializing in full-stack development
            with Angular, Express.js, and modern web technologies.
          </p>

          <div className="flex items-center gap-4">
            <Button size="lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/35-hasib" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/in/35-hasibur" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:hrrahman35@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="relative animate-slide-in-right">
          <div className="w-80 h-80 mx-auto relative">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
              <img
                src="/images/hasib-profile.jpg"
                alt="MD. Hasibur Rahman - Software Developer"
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Animated border effect */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/40 animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button variant="ghost" size="icon" asChild>
          <a href="#about">
            <ChevronDown className="h-6 w-6" />
          </a>
        </Button>
      </div>
    </section>
  )
}
