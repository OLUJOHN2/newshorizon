// src/pages/CategoryPage.tsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Clock, ChevronRight } from "lucide-react";
import {
  getArticlesByCategory,
  categories as staticCategories,
} from "../data/categoryData";
import { fetchNewsByCategory } from "../services/newsApi";
import type { NewsArticle } from "../services/newsApi";

const categoryColors: Record<string, string> = {
  world: "bg-blue-600",
  politics: "bg-red-600",
  business: "bg-emerald-600",
  tech: "bg-violet-600",
  health: "bg-pink-600",
  entertainment: "bg-orange-500",
  sports: "bg-yellow-500",
  lifestyle: "bg-teal-600",
};

const categoryDescriptions: Record<string, string> = {
  world:
    "Global news, international affairs and stories from around the world.",
  politics: "Political analysis, policy news and government updates.",
  business: "Markets, economy, startups and the world of finance.",
  tech: "Technology, science, innovation and the digital world.",
  health: "Medical research, wellness, mental health and public health news.",
  entertainment: "Film, music, culture, food and the arts.",
  sports: "Football, motorsport, basketball and all things sport.",
  lifestyle: "Living, travel, home, fashion and personal development.",
};

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = slug?.toLowerCase() ?? "";
  const accent = categoryColors[category] ?? "bg-gray-700";
  const description = categoryDescriptions[category] ?? "";
  const label = category.charAt(0).toUpperCase() + category.slice(1);

  const [liveArticles, setLiveArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  // Static articles as immediate fallback
  const staticArticles = getArticlesByCategory(category);

  useEffect(() => {
    setLoading(true);
    setLiveArticles([]);
    fetchNewsByCategory(category, 9).then((data) => {
      setLiveArticles(data);
      setLoading(false);
    });
  }, [category]);

  if (!staticCategories.includes(category)) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        <div className="text-center">
          <p className="text-4xl font-bold mb-2">404</p>
          <p className="text-lg mb-4">Category not found.</p>
          <Link
            to="/"
            className="text-red-500 hover:underline no-underline font-semibold"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  // Use live articles when loaded, fallback to static
  const articles =
    liveArticles.length > 0
      ? liveArticles
      : staticArticles.map(
          (a) =>
            ({
              id: String(a.id),
              uuid: String(a.id),
              title: a.title,
              excerpt: a.excerpt,
              content: a.content,
              image: a.image,
              source: "NewsHorizon",
              sourceIcon: "NH",
              time: a.date,
              category: a.category,
              url: `/article/${a.id}`,
              publishedAt: a.date,
            }) as NewsArticle,
        );

  const [featured, ...rest] = articles;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero banner */}
      <div className={`${accent} text-white px-4 md:px-16 py-10`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-white/70 mb-3">
            <Link to="/" className="hover:text-white no-underline transition">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">{label}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-serif mb-2">
            {label}
          </h1>
          <p className="text-white/80 text-sm max-w-lg">{description}</p>
          <p className="text-white/60 text-xs mt-3">
            {loading ? "Loading articles…" : `${articles.length} articles`}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-16 py-10">
        {loading && liveArticles.length === 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
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

        {articles.length > 0 && (
          <>
            {/* Featured */}
            {featured && (
              <div className="mb-10">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                  Featured
                </p>
                <Link
                  to={`/article/${featured.uuid}`}
                  className="group bg-white rounded-2xl overflow-hidden border hover:shadow-md transition-shadow flex-col md:flex-row no-underline block"
                >
                  <div className="md:w-1/2 h-64 md:h-auto overflow-hidden shrink-0">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop";
                      }}
                    />
                  </div>
                  <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                    <span
                      className={`inline-block text-white text-xs font-bold px-2.5 py-1 rounded-full mb-3 w-fit ${accent}`}
                    >
                      {label}
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug mb-3 font-serif group-hover:text-red-600 transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-sm text-gray-500 mb-5 line-clamp-3">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center gap-3 mt-auto">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">
                        {featured.sourceIcon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-700">
                          {featured.source}
                        </p>
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                          <Clock className="w-3 h-3" />
                          <span>{featured.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* Grid */}
            {rest.length > 0 && (
              <>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                  Latest
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rest.map((article) => (
                    <Link
                      key={article.uuid}
                      to={`/article/${article.uuid}`}
                      className="group bg-white rounded-xl overflow-hidden border hover:shadow-md transition-shadow flex-col no-underline block"
                    >
                      <div className="h-48 overflow-hidden shrink-0">
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
                      <div className="p-5 flex flex-col flex-1">
                        <h3 className="font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-red-600 transition-colors font-serif line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-1">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center gap-2 mt-auto">
                          <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-600 shrink-0">
                            {article.sourceIcon}
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs font-semibold text-gray-700 truncate">
                              {article.source}
                            </p>
                            <div className="flex items-center gap-1 text-xs text-gray-400">
                              <Clock className="w-3 h-3 shrink-0" />
                              <span className="truncate">{article.time}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
