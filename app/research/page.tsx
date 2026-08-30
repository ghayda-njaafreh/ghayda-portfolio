import type { Metadata } from "next";
import { BackToHome, BackToTop } from "@/components/PageNavigation";
import { ShieldCheck, Microscope, BarChart3, Eye } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Research & Academic Work",
  description: "Research interests and academic work across trustworthy AI, explainable machine learning, model evaluation, computer vision, and secure AI systems.",
  alternates: { canonical: "/research" },
};

const focuses = [
  { icon: Microscope, title: "Healthcare AI", text: "Applied machine-learning work around structured healthcare data and clinical decision-support research." },
  { icon: Eye, title: "Explainable AI", text: "Interest in systems whose outputs, model behavior, and limitations can be inspected and communicated clearly." },
  { icon: BarChart3, title: "Model Evaluation", text: "Controlled comparison, validation, threshold-aware evaluation, error analysis, and evidence-driven reporting." },
  { icon: ShieldCheck, title: "Secure AI Systems", text: "Research and engineering choices that consider privacy, access control, auditability, and responsible public release." },
];

export default function ResearchPage() {
  return (
    <main id="top">
      <Navbar />
      <div className="container"><BackToHome /></div>
      <section className="container route-page-hero">
        <p className="eyebrow">RESEARCH & ACADEMIC WORK</p>
        <h1>Applied research with a focus on trustworthy, explainable AI.</h1>
        <p>Research interests connect healthcare AI, explainable machine learning, model evaluation, computer vision, and secure AI systems.</p>
      </section>

      <section className="container route-page-content research-page-grid">
        {focuses.map(({ icon: Icon, title, text }) => (
          <article className="research-focus-card" key={title}>
            <Icon size={22} />
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <div className="container"><BackToTop /></div>
      <Footer />
    </main>
  );
}
