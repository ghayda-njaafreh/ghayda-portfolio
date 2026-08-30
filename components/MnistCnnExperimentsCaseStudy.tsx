import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import ProjectCaseCTA from "@/components/ProjectCaseCTA";

const screenshots = [
  {
    src: "/projects/mnist-cnn-experiments/mnist-samples.png",
    label: "MNIST · Sample training digits",
    alt: "Sample handwritten digit images from the MNIST training set",
  },
  {
    src: "/projects/mnist-cnn-experiments/accuracy-comparison.png",
    label: "Controlled comparison · Test accuracy",
    alt: "Accuracy comparison between CNN models without and with batch normalization",
  },
  {
    src: "/projects/mnist-cnn-experiments/loss-comparison.png",
    label: "Training behavior · Loss comparison",
    alt: "Training loss comparison for CNN models without and with batch normalization",
  },
  {
    src: "/projects/mnist-cnn-experiments/confusion-matrix-bn.png",
    label: "Best model · Confusion matrix",
    alt: "Confusion matrix for the CNN with batch normalization",
  },
  {
    src: "/projects/mnist-cnn-experiments/feature-maps.png",
    label: "Baseline CNN · Feature-map inspection",
    alt: "Example feature maps produced by convolutional blocks in the baseline MNIST CNN",
  },
  {
    src: "/projects/mnist-cnn-experiments/predictions-bn.png",
    label: "Best model · Sample test predictions",
    alt: "Sample MNIST predictions produced by the CNN with batch normalization",
  },
  {
    src: "/projects/mnist-cnn-experiments/custom-digits.png",
    label: "Baseline experiment · Custom handwritten digit predictions",
    alt: "Predictions on custom handwritten digit images from the baseline MNIST CNN experiment",
  },
];

export default function MnistCnnExperimentsCaseStudy({ project }: { project: Project }) {
  return (
    <>
      <section className="mnist-hero-media case-project-hero">
        <img src="/projects/mnist-cnn-experiments/cover.png" alt="MNIST CNN Experiments controlled Batch Normalization comparison cover" />
      </section>

      <section className="case-section case-two-col">
        <div>
          <p className="eyebrow">OVERVIEW</p>
          <h2>A controlled CNN experiment centered on Batch Normalization</h2>
          <p>
            This project combines two MNIST notebooks into one focused deep-learning case study. The first establishes a compact CNN baseline, while the second performs a controlled comparison between closely matched CNN architectures with and without Batch Normalization.
          </p>
          <p>
            The comparison keeps the task and overall training setup aligned so the effect of Batch Normalization can be examined through accuracy, loss behavior, runtime, confusion matrices, and prediction examples.
          </p>
        </div>
        <div>
          <p className="eyebrow">EXPERIMENT STRUCTURE</p>
          <div className="mnist-fact-grid">
            <div><strong>98.84%</strong><span>Compact baseline CNN test accuracy</span></div>
            <div><strong>99.19%</strong><span>CNN without BatchNorm</span></div>
            <div><strong>99.37%</strong><span>CNN with BatchNorm</span></div>
            <div><strong>+0.18 pp</strong><span>Accuracy gain in the controlled comparison</span></div>
          </div>
        </div>
      </section>

      <section className="case-section">
        <p className="eyebrow">CONTROLLED COMPARISON</p>
        <h2>Same classification task, one deliberate architectural change</h2>
        <div className="mnist-compare-grid">
          <div>
            <span>01</span>
            <strong>CNN without Batch Normalization</strong>
            <p>Convolutional architecture trained without BatchNorm layers to establish the comparison reference.</p>
            <b>99.19% Test Accuracy</b>
          </div>
          <div className="mnist-best-model">
            <span>02</span>
            <strong>CNN with Batch Normalization</strong>
            <p>BatchNorm layers are introduced while preserving the same task and comparable training conditions.</p>
            <b>99.37% Test Accuracy</b>
          </div>
        </div>
      </section>

      <section className="case-section">
        <p className="eyebrow">RESULT AT A GLANCE</p>
        <div className="case-result-banner mnist-result-banner">
          <div><strong>99.37%</strong><span>Best Test Accuracy</span></div>
          <div><strong>+0.18 pp</strong><span>Accuracy Gain with BatchNorm</span></div>
          <div><strong>70.83s</strong><span>Training Time with BatchNorm</span></div>
        </div>
        <p className="case-supporting-note">The corresponding no-BatchNorm training time in the notebook is 69.54 seconds, so the accuracy improvement came with only a small runtime increase in this experiment.</p>
      </section>

      <section className="case-section case-two-col">
        <div>
          <p className="eyebrow">BASELINE CONTEXT</p>
          <h2>A separate compact CNN experiment anchors the progression</h2>
          <p>
            The earlier MNIST notebook provides additional baseline context with a compact PyTorch CNN that achieved 98.84% test accuracy. It also includes feature-map inspection, confusion-matrix analysis, standard test predictions, and custom handwritten digit examples.
          </p>
        </div>
        <div>
          <p className="eyebrow">WHAT THIS PROJECT DEMONSTRATES</p>
          <ul className="case-list">
            <li>Controlled architecture comparison</li>
            <li>Batch Normalization as an isolated experimental factor</li>
            <li>Training-loss and runtime analysis</li>
            <li>Confusion-matrix and prediction inspection</li>
            <li>Feature-map visualization in a compact CNN</li>
          </ul>
        </div>
      </section>

      <section className="case-section">
        <div className="benchmark-heading">
          <div><p className="eyebrow">PROJECT GALLERY</p><h2>Evidence from both completed MNIST notebooks</h2></div>
          <p>These figures are taken directly from the uploaded notebooks and show the data, model comparison, training behavior, feature maps, evaluation, and prediction examples.</p>
        </div>
        <div className="case-project-gallery mnist-gallery">
          {screenshots.map((item) => (
            <figure key={item.src}>
              <a href={item.src} target="_blank" rel="noreferrer" className="case-gallery-media">
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
          <p className="eyebrow">INTERPRETATION</p>
          <h2>The value is in the comparison, not just the final percentage</h2>
          <p>
            MNIST accuracy is already high for compact CNNs, so the portfolio value of this project is the controlled experimental design. The notebooks make it possible to compare a standard CNN, a no-BatchNorm reference, and a BatchNorm variant while inspecting both quantitative and visual evidence.
          </p>
        </div>
        <div>
          <p className="eyebrow">TECH STACK</p>
          <div className="chips">{project.technologies.map((tech)=><span key={tech}>{tech}</span>)}</div>
        </div>
      </section>

      <ProjectCaseCTA
        eyebrow="PUBLIC NOTEBOOKS"
        title="Explore both MNIST experiments on Kaggle."
        description="The two public notebooks provide the compact CNN baseline and the focused Batch Normalization comparison that are combined in this portfolio case study."
        actions={[
          { label: "BatchNorm Comparison", href: "https://www.kaggle.com/code/jaafreh/mnist-cnn-batch-normalization-comparison", primary: true },
          { label: "Baseline CNN Notebook", href: "https://www.kaggle.com/code/jaafreh/mnist-digit-classification-with-cnn-using-pytorch" },
        ]}
      />
    </>
  );
}
