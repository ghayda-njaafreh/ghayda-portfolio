import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section id="home" className="hero container section">
      <div className="hero-copy reveal">
        <p className="eyebrow">DATA SCIENCE · AI ENGINEERING · APPLIED AI</p>
        <h1>{site.name}</h1>
        <h2>{site.title}</h2>
        <p className="hero-tagline">{site.tagline}</p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/projects">Explore My Work <ArrowRight size={17} /></Link>
          <Link className="button button-secondary" href="/resume">View Resume</Link>
        </div>
        <div className="social-inline">
          <a href={site.social.github} target="_blank" rel="noopener noreferrer"><ExternalLink size={18} /> GitHub</a>
          <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer"><ExternalLink size={18} /> LinkedIn</a>
          <a href={site.social.kaggle} target="_blank" rel="noopener noreferrer">Kaggle</a>
          {site.social.orcid && <a href={site.social.orcid} target="_blank" rel="noopener noreferrer">ORCID</a>}
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="orbit orbit-1" />
        <div className="orbit orbit-2" />
        <div className="core-node">AI</div>
        <span className="node node-health">Healthcare</span>
        <span className="node node-cv">Computer Vision</span>
        <span className="node node-robotics">Robotics</span>
        <span className="node node-backend">Backend</span>
        <span className="node node-research">Research</span>
      </div>
    </section>
  );
}
