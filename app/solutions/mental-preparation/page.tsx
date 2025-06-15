import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export default function MentalPreparation() {
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
          Mental Preparation and Performance
        </h1>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-blue-200">
            Understanding Mental Preparation
          </h2>
          <p className="text-lg text-blue-100 mb-6">
            Mental preparation is the key to achieving peak performance in any
            area of life. It involves training your mind to be focused,
            resilient, and ready for challenges. Whether you're preparing for a
            presentation, an athletic event, or an important life moment, proper
            mental preparation can make all the difference.
          </p>
          <p className="text-lg text-blue-100">
            Sound therapy can be a powerful tool in your mental preparation
            toolkit, helping you achieve the optimal state of mind for success.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-blue-200">
            Key Aspects of Mental Preparation
          </h2>
          <ul className="list-disc list-inside space-y-4 text-blue-100">
            <li>Focus and concentration</li>
            <li>Visualization and mental imagery</li>
            <li>Stress management</li>
            <li>Confidence building</li>
            <li>Emotional regulation</li>
            <li>Performance anxiety management</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-blue-200">
            Natural Solutions for Mental Preparation
          </h2>
          <div className="space-y-6">
            <div className="p-6 bg-white/5 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-blue-200">
                Sound Therapy
              </h3>
              <p className="text-blue-100">
                Our carefully designed soundscapes help create the perfect
                mental environment for preparation, enhancing focus and reducing
                distractions.
              </p>
            </div>
            <div className="p-6 bg-white/5 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-blue-200">
                Guided Sessions
              </h3>
              <p className="text-blue-100">
                Follow our guided preparation sessions tailored for different
                types of challenges and performances.
              </p>
            </div>
            <div className="p-6 bg-white/5 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-blue-200">
                Performance Optimization
              </h3>
              <p className="text-blue-100">
                Learn techniques to optimize your mental state for peak
                performance in any situation.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-blue-200">
            How Saora Can Help
          </h2>
          <p className="text-lg text-blue-100 mb-6">
            Saora provides comprehensive support for mental preparation through
            sound therapy. Our app offers:
          </p>
          <ul className="list-disc list-inside space-y-4 text-blue-100">
            <li>
              Customizable sound environments for different preparation needs
            </li>
            <li>Guided visualization sessions</li>
            <li>Focus-enhancing soundscapes</li>
            <li>Stress reduction techniques</li>
            <li>Performance anxiety management tools</li>
          </ul>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Start Your Mental Preparation Journey Today
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Don&apos;t let stress and anxiety hold you back.
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
