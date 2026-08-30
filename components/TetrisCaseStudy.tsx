import type { Project } from "@/data/projects";
import ProjectCaseCTA from "@/components/ProjectCaseCTA";

const stages = [
  ["Random", "25.74"],
  ["CNN Baseline", "44.45"],
  ["Recovery v2", "76.55"],
  ["Recovery v3", "143.42"],
  ["Safety Only", "307.32"],
  ["Lookahead Top-3", "908.76"],
  ["Lookahead Top-5", "1,716.85"],
  ["Final Agent", "1,846.60"],
];

const gallery = [
  {
    src: "/projects/tetris-ai-lab/final-ai-agent.png",
    title: "Final AI Agent",
    caption: "Live AI gameplay with score, lines, pieces, decision latency, safety interventions, confidence, and last-decision diagnostics.",
  },
  {
    src: "/projects/tetris-ai-lab/human-vs-ai.png",
    title: "Human vs Final AI",
    caption: "A side-by-side comparison mode using the same seed and piece generator.",
  },
  {
    src: "/projects/tetris-ai-lab/greedy-vs-final.png",
    title: "Greedy CNN vs Lookahead + Safety",
    caption: "Direct visual comparison between the raw greedy CNN policy and the enhanced final agent.",
  },
  {
    src: "/projects/tetris-ai-lab/main-menu.png",
    title: "Application Menu",
    caption: "The desktop application includes AI Agent, Human Play, Human vs Final AI, Greedy vs Final AI, Replay Viewer, Help, About, and Settings modes.",
  },
  {
    src: "/projects/tetris-ai-lab/about.png",
    title: "About Screen",
    caption: "The in-app project summary describes the imitation-learning, recovery, lookahead, and safety pipeline.",
  },
];

