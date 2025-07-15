import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Life Changes: Adapt to Transitions with Serenity | Saora",
  description:
    "Learn to navigate life changes with confidence through meditation. Discover how to transform transitions into opportunities.",
  keywords: [
    "life changes",
    "transitions",
    "adaptation",
    "resilience",
    "meditation",
    "wellness",
    "personal transformation",
    "saora",
    "personal development",
    "new beginning",
  ],
  authors: [{ name: "Saora Team" }],
  openGraph: {
    title: "Life Changes: Adapt to Transitions with Serenity | Saora",
    description:
      "Learn to navigate life changes with confidence through meditation. Discover how to transform transitions into opportunities.",
    type: "article",
    publishedTime: "2024-12-19T10:00:00.000Z",
    authors: ["Saora Team"],
    tags: ["changes", "transitions", "adaptation", "meditation"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Life Changes: Adapt to Transitions with Serenity | Saora",
    description:
      "Learn to navigate life changes with confidence through meditation.",
  },
  alternates: {
    canonical: "https://saora.fr/blog/life-changes",
  },
};

export default function LifeChangesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
              Life Changes
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Navigate transitions with serenity and transform every change into
              an opportunity for growth
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
              <span>📖 12 min read</span>
              <span>•</span>
              <span>🔄 Transitions</span>
              <span>•</span>
              <span>🌱 Adaptation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg prose-gray">
          {/* Introduction */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Embracing Change
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Changes are an integral part of human life. Whether chosen or
              unexpected, they represent key moments in our evolution.
              Meditation offers us precious tools to navigate these transitions
              with grace and wisdom.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🌊 Understanding Transitions
            </h2>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              The Phases of Change
            </h3>
            <p className="mb-6">
              Every change follows a natural process. Understanding these stages
              helps us better accompany our own transformations.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-xl">
                <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  1
                </div>
                <h4 className="font-semibold text-emerald-800 mb-2">
                  🔚 Ending
                </h4>
                <p className="text-emerald-700 text-sm">
                  Letting go of the old situation
                </p>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl">
                <div className="w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  2
                </div>
                <h4 className="font-semibold text-teal-800 mb-2">
                  🌊 Transition
                </h4>
                <p className="text-teal-700 text-sm">
                  Period of uncertainty and adaptation
                </p>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  3
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  🌟 New Beginning
                </h4>
                <p className="text-gray-700 text-sm">
                  Integration and new reality
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              The Emotions of Change
            </h3>
            <p className="mb-6">
              It is normal to feel a mix of emotions during change: excitement,
              fear, sadness, hope. Meditation helps us welcome these emotions
              without judgment.
            </p>

            <div className="bg-emerald-50 border-l-4 border-emerald-400 p-6 rounded-r-lg mb-6">
              <h4 className="font-semibold text-emerald-800 mb-2">
                💡 Common Emotions
              </h4>
              <ul className="text-emerald-700 space-y-2">
                <li>
                  • <strong>Resistance:</strong> Natural tendency to cling to
                  the familiar
                </li>
                <li>
                  • <strong>Fear:</strong> Anxiety about the unknown
                </li>
                <li>
                  • <strong>Excitement:</strong> Anticipation of new
                  possibilities
                </li>
                <li>
                  • <strong>Grief:</strong> Sadness about leaving things behind
                </li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🧘‍♀️ Meditation and Adaptation
            </h2>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Cultivating Mental Flexibility
            </h3>
            <p className="mb-6">
              Meditation develops our capacity for adaptation by teaching us to
              stay centered even in uncertainty.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-xl">
                <h4 className="font-semibold text-emerald-800 mb-3">
                  🌱 Acceptance Meditation
                </h4>
                <ol className="text-emerald-700 space-y-2 text-sm">
                  <li>1. Sit comfortably</li>
                  <li>2. Breathe naturally</li>
                  <li>3. Observe your resistance without judgment</li>
                  <li>4. Repeat: &quot;I welcome what is&quot;</li>
                  <li>5. Visualize yourself navigating change with grace</li>
                </ol>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl">
                <h4 className="font-semibold text-teal-800 mb-3">
                  🌊 Wave Breathing
                </h4>
                <ol className="text-teal-700 space-y-2 text-sm">
                  <li>1. Inhale deeply like a rising wave</li>
                  <li>2. Hold briefly at the peak</li>
                  <li>3. Exhale slowly like a wave receding</li>
                  <li>4. Imagine surfing changes with fluidity</li>
                </ol>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Developing Resilience
            </h3>
            <p className="mb-6">
              Resilience is our ability to bounce back from challenges. It is
              strengthened through practice and confidence in our inner
              resources.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🛠️ Practical Tools for Transitions
            </h2>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              The Transition Ritual
            </h3>
            <p className="mb-6">
              Creating rituals helps us symbolically mark important passages in
              our lives.
            </p>

            <div className="bg-teal-50 border-l-4 border-teal-400 p-6 rounded-r-lg mb-6">
              <h4 className="font-semibold text-teal-800 mb-2">
                🔄 Passage Ritual
              </h4>
              <ol className="text-teal-700 space-y-2">
                <li>
                  1. <strong>Honor the past:</strong> Express gratitude for what
                  is ending
                </li>
                <li>
                  2. <strong>Release:</strong> Identify what you are leaving
                  behind
                </li>
                <li>
                  3. <strong>Welcome:</strong> Formulate intentions for the new
                  chapter
                </li>
                <li>
                  4. <strong>Celebrate:</strong> Mark this moment of
                  transformation
                </li>
              </ol>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Transition Journal
            </h3>
            <p className="mb-6">
              Keeping a journal during periods of change helps us clarify our
              thoughts and track our evolution.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-xl">
                <h4 className="font-semibold text-emerald-800 mb-3">
                  📝 Reflection Questions
                </h4>
                <ul className="text-emerald-700 space-y-2 text-sm">
                  <li>• What am I learning about myself?</li>
                  <li>• What are my fears and how can I welcome them?</li>
                  <li>• What opportunities does this change offer me?</li>
                  <li>• How can I honor my current needs?</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl">
                <h4 className="font-semibold text-teal-800 mb-3">
                  🌟 Change Affirmations
                </h4>
                <ul className="text-teal-700 space-y-2 text-sm">
                  <li>• &quot;I navigate changes with grace&quot;</li>
                  <li>• &quot;Every ending is a new beginning&quot;</li>
                  <li>• &quot;I trust the process of life&quot;</li>
                  <li>• &quot;I am stronger than I think&quot;</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🌈 Types of Life Changes
            </h2>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Professional Changes
            </h3>
            <p className="mb-6">
              New job, promotion, career change... These transitions affect our
              professional identity and require particular support.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Relationship Changes
            </h3>
            <p className="mb-6">
              Breakups, new loves, births, grief... Our relationships constantly
              evolve and each change invites us to grow.
            </p>

            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl mb-6">
              <h4 className="font-semibold text-gray-800 mb-3">
                🎯 Strategies by Type of Change
              </h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h5 className="font-medium text-emerald-700 mb-2">
                    💼 Professional
                  </h5>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Clarify your values</li>
                    <li>• Develop new skills</li>
                    <li>• Cultivate patience</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-teal-700 mb-2">
                    💕 Relational
                  </h5>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Practice self-compassion</li>
                    <li>• Communicate your needs</li>
                    <li>• Accept natural cycles</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-emerald-700 mb-2">
                    🏠 Personal
                  </h5>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Create new landmarks</li>
                    <li>• Maintain your rituals</li>
                    <li>• Surround yourself with support</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🌱 How Saora Can Help You
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  🧘‍♀️
                </div>
                <h3 className="font-semibold text-emerald-800 mb-2">
                  Transition Meditations
                </h3>
                <p className="text-emerald-700 text-sm">
                  Guided sessions to accompany your life changes
                </p>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-teal-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  🔄
                </div>
                <h3 className="font-semibold text-teal-800 mb-2">
                  Adaptation Exercises
                </h3>
                <p className="text-teal-700 text-sm">
                  Practical techniques to develop your flexibility
                </p>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  🌟
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Personalized Programs
                </h3>
                <p className="text-gray-700 text-sm">
                  Support adapted to your specific situation
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                🌟 Conclusion: Change as an Ally
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Life changes, while uncomfortable, are invitations to grow and
                discover new facets of ourselves. With the right tools and an
                attitude of openness, we can transform every transition into an
                opportunity for evolution.
              </p>
              <p className="text-gray-700">
                Meditation provides us with the grounding needed to navigate the
                storms of change while staying true to our deep essence.
              </p>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Embrace Your Changes?
            </h2>
            <p className="text-gray-600 mb-8">
              Discover our guided meditations to accompany your transitions
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <a
                href="https://apps.apple.com/app/saora"
                className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105"
              >
                Download Saora
              </a>
              <a
                href="/solutions/life-changes-and-adaptation"
                className="inline-block border-2 border-emerald-500 text-emerald-500 px-8 py-4 rounded-full font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-300"
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
