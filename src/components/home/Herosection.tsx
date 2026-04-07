// src/components/home/HeroSection.tsx
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const breakingNews = [
  "Ukrainian troops saw Russian soldiers swept away",
  "Philadelphia under 'code red' alert as millions from US East Coast",
  "Turkish lira crashes as markets react to rate decision",
];

const sideArticles = [
  {
    id: 10,
    source: "CNN",
    sourceBg: "bg-red-600",
    time: "1 hours ago",
    title: "CNN Chairman and CEO Chris Licht is out",
    category: "Business",
    readTime: "2 min read",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=80&h=60&fit=crop",
  },
  {
    id: 2,
    source: "BBC",
    sourceBg: "bg-black",
    time: "1 hours ago",
    title: "What Turkey's new cabinet says about where country is headed",
    category: "World",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=80&h=60&fit=crop",
  },
  {
    id: 17,
    source: "BBC",
    sourceBg: "bg-black",
    time: "2 hours ago",
    title: "This country has the best wines in the world for 2023",
    category: "Food & Drink",
    readTime: "3 min read",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=80&h=60&fit=crop",
  },
  {
    id: 13,
    source: "CNN",
    sourceBg: "bg-red-600",
    time: "1 hours ago",
    title:
      "The double-decker airplane seat is back. Here's what it looks like now",
    category: "World",
    readTime: "2 min read",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=80&h=60&fit=crop",
  },
];

export default function HeroSection() {
  return (
    <section className="w-full">
      {/* Breaking News Ticker */}
      <div className="bg-white border-b px-6 py-2 flex items-center gap-3 text-sm overflow-hidden">
        <span className="text-red-600 font-bold whitespace-nowrap">
          News Update:
        </span>
        <div className="flex gap-2 text-gray-700 overflow-hidden">
          {breakingNews.map((item, i) => (
            <span key={i} className="whitespace-nowrap">
              {item}
              {i < breakingNews.length - 1 && (
                <span className="mx-3 text-red-500">•</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Hero Body */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 bg-white border-b">
        {/* Main Story — article id 1 */}
        <Link
          to="/article/1"
          className="lg:col-span-2 relative overflow-hidden group no-underline block"
        >
          <div className="relative h-[420px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1547683905-f686c993aae5?w=900&h=500&fit=crop"
              alt="Flood damage"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 lg:right-auto lg:w-[55%] bg-white p-6 m-4 shadow-lg">
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <span className="w-5 h-5 rounded-full bg-black flex items-center justify-center text-white text-[9px] font-bold">
                  B
                </span>
                <span className="font-medium text-gray-700">BBC News</span>
                <span>•</span>
                <span>10 mins ago</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-3 font-serif group-hover:text-red-600 transition-colors">
                People spend night on roofs and in trees after Ukraine dam
                breach
              </h1>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                Hundreds of thousands of people have been left without access to
                normal drinking water since the breach of the Kakhovka dam.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Aug 03, 2023</span>
                <span className="text-xs font-semibold text-red-500">
                  Read More →
                </span>
              </div>
              <div className="flex gap-2 mt-3">
                <button
                  onClick={(e) => e.preventDefault()}
                  className="p-1 border rounded hover:bg-gray-100 transition"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={(e) => e.preventDefault()}
                  className="p-1 border rounded hover:bg-gray-100 transition"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </Link>

        {/* Side Articles */}
        <div className="border-l divide-y">
          {sideArticles.map((article) => (
            <Link
              key={article.id}
              to={`/article/${article.id}`}
              className="flex gap-3 p-4 hover:bg-gray-50 transition cursor-pointer no-underline"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-20 h-16 object-cover rounded flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-1">
                  <span
                    className={`text-white text-[9px] font-bold px-1.5 py-0.5 rounded ${article.sourceBg}`}
                  >
                    {article.source}
                  </span>
                  <span className="text-xs text-gray-400">{article.time}</span>
                </div>
                <p className="text-sm font-semibold text-gray-800 leading-snug line-clamp-2 hover:text-red-600 transition-colors">
                  {article.title}
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-xs text-red-500 font-medium">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400">
                    • {article.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
