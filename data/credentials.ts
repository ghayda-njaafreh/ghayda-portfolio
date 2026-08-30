export type Credential = {
  title: string;
  issuer: string;
  issued?: string;
  validity?: string;
  credentialId?: string;
  secondaryId?: string;
  details?: string;
  category: string;
  preview: string;
  certificate: string;
  verifyUrl?: string;
  featured?: boolean;
};

export const credentials: Credential[] = [
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    issued: "May 27, 2026",
    credentialId: "C5834AEC20D9A41C",
    secondaryId: "Certification No. B010AT-7276E5",
    category: "AI & Cloud",
    preview: "/credentials/azure-ai-fundamentals.webp",
    certificate: "/credentials/Azure_AI_Fundamentals_Microsoft.pdf",
    verifyUrl: "https://learn.microsoft.com/en-us/users/ghaydanaimjaafreh-2263/credentials/c5834afc20d9a41c",
    featured: true,
  },
  {
    title: "Data Science Essentials with Python",
    issuer: "Cisco Networking Academy",
    issued: "May 29, 2026",
    credentialId: "960f2b70-a252-42a1-a73d-13e7ca5c7c51",
    category: "Data Science",
    preview: "/credentials/data-science-essentials.webp",
    certificate: "/credentials/Cisco_Data_Science_Essentials_with_Python.pdf",
    verifyUrl: "https://www.credly.com/badges/a79e40d1-c735-4465-b50f-bb53eae98b13/public_url",
    featured: true,
  },
  {
    title: "Ethical Hacker",
    issuer: "Cisco Networking Academy",
    issued: "May 29, 2026",
    credentialId: "34898e2b-05cf-41a1-bcc0-c8d3f49090d1",
    category: "Cybersecurity",
    preview: "/credentials/ethical-hacker.webp",
    certificate: "/credentials/Cisco_Ethical_Hacker.pdf",
    verifyUrl: "https://www.credly.com/badges/622ca8d1-98a9-4bd1-9af0-fd0224798ff3/public_url",
    featured: true,
  },
  {
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    issued: "May 30, 2026",
    credentialId: "01720f08-f6be-48a8-b730-d4da54339d1f",
    category: "Programming",
    preview: "/credentials/python-essentials-1.webp",
    certificate: "/credentials/Cisco_Python_Essentials_1.pdf",
    verifyUrl: "https://www.credly.com/badges/4394bdb0-8707-42ae-8520-acb4395dbbe1/public_url",
  },
  {
    title: "HTML Essentials",
    issuer: "Cisco Networking Academy",
    issued: "May 30, 2026",
    credentialId: "1ca22c8d-bbae-4328-8cf8-07eacac17e5e",
    category: "Web Development",
    preview: "/credentials/html-essentials.webp",
    certificate: "/credentials/Cisco_HTML_Essentials.pdf",
    verifyUrl: "https://www.credly.com/badges/314612d4-d5bc-4642-8d29-084fdd1b9426/public_url",
  },
  {
    title: "Human Research - Data or Specimens Only Research",
    issuer: "CITI Program · MIT Affiliates",
    issued: "July 13, 2025",
    validity: "Expires July 13, 2028",
    credentialId: "Record ID 70859362",
    details: "1 - Basic Course",
    category: "Research Ethics",
    preview: "/credentials/citi-human-research.webp",
    certificate: "/credentials/CITI_Human_Research.pdf",
    verifyUrl: "https://www.citiprogram.org/verify/?w872b26d0-3467-4b7f-ae58-2f40f0e3a44a-70859362",
    featured: true,
  },
  {
    title: "Deep Learning",
    issuer: "The Hope International Company",
    issued: "September 15, 2025",
    credentialId: "1758145099980",
    details: "60 hours · Jun 20 - Sep 10, 2025",
    category: "Deep Learning",
    preview: "/credentials/deep-learning.webp",
    certificate: "/credentials/Deep_Learning_The_Hope.pdf",
    featured: true,
  },
  {
    title: "Python AI (Machine Learning)",
    issuer: "The Hope International Company",
    issued: "March 2, 2024",
    details: "60 hours · Nov 15, 2023 - Mar 15, 2024",
    category: "Machine Learning",
    preview: "/credentials/python-ai-ml.webp",
    certificate: "/credentials/Python_AI_Machine_Learning_The_Hope.pdf",
    featured: true,
  },
  {
    title: "Cyber Security Associate Course",
    issuer: "Green Circle for Software Solutions",
    details: "Cybersecurity concepts and fundamentals",
    category: "Cybersecurity",
    preview: "/credentials/cyber-security-associate.webp",
    certificate: "/credentials/Cyber_Security_Associate_Green_Circle.pdf",
  },
  {
    title: "CCNA Cisco Certified Network Associate - Course Completion",
    issuer: "Pioneers Academy",
    issued: "December 28, 2023",
    credentialId: "Certificate No. 18437657-24",
    category: "Networking",
    preview: "/credentials/ccna-course.webp",
    certificate: "/credentials/CCNA_Course_Pioneers_Academy.pdf",
  },
  {
    title: "Security+ - Course Completion",
    issuer: "Pioneers Academy",
    issued: "October 5, 2023",
    credentialId: "Certificate No. 18424325-2560",
    details: "30 training hours",
    category: "Cybersecurity",
    preview: "/credentials/security-plus-course.webp",
    certificate: "/credentials/Security_Plus_Course_Pioneers_Academy.pdf",
  },
  {
    title: "ICDL",
    issuer: "Arab International Academy for Training Consulting",
    issued: "2024",
    credentialId: "Certificate No. 201548",
    details: "36 training hours",
    category: "Digital Skills",
    preview: "/credentials/icdl.webp",
    certificate: "/credentials/ICDL_Arab_International_Academy.pdf",
  },
  {
    title: "English Communication Skills",
    issuer: "Mutah University · King Abdullah II Fund for Development",
    details: "20 hours · Apr 6 - May 13, 2024",
    category: "Communication",
    preview: "/credentials/english-communication.webp",
    certificate: "/credentials/English_Communication_Skills_Mutah.jpg",
  },
  {
    title: "English Conversation - 12 Levels",
    issuer: "Arab International Academy for Training Consulting",
    credentialId: "ID 200166016",
    secondaryId: "RN 117840",
    details: "90 training hours · Feb 1 - May 15, 2023",
    category: "Communication",
    preview: "/credentials/english-conversation.webp",
    certificate: "/credentials/English_Conversation_12_Levels.jpg",
  },
];

export const experienceDocuments = [
  {
    title: "Programming & Data Science Training Experience",
    issuer: "Al Raja International Company for Trade & Investment",
    period: "Jun 20 - Sep 10, 2025",
    issued: "September 15, 2025",
    preview: "/credentials/programming-data-science-experience.webp",
    file: "/credentials/Programming_Data_Science_Experience_Letter.pdf",
  },
  {
    title: "Python AI (Machine Learning) Experience Letter",
    issuer: "Al Raja International Training",
    period: "Nov 15, 2023 - Mar 15, 2024",
    issued: "March 2, 2024",
    preview: "/credentials/python-ml-experience.webp",
    file: "/credentials/Python_AI_ML_Experience_Letter.pdf",
  },
];
