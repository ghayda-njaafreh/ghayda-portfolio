import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main>
      <Navbar />
      <section className="container route-page-hero" style={{ minHeight: "62vh" }}>
        <p className="eyebrow">404 · PAGE NOT FOUND</p>
        <h1>This page isn&apos;t part of the portfolio.</h1>
        <p>The link may have changed, or the page may no longer be available.</p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/">Back to Home</Link>
          <Link className="button button-secondary" href="/projects">View Projects</Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
