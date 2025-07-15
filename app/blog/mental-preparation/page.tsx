import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mental Preparation: Optimize Your Performance | Saora",
  description:
    "Develop your mental preparation through meditation and relaxation techniques. Maximize your potential in all areas.",
  keywords: [
    "mental preparation",
    "performance",
    "concentration",
    "visualization",
    "meditation",
    "relaxation",
    "confidence",
    "saora",
    "mindfulness",
    "excellence",
  ],
  authors: [{ name: "Saora Team" }],
  openGraph: {
    title: "Mental Preparation: Optimize Your Performance | Saora",
    description:
      "Develop your mental preparation through meditation and relaxation techniques.",
    type: "article",
    publishedTime: "2024-12-19T10:00:00.000Z",
    authors: ["Saora Team"],
    tags: ["mental preparation", "performance", "meditation", "concentration"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mental Preparation: Optimize Your Performance | Saora",
    description:
      "Develop your mental preparation through meditation and relaxation techniques.",
  },
  alternates: {
    canonical: "https://saora.fr/blog/mental-preparation",
  },
};

export default function MentalPreparationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              Mental Preparation
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Optimize your performance and achieve your goals through the power
              of mental training
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
              <span>📖 11 min read</span>
              <span>•</span>
              <span>🎯 Performance</span>
              <span>•</span>
              <span>🧠 Mental</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg prose-gray">
          {/* Introduction */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Art of Mental Performance
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Mental preparation is no longer reserved for elite athletes.
              Whether for an important interview, a presentation, an exam, or
              any other life challenge, mental training helps us give our best
              at the crucial moment.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🧠 The Fundamentals
            </h2>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              What is Mental Preparation?
            </h3>
            <p className="mb-6">
              Mental preparation consists of training your mind to optimize
              performance. It combines relaxation, concentration, confidence,
              and visualization to create the ideal mental state when facing a
              challenge.
            </p>

            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  🧘
                </div>
                <h4 className="font-semibold text-blue-800 mb-2">Relaxation</h4>
                <p className="text-blue-700 text-sm">
                  Stress and tension management
                </p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  🎯
                </div>
                <h4 className="font-semibold text-indigo-800 mb-2">
                  Concentration
                </h4>
                <p className="text-indigo-700 text-sm">
                  Focus and sustained attention
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  💪
                </div>
                <h4 className="font-semibold text-purple-800 mb-2">
                  Confidence
                </h4>
                <p className="text-purple-700 text-sm">
                  Self-esteem and assurance
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  👁️
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Visualization
                </h4>
                <p className="text-gray-700 text-sm">Positive mental imagery</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Scientific Benefits
            </h3>
            <p className="mb-6">
              Neuroscience confirms the effectiveness of mental preparation. It
              activates the same brain regions as real action, creating new
              neural circuits and strengthening performance.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mb-6">
              <h4 className="font-semibold text-blue-800 mb-2">
                🔬 Proven Effects
              </h4>
              <ul className="text-blue-700 space-y-2">
                <li>
                  • <strong>Performance improvement:</strong> +15 to 30% on
                  average
                </li>
                <li>
                  • <strong>Stress reduction:</strong> Decreased cortisol
                </li>
                <li>
                  • <strong>Increased confidence:</strong> Enhanced self-esteem
                </li>
                <li>
                  • <strong>Faster recovery:</strong> Better failure management
                </li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🎯 Visualization Techniques
            </h2>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Mental Rehearsal
            </h3>
            <p className="mb-6">
              Visualizing your success in detail programs the brain for success.
              The more precise and multi-sensory the visualization, the more
              effective it is.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl mb-6">
              <h4 className="font-semibold text-gray-800 mb-3">
                🎬 Exercise: Complete Visualization
              </h4>
              <ol className="text-gray-700 space-y-2">
                <li>
                  1. <strong>Relaxation:</strong> Relax deeply
                </li>
                <li>
                  2. <strong>Context:</strong> Visualize the environment in
                  detail
                </li>
                <li>
                  3. <strong>Action:</strong> Imagine yourself performing
                  perfectly
                </li>
                <li>
                  4. <strong>Sensations:</strong> Feel the positive emotions
                </li>
                <li>
                  5. <strong>Success:</strong> Fully experience the achievement
                </li>
                <li>
                  6. <strong>Anchoring:</strong> Memorize this feeling
                </li>
              </ol>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Types of Visualization
            </h3>
            <p className="mb-6">
              Different visualization approaches can be combined according to
              the goal and type of performance sought.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                <h4 className="font-semibold text-blue-800 mb-3">
                  🏆 Outcome Visualization
                </h4>
                <ul className="text-blue-700 space-y-2 text-sm">
                  <li>• Imagine final success</li>
                  <li>• Experience the emotion of achievement</li>
                  <li>• Mentally celebrate accomplishment</li>
                  <li>• Anchor motivation</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl">
                <h4 className="font-semibold text-indigo-800 mb-3">
                  🎯 Process Visualization
                </h4>
                <ul className="text-indigo-700 space-y-2 text-sm">
                  <li>• Mentally repeat each step</li>
                  <li>• Perfect technical gestures</li>
                  <li>• Anticipate difficulties</li>
                  <li>• Program automatisms</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🌊 Performance Stress Management
            </h2>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Transforming Stress into an Ally
            </h3>
            <p className="mb-6">
              Stress is not always negative. A certain level of tension
              optimizes performance. The art is to find the ideal activation
              zone.
            </p>

            <div className="bg-indigo-50 border-l-4 border-indigo-400 p-6 rounded-r-lg mb-6">
              <h4 className="font-semibold text-indigo-800 mb-2">
                ⚡ The Optimal Performance Zone
              </h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h5 className="font-medium text-red-600 mb-1">
                    Under-Activation
                  </h5>
                  <p className="text-gray-600">
                    Lack of energy, boredom, low performance
                  </p>
                </div>
                <div>
                  <h5 className="font-medium text-green-600 mb-1">
                    Optimal Zone
                  </h5>
                  <p className="text-gray-600">
                    Controlled energy, focus, maximum performance
                  </p>
                </div>
                <div>
                  <h5 className="font-medium text-red-600 mb-1">
                    Over-Activation
                  </h5>
                  <p className="text-gray-600">
                    Anxiety, tension, degraded performance
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Regulation Techniques
            </h3>
            <p className="mb-6">
              Different techniques allow you to modulate your activation level
              according to the needs of the moment and the type of performance.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                <h4 className="font-semibold text-green-800 mb-3">
                  🔽 Calming Techniques
                </h4>
                <ul className="text-green-700 space-y-2 text-sm">
                  <li>• Slow and deep breathing</li>
                  <li>• Progressive muscle relaxation</li>
                  <li>• Mindfulness meditation</li>
                  <li>• Soothing visualization</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
                <h4 className="font-semibold text-orange-800 mb-3">
                  🔥 Activation Techniques
                </h4>
                <ul className="text-orange-700 space-y-2 text-sm">
                  <li>• Dynamic breathing</li>
                  <li>• Energetic movements</li>
                  <li>• Powerful affirmations</li>
                  <li>• Stimulating music</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🎪 Practical Applications
            </h2>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Mental Preparation by Domain
            </h3>
            <p className="mb-6">
              Each context requires a specific approach to mental preparation,
              adapted to particular challenges and objectives.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                <h4 className="font-semibold text-blue-800 mb-3">
                  💼 Professional
                </h4>
                <ul className="text-blue-700 space-y-2 text-sm">
                  <li>
                    • <strong>Interviews:</strong> Confidence and clarity
                  </li>
                  <li>
                    • <strong>Presentations:</strong> Ease and impact
                  </li>
                  <li>
                    • <strong>Negotiations:</strong> Calm and persuasion
                  </li>
                  <li>
                    • <strong>Leadership:</strong> Presence and authority
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl">
                <h4 className="font-semibold text-indigo-800 mb-3">
                  🎓 Academic
                </h4>
                <ul className="text-indigo-700 space-y-2 text-sm">
                  <li>
                    • <strong>Exams:</strong> Concentration and memory
                  </li>
                  <li>
                    • <strong>Oral presentations:</strong> Expression and
                    assurance
                  </li>
                  <li>
                    • <strong>Competitions:</strong> Performance under pressure
                  </li>
                  <li>
                    • <strong>Defense:</strong> Clarity and conviction
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                <h4 className="font-semibold text-purple-800 mb-3">
                  🏃‍♀️ Sports
                </h4>
                <ul className="text-purple-700 space-y-2 text-sm">
                  <li>
                    • <strong>Competitions:</strong> Focus and determination
                  </li>
                  <li>
                    • <strong>Training:</strong> Motivation and excellence
                  </li>
                  <li>
                    • <strong>Recovery:</strong> Relaxation and repair
                  </li>
                  <li>
                    • <strong>Injuries:</strong> Patience and healing
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl">
                <h4 className="font-semibold text-pink-800 mb-3">
                  🎭 Artistic
                </h4>
                <ul className="text-pink-700 space-y-2 text-sm">
                  <li>
                    • <strong>Performances:</strong> Presence and expression
                  </li>
                  <li>
                    • <strong>Creativity:</strong> Inspiration and flow
                  </li>
                  <li>
                    • <strong>Auditions:</strong> Authenticity and emotion
                  </li>
                  <li>
                    • <strong>Stage fright:</strong> Transform into positive
                    energy
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              📚 Mental Training Program
            </h2>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Progressive Training Plan
            </h3>
            <p className="mb-6">
              Like physical training, mental preparation requires regularity and
              progression to fully develop your abilities.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mb-6">
              <h4 className="font-semibold text-gray-800 mb-3">
                📅 4-Week Program
              </h4>
              <div className="grid md:grid-cols-4 gap-4 text-sm">
                <div>
                  <h5 className="font-medium text-blue-700 mb-2">
                    Week 1: Basics
                  </h5>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Relaxation</li>
                    <li>• Breathing</li>
                    <li>• Concentration</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-indigo-700 mb-2">
                    Week 2: Visualization
                  </h5>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Mental imagery</li>
                    <li>• Mental rehearsal</li>
                    <li>• Positive anchoring</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-purple-700 mb-2">
                    Week 3: Confidence
                  </h5>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Affirmations</li>
                    <li>• Past successes</li>
                    <li>• Inner critic management</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-pink-700 mb-2">
                    Week 4: Integration
                  </h5>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Complete simulation</li>
                    <li>• Stress management</li>
                    <li>• Personalized routine</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Pre-Performance Routine
            </h3>
            <p className="mb-6">
              Developing a standardized pre-performance routine helps create the
              optimal mental state reliably and reproducibly.
            </p>

            <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-lg mb-6">
              <h4 className="font-semibold text-purple-800 mb-2">
                🎯 10-Minute Routine
              </h4>
              <ol className="text-purple-700 space-y-2">
                <li>
                  1. <strong>Centering (2 min):</strong> Breathing and present
                  grounding
                </li>
                <li>
                  2. <strong>Relaxation (3 min):</strong> Release tensions
                </li>
                <li>
                  3. <strong>Visualization (3 min):</strong> Mental rehearsal of
                  success
                </li>
                <li>
                  4. <strong>Activation (2 min):</strong> Affirmations and
                  positive energy
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
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  🧘‍♀️
                </div>
                <h3 className="font-semibold text-blue-800 mb-2">
                  Performance Meditations
                </h3>
                <p className="text-blue-700 text-sm">
                  Sessions specialized for mental preparation
                </p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-indigo-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  🎯
                </div>
                <h3 className="font-semibold text-indigo-800 mb-2">
                  Visualization Exercises
                </h3>
                <p className="text-indigo-700 text-sm">
                  Guided mental imagery techniques
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  📊
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Personalized Programs
                </h3>
                <p className="text-gray-700 text-sm">
                  Training adapted to your specific goals
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                🌟 Conclusion: Unleash Your Potential
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Mental preparation is an investment that pays off in all areas
                of life. By training your mind with the same rigor as your body,
                you develop extraordinary abilities for performance and
                resilience.
              </p>
              <p className="text-gray-700">
                Remember that excellence is not an accident, but the result of
                meticulous preparation and constant training. Your mind is your
                most powerful tool - learn to master it.
              </p>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Optimize Your Performance?
            </h2>
            <p className="text-gray-600 mb-8">
              Discover our mental preparation programs
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <a
                href="https://apps.apple.com/app/saora"
                className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105"
              >
                Download Saora
              </a>
              <a
                href="/solutions/mental-preparation"
                className="inline-block border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
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
