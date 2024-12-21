'use client';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Code2, Cpu, Database, Globe, LayoutGrid, MessageSquare, Phone, Mail, MapPin, Star, CheckCircle2, ExternalLink } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import AnimatedBackground from "@/components/AnimatedBackground"

export default function Home() {
  const technologies = [
    { name: "React", icon: "/icons/react.svg" },
    { name: "Node.js", icon: "/icons/nodejs.svg" },
    { name: "Blockchain", icon: "/icons/blockchain.svg" },
    { name: "Laravel", icon: "/icons/laravel.svg" },
    { name: "Elasticsearch", icon: "/icons/elasticsearch.svg" },
    { name: "Python", icon: "/icons/python.svg" },
    { name: "Docker", icon: "/icons/docker.svg" },
    { name: "AWS", icon: "/icons/aws.svg" },
  ]

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Blockchain Wallet",
      description: "Secure cryptocurrency wallet with multi-chain support.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React Native", "Blockchain", "Solidity"],
      link: "#"
    },
    {
      title: "AI-Powered Analytics",
      description: "Advanced analytics platform leveraging machine learning algorithms.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Python", "TensorFlow", "Elasticsearch"],
      link: "#"
    },
    {
      title: "IoT Smart Home",
      description: "Integrated smart home solution with IoT device management.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Node.js", "MQTT"],
      link: "#"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechInnovate Inc.",
      image: "/placeholder.svg?height=100&width=100",
      quote: "TechCore's expertise in cloud solutions transformed our infrastructure. Their team's dedication and innovative approach exceeded our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "DataDrive Solutions",
      image: "/placeholder.svg?height=100&width=100",
      quote: "The AI-powered analytics platform TechCore developed for us has revolutionized our decision-making process. Their technical prowess is truly impressive.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "GreenTech Innovations",
      image: "/placeholder.svg?height=100&width=100",
      quote: "Working with TechCore on our IoT project was a game-changer. Their ability to navigate complex technical challenges while maintaining clear communication was outstanding.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95 max-w-screen-2xl mx-auto">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">TechCore</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/" className="text-foreground/60 transition-colors hover:text-foreground">
              Home
            </Link>
            <Link href="#services" className="text-foreground/60 transition-colors hover:text-foreground">
              Services
            </Link>
            <Link href="#projects" className="text-foreground/60 transition-colors hover:text-foreground">
              Projects
            </Link>
            <Link href="#technologies" className="text-foreground/60 transition-colors hover:text-foreground">
              Technologies
            </Link>
            <Link href="#contact" className="text-foreground/60 transition-colors hover:text-foreground">
              Contact
            </Link>
            <Button>Get Started</Button>
          </nav>
          <Button className="md:hidden" variant="outline" size="icon">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-4 py-24 md:py-32">
          <AnimatedBackground />
          <div className="container mx-auto relative z-10">
            <div className="flex flex-col items-center space-y-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
                  Innovate. Transform. Succeed.
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  TechCore is a leading software development and IT services company, transforming ideas into successful digital solutions.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col gap-4 min-[400px]:flex-row"
              >
                <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="services" className="px-4 py-24 md:py-32 relative overflow-hidden">
          <div className="container mx-auto">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-secondary/20 opacity-30 blur-3xl -z-10" />
            <div className="grid gap-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Our Services
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground">
                  We offer a comprehensive range of IT solutions tailored to meet your business needs
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Cpu className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">Software Development</h3>
                    </div>
                    <p className="mt-4 text-muted-foreground">
                      Custom software solutions designed to streamline your business processes and enhance productivity.
                    </p>
                  </CardContent>
                </Card>
                <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-secondary/10">
                        <Database className="h-8 w-8 text-secondary" />
                      </div>
                      <h3 className="text-xl font-bold">Cloud Solutions</h3>
                    </div>
                    <p className="mt-4 text-muted-foreground">
                      Scalable cloud infrastructure and services to help your business grow and stay competitive.
                    </p>
                  </CardContent>
                </Card>
                <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Globe className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">IT Consulting</h3>
                    </div>
                    <p className="mt-4 text-muted-foreground">
                      Expert guidance and strategic planning to help you make informed technology decisions.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="px-4 py-24 md:py-32 relative overflow-hidden">
          <div className="container mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-30 blur-3xl -z-10" />
            <div className="grid gap-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Our Expertise
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground">
                  We leverage cutting-edge technologies to deliver innovative solutions
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                        <div className="mb-4 relative w-16 h-16">
                          <Image
                            src={tech.icon}
                            alt={tech.name}
                            layout="fill"
                            objectFit="contain"
                            className="transition-all duration-300 group-hover:scale-110"
                          />
                        </div>
                        <h3 className="font-semibold">{tech.name}</h3>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="px-4 py-24 md:py-32 relative overflow-hidden">
          <div className="container mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-30 blur-3xl -z-10" />
            <div className="grid gap-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Our Projects
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground">
                  Explore our portfolio of successful projects and innovative solutions
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                      <CardContent className="p-0">
                        <div className="relative aspect-video overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="p-6 relative">
                          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                          <p className="text-muted-foreground mb-4">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech) => (
                              <span key={tech} className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                                {tech}
                              </span>
                            ))}
                          </div>
                          <Link href={project.link} className="inline-flex items-center text-primary hover:underline">
                            View Project <ExternalLink className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="px-4 py-24 md:py-32 relative overflow-hidden">
          <div className="container mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-30 blur-3xl -z-10" />
            <div className="grid gap-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Client Feedback
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground">
                  Hear what our clients say about their experience working with TechCore
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex gap-1 mb-4">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <blockquote className="flex-grow">
                          <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                        </blockquote>
                        <div className="flex items-center gap-4 mt-4">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={48}
                            height={48}
                            className="rounded-full"
                          />
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              <div className="text-center">
                <Button variant="outline" size="lg" className="mt-8">
                  View More Testimonials
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 py-24 md:py-32 relative">
          <div className="container mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-30 blur-3xl -z-10" />
            <div className="grid gap-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Get in Touch
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground">
                  Ready to start your project? Contact us for a free consultation
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                <Card>
                  <CardContent className="p-6">
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium" htmlFor="name">
                          Name
                        </label>
                        <Input id="name" placeholder="Your name" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium" htmlFor="email">
                          Email
                        </label>
                        <Input id="email" type="email" placeholder="your@email.com" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium" htmlFor="message">
                          Message
                        </label>
                        <Textarea id="message" placeholder="Your message" />
                      </div>
                      <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 000-0000</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">contact@techcore.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-muted-foreground">123 Tech Street, Silicon Valley, CA 94025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-muted/50">
        <div className="container mx-auto px-4 py-12 md:py-16 grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code2 className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">TechCore</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Transforming ideas into successful digital solutions.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#services" className="hover:text-primary">Services</Link></li>
              <li><Link href="#projects" className="hover:text-primary">Projects</Link></li>
              <li><Link href="#technologies" className="hover:text-primary">Technologies</Link></li>
              <li><Link href="#contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Software Development</li>
              <li>Cloud Solutions</li>
              <li>IT Consulting</li>
              <li>Digital Transformation</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>LinkedIn</li>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <div className="border-t">
          <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2024 TechCore. All rights reserved.</p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-primary">Privacy Policy</Link>
              <Link href="#" className="hover:text-primary">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

