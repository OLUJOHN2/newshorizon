// src/components/navbar/Search.tsx
import { useSearchStore } from "../../store/useSearchStore";

export default function SearchBar() {
  const { query, setQuery } = useSearchStore();

  return (
    <div className="absolute top-full left-0 w-full bg-[#1a1a1a] border-b border-gray-800 shadow-xl px-6 py-4 z-50">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          window.location.href = `/search?query=${query}`;
        }}
      >
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search NewsHub..."
          className="w-full bg-[#2a2a2a] border border-gray-700 text-white placeholder-gray-500 px-4 py-2 rounded-md focus:outline-none focus:border-red-500"
        />
      </form>
    </div>
  );
}
