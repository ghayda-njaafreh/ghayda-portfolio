import { ExternalLink, Layers3, ScanLine, SlidersHorizontal, TestTube2 } from "lucide-react";
import type { Project } from "@/data/projects";
import ProjectCaseCTA from "@/components/ProjectCaseCTA";

const teethKaggle = "https://www.kaggle.com/code/jaafreh/teeth-instance-segmentation-on-dental-x-ray-images";
const cariesKaggle = "https://www.kaggle.com/code/jaafreh/dental-caries-segmentation-using-u-net";

export default function MedicalSegmentationCaseStudy({ project }: { project: Project }) {
  return (
    <>
      <section className="medseg-hero-media">
        <img src="/projects/medical-image-segmentation/cover.png" alt="Medical image segmentation project cover showing dental X-ray instance and semantic segmentation" />
      </section>

      <section className="case-section medseg-intro-grid">
        <div>
          <p className="eyebrow">OVERVIEW</p>
          <h2>Two dental-imaging problems, two segmentation paradigms.</h2>
          <p>
            This project collection brings together two computer-vision workflows: tooth <strong>instance segmentation</strong> on panoramic dental X-rays using YOLOv8, and dental-caries <strong>semantic segmentation</strong> using a custom PyTorch U-Net. Together they demonstrate annotation handling, training, model selection, threshold tuning, held-out evaluation, and visual inspection of predicted masks.
          </p>
        </div>
        <aside className="case-note medseg-note">
          <span>RESPONSIBLE USE</span>
          <strong>Educational computer-vision work</strong>
          <p>The models are portfolio and academic projects, not clinically validated diagnostic systems.</p>
        </aside>
      </section>

      <section className="case-section">
        <p className="eyebrow">RESULTS AT A GLANCE</p>
        <div className="case-metrics medseg-metrics">
          <div><strong>0.9943</strong><span>YOLOv8s-seg · Test Mask mAP50</span></div>
          <div><strong>0.6180</strong><span>YOLOv8s-seg · Test Mask mAP50-95</span></div>
          <div><strong>0.8988</strong><span>Custom U-Net · Test Dice</span></div>
          <div><strong>0.8163</strong><span>Custom U-Net · Test IoU</span></div>
        </div>
      </section>

      <section className="case-section medseg-project-block">
        <div className="medseg-project-heading">
          <div>
            <p className="eyebrow">PROJECT 01 · INSTANCE SEGMENTATION</p>
            <h2>Teeth Instance Segmentation</h2>
            <p>Individual teeth are localized and segmented as separate object instances from panoramic dental radiographs.</p>
          </div>
          <a className="button button-secondary" href={teethKaggle} target="_blank" rel="noreferrer"><ExternalLink size={17}/> Open Kaggle Notebook</a>
        </div>

        <div className="medseg-fact-grid">
          <article><Layers3 size={21}/><span>Selected model</span><strong>YOLOv8s-seg</strong></article>
          <article><ScanLine size={21}/><span>Validation Mask mAP50</span><strong>0.9947</strong></article>
          <article><TestTube2 size={21}/><span>Test Mask mAP50</span><strong>0.9943</strong></article>
          <article><TestTube2 size={21}/><span>Test Mask mAP50-95</span><strong>0.6180</strong></article>
        </div>

        <div className="case-two-col medseg-copy-grid">
          <div>
            <h3>Dataset preparation</h3>
            <p>Polygon annotations were converted into YOLO segmentation format and visually checked before training. The final split contained <strong>415 training</strong>, <strong>90 validation</strong>, and <strong>90 test</strong> images.</p>
          </div>
          <div>
            <h3>Model selection</h3>
            <p>YOLOv8n-seg and YOLOv8s-seg were compared under the same training workflow. The final model was selected using validation Mask mAP50-95, then evaluated separately on the held-out test set.</p>
          </div>
        </div>

        <div className="project-gallery medseg-gallery">
          <figure>
            <a className="medseg-gallery-media" href="/projects/medical-image-segmentation/teeth-ground-truth.png" target="_blank" rel="noreferrer"><img src="/projects/medical-image-segmentation/teeth-ground-truth.png" alt="Dental X-ray tooth polygon ground-truth visualization"/><span>Open full size ↗</span></a>
            <figcaption><strong>Ground-Truth Inspection</strong><span>Polygon masks over panoramic X-rays before training.</span></figcaption>
          </figure>
          <figure>
            <a className="medseg-gallery-media" href="/projects/medical-image-segmentation/teeth-model-comparison.png" target="_blank" rel="noreferrer"><img src="/projects/medical-image-segmentation/teeth-model-comparison.png" alt="YOLOv8 segmentation model comparison chart"/><span>Open full size ↗</span></a>
            <figcaption><strong>Model Comparison</strong><span>Validation Mask mAP50-95 comparison used for model selection.</span></figcaption>
          </figure>
          <figure className="medseg-gallery-wide">
            <a className="medseg-gallery-media" href="/projects/medical-image-segmentation/teeth-predictions.png" target="_blank" rel="noreferrer"><img src="/projects/medical-image-segmentation/teeth-predictions.png" alt="YOLOv8 tooth instance segmentation predictions on dental X-rays"/><span>Open full size ↗</span></a>
            <figcaption><strong>Held-Out Predictions</strong><span>Multiple individually segmented tooth instances on test radiographs.</span></figcaption>
          </figure>
        </div>
      </section>

      <section className="case-section medseg-project-block medseg-caries-block">
        <div className="medseg-project-heading">
          <div>
            <p className="eyebrow">PROJECT 02 · SEMANTIC SEGMENTATION</p>
            <h2>Dental Caries Segmentation with U-Net</h2>
            <p>A custom encoder-decoder network predicts a binary pixel mask for caries regions in dental X-ray images.</p>
          </div>
          <a className="button button-secondary" href={cariesKaggle} target="_blank" rel="noreferrer"><ExternalLink size={17}/> Open Kaggle Notebook</a>
        </div>

        <div className="medseg-fact-grid medseg-caries-facts">
          <article><Layers3 size={21}/><span>Architecture</span><strong>Custom U-Net</strong></article>
          <article><ScanLine size={21}/><span>Best Validation Dice</span><strong>0.8941</strong></article>
          <article><SlidersHorizontal size={21}/><span>Selected Threshold</span><strong>0.60</strong></article>
          <article><TestTube2 size={21}/><span>Final Test Dice</span><strong>0.8988</strong></article>
        </div>

        <div className="case-two-col medseg-copy-grid">
          <div>
            <h3>Custom PyTorch pipeline</h3>
            <p>Polygon annotations were converted into paired binary masks. The U-Net used an encoder-decoder architecture with skip connections and approximately <strong>31 million trainable parameters</strong>.</p>
          </div>
          <div>
            <h3>Training & threshold tuning</h3>
            <p>Training used a combined BCE + Dice objective with Adam. Candidate probability thresholds were evaluated on validation data, and <strong>0.60</strong> was selected before final held-out testing.</p>
          </div>
        </div>

        <div className="project-gallery medseg-gallery">
          <figure className="medseg-gallery-wide">
            <a className="medseg-gallery-media" href="/projects/medical-image-segmentation/caries-training-curves.png" target="_blank" rel="noreferrer"><img src="/projects/medical-image-segmentation/caries-training-curves.png" alt="U-Net dental caries training validation loss Dice and IoU curves"/><span>Open full size ↗</span></a>
            <figcaption><strong>Training & Validation</strong><span>Loss, Dice, and IoU progression through training.</span></figcaption>
          </figure>
          <figure>
            <a className="medseg-gallery-media" href="/projects/medical-image-segmentation/caries-prediction-1.png" target="_blank" rel="noreferrer"><img src="/projects/medical-image-segmentation/caries-prediction-1.png" alt="Dental caries U-Net original image ground truth prediction and overlay example"/><span>Open full size ↗</span></a>
            <figcaption><strong>Prediction Example</strong><span>Original image, ground truth, prediction, and overlay.</span></figcaption>
          </figure>
          <figure>
            <a className="medseg-gallery-media" href="/projects/medical-image-segmentation/caries-prediction-3.png" target="_blank" rel="noreferrer"><img src="/projects/medical-image-segmentation/caries-prediction-3.png" alt="Dental caries semantic segmentation prediction comparison"/><span>Open full size ↗</span></a>
            <figcaption><strong>Qualitative Evaluation</strong><span>Visual comparison of the predicted semantic mask against annotation.</span></figcaption>
          </figure>
        </div>
      </section>

      <section className="case-section medseg-compare-section">
        <div>
          <p className="eyebrow">WHY BOTH MATTER</p>
          <h2>Instance segmentation and semantic segmentation solve different problems.</h2>
        </div>
        <div className="medseg-compare-grid">
          <article><span>INSTANCE SEGMENTATION</span><strong>Which tooth is which?</strong><p>Produces multiple separate masks so individual tooth objects can be distinguished from one another.</p></article>
          <article><span>SEMANTIC SEGMENTATION</span><strong>Which pixels belong to the target region?</strong><p>Produces a binary caries mask without assigning separate object identities to each affected region.</p></article>
        </div>
      </section>

      <section className="case-section">
        <p className="eyebrow">ENGINEERING FOCUS</p>
        <div className="stack-details">
          <p><strong>Annotation engineering</strong><span>Polygon conversion · binary masks · YOLO segmentation labels</span></p>
          <p><strong>Validation</strong><span>Ground-truth visualization · model comparison · threshold selection</span></p>
          <p><strong>Evaluation</strong><span>Mask mAP · Dice · IoU · held-out test sets</span></p>
          <p><strong>Tooling</strong><span>PyTorch · Ultralytics YOLOv8 · OpenCV · Albumentations</span></p>
        </div>
      </section>

      <ProjectCaseCTA
        eyebrow="PUBLIC NOTEBOOKS"
        title="Explore both complete workflows on Kaggle."
        actions={[
          { label: "Teeth Segmentation", href: teethKaggle, primary: true },
          { label: "Caries U-Net", href: cariesKaggle },
        ]}
      />
    </>
  );
}
