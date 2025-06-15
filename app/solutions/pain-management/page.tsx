"use client";

import { Heart, Shield, Sparkles, Music } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import { painManagementSchema } from "./schema";
import Image from "next/image";
import { Metadata } from "next";

export default function PainManagementPage() {
  return (
    <>
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(painManagementSchema),
        }}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        {/* Header */}
        <header className="relative z-10 px-6 py-8" role="banner">
          <nav
            className="max-w-7xl mx-auto flex items-center justify-between"
            role="navigation"
            aria-label="Main navigation"
          >
            <Link
              href="/"
              className="flex items-center space-x-3"
              aria-label="Saora Home"
            >
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
          </nav>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-6 py-12" role="main">
          <article className="prose prose-invert prose-lg max-w-none">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Natural Pain Management and Relief
            </h1>

            <div className="space-y-8">
              <section aria-labelledby="understanding-heading">
                <h2
                  id="understanding-heading"
                  className="text-2xl font-semibold text-blue-200 mb-4"
                >
                  Understanding Pain Management
                </h2>
                <p className="text-blue-100 leading-relaxed">
                  Pain management is crucial for maintaining quality of life.
                  Whether you&apos;re dealing with chronic pain, acute
                  discomfort, or stress-related tension, natural approaches can
                  help you find relief. Sound therapy offers a gentle,
                  non-invasive way to manage pain and promote healing.
                </p>
              </section>

              <section aria-labelledby="signs-heading">
                <h2
                  id="signs-heading"
                  className="text-2xl font-semibold text-blue-200 mb-4"
                >
                  Common Pain Challenges
                </h2>
                <p className="text-blue-100 leading-relaxed">
                  Many people experience various types of pain. You might
                  recognize these situations:
                </p>
                <ul
                  className="list-disc list-inside text-blue-100 space-y-2 mt-4"
                  role="list"
                >
                  <li>Chronic pain conditions</li>
                  <li>Muscle tension and stiffness</li>
                  <li>Stress-related discomfort</li>
                  <li>Recovery from injuries</li>
                  <li>Sleep disturbances due to pain</li>
                </ul>
              </section>

              <section aria-labelledby="solutions-heading">
                <h2
                  id="solutions-heading"
                  className="text-2xl font-semibold text-blue-200 mb-4"
                >
                  Natural Solutions for Pain Relief
                </h2>
                <p className="text-blue-100 leading-relaxed">
                  Find relief with these gentle, natural approaches:
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-6" role="list">
                  <div
                    className="p-6 bg-white/5 rounded-xl border border-white/10"
                    role="listitem"
                  >
                    <Heart
                      className="w-8 h-8 text-blue-300 mb-4"
                      aria-hidden="true"
                    />
                    <h3 className="text-xl font-semibold mb-2">Relaxation</h3>
                    <p className="text-blue-100">
                      Use sound therapy to reduce tension and promote healing.
                    </p>
                  </div>
                  <div
                    className="p-6 bg-white/5 rounded-xl border border-white/10"
                    role="listitem"
                  >
                    <Shield
                      className="w-8 h-8 text-blue-300 mb-4"
                      aria-hidden="true"
                    />
                    <h3 className="text-xl font-semibold mb-2">
                      Stress Reduction
                    </h3>
                    <p className="text-blue-100">
                      Lower stress levels to help manage pain more effectively.
                    </p>
                  </div>
                  <div
                    className="p-6 bg-white/5 rounded-xl border border-white/10"
                    role="listitem"
                  >
                    <Sparkles
                      className="w-8 h-8 text-blue-300 mb-4"
                      aria-hidden="true"
                    />
                    <h3 className="text-xl font-semibold mb-2">
                      Mind-Body Connection
                    </h3>
                    <p className="text-blue-100">
                      Develop awareness and control over pain responses.
                    </p>
                  </div>
                </div>
              </section>

              <section aria-labelledby="saora-help-heading">
                <h2
                  id="saora-help-heading"
                  className="text-2xl font-semibold text-blue-200 mb-4"
                >
                  How Saora Can Help
                </h2>
                <p className="text-blue-100 leading-relaxed">
                  Saora is designed to support your pain management journey. Our
                  app offers:
                </p>
                <ul
                  className="list-disc list-inside text-blue-100 space-y-2 mt-4"
                  role="list"
                >
                  <li>Soothing soundscapes for pain relief</li>
                  <li>Guided relaxation sessions</li>
                  <li>Stress reduction techniques</li>
                  <li>Sleep improvement sounds</li>
                  <li>Customizable sound combinations for different needs</li>
                </ul>
              </section>

              <section
                className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-2xl border border-white/10"
                aria-labelledby="cta-heading"
              >
                <h2
                  id="cta-heading"
                  className="text-2xl font-semibold text-blue-200 mb-4"
                >
                  Start Your Journey to Natural Pain Relief
                </h2>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Take the first step towards better pain management. Download
                  Saora today and discover how sound therapy can help you find
                  relief and improve your well-being.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://apps.apple.com/us/app/saora-sound/id6746692484"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group transition-all duration-300 hover:scale-105"
                  >
                    <img
                      src="/app-store-badge.svg"
                      alt="Download on the App Store"
                      className="h-12 w-auto"
                    />
                  </a>
                </div>
                <p className="text-sm text-blue-300 mt-4 text-center">
                  Free trial available
                </p>
              </section>

              <Image
                src="/solutions/pain-management.jpg"
                alt="Pain Management"
                width={800}
                height={400}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </article>
        </main>

        {/* Footer */}
        <footer
          className="mt-20 px-6 py-12 border-t border-white/10"
          role="contentinfo"
        >
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-blue-200 mb-4">
              Your companion for natural pain relief
            </p>
            <nav
              className="flex justify-center space-x-6 mb-4"
              aria-label="Footer navigation"
            >
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
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
}
