export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  status: string;
  role: string;
  year: string;
  description: string;
  highlights: string[];
  technologies: string[];
  featured: boolean;
  github?: string;
  metrics?: { value: string; label: string }[];
};

export const projects: Project[] = [
  {
    slug: "strokelens",
    title: "StrokeLens",
    subtitle: "Secure & Explainable Healthcare AI",
    category: "Healthcare AI",
    status: "Graduation Project",
    role: "Core Project Owner & Lead Technical Contributor",
    year: "2025–2026",
    description:
      "A secure and explainable AI graduation project focused on data-driven clinical decision support using structured healthcare data.",
    highlights: [
      "Healthcare AI",
      "Explainable AI",
      "Secure system design",
    ],
    technologies: ["Artificial Intelligence", "Healthcare AI", "Explainable AI", "Secure Systems"],
    featured: true,
  },
  {
    slug: "tetris-ai-lab",
    title: "Tetris AI Lab",
    subtitle: "End-to-End AI Gameplay Agent",
    category: "Applied AI",
    status: "Public GitHub Release",
    role: "Sole Developer",
    year: "2026",
    description:
      "AI agent trained from expert gameplay and strengthened with recovery training, Top-5 one-piece lookahead, and a limited safety filter.",
    highlights: [
      "CNN-based placement policy",
      "Video-derived training pipeline",
      "Simulator-generated recovery states",
    ],
    technologies: ["Python", "PyTorch", "CNN", "Pygame", "Data Pipelines"],
    featured: true,
    github: "https://github.com/ghayda-njaafreh/tetris-ai-lab",
    metrics: [
      { value: "68.43%", label: "Top-1 test accuracy" },
      { value: "89.59%", label: "Top-3 test accuracy" },
      { value: "1,846.60", label: "Avg. pieces survived" },
    ],
  },
  {
    slug: "multimodal-authentication",
    title: "Privacy-Safe Multimodal Authentication",
    subtitle: "Face, Voice & Speech Verification",
    category: "AI + Security",
    status: "Public GitHub Repository",
    role: "Main Model & Integration Contributor",
    year: "2025",
    description:
      "A privacy-aware authentication workflow integrating face verification, voice verification, speech recognition, multimodal fusion, and FastAPI backend logic.",
    highlights: ["Face verification", "Voice verification", "Multimodal fusion"],
    technologies: ["FastAPI", "PyTorch", "OpenCV", "InsightFace", "SpeechBrain", "Vosk"],
    featured: true,
    github: "https://github.com/authentication-system-team/authentication-system",
  },
  {
    slug: "dr-nao",
    title: "Dr. NAO",
    subtitle: "AI-Assisted Dermatology × Robotics",
    category: "Robotics + Healthcare",
    status: "Public Academic Demo",
    role: "Main AI/Model & Robot-Integration Contributor",
    year: "2026",
    description:
      "An educational AI and robotics demo integrating a NAO humanoid robot, a web interface, and a pre-trained skin lesion classifier into an interactive workflow.",
    highlights: ["NAO robot integration", "Camera-to-AI workflow", "Educational skin-lesion demo"],
    technologies: ["Python", "FastAPI", "PyTorch", "NAO", "Computer Vision"],
    featured: true,
    github: "https://github.com/skin-nao-demo-team/skin_nao_demo",
  },
  {
    slug: "medical-image-segmentation",
    title: "Medical Image Segmentation",
    subtitle: "Dental X-Ray Computer Vision",
    category: "Computer Vision + Medical Imaging",
    status: "Public Kaggle Projects",
    role: "Developer",
    year: "2025",
    description:
      "Two applied dental-imaging workflows covering tooth instance segmentation with YOLOv8 and dental-caries semantic segmentation with a custom PyTorch U-Net.",
    highlights: ["YOLOv8 instance segmentation", "Custom U-Net semantic segmentation", "Held-out evaluation"],
    technologies: ["Python", "PyTorch", "YOLOv8", "U-Net", "OpenCV", "Albumentations"],
    featured: true,
    metrics: [
      { value: "0.9943", label: "Test Mask mAP50" },
      { value: "0.6180", label: "Test Mask mAP50-95" },
      { value: "0.8988", label: "Test Dice" },
      { value: "0.8163", label: "Test IoU" },
    ],
  },
  {
    slug: "ml-decision-surfaces",
    title: "ML Decision Surfaces Lab",
    subtitle: "Interactive Machine Learning Exploration",
    category: "Machine Learning",
    status: "Public GitHub Repository",
    role: "Main Algorithm Developer & Interface Designer",
    year: "2025",
    description:
      "An interactive Gradio environment for comparing classification and regression models through decision boundaries, ROC-AUC, confusion matrices, learning curves, and controlled noise experiments.",
    highlights: ["Decision boundaries", "ROC-AUC", "Learning curves"],
    technologies: ["Python", "scikit-learn", "Gradio", "Matplotlib"],
    featured: true,
    github: "https://github.com/ml-labs-team/ml-decision-surfaces-lab",
  },
  {
    slug: "imaging-filters-lab",
    title: "Imaging Filters Lab",
    subtitle: "Interactive Digital Image Processing",
    category: "Computer Vision + Image Processing",
    status: "Public GitHub Repository",
    role: "Project Contributor",
    year: "2025",
    description:
      "An interactive Digital Image Processing lab built with OpenCV and Gradio for exploring spatial filters, FFT, wavelets, morphology, noise, restoration, and binary operations.",
    highlights: ["Spatial & frequency-domain filtering", "Wavelets & morphology", "Interactive parameter exploration"],
    technologies: ["Python", "OpenCV", "Gradio", "FFT", "Wavelets", "Image Processing"],
    featured: true,
    github: "https://github.com/imaging-filters-lab-team/imaging-filters-lab",
  },
  {
    slug: "intel-image-classification",
    title: "Intel Image Classification",
    subtitle: "Transfer Learning · EfficientNetB0 · Fine-Tuning",
    category: "Computer Vision + Transfer Learning",
    status: "Public Kaggle Project",
    role: "Developer",
    year: "2025",
    description:
      "A natural-scene classification project comparing a custom CNN with EfficientNetB0 transfer learning and fine-tuning across six image classes.",
    highlights: ["Baseline CNN comparison", "EfficientNetB0 transfer learning", "Fine-tuning & error analysis"],
    technologies: ["Python", "TensorFlow/Keras", "EfficientNetB0", "Computer Vision"],
    featured: true,
    metrics: [
      { value: "92.73%", label: "Best test accuracy" },
      { value: "6", label: "Scene classes" },
    ],
  },
  {
    slug: "handwriting-ocr",
    title: "Handwriting OCR",
    subtitle: "HOG Features · KNN Classification · EMNIST Letters",
    category: "Classical Computer Vision + OCR",
    status: "Public GitHub + Kaggle Project",
    role: "Developer",
    year: "2025",
    description:
      "A classical OCR pipeline for handwritten English letter recognition using HOG feature extraction and a distance-weighted KNN classifier, extended with character segmentation and custom handwritten word reconstruction.",
    highlights: ["HOG feature extraction", "KNN letter classification", "Custom word segmentation & reconstruction"],
    technologies: ["Python", "OpenCV", "HOG", "KNN", "scikit-learn", "EMNIST"],
    featured: true,
    github: "https://github.com/ghayda-njaafreh/ocr-handwriting-knn-hog",
    metrics: [
      { value: "88.26%", label: "EMNIST Letters test accuracy" },
      { value: "103,504", label: "Training letter images" },
      { value: "1,296", label: "HOG features per letter" },
    ],
  },
  {
    slug: "mnist-cnn-experiments",
    title: "MNIST CNN Experiments",
    subtitle: "Controlled Deep Learning Comparison",
    category: "Deep Learning + Model Analysis",
    status: "Public Kaggle Experiments",
    role: "Developer",
    year: "2025",
    description:
      "A controlled PyTorch comparison of CNN architectures for handwritten digit classification, focused on the effect of Batch Normalization on accuracy, loss behavior, runtime, and prediction quality.",
    highlights: ["Controlled CNN comparison", "Batch Normalization analysis", "Feature maps & prediction review"],
    technologies: ["Python", "PyTorch", "CNN", "Batch Normalization", "MNIST"],
    featured: true,
    metrics: [
      { value: "99.37%", label: "Best test accuracy" },
      { value: "+0.18 pp", label: "BatchNorm accuracy gain" },
    ],
  },

  {
    slug: "blood-donation-system",
    title: "Blood Donation System",
    subtitle: "Donor Matching · Blood Requests · Admin Management",
    category: "Full-Stack Web Development",
    status: "Public GitHub Repository",
    role: "Developer",
    year: "2025",
    description:
      "A PHP + MySQL web application for donor registration, blood-type compatibility search, blood-request management, and authenticated admin workflows.",
    highlights: ["Blood-type compatibility search", "Donor & request workflows", "Authenticated admin management"],
    technologies: ["PHP", "MySQL", "HTML/CSS", "JavaScript", "SQL", "Web Security"],
    featured: true,
    github: "https://github.com/ghayda-njaafreh/blood-donation-system",
  },

];
