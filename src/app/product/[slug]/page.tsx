
import type { Metadata } from "next";
import Image from "next/image";
import { ProductDetailComponent } from "@/components/product/ProductDetailComponent";

// Ensure static prerendering doesn't break if API fails at build time
export const dynamic = "force-dynamic";

// Static SEO implementation
export const metadata: Metadata = {
  title: "Product Details",
  description:
    "Explore product specifications, features, and availability on M2 Store.",
  keywords: ["M2 store", "product details", "online shopping", "e-commerce"],
  openGraph: {
    title: "Product Details | M2 Store",
    description:
      "Explore product specifications, features, and availability on M2 Store.",
    images: ['/Opengraph.png'],
  },
};

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-background">
      {/* Featured Product Image */}
      <div className="flex justify-center mb-6">
        <Image
          src="/Opengraph.png"
          alt="Product Showcase"
          width={400}
          height={250}
          className="rounded-lg object-cover"
          priority
        />
      </div>

      <p className="text-sm text-muted-foreground mb-4">
        Showing details for product ID:{" "}
        <span className="font-bold text-foreground">{slug}</span>
      </p>

      <ProductDetailComponent id={slug} />
    </main>
  );
}