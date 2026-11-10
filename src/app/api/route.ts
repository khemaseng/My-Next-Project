import { NextResponse } from "next/server";

export function GET(req: NextResponse) {
  const cookies = req.cookies.get("kevin-william");
  const person = {
    name: "kevin",
    age: 18,
    dob: "18-11-2007",
  };
  return NextResponse.json(cookies);
}
