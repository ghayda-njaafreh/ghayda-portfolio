import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | AI Engineer & Data Scientist`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: `${site.name} Portfolio`,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  keywords: [
    "Ghayda Jaafreh",
    "AI Engineer",
    "Data Scientist",
    "Python Developer",
    "Machine Learning",
    "Computer Vision",
    "Applied AI",
    "Backend Engineering",
    "AI Research",
    "Jordan",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: `${site.name} Portfolio`,
    title: `${site.name} | AI Engineer & Data Scientist`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | AI Engineer & Data Scientist`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "ar-o2AJVHexk0qKGbiy2GzdcmbIqs1N0XZ4rVpAbwTo",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A1020",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    jobTitle: ["AI Engineer", "Data Scientist", "Python Developer"],
    sameAs: [site.social.github, site.social.linkedin, site.social.kaggle, site.social.orcid].filter(Boolean),
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Science",
      "Computer Vision",
      "Python",
      "Backend Engineering",
      "Applied AI Research",
    ],
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} ${space.variable}`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
