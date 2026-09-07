import { ProductDetailComponent } from "@/components/product/ProductDetailComponent";
export default async function ProductDetailParams({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-background">
      <p className="text-sm text-muted-foreground mb-4">
        Showing details for product ID: <span className="font-bold text-foreground">{slug}</span>
      </p>

      {/* Renders your product detail component */}
      <ProductDetailComponent id={slug} />
    </main>
  );
}