import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, Compass, Brain, Heart, Star, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "Meditation for Beginners: Your Complete Guide to Start | Saora",
  description:
    "Learn meditation from scratch with our complete guide. Techniques, tips, and benefits for beginning your mindfulness journey effectively.",
  keywords: [
    "meditation",
    "mindfulness",
    "beginners",
    "relaxation",
    "stress reduction",
    "mental health",
    "breathing techniques",
    "guided meditation",
    "saora",
    "wellness",
  ],
  authors: [{ name: "Saora Team" }],
  openGraph: {
    title: "Meditation for Beginners: Your Complete Guide to Start | Saora",
    description:
      "Learn meditation from scratch with our complete guide. Techniques and benefits for beginners.",
    type: "article",
    publishedTime: "2024-12-19T10:00:00.000Z",
    authors: ["Saora Team"],
    tags: ["meditation", "mindfulness", "relaxation", "beginners"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meditation for Beginners: Your Complete Guide to Start | Saora",
    description:
      "Learn meditation from scratch with our complete guide. Techniques and benefits for beginners.",
  },
  alternates: {
    canonical: "https://saora.fr/blog/meditation",
  },
};

export default function MeditationBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-purple-500 rounded-full flex items-center justify-center">
                <Compass className="w-5 h-5 text-white" />
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
              <Link
                href="/blog"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Blog
              </Link>
              <a
                href="https://apps.apple.com/us/app/saora-sound/id6746692484"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-purple-500 text-white px-4 py-2 rounded-full hover:from-green-600 hover:to-purple-600 transition-all duration-300 hover:scale-105"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-purple-100 opacity-50" />
        <div className="relative container mx-auto px-4 text-center">
          <Compass className="w-16 h-16 mx-auto mb-6 text-green-600" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-green-800 bg-clip-text text-transparent">
            Meditation for Beginners: Your Complete Guide to Start
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Meditation is no longer reserved for Tibetan monks! This ancient
            practice, accessible to everyone, can transform your well-being in
            just a few minutes a day. Discover how to peacefully begin your
            meditation journey.
          </p>
          <div className="flex items-center justify-center space-x-4 text-gray-600">
            <span className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              15 min read
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
              <Compass className="w-8 h-8 mr-3 text-purple-600" />
              What is Meditation?
            </h2>

            <p className="text-gray-700 mb-6">
              Meditation is a practice that involves training the mind to
              develop attention, awareness, and serenity. Contrary to common
              misconceptions, it&apos;s not about &quot;emptying&quot; your
              mind, but rather observing your thoughts without judgment and
              cultivating a state of presence.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
              Scientific Benefits
            </h3>
            <p className="text-gray-700 mb-4">
              Modern research confirms what practitioners have known for
              millennia. Meditation literally reshapes the brain through
              neuroplasticity, strengthening areas associated with attention,
              emotional regulation, and empathy.
            </p>

            <div className="bg-green-50 p-6 rounded-lg my-6">
              <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                <Brain className="w-5 h-5 mr-2 text-green-600" />
                Proven Benefits
              </h4>
              <ul className="list-disc pl-4 space-y-2 text-gray-700">
                <li>Stress and anxiety reduction (up to 60%)</li>
                <li>Improved concentration and focus</li>
                <li>Enhanced sleep quality</li>
                <li>Strengthened immune system</li>
                <li>Decreased blood pressure</li>
                <li>Better emotional regulation</li>
                <li>Increased empathy and compassion</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 flex items-center">
              <Lightbulb className="w-8 h-8 mr-3 text-yellow-600" />
              How to Start: Step-by-Step Guide
            </h2>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
              Step 1: Prepare Your Space
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Choose a quiet and comfortable place</li>
              <li>Turn off distractions (phone, TV)</li>
              <li>Sit comfortably (chair or cushion)</li>
              <li>Keep your back straight but relaxed</li>
              <li>Close your eyes or focus on a point in front of you</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
              Step 2: Your First Session (5 minutes)
            </h3>

            <div className="bg-blue-50 p-6 rounded-lg my-6">
              <h4 className="font-bold text-gray-900 mb-3">
                Exercise: Breathing Meditation
              </h4>
              <ol className="list-decimal pl-4 space-y-2 text-gray-700">
                <li>Get comfortable and close your eyes</li>
                <li>Focus your attention on your natural breathing</li>
                <li>Observe the air entering and leaving your nostrils</li>
                <li>
                  When your mind wanders (this is normal!), gently bring your
                  attention back to your breath
                </li>
                <li>Continue for 5 minutes</li>
                <li>Finish by slowly opening your eyes</li>
              </ol>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
              Step 3: Building a Routine
            </h3>
            <p className="text-gray-700 mb-4">
              Consistency is more important than duration. It&apos;s better to
              meditate 5 minutes daily than 30 minutes once a week.
            </p>

            <div className="bg-purple-50 p-6 rounded-lg my-6">
              <h4 className="font-bold text-gray-900 mb-3">Progressive Plan</h4>
              <ul className="list-disc pl-4 space-y-2 text-gray-700">
                <li>Week 1-2: 5 minutes daily</li>
                <li>Week 3-4: 10 minutes daily</li>
                <li>Week 5-6: 15 minutes daily</li>
                <li>Week 7+: 20 minutes or more</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 flex items-center">
              <Star className="w-8 h-8 mr-3 text-indigo-600" />
              Different Meditation Types
            </h2>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
              1. Mindfulness Meditation
            </h3>
            <p className="text-gray-700 mb-4">
              The most studied and accessible form. You observe your thoughts,
              emotions, and sensations without judgment.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
              2. Guided Meditation
            </h3>
            <p className="text-gray-700 mb-4">
              Perfect for beginners. A voice guides you through the session,
              helping you stay focused and learn different techniques.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
              3. Meditation with Natural Sounds
            </h3>
            <p className="text-gray-700 mb-4">
              Use nature sounds (waves, rain, forest) as an anchor for your
              attention. These soothing sounds facilitate the meditative state.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
              4. Loving-Kindness Meditation
            </h3>
            <p className="text-gray-700 mb-4">
              Cultivate feelings of kindness towards yourself and others.
              Excellent for developing empathy and self-love.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">
              Common Challenges and Solutions
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-red-400 pl-6">
                <h4 className="font-bold text-gray-900 mb-2">
                  &quot;I can&apos;t stop thinking&quot;
                </h4>
                <p className="text-gray-700">
                  <strong>Solution:</strong> This is normal! The goal is not to
                  stop thoughts, but to observe them. Every time you notice your
                  mind wandering, congratulate yourself: that&apos;s
                  mindfulness!
                </p>
              </div>

              <div className="border-l-4 border-orange-400 pl-6">
                <h4 className="font-bold text-gray-900 mb-2">
                  &quot;I fall asleep during meditation&quot;
                </h4>
                <p className="text-gray-700">
                  <strong>Solution:</strong> Meditate with slightly open eyes,
                  in a seated position, and avoid meditating when you&apos;re
                  too tired. A bit of coolness in the room can help.
                </p>
              </div>

              <div className="border-l-4 border-blue-400 pl-6">
                <h4 className="font-bold text-gray-900 mb-2">
                  &quot;I don&apos;t have time&quot;
                </h4>
                <p className="text-gray-700">
                  <strong>Solution:</strong> Start with 3-5 minutes. You can
                  meditate on public transport, during a work break, or before
                  bed.
                </p>
              </div>

              <div className="border-l-4 border-green-400 pl-6">
                <h4 className="font-bold text-gray-900 mb-2">
                  &quot;I don&apos;t feel anything&quot;
                </h4>
                <p className="text-gray-700">
                  <strong>Solution:</strong> Meditation is not about feeling
                  special sensations. The benefits are often subtle and appear
                  progressively. Be patient with yourself.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 flex items-center">
              <Heart className="w-8 h-8 mr-3 text-pink-600" />
              Advanced Techniques
            </h2>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
              Body Scan Meditation
            </h3>
            <p className="text-gray-700 mb-4">
              Progressively scan your body from head to toe, observing
              sensations without trying to change anything. Excellent for
              releasing physical tension.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
              Visualization Meditation
            </h3>
            <p className="text-gray-700 mb-4">
              Create mental images (peaceful place, healing light) to promote
              relaxation and healing. Very effective for stress and anxiety.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
              Walking Meditation
            </h3>
            <p className="text-gray-700 mb-4">
              Meditate while walking slowly, focusing on the sensations of your
              feet touching the ground. Perfect for those who struggle with
              seated meditation.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">
              Resources to Go Deeper
            </h2>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
              Recommended Apps
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Saora: Natural sounds and guided meditations</li>
              <li>Headspace: Short and accessible meditations</li>
              <li>Insight Timer: Large community and free meditations</li>
              <li>Calm: Sleep stories and structured programs</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
              Books for Beginners
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                &quot;Wherever You Go, There You Are&quot; by Jon Kabat-Zinn
              </li>
              <li>&quot;The Power of Now&quot; by Eckhart Tolle</li>
              <li>&quot;Real Happiness&quot; by Sharon Salzberg</li>
            </ul>

            <div className="mt-12 p-8 bg-gradient-to-r from-green-50 to-purple-50 rounded-2xl border border-green-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Start Your Meditation Journey with Saora
              </h3>
              <p className="mb-6 text-gray-700">
                Saora offers guided meditations and natural sounds specially
                designed for beginners. With progressive programs and soothing
                environments, discover meditation at your own pace and transform
                your daily well-being.
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
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-purple-500 rounded-full flex items-center justify-center">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Saora</span>
            </div>
            <div className="flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-gray-900">
                Blog
              </Link>
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
