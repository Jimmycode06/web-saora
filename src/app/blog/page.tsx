import Link from "next/link";

export default function Blog() {
  const articles = [
    {
      slug: "why-cant-i-fall-asleep",
      title: "Why Can't I Fall Asleep Even When I'm Tired?",
      excerpt: "Discover the common reasons behind sleeplessness and how relaxing sounds can help you achieve better sleep quality.",
      category: "Sleep Science",
      readTime: "8 min read",
      date: "January 15, 2025",
    },
    {
      slug: "science-of-white-noise",
      title: "The Science of White Noise: How It Improves Your Sleep",
      excerpt: "Learn how white noise masks disruptive sounds and helps you fall asleep faster and stay asleep longer.",
      category: "Sleep Science",
      readTime: "6 min read",
      date: "January 12, 2025",
    },
    {
      slug: "best-bedtime-habits",
      title: "10 Best Bedtime Habits to Fall Asleep Faster",
      excerpt: "Transform your sleep routine with these proven techniques for better sleep quality and faster sleep onset.",
      category: "Sleep Tips",
      readTime: "10 min read",
      date: "January 10, 2025",
    },
    {
      slug: "stop-overthinking-at-night",
      title: "How to Stop Overthinking When You're in Bed",
      excerpt: "Practical techniques to quiet your mind at night and let relaxing sounds guide you to peaceful sleep.",
      category: "Mental Health",
      readTime: "7 min read",
      date: "January 8, 2025",
    },
    {
      slug: "screen-time-sleep-impact",
      title: "The Impact of Screen Time on Your Sleep Quality",
      excerpt: "Understand how blue light affects your circadian rhythm and discover healthier bedtime alternatives.",
      category: "Sleep Science",
      readTime: "5 min read",
      date: "January 5, 2025",
    },
    {
      slug: "anxiety-sleep-issues",
      title: "Can Anxiety Really Cause Sleep Issues?",
      excerpt: "Explore the connection between stress, anxiety, and insomnia, plus effective solutions for better rest.",
      category: "Mental Health",
      readTime: "9 min read",
      date: "January 3, 2025",
    },
    {
      slug: "ultimate-guide-deep-sleep",
      title: "The Ultimate Guide to Deep Sleep",
      excerpt: "Everything you need to know about achieving deep, restorative sleep for optimal health and well-being.",
      category: "Sleep Science",
      readTime: "12 min read",
      date: "December 30, 2024",
    },
    {
      slug: "how-many-hours-sleep",
      title: "How Many Hours of Sleep Do You Really Need?",
      excerpt: "Debunking sleep myths and discovering the optimal sleep duration for your age and lifestyle.",
      category: "Sleep Science",
      readTime: "6 min read",
      date: "December 28, 2024",
    },
    {
      slug: "natural-sleep-aids",
      title: "Natural Sleep Aids: Herbal Teas, Meditation, and More",
      excerpt: "Explore natural alternatives to sleeping pills and how they can improve your sleep quality safely.",
      category: "Natural Remedies",
      readTime: "8 min read",
      date: "December 25, 2024",
    },
    {
      slug: "perfect-sleep-environment",
      title: "Creating the Perfect Sleep Environment",
      excerpt: "Tips for optimizing your bedroom for better sleep, from temperature to lighting to soundscapes.",
      category: "Sleep Tips",
      readTime: "7 min read",
      date: "December 22, 2024",
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-black mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Sleep & Wellness Blog
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Expert tips, science-backed insights, and practical advice for better sleep, relaxation, and overall well-being.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 hover:border-blue-400/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm font-semibold rounded-full">
                Featured
              </span>
              <span className="text-white/60 text-sm">{articles[0].category}</span>
              <span className="text-white/60 text-sm">•</span>
              <span className="text-white/60 text-sm">{articles[0].readTime}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 hover:text-blue-400 transition-colors">
              {articles[0].title}
            </h2>
            <p className="text-white/70 text-lg mb-6 leading-relaxed">
              {articles[0].excerpt}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-white/50 text-sm">{articles[0].date}</span>
              <Link
                href={`/blog/${articles[0].slug}`}
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
              >
                Read more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article, index) => (
            <article
              key={index}
              className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-blue-400/50 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs font-semibold rounded-full">
                  {article.category}
                </span>
                <span className="text-white/50 text-xs">{article.readTime}</span>
              </div>
              <Link href={`/blog/${article.slug}`}>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {article.title}
                </h3>
              </Link>
              <p className="text-white/60 text-sm mb-4 leading-relaxed">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-white/40 text-xs">{article.date}</span>
                <Link
                  href={`/blog/${article.slug}`}
                  className="text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors"
                >
                  Read →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get Sleep Tips Delivered to Your Inbox
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for weekly insights on better sleep, relaxation techniques, and wellness tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

