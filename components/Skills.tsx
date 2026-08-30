import { BrainCircuit, Code2, Database, Eye, GitBranch, Cloud } from "lucide-react";

const groups = [
  { icon: BrainCircuit, title: "AI & Machine Learning", items: "Python · PyTorch · TensorFlow · scikit-learn" },
  { icon: Eye, title: "Computer Vision", items: "OpenCV · U-Net · Segmentation · OCR" },
  { icon: Code2, title: "Backend & APIs", items: "FastAPI · REST APIs · Authentication · Logging" },
  { icon: Database, title: "Data Science", items: "Pandas · NumPy · SQL · Model Evaluation" },
  { icon: GitBranch, title: "Engineering", items: "Git · Testing · Debugging · Documentation" },
  { icon: Cloud, title: "Cloud & Tools", items: "Azure · Jupyter · Kaggle · Gradio" },
];

export default function Skills() {
  return <div className="skills-grid">{groups.map(({ icon: Icon, title, items }) => <div className="skill-card" key={title}><Icon size={22}/><h3>{title}</h3><p>{items}</p></div>)}</div>;
}
