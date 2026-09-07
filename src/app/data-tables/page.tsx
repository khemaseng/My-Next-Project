
import { columns, Product } from "./columns"
import { DataTable } from "./data-tables"

async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products")

  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }

  return res.json()
}

export default async function DemoPage() {
  const data = await getProducts()

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Product Catalog</h1>
      <DataTable columns={columns} data={data} />
    </div>
  )
}