
import type { Metadata } from "next";
import Image from "next/image";
import { CardDemo } from "@/components/CardComponent";
import { Button } from "@/components/ui/button";

// Static SEO implementation
export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about M2, our core mission, values, and the team driving our platform.",
  keywords: ["M2", "about us", "e-commerce", "company info"],
  openGraph: {
    title: "About Us | M2",
    description:
      "Learn more about M2, our core mission, values, and the team driving our platform.",
    images: ['/Opengraph.png'],
  },
};

export default function AboutPage() {
  return (
    <div className="p-8 max-w-2xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">សូមស្វាគមន៍មកកាន់ Next</h1>
      <p className="text-lg text-gray-700 leading-relaxed">
        ប្រើប្រាស់ Kantumruy Pro
      </p>

      <Button> Button </Button>

      {/* Imported OpenGraph image from public/Opengraph.png */}
      <div className="flex justify-center my-4">
        <Image
          src="/Opengraph.png"
          alt="M2 About Banner"
          width={400}
          height={250}
          className="rounded-lg object-cover"
        />
      </div>

      <div className="flex justify-center my-6">
        <CardDemo />
      </div>

      <div className="pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-500">Welcome to About Page</p>
      </div>
    </div>
  );
}