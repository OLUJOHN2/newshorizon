// components/navbar/Search.tsx
"use client";

import { motion } from "framer-motion";
import { useSearchStore } from "../../store/useSearchStore";

export default function SearchBar() {
  const { query, setQuery } = useSearchStore();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="absolute top-full left-0 w-full bg-white border-b shadow-md px-6 py-4"
    >
      <form action={`/search?query=${query}`}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search NewsHorizon..."
          className="w-full border px-4 py-2 rounded-md"
        />
      </form>
    </motion.div>
  );
}
