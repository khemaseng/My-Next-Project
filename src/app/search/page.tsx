"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
export default function SearchPage(){
    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams();
    return(
  <div> PathName: {pathName}
    <button className="border p-4 rounded" onClick={() => router.push('/')}>
     HomePage
    </button>
    <button className="border p-4 rounded" onClick={() => router.forward()}>
     Next
    </button>
    <button className="border p-4 rounded" onClick={() => router.back()}>
     Back 
   </button>
   
     Search Params : {searchParams.get('category')}
  </div>
    )
  }