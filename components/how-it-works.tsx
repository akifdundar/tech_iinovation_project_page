import { Search, Upload, Lock, DollarSign, Key, Play, MessageSquare, BarChart3 } from "lucide-react"

const rentSteps = [
  { icon: Search, title: "Browse Models", description: "Explore domain-specific AI models in the marketplace" },
  { icon: Key, title: "Connect Wallet", description: "Authenticate with your Ethereum wallet via Dynamic" },
  { icon: MessageSquare, title: "Chat with AI", description: "Query models through an intuitive RAG-powered chat" },
  { icon: BarChart3, title: "Pay Per Use", description: "Token-based pricing recorded on-chain transparently" },
]

const contributeSteps = [
  { icon: Search, title: "Pick a Campaign", description: "Find models that need data in your area of expertise" },
  { icon: Upload, title: "Upload Data", description: "Contribute PDFs, CSVs, or text files to the model" },
  { icon: Lock, title: "Encrypted Processing", description: "Data is chunked, embedded, and encrypted via ROFL TEE" },
  { icon: DollarSign, title: "Earn Revenue", description: "Get paid every time the model uses your contributed data" },
]

function StepCard({ step, index }: { step: typeof rentSteps[0]; index: number }) {
  return (
    <div className="flex items-start gap-4 group">
      <div className="flex-shrink-0 relative">
        <div className="w-10 h-10 rounded-full bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 font-semibold text-sm group-hover:bg-purple-600/30 transition-colors">
          {index + 1}
        </div>
        {index < 3 && (
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-purple-500/30 to-transparent" />
        )}
      </div>
      <div className="pb-10">
        <div className="flex items-center gap-2 mb-1">
          <step.icon className="h-4 w-4 text-purple-400" />
          <h4 className="font-semibold text-foreground">{step.title}</h4>
        </div>
        <p className="text-sm text-muted-foreground">{step.description}</p>
      </div>
    </div>
  )
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-purple-400 font-medium mb-3 tracking-wide uppercase text-sm">How It Works</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-5">
            Two Ways to Participate
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you want AI answers or want to earn from your data — the choice is yours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Use AI */}
          <div className="relative p-8 rounded-2xl border border-border bg-card/30">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium mb-8">
              <Play className="h-3 w-3" /> For Users
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Use AI Models</h3>
            {rentSteps.map((step, i) => (
              <StepCard key={i} step={step} index={i} />
            ))}
          </div>

          {/* Contribute */}
          <div className="relative p-8 rounded-2xl border border-border bg-card/30">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-8">
              <Upload className="h-3 w-3" /> For Data Owners
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Contribute Data</h3>
            {contributeSteps.map((step, i) => (
              <StepCard key={i} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
