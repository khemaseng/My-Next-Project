import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Overview panel for your app.</p>
      <Link
        href="/dashboard/users"
        className="inline-block bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-md"
      >
        Go to Users Page →
      </Link>
    </div>
  );
}