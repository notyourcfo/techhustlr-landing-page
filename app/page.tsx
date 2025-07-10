'use client'

import Link from "next/link"
import { ArrowRight, Mail, Moon, Sun, User } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full"
    >
      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  )
}

export default function LandingPage() {
  // For carousel demo
  const testimonials = [
    {
      name: "Tianying Zhu",
      role: "Student, Builder",
      img: "/placeholder-user.jpg",
      quote:
        "Tech Hustlr is my go-to for actionable insights. The breakdowns are clear, and the stories are super motivating!",
    },
    {
      name: "Vasundhra",
      role: "ML Engineer",
      img: "/placeholder-user.jpg",
      quote:
        "I love the raw approach. Every issue gives me something new to try or think about.",
    },
    {
      name: "shailili patel",
      role: "Student, Berkeley",
      img: "/placeholder-user.jpg",
      quote:
        "It has actually help mme get right internship.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background via-muted/60 to-background">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-30 w-full border-b bg-white/80 dark:bg-background/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/tech-hustlr-logo.webp" alt="Tech Hustlr Logo" className="h-8 w-auto rounded" />
            <span className="text-xl font-bold tracking-tight">Tech Hustlr</span>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild size="sm" className="rounded-full">
              <Link href="https://techhustlr.substack.com" target="_blank">
                Subscribe
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative flex items-center justify-center py-24 md:py-32">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-secondary/20 to-background" />
          <div className="container mx-auto max-w-3xl space-y-8 text-center">
            <div className="space-y-4">
              <h1 className="text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
                Tech Hustlr
              </h1>
              <p className="text-2xl text-muted-foreground md:text-3xl">
                For the ones figuring it out, one experiment at a time.
              </p>
            </div>
            <Button asChild size="lg" className="rounded-full px-10 text-lg shadow-lg">
              <Link href="https://techhustlr.substack.com" target="_blank" className="flex items-center gap-2">
                Subscribe on Substack
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="container py-16">
          <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-md hover:shadow-xl transition-shadow">
              <CardHeader>
                <Badge className="mb-2">#1</Badge>
                <CardTitle>No-fluff breakdowns</CardTitle>
                <CardDescription>I cut through the noise and give you the real deal on tools and trends that actually matter.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="shadow-md hover:shadow-xl transition-shadow">
              <CardHeader>
                <Badge variant="secondary" className="mb-2">#2</Badge>
                <CardTitle>Real stories</CardTitle>
                <CardDescription>I share stories from people who took the road less traveled in tech. No cookie-cutter paths here.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="shadow-md hover:shadow-xl transition-shadow">
              <CardHeader>
                <Badge variant="outline" className="mb-2">#3</Badge>
                <CardTitle>Build, fail, learn</CardTitle>
                <CardDescription>My notes on building stuff, messing up, and learning in public. We're all figuring it out together.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* About Section */}
        <section className="container py-16">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">What's this all about?</h2>
            <p className="text-lg text-muted-foreground">
              Look, I'm just a curious student trying to stay ahead of the AI wave. Every week, I break down the tools, trends, and career tips that I'm actually using and learning from.<br />
              No fancy corporate speak, no fluff, just real insights from someone who's still figuring it all out too.
            </p>
          </div>
        </section>

        {/* Testimonials Carousel */}
        <section className="container py-16">
          <div className="mx-auto max-w-3xl text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-2">What readers are saying</h2>
            <p className="text-muted-foreground text-lg">Join 1000+ others who are learning and building alongside me.</p>
          </div>
          <Carousel opts={{ loop: true }}>
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="flex justify-center">
                  <Card className="w-full max-w-md mx-auto shadow-lg">
                    <CardContent className="flex flex-col items-center gap-4 py-8">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={t.img} alt={t.name} />
                        <AvatarFallback><User /></AvatarFallback>
                      </Avatar>
                      <p className="text-lg font-medium">"{t.quote}"</p>
                      <span className="text-muted-foreground text-sm">{t.name} — {t.role}</span>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-6">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </section>

        {/* Section Divider */}
        <Separator className="my-12" />

        {/* Author Mini Bio */}
        <section className="container py-12">
          <div className="mx-auto max-w-2xl">
            <Card className="flex flex-col items-center gap-4 rounded-xl border border-muted bg-muted/20 p-8 text-center shadow-md">
              <Avatar className="h-14 w-14">
                <AvatarImage src="/placeholder-user.jpg" alt="Author" />
                <AvatarFallback><Mail /></AvatarFallback>
              </Avatar>
              <p className="text-lg font-medium">Written by an 18-year-old who's choosing curiosity over certainty.</p>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/80 dark:bg-background/80 backdrop-blur-sm">
        <div className="container flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
          <p className="text-lg font-medium">Join 1000+ others learning and building together</p>
          <Button asChild size="lg" className="rounded-full px-8 shadow-md">
            <Link href="https://techhustlr.substack.com" target="_blank" className="flex items-center gap-2">
              Read on Substack
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </footer>
    </div>
  )
}
