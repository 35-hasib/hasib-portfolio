"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Industrial Assessment Trainee",
    company: "SELISE Digital Platforms",
    duration: "May 18 2025 – May 29 2025",
    location: "Midas Center, H-05, R-16 (New) Dhanmondi, Dhaka-1209, Bangladesh",
    description: [
      "Developed a fully functional Contact Management Web Application as part of a two-week industrial assessment.",
      "Built the frontend using Angular and Tailwind CSS, ensuring responsive and modern UI/UX.",
      "Created backend RESTful APIs using Express.js for contact data operations (CRUD).",
      "Implemented data validation, routing, and integrated basic authentication features.",
      "Gained practical exposure to real-world software development workflow and agile methodology.",
    ],
    technologies: ["Angular", "Tailwind CSS", "Express.js", "RESTful APIs"],
  },
  {
    title: "Associate Software Developer",
    company: "iCrew Technologies",
    duration: "Nov 07 2024 – May 09 2025",
    location: "Remote",
    description: [
      "Built and customized e-commerce websites using WordPress and WooCommerce.",
      "Configured WooCommerce core settings (Products, Payments, Shipping, Accounts & Privacy, Emails, Advanced).",
      "Created and managed simple & variable products with attributes such as color and custom pricing.",
      "Customized checkout page and added Buy button for improved user experience.",
      "Troubleshooting product visibility issues between admin and customer views.",
      "Applied HTML & CSS for theme customization (GeneratePress) to enhance site UI/UX.",
      "Prototyped e-commerce sites inspired by Daraz and Star Tech.",
    ],
    technologies: ["WordPress", "WooCommerce", "HTML", "CSS", "GeneratePress"],
  },
]

export function ExperienceSection() {
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
    <section id="experience" ref={sectionRef} className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className={`space-y-12 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <div className="text-center space-y-2">
            <h2 className="text-sm font-mono text-primary uppercase tracking-wider">Experience</h2>
            <h3 className="text-4xl font-bold text-foreground">Professional Journey</h3>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className={`p-8 bg-card border-border transition-all duration-500 hover:shadow-lg ${
                  isVisible ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="space-y-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="space-y-2">
                      <h4 className="text-2xl font-bold text-foreground">{exp.title}</h4>
                      <p className="text-xl text-primary font-semibold">{exp.company}</p>
                    </div>
                    <div className="space-y-2 lg:text-right">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 text-muted-foreground">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-primary mt-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-secondary/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
