 
 import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[70vh] gap-6">
      {/* Sidebar Navigation */}
      <aside className="w-48 bg-slate-100 p-4 rounded-lg">
        <h3 className="font-bold text-gray-700 mb-3">Dashboard</h3>
        <nav className="flex flex-col gap-2">
          <Link href="/dashboard" className="text-blue-600 hover:underline">
            Overview
          </Link>
          <Link href="/dashboard/users" className="text-blue-600 hover:underline">
            Users
          </Link>
          <Link href="/dashboard/product" className="text-blue-600 hover:underline">
            Products
          </Link>
        </nav>
      </aside>

      {/* Main Dashboard Content */}
      <div className="flex-1 p-2">{children}</div>
    </div>
  );
}