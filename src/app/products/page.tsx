import ProductCardListComponents from "@/components/products/ProductCardListComponent";
import ProductCardListUseHookComponent from "@/components/products/ProductCardListUseHookComponent";
import type { ProductResponse } from "@/components/products/ProductCardComponent";

const sampleProducts: ProductResponse[] = [
  {
    id: 1,
    title: "Vexon CoreStep '08 LX",
    images: [
      "https://cdn.shadcnblocks.com/shadcnblocks/block/ecommerce/clothes/joshua-diaz-ETNoDLl8yFE-unsplash-1.jpg",
    ],
    description:
      "Everyday comfort meets bold tri-color style in this performance-driven design.",
    price: 399,
  },
  {
    id: 2,
    title: "AeroPulse Runner Pro",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&auto=format&fit=crop&q=80",
    ],
    description:
      "Ultra-responsive cushioning with breathable engineered mesh for active runners.",
    price: 220,
  },
  {
    id: 3,
    title: "Classic Street Trainer",
    images: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=700&auto=format&fit=crop&q=80",
    ],
    description:
      "Minimalist silhouette built with durable leather and a cushioned rubber sole.",
    price: 119,
  },
];
export default function ProductPage() {
  return (
    <ProductCardListComponents />
  );
}
