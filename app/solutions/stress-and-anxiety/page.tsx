"use client";

import { Download, Heart, Brain, Music } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import { stressAndAnxietySchema } from "./schema";
import Image from "next/image";

export default function StressAndAnxietyPage() {
  return (
    <>
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(stressAndAnxietySchema),
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
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-2xl font-bold text-white">S</span>
              </div>
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
              Finding Peace: Managing Stress and Anxiety with Sound Therapy
            </h1>

            <div className="space-y-8">
              <section aria-labelledby="understanding-heading">
                <h2
                  id="understanding-heading"
                  className="text-2xl font-semibold text-blue-200 mb-4"
                >
                  Understanding Stress and Anxiety
                </h2>
                <p className="text-blue-100 leading-relaxed">
                  In today&apos;s fast-paced world, stress and anxiety have
                  become common companions in our daily lives. Whether it&apos;s
                  work pressure, personal relationships, or global
                  uncertainties, these feelings can significantly impact our
                  mental and physical well-being. But there&apos;s hope -
                  through mindful practices and sound therapy, you can find your
                  path to inner peace.
                </p>
              </section>

              <section aria-labelledby="signs-heading">
                <h2
                  id="signs-heading"
                  className="text-2xl font-semibold text-blue-200 mb-4"
                >
                  Recognizing the Signs
                </h2>
                <p className="text-blue-100 leading-relaxed">
                  Stress and anxiety manifest in various ways, from physical
                  symptoms like muscle tension and rapid heartbeat to emotional
                  signs such as constant worry and difficulty relaxing. You
                  might experience:
                </p>
                <ul
                  className="list-disc list-inside text-blue-100 space-y-2 mt-4"
                  role="list"
                >
                  <li>Persistent feelings of worry or unease</li>
                  <li>Difficulty sleeping or concentrating</li>
                  <li>Physical tension in shoulders, neck, or jaw</li>
                  <li>Racing thoughts and overthinking</li>
                  <li>Changes in appetite or energy levels</li>
                </ul>
              </section>

              <section aria-labelledby="solutions-heading">
                <h2
                  id="solutions-heading"
                  className="text-2xl font-semibold text-blue-200 mb-4"
                >
                  Natural Solutions for Relief
                </h2>
                <p className="text-blue-100 leading-relaxed">
                  Managing stress and anxiety doesn&apos;t have to involve
                  medication alone. Here are proven natural approaches:
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-6" role="list">
                  <div
                    className="p-6 bg-white/5 rounded-xl border border-white/10"
                    role="listitem"
                  >
                    <Brain
                      className="w-8 h-8 text-blue-300 mb-4"
                      aria-hidden="true"
                    />
                    <h3 className="text-xl font-semibold mb-2">Mindfulness</h3>
                    <p className="text-blue-100">
                      Practice being present in the moment through guided
                      meditation and breathing exercises.
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
                      Use calming natural sounds to create a peaceful
                      environment and reduce stress levels.
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
                    <h3 className="text-xl font-semibold mb-2">Self-Care</h3>
                    <p className="text-blue-100">
                      Develop healthy routines and practices that support your
                      mental well-being.
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
                  Saora is designed specifically to help you manage stress and
                  anxiety through the power of sound therapy. Our app offers:
                </p>
                <ul
                  className="list-disc list-inside text-blue-100 space-y-2 mt-4"
                  role="list"
                >
                  <li>
                    Curated soundscapes for stress relief and anxiety management
                  </li>
                  <li>
                    Guided breathing exercises synchronized with calming sounds
                  </li>
                  <li>
                    Customizable meditation sessions for different anxiety
                    levels
                  </li>
                  <li>
                    Sleep sounds to improve rest and reduce nighttime anxiety
                  </li>
                  <li>
                    Progress tracking to monitor your journey to better mental
                    health
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
                  Start Your Journey to Peace
                </h2>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Take the first step towards managing your stress and anxiety.
                  Download Saora today and discover how sound therapy can
                  transform your life.
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
                  Free trial available on both platforms
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
              Your companion for relaxation and well-being
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
              <span className="text-blue-400" aria-hidden="true">
                •
              </span>
              <Link
                href="/terms-of-use"
                className="text-blue-300 hover:text-blue-200 transition-colors text-sm"
              >
                Terms of Use
              </Link>
            </nav>
            <p className="text-blue-300 text-sm">
              © 2024 Saora. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
