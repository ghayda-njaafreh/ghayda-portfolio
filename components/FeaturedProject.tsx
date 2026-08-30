import { ArrowUpRight, ExternalLink, Lock } from "lucide-react";
import type { Project } from "@/data/projects";

export default function FeaturedProject({ project, reverse = false }: { project: Project; reverse?: boolean }) {
  if (project.slug === "strokelens") {
    return (
      <article className="featured-project strokelens-private-card">
        <div className="strokelens-private-visual" aria-label="StrokeLens private graduation project overview">
          <div className="visual-grid" />
          <div className="strokelens-lock"><Lock size={30} /></div>
          <div className="visual-label">Graduation Project · Healthcare AI</div>
          <div className="strokelens-private-title">StrokeLens</div>
          <div className="strokelens-private-note">Detailed project information is currently private.</div>
        </div>
        <div className="project-copy strokelens-private-copy">
          <div className="project-kicker">{project.status}</div>
          <h3>{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
          <p>{project.description}</p>
          <div className="private-project-notice"><Lock size={16} /><span>Technical details and project materials are not publicly available at this stage.</span></div>
          <div className="chips">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
          <div className="project-actions">
            <a href={`/projects/${project.slug}`}>Project Overview <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </article>
    );
  }

  if (project.slug === "tetris-ai-lab") {
    return (
      <article className="featured-project project-showcase-card tetris-featured-card">
        <div className="tetris-featured-cover project-showcase-cover">
          <img
            className="tetris-featured-cover-image"
            src="/projects/tetris-ai-lab/cover.png"
            alt="Tetris AI Lab AI gameplay agent project cover"
          />
        </div>
        <div className="tetris-featured-copy project-showcase-copy">
          <div>
            <div className="project-kicker">{project.status}</div>
            <h3>{project.title}</h3>
            <p className="project-subtitle">{project.subtitle}</p>
            <p className="tetris-featured-description">{project.description}</p>
          </div>
          {project.metrics && (
            <div className="project-metrics tetris-featured-metrics">
              {project.metrics.map((metric) => (
                <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>
              ))}
            </div>
          )}
          <div className="chips">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
          <div className="project-actions">
            <a href={`/projects/${project.slug}`}>View Case Study <ArrowUpRight size={16} /></a>
            {project.github && <a href={project.github} target="_blank" rel="noreferrer"><ExternalLink size={16} /> GitHub</a>}
          </div>
        </div>
      </article>
    );
  }


  if (project.slug === "multimodal-authentication") {
    return (
      <article className="featured-project project-showcase-card auth-featured-card">
        <div className="auth-featured-cover project-showcase-cover">
          <img src="/projects/multimodal-authentication/cover.png" alt="Privacy-Safe Multimodal Authentication project cover" />
          <span className="concept-badge">Conceptual project cover</span>
        </div>
        <div className="auth-featured-copy project-showcase-copy">
          <div className="project-kicker">{project.status}</div>
          <h3>{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
          <p>{project.description}</p>
          <ul className="project-highlights">
            {project.highlights.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <div className="chips">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
          <div className="project-actions">
            <a href={`/projects/${project.slug}`}>View Case Study <ArrowUpRight size={16} /></a>
            {project.github && <a href={project.github} target="_blank" rel="noreferrer"><ExternalLink size={16} /> GitHub</a>}
          </div>
        </div>
      </article>
    );
  }

  if (project.slug === "ml-decision-surfaces") {
    return (
      <article className="featured-project project-showcase-card mlds-featured-card">
        <div className="mlds-featured-cover project-showcase-cover">
          <img src="/projects/ml-decision-surfaces/cover.png" alt="ML Decision Surfaces Lab interactive machine learning visualization cover" />
        </div>
        <div className="mlds-featured-copy project-showcase-copy">
          <div className="project-kicker">{project.status}</div>
          <h3>{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
          <p>{project.description}</p>
          <div className="mlds-home-highlights">
            <span>Classification &amp; Regression</span>
            <span>2D / 3D Visualizations</span>
            <span>Synthetic Data + CSV</span>
          </div>
          <div className="chips">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
          <div className="project-actions">
            <a href={`/projects/${project.slug}`}>View Project <ArrowUpRight size={16} /></a>
            {project.github && <a href={project.github} target="_blank" rel="noreferrer"><ExternalLink size={16} /> GitHub</a>}
          </div>
        </div>
      </article>
    );
  }

  if (project.slug === "imaging-filters-lab") {
    return (
      <article className="featured-project project-showcase-card imaging-featured-card">
        <div className="imaging-featured-cover project-showcase-cover">
          <img src="/projects/imaging-filters-lab/cover.png" alt="Imaging Filters Lab interactive digital image processing cover" />
        </div>
        <div className="imaging-featured-copy project-showcase-copy">
          <div className="project-kicker">{project.status}</div>
          <h3>{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
          <p>{project.description}</p>
          <div className="mlds-home-highlights">
            <span>Spatial + Frequency Domain</span>
            <span>Wavelets + Morphology</span>
            <span>Interactive Gradio Lab</span>
          </div>
          <div className="chips">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
          <div className="project-actions">
            <a href={`/projects/${project.slug}`}>View Project <ArrowUpRight size={16} /></a>
            {project.github && <a href={project.github} target="_blank" rel="noreferrer"><ExternalLink size={16} /> GitHub</a>}
          </div>
        </div>
      </article>
    );
  }

  if (project.slug === "handwriting-ocr") {
    return (
      <article className="featured-project project-showcase-card ocr-featured-card">
        <div className="ocr-featured-cover project-showcase-cover">
          <img src="/projects/handwriting-ocr/cover.png" alt="Handwriting OCR HOG and KNN project cover" />
        </div>
        <div className="ocr-featured-copy project-showcase-copy">
          <div className="project-kicker">{project.status}</div>
          <h3>{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
          <p>{project.description}</p>
          {project.metrics && (
            <div className="project-metrics ocr-featured-metrics">
              {project.metrics.map((metric)=><div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
            </div>
          )}
          <div className="mlds-home-highlights"><span>Character Segmentation</span><span>HOG Features</span><span>Word Reconstruction</span></div>
          <div className="chips">{project.technologies.map((tech)=><span key={tech}>{tech}</span>)}</div>
          <div className="project-actions">
            <a href={`/projects/${project.slug}`}>View Case Study <ArrowUpRight size={16} /></a>
            {project.github && <a href={project.github} target="_blank" rel="noreferrer"><ExternalLink size={16}/> GitHub</a>}
            <a href="https://www.kaggle.com/code/jaafreh/ocr-for-handwritten-letters-using-hog-knn" target="_blank" rel="noreferrer"><ExternalLink size={16}/> Kaggle</a>
          </div>
        </div>
      </article>
    );
  }

  if (project.slug === "mnist-cnn-experiments") {
    return (
      <article className="featured-project project-showcase-card mnist-featured-card">
        <div className="mnist-featured-cover project-showcase-cover">
          <img src="/projects/mnist-cnn-experiments/cover.png" alt="MNIST CNN Experiments Batch Normalization comparison project cover" />
        </div>
        <div className="mnist-featured-copy project-showcase-copy">
          <div className="project-kicker">{project.status}</div>
          <h3>{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
          <p>{project.description}</p>
          {project.metrics && <div className="project-metrics mnist-featured-metrics">{project.metrics.map((metric)=><div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div>}
          <div className="mlds-home-highlights"><span>Baseline CNN</span><span>BatchNorm Comparison</span><span>Feature-Map Analysis</span></div>
          <div className="chips">{project.technologies.map((tech)=><span key={tech}>{tech}</span>)}</div>
          <div className="project-actions">
            <a href={`/projects/${project.slug}`}>View Case Study <ArrowUpRight size={16} /></a>
            <a href="https://www.kaggle.com/code/jaafreh/mnist-cnn-batch-normalization-comparison" target="_blank" rel="noreferrer"><ExternalLink size={16}/> Kaggle</a>
          </div>
        </div>
      </article>
    );
  }

  if (project.slug === "intel-image-classification") {
    return (
      <article className="featured-project project-showcase-card intel-featured-card">
        <div className="intel-featured-cover project-showcase-cover">
          <img src="/projects/intel-image-classification/cover.png" alt="Intel Image Classification transfer learning project cover" />
        </div>
        <div className="intel-featured-copy project-showcase-copy">
          <div className="project-kicker">{project.status}</div>
          <h3>{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
          <p>{project.description}</p>
          {project.metrics && <div className="project-metrics intel-featured-metrics">{project.metrics.map((metric)=><div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div>}
          <div className="mlds-home-highlights"><span>Baseline CNN</span><span>Transfer Learning</span><span>Fine-Tuning</span></div>
          <div className="chips">{project.technologies.map((tech)=><span key={tech}>{tech}</span>)}</div>
          <div className="project-actions">
            <a href={`/projects/${project.slug}`}>View Case Study <ArrowUpRight size={16} /></a>
            <a href="https://www.kaggle.com/code/jaafreh/intel-image-classification-using-transfer-learning" target="_blank" rel="noreferrer"><ExternalLink size={16}/> Kaggle</a>
          </div>
        </div>
      </article>
    );
  }

  if (project.slug === "blood-donation-system") {
    return (
      <article className="featured-project project-showcase-card blood-featured-card">
        <div className="blood-featured-cover project-showcase-cover">
          <img src="/projects/blood-donation-system/cover.png" alt="Blood Donation System full-stack web application cover" />
        </div>
        <div className="blood-featured-copy project-showcase-copy">
          <div className="project-kicker">{project.status}</div>
          <h3>{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
          <p>{project.description}</p>
          <div className="mlds-home-highlights"><span>Donor Registration</span><span>Compatibility Search</span><span>Admin Management</span></div>
          <div className="chips">{project.technologies.map((tech)=><span key={tech}>{tech}</span>)}</div>
          <div className="project-actions">
            <a href={`/projects/${project.slug}`}>View Case Study <ArrowUpRight size={16} /></a>
            {project.github && <a href={project.github} target="_blank" rel="noreferrer"><ExternalLink size={16}/> GitHub</a>}
          </div>
        </div>
      </article>
    );
  }

  if (project.slug === "medical-image-segmentation") {
    return (
      <article className="featured-project project-showcase-card medseg-featured-card">
        <div className="medseg-featured-cover project-showcase-cover">
          <img src="/projects/medical-image-segmentation/cover.png" alt="Medical image segmentation dental X-ray project cover" />
        </div>
        <div className="medseg-featured-copy project-showcase-copy">
          <div className="project-kicker">{project.status}</div>
          <h3>{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
          <p>{project.description}</p>
          {project.metrics && <div className="project-metrics medseg-featured-metrics">{project.metrics.map((metric)=><div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div>}
          <div className="chips">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
          <div className="project-actions">
            <a href={`/projects/${project.slug}`}>View Case Study <ArrowUpRight size={16} /></a>
            <a href="https://www.kaggle.com/jaafreh" target="_blank" rel="noreferrer"><ExternalLink size={16}/> Kaggle</a>
          </div>
        </div>
      </article>
    );
  }

  if (project.slug === "dr-nao") {
    return (
      <article className="featured-project project-showcase-card drnao-featured-card">
        <div className="drnao-featured-cover project-showcase-cover">
          <img src="/projects/dr-nao/cover.png" alt="Dr. Nao AI-assisted dermatology and robotics project cover" />
        </div>
        <div className="drnao-featured-copy project-showcase-copy">
          <div className="project-kicker">{project.status}</div>
          <h3>{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
          <p>{project.description}</p>
          <div className="chips">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
          <div className="project-actions">
            <a href={`/projects/${project.slug}`}>View Project <ArrowUpRight size={16} /></a>
            {project.github && <a href={project.github} target="_blank" rel="noreferrer"><ExternalLink size={16} /> GitHub</a>}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className={`featured-project ${reverse ? "reverse" : ""}`}>
      <div className="project-visual">
        <div className="visual-grid" />
        <div className="visual-label">{project.category}</div>
        <div className="visual-title">{project.title}</div>
      </div>
      <div className="project-copy">
        <div className="project-kicker">{project.status}</div>
        <h3>{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
        <p>{project.description}</p>
        {project.metrics && (
          <div className="project-metrics">
            {project.metrics.map((metric) => (
              <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>
            ))}
          </div>
        )}
        <ul className="project-highlights">
          {project.highlights.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <div className="chips">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
        <div className="project-actions">
          <a href={`/projects/${project.slug}`}>View Case Study <ArrowUpRight size={16} /></a>
          {project.github && <a href={project.github} target="_blank" rel="noreferrer"><ExternalLink size={16} /> GitHub</a>}
        </div>
      </div>
    </article>
  );
}
