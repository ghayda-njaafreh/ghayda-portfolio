import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { BackToHome, BackToTop } from "@/components/PageNavigation";
import Footer from "@/components/Footer";
import FeaturedProject from "@/components/FeaturedProject";
import AdditionalExperiments from "@/components/AdditionalExperiments";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Applied AI, computer vision, software, and research-oriented projects by Ghayda N. Ja'afreh.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main id="top">
      <Navbar />
      <div className="container"><BackToHome /></div>
      <section className="container route-page-hero">
        <p className="eyebrow">PROJECTS</p>
        <h1>Applied AI, computer vision, software, and research-oriented systems.</h1>
        <p>Complete project collection with public case studies, technical evidence, repositories, notebooks, and privacy-aware project summaries.</p>
      </section>

      <section className="container route-page-content">
        <div className="featured-stack">
          {projects.map((project) => <FeaturedProject project={project} key={project.slug} />)}
        </div>
        <AdditionalExperiments />
      </section>
      <div className="container route-page-bottom-nav"><BackToTop /></div>
      <Footer />
    </main>
  );
}
