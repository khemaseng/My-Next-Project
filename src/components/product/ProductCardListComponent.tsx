
"use client";

import Link from "next/link";
import useSWR from "swr";
import EcommerceProductCard, { ProductInfer } from "./ProductCardComponent";
import { LoadingComponent } from "../loading/LoadingComponent";

// Define fetcher function for SWR
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ProductCardListComponent() {
  const { data: products, error, isLoading } = useSWR(
    "https://fakestoreapi.com/products",
    fetcher
  );

  if (error) return <div className="p-4 text-center text-red-500">Failed to load</div>;
  if (isLoading) return <LoadingComponent />;

  return (
    <section className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 gap-4 justify-center mx-auto">
      {products?.map(({ image, title, description, price, id }: ProductInfer & { id: number }) => (
        <Link key={id} href={`/product/${id}`}>
          <EcommerceProductCard
            image={image}
            title={title}
            description={description}
            price={price}
          />
        </Link>
      ))}
    </section>
  );
}