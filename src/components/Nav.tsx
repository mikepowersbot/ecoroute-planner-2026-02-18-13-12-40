import Link from "next/link";

export default function Nav() {
  return (
    <nav className="border-b">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          EcoRoute Planner
        </Link>
        <div className="flex gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link href="/how-it-works" className="text-sm font-medium hover:text-primary">
            How It Works
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-primary">
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}