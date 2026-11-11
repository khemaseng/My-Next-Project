"use client";
import { useEffect, useState } from "react";
import { ProductCardComponent, type ProductResponse, } from "./ProductCardComponent";
import Link from "next/link";

export default function ProductCardListComponent() {
  const [products, setProducts] = useState<ProductResponse[]>([]);
  useEffect(() => {
    async function fetchData() {
      const respones = await fetch(`/api/products`); 
      const data = await respones.json(); 
      setProducts(data.products);
    }
    fetchData(); 
  }, []);
  return (
    <section className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-8 gap-8 mx-auto">
      {products?.map(({ id, images, title, description, price }, index) => (
        <Link key={id ?? index} href={`/products/${id}`}>
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
