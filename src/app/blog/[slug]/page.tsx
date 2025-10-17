import Link from "next/link";
import { notFound } from "next/navigation";

const articles = [
  {
    slug: "why-cant-i-fall-asleep",
    title: "Why Can't I Fall Asleep Even When I'm Tired?",
    category: "Sleep Science",
    readTime: "8 min read",
    date: "January 15, 2025",
    content: `
      <p>If you've ever found yourself lying awake in bed, exhausted but unable to drift off, you're not alone. This frustrating experience affects millions of people worldwide and can significantly impact your quality of life.</p>
      
      <h2>Common Causes of Sleeplessness</h2>
      <p>Several factors can prevent you from falling asleep, even when you feel physically tired. Understanding these causes is the first step toward better sleep.</p>
      
      <h3>Mental Overstimulation</h3>
      <p>Your brain might be too active, processing the day's events, worrying about tomorrow, or simply unable to "switch off." This mental chatter keeps your nervous system alert, making it difficult to transition into sleep.</p>
      
      <h3>Circadian Rhythm Disruption</h3>
      <p>Irregular sleep schedules, exposure to blue light from screens, or jet lag can throw off your body's internal clock. When your circadian rhythm is disrupted, your brain doesn't receive the right signals to initiate sleep.</p>
      
      <h3>Stress and Anxiety</h3>
      <p>Chronic stress triggers the release of cortisol and adrenaline, hormones that keep you alert and awake. Anxiety can create a cycle where worrying about not sleeping makes it even harder to fall asleep.</p>
      
      <h3>Physical Discomfort</h3>
      <p>Pain, temperature extremes, or an uncomfortable mattress can prevent you from relaxing enough to fall asleep, even when you're mentally tired.</p>
      
      <h2>How Relaxing Sounds Can Help</h2>
      <p>Incorporating relaxing sounds into your bedtime routine can be a powerful tool for overcoming sleeplessness. Research shows that certain sounds can help calm your nervous system and prepare your body for sleep.</p>
      
      <h3>White Noise and Sleep</h3>
      <p>White noise creates a consistent, steady sound that masks disruptive environmental noises. This helps your brain relax by eliminating sudden sounds that might startle you awake. Studies have shown that white noise can reduce sleep onset time by up to 38%.</p>
      
      <h3>Nature Sounds for Relaxation</h3>
      <p>Sounds from nature, such as rain, ocean waves, or forest ambience, can trigger your body's relaxation response. These sounds have been used for centuries in meditation practices and can help lower your heart rate and reduce stress hormones.</p>
      
      <h3>Binaural Beats and Brainwave Entrainment</h3>
      <p>Some relaxing sounds are specifically designed to entrain your brainwaves to frequencies associated with sleep. These can help guide your brain into the theta and delta states necessary for deep, restorative sleep.</p>
      
      <h2>Practical Solutions for Better Sleep</h2>
      
      <h3>Create a Bedtime Routine</h3>
      <p>Establish a consistent pre-sleep routine that includes relaxing sounds. Start 30-60 minutes before bed by dimming lights, playing calming sounds, and engaging in quiet activities like reading or gentle stretching.</p>
      
      <h3>Optimize Your Sleep Environment</h3>
      <p>Make your bedroom a sanctuary for sleep. Keep it cool (around 65-68°F), dark, and quiet. Use blackout curtains, remove electronic devices, and consider using relaxing sounds to mask any unavoidable noise.</p>
      
      <h3>Practice Mindfulness</h3>
      <p>Combine relaxing sounds with mindfulness or meditation practices. Focus on your breathing while listening to calming sounds, which can help quiet racing thoughts and prepare your mind for sleep.</p>
      
      <h3>Limit Screen Time</h3>
      <p>Avoid screens for at least one hour before bed. The blue light emitted by phones, tablets, and computers suppresses melatonin production, making it harder to fall asleep.</p>
      
      <h2>When to Seek Professional Help</h2>
      <p>If sleeplessness persists for more than a few weeks despite trying these strategies, consider consulting a healthcare professional. Chronic insomnia may require medical intervention or cognitive behavioral therapy for insomnia (CBT-I).</p>
      
      <h2>Conclusion</h2>
      <p>Falling asleep when you're tired but unable to sleep can be frustrating, but it's often manageable with the right approach. Incorporating relaxing sounds into your bedtime routine, creating a conducive sleep environment, and addressing underlying stress can significantly improve your ability to fall asleep faster and enjoy better sleep quality.</p>
      
      <p>Remember, improving your sleep is a journey. Be patient with yourself and experiment with different sounds and techniques to find what works best for you. With consistency and the right tools, you can overcome sleeplessness and enjoy the restful sleep your body needs.</p>
    `,
  },
];

export default function BlogPost({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm font-semibold rounded-full">
              {article.category}
            </span>
            <span className="text-white/60 text-sm">{article.readTime}</span>
            <span className="text-white/60 text-sm">•</span>
            <span className="text-white/60 text-sm">{article.date}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
            {article.title}
          </h1>
        </div>

        {/* Article Content */}
        <article
          className="prose prose-invert prose-lg max-w-none
            prose-headings:text-white
            prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-2xl prose-h3:font-bold prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-white/80 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300
            prose-strong:text-white prose-strong:font-semibold
            prose-ul:text-white/80 prose-ul:my-6
            prose-li:text-white/80 prose-li:mb-2"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Improve Your Sleep?
          </h2>
          <p className="text-white/70 text-lg mb-6">
            Download Saora Sound and access hundreds of relaxing sounds designed to help you fall asleep faster and sleep better.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
          >
            Download App
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

