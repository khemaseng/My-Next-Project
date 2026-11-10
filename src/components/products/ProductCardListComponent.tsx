"use client";
import { useEffect, useState } from "react";
import {
  ProductCardComponent,
  type ProductResponse,
} from "./ProductCardComponent";
import Link from "next/link";

export default function ProductCardListComponent() {
  // create state
  const [products, setProducts] = useState<ProductResponse[]>([]);

  // create effect for side-effect (api, web socket)
  useEffect(() => {
    // write logic of fetching api
    async function fetchData() {
      const respones = await fetch(`/api/products`); //call api route
      const data = await respones.json(); //convert from json to js object
      setProducts(data.products);
    }
    fetchData(); //calling fetchData function
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
// There are 3 dependencies of useEffect hook
// 1. empty depedencies
// 2. array dependencies [] : mount once but use forever
// 3. array list dependencies : [id], [uuid]
