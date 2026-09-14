
'use client'

import CategoryComponent, { CategoryInter } from "./CategoriesComponent";

interface CategoryListProps {
  category: CategoryInter[];
}

export default function CategoryListComponent({ category }: CategoryListProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-foreground">Categories</h1>

      {/* Responsive grid matching product layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {category?.map(({ name, image, id }) => (
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