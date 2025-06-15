import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Building Positive Habits and Behaviors | Saora",
  description:
    "Discover how Saora helps you build positive habits and change behaviors through sound therapy. Learn about habit formation, behavior change, and natural solutions for lasting transformation.",
  keywords: [
    "habits",
    "behavior change",
    "habit formation",
    "positive habits",
    "sound therapy",
    "behavioral transformation",
    "habit tracking",
    "motivation",
    "consistency",
    "routine building",
    "sleep habits",
    "stress management",
    "guided sessions",
    "progress tracking",
    "well-being",
    "personal development",
    "lifestyle changes",
    "habit optimization",
    "behavioral patterns",
    "self-improvement",
  ].join(", "),
  openGraph: {
    title: "Building Positive Habits and Behaviors | Saora",
    description:
      "Discover how Saora helps you build positive habits and change behaviors through sound therapy. Learn about habit formation, behavior change, and natural solutions for lasting transformation.",
    url: "https://saora.app/solutions/habits-and-behaviors",
    siteName: "Saora",
    images: [
      {
        url: "https://saora.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Saora - Building Positive Habits and Behaviors",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Building Positive Habits and Behaviors | Saora",
    description:
      "Discover how Saora helps you build positive habits and change behaviors through sound therapy. Learn about habit formation, behavior change, and natural solutions for lasting transformation.",
    images: ["https://saora.app/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://saora.app/solutions/habits-and-behaviors",
  },
};
