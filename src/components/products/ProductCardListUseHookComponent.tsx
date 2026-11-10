"use client";
import { use } from "react";
import { ProductCardComponent, ProductResponse } from "./ProductCardComponent";
import Link from "next/link";

export default function ProductCardListUseHookComponent({
  product,
}: {
  product: Promise<ProductResponse[]>;
}) {
  const products = use(product);
  console.log(`===> All Product Status: `, products);
  return (
    <section className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-8 gap-8 mx-auto">
      {products?.map(({ images, title, description, price, id }) => (
        <Link href={`/products/${id}`} key={id}>
          <ProductCardComponent
            images={images}
            title={title}
            description={description}
            price={price}
          />
        </Link>
      ))}
    </section>
  );
}
