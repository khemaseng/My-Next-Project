import { Suspense } from "react";
import ProductDetailUseSWRComponent from "@/components/products/detail/ProductDetailUseSWRComponent";
import ModalWrapper from "@/components/products/detail/ModalWrapper";

async function ModalProductContent({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ProductDetailUseSWRComponent proId={Number(id)} />;
}
export default function ModalProduct({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <ModalWrapper>
      <Suspense fallback={<p className="p-4">Loading......</p>}>
        <ModalProductContent params={params} />
      </Suspense>
    </ModalWrapper>
  );
}
