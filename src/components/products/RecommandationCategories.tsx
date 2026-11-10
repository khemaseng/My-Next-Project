"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ProductCardComponent, ProductResponse } from "./ProductCardComponent";

type CategoryType = {
  category: string;
};

export default function RcommandationCategories({ category }: CategoryType) {
  // CHANGED: removed "async"
  // api route

  const [products, setProducts] = useState<ProductResponse[]>([]);
  useEffect(() => {
    async function fetchRecommandCategory() {
      const response = await fetch(
        `/api/products/category?category=${category}`,
      );
      const data = await response.json();
      console.log("===> API response: ", data);
      setProducts(Array.isArray(data) ? data : (data.products ?? []));
      // CHANGED: route already returns the array
    }
    // calling function
    fetchRecommandCategory();
  }, [category]); // CHANGED: reload when the category changes
  console.log("===> Product from Category: ", products);
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
      {" "}
      {/* CHANGED: was <> */}
      {products.map((pro, index) => (
        <Link
          key={pro.id ?? index}
          href={`/products/${pro.id}?category=${category}`}
        >
          {" "}
          {/* CHANGED: key added here */}
          <ProductCardComponent
            images={pro.images}
            title={pro.title}
            description={pro.description}
            price={pro.price}
          />
        </Link>
      ))}
    </div> // CHANGED: was </>
  );
}
