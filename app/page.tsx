"use client";

import { useState, useEffect } from "react";
import {
  Play,
  Download,
  Star,
  Waves,
  CloudRain,
  Mountain,
  Moon,
  Shield,
  Eye,
  Lock,
  FileText,
} from "lucide-react";

export default function SaoraLanding() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSound, setActiveSound] = useState<number | null>(null);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sounds = [
    { icon: Waves, name: "Océans", description: "Vagues apaisantes" },
    { icon: CloudRain, name: "Pluie", description: "Pluie douce et relaxante" },
    { icon: Mountain, name: "Ambiance", description: "Atmosphère de montagne" },
    { icon: Moon, name: "Sommeil", description: "Rêves paisibles" },
  ];

  const privacyData = [
    {
      icon: Shield,
      title: "Protection des Données",
      description:
        "Vos données personnelles sont chiffrées et stockées de manière sécurisée",
    },
    {
      icon: Eye,
      title: "Aucun Tracking",
      description:
        "Nous ne suivons pas votre activité en dehors de l'application",
    },
    {
      icon: Lock,
      title: "Données Locales",
      description:
        "Vos préférences sont stockées localement sur votre appareil",
    },
  ];

  const features = [
    "Plus de 50 sons naturels haute qualité",
    "Mélangez plusieurs sons simultanément",
    "Timer de sommeil personnalisable",
    "Interface intuitive et élégante",
    "Mode hors ligne disponible",
    "Nouveaux sons ajoutés régulièrement",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background animated elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-32 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-8">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
              <span className="text-2xl font-bold text-white">S</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Saora
            </span>
          </div>
          <button className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            Télécharger
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight">
              Trouvez Votre
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Sérénité
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Plongez dans un univers de sons naturels apaisants. Méditation,
              sommeil, focus -
              <span className="text-blue-300 font-semibold"> Saora</span>{" "}
              transforme votre quotidien.
            </p>
          </div>

          {/* App Preview */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative mx-auto w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl backdrop-blur-sm border border-white/10 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105">
              <div className="absolute inset-4 bg-gradient-to-br from-slate-800/90 to-blue-900/90 rounded-2xl overflow-hidden">
                <div className="p-6">
                  <div className="text-lg font-semibold mb-4 text-blue-200">
                    Saora Sound
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {sounds.map((sound, index) => {
                      const Icon = sound.icon;
                      return (
                        <div
                          key={sound.name}
                          className={`p-3 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer hover:scale-105 ${
                            activeSound === index
                              ? "bg-blue-500/20 border-blue-400/50"
                              : ""
                          }`}
                          onClick={() =>
                            setActiveSound(activeSound === index ? null : index)
                          }
                        >
                          <Icon className="w-6 h-6 text-blue-300 mb-2" />
                          <div className="text-sm font-medium text-white">
                            {sound.name}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              {activeSound !== null && (
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-bounce">
                  <Play className="w-4 h-4 inline mr-2" />
                  En cours...
                </div>
              )}
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className={`mt-16 flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-lg shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-3">
              <Download className="w-6 h-6 group-hover:animate-bounce" />
              <span>App Store</span>
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 font-semibold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-3">
              <Play className="w-6 h-6" />
              <span>Découvrir</span>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Une Expérience Unique
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Découvrez pourquoi des milliers d&apos;utilisateurs font confiance
              à Saora pour leur bien-être quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <p className="text-blue-100 leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sound Categories Showcase */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Sons Naturels
            </h2>
            <p className="text-xl text-blue-100">
              Explorez notre collection de sons haute qualité
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sounds.map((sound, index) => {
              const Icon = sound.icon;
              return (
                <div
                  key={sound.name}
                  className="group p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 cursor-pointer"
                  onClick={() =>
                    setActiveSound(activeSound === index ? null : index)
                  }
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">
                    {sound.name}
                  </h3>
                  <p className="text-blue-200 group-hover:text-blue-100 transition-colors">
                    {sound.description}
                  </p>
                  {activeSound === index && (
                    <div className="mt-4 flex items-center text-blue-400 font-medium animate-pulse">
                      <Play className="w-4 h-4 mr-2" />
                      Écoute en cours
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Votre Confidentialité d&apos;Abord
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Chez Saora, nous respectons votre vie privée et protégeons vos
              données avec le plus grand soin
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {privacyData.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-green-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-xl mx-auto">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">
                    {item.title}
                  </h3>
                  <p className="text-blue-200">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button
              onClick={() => setShowPrivacyModal(true)}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-3 mx-auto"
            >
              <FileText className="w-5 h-5" />
              <span>Lire la Politique Complète</span>
            </button>
          </div>
        </div>
      </section>
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl border border-white/10 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Commencez Votre Voyage
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Rejoignez la communauté Saora et découvrez le pouvoir des sons
              naturels pour transformer votre bien-être
            </p>
            <button className="group px-12 py-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-bold text-xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-4 mx-auto">
              <Download className="w-7 h-7 group-hover:animate-bounce" />
              <span>Télécharger Maintenant</span>
            </button>
            <p className="text-sm text-blue-300 mt-4">
              Gratuit sur l&apos;App Store
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-lg font-bold text-white">S</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Saora
            </span>
          </div>
          <p className="text-blue-200 mb-4">
            Votre compagnon pour la relaxation et le bien-être
          </p>
          <div className="flex justify-center space-x-6 mb-4">
            <button
              onClick={() => setShowPrivacyModal(true)}
              className="text-blue-300 hover:text-blue-200 transition-colors text-sm"
            >
              Politique de Confidentialité
            </button>
            <span className="text-blue-400">•</span>
            <button className="text-blue-300 hover:text-blue-200 transition-colors text-sm">
              Conditions d&apos;Utilisation
            </button>
            <span className="text-blue-400">•</span>
            <button className="text-blue-300 hover:text-blue-200 transition-colors text-sm">
              Support
            </button>
          </div>
          <p className="text-blue-300 text-sm">
            © 2024 Saora. Tous droits réservés.
          </p>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-slate-800 to-blue-900 rounded-3xl border border-white/20 max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl">
            <div className="p-8 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Politique de Confidentialité
                  </h3>
                  <p className="text-blue-200 text-sm">
                    Dernière mise à jour : Juin 2025
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <span className="text-white text-xl">×</span>
              </button>
            </div>

            <div className="p-8 overflow-y-auto max-h-[calc(90vh-200px)] text-blue-100 space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  1. Collecte des Données
                </h4>
                <p className="leading-relaxed">
                  Saora collecte uniquement les données nécessaires au
                  fonctionnement de l&apos;application. Nous ne collectons
                  aucune donnée personnelle identifiable sans votre consentement
                  explicite.
                </p>
                <ul className="mt-3 ml-6 space-y-2 list-disc">
                  <li>Préférences audio et paramètres de l&apos;application</li>
                  <li>
                    Données d&apos;utilisation anonymisées pour améliorer
                    l&apos;expérience
                  </li>
                  <li>
                    Informations techniques de l&apos;appareil (version iOS,
                    modèle)
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  2. Utilisation des Données
                </h4>
                <p className="leading-relaxed">
                  Vos données sont utilisées exclusivement pour :
                </p>
                <ul className="mt-3 ml-6 space-y-2 list-disc">
                  <li>Personnaliser votre expérience d&apos;écoute</li>
                  <li>Sauvegarder vos préférences et playlists</li>
                  <li>Améliorer les performances de l&apos;application</li>
                  <li>Vous proposer des contenus adaptés à vos goûts</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  3. Protection et Sécurité
                </h4>
                <p className="leading-relaxed">
                  Nous mettons en œuvre des mesures de sécurité avancées :
                </p>
                <ul className="mt-3 ml-6 space-y-2 list-disc">
                  <li>
                    Chiffrement de bout en bout de toutes les données sensibles
                  </li>
                  <li>Stockage local prioritaire sur votre appareil</li>
                  <li>Aucun partage avec des tiers sans votre autorisation</li>
                  <li>Audits de sécurité réguliers</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  4. Vos Droits
                </h4>
                <p className="leading-relaxed">
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <ul className="mt-3 ml-6 space-y-2 list-disc">
                  <li>Droit d&apos;accès à vos données personnelles</li>
                  <li>Droit de rectification et de suppression</li>
                  <li>Droit à la portabilité des données</li>
                  <li>Droit de retirer votre consentement à tout moment</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  5. Cookies et Trackers
                </h4>
                <p className="leading-relaxed">
                  Saora n&apos;utilise aucun cookie de tracking ou de publicité.
                  Les seules données stockées localement servent uniquement au
                  fonctionnement de l&apos;application.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  6. Contact
                </h4>
                <p className="leading-relaxed">
                  Pour toute question concernant cette politique de
                  confidentialité ou l&apos;exercice de vos droits,
                  contactez-nous à :
                </p>
                <div className="mt-3 p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="font-semibold text-blue-300">
                    privacy@saora-app.com
                  </p>
                  <p className="text-sm text-blue-200 mt-1">
                    Nous nous engageons à répondre sous 48h
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <p className="text-sm text-blue-300 text-center">
                  Cette politique peut être mise à jour. Nous vous notifierons
                  de tout changement important via l&apos;application.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
