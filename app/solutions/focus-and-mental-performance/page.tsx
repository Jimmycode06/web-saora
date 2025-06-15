"use client";

import { Brain, Target, Music, Sparkles } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import { focusAndMentalPerformanceSchema } from "./schema";
import Image from "next/image";
import { Metadata } from "next";

export default function FocusAndMentalPerformancePage() {
  return (
    <>
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(focusAndMentalPerformanceSchema),
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
              Peak Performance: Enhancing Focus and Mental Clarity
            </h1>

            <div className="space-y-8">
              <section aria-labelledby="understanding-heading">
                <h2
                  id="understanding-heading"
                  className="text-2xl font-semibold text-blue-200 mb-4"
                >
                  Understanding Mental Performance
                </h2>
                <p className="text-blue-100 leading-relaxed">
                  Mental performance is crucial for success in today&apos;s
                  fast-paced world. Whether you&apos;re studying, working, or
                  pursuing personal goals, the ability to focus and maintain
                  mental clarity can make all the difference. With the right
                  tools and techniques, you can enhance your cognitive abilities
                  and achieve peak performance.
                </p>
              </section>

              <section aria-labelledby="signs-heading">
                <h2
                  id="signs-heading"
                  className="text-2xl font-semibold text-blue-200 mb-4"
                >
                  Common Focus Challenges
                </h2>
                <p className="text-blue-100 leading-relaxed">
                  Many people struggle with maintaining focus. You might
                  recognize these signs:
                </p>
                <ul
                  className="list-disc list-inside text-blue-100 space-y-2 mt-4"
                  role="list"
                >
                  <li>Difficulty concentrating on tasks</li>
                  <li>Mental fatigue and brain fog</li>
                  <li>Procrastination and lack of motivation</li>
                  <li>Distractibility and mind wandering</li>
                  <li>Difficulty maintaining attention for extended periods</li>
                </ul>
              </section>

              <section aria-labelledby="solutions-heading">
                <h2
                  id="solutions-heading"
                  className="text-2xl font-semibold text-blue-200 mb-4"
                >
                  Natural Solutions for Better Focus
                </h2>
                <p className="text-blue-100 leading-relaxed">
                  Improve your mental performance with these proven approaches:
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-6" role="list">
                  <div
                    className="p-6 bg-white/5 rounded-xl border border-white/10"
                    role="listitem"
                  >
                    <Target
                      className="w-8 h-8 text-blue-300 mb-4"
                      aria-hidden="true"
                    />
                    <h3 className="text-xl font-semibold mb-2">
                      Focus Techniques
                    </h3>
                    <p className="text-blue-100">
                      Learn proven methods to enhance concentration and
                      productivity.
                    </p>
                  </div>
                  <div
                    className="p-6 bg-white/5 rounded-xl border border-white/10"
                    role="listitem"
                  >
                    <Music
                      className="w-8 h-8 text-blue-300 mb-4"
                      aria-hidden="true"
                    />
                    <h3 className="text-xl font-semibold mb-2">Focus Sounds</h3>
                    <p className="text-blue-100">
                      Use specially designed sounds to create an optimal
                      environment for concentration.
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
                      Mental Training
                    </h3>
                    <p className="text-blue-100">
                      Develop cognitive skills through targeted exercises and
                      practices.
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
                  Saora is designed to help you achieve peak mental performance.
                  Our app offers:
                </p>
                <ul
                  className="list-disc list-inside text-blue-100 space-y-2 mt-4"
                  role="list"
                >
                  <li>Focus-enhancing soundscapes for different tasks</li>
                  <li>Pomodoro timer with ambient sounds</li>
                  <li>Guided focus sessions</li>
                  <li>Productivity tracking and insights</li>
                  <li>Customizable sound combinations for optimal focus</li>
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
                  Boost Your Mental Performance Today
                </h2>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Take the first step towards enhanced focus and mental clarity.
                  Download Saora today and discover how sound therapy can help
                  you achieve peak performance.
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
              Your companion for peak mental performance
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
