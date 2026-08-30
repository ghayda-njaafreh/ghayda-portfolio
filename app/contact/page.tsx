import type { Metadata } from "next";
import { Mail, ExternalLink } from "lucide-react";
import { BackToHome, BackToTop } from "@/components/PageNavigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Professional contact and profile links for Ghayda N. Ja'afreh, including GitHub, LinkedIn, Kaggle, and ORCID.",
  alternates: { canonical: "/contact" },
};

const profiles = [
  { label: "GitHub", href: site.social.github, mark: "GH" },
  { label: "LinkedIn", href: site.social.linkedin, mark: "in" },
  { label: "Kaggle", href: site.social.kaggle, mark: "K" },
  ...(site.social.orcid ? [{ label: "ORCID", href: site.social.orcid, mark: "iD" }] : []),
];

export default function ContactPage() {
  return (
    <main id="top">
      <Navbar />
      <div className="container"><BackToHome /></div>
      <section className="container route-page-hero contact-page-hero">
        <p className="eyebrow">CONTACT</p>
        <h1>Let&apos;s connect around applied AI, engineering, and research.</h1>
        <p>For professional opportunities, project collaboration, academic work, or technical discussions, email is the most direct contact method.</p>
        <a className="button button-primary" href={`mailto:${site.email}`}><Mail size={17} /> Email Me</a>
      </section>

      <section className="container route-page-content contact-profile-grid">
        {profiles.map(({ label, href, mark }) => (
          <a className="contact-profile-card" key={label} href={href} target="_blank" rel="noopener noreferrer">
            <span className="contact-profile-mark" aria-hidden="true">{mark}</span>
            <div><span>Professional profile</span><h2>{label}</h2></div>
            <ExternalLink size={18} />
          </a>
        ))}
      </section>
      <div className="container"><BackToTop /></div>
      <Footer />
    </main>
  );
}
