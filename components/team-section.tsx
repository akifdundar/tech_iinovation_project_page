import Image from "next/image"
import type { StaticImageData } from "next/image"
import { Github, Linkedin } from "lucide-react"
import emrePhoto from "@/images/emre.jpeg"
import egemenPhoto from "@/images/egemen.jpeg"
import akifPhoto from "@/images/akif.png"

type TeamMember = {
  name: string
  role: string
  bio: string
  avatar: StaticImageData | null
  initials: string
  links: { github: string; linkedin: string }
}

const team: TeamMember[] = [
  {
    name: "Emre Yazıcı",
    role: "Backend Engineer",
    bio: "Designs and operates DecentralAI’s server layer: REST APIs, authentication, database access, and integrations with on-chain services and ROFL-backed workflows. Focuses on reliability, security, and clean service boundaries.",
    avatar: emrePhoto,
    initials: "EY",
    links: {
      github: "https://github.com/eemreyazc",
      linkedin: "https://www.linkedin.com/in/eemreyazc/",
    },
  },
  {
    name: "Egemen Çevik",
    role: "MLOps Engineer",
    bio: "Owns the ML lifecycle: training and inference pipelines, model packaging, monitoring, and reproducible deployments. Bridges data science experiments with production-grade infrastructure so models stay observable and scalable.",
    avatar: egemenPhoto,
    initials: "EÇ",
    links: {
      github: "https://github.com/VSundew",
      linkedin: "https://www.linkedin.com/in/egemen-%C3%A7evik-444533289/",
    },
  },
  {
    name: "Mehmet Akif Dündar",
    role: "Full-Stack Engineer",
    bio: "Ships end-to-end features across the Next.js app, API contracts, and smart-contract touchpoints. Connects wallet flows, marketplace UX, and backend capabilities so users get a cohesive experience from UI to chain.",
    avatar: akifPhoto,
    initials: "MA",
    links: {
      github: "https://github.com/akifdundar",
      linkedin: "https://www.linkedin.com/in/mehmet-akif-d%C3%BCndar/",
    },
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-purple-400 font-medium mb-3 tracking-wide uppercase text-sm">About Us</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-5">
            Meet the Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A small team building the future of privacy-preserving AI. We believe data ownership
            and AI access should be decentralized.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl border border-border bg-card/40 text-center hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="w-24 h-24 rounded-full mx-auto mb-6 bg-gradient-to-br from-purple-500/20 to-violet-600/20 border-2 border-purple-500/20 flex items-center justify-center overflow-hidden group-hover:border-purple-500/40 transition-colors">
                {member.avatar ? (
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                ) : (
                  <span className="text-2xl font-bold text-purple-400">{member.initials}</span>
                )}
              </div>

              <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-purple-400 text-sm font-medium mb-4">{member.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{member.bio}</p>

              <div className="flex items-center justify-center gap-3">
                <a
                  href={member.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted-foreground hover:text-purple-400 hover:bg-purple-500/10 transition-colors"
                  aria-label={`${member.name} on GitHub`}
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={member.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted-foreground hover:text-purple-400 hover:bg-purple-500/10 transition-colors"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
