"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, Award } from "lucide-react"

const achievements = [
  {
    title: "2nd Place",
    event: "15th National Undergraduate Mathematics Olympiad 2024",
    region: "Rajshahi region",
  },
  {
    title: "3rd Place",
    event: "14th National Undergraduate Mathematics Olympiad 2023",
    region: "Rajshahi region",
  },
]

const coursework = [
  "Data Structures & Algorithms",
  "Web Development",
  "Software Engineering",
  "Machine Learning",
  "SQL",
]

export function EducationSection() {
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
    <section id="education" ref={sectionRef} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`space-y-12 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <div className="text-center space-y-2">
            <h2 className="text-sm font-mono text-primary uppercase tracking-wider">Education</h2>
            <h3 className="text-4xl font-bold text-foreground">Academic Background</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className={`p-8 bg-card border-border ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-8 w-8 text-primary" />
                  <div>
                    <h4 className="text-2xl font-bold text-foreground">Bachelor of Science in Engineering</h4>
                    <p className="text-lg text-primary">University of Rajshahi</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>01/2020 - Current</span>
                  </div>

                  <div className="space-y-2">
                    <p className="text-foreground font-semibold">
                      Department of Information and Communication Engineering
                    </p>
                    <p className="text-muted-foreground">
                      Current GPA: <span className="text-primary font-semibold">3.60</span>
                    </p>
                    <p className="text-muted-foreground">Location: Rajshahi, Bangladesh</p>
                  </div>

                  <div className="space-y-3">
                    <h5 className="text-lg font-semibold text-foreground">Relevant Coursework</h5>
                    <div className="flex flex-wrap gap-2">
                      {coursework.map((course) => (
                        <Badge key={course} variant="outline" className="border-primary/30">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className={`p-8 bg-card border-border ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Award className="h-8 w-8 text-accent" />
                  <h4 className="text-2xl font-bold text-foreground">Achievements</h4>
                </div>

                <div className="space-y-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="space-y-2 p-4 rounded-lg bg-muted/30 border border-border">
                      <div className="flex items-center gap-2">
                        <Badge variant="default" className="bg-accent text-accent-foreground">
                          {achievement.title}
                        </Badge>
                      </div>
                      <h5 className="font-semibold text-foreground">{achievement.event}</h5>
                      <p className="text-sm text-muted-foreground">{achievement.region}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
