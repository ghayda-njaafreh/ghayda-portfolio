import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BackToHome } from "@/components/PageNavigation";
import ProjectCaseCTA from "@/components/ProjectCaseCTA";
import TetrisCaseStudy from "@/components/TetrisCaseStudy";
import AuthenticationCaseStudy from "@/components/AuthenticationCaseStudy";
import DrNaoCaseStudy from "@/components/DrNaoCaseStudy";
import MedicalSegmentationCaseStudy from "@/components/MedicalSegmentationCaseStudy";
import MLDecisionSurfacesCaseStudy from "@/components/MLDecisionSurfacesCaseStudy";
import ImagingFiltersCaseStudy from "@/components/ImagingFiltersCaseStudy";
import IntelImageClassificationCaseStudy from "@/components/IntelImageClassificationCaseStudy";
import HandwritingOCRCaseStudy from "@/components/HandwritingOCRCaseStudy";
import MnistCnnExperimentsCaseStudy from "@/components/MnistCnnExperimentsCaseStudy";
import BloodDonationCaseStudy from "@/components/BloodDonationCaseStudy";
import { projects } from "@/data/projects";


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  const description = project.description.length > 160
    ? `${project.description.slice(0, 157).trim()}...`
    : project.description;

  const cover = project.slug === "strokelens" ? undefined : `/projects/${project.slug}/cover.png`;

  return {
    title: project.title,
    description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      title: `${project.title} | Ghayda N. Ja'afreh`,
      description,
      url: `/projects/${project.slug}`,
      images: cover ? [{ url: cover, alt: `${project.title} project cover` }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Ghayda N. Ja'afreh`,
      description,
      images: cover ? [cover] : undefined,
    },
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main id="top">
      <Navbar />
      <article className="container case-study">
        <div className="project-top-navigation">
          <BackToHome />
          <a className="back-link" href="/projects"><ArrowLeft size={16}/> Back to projects</a>
        </div>
        <p className="eyebrow">{project.category} · {project.status}</p>
        <h1>{project.title}</h1>
        <p className="case-subtitle">{project.subtitle}</p>
        <p className="case-lead">{project.description}</p>

        <div className="case-meta">
          <div><span>Role</span><strong>{project.role}</strong></div>
          <div><span>Year</span><strong>{project.year}</strong></div>
          <div><span>Status</span><strong>{project.status}</strong></div>
        </div>

        {slug === "tetris-ai-lab" ? (
          <TetrisCaseStudy project={project} />
        ) : slug === "multimodal-authentication" ? (
          <AuthenticationCaseStudy project={project} />
        ) : slug === "dr-nao" ? (
          <DrNaoCaseStudy project={project} />
        ) : slug === "medical-image-segmentation" ? (
          <MedicalSegmentationCaseStudy project={project} />
        ) : slug === "ml-decision-surfaces" ? (
          <MLDecisionSurfacesCaseStudy project={project} />
        ) : slug === "imaging-filters-lab" ? (
          <ImagingFiltersCaseStudy project={project} />
        ) : slug === "intel-image-classification" ? (
          <IntelImageClassificationCaseStudy project={project} />
        ) : slug === "handwriting-ocr" ? (
          <HandwritingOCRCaseStudy project={project} />
        ) : slug === "mnist-cnn-experiments" ? (
          <MnistCnnExperimentsCaseStudy project={project} />
        ) : slug === "blood-donation-system" ? (
          <BloodDonationCaseStudy project={project} />
        ) : slug === "strokelens" ? (
          <>
            <section className="case-section strokelens-closed-section">
              <div className="closed-project-icon"><span aria-hidden="true">PRIVATE</span></div>
              <p className="eyebrow">PROJECT OVERVIEW</p>
              <h2>Graduation project in healthcare AI</h2>
              <p>StrokeLens is a graduation project developed around secure, explainable, and data-driven clinical decision support. The project combines artificial intelligence, healthcare data, explainability, and secure system design within an integrated prototype.</p>
              <div className="closed-project-message">
                <strong>Project details are currently private.</strong>
                <span>Technical methodology, implementation details, results, research materials, and internal project assets are not publicly available at this stage. More information may be released at a later time.</span>
              </div>
              <div className="chips">{project.technologies.map((tech)=><span key={tech}>{tech}</span>)}</div>
            </section>
            <ProjectCaseCTA
              eyebrow="PROJECT OVERVIEW"
              title="Return to the portfolio or revisit this page from the top."
              actions={[{ label: "View All Projects", href: "/projects" }]}
            />
          </>
        ) : (
          <>
            {project.metrics && <section className="case-section"><p className="eyebrow">RESULTS</p><div className="case-metrics">{project.metrics.map((metric)=><div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div></section>}
            <section className="case-section case-two-col">
              <div><p className="eyebrow">OVERVIEW</p><h2>What this project demonstrates</h2><p>This page is the beginning of the project case study. It will be expanded with the real problem statement, workflow, architecture, dataset or inputs, technical decisions, evaluation, screenshots, challenges, and lessons learned.</p></div>
              <div><p className="eyebrow">HIGHLIGHTS</p><ul className="case-list">{project.highlights.map((item)=><li key={item}>{item}</li>)}</ul></div>
            </section>
            <section className="case-section"><p className="eyebrow">TECH STACK</p><div className="chips">{project.technologies.map((tech)=><span key={tech}>{tech}</span>)}</div>{project.github && <a className="button button-secondary" href={project.github} target="_blank" rel="noreferrer"><ExternalLink size={17}/> View Repository</a>}</section>
            <section className="case-section case-placeholder"><p className="eyebrow">NEXT CONTENT PASS</p><h2>Real visuals and deeper technical evidence will be added here.</h2><p>We will replace placeholders with project screenshots, diagrams, evaluation figures, demo media, and project-specific technical details.</p></section>
            <ProjectCaseCTA
              eyebrow="PROJECT NAVIGATION"
              title="Continue exploring the portfolio."
              actions={project.github ? [{ label: "View Repository", href: project.github, primary: true }] : [{ label: "View All Projects", href: "/projects" }]}
            />
          </>
        )}
      </article>
      <Footer />
    </main>
  );
}
