"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function RecommendationCategories() {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_DUMMY_BASE_URL}/products/category-list`,
      );
      const data = await res.json();
      setCategories(data.slice(0, 8)); // show the first 8 only
    }
    fetchCategories();
  }, []);

  return (
    <section className="container mx-auto px-8 py-4">
      <h2 className="mb-4 text-xl font-semibold">Recommended Categories</h2>
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/search?category=${category}`}
            className={cn(
              "rounded-full border px-4 py-2 text-sm capitalize",
              "transition-colors hover:bg-accent",
            )}
          >
            {category.replaceAll("-", " ")}
          </Link>
        ))}
      </div>
    </section>
  );
}
