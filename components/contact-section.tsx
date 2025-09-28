"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className={`space-y-12 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <div className="text-center space-y-2">
            <h2 className="text-sm font-mono text-primary uppercase tracking-wider">Contact</h2>
            <h3 className="text-4xl font-bold text-foreground">Get In Touch</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about
              technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className={`p-8 bg-card border-border ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
              <div className="space-y-8">
                <h4 className="text-2xl font-semibold text-foreground">Let's Connect</h4>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <a
                        href="mailto:hrrahman35@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        hrrahman35@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <a
                        href="tel:+8801571007636"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +8801571007636
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Location</p>
                      <p className="text-muted-foreground">Rajshahi, Bangladesh</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h5 className="text-lg font-semibold text-foreground">Follow Me</h5>
                  <div className="flex items-center gap-4">
                    <Button variant="outline" size="icon" asChild>
                      <a href="https://github.com/35-hasib" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href="https://linkedin.com/in/35-hasibur" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            <Card className={`p-8 bg-card border-border ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <h4 className="text-2xl font-semibold text-foreground">Send a Message</h4>

                <div className="space-y-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-background border-border focus:border-primary resize-none"
                    />
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
