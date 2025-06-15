"use client";

import { Users, MessageCircle, Heart, Sparkles } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import { relationshipsAndCommunicationSchema } from "./schema";
import Image from "next/image";
import { Metadata } from "next";

export default function RelationshipsAndCommunicationPage() {
  return (
    <>
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(relationshipsAndCommunicationSchema),
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
              Nurturing Healthy Relationships and Communication
            </h1>

            <div className="space-y-8">
              <section aria-labelledby="understanding-heading">
                <h2
                  id="understanding-heading"
                  className="text-2xl font-semibold text-blue-200 mb-4"
                >
                  Understanding Relationships and Communication
                </h2>
                <p className="text-blue-100 leading-relaxed">
                  Healthy relationships and effective communication are
                  essential for our well-being. They help us connect with
                  others, express our needs, and build meaningful bonds. With
                  the right tools and understanding, you can develop stronger
                  relationships and improve your communication skills.
                </p>
              </section>

              <section aria-labelledby="signs-heading">
                <h2
                  id="signs-heading"
                  className="text-2xl font-semibold text-blue-200 mb-4"
                >
                  Common Communication Challenges
                </h2>
                <p className="text-blue-100 leading-relaxed">
                  Many people face difficulties in their relationships. You
                  might recognize these challenges:
                </p>
                <ul
                  className="list-disc list-inside text-blue-100 space-y-2 mt-4"
                  role="list"
                >
                  <li>Difficulty expressing feelings and needs</li>
                  <li>Misunderstandings and conflicts</li>
                  <li>Fear of vulnerability</li>
                  <li>Setting boundaries</li>
                  <li>Active listening and empathy</li>
                </ul>
              </section>

              <section aria-labelledby="solutions-heading">
                <h2
                  id="solutions-heading"
                  className="text-2xl font-semibold text-blue-200 mb-4"
                >
                  Natural Solutions for Better Relationships
                </h2>
                <p className="text-blue-100 leading-relaxed">
                  Improve your relationships with these proven approaches:
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-6" role="list">
                  <div
                    className="p-6 bg-white/5 rounded-xl border border-white/10"
                    role="listitem"
                  >
                    <Users
                      className="w-8 h-8 text-blue-300 mb-4"
                      aria-hidden="true"
                    />
                    <h3 className="text-xl font-semibold mb-2">Connection</h3>
                    <p className="text-blue-100">
                      Learn to build and maintain meaningful relationships.
                    </p>
                  </div>
                  <div
                    className="p-6 bg-white/5 rounded-xl border border-white/10"
                    role="listitem"
                  >
                    <MessageCircle
                      className="w-8 h-8 text-blue-300 mb-4"
                      aria-hidden="true"
                    />
                    <h3 className="text-xl font-semibold mb-2">
                      Communication Skills
                    </h3>
                    <p className="text-blue-100">
                      Develop effective ways to express yourself and listen to
                      others.
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
                      Emotional Intelligence
                    </h3>
                    <p className="text-blue-100">
                      Understand and manage emotions in yourself and others.
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
                  Saora is designed to support your journey to better
                  relationships. Our app offers:
                </p>
                <ul
                  className="list-disc list-inside text-blue-100 space-y-2 mt-4"
                  role="list"
                >
                  <li>Guided communication exercises</li>
                  <li>Relaxation techniques for difficult conversations</li>
                  <li>Emotional awareness practices</li>
                  <li>Relationship-building soundscapes</li>
                  <li>
                    Customizable sound combinations for different situations
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
                  Start Your Journey to Better Relationships
                </h2>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Take the first step towards healthier relationships. Download
                  Saora today and discover how sound therapy can help you
                  improve your communication and connections.
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
                src="/solutions/relationships-and-communication.jpg"
                alt="Relationships and Communication"
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
              Your companion for better relationships
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
