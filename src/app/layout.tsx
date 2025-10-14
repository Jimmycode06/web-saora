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
        <header className="w-full py-6 flex justify-center items-center border-b border-white/10">
          <span className="text-3xl font-bold tracking-tight text-white">
            Saora <span className="text-blue-400">Sound</span>
          </span>
        </header>
        <main className="flex-1 flex flex-col">{children}</main>
        <footer className="w-full py-4 text-center text-sm text-white/60 border-t border-white/10">
          © Saora Sound – 2025
        </footer>
      </body>
    </html>
  );
}
