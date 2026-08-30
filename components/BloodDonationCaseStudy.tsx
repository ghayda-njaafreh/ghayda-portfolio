import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import ProjectCaseCTA from "@/components/ProjectCaseCTA";

const screenshots = [
  { src: "/projects/blood-donation-system/home.png", label: "Home · Donation workflow entry points", alt: "Blood Donation System home page with donor, search, and request actions" },
  { src: "/projects/blood-donation-system/donor-registration.png", label: "Donor Registration · Availability & contact workflow", alt: "Donor registration form in the Blood Donation System" },
  { src: "/projects/blood-donation-system/compatible-donors.png", label: "Compatible Donors · Blood-type matching", alt: "Compatible donor search results by blood type and city" },
  { src: "/projects/blood-donation-system/create-request.png", label: "Blood Request · Structured request creation", alt: "Create blood request form with blood type, units, city, and needed date" },
  { src: "/projects/blood-donation-system/requests-list.png", label: "Requests · Browse & filter active needs", alt: "Blood requests list with blood-type and city filters" },
  { src: "/projects/blood-donation-system/admin-donors.png", label: "Admin · Donor management", alt: "Authenticated admin donor management page with availability and record actions" },
];

export default function BloodDonationCaseStudy({ project }: { project: Project }) {
  return (
    <>
      <section className="blood-hero-media case-project-hero">
        <img src="/projects/blood-donation-system/cover.png" alt="Blood Donation System full-stack web application cover" />
      </section>

      <section className="case-section case-two-col">
        <div>
          <p className="eyebrow">OVERVIEW</p>
          <h2>A database-backed workflow for donors, recipients, requests, and administration</h2>
          <p>
            Blood Donation System is a PHP and MySQL web application that organizes the core workflow around blood donation. Donors can register and maintain availability, recipients can search for compatible donors by blood type with an optional city filter, and users can create and browse blood requests.
          </p>
          <p>
            The application also includes authenticated admin pages for managing donor records and blood requests, giving the project a complete public-to-administration workflow rather than a single-form interface.
          </p>
        </div>
        <div>
          <p className="eyebrow">CORE MODULES</p>
          <div className="blood-fact-grid">
            <div><strong>01</strong><span>Donor registration & availability</span></div>
            <div><strong>02</strong><span>Blood-type compatibility search</span></div>
            <div><strong>03</strong><span>Request creation & filtering</span></div>
            <div><strong>04</strong><span>Authenticated admin management</span></div>
          </div>
        </div>
      </section>

      <section className="case-section">
        <p className="eyebrow">SYSTEM WORKFLOW</p>
        <h2>From registration to matching and request management</h2>
        <div className="blood-flow-grid">
          <div><span>01</span><strong>Register Donor</strong><p>Store donor identity, contact information, blood type, city, last donation date, and current availability.</p></div>
          <div><span>02</span><strong>Find Compatible Donors</strong><p>Select a recipient blood type, calculate compatible donor types, and optionally filter available donors by city.</p></div>
          <div><span>03</span><strong>Create Blood Request</strong><p>Post contact details, required blood type, units, needed date, city, and optional notes.</p></div>
          <div><span>04</span><strong>Admin Oversight</strong><p>Use protected admin pages to filter donors, toggle availability, and delete donor or request records.</p></div>
        </div>
      </section>

      <section className="case-section case-two-col">
        <div>
          <p className="eyebrow">DATA & APPLICATION STRUCTURE</p>
          <h2>Public workflows backed by a relational database</h2>
          <p>
            The project separates public pages from authenticated admin pages. Its database stores application users, registered donors, and posted blood requests, while shared PHP utilities handle database access, authentication helpers, blood-type compatibility, and reusable page components.
          </p>
          <div className="blood-db-grid">
            <div><strong>Users</strong><span>Admin accounts and credentials</span></div>
            <div><strong>Donors</strong><span>Blood type, contact, city & availability</span></div>
            <div><strong>Requests</strong><span>Recipient needs, units, date & notes</span></div>
          </div>
        </div>
        <div>
          <p className="eyebrow">SECURITY & VALIDATION</p>
          <div className="blood-security-card">
            <strong>Secure Web Workflow</strong>
            <ul className="case-list">
              <li>Prepared statements for database queries</li>
              <li>Password hashing for admin accounts</li>
              <li>Session-based admin authentication</li>
              <li>CSRF token verification for POST actions</li>
              <li>Output escaping to reduce XSS risk</li>
              <li>Client-side and server-side validation</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="case-section">
        <div className="benchmark-heading">
          <div><p className="eyebrow">PROJECT GALLERY</p><h2>Implemented workflows across the application</h2></div>
          <p>The gallery uses real screenshots from the completed system and shows the public donor/request experience together with authenticated administration.</p>
        </div>
        <div className="case-project-gallery blood-gallery">
          {screenshots.map((item) => (
            <figure key={item.src}>
              <a href={item.src} target="_blank" rel="noreferrer" className="case-gallery-media blood-gallery-media">
                <img src={item.src} alt={item.alt} loading="lazy" />
                <span>Open full size ↗</span>
              </a>
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="case-section case-two-col">
        <div>
          <p className="eyebrow">WHAT THIS PROJECT DEMONSTRATES</p>
          <h2>Full-stack fundamentals beyond the AI portfolio</h2>
          <p>
            This project demonstrates end-to-end web application fundamentals: relational data modeling, CRUD workflows, rule-based blood compatibility logic, forms and filtering, session-backed access control, and coordinated public/admin interfaces.
          </p>
        </div>
        <div>
          <p className="eyebrow">TECH STACK</p>
          <div className="chips">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
        </div>
      </section>

      <ProjectCaseCTA
        eyebrow="PUBLIC REPOSITORY"
        title="Explore the implementation on GitHub."
        description="The public repository contains the PHP application, database schema, shared helpers, styles, validation logic, public pages, and authenticated admin workflows."
        actions={[{ label: "View GitHub Repository", href: "https://github.com/ghayda-njaafreh/blood-donation-system", primary: true }]}
      />
    </>
  );
}
