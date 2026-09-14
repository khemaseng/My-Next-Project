
import CategoryListComponent from "@/components/category/CategoriesListComponent";

export default async function CategoryPage() {
  const res = await fetch("https://api.escuelajs.co/api/v1/categories");
  const category = await res.json();

  return (
    <div>
      <CategoryListComponent category={category} />
    </div>
  );
}