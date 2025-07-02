"use client";

import { useState, useEffect } from "react";
import {
  Play,
  Star,
  Waves,
  CloudRain,
  Mountain,
  Moon,
  Shield,
  Eye,
  Lock,
  FileText,
  HelpCircle,
  Brain,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import GoogleGeminiEffectDemo from "./components/ui/google-gemini-effect-demo";

export default function SaoraLanding() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSound, setActiveSound] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Background animated elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-32 w-64 h-64 bg-indigo-100 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-purple-100 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Header */}
      <header className="relative z-50 px-6 py-8">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/sora.png"
              alt="Saora Logo"
              width={48}
              height={48}
              className="w-12 h-12"
              priority
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Saora
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/blog"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FileText className="w-5 h-5" />
              <span>Blog</span>
            </Link>
            <Link
              href="/faq"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <HelpCircle className="w-5 h-5" />
              <span>FAQ</span>
            </Link>
            <Link
              href="/support"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <HelpCircle className="w-5 h-5" />
              <span>Support</span>
            </Link>
            <a
              href="https://apps.apple.com/us/app/saora-sound/id6746692484"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Download
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-white/95 backdrop-blur-sm z-40 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <Link
              href="/blog"
              className="text-2xl text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/faq"
              className="text-2xl text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/support"
              className="text-2xl text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Support
            </Link>
            <a
              href="https://apps.apple.com/us/app/saora-sound/id6746692484"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-105 text-xl shadow-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Download
            </a>
          </div>
        </div>
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
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight">
              Find Your
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Serenity
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Immerse yourself in a world of soothing natural sounds.
              Meditation, sleep, focus -{" "}
              <span className="text-blue-600 font-semibold">Saora</span>{" "}
              transforms your daily life.
            </p>
          </div>

          {/* App Preview */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative mx-auto w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl border border-gray-200 shadow-2xl hover:shadow-blue-200 transition-all duration-500 hover:scale-105">
              <div className="absolute inset-4 bg-white rounded-2xl overflow-hidden border border-gray-100">
                <div className="p-6">
                  <div className="text-lg font-semibold mb-4 text-gray-800">
                    Saora Sound
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {sounds.map((sound, index) => {
                      const Icon = sound.icon;
                      return (
                        <div
                          key={sound.name}
                          className={`p-3 bg-gray-50 rounded-xl border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 cursor-pointer hover:scale-105 ${
                            activeSound === index
                              ? "bg-blue-100 border-blue-400"
                              : ""
                          }`}
                          onClick={() =>
                            setActiveSound(activeSound === index ? null : index)
                          }
                        >
                          <Icon className="w-6 h-6 text-blue-600 mb-2" />
                          <div className="text-sm font-medium text-gray-800">
                            {sound.name}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              {activeSound !== null && (
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-bounce">
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
            <a
              href="https://apps.apple.com/us/app/saora-sound/id6746692484"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-all duration-300 hover:scale-105"
            >
              <Image
                src="/app-store-badge.svg"
                alt="Download on the App Store"
                width={160}
                height={48}
                className="h-12 w-auto"
                priority
              />
            </a>
            <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-3 shadow-lg">
              <Play className="w-6 h-6" />
              <span>Discover</span>
            </button>
          </div>
        </div>
      </section>

      {/* Google Gemini Effect Demo Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
              Interactive Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Scroll to see the magic happen
            </p>
          </div>
          <GoogleGeminiEffectDemo />
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
              A Unique Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover why thousands of users trust Saora for their daily
              well-being
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 bg-white rounded-2xl border border-gray-200 hover:border-blue-300 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-100 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
              Solutions for Your Well-being
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how Saora can help you with specific challenges in your
              life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              href="/solutions/stress-and-anxiety"
              className="group p-8 bg-white rounded-3xl border border-gray-200 hover:border-blue-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                Stress & Anxiety
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                Find peace and calm through guided sound therapy sessions
              </p>
            </Link>
            <Link
              href="/solutions/sleep"
              className="group p-8 bg-white rounded-3xl border border-gray-200 hover:border-blue-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Moon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                Sleep
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                Improve your sleep quality with soothing soundscapes
              </p>
            </Link>
            <Link
              href="/solutions/emotions-and-mood"
              className="group p-8 bg-white rounded-3xl border border-gray-200 hover:border-blue-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                Emotions & Mood
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                Balance your emotions and improve your mood naturally
              </p>
            </Link>
            <Link
              href="/solutions/focus-and-mental-performance"
              className="group p-8 bg-white rounded-3xl border border-gray-200 hover:border-blue-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                Focus & Performance
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                Enhance your focus and mental performance
              </p>
            </Link>
            <Link
              href="/solutions/self-confidence-and-self-esteem"
              className="group p-8 bg-white rounded-3xl border border-gray-200 hover:border-blue-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                Self-Confidence
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                Build self-confidence and boost your self-esteem
              </p>
            </Link>
            <Link
              href="/solutions/relationships-and-communication"
              className="group p-8 bg-white rounded-3xl border border-gray-200 hover:border-blue-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                Relationships
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                Improve your relationships and communication skills
              </p>
            </Link>
            <Link
              href="/solutions/pain-management"
              className="group p-8 bg-white rounded-3xl border border-gray-200 hover:border-blue-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                Pain Management
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                Manage pain naturally through sound therapy
              </p>
            </Link>
            <Link
              href="/solutions/life-changes-and-adaptation"
              className="group p-8 bg-white rounded-3xl border border-gray-200 hover:border-blue-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                Life Changes
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                Navigate life changes and adapt with resilience
              </p>
            </Link>
            <Link
              href="/solutions/habits-and-behaviors"
              className="group p-8 bg-white rounded-3xl border border-gray-200 hover:border-blue-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                Habits & Behaviors
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                Build positive habits and transform behaviors
              </p>
            </Link>
            <Link
              href="/solutions/mental-preparation"
              className="group p-8 bg-white rounded-3xl border border-gray-200 hover:border-blue-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                Mental Preparation
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                Prepare your mind for peak performance
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Sound Categories Showcase */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
              Natural Sounds
            </h2>
            <p className="text-xl text-gray-600">
              Explore our collection of high-quality sounds
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sounds.map((sound, index) => {
              const Icon = sound.icon;
              return (
                <div
                  key={sound.name}
                  className="group p-8 bg-white rounded-3xl border border-gray-200 hover:border-blue-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-100 cursor-pointer"
                  onClick={() =>
                    setActiveSound(activeSound === index ? null : index)
                  }
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {sound.name}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                    {sound.description}
                  </p>
                  {activeSound === index && (
                    <div className="mt-4 flex items-center text-blue-600 font-medium animate-pulse">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
              Your Privacy First
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
                  className="p-8 bg-white rounded-3xl border border-gray-200 hover:border-green-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-100 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl mx-auto">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              href="/privacy-policy"
              className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-3 mx-auto shadow-lg"
            >
              <FileText className="w-5 h-5" />
              <span>Read Full Policy</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl border border-blue-200 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
              Start Your Journey
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the Saora community and discover the power of natural sounds
              to transform your well-being
            </p>
            <a
              href="https://apps.apple.com/us/app/saora-sound/id6746692484"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-block transition-all duration-300 hover:scale-105"
            >
              <Image
                src="/app-store-badge.svg"
                alt="Download on the App Store"
                width={200}
                height={60}
                className="h-16 w-auto"
                priority
              />
            </a>
            <p className="text-sm text-blue-600 mt-4">Free trial available</p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover expert tips and insights for better sleep and well-being
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href="/blog/sleep"
              className="group p-8 bg-white rounded-3xl border border-gray-200 hover:border-blue-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Moon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                Can&apos;t Sleep? Causes, Solutions, and Practical Tips
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors mb-4">
                Discover effective solutions for insomnia and sleep problems.
                Learn about common causes, practical tips, and natural remedies
                to improve your sleep quality.
              </p>
              <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                <span>Read more</span>
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-lg font-bold text-white">S</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Saora
            </span>
          </div>
          <p className="text-gray-600 mb-4">
            Your companion for relaxation and well-being
          </p>
          <div className="flex justify-center space-x-6 mb-4">
            <Link
              href="/privacy-policy"
              className="text-gray-500 hover:text-blue-600 transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-400">•</span>
            <Link
              href="/terms-of-use"
              className="text-gray-500 hover:text-blue-600 transition-colors text-sm"
            >
              Terms of Use
            </Link>
            <span className="text-gray-400">•</span>
            <button className="text-gray-500 hover:text-blue-600 transition-colors text-sm">
              Support
            </button>
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 Saora. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
