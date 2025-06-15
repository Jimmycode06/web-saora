"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { faqSchema } from "./schema";
import {
  ChevronDown,
  ChevronUp,
  Brain,
  Heart,
  Clock,
  Settings,
  Users,
  Music,
  Shield,
} from "lucide-react";

const categories = [
  { id: "practice", name: "About Practice", icon: Brain },
  { id: "difficulties", name: "About Difficulties", icon: Shield },
  { id: "benefits", name: "About Benefits", icon: Heart },
  { id: "breathing", name: "About Breathing", icon: Clock },
  { id: "organization", name: "About Organization", icon: Settings },
  { id: "apps", name: "About Apps", icon: Music },
  { id: "health", name: "About Health", icon: Users },
];

const faqs = {
  practice: [
    {
      question: "How do I start meditating if I've never done it before?",
      answer:
        "Start with short sessions of 5-10 minutes. Find a quiet place, sit comfortably, and focus on your breath. Use guided meditations or apps like Saora to help you get started. The key is consistency rather than duration.",
    },
    {
      question: "What are the best meditation techniques for beginners?",
      answer:
        "For beginners, we recommend: 1) Breath awareness meditation, 2) Body scan meditation, 3) Guided meditation using apps like Saora, 4) Walking meditation. Start with 5-10 minute sessions and gradually increase duration as you become more comfortable.",
    },
  ],
  difficulties: [
    {
      question: "What should I do if I can't stop thinking during meditation?",
      answer:
        "Having thoughts during meditation is completely normal. Instead of trying to stop thinking, acknowledge your thoughts without judgment and gently return your focus to your breath. This practice of returning to focus is actually the core of meditation.",
    },
  ],
  benefits: [
    {
      question: "How can meditation help with stress and anxiety?",
      answer:
        "Meditation helps reduce stress and anxiety by: 1) Lowering cortisol levels, 2) Activating the parasympathetic nervous system, 3) Improving emotional regulation, 4) Enhancing self-awareness. Regular practice can lead to long-term changes in how you respond to stress.",
    },
    {
      question: "Can meditation improve sleep quality?",
      answer:
        "Yes, meditation can significantly improve sleep quality by: 1) Reducing racing thoughts, 2) Lowering stress levels, 3) Promoting relaxation, 4) Regulating sleep patterns. Using apps like Saora with sleep-specific meditations can be particularly helpful.",
    },
  ],
  breathing: [
    {
      question: "What's the best breathing technique for meditation?",
      answer:
        "The most effective breathing technique for beginners is natural breathing. Simply observe your breath without trying to change it. Focus on the sensation of air moving in and out of your nostrils or the rise and fall of your abdomen.",
    },
  ],
  organization: [
    {
      question: "What's the best time of day to meditate?",
      answer:
        "The best time to meditate is when you can be consistent. Many people prefer morning meditation to start their day mindfully, while others find evening meditation helps them unwind. Choose a time that fits your schedule and stick to it.",
    },
    {
      question: "How long should I meditate each session?",
      answer:
        "Beginners should start with 5-10 minutes daily. As you become more comfortable, gradually increase to 15-20 minutes. The key is consistency rather than duration. Even short sessions can be beneficial if done regularly.",
    },
  ],
  apps: [
    {
      question: "How can meditation apps help beginners?",
      answer:
        "Meditation apps like Saora provide: 1) Guided sessions for beginners, 2) Progress tracking, 3) Various meditation techniques, 4) Reminders and scheduling. They make it easier to establish and maintain a regular practice.",
    },
  ],
  health: [
    {
      question: "Can I meditate lying down?",
      answer:
        "While sitting is generally recommended to maintain alertness, you can meditate lying down if you have physical limitations or are doing a body scan meditation. Just be aware that lying down might make you more prone to falling asleep.",
    },
  ],
};

export default function FAQPage() {
  const [openQuestions, setOpenQuestions] = useState<{
    [key: string]: boolean;
  }>({});
  const [activeCategory, setActiveCategory] = useState("practice");

  const toggleQuestion = (question: string) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [question]: !prev[question],
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
              href="/support"
              className="flex items-center space-x-2 text-blue-200 hover:text-blue-100 transition-colors"
            >
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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Frequently Asked Questions About Meditation
          </h1>

          <p className="text-xl text-blue-100 mb-12 text-center max-w-2xl mx-auto">
            Find answers to common questions about meditation, mindfulness, and
            how Saora can help you on your journey to better mental well-being.
          </p>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-blue-500 text-white"
                      : "bg-white/10 text-blue-200 hover:bg-white/20"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs[activeCategory as keyof typeof faqs].map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(faq.question)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/10 transition-colors"
                >
                  <h2 className="text-lg font-semibold text-white">
                    {faq.question}
                  </h2>
                  {openQuestions[faq.question] ? (
                    <ChevronUp className="w-5 h-5 text-blue-300" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-300" />
                  )}
                </button>
                {openQuestions[faq.question] && (
                  <div className="px-6 py-4 bg-white/5">
                    <p className="text-blue-100 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">
              Ready to Start Your Meditation Journey?
            </h2>
            <p className="text-blue-100 mb-8">
              Download Saora and discover the power of guided meditation
            </p>
            <a
              href="https://apps.apple.com/us/app/saora-sound/id6746692484"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Image
                src="/app-store-badge.svg"
                alt="Download on the App Store"
                width={160}
                height={48}
                className="h-12 w-auto"
                priority
              />
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Image
              src="/sora.png"
              alt="Saora Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
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
