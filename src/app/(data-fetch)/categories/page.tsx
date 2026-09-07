
import CategoryListComponent from "@/components/category/CategoriesListComponent";

export default function CategoryPage() {
  const category = fetch('https://api.escuelajs.co/api/v1/categories')
    .then((res) => res.json());

  return (
    <div>
      <CategoryListComponent category={category} />
    </div>
  );
}