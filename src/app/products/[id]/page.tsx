import { Suspense } from "react";
import ProductDetailDisplayComponent from "@/components/products/detail/ProductDetailDisplayComponent";
import ProductDetailUseSWRComponent from "@/components/products/detail/ProductDetailUseSWRComponent";

const getSingleProduct = (proId: number) =>
  fetch(`${process.env.DUMMY_BASE_URL}/products/${proId}`)
    .then((data) => data.json())
    .then((product) => product)
    .catch((error) => error);

async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  console.log(`ProductId = `, id);

  const singleProduct = getSingleProduct(Number(id));
  console.log(`==> single product: `, singleProduct);

  return (
    <ProductDetailDisplayComponent product={singleProduct} />

    // <ProductDetailUseSWRComponent proId={Number(id)}/>
  );
}
export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ProductDetail params={params} />
    </Suspense>
  );
}
