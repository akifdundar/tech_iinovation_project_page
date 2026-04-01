import Link from "next/link"
import { Github, Twitter } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-foreground mb-3">DecentralAI</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A decentralized marketplace for private AI models. Built with privacy, transparency, and fairness at its core.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Product</h4>
            <ul className="space-y-3">
              <li><Link href="/app" className="text-sm text-muted-foreground hover:text-purple-400 transition-colors">Marketplace</Link></li>
              <li><a href="#features" className="text-sm text-muted-foreground hover:text-purple-400 transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-sm text-muted-foreground hover:text-purple-400 transition-colors">How It Works</a></li>
              <li><a href="#faq" className="text-sm text-muted-foreground hover:text-purple-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Technology */}
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Technology</h4>
            <ul className="space-y-3">
              <li><a href="#tech" className="text-sm text-muted-foreground hover:text-purple-400 transition-colors">Tech Stack</a></li>
              <li><span className="text-sm text-muted-foreground">Oasis ROFL</span></li>
              <li><span className="text-sm text-muted-foreground">Ethereum / Sepolia</span></li>
              <li><span className="text-sm text-muted-foreground">IPFS / Pinata</span></li>
            </ul>
          </div>

          {/* Team */}
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Team</h4>
            <ul className="space-y-3">
              <li><a href="#team" className="text-sm text-muted-foreground hover:text-purple-400 transition-colors">About Us</a></li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-purple-400 transition-colors flex items-center gap-2">
                  <Github className="h-3.5 w-3.5" /> GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-purple-400 transition-colors flex items-center gap-2">
                  <Twitter className="h-3.5 w-3.5" /> Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} DecentralAI. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with Next.js, Solidity, and Oasis ROFL
          </p>
        </div>
      </div>
    </footer>
  )
}
