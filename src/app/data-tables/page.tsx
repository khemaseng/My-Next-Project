
import { columns, Product } from "./columns";
import { DataTable } from "./data-tables";

// Force dynamic rendering to skip static prerendering at build time
export const dynamic = "force-dynamic";

async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Failed to fetch products:", res.status);
      return [];
    }

    return await res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
}

export default async function DemoPage() {
  const data = await getProducts();

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Product Catalog</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}