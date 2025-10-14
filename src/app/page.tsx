export default function Home() {
  return (
    <div className="flex flex-col items-center w-full px-4 max-w-3xl mx-auto gap-24 py-12">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center text-center gap-6 mt-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg">
          Saora Sound
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-xl mx-auto">
          L&apos;application de sons immersifs, musiques relaxantes et
          méditations guidées pour le calme, la concentration et le bien-être.
        </p>
        <a
          href="#"
          className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full px-8 py-3 shadow-lg transition-colors text-lg"
        >
          Télécharger l&apos;app
        </a>
      </section>

      {/* À propos */}
      <section className="w-full flex flex-col items-center text-center gap-4">
        <h2 className="text-2xl font-bold text-white mb-2">À propos</h2>
        <p className="text-white/80 max-w-lg">
          Saora Sound vous accompagne au quotidien pour retrouver le calme,
          améliorer votre concentration ou simplement profiter d&apos;une
          ambiance sonore apaisante. Sons naturels, musiques douces et
          méditations guidées sont réunis pour votre bien-être.
        </p>
      </section>

      {/* Fonctionnalités */}
      <section className="w-full flex flex-col items-center gap-8">
        <h2 className="text-2xl font-bold text-white mb-2">Fonctionnalités</h2>
        <div className="flex flex-col sm:flex-row gap-8 w-full justify-center">
          <div className="flex flex-col items-center gap-2 flex-1">
            <div className="bg-blue-600/80 rounded-full p-4 mb-2">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                <path
                  fill="#fff"
                  d="M12 3C7 3 2.73 7.11 2.05 12.11a1 1 0 0 0 1.32 1.06A7.97 7.97 0 0 1 12 5a7.97 7.97 0 0 1 8.63 8.17 1 1 0 0 0 1.32-1.06C21.27 7.11 17 3 12 3Z"
                />
                <circle cx="12" cy="17" r="2" fill="#fff" />
              </svg>
            </div>
            <span className="font-semibold text-white">Sons immersifs</span>
            <span className="text-white/60 text-sm text-center">
              Plongez dans des ambiances naturelles et relaxantes
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 flex-1">
            <div className="bg-blue-600/80 rounded-full p-4 mb-2">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                <path
                  fill="#fff"
                  d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm2 0v12h12V6H6Zm3 4h6v2H9v-2Z"
                />
              </svg>
            </div>
            <span className="font-semibold text-white">Aucune publicité</span>
            <span className="text-white/60 text-sm text-center">
              Profitez d&apos;une expérience sans interruption
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 flex-1">
            <div className="bg-blue-600/80 rounded-full p-4 mb-2">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                <path
                  fill="#fff"
                  d="M12 2a1 1 0 0 1 1 1v8.59l3.3 3.3a1 1 0 0 1-1.42 1.42l-3.59-3.59A1 1 0 0 1 11 12V3a1 1 0 0 1 1-1Zm0 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
                />
              </svg>
            </div>
            <span className="font-semibold text-white">
              Nouveaux sons chaque semaine
            </span>
            <span className="text-white/60 text-sm text-center">
              Découvrez régulièrement de nouveaux contenus
            </span>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="w-full flex flex-col items-center text-center gap-2 mt-8">
        <h2 className="text-2xl font-bold text-white mb-2">Contact</h2>
        <a
          href="mailto:x10millionmarketing@gmail.com"
          className="text-blue-400 hover:underline text-lg"
        >
          x10millionmarketing@gmail.com
        </a>
      </section>
    </div>
  );
}
