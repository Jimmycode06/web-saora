import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saora Sound - Relaxing Sleep Sounds & White Noise App",
  description: "Fall asleep faster with relaxing sounds, white noise, and guided meditations. Improve sleep quality with Saora Sound's immersive audio experience. Download now for better sleep.",
  keywords: "sleep sounds, white noise, relaxing sounds, fall asleep faster, sleep app, insomnia, meditation, deep sleep, sleep quality, bedtime routine, stress relief, anxiety sleep",
  authors: [{ name: "Saora Sound" }],
  creator: "Saora Sound",
  publisher: "Saora Sound",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://web-saora.vercel.app",
    title: "Saora Sound - Relaxing Sleep Sounds & White Noise App",
    description: "Fall asleep faster with relaxing sounds, white noise, and guided meditations. Improve sleep quality with Saora Sound.",
    siteName: "Saora Sound",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saora Sound - Relaxing Sleep Sounds & White Noise App",
    description: "Fall asleep faster with relaxing sounds, white noise, and guided meditations.",
    creator: "@SaoraSound",
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
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0a174e] text-white min-h-screen flex flex-col font-sans">
        <header className="w-full py-6 flex justify-between items-center px-6 border-b border-white/10">
          <Link href="/" className="text-3xl font-bold tracking-tight text-white hover:text-blue-400 transition-colors">
            Saora <span className="text-blue-400">Sound</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-white/70 hover:text-white transition-colors">Home</Link>
            <Link href="/blog" className="text-white/70 hover:text-white transition-colors">Blog</Link>
            <a href="#contact" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition-colors">Contact</a>
          </nav>
        </header>
        <main className="flex-1 flex flex-col">{children}</main>
        <footer className="w-full py-4 text-center text-sm text-white/60 border-t border-white/10">
          © Saora Sound – 2025
        </footer>
      </body>
    </html>
  );
}
