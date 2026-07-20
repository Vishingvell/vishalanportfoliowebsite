import { profile, verifiedAchievements } from "@/src/content/portfolio";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  ...(verifiedAchievements.length > 0
    ? [{ label: "Achievements", href: "#achievements" }]
    : []),
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function NavigationLinks({ mobile = false }: { mobile?: boolean }) {
  return (
    <ul className={mobile ? "mobile-nav-list" : "desktop-nav-list"}>
      {navigation.map((item) => (
        <li key={item.href}>
          <a href={item.href}>{item.label}</a>
        </li>
      ))}
    </ul>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="wordmark" href="#top" aria-label={`${profile.name}, home`}>
          <span aria-hidden="true">VK</span>
          <span>{profile.name}</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <NavigationLinks />
        </nav>
        <details className="mobile-nav">
          <summary aria-label="Open navigation menu">
            <span aria-hidden="true">Menu</span>
          </summary>
          <nav aria-label="Mobile navigation">
            <NavigationLinks mobile />
          </nav>
        </details>
      </div>
    </header>
  );
}
