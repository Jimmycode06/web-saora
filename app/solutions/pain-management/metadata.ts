import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Natural Pain Management and Relief | Saora",
  description:
    "Discover how Saora helps you manage pain naturally through sound therapy. Learn about relaxation techniques, stress reduction, and mind-body approaches for pain relief.",
  keywords: [
    "pain management",
    "natural pain relief",
    "sound therapy",
    "relaxation",
    "stress reduction",
    "chronic pain",
    "muscle tension",
    "mind-body connection",
    "healing sounds",
    "pain relief",
    "wellness",
    "guided relaxation",
    "sleep improvement",
    "stress management",
    "holistic healing",
    "soundscapes",
    "pain reduction",
    "natural healing",
    "comfort",
    "well-being",
  ].join(", "),
  openGraph: {
    title: "Natural Pain Management and Relief | Saora",
    description:
      "Discover how Saora helps you manage pain naturally through sound therapy. Learn about relaxation techniques, stress reduction, and mind-body approaches for pain relief.",
    url: "https://saora.app/solutions/pain-management",
    siteName: "Saora",
    images: [
      {
        url: "https://saora.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Saora - Natural Pain Management and Relief",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Natural Pain Management and Relief | Saora",
    description:
      "Discover how Saora helps you manage pain naturally through sound therapy. Learn about relaxation techniques, stress reduction, and mind-body approaches for pain relief.",
    images: ["https://saora.app/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://saora.app/solutions/pain-management",
  },
};
