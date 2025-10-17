import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saora Sound",
  description: "Application de sons, musique et méditation pour le bien-être.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="bg-[#0a174e] text-white min-h-screen flex flex-col font-sans">
        <header className="w-full py-6 flex justify-between items-center px-6 border-b border-white/10">
          <a href="/" className="text-3xl font-bold tracking-tight text-white hover:text-blue-400 transition-colors">
            Saora <span className="text-blue-400">Sound</span>
          </a>
          <nav className="flex items-center gap-6">
            <a href="/" className="text-white/70 hover:text-white transition-colors">Home</a>
            <a href="/blog" className="text-white/70 hover:text-white transition-colors">Blog</a>
            <a href="#contact" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition-colors">Contact</a>
          </nav>
        </header>
        <main className="flex-1 flex flex-col">{children}</main>
        <footer className="w-full py-4 text-center text-sm text-white/60 border-t border-white/10">
          © Saora Sound – 2025
        </footer>
      </body>
    </html>
  );
}
