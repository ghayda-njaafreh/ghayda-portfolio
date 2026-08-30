import { ExternalLink, Camera, Bot, BrainCircuit, Globe2, ShieldAlert, PlayCircle } from "lucide-react";
import type { Project } from "@/data/projects";
import ProjectCaseCTA from "@/components/ProjectCaseCTA";

export default function DrNaoCaseStudy({ project }: { project: Project }) {
  return (
    <>
      <section className="drnao-hero-media">
        <img src="/projects/dr-nao/cover.png" alt="Dr. Nao AI-assisted dermatology and robotics project cover" />
        <div className="drnao-hero-tag">Educational AI + Robotics Demo</div>
      </section>

      <section className="case-section drnao-intro-grid">
        <div>
          <p className="eyebrow">OVERVIEW</p>
          <h2>AI inference connected to a humanoid-robot workflow.</h2>
          <p>
            Dr. Nao is an educational demonstration project that integrates a NAO humanoid robot, a web-based
            dermatology interface, and a pre-trained skin lesion classification model. The project focuses on the
            complete interaction flow around the model: image acquisition, backend inference, visual presentation,
            and NAO-oriented interaction.
          </p>
        </div>
        <aside className="case-note drnao-note">
          <span>RESPONSIBLE USE</span>
          <strong>Educational demonstration only</strong>
          <p>This project is not a medical device and must not be used for diagnosis, treatment, or clinical decision-making.</p>
        </aside>
      </section>

      <section className="case-section">
        <p className="eyebrow">CORE WORKFLOW</p>
        <h2>Three image-input paths, one interactive AI flow.</h2>
        <div className="drnao-capability-grid">
          <article><Camera size={22}/><h3>Image Upload</h3><p>Analyze a prepared skin-lesion image directly through the web interface.</p></article>
          <article><Globe2 size={22}/><h3>Laptop Camera</h3><p>Capture a live image from the computer and route it through the same inference flow.</p></article>
          <article><Bot size={22}/><h3>NAO Camera</h3><p>Acquire imagery through a NAO-connected camera workflow for robot-assisted demonstrations.</p></article>
          <article><BrainCircuit size={22}/><h3>AI Inference</h3><p>Return an illustrative predicted class, confidence, and ranked alternatives from the integrated pre-trained model.</p></article>
        </div>
      </section>

      <section className="case-section drnao-flow-section">
        <div>
          <p className="eyebrow">SYSTEM FLOW</p>
          <h2>From camera input to robot-assisted explanation.</h2>
        </div>
        <div className="drnao-flow">
          <div><span>01</span><strong>Acquire</strong><small>Upload · Laptop camera · NAO camera</small></div>
          <div><span>02</span><strong>Process</strong><small>Backend image handling and preprocessing</small></div>
          <div><span>03</span><strong>Classify</strong><small>Pre-trained skin-lesion model inference</small></div>
          <div><span>04</span><strong>Present</strong><small>Predicted class · confidence · top alternatives</small></div>
          <div><span>05</span><strong>Interact</strong><small>NAO-compatible speech / explanation flow</small></div>
        </div>
      </section>

      <section className="case-section">
        <p className="eyebrow">PROJECT GALLERY</p>
        <h2>Implemented views from the academic prototype.</h2>
        <p className="wide-copy">The screenshots below show the actual web workflow, including uploaded-image analysis, NAO-camera capture, and illustrative prediction outputs.</p>
        <div className="project-gallery drnao-gallery">
          <figure className="drnao-gallery-wide">
            <a className="drnao-gallery-media" href="/projects/dr-nao/home-interface.png" target="_blank" rel="noreferrer">
              <img src="/projects/dr-nao/home-interface.png" alt="Dr. Nao home interface"/>
              <span>Open full size ↗</span>
            </a>
            <figcaption><strong>Home Interface</strong><span>Entry point for the interactive dermatology and robotics demo.</span></figcaption>
          </figure>
          <figure>
            <a className="drnao-gallery-media" href="/projects/dr-nao/upload-camera.png" target="_blank" rel="noreferrer">
              <img src="/projects/dr-nao/upload-camera.png" alt="Dr. Nao image upload and camera selection interface"/>
              <span>Open full size ↗</span>
            </a>
            <figcaption><strong>Upload & Camera Selection</strong><span>Choose file, laptop camera, or NAO camera as the image source.</span></figcaption>
          </figure>
          <figure>
            <a className="drnao-gallery-media" href="/projects/dr-nao/nao-camera.jpeg" target="_blank" rel="noreferrer">
              <img src="/projects/dr-nao/nao-camera.jpeg" alt="Dr. Nao NAO camera capture workflow"/>
              <span>Open full size ↗</span>
            </a>
            <figcaption><strong>NAO Camera Capture</strong><span>Image acquisition through the robot-oriented camera pipeline.</span></figcaption>
          </figure>
          <figure>
            <a className="drnao-gallery-media" href="/projects/dr-nao/result-nevus.jpeg" target="_blank" rel="noreferrer">
              <img src="/projects/dr-nao/result-nevus.jpeg" alt="Dr. Nao illustrative Nevus prediction result"/>
              <span>Open full size ↗</span>
            </a>
            <figcaption><strong>Illustrative Nevus Output</strong><span>Demo prediction with confidence and ranked alternatives.</span></figcaption>
          </figure>
          <figure>
            <a className="drnao-gallery-media" href="/projects/dr-nao/result-bcc.jpeg" target="_blank" rel="noreferrer">
              <img src="/projects/dr-nao/result-bcc.jpeg" alt="Dr. Nao illustrative Basal Cell Carcinoma prediction result"/>
              <span>Open full size ↗</span>
            </a>
            <figcaption><strong>Illustrative BCC Output</strong><span>Another example output from the educational workflow.</span></figcaption>
          </figure>
        </div>
      </section>

      <section className="case-section drnao-demo-section">
        <div>
          <p className="eyebrow">DEMO VIDEO</p>
          <h2>The project is best understood in motion.</h2>
          <p>Watch the interactive workflow connecting the application, AI inference, and NAO-oriented demonstration.</p>
        </div>
        <div className="drnao-video-wrap">
          <video controls preload="metadata" poster="/projects/dr-nao/cover.png">
            <source src="/projects/dr-nao/demo.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
      </section>

      <section className="case-section case-two-col">
        <div>
          <p className="eyebrow">ENGINEERING FOCUS</p>
          <h2>Integration is the core of the project.</h2>
          <p>
            Dr. Nao is primarily a system-integration project. It connects model inference with FastAPI backend
            components, browser interaction, camera acquisition, and a NAO-compatible interaction path rather than
            presenting the classifier as an isolated notebook experiment.
          </p>
        </div>
        <div className="drnao-engineering-list">
          <div><strong>Web application</strong><span>Interactive browser workflow for image acquisition and result presentation.</span></div>
          <div><strong>Backend serving</strong><span>FastAPI-based components coordinate inference and application communication.</span></div>
          <div><strong>NAO integration</strong><span>Camera and speech-oriented pathways connect the robot to the demonstration flow.</span></div>
          <div><strong>Demo reliability</strong><span>Cross-component testing is essential when cameras, AI inference, web UI, and robot interaction must work together.</span></div>
        </div>
      </section>

      <section className="case-section drnao-attribution">
        <div>
          <p className="eyebrow">MODEL ATTRIBUTION</p>
          <h2>Responsible reuse of a pre-trained model.</h2>
          <p>
            The project integrates the pre-trained <strong>iamhmh / derm-cnn-ham10000</strong> skin-lesion classifier as part of the academic demo workflow.
            The original model weights are not redistributed in this repository, and the public project documentation directs users to the upstream source and its licensing terms.
          </p>
        </div>
        <div className="drnao-warning"><ShieldAlert size={22}/><span>The model and the Dr. Nao application are presented strictly for educational, academic, demonstration-oriented, non-commercial use.</span></div>
      </section>

      <section className="case-section">
        <p className="eyebrow">TECH STACK</p>
        <div className="chips">{project.technologies.map((tech)=><span key={tech}>{tech}</span>)}</div>
        <div className="stack-details">
          <p><strong>AI</strong><span>PyTorch · pre-trained skin-lesion classifier</span></p>
          <p><strong>Backend</strong><span>Python · FastAPI</span></p>
          <p><strong>Frontend</strong><span>HTML · CSS · JavaScript</span></p>
          <p><strong>Robotics</strong><span>NAO · NAOqi-oriented integration workflow</span></p>
          <p><strong>Vision</strong><span>Image acquisition · preprocessing · classification</span></p>
        </div>
      </section>

      <ProjectCaseCTA
        eyebrow="PUBLIC REPOSITORY"
        title="Explore the academic demo implementation on GitHub."
        actions={[
          { label: "View Repository", href: "https://github.com/skin-nao-demo-team/skin_nao_demo", primary: true },
          { label: "Open Demo Video", href: "/projects/dr-nao/demo.mp4" },
        ]}
      />
    </>
  );
}
