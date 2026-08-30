import type { Metadata } from "next";
import Link from "next/link";
import { BrainCircuit, FlaskConical, Layers3 } from "lucide-react";
import Navbar from "@/components/Navbar";
import { BackToHome, BackToTop } from "@/components/PageNavigation";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "About Ghayda N. Ja'afreh — AI Engineer and Data Scientist working across machine learning, computer vision, backend integration, and applied research.",
  alternates: { canonical: "/about" },
};

const directions = [
  {
    icon: BrainCircuit,
    title: "AI Engineering",
    text: "Building and evaluating machine-learning and computer-vision workflows, with attention to explainability, robustness, and practical use.",
  },
  {
    icon: FlaskConical,
    title: "Research",
    text: "Working through controlled experiments, model evaluation, academic problem framing, and evidence-driven technical communication.",
  },
  {
    icon: Layers3,
    title: "Applied Systems",
    text: "Connecting models with interfaces, APIs, secure workflows, and software components so experiments become usable systems.",
  },
];

export default function AboutPage() {
  return (
    <main id="top">
      <Navbar />
      <section className="container about-page-hero">
        <BackToHome className="about-back-link" />
        <p className="eyebrow">ABOUT</p>
        <h1>Engineering practical AI systems with research-driven thinking.</h1>
        <p className="about-page-lead">
          I&apos;m {site.name}, an AI Engineer and Data Scientist working across machine learning,
          computer vision, data science, backend integration, and applied research. I&apos;m most
          interested in projects where careful experimentation and practical engineering need
          to work together.
        </p>
      </section>

      <section className="container about-page-section">
        <div className="about-page-story">
          <div>
            <p className="eyebrow">HOW I WORK</p>
            <h2>From experiments to understandable, usable workflows.</h2>
          </div>
          <div className="about-page-copy">
            <p>
              My portfolio reflects a deliberately broad technical path: model comparison and
              evaluation, computer-vision applications, interactive AI tools, secure backend
              workflows, and research-oriented projects. The common thread is a preference for
              systems that can be inspected, tested, and explained rather than treated as black boxes.
            </p>
            <p>
              I value reproducibility, clear evidence, responsible communication of results, and
              implementation choices that match the actual problem. That approach carries from
              academic work into software and applied AI projects.
            </p>
          </div>
        </div>

        <div className="about-direction-grid">
          {directions.map(({ icon: Icon, title, text }) => (
            <article className="about-direction-card" key={title}>
              <Icon size={22} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>


      <section className="container about-page-section about-technical-focus">
        <div className="section-heading">
          <p className="eyebrow">TECHNICAL FOCUS</p>
          <h2>What I work with.</h2>
          <p>A cross-disciplinary toolkit connecting AI research, engineering, data, computer vision, and software integration.</p>
        </div>
        <Skills />
      </section>

      <section className="container about-page-section about-page-cta">
        <p className="eyebrow">EXPLORE THE WORK</p>
        <h2>See how those directions come together in the portfolio.</h2>
        <div className="hero-actions">
          <Link className="button button-primary" href="/projects">View Projects</Link>
          <Link className="button button-secondary" href="/research">Research & Academic Work</Link>
        </div>
      </section>
      <div className="container"><BackToTop /></div>
      <Footer />
    </main>
  );
}
