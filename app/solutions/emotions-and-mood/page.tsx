"use client";

import { Heart, Brain, Music, Sparkles } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import { emotionsAndMoodSchema } from "./schema";
import Image from "next/image";
import { Metadata } from "next";

export default function EmotionsAndMoodPage() {
  return (
    <>
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(emotionsAndMoodSchema),
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
              Emotional Balance: Understanding and Managing Your Mood
            </h1>

            <div className="space-y-8">
              <section aria-labelledby="understanding-heading">
                <h2
                  id="understanding-heading"
                  className="text-2xl font-semibold text-blue-200 mb-4"
                >
                  Understanding Emotional Well-being
                </h2>
                <p className="text-blue-100 leading-relaxed">
                  Emotional well-being is a crucial part of your overall health.
                  It affects how you think, feel, and interact with others.
                  While it&apos;s normal to experience different emotions
                  throughout the day, having tools to manage them can help you
                  maintain balance and improve your quality of life.
                </p>
              </section>

              <section aria-labelledby="signs-heading">
                <h2
                  id="signs-heading"
                  className="text-2xl font-semibold text-blue-200 mb-4"
                >
                  Common Emotional Challenges
                </h2>
                <p className="text-blue-100 leading-relaxed">
                  Many people experience emotional challenges. You might
                  recognize these signs:
                </p>
                <ul
                  className="list-disc list-inside text-blue-100 space-y-2 mt-4"
                  role="list"
                >
                  <li>Mood swings or emotional instability</li>
                  <li>Difficulty managing stress</li>
                  <li>Feeling overwhelmed by emotions</li>
                  <li>Low energy or motivation</li>
                  <li>Difficulty finding joy in daily activities</li>
                </ul>
              </section>

              <section aria-labelledby="solutions-heading">
                <h2
                  id="solutions-heading"
                  className="text-2xl font-semibold text-blue-200 mb-4"
                >
                  Natural Solutions for Emotional Balance
                </h2>
                <p className="text-blue-100 leading-relaxed">
                  Improve your emotional well-being with these proven
                  approaches:
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
                    <h3 className="text-xl font-semibold mb-2">
                      Emotional Awareness
                    </h3>
                    <p className="text-blue-100">
                      Learn to recognize and understand your emotions without
                      judgment.
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
                    <h3 className="text-xl font-semibold mb-2">
                      Sound Therapy
                    </h3>
                    <p className="text-blue-100">
                      Use calming sounds to create a peaceful environment and
                      regulate emotions.
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
                    <h3 className="text-xl font-semibold mb-2">Mindfulness</h3>
                    <p className="text-blue-100">
                      Practice being present and cultivating positive emotions.
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
                  Saora is designed to help you manage your emotions through
                  sound therapy. Our app offers:
                </p>
                <ul
                  className="list-disc list-inside text-blue-100 space-y-2 mt-4"
                  role="list"
                >
                  <li>
                    Mood-specific soundscapes for different emotional states
                  </li>
                  <li>Guided emotional awareness exercises</li>
                  <li>Meditation sessions for emotional balance</li>
                  <li>Daily mood tracking and insights</li>
                  <li>
                    Personalized recommendations based on your emotional
                    patterns
                  </li>
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
                  Start Your Journey to Emotional Balance
                </h2>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Take the first step towards better emotional well-being.
                  Download Saora today and discover how sound therapy can help
                  you manage your emotions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://apps.apple.com/us/app/saora-sound/id6746692484"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group transition-all duration-300 hover:scale-105"
                  >
                    <Image
                      src="/app-store-badge.svg"
                      alt="Download on the App Store"
                      width={160}
                      height={48}
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
              Your companion for emotional well-being
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
      <Image
        src="/solutions/emotions-and-mood.jpg"
        alt="Emotions and Mood"
        width={800}
        height={400}
        className="w-full h-64 object-cover rounded-lg"
      />
    </>
  );
}
