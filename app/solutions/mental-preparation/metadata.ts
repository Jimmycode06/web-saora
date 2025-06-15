import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mental Preparation and Performance | Saora",
  description:
    "Discover how Saora helps you prepare mentally for peak performance through sound therapy. Learn about focus, visualization, and performance optimization techniques.",
  keywords: [
    "mental preparation",
    "performance optimization",
    "focus enhancement",
    "visualization",
    "sound therapy",
    "peak performance",
    "mental imagery",
    "stress management",
    "confidence building",
    "emotional regulation",
    "performance anxiety",
    "guided sessions",
    "soundscapes",
    "mental training",
    "preparation techniques",
    "performance psychology",
    "mental resilience",
    "concentration",
    "mind training",
    "well-being",
  ].join(", "),
  openGraph: {
    title: "Mental Preparation and Performance | Saora",
    description:
      "Discover how Saora helps you prepare mentally for peak performance through sound therapy. Learn about focus, visualization, and performance optimization techniques.",
    url: "https://saora.app/solutions/mental-preparation",
    siteName: "Saora",
    images: [
      {
        url: "https://saora.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Saora - Mental Preparation and Performance",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mental Preparation and Performance | Saora",
    description:
      "Discover how Saora helps you prepare mentally for peak performance through sound therapy. Learn about focus, visualization, and performance optimization techniques.",
    images: ["https://saora.app/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://saora.app/solutions/mental-preparation",
  },
};
