import { AboutSection } from "@/components/portfolio/about-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { HeroSection } from "@/components/portfolio/hero-section"
import { JourneySection } from "@/components/portfolio/journey-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { SiteFooter } from "@/components/portfolio/site-footer"
import { SiteHeader } from "@/components/portfolio/site-header"
import { SkillsSection } from "@/components/portfolio/skills-section"

export default function Home() {
  return (
    <div className="overflow-hidden bg-background">
      <SiteHeader />
      <main id="top">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <JourneySection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
