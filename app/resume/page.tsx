import { profile } from "@/src/content/portfolio";
import {
  Header,
  Footer,
  Journey,
  Education,
  Projects,
  Certifications,
  ContactLinks,
  Skills,
} from "@/components/PortfolioSections";
export default function Resume() {
  return (
    <>
      <Header />
      <main className="wrap inner-page resume">
        <p className="eyebrow">RESUME / AT A GLANCE</p>
        <h1>
          {profile.givenName} <em>{profile.familyName}.</em>
        </h1>
        <p className="lead">Computer Science Student</p>
        <p>A concise look at my education, experience and projects.</p>
        <section>
          <h2>Experience</h2>
          <Journey />
        </section>
        <section>
          <h2>Education</h2>
          <Education />
        </section>
        <section>
          <h2>Projects</h2>
          <Projects />
        </section>
        <section>
          <h2>Technical skills</h2>
          <Skills />
        </section>
        <section>
          <h2>Courses &amp; certificates</h2>
          <p>Completed courses, learning paths and workshops.</p>
          <Certifications />
          <a
            className="text-link"
            href={`${profile.linkedinUrl}details/certifications/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View credentials on LinkedIn ↗
          </a>
        </section>
        <section>
          <h2>Connect</h2>
          <ContactLinks />
        </section>
      </main>
      <Footer />
    </>
  );
}
