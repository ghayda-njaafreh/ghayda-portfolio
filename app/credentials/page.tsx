import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { BackToHome, BackToTop } from "@/components/PageNavigation";
import Credentials from "@/components/Credentials";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Credentials",
  description: "Verified certifications, technical training, research ethics credentials, and professional development records for Ghayda N. Ja'afreh.",
  alternates: { canonical: "/credentials" },
};

export default function CredentialsPage() {
  return (
    <main id="top" className="credentials-page">
      <Navbar />
      <div className="container credentials-page-top-nav"><BackToHome /></div>
      <Credentials />
      <div className="container"><BackToTop /></div>
      <Footer />
    </main>
  );
}
