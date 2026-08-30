import Link from "next/link";
import { ArrowUpRight, BrainCircuit, FlaskConical, Layers3 } from "lucide-react";

const pillars = [
  { icon: BrainCircuit, label: "AI Engineering" },
  { icon: FlaskConical, label: "Research" },
  { icon: Layers3, label: "Applied Systems" },
];

export default function AboutPreview() {
  return (
    <section id="about" className="container section about-preview">
      <div className="about-preview-visual" aria-hidden="true">
        <div className="about-monogram">GJ</div>
        <div className="about-orbit about-orbit-one" />
        <div className="about-orbit about-orbit-two" />
        <span className="about-node about-node-ai">AI</span>
        <span className="about-node about-node-research">Research</span>
        <span className="about-node about-node-systems">Systems</span>
      </div>

      <div className="about-preview-copy">
        <p className="eyebrow">ABOUT ME</p>
        <h2>Building practical AI systems with research-driven thinking.</h2>
        <p>
          I&apos;m an AI Engineer and Data Scientist focused on building practical,
          explainable, and technically grounded systems across machine learning,
          computer vision, backend integration, and applied research.
        </p>
        <p>
          My work connects experimentation with engineering: evaluating models,
          translating ideas into usable workflows, and building systems that are
          clear enough to inspect, test, and improve.
        </p>

        <div className="about-pillars" aria-label="Core professional directions">
          {pillars.map(({ icon: Icon, label }) => (
            <div className="about-pillar" key={label}>
              <Icon size={18} />
              <strong>{label}</strong>
            </div>
          ))}
        </div>

        <Link className="text-link about-link" href="/about">
          More About Me <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
}
