import { Download, ExternalLink } from "lucide-react";
import { credentials, experienceDocuments, type Credential } from "@/data/credentials";

type CredentialGroup = {
  title: string;
  description: string;
  categories: string[];
};

const credentialGroups: CredentialGroup[] = [
  {
    title: "AI, Machine Learning & Data Science",
    description: "Applied AI foundations, machine learning, deep learning, and data-science training.",
    categories: ["AI & Cloud", "Data Science", "Deep Learning", "Machine Learning"],
  },
  {
    title: "Cybersecurity",
    description: "Ethical hacking, security fundamentals, and cybersecurity-focused technical training.",
    categories: ["Cybersecurity"],
  },
  {
    title: "Research Ethics",
    description: "Formal research-ethics training supporting responsible academic and human-subject research practice.",
    categories: ["Research Ethics"],
  },
  {
    title: "Programming, Web & Networking",
    description: "Core programming, web-development, and networking foundations.",
    categories: ["Programming", "Web Development", "Networking"],
  },
  {
    title: "Digital & Communication Skills",
    description: "Supporting digital-literacy and professional English communication training.",
    categories: ["Digital Skills", "Communication"],
  },
];

function CredentialCard({ item }: { item: Credential }) {
  return (
    <article className={`credential-card${item.featured ? " credential-featured" : ""}`}>
      <a className="credential-preview" href={item.certificate} target="_blank" rel="noopener noreferrer" aria-label={`Open ${item.title} certificate`}>
        <img src={item.preview} alt={`${item.title} certificate preview`} loading="lazy" />
        <span>Open certificate ↗</span>
      </a>
      <div className="credential-body">
        <div className="credential-topline"><span>{item.category}</span>{item.featured && <b>Featured</b>}</div>
        <h3>{item.title}</h3>
        <p className="credential-issuer">{item.issuer}</p>
        <dl className="credential-meta">
          {item.issued && <div><dt>Issued</dt><dd>{item.issued}</dd></div>}
          {item.validity && <div><dt>Validity</dt><dd>{item.validity}</dd></div>}
          {item.credentialId && <div><dt>Credential</dt><dd>{item.credentialId}</dd></div>}
          {item.secondaryId && <div><dt>Reference</dt><dd>{item.secondaryId}</dd></div>}
          {item.details && <div><dt>Details</dt><dd>{item.details}</dd></div>}
        </dl>
        <div className="credential-actions">
          <a href={item.certificate} target="_blank" rel="noopener noreferrer"><ExternalLink size={14} /> View</a>
          {item.verifyUrl && <a href={item.verifyUrl} target="_blank" rel="noopener noreferrer"><ExternalLink size={14} /> Verify</a>}
        </div>
      </div>
    </article>
  );
}

export default function Credentials() {
  return (
    <section id="credentials" className="container section credentials-section">
      <div className="section-heading credentials-heading">
        <p className="eyebrow">CERTIFICATIONS & CREDENTIALS</p>
        <h2>Verified learning, technical training, and professional development.</h2>
        <p>Credentials are organized by technical field, with issuer, date, credential identifiers when available, and the original supporting document.</p>
      </div>

      <div className="credential-groups">
        {credentialGroups.map((group) => {
          const items = credentials.filter((item) => group.categories.includes(item.category));
          if (!items.length) return null;
          return (
            <section className={`credential-group${items.length === 1 ? " credential-group-single" : ""}`} key={group.title} aria-labelledby={`credential-group-${group.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
              <div className="credential-group-heading">
                <div>
                  <p className="eyebrow">{group.title.toUpperCase()}</p>
                  <h3 id={`credential-group-${group.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>{group.title}</h3>
                </div>
                <p>{group.description}</p>
              </div>
              <div className={`credentials-grid${items.length === 1 ? " credentials-grid-single" : ""}`}>
                {items.map((item) => <CredentialCard item={item} key={item.title} />)}
              </div>
            </section>
          );
        })}
      </div>

      <div className="experience-documents">
        <div className="experience-documents-heading">
          <p className="eyebrow">EXPERIENCE & TRAINING LETTERS</p>
          <h3>Supporting professional documents.</h3>
        </div>
        <div className="experience-documents-grid">
          {experienceDocuments.map((item) => (
            <article className="experience-document-card" key={item.title}>
              <img src={item.preview} alt={`${item.title} preview`} loading="lazy" />
              <div>
                <span>{item.issuer}</span>
                <h4>{item.title}</h4>
                <p>{item.period} · Issued {item.issued}</p>
                <a href={item.file} target="_blank" rel="noopener noreferrer"><Download size={14} /> View document</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
