// src/pages/CategoryPage.tsx
import { useParams, Link } from "react-router-dom";
import { getArticlesByCategory, categories } from "../data/categoryData";
import { Clock, ChevronRight } from "lucide-react";

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
  const articles = getArticlesByCategory(category);
  const accent = categoryColors[category] ?? "bg-gray-700";
  const description = categoryDescriptions[category] ?? "";
  const label = category.charAt(0).toUpperCase() + category.slice(1);
  const [featured, ...rest] = articles;

  if (!categories.includes(category)) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        <div className="text-center">
          <p className="text-4xl font-bold mb-2">404</p>
          <p className="text-lg mb-4">Category not found.</p>
          <Link
            to="/"
            className="text-red-500 hover:underline no-underline font-semibold"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Category Hero Banner */}
      <div className={`${accent} text-white px-6 md:px-16 py-10`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-white/70 mb-3">
            <Link to="/" className="hover:text-white no-underline transition">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">{label}</span>
          </div>
          <h1 className="text-4xl font-bold font-serif mb-2">{label}</h1>
          <p className="text-white/80 text-sm max-w-lg">{description}</p>
          <p className="text-white/60 text-xs mt-3">
            {articles.length} articles
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-16 py-10">
        {articles.length === 0 ? (
          <div className="text-center text-gray-400 py-20">
            <p className="text-lg font-semibold">No articles yet in {label}.</p>
            <p className="text-sm mt-1">Check back soon.</p>
          </div>
        ) : (
          <>
            {/* Featured Article */}
            {featured && (
              <div className="mb-10">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                  Featured
                </p>
                <Link
                  to={`/article/${featured.id}`}
                  className="group bg-white rounded-2xl overflow-hidden border hover:shadow-md transition-shadow flex flex-col md:flex-row cursor-pointer no-underline block"
                >
                  <div className="md:w-1/2 h-64 md:h-auto overflow-hidden flex-shrink-0">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                    <span
                      className={`inline-block text-white text-xs font-bold px-2.5 py-1 rounded-full mb-3 w-fit ${accent}`}
                    >
                      {label}
                    </span>
                    <h2 className="text-2xl font-bold text-gray-900 leading-snug mb-3 font-serif group-hover:text-red-600 transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-sm text-gray-500 mb-5 line-clamp-3">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center gap-3 mt-auto">
                      <img
                        src={featured.authorAvatar}
                        alt={featured.author}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <p className="text-sm font-semibold text-gray-700">
                          {featured.author}
                        </p>
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                          <Clock className="w-3 h-3" />
                          <span>
                            {featured.date} • {featured.readTime}
                          </span>
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
                      key={article.id}
                      to={`/article/${article.id}`}
                      className="group bg-white rounded-xl overflow-hidden border hover:shadow-md transition-shadow cursor-pointer flex flex-col no-underline block"
                    >
                      <div className="h-48 overflow-hidden flex-shrink-0">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                          <img
                            src={article.authorAvatar}
                            alt={article.author}
                            className="w-6 h-6 rounded-full flex-shrink-0"
                          />
                          <div className="min-w-0">
                            <p className="text-xs font-semibold text-gray-700 truncate">
                              {article.author}
                            </p>
                            <div className="flex items-center gap-1 text-xs text-gray-400">
                              <Clock className="w-3 h-3 flex-shrink-0" />
                              <span className="truncate">
                                {article.date} • {article.readTime}
                              </span>
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
