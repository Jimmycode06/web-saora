import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Self-Confidence: Building Strong Self-Esteem | Saora",
  description:
    "Strengthen your self-confidence through meditation and relaxation techniques. Discover how to cultivate lasting self-esteem.",
  keywords: [
    "self-confidence",
    "self-esteem",
    "assurance",
    "personal development",
    "meditation",
    "relaxation",
    "mental wellness",
    "saora",
    "autonomy",
    "courage",
  ],
  authors: [{ name: "Saora Team" }],
  openGraph: {
    title: "Self-Confidence: Building Strong Self-Esteem | Saora",
    description:
      "Strengthen your self-confidence through meditation and relaxation techniques. Discover how to cultivate lasting self-esteem.",
    type: "article",
    publishedTime: "2024-12-19T10:00:00.000Z",
    authors: ["Saora Team"],
    tags: ["confidence", "self-esteem", "personal development", "meditation"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Self-Confidence: Building Strong Self-Esteem | Saora",
    description:
      "Strengthen your self-confidence through meditation and relaxation techniques.",
  },
  alternates: {
    canonical: "https://saora.fr/blog/self-confidence",
  },
};

export default function SelfConfidencePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-yellow-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-6">
              Self-Confidence
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Develop strong and lasting self-esteem through meditation and
              wellness practices
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
              <span>📖 13 min read</span>
              <span>•</span>
              <span>💪 Personal Development</span>
              <span>•</span>
              <span>🌟 Confidence</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg prose-gray">
          {/* Introduction */}
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Cultivating Inner Confidence
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Self-confidence is not a fixed personality trait, but a skill that
              can be cultivated. Meditation and mindfulness practices offer
              powerful tools to develop authentic and lasting self-esteem.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🧘‍♀️ The Foundations of Self-Confidence
            </h2>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Understanding Self-Esteem
            </h3>
            <p className="mb-6">
              Self-esteem is based on the relationship we have with ourselves.
              It is nourished by self-knowledge, acceptance, and kindness toward
              our own experiences.
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-lg mb-6">
              <h4 className="font-semibold text-orange-800 mb-2">
                💡 The Pillars of Confidence
              </h4>
              <ul className="text-orange-700 space-y-2">
                <li>
                  • <strong>Self-knowledge:</strong> Understanding your
                  strengths and challenges
                </li>
                <li>
                  • <strong>Acceptance:</strong> Embracing who you are today
                </li>
                <li>
                  • <strong>Self-compassion:</strong> Treating your mistakes
                  with kindness
                </li>
                <li>
                  • <strong>Action:</strong> Taking initiatives aligned with
                  your values
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              The Role of Meditation
            </h3>
            <p className="mb-6">
              Meditation allows us to observe our thoughts without judgment,
              creating a space of inner peace where confidence can naturally
              emerge.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🌱 Techniques to Build Confidence
            </h2>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Self-Compassion Meditation
            </h3>
            <p className="mb-6">
              Self-compassion is the foundation of authentic confidence. It
              teaches us to treat ourselves with the same kindness we would show
              a dear friend.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
                <h4 className="font-semibold text-orange-800 mb-3">
                  🤗 Self-Compassion Exercise
                </h4>
                <ol className="text-orange-700 space-y-2 text-sm">
                  <li>1. Place a hand on your heart</li>
                  <li>2. Breathe deeply</li>
                  <li>
                    3. Repeat: &quot;I am human, I have the right to make
                    mistakes&quot;
                  </li>
                  <li>4. Send yourself kindness</li>
                </ol>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl">
                <h4 className="font-semibold text-yellow-800 mb-3">
                  ✨ Positive Affirmations
                </h4>
                <ul className="text-yellow-700 space-y-2 text-sm">
                  <li>• &quot;I am worthy of love and respect&quot;</li>
                  <li>• &quot;My mistakes are learning opportunities&quot;</li>
                  <li>• &quot;I trust my inner wisdom&quot;</li>
                  <li>• &quot;I am capable of overcoming challenges&quot;</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Personal Gratitude Meditation
            </h3>
            <p className="mb-6">
              Recognizing our qualities and accomplishments naturally reinforces
              our self-esteem.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-6">
              <h4 className="font-semibold text-yellow-800 mb-2">
                🌟 Exercise: Personal Gratitude Journal
              </h4>
              <p className="text-yellow-700 mb-2">Each evening, write down:</p>
              <ul className="text-yellow-700 space-y-1">
                <li>• 3 qualities you demonstrated today</li>
                <li>• 1 challenge you overcame</li>
                <li>• 1 moment when you felt proud of yourself</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              💪 Overcoming Obstacles
            </h2>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Managing the Inner Critic
            </h3>
            <p className="mb-6">
              We all have an inner critical voice. Meditation teaches us to
              observe it with detachment and transform it into a kind ally.
            </p>

            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-xl mb-6">
              <h4 className="font-semibold text-gray-800 mb-3">
                🔄 Reframing Technique
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-red-600 mb-2">
                    ❌ Critical Thought
                  </h5>
                  <p className="text-sm text-gray-600">
                    &quot;I am not good enough&quot;
                  </p>
                </div>
                <div>
                  <h5 className="font-medium text-green-600 mb-2">
                    ✅ Kind Reframe
                  </h5>
                  <p className="text-sm text-gray-600">
                    &quot;I am doing my best with the resources I have&quot;
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Stepping Out of Your Comfort Zone
            </h3>
            <p className="mb-6">
              Confidence is strengthened through action. Every small step
              outside our comfort zone proves we are more capable than we
              thought.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🎯 Building Daily Confidence
            </h2>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Morning Confidence Rituals
            </h3>
            <p className="mb-6">
              Starting the day with practices that reinforce self-esteem creates
              positive momentum that lasts throughout the day.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl">
                  🌅
                </div>
                <h4 className="font-semibold text-orange-800 mb-2">
                  Intentional Awakening
                </h4>
                <p className="text-orange-700 text-sm">
                  5 minutes of morning meditation
                </p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl">
                  💭
                </div>
                <h4 className="font-semibold text-yellow-800 mb-2">
                  Affirmations
                </h4>
                <p className="text-yellow-700 text-sm">
                  3 personalized affirmations
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl">
                  🎯
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Daily Intention
                </h4>
                <p className="text-gray-700 text-sm">Set one achievable goal</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Celebrating Small Victories
            </h3>
            <p className="mb-6">
              Recognizing and celebrating our accomplishments, even the smallest
              ones, sustainably nourishes our self-confidence.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🌱 How Saora Can Help You
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  🧘‍♀️
                </div>
                <h3 className="font-semibold text-orange-800 mb-2">
                  Guided Meditations
                </h3>
                <p className="text-orange-700 text-sm">
                  Sessions specially designed to strengthen self-esteem
                </p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  💪
                </div>
                <h3 className="font-semibold text-yellow-800 mb-2">
                  Confidence Exercises
                </h3>
                <p className="text-yellow-700 text-sm">
                  Practical techniques to develop daily confidence
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  🌟
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Personalized Programs
                </h3>
                <p className="text-gray-700 text-sm">
                  Journeys adapted to your level and goals
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-orange-50 via-yellow-50 to-orange-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                🌟 Conclusion: Your Confidence in Action
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Self-confidence is built day by day, through small conscious and
                kind actions toward ourselves. Meditation provides us with the
                space and tools to cultivate this authentic confidence.
              </p>
              <p className="text-gray-700">
                Remember: you have within you all the resources needed to
                develop solid and lasting confidence. You just need to reveal
                them with patience and compassion.
              </p>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Strengthen Your Confidence?
            </h2>
            <p className="text-gray-600 mb-8">
              Discover our guided meditations to develop your self-esteem
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <a
                href="https://apps.apple.com/app/saora"
                className="inline-block bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-full font-semibold hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105"
              >
                Download Saora
              </a>
              <a
                href="/solutions/self-confidence-and-self-esteem"
                className="inline-block border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
