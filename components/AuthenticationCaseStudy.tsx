import { ExternalLink, ShieldCheck, ScanFace, Mic2, AudioLines, GitBranch, LockKeyhole } from "lucide-react";
import type { Project } from "@/data/projects";
import ProjectCaseCTA from "@/components/ProjectCaseCTA";

export default function AuthenticationCaseStudy({ project }: { project: Project }) {
  return (
    <>
      <section className="auth-hero-media">
        <img src="/projects/multimodal-authentication/cover.png" alt="Privacy-Safe Multimodal Authentication project cover" />
        <div className="auth-cover-note">Conceptual project cover</div>
      </section>

      <section className="case-section auth-intro-grid">
        <div>
          <p className="eyebrow">OVERVIEW</p>
          <h2>One authentication workflow, multiple signals.</h2>
          <p>
            Privacy-Safe Multimodal Authentication is an applied AI security project that combines face verification,
            speaker verification, and optional offline speech-to-text within a modular end-to-end workflow. The system
            demonstrates how multiple identity signals can be coordinated through fusion logic and surfaced through a
            practical application interface rather than evaluated only as isolated models.
          </p>
        </div>
        <aside className="case-note auth-note">
          <span>PUBLIC REPOSITORY</span>
          <strong>Published in a privacy-safe form</strong>
          <p>The public repository preserves the project structure while excluding real user media, identities, and private attempt logs.</p>
        </aside>
      </section>

      <section className="case-section">
        <p className="eyebrow">CORE CAPABILITIES</p>
        <h2>Face, voice, optional speech, and fusion.</h2>
        <div className="auth-capability-grid">
          <article><ScanFace size={22}/><h3>Face Verification</h3><p>Face embeddings are used to support identity verification from visual input.</p></article>
          <article><Mic2 size={22}/><h3>Voice Verification</h3><p>Speaker embeddings provide a second biometric signal for identity matching.</p></article>
          <article><AudioLines size={22}/><h3>Optional Offline STT</h3><p>Vosk can capture or confirm a spoken name locally without requiring cloud speech recognition.</p></article>
          <article><GitBranch size={22}/><h3>Fusion Logic</h3><p>Outputs from the available modalities are coordinated into a final verification workflow.</p></article>
        </div>
      </section>

      <section className="case-section auth-flow-section">
        <div>
          <p className="eyebrow">SYSTEM WORKFLOW</p>
          <h2>From multimodal input to a verification decision.</h2>
          <p>The project is structured as an application pipeline rather than a single model demo.</p>
        </div>
        <div className="auth-flow">
          <div><span>01</span><strong>Capture</strong><small>Face · Voice · Optional spoken name</small></div>
          <div><span>02</span><strong>Represent</strong><small>Face and speaker embeddings</small></div>
          <div><span>03</span><strong>Verify</strong><small>Modality-specific matching</small></div>
          <div><span>04</span><strong>Fuse</strong><small>Coordinate available signals</small></div>
          <div><span>05</span><strong>Handle</strong><small>UI · analytics · approval workflow</small></div>
        </div>
      </section>

      <section className="case-section privacy-safe-section">
        <div>
          <p className="eyebrow">PRIVACY-SAFE PUBLISHING</p>
          <h2>Responsible sharing is part of the engineering.</h2>
          <p>
            Biometric projects can expose sensitive identity data if they are published carelessly. The public repository
            therefore retains runnable structure and documentation while removing or replacing private images, recordings,
            identities, and attempt logs.
          </p>
        </div>
        <div className="privacy-points">
          <div><ShieldCheck size={20}/><span>No real biometric dataset shipped publicly</span></div>
          <div><LockKeyhole size={20}/><span>Database structures are represented through safe templates/placeholders</span></div>
          <div><ShieldCheck size={20}/><span>Private attempt logs and identifying media are not exposed</span></div>
        </div>
      </section>

      <section className="case-section">
        <p className="eyebrow">APPLICATION & ANALYTICS</p>
        <h2>System views from the implemented prototype.</h2>
        <p className="wide-copy">The screenshots below are sanitized for public portfolio use and demonstrate the dashboard, evaluation, and administrative workflow without exposing identifying media.</p>
        <div className="project-gallery auth-gallery">
          <figure>
            <a className="auth-gallery-media" href="/projects/multimodal-authentication/dashboard.jpg" target="_blank" rel="noreferrer" aria-label="Open Main Dashboard screenshot at full size">
              <img src="/projects/multimodal-authentication/dashboard.jpg" alt="Authentication system dashboard with identifying media redacted"/>
              <span className="auth-gallery-open">Open full size ↗</span>
            </a>
            <figcaption><strong>Main Dashboard</strong><span>System overview with identifying content removed for public display.</span></figcaption>
          </figure>
          <figure>
            <a className="auth-gallery-media" href="/projects/multimodal-authentication/analytics-roc.jpg" target="_blank" rel="noreferrer" aria-label="Open Analytics ROC screenshot at full size">
              <img src="/projects/multimodal-authentication/analytics-roc.jpg" alt="Authentication system ROC analytics view"/>
              <span className="auth-gallery-open">Open full size ↗</span>
            </a>
            <figcaption><strong>Analytics / ROC View</strong><span>Evaluation view for recognition-mode performance analysis.</span></figcaption>
          </figure>
          <figure>
            <a className="auth-gallery-media" href="/projects/multimodal-authentication/metrics.jpg" target="_blank" rel="noreferrer" aria-label="Open Confusion Matrix and Metrics screenshot at full size">
              <img src="/projects/multimodal-authentication/metrics.jpg" alt="Authentication system confusion matrix and evaluation metrics"/>
              <span className="auth-gallery-open">Open full size ↗</span>
            </a>
            <figcaption><strong>Confusion Matrix & Metrics</strong><span>Performance summary and fold-level evaluation visualization.</span></figcaption>
          </figure>
          <figure>
            <a className="auth-gallery-media" href="/projects/multimodal-authentication/pending-approvals.jpg" target="_blank" rel="noreferrer" aria-label="Open Administrative Review screenshot at full size">
              <img src="/projects/multimodal-authentication/pending-approvals.jpg" alt="Authentication system pending approvals administration view with sensitive fields redacted"/>
              <span className="auth-gallery-open">Open full size ↗</span>
            </a>
            <figcaption><strong>Administrative Review</strong><span>Pending-approval workflow with private fields hidden for public presentation.</span></figcaption>
          </figure>
        </div>
      </section>

      <section className="case-section case-two-col">
        <div>
          <p className="eyebrow">ENGINEERING FOCUS</p>
          <h2>More than biometric inference.</h2>
          <p>The project connects model components with backend logic, storage templates, analytics, user interaction, and administrative review. That system-level integration is a central part of the work.</p>
        </div>
        <div className="auth-engineering-list">
          <div><strong>Modular pipeline</strong><span>Separate face, voice, fusion, client, and server components.</span></div>
          <div><strong>Offline option</strong><span>Optional Vosk-based speech recognition can run locally.</span></div>
          <div><strong>Application workflow</strong><span>Dashboard, analytics, enrollment, and approval interfaces support the technical pipeline.</span></div>
          <div><strong>Privacy-aware release</strong><span>The public repository is structured to remain understandable without distributing real private data.</span></div>
        </div>
      </section>

      <section className="case-section">
        <p className="eyebrow">TECH STACK</p>
        <div className="chips">{project.technologies.map((tech)=><span key={tech}>{tech}</span>)}</div>
        <div className="stack-details">
          <p><strong>Face</strong><span>InsightFace · OpenCV</span></p>
          <p><strong>Voice</strong><span>SpeechBrain · PyTorch · torchaudio</span></p>
          <p><strong>Speech</strong><span>Vosk (optional offline STT)</span></p>
          <p><strong>Backend</strong><span>FastAPI · Uvicorn</span></p>
          <p><strong>System</strong><span>Fusion logic · database templates · logging structure · admin workflow</span></p>
        </div>
      </section>

      <ProjectCaseCTA
        eyebrow="PUBLIC REPOSITORY"
        title="Explore the privacy-safe project structure on GitHub."
        actions={[{ label: "View Repository", href: "https://github.com/authentication-system-team/authentication-system", primary: true }]}
      />
    </>
  );
}
