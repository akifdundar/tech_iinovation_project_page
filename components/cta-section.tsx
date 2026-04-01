import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-12 rounded-3xl border border-purple-500/20 bg-gradient-to-b from-purple-950/20 to-card/40">
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-5">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            Explore the marketplace, rent an AI model, or start earning by contributing your data. The decentralized AI economy is here.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/app">
              <Button size="lg" className="text-lg px-10 py-6 bg-purple-600 hover:bg-purple-700 text-white group rounded-xl">
                Launch App
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="#features">
              <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-border text-muted-foreground hover:bg-muted/50 rounded-xl">
                Explore Features
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
