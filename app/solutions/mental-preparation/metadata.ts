import { Metadata } from "next";

export const metadata: Metadata = {
  // Titre optimisé avec mots-clés + marque
  title: "Can't Sleep? Causes, Solutions, and Practical Tips | Saora",
  
  // Description engageante 150-160 caractères
  description: "Discover effective solutions for insomnia and sleep problems...",
  
  // Mots-clés ciblés
  keywords: [
    "sleep problems",
    "insomnia solutions", 
    "better sleep tips",
    // ...
  ],
  
  // Open Graph (réseaux sociaux)
  openGraph: {
    type: "article",  // Important pour les articles
    url: "https://saora.app/blog/sleep",
    images: [...],
  },
  
  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    // ...
  },
  
  // Instructions pour les robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      "max-snippet": -1,        // Pas de limite de snippet
      "max-image-preview": "large",
    },
  },
  
  // URL canonique
  alternates: {
    canonical: "https://saora.app/blog/sleep",
  },
}

// JSON-LD pour rich snippets
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Can't Sleep? Causes and Solutions",
  "author": {
    "@type": "Organization", 
    "name": "Saora"
  },
  "datePublished": "2024-01-15",
  "dateModified": "2024-01-15",
  "publisher": {
    "@type": "Organization",
    "name": "Saora",
    "logo": "https://saora.app/sora.png"
  }
}

// Breadcrumbs
export const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Sleep Tips", href: "/blog/sleep" }
]
