import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import FeaturedProject from "@/components/FeaturedProject";
import AboutPreview from "@/components/AboutPreview";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import { credentials } from "@/data/credentials";
import { site } from "@/data/site";

const selectedSlugs = [
  "strokelens",
  "tetris-ai-lab",
  "medical-image-segmentation",
  "ml-decision-surfaces",
];

export default function Home() {
  const selected = selectedSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));

  const selectedCredentials = credentials.filter((item) => item.featured).slice(0, 4);

  return (
    <main>
      <Navbar />
      <Hero />
      <Metrics />

      <section className="container section home-selected-work">
        <div className="section-heading home-section-heading-row">
          <div>
            <p className="eyebrow">SELECTED WORK</p>
            <h2>A focused selection of applied projects.</h2>
            <p>Four representative case studies across healthcare AI, autonomous agents, medical computer vision, and interactive machine learning.</p>
          </div>
          <Link className="text-link home-section-link" href="/projects">View All Projects <ArrowUpRight size={16} /></Link>
        </div>
        <div className="featured-stack">
          {selected.map((project) => <FeaturedProject project={project} key={project.slug} />)}
        </div>
      </section>

      <AboutPreview />

      <section className="container section home-research-preview">
        <div>
          <p className="eyebrow">RESEARCH & ACADEMIC WORK</p>
          <h2>Applied research with a focus on trustworthy AI.</h2>
          <p>Current interests include healthcare AI, explainable machine learning, model evaluation, computer vision, and secure AI systems.</p>
          <div className="chips"><span>Healthcare AI</span><span>Explainable AI</span><span>Model Evaluation</span><span>Computer Vision</span></div>
          <Link className="text-link" href="/research">Explore Research <ArrowUpRight size={16} /></Link>
        </div>
        <div className="research-card">
          <span>Academic research</span>
          <h3>Research & Project Work</h3>
          <p>Selected academic work spans healthcare AI, explainable machine learning, model evaluation, computer vision, and secure AI systems.</p>
          <strong>Detailed research materials are shared only when appropriate for public release.</strong>
        </div>
      </section>

      <section className="container section home-credentials-preview">
        <div className="section-heading home-section-heading-row">
          <div>
            <p className="eyebrow">SELECTED CREDENTIALS</p>
            <h2>Verified technical learning and professional development.</h2>
            <p>A small selection of the strongest credentials. The full archive includes certificates, identifiers, supporting documents, and verification links where available.</p>
          </div>
          <Link className="text-link home-section-link" href="/credentials">View All Credentials <ArrowUpRight size={16} /></Link>
        </div>
        <div className="credential-preview-grid">
          {selectedCredentials.map((item) => (
            <article className="home-credential-card" key={item.title}>
              <img src={item.preview} alt={`${item.title} preview`} loading="lazy" />
              <div>
                <span>{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.issuer}</p>
                <div className="home-credential-actions">
                  <a href={item.certificate} target="_blank" rel="noopener noreferrer">View <ExternalLink size={14} /></a>
                  {item.verifyUrl && <a href={item.verifyUrl} target="_blank" rel="noopener noreferrer">Verify <ExternalLink size={14} /></a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>


      <section className="container section home-resume-preview">
        <div>
          <p className="eyebrow">RESUME CENTER</p>
          <h2>One profile, multiple role-focused resumes.</h2>
          <p>Start with the general professional resume or choose a specialized version for AI/backend engineering, data science, backend engineering, or software engineering.</p>
        </div>
        <Link className="button button-secondary" href="/resume">Explore Resume Center <ArrowUpRight size={16} /></Link>
      </section>

      <section className="container section home-final-cta">
        <p className="eyebrow">LET&apos;S CONNECT</p>
        <h2>Interested in AI engineering, data science, computer vision, backend AI systems, or research collaboration?</h2>
        <div className="hero-actions">
          <a className="button button-primary" href={`mailto:${site.email}`}>Email Me</a>
          <Link className="button button-secondary" href="/contact">Contact & Profiles</Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
