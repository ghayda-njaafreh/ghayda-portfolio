import { Download, ExternalLink, Gauge, Layers3, Rotate3D, SlidersHorizontal, Upload } from "lucide-react";
import type { Project } from "@/data/projects";
import ProjectCaseCTA from "@/components/ProjectCaseCTA";

const repository = "https://github.com/ml-labs-team/ml-decision-surfaces-lab";

export default function MLDecisionSurfacesCaseStudy({ project }: { project: Project }) {
  return (
    <>
      <section className="mlds-hero-media">
        <img src="/projects/ml-decision-surfaces/ui.png" alt="ML Decision Surfaces Lab interactive Gradio interface" />
      </section>

      <section className="case-section mlds-intro-grid">
        <div>
          <p className="eyebrow">OVERVIEW</p>
          <h2>An interactive lab for seeing how machine-learning models behave.</h2>
          <p>
            ML Decision Surfaces Lab is a hands-on Gradio playground for exploring classification and regression models through decision regions, 3D surfaces, ROC/AUC, confusion matrices, learning curves, and model diagnostics. The interface is designed to make model behavior visible while users vary datasets, hyperparameters, noise, outliers, train/test split, and visualization controls.
          </p>
        </div>
        <aside className="case-note mlds-note">
          <span>DESIGN GOAL</span>
          <strong>Learn by changing the experiment.</strong>
          <p>Instead of presenting one fixed benchmark, the lab encourages controlled visual experiments and comparison across model families and data conditions.</p>
        </aside>
      </section>

      <section className="case-section">
        <p className="eyebrow">CORE CAPABILITIES</p>
        <div className="mlds-cap-grid">
          <article><Layers3 size={22}/><strong>Multiple ML Tasks</strong><p>Linear classification, nonlinear classification, and regression workflows in one interface.</p></article>
          <article><Upload size={22}/><strong>Synthetic or CSV Data</strong><p>Generate built-in datasets or upload numeric CSV data and choose the working columns.</p></article>
          <article><SlidersHorizontal size={22}/><strong>Controlled Experiments</strong><p>Adjust noise, outliers, test size, random seed, model settings, and visualization parameters.</p></article>
          <article><Gauge size={22}/><strong>Visual Diagnostics</strong><p>Inspect ROC/AUC, confusion matrices, learning curves, distributions, coefficients, and feature importance where applicable.</p></article>
          <article><Rotate3D size={22}/><strong>2D & 3D Geometry</strong><p>Explore 2D decision regions alongside 3D decision or regression surfaces.</p></article>
          <article><Download size={22}/><strong>Exportable Results</strong><p>Download the current plot as PNG and generate a rotating 3D GIF from the visualization.</p></article>
        </div>
      </section>

      <section className="case-section case-two-col mlds-workflow-section">
        <div>
          <p className="eyebrow">WORKFLOW</p>
          <h2>From data choice to visual model diagnosis.</h2>
          <p>The lab keeps the experimental loop short: choose a task, choose or upload data, configure the model and stress conditions, run the experiment, then inspect the resulting plots and metrics.</p>
        </div>
        <div className="pipeline-list">
          <div><span>01</span><strong>Select task</strong><p>Linear classification, nonlinear classification, or regression.</p></div>
          <div><span>02</span><strong>Select data</strong><p>Use a synthetic dataset or upload a numeric CSV.</p></div>
          <div><span>03</span><strong>Tune the experiment</strong><p>Adjust model settings, noise, outliers, split, seed, PCA, and visualization controls.</p></div>
          <div><span>04</span><strong>Run & inspect</strong><p>Review 2D/3D surfaces, diagnostics, metrics, and exportable visual output.</p></div>
        </div>
      </section>

      <section className="case-section">
        <p className="eyebrow">MODEL FAMILIES</p>
        <div className="mlds-model-grid">
          <article><span>LINEAR CLASSIFICATION</span><strong>Logistic Regression · Linear SVM · Perceptron · LDA</strong></article>
          <article><span>NONLINEAR CLASSIFICATION</span><strong>RBF/Polynomial SVM · KNN · Trees/Ensembles · MLP</strong></article>
          <article><span>REGRESSION</span><strong>Linear · Ridge/Lasso/ElasticNet · RF · KNN · MLP · SVR</strong></article>
        </div>
      </section>

      <section className="case-section">
        <div className="benchmark-heading">
          <div><p className="eyebrow">PROJECT GALLERY</p><h2>One interface, many model behaviors.</h2></div>
          <p>The screenshots below show the same laboratory adapting to different datasets and model families rather than a single curated result.</p>
        </div>
        <div className="project-gallery mlds-gallery">
          <figure>
            <a className="mlds-gallery-media" href="/projects/ml-decision-surfaces/linear-overview.jpg" target="_blank" rel="noreferrer"><img src="/projects/ml-decision-surfaces/linear-overview.jpg" alt="ML Decision Surfaces Lab linear model experiment with decision plots and diagnostics"/><span>Open full size ↗</span></a>
            <figcaption><strong>Linear Classification Experiment</strong><span>Decision region, 3D surface, ROC curve, confusion matrix, learning curve, and class distribution.</span></figcaption>
          </figure>
          <figure>
            <a className="mlds-gallery-media" href="/projects/ml-decision-surfaces/uploaded-csv.jpg" target="_blank" rel="noreferrer"><img src="/projects/ml-decision-surfaces/uploaded-csv.jpg" alt="Uploaded CSV experiment in ML Decision Surfaces Lab"/><span>Open full size ↗</span></a>
            <figcaption><strong>Uploaded CSV Workflow</strong><span>Numeric feature and target selection with the same experiment and visualization pipeline.</span></figcaption>
          </figure>
          <figure>
            <a className="mlds-gallery-media" href="/projects/ml-decision-surfaces/mlp-view.jpg" target="_blank" rel="noreferrer"><img src="/projects/ml-decision-surfaces/mlp-view.jpg" alt="Nonlinear MLP experiment in ML Decision Surfaces Lab"/><span>Open full size ↗</span></a>
            <figcaption><strong>Nonlinear Model Configuration</strong><span>MLP-specific controls alongside the shared visualization environment.</span></figcaption>
          </figure>
          <figure>
            <a className="mlds-gallery-media" href="/projects/ml-decision-surfaces/regression-surface.jpg" target="_blank" rel="noreferrer"><img src="/projects/ml-decision-surfaces/regression-surface.jpg" alt="Regression surface visualization in ML Decision Surfaces Lab"/><span>Open full size ↗</span></a>
            <figcaption><strong>3D Regression Surface</strong><span>Interactive geometry helps connect model form with the fitted surface in feature space.</span></figcaption>
          </figure>
        </div>
      </section>

      <section className="case-section mlds-demo-section">
        <div className="benchmark-heading">
          <div><p className="eyebrow">DEMO</p><h2>Interactive walkthrough</h2></div>
          <p>A recorded tutorial demonstrates the current implementation and how the experiment controls, plots, and model views work together.</p>
        </div>
        <video className="demo-video" controls preload="metadata" poster="/projects/ml-decision-surfaces/ui.png">
          <source src="/projects/ml-decision-surfaces/tutorial.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <section className="case-section">
        <p className="eyebrow">TECHNICAL DETAILS</p>
        <div className="stack-details">
          <p><strong>Interface</strong><span>Gradio interactive controls and experiment workflow</span></p>
          <p><strong>Machine learning</strong><span>scikit-learn classifiers, regressors, dataset generators, metrics, PCA</span></p>
          <p><strong>Visualization</strong><span>Matplotlib 2D decision regions, 3D surfaces, learning curves, ROC and diagnostic plots</span></p>
          <p><strong>Stress testing</strong><span>Label/target noise, synthetic outliers, train/test split, random seed</span></p>
          <p><strong>Export</strong><span>PNG plot output and animated 3D rotation GIF</span></p>
        </div>
      </section>

      <section className="case-section mlds-learning-section">
        <div>
          <p className="eyebrow">ENGINEERING VALUE</p>
          <h2>More than a chart generator.</h2>
          <p>The project brings data generation, model configuration, evaluation, robustness experiments, and visualization into one repeatable workflow. Its value is in making the relationship between data geometry, model choice, hyperparameters, and evaluation behavior easier to inspect interactively.</p>
        </div>
        <div className="lessons-grid">
          <article><h3>Model behavior becomes tangible</h3><p>Changing the dataset or model immediately changes the visible decision geometry, helping connect mathematical assumptions with outcomes.</p></article>
          <article><h3>Robustness can be explored directly</h3><p>Noise and outlier controls make it possible to observe how different model families respond under degraded data conditions.</p></article>
          <article><h3>Evaluation is contextual</h3><p>ROC, confusion matrices, learning curves, and decision surfaces are viewed together instead of as isolated metrics.</p></article>
          <article><h3>The interface supports experimentation</h3><p>Reusable controls turn the notebook-style workflow into a more accessible interactive laboratory.</p></article>
        </div>
      </section>

      <section className="case-section mlds-roadmap-line">
        <p><strong>Planned evolution:</strong> richer model interpretation and intelligent visual analysis may be explored in future versions after the current lab is further developed.</p>
      </section>

      <ProjectCaseCTA
        eyebrow="PUBLIC REPOSITORY"
        title="Explore the current ML Decision Surfaces Lab implementation."
        actions={[{ label: "View GitHub Repository", href: repository, primary: true }]}
      />
    </>
  );
}
