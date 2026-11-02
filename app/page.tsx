import { YishunArtwork } from "@/components/YishunArtwork";
import { ScrollPainting } from "@/components/ScrollPainting";
import { achievement } from "@/src/content/portfolio";
import {
  Header,
  Footer,
  Journey,
  Education,
  Projects,
  ContactLinks,
  Skills,
} from "@/components/PortfolioSections";
export default function Home() {
  return (
    <>
      <ScrollPainting />
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <section className="hero wrap">
          <div className="hero-copy">
            <p className="eyebrow">A PERSONAL PORTFOLIO · SINGAPORE</p>
            <h1>
              Hi, I’m <em>Vishalan.</em>
            </h1>
            <p className="hero-sub">Computer Science Student</p>
            <p className="hero-desc">
              Exploring technology, security and the ideas that connect us.
            </p>
            <div className="buttons">
              <a className="button" href="#projects">
                Explore my work ↓
              </a>
              <a className="text-link" href="/connect">
                Let’s connect ↗
              </a>
            </div>
          </div>
          <YishunArtwork />
          <span className="hero-index">01 — INTRODUCTION</span>
        </section>
        <section id="about" className="section wrap about">
          <div>
            <p className="eyebrow">01 / ABOUT</p>
            <h2>
              Curious by nature.
              <br />
              <em>Always learning.</em>
            </h2>
          </div>
          <div className="about-copy">
            <p>
              I’m Vishalan, a Computer Science student interested in building
              useful technology and learning how to make it more secure.
            </p>
            <p>
              My journey has taken me from software testing to teaching coding
              and robotics, with projects that bring those interests together.
            </p>
            <a className="text-link" href="/resume">
              More about my journey ↗
            </a>
          </div>
        </section>
        <section id="journey" className="section wash-sage">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">02 / THE JOURNEY</p>
                <h2>
                  Where I’ve <em>been.</em>
                </h2>
              </div>
              <p>Learning through study, work and service.</p>
            </div>
            <Journey />
            <h3 className="subheading">Education</h3>
            <Education />
          </div>
        </section>
        <section id="projects" className="section wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / SELECTED WORK</p>
              <h2>
                Ideas made <em>practical.</em>
              </h2>
            </div>
            <p>A selection of projects across security and software.</p>
          </div>
          <Projects />
        </section>
        <section id="achievements" className="section achievement">
          <div className="wrap achievement-inner">
            <div>
              <p className="eyebrow">04 / A MILESTONE</p>
              <h2>
                A little recognition
                <br />
                <em>along the way.</em>
              </h2>
            </div>
            <div className="award">
              <span className="award-star">✳</span>
              <p className="small">{achievement.event}</p>
              <h3>{achievement.title}</h3>
              <p>{achievement.project}</p>
            </div>
          </div>
        </section>
        <section className="section wrap">
          <p className="eyebrow">SKILLS / TOOLS & PRACTICE</p>
          <h2>
            What I work <em>with.</em>
          </h2>
          <Skills />
        </section>
        <section className="section wrap connect-section">
          <div>
            <p className="eyebrow">05 / CONNECT</p>
            <h2>
              Good things start
              <br />
              with <em>hello.</em>
            </h2>
            <p>
              Whether it’s a shared idea or a new opportunity, I’d be glad to
              connect.
            </p>
          </div>
          <ContactLinks />
        </section>
      </main>
      <Footer />
    </>
  );
}
