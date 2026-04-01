import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorks } from "@/components/how-it-works"
import { TeamSection } from "@/components/team-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { FooterSection } from "@/components/footer-section"
import { LandingNav } from "@/components/landing-nav"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <LandingNav />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorks />
        <TeamSection />
        <TechStackSection />
        <FAQSection />
        <CTASection />
      </main>
      <FooterSection />
    </div>
  )
}
