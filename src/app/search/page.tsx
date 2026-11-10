"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
export default function SearchPage() {
  const router = useRouter();
  const pathName = usePathname();
// useSearchParams
  const searchParams = useSearchParams();
  return (
    <div>
      PathName: {pathName}
      {/* button navigation using router */}
      <button className="border p-4 rounded" onClick={() => router.push("/")}>
        Home
      </button>
      {/* button forward route using router */}
      <button className="border p-4 rounded" onClick={() => router.forward()}>
        Next 
      </button>
      {/* button backward route using router */}
      <button className="border p-4 rounded" onClick={() => router.back()}>
        Back 
      </button>
      {/* searchparams */}
      Search Params : {searchParams.get("category")}
    </div>
  );
}
