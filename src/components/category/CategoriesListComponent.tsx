
'use client'

import { use } from "react";
import CategoryComponent, { CategoryInter } from "./CategoriesComponent";

export default function CategoryListComponent({
  category,
}: {
  category: Promise<CategoryInter[]>;
}) {
  const categories = use(category);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-foreground">Categories</h1>
      
      {/* Grid container handles 1 column on mobile, 2 on tablet, up to 4 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map(({ name, image, id }) => (
          <CategoryComponent
            key={id}
            name={name}
            image={image}
            id={id}
          />
        ))}
      </div>
    </div>
  );
}