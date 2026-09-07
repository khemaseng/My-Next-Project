
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export interface CategoryInter {
  name: string;
  image: string;
  id: number;
}

const CategoryComponent = ({ name, image, id }: CategoryInter) => {
  return (
    <a href={`/category/${id}`} className="group block">
      <Card className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-border shadow-sm transition-shadow hover:shadow-md">
        {/* Product Image without grayscale filter */}
        <Image
          src={image || "/placeholder.jpg"}
          alt={name || "Category image"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Dark gradient at the bottom so white text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Category Title */}
        <CardContent className="absolute bottom-0 inset-x-0 p-4">
          <p className="text-lg font-semibold text-white drop-shadow-sm">{name}</p>
        </CardContent>
      </Card>
    </a>
  );
};

export default CategoryComponent;