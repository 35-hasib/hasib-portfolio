"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Contact Management System",
    description:
      "A fully functional contact management web application developed during Industrial Assessment at SELISE Digital Platforms. Features comprehensive CRUD operations, responsive UI, and RESTful API integration.",
    technologies: ["Angular", "Tailwind CSS", "Express.js", "RESTful API"],
    features: [
      "Add, Edit, Delete, View Contacts",
      "Responsive UI Design",
      "RESTful API Integration",
      "Data Validation",
      "Authentication Features",
    ],
    link: "https://contact-management-system-lyart-delta.vercel.app/",
    github: "https://github.com/35-hasib/Contact-Management-System",
  },
  {
    title: "Ketlin Kuuskne – Wellness Coach Website",
    description:
      "A comprehensive wellness coaching website showcasing services, blog, events, books, and client testimonials. Built with clean, responsive UI and SEO-friendly structure.",
    technologies: ["WordPress", "WooCommerce", "HTML", "CSS", "GeneratePress"],
    features: [
      "Service Showcase",
      "Blog & Events Management",
      "Client Testimonials",
      "SEO-Friendly Structure",
      "Free Consultation Booking",
    ],
    link: "https://www.ketlinkuuskne.ee/",
    github: "#",
  },
]

export function ProjectsSection() {
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
    <section id="projects" ref={sectionRef} className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className={`space-y-12 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <div className="text-center space-y-2">
            <h2 className="text-sm font-mono text-primary uppercase tracking-wider">Projects</h2>
            <h3 className="text-4xl font-bold text-foreground">Featured Work</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`p-8 bg-card border-border transition-all duration-500 hover:shadow-lg group ${
                  isVisible ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>

                  <div className="space-y-3">
                    <h5 className="text-lg font-semibold text-foreground">Key Features</h5>
                    <ul className="space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-secondary/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-4">
                    <Button size="sm" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
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
