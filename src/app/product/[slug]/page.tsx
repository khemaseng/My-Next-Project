
import type { Metadata } from "next";
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
    images: ["/opengraph-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Details | M2 Store",
    description:
      "Explore product specifications, features, and availability on M2 Store.",
    images: ["/opengraph-image.png"],
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
      <p className="text-sm text-muted-foreground mb-4">
        Showing details for product ID:{" "}
        <span className="font-bold text-foreground">{slug}</span>
      </p>

      <ProductDetailComponent id={slug} />
    </main>
  );
}