import {
  experiences,
  interests,
  profile,
  projects,
  skillGroups,
  socialLinks,
  verifiedAchievements,
} from "@/src/content/portfolio";
import { ExternalLink } from "./ExternalLink";

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-kicker">Hello, I&apos;m {profile.name}.</p>
        <h1 id="hero-title">{profile.heroHeading}</h1>
        <p className="hero-intro">{profile.introduction}</p>
        <p className="hero-support">{profile.heroCopy}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore my work</a>
          <ExternalLink className="button button-secondary" href={profile.github.url}>
            View GitHub
          </ExternalLink>
          {profile.linkedinUrl ? (
            <ExternalLink className="button button-secondary" href={profile.linkedinUrl}>LinkedIn</ExternalLink>
          ) : null}
        </div>
      </div>
      <div className="monogram-card" aria-hidden="true">
        <span className="orbit orbit-one" />
        <span className="orbit orbit-two" />
        <span className="monogram">{profile.initials}</span>
        <span className="monogram-caption">Build · test · understand</span>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="section shell" id="about" aria-labelledby="about-title">
      <SectionHeading eyebrow="About" title="Grounded in useful outcomes." />
      <div className="about-grid">
        <div className="about-copy">
          <h3 id="about-title">Thoughtful software for problems that matter.</h3>
          <p>{profile.supportingStatement}</p>
          <p>
            My interests meet where dependable engineering, responsible technology and clear communication can make complex systems easier to use.
          </p>
        </div>
        <ul className="interest-cloud" aria-label="Professional interests">
          {interests.map((interest) => <li key={interest}>{interest}</li>)}
        </ul>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section className="section section-tint" id="experience" aria-labelledby="experience-title">
      <div className="shell">
        <SectionHeading eyebrow="Experience" title="Software quality, automation and clear delivery." />
        <div className="experience-list">
          {experiences.map((experience) => (
            <article className="experience-card" key={`${experience.organisation}-${experience.role}`}>
              <div className="experience-meta">
                <p className="role">{experience.role}</p>
                <h3 id="experience-title">{experience.organisation}</h3>
                {experience.project ? <p className="project-label">Project · {experience.project}</p> : null}
                {experience.dates ? <p>{experience.dates}</p> : null}
              </div>
              <div className="experience-details">
                <p>{experience.summary}</p>
                {experience.responsibilities.length > 0 ? (
                  <ul className="check-list">
                    {experience.responsibilities.map((responsibility) => (
                      <li key={responsibility}>{responsibility}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="project-card">
      <div className="project-preview" aria-label={`${project.name} text preview`}>
        <div className="preview-topline"><span>SI</span><span>Suspicious content, explained</span></div>
        <div className="preview-signal">
          <span className="signal-dot" />
          <div><strong>Look before you act</strong><small>Understand the signals behind a risk assessment.</small></div>
        </div>
        <div className="preview-bars" aria-hidden="true"><span /><span /><span /></div>
      </div>
      <div className="project-content">
        <div className="project-title-row">
          <div><p className="eyebrow">Featured project</p><h3>{project.name}</h3></div>
          <ExternalLink className="project-link" href={project.url}>Visit live project</ExternalLink>
        </div>
        <p className="project-lead">{project.description}</p>
        <p>{project.purpose}</p>
        <ul className="feature-list">
          {project.characteristics.map((characteristic) => <li key={characteristic}>{characteristic}</li>)}
        </ul>
        {project.technologies.length > 0 ? (
          <ul className="tag-list" aria-label="Project technologies">
            {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
        ) : null}
        <div className="project-notes">
          <span>Built with {project.collaborators.join(", ")}</span>
          <span>{project.statusNote}</span>
        </div>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured);
  if (featuredProjects.length === 0) return null;

  return (
    <section className="section shell" id="projects" aria-labelledby="projects-title">
      <SectionHeading eyebrow="Selected work" title="Projects built to clarify and help." />
      <h3 className="sr-only" id="projects-title">Featured projects</h3>
      <div className="project-list">
        {featuredProjects.map((project) => <ProjectCard project={project} key={project.name} />)}
      </div>
    </section>
  );
}

export function AchievementsSection() {
  if (verifiedAchievements.length === 0) return null;

  return (
    <section className="section section-tint" id="achievements" aria-labelledby="achievements-title">
      <div className="shell">
        <SectionHeading eyebrow="Achievements" title="Verified milestones." />
        <div className="achievement-grid">
          {verifiedAchievements.map((achievement) => (
            <article key={`${achievement.title}-${achievement.url}`}>
              <h3 id="achievements-title">{achievement.title}</h3>
              <p>{achievement.organisation} · {achievement.date}</p>
              <p>{achievement.description}</p>
              <ExternalLink href={achievement.url}>View verification</ExternalLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SkillsSection() {
  return (
    <section className="section section-tint" id="skills" aria-labelledby="skills-title">
      <div className="shell">
        <SectionHeading eyebrow="Skills & focus" title="A practical, growing toolkit." />
        <h3 className="sr-only" id="skills-title">Verified skills and focus areas</h3>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <span className="skill-index" aria-hidden="true">0{skillGroups.indexOf(group) + 1}</span>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="section contact-section shell" id="contact" aria-labelledby="contact-title">
      <div>
        <p className="eyebrow">Contact</p>
        <h2 id="contact-title">Let&apos;s connect through the work.</h2>
        <p>Explore my projects or connect professionally through the verified links below.</p>
      </div>
      <div className="contact-links">
        {socialLinks.map((link) => (
          <ExternalLink href={link.url} key={link.label}>{link.label}</ExternalLink>
        ))}
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <p><strong>{profile.name}</strong><span>Personal work, documented with care.</span></p>
        <p className="footer-links">
          <span>© {new Date().getFullYear()}</span>
          {socialLinks.map((link) => (
            <ExternalLink href={link.url} key={link.label}>{link.label}</ExternalLink>
          ))}
        </p>
      </div>
    </footer>
  );
}
