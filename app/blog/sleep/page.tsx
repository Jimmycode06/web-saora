import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Clock } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Can't Sleep? Causes, Solutions, and Practical Tips to Get Better Rest | Saora",
  description:
    "Discover effective solutions for insomnia and sleep problems. Learn about common causes, practical tips, and natural remedies to improve your sleep quality.",
  keywords: [
    "sleep problems",
    "insomnia solutions",
    "better sleep tips",
    "sleep disorders",
    "sleep hygiene",
    "natural sleep remedies",
    "sleep environment",
    "sleep routine",
    "sleep meditation",
    "sleep anxiety",
  ],
  openGraph: {
    title:
      "Can't Sleep? Causes, Solutions, and Practical Tips to Get Better Rest | Saora",
    description:
      "Discover effective solutions for insomnia and sleep problems. Learn about common causes, practical tips, and natural remedies to improve your sleep quality.",
    type: "article",
    url: "https://saora.app/blog/sleep",
    images: [
      {
        url: "https://saora.app/sora.png",
        width: 1200,
        height: 630,
        alt: "Saora Sleep Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Can't Sleep? Causes, Solutions, and Practical Tips to Get Better Rest | Saora",
    description:
      "Discover effective solutions for insomnia and sleep problems. Learn about common causes, practical tips, and natural remedies to improve your sleep quality.",
    images: ["https://saora.app/sora.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://saora.app/blog/sleep",
  },
};

export default function SleepBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
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
              href="/blog"
              className="text-blue-200 hover:text-blue-100 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/faq"
              className="text-blue-200 hover:text-blue-100 transition-colors"
            >
              FAQ
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
        <article className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Can't Sleep? Causes, Solutions, and Practical Tips to Get Better
              Rest
            </h1>
            <div className="flex items-center space-x-4 text-blue-200">
              <span className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                10 min read
              </span>
              <span>•</span>
              <span>Updated: March 2024</span>
            </div>
          </header>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="lead text-xl text-blue-100 mb-8">
              Sleep is essential for both physical and mental health. Yet, many
              people struggle to fall asleep or stay asleep through the night.
              If you find yourself tossing and turning, rest assured—you&apos;re
              not alone, and there are effective solutions to help you get
              peaceful nights again.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">
              Why Can't I Sleep? The Most Common Causes
            </h2>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-blue-200">
              1. Stress and Anxiety
            </h3>
            <p>
              Daily stress, work pressure, and personal worries are the number
              one causes of sleep problems. When your brain stays in &quot;alert
              mode,&quot; falling asleep becomes difficult.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-blue-200">
              2. Poor Lifestyle Habits
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Using screens right before bed (blue light exposure)</li>
              <li>
                Consuming caffeine, tea, energy drinks, or alcohol in the
                evening
              </li>
              <li>Eating heavy or late dinners</li>
              <li>Lack of physical activity during the day</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-blue-200">
              3. Unsuitable Sleep Environment
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Bedroom too hot or too cold</li>
              <li>Noise disturbances or too much light</li>
              <li>Uncomfortable mattress or pillows</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">
              The Best Solutions to Regain Sleep
            </h2>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-blue-200">
              1. Establish a Nighttime Routine
            </h3>
            <p>
              Your brain loves habits! Create a calming ritual every night:
              reading, a warm shower, meditation, soft music. This signals your
              body it&apos;s time to slow down.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-blue-200">
              2. Practice Breathing Exercises or Meditation
            </h3>
            <p>Try this simple breathing exercise:</p>
            <ul className="list-decimal pl-6 space-y-2">
              <li>Inhale deeply through your nose for 4 seconds</li>
              <li>Hold your breath for 7 seconds</li>
              <li>Exhale slowly through your mouth for 8 seconds</li>
              <li>Repeat 4-5 times</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-blue-200">
              3. Optimize Your Sleep Environment
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Keep your bedroom cool (65-67°F / 18-19°C)</li>
              <li>Ensure complete darkness (blackout curtains, sleep mask)</li>
              <li>Use white noise or a fan to block disruptive sounds</li>
              <li>Invest in comfortable bedding</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">
              When to See a Doctor
            </h2>
            <p>
              If sleep problems last more than three weeks, cause severe
              fatigue, mood disturbances, or concentration issues, or if you
              suspect a medical condition (apnea, pain, depression), consult
              your healthcare provider. They may refer you to a sleep
              specialist.
            </p>

            <div className="mt-12 p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4 text-blue-200">
                Try Saora for Better Sleep
              </h3>
              <p className="mb-6">
                Saora offers a collection of soothing sounds and guided
                meditations specifically designed to help you fall asleep faster
                and sleep better. Download the app today and start your journey
                to better sleep.
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
      <footer className="relative z-10 px-6 py-12 border-t border-white/10 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-lg font-bold text-white">S</span>
            </div>
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
