import { Suspense } from "react";
import ProductDetailDisplayComponent from "@/components/products/detail/ProductDetailDisplayComponent";
import RecommandationCategories from "@/components/products/RecommandationCategories";

export const instant = false;
const getSingleProduct = (proId: number) =>
  fetch(`${process.env.DUMMY_BASE_URL}/products/${proId}`)
    .then((data) => data.json())
    .then((product) => product)
    .catch((error) => error);
async function ProductDetail({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { id } = await params;
  const { category = "" } = await searchParams;
  const singleProduct = getSingleProduct(Number(id));
  return (
    <><ProductDetailDisplayComponent product={singleProduct} />{category && (<>
          <h1 className="mt-8 mb-4 text-xl font-semibold">
            Recommandation Products
          </h1>
          <RecommandationCategories category={category} />
        </>
      )}
    </>
  );
}
export default function ProductDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  return (
    <section>
      <Suspense fallback={<p className="p-8">Loading...</p>}>
        <ProductDetail params={params} searchParams={searchParams} />
      </Suspense>
    </section>
  );
}
