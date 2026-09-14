
import type { Metadata } from "next";
import { Geist_Mono, Kantumruy_Pro } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const kantumruy = Kantumruy_Pro({
  variable: "--font-kantumruy-pro",
  subsets: ["latin", "khmer"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Resolve the site URL with sane fallbacks — works locally AND on every Vercel deploy
// without needing to manually set an env var per-project.
const getMetadataBase = (): URL => {
  const url =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL &&
      `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
    (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
    "http://localhost:3000";

  try {
    return new URL(url);
  } catch {
    return new URL("http://localhost:3000");
  }
};

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    template: "%s | M2",
    default: "M2 Store",
  },
  description:
    "Explore product specifications, features, and availability on M2 Store.",
  keywords: ["M2 store", "product details", "online shopping", "e-commerce"],
  openGraph: {
    title: "M2 Store",
    description:
      "Explore product specifications, features, and availability on M2 Store.",
    images: [
      {
        url: "/Opengraph.png",
        width: 1200,
        height: 630,
        alt: "M2 Store",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M2 Store",
    images: ["/Opengraph.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${kantumruy.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Inline Navbar */}
        <header className="bg-slate-900 text-white p-4">
          <nav className="max-w-6xl mx-auto flex gap-6 items-center">
            <span className="font-bold text-lg">My App</span>
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/dashboard" className="hover:underline">
              Dashboard
            </Link>
          </nav>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 max-w-6xl w-full mx-auto p-4">{children}</main>

        {/* Inline Footer */}
        <footer className="bg-slate-100 border-t p-4 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} My App. All rights reserved.
        </footer>
      </body>
    </html>
  );
}