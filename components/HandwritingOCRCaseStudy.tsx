import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import ProjectCaseCTA from "@/components/ProjectCaseCTA";

const screenshots = [
  {
    src: "/projects/handwriting-ocr/real-handwriting-examples.png",
    label: "Real handwriting examples · segmented words and reconstructed text",
    alt: "Multiple handwritten words with character boxes and OCR annotations",
    wide: true,
  },
  {
    src: "/projects/handwriting-ocr/emnist-samples.png",
    label: "EMNIST Letters · sample training characters",
    alt: "Sample handwritten letters from the EMNIST Letters dataset",
  },
  {
    src: "/projects/handwriting-ocr/confusion-matrix.png",
    label: "Official evaluation · EMNIST Letters confusion matrix",
    alt: "Confusion matrix for the HOG and KNN handwriting recognition model",
  },
  {
    src: "/projects/handwriting-ocr/dream-result.png",
    label: "Custom word test · Dream",
    alt: "OCR result for the handwritten word Dream",
  },
  {
    src: "/projects/handwriting-ocr/freelance-result.png",
    label: "Custom word test · Freelance",
    alt: "OCR result for the handwritten word Freelance",
  },
  {
    src: "/projects/handwriting-ocr/puzzle-result.png",
    label: "Custom word test · Puzzle",
    alt: "OCR result for the handwritten word Puzzle",
  },
];

export default function HandwritingOCRCaseStudy({ project }: { project: Project }) {
  return (
    <>
      <section className="ocr-hero-media case-project-hero">
        <img src="/projects/handwriting-ocr/cover.png" alt="Handwriting OCR HOG and KNN project cover" />
      </section>

      <section className="case-section case-two-col">
        <div>
          <p className="eyebrow">OVERVIEW</p>
          <h2>A classical OCR pipeline built around shape features</h2>
          <p>
            This project recognizes handwritten English letters using Histogram of Oriented Gradients (HOG) features and a K-Nearest Neighbors classifier. EMNIST Letters provides the official evaluation set, while an additional isolated-character dataset enriches training.
          </p>
          <p>
            The notebook extends isolated-character recognition into a practical OCR workflow by segmenting custom handwritten word images into letters, classifying each character, and reconstructing the predicted word.
          </p>
        </div>
        <div>
          <p className="eyebrow">DATASET &amp; FEATURES</p>
          <div className="ocr-fact-grid">
            <div><strong>103,504</strong><span>Training letter images after enrichment</span></div>
            <div><strong>14,800</strong><span>Official EMNIST test images</span></div>
            <div><strong>1,296</strong><span>HOG features per image</span></div>
            <div><strong>7</strong><span>KNN neighbors, distance weighted</span></div>
          </div>
        </div>
      </section>

      <section className="case-section">
        <p className="eyebrow">RECOGNITION PIPELINE</p>
        <h2>Word image → character segmentation → HOG → KNN → text</h2>
        <div className="ocr-flow">
          <div><span>01</span><strong>Character Segmentation</strong><p>Custom word images are separated into individual handwritten character regions.</p></div>
          <div><span>02</span><strong>HOG Feature Extraction</strong><p>Each normalized 28×28 letter is converted into a 1,296-dimensional gradient-orientation descriptor.</p></div>
          <div><span>03</span><strong>KNN Classification</strong><p>A distance-weighted KNN model with 7 neighbors predicts the corresponding English letter class.</p></div>
          <div><span>04</span><strong>Word Reconstruction</strong><p>Predicted characters are placed back in reading order to form the recognized word.</p></div>
        </div>
      </section>

      <section className="case-section">
        <p className="eyebrow">OFFICIAL EVALUATION</p>
        <div className="ocr-result-banner case-result-banner">
          <div><strong>88.26%</strong><span>EMNIST Letters Test Accuracy</span></div>
          <div><strong>HOG + KNN</strong><span>Classical recognition pipeline</span></div>
          <div><strong>26 Letters</strong><span>English alphabet recognition target</span></div>
        </div>
        <p className="case-supporting-note">The official score is measured on the EMNIST Letters test split. The additional handwritten-character dataset is used to enrich training rather than replace the official test set.</p>
      </section>

      <section className="case-section">
        <div className="benchmark-heading">
          <div><p className="eyebrow">PROJECT GALLERY</p><h2>From benchmark letters to real handwritten words</h2></div>
          <p>The gallery combines outputs from the completed Kaggle notebook with a real handwriting demonstration sheet, showing both character-level evaluation and end-to-end word reconstruction.</p>
        </div>
        <div className="ocr-gallery case-project-gallery">
          {screenshots.map((item) => (
            <figure key={item.src} className={item.wide ? "ocr-gallery-wide" : ""}>
              <a href={item.src} target="_blank" rel="noreferrer" className="ocr-gallery-media case-gallery-media">
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
          <h2>Feature engineering and classical ML remain useful for OCR</h2>
          <p>
            The project emphasizes a complete classical computer-vision workflow: image preparation, handcrafted HOG features, KNN classification, benchmark evaluation, segmentation logic, and visual inspection of errors on custom handwriting.
          </p>
        </div>
        <div>
          <p className="eyebrow">TECH STACK</p>
          <div className="chips">{project.technologies.map((tech)=><span key={tech}>{tech}</span>)}</div>
        </div>
      </section>

      <ProjectCaseCTA
        eyebrow="PUBLIC PROJECT"
        title="Code, trained model release, and full notebook."
        description="The GitHub repository contains the lightweight demo structure and links to the pre-trained KNN + HOG model release. Kaggle contains the complete training and evaluation notebook."
        actions={[
          { label: "View GitHub Repository", href: "https://github.com/ghayda-njaafreh/ocr-handwriting-knn-hog", primary: true },
          { label: "View Kaggle Notebook", href: "https://www.kaggle.com/code/jaafreh/ocr-for-handwritten-letters-using-hog-knn" },
        ]}
      />
    </>
  );
}
