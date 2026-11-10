import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{ id: number | string }>;
  },
) {
  const { id } = await params;
  console.log(`===> ProId: `, id);

  const response = await fetch(`${process.env.DUMMY_BASE_URL}/products/${id}`);
  const product = await response.json();
  console.log(`===> Product: `, product);

  return NextResponse.json(product);
}
