import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Brain,
  Heart,
  Shield,
  Star,
  Lightbulb,
  CheckCircle,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Stress and Anxiety: Understand, Manage and Regain Your Serenity | Saora",
  description:
    "Comprehensive guide to understanding and managing stress and anxiety. Natural techniques, exercises, and tips for daily well-being.",
  keywords: [
    "stress management",
    "anxiety relief",
    "relaxation techniques",
    "mental health",
    "mindfulness",
    "breathing exercises",
    "meditation",
    "natural remedies",
    "wellness",
    "saora",
  ],
  authors: [{ name: "Saora Team" }],
  openGraph: {
    title:
      "Stress and Anxiety: Understand, Manage and Regain Your Serenity | Saora",
    description:
      "Comprehensive guide to understanding and managing stress and anxiety naturally.",
    type: "article",
    publishedTime: "2024-12-19T10:00:00.000Z",
    authors: ["Saora Team"],
    tags: ["stress", "anxiety", "mental health", "relaxation"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Stress and Anxiety: Understand, Manage and Regain Your Serenity | Saora",
    description:
      "Comprehensive guide to understanding and managing stress and anxiety naturally.",
  },
  alternates: {
    canonical: "https://saora.fr/blog/stress-anxiety",
  },
};

export default function StressAnxietyBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
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
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-105"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-blue-100 opacity-50" />
        <div className="relative container mx-auto px-4 text-center">
          <Brain className="w-16 h-16 mx-auto mb-6 text-purple-600" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent">
            Stress and Anxiety: Understand, Manage and Regain Your Serenity
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Stress and anxiety are part of modern life, but they should not
            dominate it. Discover in this comprehensive article how to
            understand these natural mechanisms and learn to manage them
            effectively to regain your daily well-being.
          </p>
          <div className="flex items-center justify-center space-x-4 text-gray-600">
            <span className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              12 min read
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
              <Brain className="w-8 h-8 mr-3 text-blue-600" />
              Understanding Stress and Anxiety
            </h2>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
              What is Stress?
            </h3>
            <p className="text-gray-700 mb-4">
              Stress is a natural reaction of our body to a situation perceived
              as threatening or demanding. This physiological response normally
              helps us face challenges, but becomes problematic when it persists
              over time.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
              What is Anxiety?
            </h3>
            <p className="text-gray-700 mb-4">
              Anxiety is an emotional response to anticipated threats or
              uncertain situations. Unlike stress which is reactive, anxiety is
              anticipatory and can occur without immediate external triggers.
            </p>

            <div className="bg-purple-50 p-6 rounded-lg my-6">
              <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-purple-600" />
                The Stress Response Mechanism
              </h4>
              <ol className="list-decimal pl-4 space-y-2 text-gray-700">
                <li>
                  <strong>Perception:</strong> The brain evaluates a situation
                  as stressful
                </li>
                <li>
                  <strong>Activation:</strong> Release of hormones (cortisol,
                  adrenaline)
                </li>
                <li>
                  <strong>Physical response:</strong> Increased heart rate,
                  muscle tension
                </li>
                <li>
                  <strong>Action:</strong> Fight, flight, or freeze response
                </li>
                <li>
                  <strong>Recovery:</strong> Return to baseline state (ideally)
                </li>
              </ol>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 flex items-center">
              <Target className="w-8 h-8 mr-3 text-red-600" />
              Main Causes in Modern Life
            </h2>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-3">
                  Professional Stress
                </h4>
                <ul className="list-disc pl-4 space-y-1 text-gray-700 text-sm">
                  <li>Work overload and tight deadlines</li>
                  <li>Job insecurity</li>
                  <li>Conflicts with colleagues</li>
                  <li>Lack of recognition</li>
                  <li>Work-life imbalance</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-3">
                  Personal Stress
                </h4>
                <ul className="list-disc pl-4 space-y-1 text-gray-700 text-sm">
                  <li>Financial difficulties</li>
                  <li>Relationship problems</li>
                  <li>Health concerns</li>
                  <li>Family responsibilities</li>
                  <li>Major life changes</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-3">
                  Environmental Stress
                </h4>
                <ul className="list-disc pl-4 space-y-1 text-gray-700 text-sm">
                  <li>Urban noise and pollution</li>
                  <li>Information overload</li>
                  <li>Social media pressure</li>
                  <li>Constant connectivity</li>
                  <li>Fast-paced lifestyle</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-3">
                  Internal Stress
                </h4>
                <ul className="list-disc pl-4 space-y-1 text-gray-700 text-sm">
                  <li>Perfectionism</li>
                  <li>Negative thoughts</li>
                  <li>Low self-esteem</li>
                  <li>Unrealistic expectations</li>
                  <li>Pessimistic outlook</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 flex items-center">
              <Heart className="w-8 h-8 mr-3 text-pink-600" />
              Physical and Mental Symptoms
            </h2>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
              Physical Symptoms
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Muscle tension, especially in neck and shoulders</li>
              <li>Headaches and migraines</li>
              <li>Digestive problems (stomach aches, nausea)</li>
              <li>Sleep disturbances (insomnia, restless sleep)</li>
              <li>Rapid heartbeat and breathing difficulties</li>
              <li>Fatigue and weakness</li>
              <li>Skin problems (eczema, acne)</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
              Mental and Emotional Symptoms
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Constant worry and rumination</li>
              <li>Difficulty concentrating</li>
              <li>Irritability and mood swings</li>
              <li>Feeling overwhelmed</li>
              <li>Memory problems</li>
              <li>Low self-confidence</li>
              <li>Social withdrawal</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">
                ⚠️ When to Seek Help
              </h4>
              <p className="text-gray-700">
                If symptoms persist for several weeks, interfere with daily
                activities, or include thoughts of self-harm, it&apos;s
                important to consult a healthcare professional.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 flex items-center">
              <Lightbulb className="w-8 h-8 mr-3 text-yellow-600" />
              Effective Management Techniques
            </h2>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
              1. Breathing Techniques
            </h3>
            <p className="text-gray-700 mb-4">
              Controlled breathing is one of the fastest ways to activate the
              relaxation response and reduce stress in real-time.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg my-6">
              <h4 className="font-bold text-gray-900 mb-3">
                4-7-8 Breathing Exercise
              </h4>
              <ol className="list-decimal pl-4 space-y-2 text-gray-700">
                <li>Inhale through your nose for 4 counts</li>
                <li>Hold your breath for 7 counts</li>
                <li>Exhale through your mouth for 8 counts</li>
                <li>Repeat 4-8 cycles</li>
                <li>Practice twice daily for best results</li>
              </ol>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
              2. Progressive Muscle Relaxation
            </h3>
            <p className="text-gray-700 mb-4">
              This technique involves systematically tensing and releasing
              different muscle groups to achieve deep physical relaxation.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
              3. Mindfulness and Meditation
            </h3>
            <p className="text-gray-700 mb-4">
              Regular meditation practice literally rewires the brain, reducing
              the reactivity of the amygdala (fear center) and strengthening
              areas associated with emotional regulation.
            </p>

            <div className="bg-green-50 p-6 rounded-lg my-6">
              <h4 className="font-bold text-gray-900 mb-3">
                5-Minute Mindfulness Exercise
              </h4>
              <ol className="list-decimal pl-4 space-y-2 text-gray-700">
                <li>Sit comfortably and close your eyes</li>
                <li>Focus on 5 things you can hear</li>
                <li>Notice 4 things you can touch</li>
                <li>Identify 3 things you can smell</li>
                <li>Recognize 2 things you can taste</li>
                <li>Observe 1 thing you can see (open your eyes)</li>
              </ol>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
              4. Physical Exercise
            </h3>
            <p className="text-gray-700 mb-4">
              Regular physical activity is one of the most effective natural
              antidepressants and stress reducers. Just 20 minutes of moderate
              exercise can reduce stress hormones for up to 12 hours.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
              5. Sound Therapy and Natural Sounds
            </h3>
            <p className="text-gray-700 mb-4">
              Natural sounds like rain, ocean waves, or forest ambiances can
              quickly trigger the relaxation response and reduce cortisol levels
              by up to 68%.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 flex items-center">
              <Star className="w-8 h-8 mr-3 text-indigo-600" />
              Long-Term Stress Prevention
            </h2>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
              Lifestyle Changes
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Sleep hygiene:</strong> 7-9 hours of quality sleep
              </li>
              <li>
                <strong>Balanced nutrition:</strong> Reduce caffeine and sugar
              </li>
              <li>
                <strong>Time management:</strong> Prioritize and delegate tasks
              </li>
              <li>
                <strong>Social connections:</strong> Maintain supportive
                relationships
              </li>
              <li>
                <strong>Hobbies and relaxation:</strong> Schedule enjoyable
                activities
              </li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
              Cognitive Strategies
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Cognitive reframing:</strong> Challenge negative
                thoughts
              </li>
              <li>
                <strong>Acceptance:</strong> Focus on what you can control
              </li>
              <li>
                <strong>Gratitude practice:</strong> Daily appreciation
                exercises
              </li>
              <li>
                <strong>Problem-solving:</strong> Break challenges into
                manageable steps
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">
              Emergency Stress Relief Techniques
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-red-400 pl-6">
                <h4 className="font-bold text-gray-900 mb-2">
                  Immediate Relief (1-2 minutes)
                </h4>
                <ul className="list-disc pl-4 space-y-1 text-gray-700">
                  <li>Take 5 deep breaths</li>
                  <li>Splash cold water on your face</li>
                  <li>Listen to calming music or nature sounds</li>
                  <li>Practice the 5-4-3-2-1 grounding technique</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-400 pl-6">
                <h4 className="font-bold text-gray-900 mb-2">
                  Short-term Relief (5-10 minutes)
                </h4>
                <ul className="list-disc pl-4 space-y-1 text-gray-700">
                  <li>Take a brief walk outside</li>
                  <li>Practice progressive muscle relaxation</li>
                  <li>Call a trusted friend or family member</li>
                  <li>Write down your worries to externalize them</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-400 pl-6">
                <h4 className="font-bold text-gray-900 mb-2">
                  Extended Relief (20-30 minutes)
                </h4>
                <ul className="list-disc pl-4 space-y-1 text-gray-700">
                  <li>Engage in gentle exercise or yoga</li>
                  <li>Take a warm bath with essential oils</li>
                  <li>Practice guided meditation</li>
                  <li>Engage in a creative activity</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">
              Building Resilience
            </h2>

            <p className="text-gray-700 mb-6">
              Resilience is our ability to bounce back from adversity and adapt
              to challenging circumstances. It&apos;s a skill that can be
              developed through practice and conscious effort.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
              Key Components of Resilience
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Emotional regulation:</strong> Managing intense emotions
                effectively
              </li>
              <li>
                <strong>Flexibility:</strong> Adapting to changing circumstances
              </li>
              <li>
                <strong>Optimism:</strong> Maintaining hope during difficult
                times
              </li>
              <li>
                <strong>Self-compassion:</strong> Treating yourself with
                kindness
              </li>
              <li>
                <strong>Purpose:</strong> Finding meaning in experiences
              </li>
            </ul>

            <div className="mt-12 p-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl border border-purple-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Find Your Calm with Saora
              </h3>
              <p className="mb-6 text-gray-700">
                Saora offers a comprehensive collection of relaxation tools
                including guided meditations, breathing exercises, and natural
                soundscapes specifically designed for stress and anxiety relief.
                Take the first step toward a calmer, more balanced life.
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
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
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
