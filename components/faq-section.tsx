"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    q: "What is DecentralAI?",
    a: "DecentralAI is a decentralized marketplace for private AI models. Users can rent domain-specific AI models or contribute their data to improve existing models — all while keeping data private through Oasis ROFL Trusted Execution Environments.",
  },
  {
    q: "How is my data kept private?",
    a: "Your data is processed inside a Trusted Execution Environment (TEE) using Oasis ROFL technology. The data is encrypted before leaving your device, chunked into vector embeddings inside the TEE, and stored encrypted on IPFS via Pinata. No one — including the platform operators — can access your raw data.",
  },
  {
    q: "How do I earn money by contributing data?",
    a: "When you contribute data to a campaign, it gets processed into vector embeddings that improve the AI model's knowledge base. Every time a user makes a paid query to that model, contributors earn a share of the revenue proportional to their contribution. All earnings are tracked and distributed via smart contracts.",
  },
  {
    q: "What types of AI models are available?",
    a: "DecentralAI supports domain-specific models across Medical, Legal, Financial, Research, and General categories. Each model uses Retrieval-Augmented Generation (RAG) to provide accurate, context-aware answers grounded in real contributed data.",
  },
  {
    q: "What blockchain does this run on?",
    a: "DecentralAI smart contracts are deployed on Ethereum (currently Sepolia testnet). The contracts handle campaign creation, data contribution tracking, token economics, and revenue distribution. We use Viem for blockchain interactions and Dynamic Labs for wallet authentication.",
  },
  {
    q: "Do I need a crypto wallet to use DecentralAI?",
    a: "Yes, you need an Ethereum-compatible wallet to interact with the platform. We use Dynamic Labs which supports both traditional wallet connections (MetaMask, WalletConnect) and social login with Google — making it easy for non-crypto-native users to get started.",
  },
  {
    q: "What file formats can I contribute?",
    a: "You can contribute data in PDF, CSV, TXT, JSON, DOCX, and XLSX formats. Files are processed through our RAG pipeline which extracts text, splits it into meaningful chunks, and generates vector embeddings for semantic search.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-purple-400 font-medium mb-3 tracking-wide uppercase text-sm">FAQ</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-5">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="border border-border rounded-xl px-6 bg-card/40 data-[state=open]:border-purple-500/30"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-purple-300 py-5 text-[15px] font-medium hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
