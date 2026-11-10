import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch(`${process.env.DUMMY_BASE_URL}/products`);

  const product = await response.json();
  console.log(`===> Product: `, product);
  return NextResponse.json(product);
}
