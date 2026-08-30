import { ArrowUp, ExternalLink } from "lucide-react";

type Action = {
  label: string;
  href: string;
  primary?: boolean;
};

export default function ProjectCaseCTA({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  actions?: Action[];
}) {
  return (
    <section className="case-project-cta case-project-cta-unified">
      <div className="case-project-cta-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
      <div className="case-project-cta-actions">
        {actions?.map((action, index) => {
          const external = /^https?:\/\//.test(action.href);
          return (
            <a
              className={`button ${action.primary ?? index === 0 ? "button-primary" : "button-secondary"}`}
              href={action.href}
              key={`${action.label}-${action.href}`}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
            >
              {external ? <ExternalLink size={16} /> : null} {action.label}
            </a>
          );
        })}
        <a className="button button-secondary" href="#top">
          <ArrowUp size={16} /> Back to top
        </a>
      </div>
    </section>
  );
}
