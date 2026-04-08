// src/pages/SearchPage.tsx
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { searchNews } from "../services/newsApi";
import type { NewsArticle } from "../services/newsApi";

function ResultCard({ article }: { article: NewsArticle }) {
  function handleClick() {
    window.open(article.url, "_blank", "noopener,noreferrer");
  }

  return (
    <div
      onClick={handleClick}
      className="group bg-white rounded-xl border overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=260&fit=crop";
          }}
        />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-bold bg-black text-white px-1.5 py-0.5 rounded">
            {article.sourceIcon}
          </span>
          <span className="text-xs text-gray-500 font-medium truncate">
            {article.source}
          </span>
          <span className="text-xs text-gray-400 ml-auto whitespace-nowrap">
            {article.time}
          </span>
        </div>
        <h3 className="font-bold text-gray-900 text-sm leading-snug mb-2 group-hover:text-red-600 transition-colors font-serif line-clamp-2">
          {article.title}
        </h3>
        <p className="text-xs text-gray-500 line-clamp-2 mb-3">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between text-xs">
          <span className="text-red-500 font-semibold">{article.category}</span>
          <span className="flex items-center gap-1 text-gray-400">
            <ExternalLink className="w-3 h-3" />
            Read more
          </span>
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  const [params] = useSearchParams();
  const query = params.get("query") ?? "";
  const [results, setResults] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!query.trim()) return;
    setLoading(true);
    setError(false);
    searchNews(query)
      .then((data) => {
        setResults(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [query]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
            Search Results
          </p>
          <h1 className="text-2xl font-bold text-gray-900 font-serif">
            {query ? "Results for: " + query : "Search NewsHorizon"}
          </h1>
        </div>

        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl border overflow-hidden animate-pulse"
              >
                <div className="h-48 bg-gray-200" />
                <div className="p-5 space-y-3">
                  <div className="h-3 bg-gray-200 rounded w-1/3" />
                  <div className="h-4 bg-gray-200 rounded" />
                  <div className="h-4 bg-gray-200 rounded w-5/6" />
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && error && (
          <div className="text-center py-20">
            <p className="font-semibold text-gray-600">Search unavailable</p>
            <p className="text-sm mt-1 text-gray-400">
              Please try again later.
            </p>
          </div>
        )}

        {!loading && !error && results.length === 0 && query.trim() !== "" && (
          <div className="text-center py-20">
            <p className="font-semibold text-gray-600">No results found</p>
            <p className="text-sm mt-1 text-gray-400">
              Try a different search term.
            </p>
          </div>
        )}

        {!loading && results.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((article) => (
              <ResultCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
