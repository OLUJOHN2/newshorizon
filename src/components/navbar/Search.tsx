// src/components/navbar/Search.tsx
import { useSearchStore } from "../../store/useSearchStore";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const { query, setQuery, toggle } = useSearchStore();
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    toggle(); // close the search bar
    navigate(`/search?query=${encodeURIComponent(query.trim())}`);
    setQuery("");
  }

  return (
    <div className="w-full bg-[#1a1a1a] border-t border-gray-800 shadow-xl px-6 py-4">
      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search NewsHorizon..."
          className="w-full bg-[#2a2a2a] border border-gray-700 text-white placeholder-gray-500 px-4 py-2.5 rounded-md focus:outline-none focus:border-red-500"
        />
      </form>
    </div>
  );
}
