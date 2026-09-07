
import { ProductDetailComponent } from "@/components/product/ProductDetailComponent";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // 1. Unwrap params properly
  const { slug } = await params;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-background">
      <p className="text-sm text-muted-foreground mb-4">
        Showing details for product ID: <span className="font-bold text-foreground">{slug}</span>
      </p>

      {/* 2. Pass the ID prop directly to the Client Component */}
      <ProductDetailComponent id={slug} />
    </main>
  );
}