export default function TetrisCaseStudy({ project }: { project: Project }) {
  return (
    <>
      <section className="tetris-hero-media">
        <img src="/projects/tetris-ai-lab/cover.png" alt="Tetris AI Lab AI gameplay agent project cover" />
        <div className="tetris-hero-overlay">
          <span>PUBLIC RELEASE · INDIVIDUAL PROJECT</span>
          <strong>CNN policy + Top-5 lookahead + limited safety filter</strong>
        </div>
      </section>

      <section className="case-section tetris-intro-grid">
        <div>
          <p className="eyebrow">OVERVIEW</p>
          <h2>From learned placements to a complete AI system</h2>
          <p>
            Tetris AI Lab is an end-to-end machine-learning project that studies how an AI agent can learn placement behavior from expert gameplay and become more reliable in long-running play. The project began with a CNN placement policy trained from video-derived Classic Tetris examples and evolved into a hybrid agent combining learned candidate rankings with recovery-focused training, simulator-verified augmentation, one-piece lookahead, and a limited safety filter.
          </p>
          <p>
            The final result is a complete Python/Pygame application with autonomous AI play, human play, Human vs Final AI, Greedy vs Final AI, replay viewing, screenshots, settings, and reproducible evaluation workflows.
          </p>
        </div>
        <aside className="case-note">
          <span>MY ROLE</span>
          <strong>Sole Developer & Agent Designer</strong>
          <p>I independently owned the project architecture, data pipeline, model workflow, game integration, agent logic, evaluation, debugging, interface, documentation, and release preparation.</p>
        </aside>
      </section>

      <section className="case-section">
        <p className="eyebrow">PROJECT GOAL</p>
        <h2>More than predicting the next move</h2>
        <p className="wide-copy">
          The objective was not simply to train a neural network to classify Tetris placements. The broader challenge was to build a testable AI system that could learn from expert demonstrations, survive imperfect states, reveal failure modes, and show whether each engineering change produced measurable improvement in actual gameplay.
        </p>
        <div className="case-feature-grid">
          {[
            ["Learn", "Learn placement behavior from expert gameplay."],
            ["Recover", "Expose the model to difficult states that expert demonstrations rarely contain."],
            ["Reason", "Evaluate high-probability model suggestions with limited one-piece lookahead."],
            ["Measure", "Evaluate the deployed agent using survival behavior in addition to offline model metrics."],
          ].map(([title, text]) => <div key={title}><strong>{title}</strong><p>{text}</p></div>)}
        </div>
      </section>

      <section className="case-section case-two-col">
        <div>
          <p className="eyebrow">DATA PIPELINE</p>
          <h2>From tournament footage to reproducible training data</h2>
          <p>The training workflow was built from video-derived Classic Tetris examples rather than a manually prepared toy dataset.</p>
        </div>
        <div className="pipeline-list">
          <div><span>01</span><strong>Video-derived examples</strong><p>Gameplay footage was converted into examples representing board states and expert placement decisions.</p></div>
          <div><span>02</span><strong>Automated cleaning</strong><p>Repeatable rules removed invalid or unsuitable examples before training.</p></div>
          <div><span>03</span><strong>Duplicate control</strong><p>Semantic duplicate handling reduced unwanted repetition in the training data.</p></div>
          <div><span>04</span><strong>Video-level splitting</strong><p>Train, validation, and test partitions were separated by source video to reduce leakage.</p></div>
        </div>
      </section>

      <section className="case-section">
        <p className="eyebrow">AI APPROACH</p>
        <h2>A learned policy strengthened with controlled reasoning</h2>
        <div className="approach-grid">
          <article><span>01</span><h3>CNN Placement Policy</h3><p>The neural network ranks candidate placements from the current board state and incoming piece information. It remains the primary learned component of the final agent.</p></article>
          <article><span>02</span><h3>Recovery Training</h3><p>Simulator-generated difficult states expose the policy to situations that are uncommon in strong expert demonstrations but common after AI mistakes.</p></article>
          <article><span>03</span><h3>Verified Augmentation</h3><p>Mirror augmentation is validated through the simulator so transformed examples remain consistent with legal Tetris behavior.</p></article>
          <article><span>04</span><h3>Top-5 Lookahead + Safety</h3><p>The final agent evaluates the CNN's highest-ranked candidates using one-piece lookahead and applies a limited safety override to reduce catastrophic placements.</p></article>
        </div>
      </section>

      <section className="case-section benchmark-section">
        <div className="benchmark-heading">
          <div><p className="eyebrow">PERFORMANCE EVOLUTION</p><h2>Each stage was evaluated as an agent, not only as a classifier</h2></div>
          <p>The benchmark summaries show a clear increase in average survival as recovery, safety, and lookahead components were added.</p>
        </div>
        <img className="benchmark-chart" src="/projects/tetris-ai-lab/agent-performance.png" alt="Tetris AI Lab agent performance evaluation chart" />
        <div className="benchmark-table" role="table" aria-label="Average pieces survived by Tetris agent stage">
          {stages.map(([name, value], index) => (
            <div className={index === stages.length - 1 ? "benchmark-row best" : "benchmark-row"} key={name} role="row">
              <span>{name}</span><strong>{value}</strong>
            </div>
          ))}
        </div>
        <p className="case-caption">Average pieces survived, as reported in the project benchmark summaries. The final comparison policies use a 100-episode / 2,000-piece benchmark; earlier stages retain their original evaluation settings.</p>
      </section>

      <section className="case-section comparison-section">
        <div>
          <p className="eyebrow">WHY THE HYBRID AGENT MATTERS</p>
          <h2>Greedy predictions can look good locally and still fail over time</h2>
          <p>Small structural mistakes accumulate in a sequential environment. The enhanced agent keeps the CNN as the learned policy while allowing limited decision-time reasoning to reject some high-impact choices.</p>
        </div>
        <img src="/projects/tetris-ai-lab/greedy-vs-final.png" alt="Greedy CNN compared with lookahead and safety Tetris agents" />
      </section>

      <section className="case-section">
        <p className="eyebrow">DEMO VIDEO</p>
        <h2>See the application and agent in motion</h2>
        <p className="wide-copy">The demo shows the project interface, gameplay modes, and final AI behavior inside the released desktop application.</p>
        <video className="demo-video" controls preload="metadata" poster="/projects/tetris-ai-lab/cover.png">
          <source src="/projects/tetris-ai-lab/demo-v1.0.0.mp4" type="video/mp4" />
          Your browser does not support embedded video.
        </video>
      </section>

      <section className="case-section">
        <p className="eyebrow">APPLICATION MODES</p>
        <h2>Built as an interactive application, not only a training notebook</h2>
        <div className="mode-grid">
          <div><strong>AI Agent</strong><p>Runs the final policy with live score, line, piece, timing, confidence, and safety information.</p></div>
          <div><strong>Human Play</strong><p>Allows the same environment to be played directly by a human.</p></div>
          <div><strong>Human vs Final AI</strong><p>Compares human and AI gameplay under the same seed and generator.</p></div>
          <div><strong>Greedy vs Final AI</strong><p>Shows the practical difference between direct CNN selection and the enhanced agent.</p></div>
          <div><strong>Replay Viewer</strong><p>Supports replaying recorded sessions for inspection and comparison.</p></div>
          <div><strong>Settings & Utilities</strong><p>Includes runtime controls, screenshots, help, about information, and configurable gameplay settings.</p></div>
        </div>
      </section>

      <section className="case-section">
        <p className="eyebrow">PROJECT GALLERY</p>
        <h2>Interface, comparisons, and system behavior</h2>
        <div className="project-gallery">
          {gallery.map((item) => (
            <figure key={item.src}>
              <img src={item.src} alt={item.title} />
              <figcaption><strong>{item.title}</strong><span>{item.caption}</span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="case-section">
        <p className="eyebrow">ENGINEERING LESSONS</p>
        <h2>The gap between a good model and a good deployed agent</h2>
        <div className="lessons-grid">
          <article><h3>Distribution shift</h3><p>Expert demonstrations mostly contain healthy boards. AI errors can move the game into unfamiliar states, motivating recovery-focused training.</p></article>
          <article><h3>Offline accuracy is not enough</h3><p>A plausible single move can still damage long-term survival, so gameplay evaluation was treated as a separate measure of system quality.</p></article>
          <article><h3>Error accumulation</h3><p>Small placement errors compound over hundreds of pieces, which made limited lookahead and safety checks useful.</p></article>
          <article><h3>Learned vs engineered behavior</h3><p>The final design preserves the CNN as the main policy and uses additional logic selectively rather than replacing learning with a hand-built heuristic bot.</p></article>
        </div>
      </section>

      <section className="case-section case-two-col">
        <div>
          <p className="eyebrow">TECH STACK</p>
          <h2>Tools used across the full workflow</h2>
          <div className="chips">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
        </div>
        <div className="stack-details">
          <p><strong>Programming</strong><span>Python</span></p>
          <p><strong>Machine Learning</strong><span>PyTorch · CNN</span></p>
          <p><strong>Application</strong><span>Pygame</span></p>
          <p><strong>Data & Experimentation</strong><span>Video-derived data · cleaning · splitting · recovery data · augmentation · benchmark tracking</span></p>
          <p><strong>Agent Engineering</strong><span>Top-K ranking · one-piece lookahead · safety filtering</span></p>
          <p><strong>Development</strong><span>Git · GitHub · debugging · testing · documentation</span></p>
        </div>
      </section>

      <section className="case-section next-steps">
        <div>
          <p className="eyebrow">NEXT STEPS</p>
          <h2>Potential directions for future experimentation</h2>
        </div>
        <ul>
          <li>Deeper multi-piece planning</li>
          <li>Learned value estimation</li>
          <li>Expanded recovery-state generation</li>
          <li>Larger-scale gameplay evaluation</li>
          <li>Additional ablation studies</li>
          <li>Further analysis of offline metrics vs long-horizon gameplay</li>
        </ul>
      </section>

      <ProjectCaseCTA
        eyebrow="PUBLIC GITHUB RELEASE"
        title="Explore the source, release notes, and project documentation."
        actions={project.github ? [{ label: "View GitHub Repository", href: project.github, primary: true }] : []}
      />
    </>
  );
}
