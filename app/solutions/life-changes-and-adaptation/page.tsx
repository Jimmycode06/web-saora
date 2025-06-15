"use client";

import { RefreshCw, Heart, Sparkles, Shield } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import { lifeChangesAndAdaptationSchema } from "./schema";
import Image from "next/image";

export default function LifeChangesAndAdaptationPage() {
  return (
    <>
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(lifeChangesAndAdaptationSchema),
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
              Navigating Life Changes and Adaptation
            </h1>

            <div className="space-y-8">
              <section aria-labelledby="understanding-heading">
                <h2
                  id="understanding-heading"
                  className="text-2xl font-semibold text-blue-200 mb-4"
                >
                  Understanding Life Changes
                </h2>
                <p className="text-blue-100 leading-relaxed">
                  Life is full of changes and transitions. Whether it&apos;s a
                  new job, moving to a new place, or personal growth, adapting
                  to change can be challenging. With the right support and
                  tools, you can navigate these transitions with greater ease
                  and resilience.
                </p>
              </section>

              <section aria-labelledby="signs-heading">
                <h2
                  id="signs-heading"
                  className="text-2xl font-semibold text-blue-200 mb-4"
                >
                  Common Challenges During Change
                </h2>
                <p className="text-blue-100 leading-relaxed">
                  Many people face difficulties during life transitions. You
                  might recognize these challenges:
                </p>
                <ul
                  className="list-disc list-inside text-blue-100 space-y-2 mt-4"
                  role="list"
                >
                  <li>Uncertainty and anxiety about the future</li>
                  <li>Difficulty letting go of the past</li>
                  <li>Stress from new responsibilities</li>
                  <li>Adjusting to new routines</li>
                  <li>Managing expectations and pressure</li>
                </ul>
              </section>

              <section aria-labelledby="solutions-heading">
                <h2
                  id="solutions-heading"
                  className="text-2xl font-semibold text-blue-200 mb-4"
                >
                  Natural Solutions for Adaptation
                </h2>
                <p className="text-blue-100 leading-relaxed">
                  Navigate change more smoothly with these proven approaches:
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-6" role="list">
                  <div
                    className="p-6 bg-white/5 rounded-xl border border-white/10"
                    role="listitem"
                  >
                    <RefreshCw
                      className="w-8 h-8 text-blue-300 mb-4"
                      aria-hidden="true"
                    />
                    <h3 className="text-xl font-semibold mb-2">Resilience</h3>
                    <p className="text-blue-100">
                      Build strength and adaptability during transitions.
                    </p>
                  </div>
                  <div
                    className="p-6 bg-white/5 rounded-xl border border-white/10"
                    role="listitem"
                  >
                    <Heart
                      className="w-8 h-8 text-blue-300 mb-4"
                      aria-hidden="true"
                    />
                    <h3 className="text-xl font-semibold mb-2">
                      Emotional Support
                    </h3>
                    <p className="text-blue-100">
                      Find comfort and stability through sound therapy.
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
                      Growth Mindset
                    </h3>
                    <p className="text-blue-100">
                      Embrace change as an opportunity for personal development.
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
                  Saora is designed to support you through life changes. Our app
                  offers:
                </p>
                <ul
                  className="list-disc list-inside text-blue-100 space-y-2 mt-4"
                  role="list"
                >
                  <li>Guided transition sessions</li>
                  <li>Stress reduction techniques</li>
                  <li>Emotional balance soundscapes</li>
                  <li>Sleep improvement for better adaptation</li>
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
                  Start Your Journey Through Change
                </h2>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Take the first step towards smoother transitions. Download
                  Saora today and discover how sound therapy can help you adapt
                  to life changes with greater ease.
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
              Your companion through life changes
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
