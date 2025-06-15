import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emotional Balance: Understanding and Managing Your Mood | Saora",
  description:
    "Discover how Saora can help you manage your emotions through sound therapy. Learn about emotional well-being, common challenges, and natural solutions for emotional balance.",
  keywords: [
    "emotional balance",
    "mood management",
    "emotional well-being",
    "emotional health",
    "mood swings",
    "emotional stability",
    "sound therapy",
    "emotional awareness",
    "mindfulness",
    "mood tracking",
    "emotional regulation",
    "mental health",
    "wellness app",
    "Saora",
    "emotional support",
  ],
  openGraph: {
    title: "Emotional Balance: Understanding and Managing Your Mood | Saora",
    description:
      "Discover how Saora can help you manage your emotions through sound therapy. Learn about emotional well-being, common challenges, and natural solutions for emotional balance.",
    url: "https://saora.app/solutions/emotions-and-mood",
    siteName: "Saora",
    images: [
      {
        url: "https://saora.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Saora - Emotional Balance",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emotional Balance: Understanding and Managing Your Mood | Saora",
    description:
      "Discover how Saora can help you manage your emotions through sound therapy. Learn about emotional well-being, common challenges, and natural solutions for emotional balance.",
    images: ["https://saora.app/og-image.jpg"],
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
    canonical: "https://saora.app/solutions/emotions-and-mood",
  },
};
