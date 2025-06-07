"use client";

import { FileText } from "lucide-react";
import Link from "next/link";

export default function TermsOfUse() {
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
              <FileText className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Terms of Use</h1>
              <p className="text-blue-200 text-sm">Last updated: June 2025</p>
            </div>
          </div>

          <div className="space-y-8 text-blue-100">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="leading-relaxed">
                By accessing and using Saora, you agree to be bound by these
                Terms of Use. If you do not agree to these terms, please do not
                use the application.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. Use of Service
              </h2>
              <p className="leading-relaxed">
                Saora is designed for personal use to help with relaxation,
                sleep, and focus. You agree to use the service only for lawful
                purposes and in accordance with these terms.
              </p>
              <ul className="mt-3 ml-6 space-y-2 list-disc">
                <li>Use the app for personal relaxation and well-being</li>
                <li>Do not attempt to reverse engineer the application</li>
                <li>Do not use the app for any illegal purposes</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. Intellectual Property
              </h2>
              <p className="leading-relaxed">
                All content, features, and functionality of Saora are owned by
                us and are protected by international copyright, trademark, and
                other intellectual property laws.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                4. Disclaimer
              </h2>
              <p className="leading-relaxed">
                Saora is provided &quot;as is&quot; without any warranties,
                expressed or implied. We do not guarantee that the app will be
                uninterrupted or error-free.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                5. Limitation of Liability
              </h2>
              <p className="leading-relaxed">
                We shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages resulting from your use of or
                inability to use the service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                6. Changes to Terms
              </h2>
              <p className="leading-relaxed">
                We reserve the right to modify these terms at any time. We will
                notify users of any material changes through the app or via
                email.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                7. Contact
              </h2>
              <p className="leading-relaxed">
                For any questions regarding these terms, please contact us at:
              </p>
              <div className="mt-3 p-4 bg-white/5 rounded-xl border border-white/10">
                <p className="font-semibold text-blue-300">
                  legal@saora-app.com
                </p>
                <p className="text-sm text-blue-200 mt-1">
                  We commit to responding within 48 hours
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <p className="text-sm text-blue-300 text-center">
                By using Saora, you acknowledge that you have read and
                understood these terms and agree to be bound by them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
