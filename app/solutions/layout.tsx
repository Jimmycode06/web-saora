import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://saora.app"),
  alternates: {
    canonical: "/solutions",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saora.app/solutions",
    siteName: "Saora - Sound Therapy & Meditation",
  },
  twitter: {
    card: "summary_large_image",
    site: "@saora",
  },
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
