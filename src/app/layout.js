import "./globals.css";
import AddAnimation from "@/Components/Shared/AddAnimation";
import Footer from "@/Components/Shared/Footer";
import Header from "@/Components/Shared/Header/Header";
import CursorGlow from "@/Components/Shared/CursorGlow";

// --- SEO Metadata start ---
const title = "Ashikuzzaman Moon - Full-Stack Web Developer";
const description = "Experienced Full-Stack Web Developer specializing in creating dynamic, high-performing web applications with Next.js, React, Node.js, and the MERN stack. Available for freelance projects and collaborations.";
const url = "https://moon-bd.com";
const imageUrl = `${url}/img/banner/banner-man.png`; // img for social media share

export const metadata = {
  title: title,
  description: description,
  keywords: [
    "Full-Stack Developer",
    "Web Developer Bangladesh",
    "Next.js Developer",
    "React Developer",
    "MERN Stack Developer",
    "Ashikuzzaman Moon",
    "Portfolio",
    "Freelance Web Developer",
  ],
  authors: [{ name: "Ashikuzzaman Moon", url: url }],
  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    title: title,
    description: description,
    url: url,
    siteName: "Ashikuzzaman Moon's Portfolio",
    images: [
      {
        url: imageUrl,
        width: 800,
        height: 600,
        alt: "Ashikuzzaman Moon - Full-Stack Web Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: [imageUrl],
    creator: "@ashikmoon01", // twitter handle
  },
  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Canonical URL
  alternates: {
    canonical: url,
  },
};
// --- SEO Metadata End ---

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ashikuzzaman Moon",
  alternateName: "Moon",
  url: url,
  image: imageUrl,
  jobTitle: "Full-Stack Web Developer",
  sameAs: [
    "https://github.com/ashikuzzamanmoon",
    "https://www.linkedin.com/in/ashikuzzaman-moon",
    "https://www.facebook.com/ashikuzzaman.moon1",
    "https://x.com/ashikmoon01",
  ],
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Redux Toolkit",
    "REST APIs",
    "Full-Stack Web Applications",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <CursorGlow/>
        <AddAnimation/>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
