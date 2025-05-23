import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"


export default function PersonalWebsite() {
  const technologies = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Java",
    "C++",
    "HTML/CSS",
    "Tailwind CSS",
    "Git",
    "MongoDB",
    "PostgreSQL",
  ]

  const projects = [
    {
      title: "InvestiMate",
      description:
        "A full-stack financial tracker and stock application built with React, Spring Boot, PostgreSQL, Python ML. Features include user authentication, stock suggestions, and financial tracking.",
      technologies: ["React", "Spring Boot", "JWT Auth", "PostgreSQL"],
      github: "https://github.com/AnthonyCano/InvestiMate/tree/main/src",
    },
    {
      title: "TixBin (in progress)",
      description:
        "A software solution for ticket brokers for logging event inventory, costs, etc.",
      technologies: ["React", "Node.js", "AWS", "Google API"],
      github: "https://github.com/AnthonyCano/Tixbin",
    },
    {
      title: "StudySync (in progress)",
      description:
        "A student study organization app. Allowing for scheduling study times, organizaing and summarizing notes, and refining student notes.",
      technologies: ["React", "Spring Boot", "PostgreSQL"],
      github: "https://github.com/AnthonyCano/StudySync",
    },
  ]

  return (
    <div className="dark">
      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold"></h1>
              <div className="hidden md:flex space-x-6">
                <a href="#about" className="text-sm hover:text-primary transition-colors">
                  About
                </a>
                <a href="#technologies" className="text-sm hover:text-primary transition-colors">
                  Technologies
                </a>
                <a href="#projects" className="text-sm hover:text-primary transition-colors">
                  Projects
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* About Section */}
        <section id="about" className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                  <img
                    src="/profile.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Anthony Cano-Luna</h1>
                <p className="text-xl text-muted-foreground mb-6">Computer Science Student</p>
              </div>

              <div className="max-w-2xl mx-auto mb-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I am a passionate computer science student with a strong foundation in software development and
                  problem-solving. I enjoy building innovative solutions and learning new technologies. Currently
                  pursuing my degree while working on various projects that showcase my skills in full-stack
                  development, algorithms, and software engineering.
                </p>
              </div>

              <div className="flex justify-center space-x-4">
                <Button variant="outline" size="sm" asChild>
                  <Link href="mailto:anthony.cano.lunaa@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://github.com/AnthonyCano" target="_blank">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://www.linkedin.com/in/anthony-cano-luna-46b55b309/" target="_blank">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section id="technologies" className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies</h2>
                <p className="text-lg text-muted-foreground">Here are the technologies and tools I work with</p>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
                <p className="text-lg text-muted-foreground">A showcase of my recent work and personal projects</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription className="text-sm">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href={project.github} target="_blank">
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t">
          <div className="container mx-auto px-4">
            <div className="text-center text-sm text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} Anthony Cano-Luna. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
