import { Shield, TrendingUp, Brain, Lock, Database, Cpu } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "TEE Privacy",
    description: "Data is processed inside Oasis ROFL Trusted Execution Environments. No one — not even us — can see your raw data.",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    icon: Brain,
    title: "Domain-Specific Models",
    description: "Access specialized AI models trained for Medical, Legal, Financial, Research, and General domains with RAG pipelines.",
    gradient: "from-violet-500 to-blue-600",
  },
  {
    icon: TrendingUp,
    title: "Earn by Contributing",
    description: "Upload quality datasets and earn revenue every time the model you contributed to processes a paid query.",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All vector embeddings are encrypted before IPFS storage using Pinata. Your intellectual property stays protected.",
    gradient: "from-cyan-500 to-teal-600",
  },
  {
    icon: Database,
    title: "On-Chain Transparency",
    description: "Campaign creation, contributions, and revenue distribution are all recorded on Ethereum smart contracts.",
    gradient: "from-teal-500 to-emerald-600",
  },
  {
    icon: Cpu,
    title: "RAG Architecture",
    description: "Retrieval-Augmented Generation ensures accurate, context-aware responses grounded in real contributed data.",
    gradient: "from-emerald-500 to-green-600",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-purple-400 font-medium mb-3 tracking-wide uppercase text-sm">Features</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-5">
            Why DecentralAI?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A privacy-first AI marketplace where data owners earn and model consumers get domain-expert answers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl border border-border bg-card/40 backdrop-blur-sm hover:border-purple-500/30 hover:bg-card/60 transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} mb-5`}>
                <feature.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
