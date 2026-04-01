const techCategories = [
  {
    title: "Frontend",
    items: [
      { name: "Next.js 14", desc: "React framework with App Router" },
      { name: "Tailwind CSS", desc: "Utility-first styling" },
      { name: "shadcn/ui", desc: "Accessible component library" },
      { name: "Dynamic Labs", desc: "Web3 wallet + social auth" },
    ],
  },
  {
    title: "Backend & AI",
    items: [
      { name: "Express + TS", desc: "Type-safe REST API server" },
      { name: "Ollama / Gemini", desc: "LLM generation & embeddings" },
      { name: "RAG Pipeline", desc: "Retrieval-Augmented Generation" },
      { name: "Vector Store", desc: "In-memory + file-based vectors" },
    ],
  },
  {
    title: "Blockchain & Security",
    items: [
      { name: "Solidity", desc: "Smart contracts on Ethereum" },
      { name: "Hardhat", desc: "Contract development & deploy" },
      { name: "Oasis ROFL", desc: "TEE for private computation" },
      { name: "Viem", desc: "TypeScript Ethereum library" },
    ],
  },
  {
    title: "Storage & Infra",
    items: [
      { name: "Pinata / IPFS", desc: "Decentralized file storage" },
      { name: "AES Encryption", desc: "Data encryption at rest" },
      { name: "Sepolia Testnet", desc: "Ethereum test network" },
      { name: "Docker", desc: "Container deployment" },
    ],
  },
]

export function TechStackSection() {
  return (
    <section id="tech" className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-purple-400 font-medium mb-3 tracking-wide uppercase text-sm">Technology</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-5">
            Built With Modern Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Combining the best of Web3, AI, and privacy technologies into a single cohesive platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((category, catIdx) => (
            <div key={catIdx} className="space-y-3">
              <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider px-1 mb-4">
                {category.title}
              </h3>
              {category.items.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  className="p-4 rounded-xl border border-border bg-card/40 hover:border-purple-500/20 transition-colors"
                >
                  <div className="font-medium text-foreground text-sm">{item.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{item.desc}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
