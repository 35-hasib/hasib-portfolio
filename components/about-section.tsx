"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <div className="space-y-2">
              <h2 className="text-sm font-mono text-primary uppercase tracking-wider">About</h2>
              <h3 className="text-4xl font-bold text-foreground">About Me</h3>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate software developer with expertise in full-stack web development, competitive
                programming, and problem-solving. Currently pursuing my Bachelor's degree in Information and
                Communication Engineering at the University of Rajshahi.
              </p>

              <p>
                My journey in technology spans from building modern web applications with Angular and Express.js to
                achieving recognition in national mathematics olympiads. I thrive on creating efficient, scalable
                solutions and continuously learning new technologies.
              </p>

              <p>
                When I'm not coding, you'll find me solving algorithmic challenges on competitive programming platforms,
                where I've achieved ratings of 1000+ on Codeforces and 1400+ on LeetCode.
              </p>
            </div>
          </div>

          <div className={`${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <Card className="p-8 bg-card border-border">
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-foreground">Quick Facts</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Location</span>
                    <span className="text-foreground">Rajshahi, Bangladesh</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">University</span>
                    <span className="text-foreground">University of Rajshahi</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">GPA</span>
                    <span className="text-foreground">3.60</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Phone</span>
                    <span className="text-foreground">+8801571007636</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
