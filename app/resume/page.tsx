import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { BackToHome, BackToTop } from "@/components/PageNavigation";
import ResumeCenter from "@/components/ResumeCenter";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Resume Center",
  description: "View or download general and role-focused resumes for AI engineering, data science, AI/backend engineering, backend engineering, and software engineering.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <main id="top" className="resume-page">
      <Navbar />
      <div className="container resume-page-top-nav"><BackToHome /></div>
      <ResumeCenter />
      <div className="container"><BackToTop /></div>
      <Footer />
    </main>
  );
}
