"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ProductCardComponent, ProductResponse } from "./ProductCardComponent";

type CategoryType = {
  category: string;
};
export default function RcommandationCategories({ category }: CategoryType) {
  const [products, setProducts] = useState<ProductResponse[]>([]);
  useEffect(() => {
    async function fetchRecommandCategory() {
      const response = await fetch(
        `/api/products/category?category=${category}`,
      );
      const data = await response.json();
      console.log("===> API response: ", data);
      setProducts(Array.isArray(data) ? data : (data.products ?? []));
    }
    fetchRecommandCategory();
  }, [category]);
  console.log("===> Product from Category: ", products);
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
      {" "}
      {products.map((pro, index) => (
        <Link
          key={pro.id ?? index}
          href={`/products/${pro.id}?category=${category}`}  >
          {" "}
          <ProductCardComponent
            images={pro.images}
            title={pro.title}
            description={pro.description}
            price={pro.price}
          />
        </Link>
      ))}
    </div> 
  );
}
