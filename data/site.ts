const envSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const site = {
  name: "Ghayda N. Ja'afreh",
  title: "AI Engineer · Data Scientist · Python Developer",
  tagline:
    "Building intelligent, explainable, and practical AI systems across healthcare, computer vision, robotics, and software.",
  description:
    "Portfolio of Ghayda N. Ja'afreh — AI Engineer, Data Scientist, and Python Developer building applied AI systems across healthcare, computer vision, robotics, backend engineering, and research.",
  url: envSiteUrl.replace(/\/$/, ""),
  email: "ghayda.jaafreh@gmail.com",
  social: {
    github: "https://github.com/ghayda-njaafreh",
    linkedin: "https://www.linkedin.com/in/ghayda-njaafreh",
    kaggle: "https://www.kaggle.com/jaafreh",
    orcid: "https://orcid.org/0009-0009-4853-8874" as string | null,
    googleScholar: null as string | null,
  },
};
