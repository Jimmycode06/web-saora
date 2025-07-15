import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pain Management: Relief Through Relaxation | Saora",
  description:
    "Discover how to manage chronic and acute pain through meditation and relaxation techniques. Natural solutions for your wellness.",
  keywords: [
    "pain management",
    "chronic pain",
    "relaxation",
    "meditation",
    "natural relief",
    "wellness",
    "breathing techniques",
    "saora",
    "mindfulness",
    "therapy",
  ],
  authors: [{ name: "Saora Team" }],
  openGraph: {
    title: "Pain Management: Relief Through Relaxation | Saora",
    description:
      "Discover how to manage chronic and acute pain through meditation and relaxation techniques.",
    type: "article",
    publishedTime: "2024-12-19T10:00:00.000Z",
    authors: ["Saora Team"],
    tags: ["pain", "relaxation", "meditation", "wellness"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pain Management: Relief Through Relaxation | Saora",
    description:
      "Discover how to manage chronic and acute pain through meditation and relaxation techniques.",
  },
  alternates: {
    canonical: "https://saora.fr/blog/pain-management",
  },
};

export default function PainManagementPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-50 via-white to-red-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-600 to-red-600 bg-clip-text text-transparent mb-6">
              Pain Management
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Discover natural relaxation and meditation techniques to soothe
              and manage your pain
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
              <span>📖 8 min read</span>
              <span>•</span>
              <span>🩺 Health</span>
              <span>•</span>
              <span>🧘‍♀️ Relaxation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg prose-gray">
          {/* Introduction */}
          <div className="bg-gradient-to-r from-rose-50 to-red-50 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              A Holistic Approach to Pain
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Pain, whether physical or emotional, can profoundly impact our
              quality of life. Meditation and relaxation techniques offer
              valuable complementary tools for managing pain naturally and
              restoring balance.
            </p>
            <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
              <p className="text-yellow-800 text-sm font-medium">
                ⚠️ Important: These techniques are complementary to appropriate
                medical care. Always consult your healthcare professional for
                any persistent pain.
              </p>
            </div>
          </div>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🧠 Understanding Pain
            </h2>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              The Pain-Tension Cycle
            </h3>
            <p className="mb-6">
              Pain often creates a cycle: pain → muscle tension → stress → pain
              amplification. Relaxation can interrupt this cycle by reducing
              tension and stress.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-rose-50 to-rose-100 p-6 rounded-xl">
                <h4 className="font-semibold text-rose-800 mb-3">
                  🔄 Pain Cycle
                </h4>
                <ul className="text-rose-700 space-y-2 text-sm">
                  <li>• Initial pain</li>
                  <li>• Muscle contraction</li>
                  <li>• Stress and anxiety</li>
                  <li>• Sensation amplification</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                <h4 className="font-semibold text-green-800 mb-3">
                  ✨ Healing Cycle
                </h4>
                <ul className="text-green-700 space-y-2 text-sm">
                  <li>• Deep relaxation</li>
                  <li>• Muscle release</li>
                  <li>• Stress reduction</li>
                  <li>• Natural relief</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Types of Pain
            </h3>
            <p className="mb-6">
              Each type of pain can benefit from specific approaches to
              relaxation and meditation.
            </p>

            <div className="bg-rose-50 border-l-4 border-rose-400 p-6 rounded-r-lg mb-6">
              <h4 className="font-semibold text-rose-800 mb-2">
                🎯 Common Pain Types
              </h4>
              <ul className="text-rose-700 space-y-2">
                <li>
                  • <strong>Headaches and migraines:</strong> Tension and stress
                </li>
                <li>
                  • <strong>Back pain:</strong> Posture and muscle tension
                </li>
                <li>
                  • <strong>Chronic pain:</strong> Inflammation and
                  sensitization
                </li>
                <li>
                  • <strong>Joint pain:</strong> Stiffness and inflammation
                </li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🧘‍♀️ Pain Relief Meditation Techniques
            </h2>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Body Scan
            </h3>
            <p className="mb-6">
              This technique allows you to develop a fine awareness of the body
              and progressively release areas of tension.
            </p>

            <div className="bg-gradient-to-r from-rose-50 to-red-50 p-6 rounded-xl mb-6">
              <h4 className="font-semibold text-gray-800 mb-3">
                🔍 Exercise: Body Scan for Pain
              </h4>
              <ol className="text-gray-700 space-y-2">
                <li>1. Lie down comfortably</li>
                <li>2. Start with your feet, observe without judgment</li>
                <li>3. Slowly move up to the painful area</li>
                <li>4. Breathe into the area with kindness</li>
                <li>5. Visualize tension releasing</li>
                <li>6. End with complete relaxation</li>
              </ol>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Compassion Meditation
            </h3>
            <p className="mb-6">
              Cultivating compassion toward our pain changes our relationship to
              it and can reduce the associated emotional suffering.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-rose-50 to-rose-100 p-6 rounded-xl">
                <h4 className="font-semibold text-rose-800 mb-3">
                  💝 Compassion Phrases
                </h4>
                <ul className="text-rose-700 space-y-2 text-sm">
                  <li>• &quot;May my pain be soothed&quot;</li>
                  <li>• &quot;May I find peace in this trial&quot;</li>
                  <li>• &quot;I deserve love and healing&quot;</li>
                  <li>• &quot;This pain will pass&quot;</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl">
                <h4 className="font-semibold text-red-800 mb-3">
                  🌸 Healing Visualization
                </h4>
                <ul className="text-red-700 space-y-2 text-sm">
                  <li>• Golden light that soothes</li>
                  <li>• Cool water that cleanses</li>
                  <li>• Beneficial warmth</li>
                  <li>• Healing energy</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🌬️ Breathing Techniques
            </h2>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Pain Relief Breathing
            </h3>
            <p className="mb-6">
              Certain breathing techniques can activate the parasympathetic
              nervous system and promote the release of natural endorphins.
            </p>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg mb-6">
              <h4 className="font-semibold text-red-800 mb-2">
                🌬️ 4-7-8 Breathing
              </h4>
              <ol className="text-red-700 space-y-2">
                <li>1. Inhale through your nose for 4 counts</li>
                <li>2. Hold your breath for 7 counts</li>
                <li>3. Exhale through your mouth for 8 counts</li>
                <li>4. Repeat 4 cycles</li>
                <li>5. Practice 2-3 times daily</li>
              </ol>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Directed Breathing
            </h3>
            <p className="mb-6">
              Consciously directing breath to painful areas can help relax them
              and improve circulation.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🎵 Therapeutic Sounds and Vibrations
            </h2>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Healing Frequencies
            </h3>
            <p className="mb-6">
              Certain sound frequencies can have soothing effects on the nervous
              system and help reduce pain perception.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gradient-to-br from-rose-50 to-rose-100 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-rose-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl">
                  🎵
                </div>
                <h4 className="font-semibold text-rose-800 mb-2">
                  Nature Sounds
                </h4>
                <p className="text-rose-700 text-sm">Ocean, rain, forest</p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl">
                  🔔
                </div>
                <h4 className="font-semibold text-red-800 mb-2">
                  Tibetan Bowls
                </h4>
                <p className="text-red-700 text-sm">Soothing vibrations</p>
              </div>
              <div className="bg-gradient-to-br from-rose-50 to-red-50 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl">
                  🎶
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Meditative Music
                </h4>
                <p className="text-gray-700 text-sm">
                  Gentle and harmonious melodies
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🏠 Daily Integration
            </h2>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Pain Relief Routine
            </h3>
            <p className="mb-6">
              Creating a daily routine can help prevent pain intensification and
              maintain a state of relaxation.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-rose-50 to-rose-100 p-6 rounded-xl">
                <h4 className="font-semibold text-rose-800 mb-3">
                  🌅 Morning Routine
                </h4>
                <ul className="text-rose-700 space-y-2 text-sm">
                  <li>• 5 min of conscious breathing</li>
                  <li>• Gentle stretching</li>
                  <li>• Positive intention for the day</li>
                  <li>• Mindful hydration</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl">
                <h4 className="font-semibold text-red-800 mb-3">
                  🌙 Evening Routine
                </h4>
                <ul className="text-red-700 space-y-2 text-sm">
                  <li>• Complete body scan</li>
                  <li>• Gratitude meditation</li>
                  <li>• Progressive relaxation</li>
                  <li>• Soothing sounds</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Acute Pain SOS
            </h3>
            <p className="mb-6">
              Having quick techniques at hand for managing pain spikes can make
              a big difference.
            </p>

            <div className="bg-gradient-to-r from-rose-50 to-red-50 p-6 rounded-xl mb-6">
              <h4 className="font-semibold text-gray-800 mb-3">
                ⚡ RAPID Technique (5 min)
              </h4>
              <ol className="text-gray-700 space-y-2">
                <li>
                  1. <strong>R</strong>elax - Consciously drop your shoulders
                </li>
                <li>
                  2. <strong>A</strong>ccept - Welcome the sensation without
                  resistance
                </li>
                <li>
                  3. <strong>P</strong>ause - Take 3 deep breaths
                </li>
                <li>
                  4. <strong>I</strong>magine - Visualize the pain diminishing
                </li>
                <li>
                  5. <strong>D</strong>irection - Send yourself compassion
                </li>
              </ol>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🌱 How Saora Can Help You
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-rose-50 to-rose-100 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-rose-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  🧘‍♀️
                </div>
                <h3 className="font-semibold text-rose-800 mb-2">
                  Therapeutic Meditations
                </h3>
                <p className="text-rose-700 text-sm">
                  Sessions specially designed for pain management
                </p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  🎵
                </div>
                <h3 className="font-semibold text-red-800 mb-2">
                  Healing Sounds
                </h3>
                <p className="text-red-700 text-sm">
                  Soothing therapeutic frequencies and music
                </p>
              </div>
              <div className="bg-gradient-to-br from-rose-50 to-red-50 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  📱
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Personalized Tracking
                </h3>
                <p className="text-gray-700 text-sm">
                  Programs adapted to your type of pain
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-rose-50 via-red-50 to-rose-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                🌟 Conclusion: Toward Natural Relief
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Pain management through meditation and relaxation offers a
                gentle and natural approach that perfectly complements medical
                treatments. These techniques allow us to regain control and
                cultivate a state of wellness even in the presence of pain.
              </p>
              <p className="text-gray-700">
                Remember that every small step toward relaxation is a step
                toward relief. Patience and regular practice are your allies in
                this healing journey.
              </p>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Relieve Your Pain Naturally?
            </h2>
            <p className="text-gray-600 mb-8">
              Discover our therapeutic meditations for pain management
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <a
                href="https://apps.apple.com/app/saora"
                className="inline-block bg-gradient-to-r from-rose-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold hover:from-rose-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
              >
                Download Saora
              </a>
              <a
                href="/solutions/pain-management"
                className="inline-block border-2 border-rose-500 text-rose-500 px-8 py-4 rounded-full font-semibold hover:bg-rose-500 hover:text-white transition-all duration-300"
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
