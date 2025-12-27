import Link from "next/link";
import GoogleSignInButton from "@/app/client/googleSignIn";

export default function Navbar() {
  return (
    <nav className="relative flex items-center px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black">
      
      {/* LEFT: Brand */}
      <div className="flex-1">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white"
        >
          Budget Tracker
        </Link>
      </div>

      {/* CENTER: Navigation */}
      <div className="absolute left-1/2 -translate-x-1/2 flex gap-6">
        <NavItem href="/dashboard" label="Dashboard" />
        <NavItem href="/budget/planning" label="Planning" />
        <NavItem href="/budget/tracker" label="Tracker" />
      </div>

      {/* RIGHT: Auth */}
      <div className="flex-1 flex justify-end">
        <GoogleSignInButton />
      </div>
    </nav>
  );
}

function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="relative px-3 py-1.5 text-sm font-medium text-zinc-700 dark:text-zinc-300
                 hover:text-blue-600 dark:hover:text-blue-400 transition
                 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0
                 after:bg-blue-600 dark:after:bg-blue-400
                 hover:after:w-full after:transition-all"
    >
      {label}
    </Link>
  );
}
