import { Download, Eye } from "lucide-react";
import { resumes } from "@/data/resumes";

type Resume = (typeof resumes)[number];

function ResumeCard({ resume }: { resume: Resume }) {
  return (
    <article className={`resume-card${resume.primary ? " resume-primary" : ""}`}>
      <span>{resume.label}</span>
      <h3>{resume.title}</h3>
      <p>{resume.description}</p>
      <div className="resume-actions">
        <a className="button button-primary" href={resume.file} target="_blank" rel="noreferrer">
          <Eye size={16} /> View Resume
        </a>
        <a className="button button-secondary" href={resume.file} download>
          <Download size={16} /> Download PDF
        </a>
      </div>
    </article>
  );
}

export default function ResumeCenter() {
  const [general, aiEngineer, dataScientist, aiBackend, backend, software] = resumes;

  return (
    <section id="resume" className="container section resume-center">
      <div className="section-heading resume-center-heading">
        <p className="eyebrow">RESUME CENTER</p>
        <h2>One profile, multiple role-focused resumes.</h2>
        <p>Choose the version that best matches the opportunity. The general resume is the recommended starting point; specialized versions emphasize the most relevant technical experience.</p>
      </div>

      <div className="resume-layout">
        <div className="resume-row resume-row-general">
          <ResumeCard resume={general} />
        </div>
        <div className="resume-row resume-row-three">
          <ResumeCard resume={aiEngineer} />
          <ResumeCard resume={dataScientist} />
          <ResumeCard resume={aiBackend} />
        </div>
        <div className="resume-row resume-row-two">
          <ResumeCard resume={backend} />
          <ResumeCard resume={software} />
        </div>
      </div>
    </section>
  );
}
