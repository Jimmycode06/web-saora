import Link from "next/link";
import Image from "next/image";
import { brainSchema } from "./schema";

export default function HabitsAndBehaviors() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Header */}
      <header className="px-6 py-8">
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
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
          Building Positive Habits and Behaviors
        </h1>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-blue-200">
            Understanding Habits and Behaviors
          </h2>
          <p className="text-lg text-blue-100 mb-6">
            Habits are the building blocks of our daily lives. They shape our
            behaviors, influence our well-being, and determine our long-term
            success. Understanding how habits work is the first step toward
            positive change.
          </p>
          <p className="text-lg text-blue-100">
            Whether you want to establish new positive habits or change existing
            ones, sound therapy can be a powerful tool in your journey toward
            behavioral transformation.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-blue-200">
            Common Habit Challenges
          </h2>
          <ul className="list-disc list-inside space-y-4 text-blue-100">
            <li>Difficulty maintaining consistency</li>
            <li>Breaking negative patterns</li>
            <li>Lack of motivation</li>
            <li>Time management issues</li>
            <li>Stress-related behaviors</li>
            <li>Sleep-related habits</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-blue-200">
            Natural Solutions for Habit Change
          </h2>
          <div className="space-y-6">
            <div className="p-6 bg-white/5 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-blue-200">
                Sound Therapy
              </h3>
              <p className="text-blue-100">
                Our carefully curated soundscapes can help create the perfect
                environment for habit formation, making it easier to establish
                and maintain new behaviors.
              </p>
            </div>
            <div className="p-6 bg-white/5 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-blue-200">
                Guided Sessions
              </h3>
              <p className="text-blue-100">
                Follow our guided sessions designed to support specific habit
                changes, from morning routines to sleep hygiene.
              </p>
            </div>
            <div className="p-6 bg-white/5 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-blue-200">
                Progress Tracking
              </h3>
              <p className="text-blue-100">
                Monitor your habit-building journey with our built-in tracking
                features, helping you stay motivated and consistent.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-blue-200">
            How Saora Can Help
          </h2>
          <p className="text-lg text-blue-100 mb-6">
            Saora provides a comprehensive approach to habit formation and
            behavior change through sound therapy. Our app offers:
          </p>
          <ul className="list-disc list-inside space-y-4 text-blue-100">
            <li>Customizable sound environments for different activities</li>
            <li>Guided sessions for specific habit changes</li>
            <li>Progress tracking and reminders</li>
            <li>Sleep optimization for better habit formation</li>
            <li>Stress reduction to support positive changes</li>
          </ul>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Start Your Habit Transformation Today
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Download Saora and begin your journey toward positive habit change
          </p>
          <a
            href="https://apps.apple.com/us/app/saora-sound/id6746692484"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-block transition-all duration-300 hover:scale-105"
          >
            <Image
              src="/app-store-badge.svg"
              alt="Download on the App Store"
              width={200}
              height={60}
              className="h-16 w-auto"
              priority
            />
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex justify-center space-x-6">
            <Link
              href="/privacy-policy"
              className="text-blue-300 hover:text-blue-200 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-use"
              className="text-blue-300 hover:text-blue-200 transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
