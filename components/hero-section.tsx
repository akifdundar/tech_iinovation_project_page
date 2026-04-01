"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, Globe } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] mesh-gradient" />
        <div className="absolute bottom-1/4 right-1/5 w-[400px] h-[400px] bg-blue-600/8 rounded-full blur-[100px] mesh-gradient" style={{ animationDelay: "-7s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[150px] animate-pulse-glow" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-300 text-sm animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          Powered by Oasis ROFL &amp; Blockchain
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <span className="text-foreground">Decentralized</span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
            AI Platform
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Build, rent, and contribute to private AI models with end-to-end encryption.
          Your data stays yours. Your earnings grow.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <Link href="/app">
            <Button size="lg" className="text-lg px-8 py-6 bg-purple-600 hover:bg-purple-700 text-white group rounded-xl">
              Launch App
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <a href="#how-it-works">
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-border text-muted-foreground hover:bg-muted/50 rounded-xl">
              Learn More
            </Button>
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <Shield className="h-4 w-4 text-purple-400" />
              <span className="text-2xl sm:text-3xl font-bold text-foreground">100%</span>
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">Private & Encrypted</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <Zap className="h-4 w-4 text-violet-400" />
              <span className="text-2xl sm:text-3xl font-bold text-foreground">5+</span>
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">AI Models Live</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <Globe className="h-4 w-4 text-blue-400" />
              <span className="text-2xl sm:text-3xl font-bold text-foreground">24/7</span>
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">Always Available</div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
