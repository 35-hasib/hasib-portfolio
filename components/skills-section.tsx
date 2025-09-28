"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Trophy } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Globe,
    skills: ["Angular", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "Backend Development",
    icon: Database,
    skills: ["Express.js", "Node.js", "RESTful APIs", "SQL", "Database Design", "Authentication"],
  },
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "C", "Kotlin"],
  },
  {
    title: "Problem Solving",
    icon: Trophy,
    skills: ["Data Structures", "Algorithms", "Competitive Programming", "OOP", "System Design"],
  },
]

const competitiveProgramming = [
  { platform: "Codeforces", rating: "1000+", profile: "Codeforces" },
  { platform: "Codechef", rating: "1300+", profile: "Codechef" },
  { platform: "AtCoder", rating: "100+", profile: "Atcoder" },
  { platform: "LeetCode", rating: "1400+", profile: "Leetcode", problems: "300+" },
]

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`space-y-12 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <div className="text-center space-y-2">
            <h2 className="text-sm font-mono text-primary uppercase tracking-wider">Skills</h2>
            <h3 className="text-4xl font-bold text-foreground">Technical Expertise</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card
                  key={index}
                  className={`p-6 bg-card border-border transition-all duration-500 hover:shadow-lg ${
                    isVisible ? "animate-slide-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <IconComponent className="h-6 w-6 text-primary" />
                      <h4 className="text-xl font-semibold text-foreground">{category.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="border-primary/30 hover:bg-primary/10 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          <Card
            className={`p-8 bg-card border-border ${isVisible ? "animate-slide-up" : "opacity-0"}`}
            style={{ animationDelay: "600ms" }}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Trophy className="h-6 w-6 text-accent" />
                <h4 className="text-2xl font-semibold text-foreground">Competitive Programming Profile</h4>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {competitiveProgramming.map((platform, index) => (
                  <div key={index} className="p-4 rounded-lg bg-muted/30 border border-border text-center space-y-2">
                    <h5 className="font-semibold text-foreground">{platform.platform}</h5>
                    <div className="space-y-1">
                      <p className="text-2xl font-bold text-primary">{platform.rating}</p>
                      {platform.problems && <p className="text-sm text-muted-foreground">{platform.problems} solved</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
