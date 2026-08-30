export type KaggleExperiment = {
  title: string;
  subtitle: string;
  description: string;
  kaggle: string;
  technologies: string[];
  metrics: { value: string; label: string }[];
  highlights: string[];
};

export const kaggleExperiments: KaggleExperiment[] = [
  {
    title: "Diabetes Prediction",
    subtitle: "Tabular ML · Imbalance-Aware Model Comparison",
    description:
      "A structured classification experiment covering EDA, preprocessing, categorical encoding, scaling, train-only SMOTE, and comparison of multiple machine-learning models.",
    kaggle: "https://www.kaggle.com/code/jaafreh/diabetes-prediction-dataset",
    technologies: ["Python", "scikit-learn", "SMOTE", "Pandas"],
    metrics: [
      { value: "95.00%", label: "Random Forest test accuracy" },
      { value: "74.96%", label: "F1 score" },
    ],
    highlights: ["SMOTE applied only after train/test split", "Multi-model comparison", "Precision / Recall / F1 evaluation"],
  },
  {
    title: "Spam Email Classification",
    subtitle: "Text Classification · Multinomial Naive Bayes",
    description:
      "A focused NLP baseline for spam detection using cleaned text features, stratified evaluation, and Multinomial Naive Bayes with class-aware performance reporting.",
    kaggle: "https://www.kaggle.com/code/jaafreh/spam-email-naive-bayes",
    technologies: ["Python", "NLP", "Naive Bayes", "scikit-learn"],
    metrics: [
      { value: "94.72%", label: "Test accuracy" },
      { value: "91.30%", label: "F1 score" },
    ],
    highlights: ["Text preprocessing", "Stratified train/test split", "Confusion matrix + classification report"],
  },
];
