 
 import { CardDemo } from "@/component/CardComponent"
 
     import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="p-8 max-w-2xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">សូមស្វាគមន៍មកកាន់ Next</h1>
      <p className="text-lg text-gray-700 leading-relaxed">ប្រើប្រាស់ Kantumruy Pro</p>
       <Button> Button </Button>
      <div className="flex justify-center my-6">
        <CardDemo />
      </div>

      <div className="pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-500">Welcome to About Page</p>
      </div>
    </div>
  );
}