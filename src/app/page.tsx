export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section avec animation */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
        {/* Effet de fond animé */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Contenu principal */}
        <div className="relative z-10 flex flex-col items-center text-center gap-8 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-400/30 rounded-full backdrop-blur-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            <span className="text-blue-300 text-sm font-medium">Disponible maintenant</span>
          </div>

          {/* Titre principal avec effet de gradient */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x">
              Saora Sound
            </span>
          </h1>

          {/* Sous-titre */}
          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 max-w-3xl leading-relaxed font-light">
            L&apos;application de sons immersifs, musiques relaxantes et méditations guidées pour le calme, la concentration et le bien-être.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href="#"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-full shadow-2xl shadow-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/70"
            >
              <span>Télécharger l&apos;app</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-105"
            >
              <span>Découvrir</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Stats ou avis */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-semibold">4.9/5</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold">+50 000 utilisateurs</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">+200 sons</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-24 px-4 bg-gradient-to-b from-transparent to-blue-950/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Pourquoi choisir <span className="text-blue-400">Saora Sound</span> ?
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Une expérience audio exceptionnelle pour votre bien-être au quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group relative bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3C7 3 2.73 7.11 2.05 12.11a1 1 0 0 0 1.32 1.06A7.97 7.97 0 0 1 12 5a7.97 7.97 0 0 1 8.63 8.17 1 1 0 0 0 1.32-1.06C21.27 7.11 17 3 12 3Z" />
                    <circle cx="12" cy="17" r="2" fill="white" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Sons immersifs</h3>
                <p className="text-white/70 leading-relaxed">
                  Plongez dans des ambiances naturelles et relaxantes. De la forêt tropicale aux vagues océaniques, chaque son est soigneusement sélectionné pour votre bien-être.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm2 0v12h12V6H6Zm3 4h6v2H9v-2Z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Aucune publicité</h3>
                <p className="text-white/70 leading-relaxed">
                  Profitez d&apos;une expérience sans interruption. Focus total sur votre relaxation et votre bien-être, sans aucune distraction.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative bg-gradient-to-br from-pink-500/10 to-orange-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-pink-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a1 1 0 0 1 1 1v8.59l3.3 3.3a1 1 0 0 1-1.42 1.42l-3.59-3.59A1 1 0 0 1 11 12V3a1 1 0 0 1 1-1Zm0 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Nouveaux sons chaque semaine</h3>
                <p className="text-white/70 leading-relaxed">
                  Découvrez régulièrement de nouveaux contenus. Notre équipe ajoute constamment de nouvelles ambiances pour enrichir votre expérience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Votre bien-être, notre priorité
          </h2>
          <p className="text-xl text-white/80 leading-relaxed mb-8">
            Saora Sound vous accompagne au quotidien pour retrouver le calme, améliorer votre concentration ou simplement profiter d&apos;une ambiance sonore apaisante. Sons naturels, musiques douces et méditations guidées sont réunis pour votre bien-être.
          </p>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-white/10">
            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-white font-semibold">Scientifiquement prouvé</span>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="w-full py-24 px-4 bg-gradient-to-b from-transparent to-blue-950/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Prêt à commencer votre voyage ?
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Rejoignez des milliers d&apos;utilisateurs qui ont transformé leur quotidien avec Saora Sound.
          </p>
          <a
            href="#"
            className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold text-lg rounded-full shadow-2xl shadow-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/70"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
            </svg>
            <span>Télécharger maintenant</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-16 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Une question ?</h2>
          <p className="text-white/70 mb-6">Notre équipe est là pour vous aider</p>
          <a
            href="mailto:x10millionmarketing@gmail.com"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-lg font-semibold transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>x10millionmarketing@gmail.com</span>
          </a>
        </div>
      </section>
    </div>
  );
}
