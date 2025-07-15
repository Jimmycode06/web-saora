"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Menu,
  X,
  Clock,
  Brain,
  Heart,
  Target,
  Waves,
  Compass,
  Shield,
  Users,
  Lightbulb,
  TrendingUp,
} from "lucide-react";

const blogPosts = [
  {
    href: "/blog/sleep",
    title: "Sleep Issues?",
    description:
      "Discover effective solutions for insomnia and sleep problems.",
    icon: Clock,
    color: "blue",
    readTime: "10 min",
  },
  {
    href: "/blog/stress-anxiety",
    title: "Stress and Anxiety",
    description: "Natural techniques to manage stress and regain serenity.",
    icon: Brain,
    color: "purple",
    readTime: "12 min",
  },
  {
    href: "/blog/meditation",
    title: "Meditation for Beginners",
    description: "Complete guide to start your meditation practice.",
    icon: Compass,
    color: "green",
    readTime: "15 min",
  },
  {
    href: "/blog/focus",
    title: "Concentration and Focus",
    description:
      "Boost your productivity with proven concentration techniques.",
    icon: Target,
    color: "orange",
    readTime: "11 min",
  },
  {
    href: "/blog/natural-sounds",
    title: "Natural Sounds and Well-being",
    description:
      "The science behind the therapeutic benefits of nature sounds.",
    icon: Waves,
    color: "teal",
    readTime: "10 min",
  },
  {
    href: "/blog/healthy-habits",
    title: "Healthy Habits",
    description: "How to create and maintain habits for a balanced daily life.",
    icon: Heart,
    color: "red",
    readTime: "9 min",
  },
  {
    href: "/blog/pain-management",
    title: "Pain Management",
    description: "Natural techniques to relieve and manage chronic pain.",
    icon: Shield,
    color: "indigo",
    readTime: "8 min",
  },
  {
    href: "/blog/self-confidence",
    title: "Self-Confidence",
    description: "Develop your self-esteem with practical techniques.",
    icon: TrendingUp,
    color: "pink",
    readTime: "13 min",
  },
  {
    href: "/blog/relationships",
    title: "Relationships and Communication",
    description: "Improve your relationships and communication skills.",
    icon: Users,
    color: "cyan",
    readTime: "14 min",
  },
  {
    href: "/blog/life-changes",
    title: "Life Changes",
    description: "Navigate transitions and adapt to changes with resilience.",
    icon: Lightbulb,
    color: "yellow",
    readTime: "12 min",
  },
  {
    href: "/blog/mental-preparation",
    title: "Mental Preparation",
    description: "Techniques to prepare your mind for optimal performance.",
    icon: Brain,
    color: "violet",
    readTime: "11 min",
  },
];

const getColorClasses = (color: string) => {
  const colorMap = {
    blue: "from-blue-500 to-blue-600 hover:shadow-blue-100",
    purple: "from-purple-500 to-purple-600 hover:shadow-purple-100",
    green: "from-green-500 to-green-600 hover:shadow-green-100",
    orange: "from-orange-500 to-orange-600 hover:shadow-orange-100",
    teal: "from-teal-500 to-teal-600 hover:shadow-teal-100",
    red: "from-red-500 to-red-600 hover:shadow-red-100",
    indigo: "from-indigo-500 to-indigo-600 hover:shadow-indigo-100",
    pink: "from-pink-500 to-pink-600 hover:shadow-pink-100",
    cyan: "from-cyan-500 to-cyan-600 hover:shadow-cyan-100",
    yellow: "from-yellow-500 to-yellow-600 hover:shadow-yellow-100",
    violet: "from-violet-500 to-violet-600 hover:shadow-violet-100",
  };
  return colorMap[color as keyof typeof colorMap] || colorMap.blue;
};

export default function BlogPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Navigation */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between p-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/sora.png"
              alt="Saora Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Saora
            </span>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-600 hover:text-gray-900"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="px-4 py-2 space-y-2 border-t border-gray-200">
            <Link
              href="/"
              className="block py-2 text-gray-600 hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              href="/solutions"
              className="block py-2 text-gray-600 hover:text-gray-900"
            >
              Solutions
            </Link>
            <Link
              href="/blog"
              className="block py-2 text-gray-600 hover:text-gray-900"
            >
              Blog
            </Link>
            <Link
              href="/faq"
              className="block py-2 text-gray-600 hover:text-gray-900"
            >
              FAQ
            </Link>
          </div>
        )}
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center justify-between p-6 bg-white border-b border-gray-200">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/sora.png"
            alt="Saora Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Saora
          </span>
        </Link>
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link href="/solutions" className="text-gray-600 hover:text-gray-900">
            Solutions
          </Link>
          <Link
            href="/blog"
            className="text-gray-600 hover:text-gray-900 font-semibold"
          >
            Blog
          </Link>
          <Link href="/faq" className="text-gray-600 hover:text-gray-900">
            FAQ
          </Link>
          <a
            href="https://apps.apple.com/us/app/saora-sound/id6746692484"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Download
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
            Saora Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our expert advice to improve your well-being, manage
            stress, sleep better and optimize your quality of life through
            natural sounds and relaxation.
          </p>
          <div className="text-sm text-gray-500">
            {blogPosts.length} articles • Regularly updated
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => {
            const IconComponent = post.icon;
            return (
              <Link key={post.href} href={post.href} className="group">
                <article className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl border border-gray-100">
                  <div className="relative h-48 bg-gradient-to-br overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${getColorClasses(
                        post.color
                      )} opacity-90`}
                    ></div>
                    <div className="relative z-10 flex items-center justify-center h-full">
                      <IconComponent className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-500 flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </span>
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                        Article #{index + 1}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {post.description}
                    </p>
                    <div className="mt-4 flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                      <span className="text-sm font-medium">Read article</span>
                      <svg
                        className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
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
                </article>
              </Link>
            );
          })}
        </div>

        {/* Newsletter Section */}
        <section className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter to receive new articles and exclusive
            tips for better well-being.
          </p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Image
                src="/sora.png"
                alt="Saora Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Saora
              </span>
            </div>
            <div className="flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link
                href="/solutions"
                className="text-gray-600 hover:text-gray-900"
              >
                Solutions
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-gray-900">
                Blog
              </Link>
              <Link href="/faq" className="text-gray-600 hover:text-gray-900">
                FAQ
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
            © 2024 Saora. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
