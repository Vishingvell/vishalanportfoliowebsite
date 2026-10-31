import Link from "next/link";
import {
  profile,
  education,
  experiences,
  projects,
  certifications,
  skills,
} from "@/src/content/portfolio";
export function Header() {
  return (
    <header className="header wrap">
      <Link className="brand" href="/">
        Vishalan <span> / Wish</span>
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/#about">About</Link>
        <Link href="/#journey">Journey</Link>
        <Link href="/#projects">Projects</Link>
        <Link href="/#achievements">Achievements</Link>
        <a href="/resume">Resume</a>
        <a className="nav-connect" href="/connect">
          Connect ↗
        </a>
      </nav>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="footer wrap">
      <span>{profile.name} · Singapore</span>
      <a href="/connect">Let’s connect ↗</a>
    </footer>
  );
}
export function ContactLinks() {
  return (
    <div className="contact-list">
      <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer">
        <span>01 / LinkedIn</span>
        <span>↗</span>
      </a>
      <a href={profile.github.url} target="_blank" rel="noopener noreferrer">
        <span>02 / GitHub</span>
        <span>↗</span>
      </a>
      <a href={`mailto:${profile.email}`}>
        <span>03 / Email</span>
        <span>↗</span>
      </a>
    </div>
  );
}
export function Journey() {
  return (
    <div className="journey-list">
      {experiences.map((x) => (
        <article className="journey-item" key={x.role}>
          <span className="small">{x.dates}</span>
          <div>
            <h3>{x.role}</h3>
            <p>{x.organisation}</p>
            {x.detail && <p>{x.detail}</p>}
          </div>
        </article>
      ))}
    </div>
  );
}
export function Education() {
  return (
    <div className="journey-list">
      {education.map((x) => (
        <article className="journey-item" key={x.title}>
          <span className="small">{x.dates}</span>
          <div>
            <h3>{x.title}</h3>
            <p>{x.place}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
export function Projects() {
  return (
    <div className="projects">
      {projects.map((x, i) => (
        <article className="project" key={x.name}>
          <span className="small">0{i + 1} / PROJECT</span>
          <h3>{x.name}</h3>
          <p>{x.description}</p>
          {x.url && (
            <a href={x.url} target="_blank" rel="noopener noreferrer">
              Explore project ↗
            </a>
          )}
        </article>
      ))}
    </div>
  );
}
export function Certifications() {
  return (
    <ul className="certs">
      {certifications.map((x) => (
        <li key={x}>{x}</li>
      ))}
    </ul>
  );
}

export function Skills() {
  return (
    <div className="projects">
      {skills.map((group) => (
        <article className="project" key={group.title}>
          <h3>{group.title}</h3>
          <ul>
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
