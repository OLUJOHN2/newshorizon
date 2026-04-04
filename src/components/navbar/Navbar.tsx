// components/navbar/Navbar.tsx
"use client";

import { Search, User } from "lucide-react";
import { motion } from "framer-motion";
import { useSearchStore } from "../../store/useSearchStore";
import NavLinks from "./NavLinks";
import SearchBar from "./Search";

export default function Navbar() {
  const { open, toggle } = useSearchStore();

  return (
    <nav className="w-full border-b bg-white px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      <div className="text-2xl font-bold">NewsHorizon</div>

      <NavLinks />

      <div className="flex items-center gap-4">
        {/* Search Icon */}
        <button onClick={toggle}>
          <Search className="w-5 h-5 text-gray-700" />
        </button>

        {/* User Icon */}
        <a href="features/auth/signin">
          <User className="w-6 h-6 text-gray-700" />
        </a>
      </div>

      {open && <SearchBar />}
    </nav>
  );
}
