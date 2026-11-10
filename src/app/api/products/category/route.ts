import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) { // CHANGED: removed the { searchParams } argument
  const category = req.nextUrl.searchParams.get("category") ?? ""; // CHANGED

  console.log("===> Category Value: ", category);

  const response = await fetch(
    `${process.env.DUMMY_BASE_URL}/products/category/${category}`,
  );
  const product = await response.json();
  console.log(`===> Product category: `, product);

  return NextResponse.json(product.products);
}