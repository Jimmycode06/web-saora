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
    { icon: Waves, name: "Oceans", description: "Soothing waves" },
    { icon: CloudRain, name: "Rain", description: "Gentle and relaxing rain" },
    { icon: Mountain, name: "Ambience", description: "Mountain atmosphere" },
    { icon: Moon, name: "Sleep", description: "Peaceful dreams" },
  ];

  const privacyData = [
    {
      icon: Shield,
      title: "Data Protection",
      description: "Your personal data is encrypted and stored securely",
    },
    {
      icon: Eye,
      title: "No Tracking",
      description: "We don&apos;t track your activity outside the app",
    },
    {
      icon: Lock,
      title: "Local Data",
      description: "Your preferences are stored locally on your device",
    },
  ];

  const features = [
    "Over 50 high-quality natural sounds",
    "Mix multiple sounds simultaneously",
    "Customizable sleep timer",
    "Intuitive and elegant interface",
    "Offline mode available",
    "New sounds added regularly",
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
            Download
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
              Find Your
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Serenity
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Immerse yourself in a world of soothing natural sounds.
              Meditation, sleep, focus -{" "}
              <span className="text-blue-300 font-semibold">Saora</span>{" "}
              transforms your daily life.
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
                  Playing...
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
              <span>Discover</span>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              A Unique Experience
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Discover why thousands of users trust Saora for their daily
              well-being
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
              Natural Sounds
            </h2>
            <p className="text-xl text-blue-100">
              Explore our collection of high-quality sounds
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
                      Now Playing
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
              Your Privacy First
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              At Saora, we respect your privacy and protect your data with the
              utmost care
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
              <span>Read Full Policy</span>
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl border border-white/10 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Start Your Journey
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join the Saora community and discover the power of natural sounds
              to transform your well-being
            </p>
            <button className="group px-12 py-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-bold text-xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-4 mx-auto">
              <Download className="w-7 h-7 group-hover:animate-bounce" />
              <span>Download Now</span>
            </button>
            <p className="text-sm text-blue-300 mt-4">Free on the App Store</p>
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
            Your companion for relaxation and well-being
          </p>
          <div className="flex justify-center space-x-6 mb-4">
            <button
              onClick={() => setShowPrivacyModal(true)}
              className="text-blue-300 hover:text-blue-200 transition-colors text-sm"
            >
              Privacy Policy
            </button>
            <span className="text-blue-400">•</span>
            <button className="text-blue-300 hover:text-blue-200 transition-colors text-sm">
              Terms of Use
            </button>
            <span className="text-blue-400">•</span>
            <button className="text-blue-300 hover:text-blue-200 transition-colors text-sm">
              Support
            </button>
          </div>
          <p className="text-blue-300 text-sm">
            © 2024 Saora. All rights reserved.
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
                    Privacy Policy
                  </h3>
                  <p className="text-blue-200 text-sm">
                    Last updated: June 2025
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
                  1. Data Collection
                </h4>
                <p className="leading-relaxed">
                  Saora does not collect any data through the app. We believe in
                  complete privacy and transparency.
                </p>
                <ul className="mt-3 ml-6 space-y-2 list-disc">
                  <li>No personal information is collected</li>
                  <li>No usage data is tracked</li>
                  <li>No analytics are implemented</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  2. Data Usage
                </h4>
                <p className="leading-relaxed">
                  Since we don&apos;t collect any data, there is no data usage
                  to report.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  3. Protection and Security
                </h4>
                <p className="leading-relaxed">
                  Your privacy is our top priority:
                </p>
                <ul className="mt-3 ml-6 space-y-2 list-disc">
                  <li>No data collection means no data to protect</li>
                  <li>All app functionality works offline</li>
                  <li>No internet connection required</li>
                  <li>No third-party services or trackers</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  4. Your Rights
                </h4>
                <p className="leading-relaxed">
                  Since we don&apos;t collect any data, there are no data rights
                  to exercise. Your privacy is guaranteed by design.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  5. Cookies and Trackers
                </h4>
                <p className="leading-relaxed">
                  Saora does not use any cookies, trackers, or analytics tools.
                  The app is completely free of any tracking mechanisms.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  6. Contact
                </h4>
                <p className="leading-relaxed">
                  If you have any questions about our privacy-first approach,
                  contact us at:
                </p>
                <div className="mt-3 p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="font-semibold text-blue-300">
                    privacy@saora-app.com
                  </p>
                  <p className="text-sm text-blue-200 mt-1">
                    We commit to responding within 48 hours
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <p className="text-sm text-blue-300 text-center">
                  This policy reflects our commitment to complete privacy. We
                  will notify you of any changes through the app.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
