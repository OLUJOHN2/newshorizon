// src/components/navbar/Navbar.tsx
import { Search, User } from "lucide-react";
import { useSearchStore } from "../../store/useSearchStore";
import NavLinks from "./NavLinks";
import SearchBar from "./Search";

export default function Navbar() {
  const { open, toggle } = useSearchStore();

  return (
    <nav className="w-full border-b bg-[#111] px-6 py-4 flex items-center justify-between sticky top-0 z-50 relative">
      <a
        href="/"
        className="text-2xl font-bold text-white tracking-tight font-serif no-underline"
      >
        NewsHub
      </a>

      <NavLinks />

      <div className="flex items-center gap-4">
        <button
          onClick={toggle}
          className="text-gray-300 hover:text-white transition"
        >
          <Search className="w-5 h-5" />
        </button>

        {/* FIXED: was href="features/auth/signin" (relative, broken) → now /auth/signin (absolute) */}
        <a
          href="/auth/signin"
          className="text-gray-300 hover:text-white transition"
        >
          <User className="w-6 h-6" />
        </a>
      </div>

      {open && <SearchBar />}
    </nav>
  );
}
