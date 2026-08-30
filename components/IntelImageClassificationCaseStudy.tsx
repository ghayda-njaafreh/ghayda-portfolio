import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import ProjectCaseCTA from "@/components/ProjectCaseCTA";

const screenshots = [
  { src: "/projects/intel-image-classification/class-samples.png", label: "Dataset · Six Natural Scene Classes", alt: "Example images from the six Intel scene classification classes" },
  { src: "/projects/intel-image-classification/fine-tuned-curves.png", label: "Fine-Tuning · Accuracy & Loss", alt: "Fine-tuned EfficientNetB0 training and validation curves" },
  { src: "/projects/intel-image-classification/model-comparison.png", label: "Model Comparison · Test Accuracy", alt: "Comparison of baseline CNN, transfer learning, and fine-tuned EfficientNetB0 test accuracy" },
  { src: "/projects/intel-image-classification/confusion-matrix.png", label: "Evaluation · Confusion Matrix", alt: "Confusion matrix for the fine-tuned EfficientNetB0 model" },
  { src: "/projects/intel-image-classification/correct-predictions.png", label: "Prediction Review · Correct Examples", alt: "Correct natural scene predictions from the final model" },
  { src: "/projects/intel-image-classification/incorrect-predictions.png", label: "Prediction Review · Incorrect Examples", alt: "Incorrect natural scene predictions used for error inspection" },
];

export default function IntelImageClassificationCaseStudy({ project }: { project: Project }) {
  return (
    <>
      <section className="intel-hero-media">
        <img src="/projects/intel-image-classification/cover.png" alt="Intel Image Classification transfer learning project cover" />
      </section>

      <section className="case-section case-two-col">
        <div>
          <p className="eyebrow">OVERVIEW</p>
          <h2>From a baseline CNN to transfer learning and fine-tuning</h2>
          <p>
            This project studies six-class natural-scene recognition using the Intel Image Classification dataset. It compares a CNN trained from scratch with EfficientNetB0 transfer learning and a fine-tuned EfficientNetB0 model.
          </p>
          <p>
            The workflow includes preprocessing, training, model comparison, confusion-matrix analysis, and visual inspection of correct and incorrect predictions.
          </p>
        </div>
        <div>
          <p className="eyebrow">SCENE CLASSES</p>
          <div className="intel-class-grid">
            {['Buildings','Forest','Glacier','Mountain','Sea','Street'].map((item)=><span key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      <section className="case-section">
        <p className="eyebrow">MODEL PROGRESSION</p>
        <h2>Three progressively stronger training strategies</h2>
        <div className="intel-model-grid">
          <div><span>01</span><strong>Baseline CNN</strong><p>Custom convolutional network trained from scratch to establish a task-specific baseline.</p><b>86.50% Test Accuracy</b></div>
          <div><span>02</span><strong>EfficientNetB0 Transfer Learning</strong><p>ImageNet-pretrained EfficientNetB0 used as a feature extractor with an adapted classification head.</p><b>92.70% Test Accuracy</b></div>
          <div className="intel-best-model"><span>03</span><strong>Fine-Tuned EfficientNetB0</strong><p>Selected pretrained layers are unfrozen and adapted to the scene-classification task.</p><b>92.73% Test Accuracy</b></div>
        </div>
      </section>

      <section className="case-section">
        <p className="eyebrow">FINAL RESULT</p>
        <div className="intel-result-banner">
          <div><strong>92.73%</strong><span>Best Test Accuracy</span></div>
          <div><strong>Fine-Tuned EfficientNetB0</strong><span>Selected final model</span></div>
          <div><strong>6</strong><span>Natural scene classes</span></div>
        </div>
      </section>

      <section className="case-section">
        <div className="benchmark-heading">
          <div><p className="eyebrow">PROJECT GALLERY</p><h2>Training evidence and model behavior</h2></div>
          <p>Figures below are taken directly from the completed Kaggle notebook and show the dataset, training behavior, model comparison, confusion matrix, and prediction review.</p>
        </div>
        <div className="intel-gallery">
          {screenshots.map((item)=>(
            <figure key={item.src}>
              <a href={item.src} target="_blank" rel="noreferrer" className="intel-gallery-media">
                <img src={item.src} alt={item.alt} loading="lazy" />
                <span>Open full size ↗</span>
              </a>
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="case-section case-two-col">
        <div>
          <p className="eyebrow">WHAT THIS PROJECT DEMONSTRATES</p>
          <h2>Transfer learning as an experimental comparison, not just a final model</h2>
          <p>The value of the project is the comparison between training from scratch, frozen pretrained features, and controlled fine-tuning. The final notebook also inspects class-level errors rather than relying on accuracy alone.</p>
        </div>
        <div>
          <p className="eyebrow">TECH STACK</p>
          <div className="chips">{project.technologies.map((tech)=><span key={tech}>{tech}</span>)}</div>
        </div>
      </section>

      <ProjectCaseCTA
        eyebrow="PUBLIC NOTEBOOK"
        title="Explore the complete experiment on Kaggle."
        description="The public notebook contains the full preprocessing, training, evaluation, model comparison, and prediction-analysis workflow."
        actions={[{ label: "View Kaggle Notebook", href: "https://www.kaggle.com/code/jaafreh/intel-image-classification-using-transfer-learning", primary: true }]}
      />
    </>
  );
}
