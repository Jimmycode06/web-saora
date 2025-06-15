import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manage Stress & Anxiety with Sound Therapy | Saora",
  description:
    "Discover effective natural solutions for stress and anxiety management through sound therapy, mindfulness, and meditation. Learn how Saora's app can help you find inner peace.",
  keywords:
    "stress management, anxiety relief, sound therapy, meditation app, mindfulness, natural anxiety treatment, stress reduction, mental health app, relaxation techniques, sleep anxiety",
  openGraph: {
    title: "Manage Stress & Anxiety with Sound Therapy | Saora",
    description:
      "Discover effective natural solutions for stress and anxiety management through sound therapy, mindfulness, and meditation. Learn how Saora's app can help you find inner peace.",
    images: [
      {
        url: "/images/stress-anxiety-og.jpg",
        width: 1200,
        height: 630,
        alt: "Saora - Stress and Anxiety Management with Sound Therapy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manage Stress & Anxiety with Sound Therapy | Saora",
    description:
      "Discover effective natural solutions for stress and anxiety management through sound therapy, mindfulness, and meditation.",
    images: ["/images/stress-anxiety-og.jpg"],
  },
  alternates: {
    canonical: "/solutions/stress-and-anxiety",
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
};
