import { ExternalLink } from "lucide-react";
import { kaggleExperiments } from "@/data/experiments";

export default function AdditionalExperiments() {
  return (
    <section className="additional-experiments" aria-labelledby="additional-experiments-title">
      <div className="additional-experiments-heading">
        <div>
          <p className="eyebrow">ADDITIONAL KAGGLE EXPERIMENTS</p>
          <h3 id="additional-experiments-title">Focused experiments beyond the main case studies.</h3>
        </div>
        <p>
          Smaller, targeted notebooks kept intentionally separate from the full project showcase so the main portfolio stays focused while still documenting broader ML practice.
        </p>
      </div>

      <div className="experiment-grid">
        {kaggleExperiments.map((experiment) => (
          <article className="experiment-card" key={experiment.title}>
            <div className="experiment-card-top">
              <div>
                <span className="experiment-type">KAGGLE NOTEBOOK</span>
                <h4>{experiment.title}</h4>
                <p className="experiment-subtitle">{experiment.subtitle}</p>
              </div>
              <a href={experiment.kaggle} target="_blank" rel="noreferrer" aria-label={`Open ${experiment.title} on Kaggle`}>
                <ExternalLink size={18} />
              </a>
            </div>

            <p className="experiment-description">{experiment.description}</p>

            <div className="experiment-metrics">
              {experiment.metrics.map((metric) => (
                <div key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>

            <ul className="experiment-highlights">
              {experiment.highlights.map((item) => <li key={item}>{item}</li>)}
            </ul>

            <div className="chips experiment-chips">
              {experiment.technologies.map((tech) => <span key={tech}>{tech}</span>)}
            </div>

            <a className="experiment-link" href={experiment.kaggle} target="_blank" rel="noreferrer">
              View Kaggle Notebook <ExternalLink size={15} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
