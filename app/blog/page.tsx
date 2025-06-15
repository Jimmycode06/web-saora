"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

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
            <span className="text-xl font-bold text-gray-900">Saora</span>
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
          <span className="text-xl font-bold text-gray-900">Saora</span>
        </Link>
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link href="/solutions" className="text-gray-600 hover:text-gray-900">
            Solutions
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-gray-900">
            Blog
          </Link>
          <Link href="/faq" className="text-gray-600 hover:text-gray-900">
            FAQ
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 lg:py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/blog/sleep" className="group">
            <article className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <div className="relative h-48">
                <Image
                  src="/sora.png"
                  alt="Sleep Tips"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Sleep Tips
                </h2>
                <p className="text-gray-600">
                  Discover effective strategies for better sleep and improved
                  well-being.
                </p>
              </div>
            </article>
          </Link>
          {/* Add more blog posts here */}
        </div>
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
              <span className="text-xl font-bold text-gray-900">Saora</span>
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
        </div>
      </footer>
    </div>
  );
}
