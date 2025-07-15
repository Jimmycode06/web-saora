import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, Target, Brain, Star, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "Boost Your Concentration and Focus Daily | Saora",
  description:
    "Discover scientifically proven strategies to improve concentration and multiply your productivity. Practical techniques for better focus.",
  keywords: [
    "concentration",
    "focus",
    "productivity",
    "attention",
    "meditation",
    "distraction",
    "performance",
    "mental training",
    "mindfulness",
    "work efficiency",
    "saora",
  ],
  authors: [{ name: "Saora Team" }],
  openGraph: {
    title: "Boost Your Concentration and Focus Daily | Saora",
    description:
      "Discover scientifically proven strategies to improve concentration and multiply your productivity.",
    type: "article",
    publishedTime: "2024-12-19T10:00:00.000Z",
    authors: ["Saora Team"],
    tags: ["concentration", "focus", "productivity", "meditation"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boost Your Concentration and Focus Daily | Saora",
    description:
      "Discover scientifically proven strategies to improve concentration and multiply your productivity.",
  },
  alternates: {
    canonical: "https://saora.fr/blog/focus",
  },
};

export default function FocusBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Saora</span>
            </div>
            <div className="flex items-center space-x-6">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Home
              </Link>
              <a
                href="/blog"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Blog
              </a>
              <a
                href="https://apps.apple.com/us/app/saora-sound/id6746692484"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-full hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 hover:scale-105"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-yellow-100 opacity-50" />
        <div className="relative container mx-auto px-4 text-center">
          <Target className="w-16 h-16 mx-auto mb-6 text-orange-600" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-orange-800 bg-clip-text text-transparent">
            Boost Your Concentration and Daily Focus
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            In a hyper-connected world where distractions are omnipresent,
            maintaining concentration becomes a real challenge. Discover
            scientifically proven strategies to regain your focus and multiply
            your productivity.
          </p>
          <div className="flex items-center justify-center space-x-4 text-gray-600">
            <span className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              11 min read
            </span>
            <span>•</span>
            <span>Updated: December 2024</span>
          </div>
        </div>
      </section>

      <main className="relative z-10 px-6 py-12">
        <article className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 flex items-center">
              <Target className="w-8 h-8 mr-3 text-orange-600" />
              Why Does Our Concentration Decrease?
            </h2>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
              Modern Attention Thieves
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Digital notifications:</strong> On average, we check our
                phone 150 times per day
              </li>
              <li>
                <strong>Multitasking:</strong> Reduces efficiency by up to 40%
              </li>
              <li>
                <strong>Information overload:</strong> The human brain processes
                34 GB of information daily
              </li>
              <li>
                <strong>Chronic stress:</strong> Elevates cortisol, impairing
                memory and attention
              </li>
              <li>
                <strong>Sleep deprivation:</strong> Less than 7 hours of sleep
                reduces concentration by 30%
              </li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
              The Neuroscience of Attention
            </h3>
            <p className="text-gray-700 mb-4">
              Concentration relies on the prefrontal cortex, our brain&apos;s
              &quot;control center.&quot; Like a muscle, it strengthens with
              training but weakens when overloaded. Understanding these
              mechanisms allows us to train our attention effectively.
            </p>

            <div className="bg-orange-50 p-6 rounded-lg my-6">
              <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                <Brain className="w-5 h-5 mr-2 text-orange-600" />
                Did You Know?
              </h4>
              <p className="text-gray-700">
                Studies show that after an interruption, it takes an average of
                23 minutes to fully regain concentration on the initial task.
                This highlights the importance of creating distraction-free
                environments.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 flex items-center">
              <Lightbulb className="w-8 h-8 mr-3 text-yellow-600" />
              Proven Techniques to Improve Focus
            </h2>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
              1. The Pomodoro Technique
            </h3>
            <p className="text-gray-700 mb-4">
              This method leverages our brain's natural rhythm by alternating
              periods of intense concentration with regular breaks. The brain
              learns to focus intensely for defined periods.
            </p>

            <div className="bg-red-50 p-6 rounded-lg my-6">
              <h4 className="font-bold text-gray-900 mb-3">
                How to Apply the Pomodoro Technique
              </h4>
              <ol className="list-decimal pl-4 space-y-2 text-gray-700">
                <li>Choose a task to accomplish</li>
                <li>Set a timer for 25 minutes</li>
                <li>Work with focused concentration until the timer rings</li>
                <li>Take a 5-minute break</li>
                <li>
                  Repeat 4 cycles, then take a longer break (15-30 minutes)
                </li>
              </ol>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
              2. The Optimal Work Environment
            </h3>

            <h4 className="text-lg font-bold mt-6 mb-3 text-gray-700">
              Physical Space
            </h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Clean and organized desk</li>
              <li>Natural lighting or light therapy lamp</li>
              <li>Temperature between 69-73°F (21-23°C)</li>
              <li>Green plants to improve air quality</li>
            </ul>

            <h4 className="text-lg font-bold mt-6 mb-3 text-gray-700">
              Sound Environment
            </h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Binaural beats to synchronize brain waves</li>
              <li>White or pink noise to mask distractions</li>
              <li>Nature sounds (rain, forest, waves)</li>
              <li>Soft instrumental music</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
              3. Managing Digital Distractions
            </h3>

            <div className="bg-blue-50 p-6 rounded-lg my-6">
              <h4 className="font-bold text-gray-900 mb-3">
                Digital Detox Strategy
              </h4>
              <ul className="list-disc pl-4 space-y-2 text-gray-700">
                <li>Turn off non-essential notifications</li>
                <li>Use "Do Not Disturb" mode during work sessions</li>
                <li>Keep phone in another room</li>
                <li>Use website blockers (Cold Turkey, Freedom)</li>
                <li>Check emails only at set times</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
              4. Concentration Meditation
            </h3>
            <p className="text-gray-700 mb-4">
              Regular meditation literally reshapes the brain, strengthening
              areas associated with attention and reducing those linked to
              distractibility.
            </p>

            <div className="bg-green-50 p-6 rounded-lg my-6">
              <h4 className="font-bold text-gray-900 mb-3">
                5-Minute Focus Exercise
              </h4>
              <ol className="list-decimal pl-4 space-y-2 text-gray-700">
                <li>Sit comfortably with your back straight</li>
                <li>Focus on your natural breathing</li>
                <li>When your mind wanders, gently return to breath</li>
                <li>Count breaths from 1 to 10, then start over</li>
                <li>Practice for 5 minutes daily, gradually increasing</li>
              </ol>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 flex items-center">
              <Star className="w-8 h-8 mr-3 text-purple-600" />
              Advanced Strategies for Sustained Focus
            </h2>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
              Flow State: Peak Performance
            </h3>
            <p className="text-gray-700 mb-4">
              Flow state is a mental state where you're completely immersed in
              an activity. Characteristics include total focus, time distortion,
              and optimal performance.
            </p>

            <h4 className="text-lg font-bold mt-6 mb-3 text-gray-700">
              How to Access Flow State
            </h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Choose challenging but achievable tasks</li>
              <li>Set clear, specific goals</li>
              <li>Eliminate all distractions</li>
              <li>Focus on the process, not the outcome</li>
              <li>Cultivate intrinsic motivation</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
              Ultradian Rhythms and Energy Management
            </h3>
            <p className="text-gray-700 mb-4">
              Our brain follows natural 90-120 minute cycles called ultradian
              rhythms. Working with these cycles rather than against them
              optimizes our concentration.
            </p>

            <div className="bg-purple-50 p-6 rounded-lg my-6">
              <h4 className="font-bold text-gray-900 mb-3">
                Optimizing Your Natural Rhythms
              </h4>
              <ul className="list-disc pl-4 space-y-2 text-gray-700">
                <li>Identify your peak concentration hours</li>
                <li>Schedule demanding tasks during these periods</li>
                <li>Take 15-20 minute breaks every 90 minutes</li>
                <li>Use breaks for gentle movement or meditation</li>
                <li>Avoid caffeine crashes with moderate consumption</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">
              Measuring and Improving Your Concentration
            </h2>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
              Self-Assessment Tests
            </h3>
            <p className="text-gray-700 mb-4">
              Keep a concentration journal: note your attention levels
              throughout the day to identify your performance peaks and valleys.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
              Apps and Tools
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Forest:</strong> Gamification of focus with virtual tree
                planting
              </li>
              <li>
                <strong>Brain.fm:</strong> Music scientifically designed for
                concentration
              </li>
              <li>
                <strong>Saora:</strong> Natural sounds and work environments
              </li>
              <li>
                <strong>RescueTime:</strong> Analysis of your screen time and
                productivity
              </li>
            </ul>

            <div className="mt-12 p-8 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl border border-orange-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Optimize Your Concentration with Saora
              </h3>
              <p className="mb-6 text-gray-700">
                Saora offers sound environments specially designed to improve
                your concentration. Binaural beats, white noise, and natural
                environments accompany you during your intensive work sessions.
                Discover the power of sounds to multiply your focus.
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
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Saora</span>
            </div>
            <div className="flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <a href="/blog" className="text-gray-600 hover:text-gray-900">
                Blog
              </a>
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
