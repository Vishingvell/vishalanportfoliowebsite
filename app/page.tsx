import {
  AboutSection,
  AchievementsSection,
  ContactSection,
  ExperienceSection,
  HeroSection,
  ProjectsSection,
  SiteFooter,
  SkillsSection,
} from "@/components/PortfolioSections";
import { SiteHeader } from "@/components/SiteHeader";
import { profile } from "@/src/content/portfolio";

export default function Home() {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    description: profile.introduction,
    url: profile.canonicalUrl || undefined,
    sameAs: [profile.github.url, profile.linkedinUrl].filter(Boolean),
  };

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />
      <main id="main-content">
        <div id="top" />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <AchievementsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
      />
    </>
  );
}
