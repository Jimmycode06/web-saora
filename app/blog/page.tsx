import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Clock, Moon, FileText } from "lucide-react";

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

const articles = [
  {
    title:
      "Can't Sleep? Causes, Solutions, and Practical Tips to Get Better Rest",
    description:
      "Discover effective solutions for insomnia and sleep problems. Learn about common causes, practical tips, and natural remedies to improve your sleep quality.",
    slug: "sleep",
    icon: Moon,
    readTime: "10 min read",
    date: "March 2024",
  },
  // Add more articles here as they are created
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Header */}
      <header className="relative z-10 px-6 py-8">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/sora.png"
              alt="Saora Logo"
              width={48}
              height={48}
              className="w-12 h-12"
              priority
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Saora
            </span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link
              href="/blog"
              className="flex items-center space-x-2 text-blue-200 hover:text-blue-100 transition-colors"
            >
              <FileText className="w-5 h-5" />
              <span>Blog</span>
            </Link>
            <Link
              href="/faq"
              className="flex items-center space-x-2 text-blue-200 hover:text-blue-100 transition-colors"
            >
              <FileText className="w-5 h-5" />
              <span>FAQ</span>
            </Link>
            <Link
              href="/support"
              className="flex items-center space-x-2 text-blue-200 hover:text-blue-100 transition-colors"
            >
              <FileText className="w-5 h-5" />
              <span>Support</span>
            </Link>
            <a
              href="https://apps.apple.com/us/app/saora-sound/id6746692484"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              Download
            </a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Saora Blog
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Discover expert tips and insights for better sleep, meditation,
              and overall well-being
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article) => {
              const Icon = article.icon;
              return (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-blue-200 group-hover:text-blue-100 transition-colors mb-4">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-blue-300">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {article.readTime}
                      </span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center text-blue-300 group-hover:text-blue-200 transition-colors">
                      <span>Read more</span>
                      <svg
                        className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-white/10 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-lg font-bold text-white">S</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Saora
            </span>
          </div>
          <p className="text-blue-200 mb-4">
            Your companion for relaxation and well-being
          </p>
          <div className="flex justify-center space-x-6 mb-4">
            <Link
              href="/privacy-policy"
              className="text-blue-300 hover:text-blue-200 transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <span className="text-blue-400">•</span>
            <Link
              href="/terms-of-use"
              className="text-blue-300 hover:text-blue-200 transition-colors text-sm"
            >
              Terms of Use
            </Link>
            <span className="text-blue-400">•</span>
            <Link
              href="/support"
              className="text-blue-300 hover:text-blue-200 transition-colors text-sm"
            >
              Support
            </Link>
          </div>
          <p className="text-blue-300 text-sm">
            © 2024 Saora. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
