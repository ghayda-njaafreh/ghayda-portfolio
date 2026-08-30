import { site } from "@/data/site";

const nav = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Research", href: "/research" },
  { label: "About", href: "/about" },
  { label: "Credentials", href: "/credentials" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="nav-wrap">
      <div className="container nav-inner">
        <a className="brand" href="/">{site.name}</a>
        <nav className="nav-links" aria-label="Primary navigation">
          {nav.map((item) => (
            <a key={item.label} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <a className="button button-small" href={`mailto:${site.email}`}>Let&apos;s Connect</a>

        <details className="mobile-nav">
          <summary aria-label="Open navigation menu">Menu</summary>
          <nav aria-label="Mobile navigation">
            {nav.map((item) => (
              <a key={item.label} href={item.href}>{item.label}</a>
            ))}
            <a className="mobile-nav-connect" href={`mailto:${site.email}`}>Let&apos;s Connect</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
