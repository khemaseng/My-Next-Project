"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchPage() {
  // usePathname - catch route segment after APP_URL (http://localhost:3000/)
  // eg. http://localhost:3000/products , which pathname? pathName = products, useRouter (hard navigation)
  const router = useRouter();
  const pathName = usePathname();
  // useSearchParams
  const searchParams = useSearchParams();
  return (
    <div>
      PathName: {pathName}
      {/* button navigation using router */}
      <button className="border p-4 rounded" onClick={() => router.push("/")}>
        HomePage
      </button>
      {/* button forward route using router */}
      <button className="border p-4 rounded" onClick={() => router.forward()}>
        Next Page
      </button>
      {/* button backward route using router */}
      <button className="border p-4 rounded" onClick={() => router.back()}>
        Back From Previous Page
      </button>
      {/* searchparams */}
      Search Params : {searchParams.get("category")}
    </div>
  );
}
