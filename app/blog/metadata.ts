import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saora Blog | Tips for Better Sleep and Well-being",
  description:
    "Discover expert tips and insights for better sleep, meditation, and overall well-being. Learn practical solutions for common sleep problems and stress management.",
  keywords: [
    "sleep blog",
    "meditation tips",
    "well-being",
    "sleep solutions",
    "stress management",
    "mental health",
    "sleep hygiene",
    "relaxation techniques",
  ],
  openGraph: {
    title: "Saora Blog | Tips for Better Sleep and Well-being",
    description:
      "Discover expert tips and insights for better sleep, meditation, and overall well-being. Learn practical solutions for common sleep problems and stress management.",
    type: "website",
    url: "https://saora.app/blog",
    images: [
      {
        url: "https://saora.app/sora.png",
        width: 1200,
        height: 630,
        alt: "Saora Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saora Blog | Tips for Better Sleep and Well-being",
    description:
      "Discover expert tips and insights for better sleep, meditation, and overall well-being. Learn practical solutions for common sleep problems and stress management.",
    images: ["https://saora.app/sora.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://saora.app/blog",
  },
};
