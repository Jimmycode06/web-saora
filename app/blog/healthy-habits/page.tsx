import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthy Habits: Creating a Balanced Daily Life | Saora",
  description:
    "Discover how to develop lasting healthy habits through meditation and mindfulness. Transform your daily routine for greater well-being.",
  keywords: [
    "healthy habits",
    "wellness routine",
    "life balance",
    "daily meditation",
    "personal development",
    "mental health",
    "saora",
    "mindfulness",
    "lifestyle",
    "transformation",
  ],
  authors: [{ name: "Saora Team" }],
  openGraph: {
    title: "Healthy Habits: Creating a Balanced Daily Life | Saora",
    description:
      "Discover how to develop lasting healthy habits through meditation and mindfulness.",
    type: "article",
    publishedTime: "2024-12-19T10:00:00.000Z",
    authors: ["Saora Team"],
    tags: ["habits", "wellness", "meditation", "balance"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthy Habits: Creating a Balanced Daily Life | Saora",
    description:
      "Discover how to develop lasting healthy habits through meditation and mindfulness.",
  },
  alternates: {
    canonical: "https://saora.fr/blog/healthy-habits",
  },
};

export default function HealthyHabitsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-lime-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent mb-6">
              Healthy Habits
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Create a balanced and fulfilling daily life through simple and
              sustainable habits
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
              <span>📖 9 min read</span>
              <span>•</span>
              <span>🌱 Lifestyle</span>
              <span>•</span>
              <span>💚 Wellness</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg prose-gray">
          {/* Introduction */}
          <div className="bg-gradient-to-r from-green-50 to-lime-50 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Power of Small Actions
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our habits shape our lives more than we think. By consciously
              integrating wellness practices into our daily routine, we create
              the foundations for a more balanced, serene, and fulfilling life.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🧠 Understanding Habits
            </h2>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Neuroplasticity at Our Service
            </h3>
            <p className="mb-6">
              Our brain is capable of creating new neural circuits throughout
              our lives. This capacity, called neuroplasticity, allows us to
              develop new habits and transform those that no longer serve us.
            </p>

            <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg mb-6">
              <h4 className="font-semibold text-green-800 mb-2">
                🔄 The Habit Loop
              </h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h5 className="font-medium text-green-700 mb-1">
                    1. Trigger
                  </h5>
                  <p className="text-green-600">
                    Signal that initiates the habit
                  </p>
                </div>
                <div>
                  <h5 className="font-medium text-green-700 mb-1">
                    2. Routine
                  </h5>
                  <p className="text-green-600">
                    Action repeated automatically
                  </p>
                </div>
                <div>
                  <h5 className="font-medium text-green-700 mb-1">3. Reward</h5>
                  <p className="text-green-600">Benefit experienced</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Micro vs Macro Habits
            </h3>
            <p className="mb-6">
              Small habits (micro) are often more sustainable than big changes
              (macro). They create positive momentum that facilitates the
              adoption of more important practices.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                <h4 className="font-semibold text-green-800 mb-3">
                  🌱 Micro Habits
                </h4>
                <ul className="text-green-700 space-y-2 text-sm">
                  <li>• 2 minutes of meditation</li>
                  <li>• 3 deep breaths</li>
                  <li>• One glass of water upon waking</li>
                  <li>• Express one gratitude</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-lime-50 to-lime-100 p-6 rounded-xl">
                <h4 className="font-semibold text-lime-800 mb-3">
                  🌳 Macro Habits
                </h4>
                <ul className="text-lime-700 space-y-2 text-sm">
                  <li>• 30 minutes of exercise</li>
                  <li>• 20-minute meditation</li>
                  <li>• Complete home cooking</li>
                  <li>• Detailed journaling</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🌅 Conscious Morning Routine
            </h2>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              The Importance of the First Moment
            </h3>
            <p className="mb-6">
              How we start our day greatly influences our mindset and energy for
              the hours that follow. A conscious morning routine creates a solid
              foundation for a balanced day.
            </p>

            <div className="bg-gradient-to-r from-green-50 to-lime-50 p-6 rounded-xl mb-6">
              <h4 className="font-semibold text-gray-800 mb-3">
                ☀️ Ideal Morning Routine (20 min)
              </h4>
              <div className="grid md:grid-cols-4 gap-4 text-sm">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                    🧘
                  </div>
                  <h5 className="font-medium text-gray-800">5 min</h5>
                  <p className="text-gray-600">Meditation</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-lime-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                    🙏
                  </div>
                  <h5 className="font-medium text-gray-800">3 min</h5>
                  <p className="text-gray-600">Gratitude</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                    🤸
                  </div>
                  <h5 className="font-medium text-gray-800">7 min</h5>
                  <p className="text-gray-600">Stretching</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-lime-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                    🎯
                  </div>
                  <h5 className="font-medium text-gray-800">5 min</h5>
                  <p className="text-gray-600">Intention</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Avoiding Morning Pitfalls
            </h3>
            <p className="mb-6">
              Certain morning habits can sabotage our energy and well-being
              before the day even really begins.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 p-6 rounded-xl">
                <h4 className="font-semibold text-red-800 mb-3">❌ To Avoid</h4>
                <ul className="text-red-700 space-y-2 text-sm">
                  <li>• Checking phone immediately</li>
                  <li>• Rushing to get up</li>
                  <li>• Skipping breakfast</li>
                  <li>• Complaining upon waking</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h4 className="font-semibold text-green-800 mb-3">
                  ✅ To Prefer
                </h4>
                <ul className="text-green-700 space-y-2 text-sm">
                  <li>• Moment of silence and reflection</li>
                  <li>• Gentle awakening</li>
                  <li>• Conscious hydration</li>
                  <li>• Positive thought for the day</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🍽️ Mindful Eating
            </h2>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Mindfulness at the Table
            </h3>
            <p className="mb-6">
              Eating mindfully transforms our relationship with food and
              improves our digestion, satisfaction, and overall well-being.
            </p>

            <div className="bg-lime-50 border-l-4 border-lime-400 p-6 rounded-r-lg mb-6">
              <h4 className="font-semibold text-lime-800 mb-2">
                🥗 Mindful Eating Practices
              </h4>
              <ul className="text-lime-700 space-y-2">
                <li>
                  • <strong>Gratitude pause:</strong> Give thanks before eating
                </li>
                <li>
                  • <strong>Eat slowly:</strong> Take time to savor
                </li>
                <li>
                  • <strong>Listen to hunger:</strong> Distinguish physical from
                  emotional hunger
                </li>
                <li>
                  • <strong>Without distraction:</strong> Avoid screens and
                  multitasking
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Mindful Hydration
            </h3>
            <p className="mb-6">
              Water is essential to our well-being. Transforming hydration into
              a conscious ritual reconnects us to our bodily needs.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  🌅
                </div>
                <h4 className="font-semibold text-blue-800 mb-2">Morning</h4>
                <p className="text-blue-700 text-sm">
                  Glass of warm water upon waking
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  ☀️
                </div>
                <h4 className="font-semibold text-green-800 mb-2">Daytime</h4>
                <p className="text-green-700 text-sm">
                  Regularity and listening to your body
                </p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  🌙
                </div>
                <h4 className="font-semibold text-indigo-800 mb-2">Evening</h4>
                <p className="text-indigo-700 text-sm">Soothing herbal tea</p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              💤 Evening Routine
            </h2>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Preparing for Restorative Sleep
            </h3>
            <p className="mb-6">
              The quality of our sleep largely depends on how we end our day. A
              soothing evening routine promotes natural falling asleep and deep
              rest.
            </p>

            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl mb-6">
              <h4 className="font-semibold text-gray-800 mb-3">
                🌙 Bedtime Ritual (30 min)
              </h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h5 className="font-medium text-purple-700 mb-2">
                    📱 Disconnection (10 min)
                  </h5>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Turn off screens</li>
                    <li>• Prepare for tomorrow</li>
                    <li>• Create ambiance</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-indigo-700 mb-2">
                    🧘 Relaxation (10 min)
                  </h5>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Meditation or breathing</li>
                    <li>• Gratitude for the day</li>
                    <li>• Body release</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-purple-700 mb-2">
                    📖 Relaxation (10 min)
                  </h5>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Calming reading</li>
                    <li>• Journal or writing</li>
                    <li>• Soft music</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Optimizing the Environment
            </h3>
            <p className="mb-6">
              Our sleep environment directly influences the quality of our rest.
              A few simple adjustments can make a big difference.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              📱 Healthy Relationship with Technology
            </h2>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Daily Digital Detox
            </h3>
            <p className="mb-6">
              Creating moments of digital disconnection allows us to reconnect
              with ourselves and our immediate environment.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                <h4 className="font-semibold text-green-800 mb-3">
                  ⏰ Screen-Free Moments
                </h4>
                <ul className="text-green-700 space-y-2 text-sm">
                  <li>• First hour of the morning</li>
                  <li>• During meals</li>
                  <li>• 1 hour before bedtime</li>
                  <li>• Time in nature</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-lime-50 to-lime-100 p-6 rounded-xl">
                <h4 className="font-semibold text-lime-800 mb-3">
                  🎯 Intentional Usage
                </h4>
                <ul className="text-lime-700 space-y-2 text-sm">
                  <li>• Set a goal before using</li>
                  <li>• Limit passive scrolling</li>
                  <li>• Conscious notifications</li>
                  <li>• Regular breaks</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🏃‍♀️ Movement and Well-being
            </h2>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Integrating Movement
            </h3>
            <p className="mb-6">
              Physical activity does not necessarily require a gym. Small
              movements integrated throughout the day can have a significant
              impact.
            </p>

            <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg mb-6">
              <h4 className="font-semibold text-green-800 mb-2">
                🚶‍♀️ Micro-Movements
              </h4>
              <ul className="text-green-700 space-y-2">
                <li>
                  • <strong>Morning stretches:</strong> 5 minutes to awaken the
                  body
                </li>
                <li>
                  • <strong>Active breaks:</strong> Stand up every hour
                </li>
                <li>
                  • <strong>Mindful walking:</strong> A few steps in mindfulness
                </li>
                <li>
                  • <strong>Active breathing:</strong> Dynamic breathing
                  exercises
                </li>
              </ul>
            </div>
          </section>

          {/* Section 7 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🌱 How Saora Can Help You
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  🧘‍♀️
                </div>
                <h3 className="font-semibold text-green-800 mb-2">
                  Daily Meditations
                </h3>
                <p className="text-green-700 text-sm">
                  Short sessions to easily integrate into your routine
                </p>
              </div>
              <div className="bg-gradient-to-br from-lime-50 to-lime-100 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-lime-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  📅
                </div>
                <h3 className="font-semibold text-lime-800 mb-2">
                  Habit Tracking
                </h3>
                <p className="text-lime-700 text-sm">
                  Tools to track and maintain your new habits
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-lime-50 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-lime-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  🎯
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Personalized Programs
                </h3>
                <p className="text-gray-700 text-sm">
                  Routines adapted to your lifestyle and goals
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-green-50 via-lime-50 to-green-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                🌟 Conclusion: One Step at a Time
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Creating lasting healthy habits does not happen overnight. It is
                a gradual process that requires patience and kindness toward
                oneself. Every small step counts and contributes to building a
                more balanced and fulfilling life.
              </p>
              <p className="text-gray-700">
                Remember: it is better to start small and be consistent than to
                aim too high and give up. Lasting transformation is born from
                regularity and gentleness.
              </p>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Daily Life?
            </h2>
            <p className="text-gray-600 mb-8">
              Discover our tools to create and maintain healthy habits
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <a
                href="https://apps.apple.com/app/saora"
                className="inline-block bg-gradient-to-r from-green-500 to-lime-500 text-white px-8 py-4 rounded-full font-semibold hover:from-green-600 hover:to-lime-600 transition-all duration-300 transform hover:scale-105"
              >
                Download Saora
              </a>
              <a
                href="/solutions/habits-and-behaviors"
                className="inline-block border-2 border-green-500 text-green-500 px-8 py-4 rounded-full font-semibold hover:bg-green-500 hover:text-white transition-all duration-300"
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
