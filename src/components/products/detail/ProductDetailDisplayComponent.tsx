"use client";

import { use } from "react";
import { ProductResponse } from "../ProductCardComponent";
import { ProductCardDetailComponent } from "./ProductDetailComponent";

export default function ProductDetailDisplayComponent({
  product,
}: {
  product: Promise<ProductResponse>;
}) {
  const { images, title, description, price } = use(product);
  // console.log("Images ", images)
  return (
    <ProductCardDetailComponent
      num={2}
      images={images}
      title={title}
      description={description}
      price={price}
    />
  );
}
