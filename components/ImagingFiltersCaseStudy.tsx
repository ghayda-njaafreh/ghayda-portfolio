import { ExternalLink, PlayCircle } from "lucide-react";
import type { Project } from "@/data/projects";
import ProjectCaseCTA from "@/components/ProjectCaseCTA";

const screenshots = [
  { src: "/projects/imaging-filters-lab/gamma-transform.jpg", alt: "Imaging Filters Lab gamma transform example with input, processed result, parameters, and transfer curve", label: "Point Operations · Gamma Transform" },
  { src: "/projects/imaging-filters-lab/log-transform.jpg", alt: "Imaging Filters Lab log transform example with interactive parameter tuning", label: "Point Operations · Log Transform" },
  { src: "/projects/imaging-filters-lab/frequency-domain-fft.jpg", alt: "Imaging Filters Lab frequency-domain filtering interface showing FFT spectrum and Butterworth mask", label: "Frequency Domain · FFT Filtering" },
  { src: "/projects/imaging-filters-lab/batch-gallery.jpg", alt: "Imaging Filters Lab batch processing gallery showing multiple image-processing outputs", label: "Batch Processing · Visual Comparison" },
];

export default function ImagingFiltersCaseStudy({ project }: { project: Project }) {
  return (
    <>
      <section className="imaging-hero-media">
        <img src="/projects/imaging-filters-lab/cover.png" alt="Imaging Filters Lab interactive digital image processing project cover" />
      </section>

      <section className="case-section imaging-intro-grid">
        <div>
          <p className="eyebrow">OVERVIEW</p>
          <h2>Interactive Digital Image Processing laboratory</h2>
          <p>
            Imaging Filters Lab is an interactive application for exploring classical digital image-processing techniques through a browser-based Gradio interface. A user can upload an image, choose an operation, tune parameters, and immediately inspect the transformed result.
          </p>
          <p>
            The project brings together spatial-domain processing, frequency-domain filtering, wavelets, morphology, restoration, and binary operations inside one reusable experimentation environment.
          </p>
        </div>
        <div className="imaging-capability-panel">
          <p className="eyebrow">CORE WORKFLOW</p>
          <div className="imaging-flow">
            <span>Upload Image</span><b>→</b><span>Select Filter</span><b>→</b><span>Tune Parameters</span><b>→</b><span>Visualize Result</span>
          </div>
        </div>
      </section>

      <section className="case-section">
        <p className="eyebrow">PROCESSING CAPABILITIES</p>
        <h2>One lab, multiple image-processing domains</h2>
        <div className="imaging-feature-grid">
          <div><strong>Point Operations</strong><span>Negative, threshold, log, gamma, contrast stretch, and gray-level slicing.</span></div>
          <div><strong>Histogram Processing</strong><span>Histogram equalization, CLAHE, and histogram matching.</span></div>
          <div><strong>Spatial Filters</strong><span>Mean, Gaussian, median, sharpening, high-boost, and edge detection.</span></div>
          <div><strong>Frequency Domain</strong><span>FFT-based low-pass, high-pass, band, and notch filtering with multiple filter families.</span></div>
          <div><strong>Wavelets</strong><span>DWT subbands, denoising, and wavelet packet exploration.</span></div>
          <div><strong>Noise & Restoration</strong><span>Noise modeling and restoration-oriented experiments.</span></div>
          <div><strong>Morphology</strong><span>Morphological processing and skeletonization.</span></div>
          <div><strong>Binary Operations</strong><span>Set-based operations for binary images.</span></div>
        </div>
      </section>

      <section className="case-section">
        <div className="benchmark-heading">
          <div>
            <p className="eyebrow">PROJECT GALLERY</p>
            <h2>Real interface and processing examples</h2>
          </div>
          <p>These screenshots come from the working lab and show parameter-driven transformations, FFT analysis, and batch comparison rather than staged mockups.</p>
        </div>
        <div className="imaging-gallery">
          {screenshots.map((item) => (
            <figure key={item.src}>
              <a href={item.src} target="_blank" rel="noreferrer" className="imaging-gallery-media">
                <img src={item.src} alt={item.alt} loading="lazy" />
                <span>Open full size ↗</span>
              </a>
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="case-section imaging-demo-section">
        <div className="imaging-demo-copy">
          <p className="eyebrow">DEMO VIDEO</p>
          <h2>See the interactive workflow in motion.</h2>
          <p>The tutorial demonstrates how the lab moves from filter selection and parameter tuning to processed output and visual comparison.</p>
          <div className="imaging-demo-badge"><PlayCircle size={18}/> Interactive project walkthrough</div>
        </div>
        <div className="imaging-video-shell">
          <video controls preload="metadata" poster="/projects/imaging-filters-lab/cover.png">
            <source src="/projects/imaging-filters-lab/tutorial.mp4" type="video/mp4" />
            Your browser does not support the video element.
          </video>
        </div>
      </section>

      <section className="case-section case-two-col">
        <div>
          <p className="eyebrow">ENGINEERING FOCUS</p>
          <h2>Designed as an experimentation environment</h2>
          <p>
            Rather than implementing filters as isolated notebook cells, the project packages them into an interactive application where parameter changes can be explored repeatedly through the same visual workflow.
          </p>
        </div>
        <div>
          <p className="eyebrow">TECH STACK</p>
          <div className="chips">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
        </div>
      </section>

      <ProjectCaseCTA
        eyebrow="PUBLIC PROJECT"
        title="Explore the implementation."
        description="The public repository contains the application source, dependencies, screenshots, and supporting project materials."
        actions={[{ label: "View Repository", href: "https://github.com/imaging-filters-lab-team/imaging-filters-lab", primary: true }]}
      />
    </>
  );
}
