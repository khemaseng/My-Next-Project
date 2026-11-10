import { NextResponse } from "next/server";

export function GET(req: NextResponse) {
  const cookies = req.cookies.get("koko-secret");
  const person = {
    name: "yaya",
    age: 18,
    dob: "11-08-2005",
  };
  return NextResponse.json(cookies);
}
