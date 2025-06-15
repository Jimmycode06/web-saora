import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Better Sleep: Your Guide to Restful Nights | Saora",
  description:
    "Discover how Saora can help you achieve better sleep through sound therapy. Learn about sleep quality, common challenges, and natural solutions for restful nights.",
  keywords: [
    "sleep",
    "better sleep",
    "sleep quality",
    "sleep problems",
    "sleep solutions",
    "sound therapy",
    "sleep meditation",
    "sleep sounds",
    "white noise",
    "sleep app",
    "Saora",
    "sleep tracking",
    "sleep routine",
    "insomnia",
    "sleep disorders",
  ],
  openGraph: {
    title: "Better Sleep: Your Guide to Restful Nights | Saora",
    description:
      "Discover how Saora can help you achieve better sleep through sound therapy. Learn about sleep quality, common challenges, and natural solutions for restful nights.",
    url: "https://saora.app/solutions/sleep",
    siteName: "Saora",
    images: [
      {
        url: "https://saora.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Saora - Better Sleep",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Better Sleep: Your Guide to Restful Nights | Saora",
    description:
      "Discover how Saora can help you achieve better sleep through sound therapy. Learn about sleep quality, common challenges, and natural solutions for restful nights.",
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
    canonical: "https://saora.app/solutions/sleep",
  },
};
