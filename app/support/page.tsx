"use client";

import { HelpCircle, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Support() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Link
            href="/"
            className="text-blue-300 hover:text-blue-200 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-blue-900 rounded-3xl border border-white/20 p-8 shadow-2xl">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center">
              <HelpCircle className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Support Center</h1>
              <p className="text-blue-200 text-sm">How can we help you?</p>
            </div>
          </div>

          <div className="space-y-8 text-blue-100">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center space-x-3 mb-4">
                  <Mail className="w-6 h-6 text-blue-300" />
                  <h2 className="text-xl font-semibold text-white">
                    Email Support
                  </h2>
                </div>
                <p className="text-blue-200 mb-4">
                  For any questions or issues, please contact us at:
                </p>
                <a
                  href="mailto:support@saora-app.com"
                  className="text-blue-300 hover:text-blue-200 transition-colors"
                >
                  support@saora-app.com
                </a>
                <p className="text-sm text-blue-200 mt-2">
                  We typically respond within 24-48 hours
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center space-x-3 mb-4">
                  <MessageCircle className="w-6 h-6 text-blue-300" />
                  <h2 className="text-xl font-semibold text-white">
                    Live Chat
                  </h2>
                </div>
                <p className="text-blue-200 mb-4">
                  Available Monday to Friday, 9:00 AM - 5:00 PM EST
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
                  Start Chat
                </button>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    How do I reset my password?
                  </h3>
                  <p className="text-blue-200">
                    You can reset your password by clicking on the &quot;Forgot
                    Password&quot; link on the login screen. We&apos;ll send you
                    an email with instructions to create a new password.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    How do I cancel my subscription?
                  </h3>
                  <p className="text-blue-200">
                    You can cancel your subscription at any time through your
                    account settings. Go to Settings &gt; Subscription &gt;
                    Cancel Subscription.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Is my data secure?
                  </h3>
                  <p className="text-blue-200">
                    Yes, we take data security very seriously. All your data is
                    encrypted and stored securely. We never share your personal
                    information with third parties.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-white/10">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Legal Information
                  </h3>
                  <div className="flex space-x-4 mt-2">
                    <Link
                      href="/privacy-policy"
                      className="text-blue-300 hover:text-blue-200 transition-colors"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      href="/terms-of-use"
                      className="text-blue-300 hover:text-blue-200 transition-colors"
                    >
                      Terms of Use
                    </Link>
                  </div>
                </div>
                <p className="text-sm text-blue-300">
                  © 2024 Saora. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
