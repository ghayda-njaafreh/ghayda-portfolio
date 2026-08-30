import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <article className={`project-card ${project.slug === "dr-nao" ? "drnao-project-card" : ""}`} key={project.slug}>
          {project.slug === "dr-nao" && <a className="drnao-project-thumb" href={`/projects/${project.slug}`}><img src="/projects/dr-nao/home-interface.png" alt="Dr. Nao project interface preview" /></a>}
          {project.slug === "ml-decision-surfaces" && <a className="mlds-project-thumb" href={`/projects/${project.slug}`}><img src="/projects/ml-decision-surfaces/ui.png" alt="ML Decision Surfaces Lab interface preview" /></a>}
          <div className="project-card-top"><span>{project.category}</span><ArrowUpRight size={18} /></div>
          <h3>{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
          {project.metrics && <div className="mini-metrics">{project.metrics.map((m) => <strong key={m.label}>{m.value}<small>{m.label}</small></strong>)}</div>}
          <p>{project.description}</p>
          <div className="chips">{project.technologies.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}</div>
          <a className="text-link" href={`/projects/${project.slug}`}>View Project <ArrowUpRight size={15} /></a>
        </article>
      ))}
    </div>
  );
}
