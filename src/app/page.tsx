import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home | M2 Store",
  description:
    "Welcome to M2. Explore our products, documentation, and starter resources.",
  openGraph: {
    title: "Home | M2 Store",
    description:
      "Welcome to M2. Explore our products, documentation, and starter resources.",
    url: "/",
    siteName: "M2 Store",
    images: [
      {
        url: "/Opengraph.png",
        width: 1200,
        height: 630,
        alt: "M2 Store Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home | M2 Store",
    description:
      "Welcome to M2. Explore our products, documentation, and starter resources.",
    images: ["/opengraph-image.png"],
  },
};

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-140px)] flex-col items-center justify-center bg-background py-12 px-6">
      <main className="flex max-w-4xl flex-col items-center text-center space-y-8">
        <div className="flex justify-center">
          <Image
            className="dark:invert h-8 w-auto"
            src="/next.svg"
            alt="Next.js logo"
            width={120}
            height={24}
            priority
          />
        </div>

        <div className="space-y-4 max-w-xl">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Welcome to <span className="text-primary">OUR STORE</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Get started by exploring our dynamic product catalog, documentation,
            or starter templates built with Next.js and Tailwind CSS.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center pt-2">
          <Link
            className="flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-6 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            href="/product"
          >
            Browse Products
          </Link>
          <a
            className="flex h-11 items-center justify-center rounded-md border border-input bg-background px-6 font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}