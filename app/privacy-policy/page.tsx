"use client";

import { Shield } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
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
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
              <p className="text-blue-200 text-sm">Last updated: June 2025</p>
            </div>
          </div>

          <div className="space-y-8 text-blue-100">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                1. Data Collection
              </h2>
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
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. Data Usage
              </h2>
              <p className="leading-relaxed">
                Since we don&apos;t collect any data, there is no data usage to
                report.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. Protection and Security
              </h2>
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
              <h2 className="text-2xl font-semibold text-white mb-4">
                4. Your Rights
              </h2>
              <p className="leading-relaxed">
                Since we don&apos;t collect any data, there are no data rights
                to exercise. Your privacy is guaranteed by design.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                5. Cookies and Trackers
              </h2>
              <p className="leading-relaxed">
                Saora does not use any cookies, trackers, or analytics tools.
                The app is completely free of any tracking mechanisms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                6. Contact
              </h2>
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
                This policy reflects our commitment to complete privacy. We will
                notify you of any changes through the app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
