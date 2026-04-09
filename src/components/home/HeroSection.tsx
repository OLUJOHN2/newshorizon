// src/components/home/HeroSection.tsx
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  fetchBreakingHeadlines,
  fetchHeroSideArticles,
} from "../../services/newsApi";

const STATIC_SIDE_ARTICLES = [
  {
    id: "s1",
    source: "CNN",
    sourceBg: "bg-red-600",
    time: "1 hour ago",
    title: "CNN Chairman and CEO Chris Licht is out",
    category: "Business",
    readTime: "2 min read",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=80&h=60&fit=crop",
    url: "/article/10",
  },
  {
    id: "s2",
    source: "BBC",
    sourceBg: "bg-black",
    time: "1 hour ago",
    title: "What Turkey's new cabinet says about where country is headed",
    category: "World",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=80&h=60&fit=crop",
    url: "/article/2",
  },
  // {
  //   id: "s3",
  //   source: "BBC",
  //   sourceBg: "bg-black",
  //   time: "2 hours ago",
  //   title: "This country has the best wines in the world for 2023",
  //   category: "Food & Drink",
  //   readTime: "3 min read",
  //   image:
  //     "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=80&h=60&fit=crop",
  //   url: "/article/17",
  // },
  {
    id: "s4",
    source: "CNN",
    sourceBg: "bg-red-600",
    time: "1 hour ago",
    title: "The double-decker airplane seat is back",
    category: "World",
    readTime: "2 min read",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=80&h=60&fit=crop",
    url: "/article/13",
  },
];

export default function HeroSection() {
  const [ticker, setTicker] = useState<string[]>([
    "Ukrainian troops saw Russian soldiers swept away",
    "Philadelphia under 'code red' alert as millions from US East Coast brace for heat wave",
    "Turkish lira crashes as markets react to rate decision",
  ]);
  const [sideArticles, setSideArticles] = useState(STATIC_SIDE_ARTICLES);
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    // Fetch breaking headlines for ticker
    fetchBreakingHeadlines().then((headlines: any) => {
      if (headlines.length > 0) setTicker(headlines);
    });

    // Fetch side articles
    fetchHeroSideArticles().then((articles: any) => {
      if (articles.length >= 3) {
        setSideArticles(
          articles.slice(0, 4).map((a: any) => ({
            id: a.id,
            source: a.source,
            sourceBg: "bg-gray-700",
            time: a.time,
            title: a.title,
            category: a.category,
            readTime: "2 min read",
            image: a.image,
            url: `/article/${a.uuid}`,
          })),
        );
      }
    });

    // Refresh every 5 minutes
    const interval = setInterval(
      () => {
        fetchBreakingHeadlines().then((h: any) => {
          if (h.length > 0) setTicker(h);
        });
        fetchHeroSideArticles().then((articles: any) => {
          if (articles.length >= 3) {
            setSideArticles(
              articles.slice(0, 4).map((a: any) => ({
                id: a.id,
                source: a.source,
                sourceBg: "bg-gray-700",
                time: a.time,
                title: a.title,
                category: a.category,
                readTime: "2 min read",
                image: a.image,
                url: `/article/${a.uuid}`,
              })),
            );
          }
        });
      },
      5 * 60 * 1000,
    );

    return () => clearInterval(interval);
  }, []);

  const heroArticles = [
    {
      image:
        "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=900&h=500&fit=crop",
      source: "BBC News",
      time: "10 mins ago",
      title:
        "People spend night on roofs and in trees after Ukraine dam breach",
      excerpt:
        "Hundreds of thousands of people have been left without access to normal drinking water since the breach of the Kakhovka dam.",
      date: "Aug 03, 2023",
      link: "/article/1",
    },
    ...sideArticles.slice(0, 2).map((a) => ({
      image: a.image,
      source: a.source,
      time: a.time,
      title: a.title,
      excerpt: "",
      date: "",
      link: a.url,
    })),
  ];

  const hero = heroArticles[heroIndex];

  return (
    <section className="w-full">
      {/* Breaking News Ticker */}
      <div className="bg-white border-b px-4 md:px-6 py-2 flex items-center gap-3 text-sm overflow-hidden">
        <span className="text-red-600 font-bold whitespace-nowrap shrink-0">
          News Update:
        </span>
        <div className="overflow-hidden">
          <div className="flex gap-2 text-gray-700 overflow-x-auto scrollbar-none whitespace-nowrap">
            {ticker.map((item, i) => (
              <span key={i} className="inline whitespace-nowrap">
                {item}
                {i < ticker.length - 1 && (
                  <span className="mx-3 text-red-500">•</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Body */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 bg-white border-b overflow-hidden">
        {/* Main Story */}
        <div className="lg:col-span-2 relative overflow-hidden group">
          <Link to={hero.link} className="no-underline block">
            <div className="relative w-full aspect-video md:aspect-auto md:h-96 lg:h-[420px] overflow-hidden">
              <img
                src={hero.image}
                alt={hero.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=900&h=500&fit=crop";
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 lg:right-auto lg:w-[60%] bg-white p-3 md:p-6 m-2 md:m-4 shadow-lg rounded">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                  <span className="w-5 h-5 rounded-full bg-black flex items-center justify-center text-white text-[9px] font-bold">
                    {hero.source[0]}
                  </span>
                  <span className="font-medium text-gray-700">{hero.source}</span>
                  <span>•</span>
                  <span className="hidden sm:inline">{hero.time}</span>
                </div>
                <h1 className="text-base md:text-2xl font-bold text-gray-900 leading-tight mb-2 md:mb-3 font-serif line-clamp-2">
                  {hero.title}
                </h1>
                {hero.excerpt && (
                  <p className="text-xs md:text-sm text-gray-600 mb-3 line-clamp-2 hidden md:block">
                    {hero.excerpt}
                  </p>
                )}
                <div className="flex items-center justify-between gap-2">
                  {hero.date && (
                    <span className="text-xs text-gray-500 hidden sm:inline">{hero.date}</span>
                  )}
                  <span className="text-xs font-semibold text-red-500 hover:text-red-700 transition-colors ml-auto">
                    Read More →
                  </span>
                </div>
              </div>
            </div>
          </Link>
          <div className="flex gap-2 p-3 md:p-4">
            <button
              onClick={() =>
                setHeroIndex(
                  (i) =>
                    (i - 1 + heroArticles.length) % heroArticles.length,
                )
              }
              className="p-1.5 border rounded hover:bg-gray-100 transition"
              aria-label="Previous article"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() =>
                setHeroIndex((i) => (i + 1) % heroArticles.length)
              }
              className="p-1.5 border rounded hover:bg-gray-100 transition"
              aria-label="Next article"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Side Articles */}
        <div className="border-t lg:border-t-0 lg:border-l divide-y max-h-[600px] overflow-y-auto">
          {sideArticles.map((article) => {
            const isExternal = article.url.startsWith("http");
            const content = (
              <div className="flex gap-3 p-3 md:p-4 hover:bg-gray-50 transition cursor-pointer">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-16 md:w-20 h-14 md:h-16 object-cover rounded shrink-0"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=80&h=60&fit=crop";
                  }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span
                      className={`text-white text-[9px] font-bold px-1.5 py-0.5 rounded ${article.sourceBg}`}
                    >
                      {article.source.slice(0, 3).toUpperCase()}
                    </span>
                    <span className="text-xs text-gray-400">
                      {article.time}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm font-semibold text-gray-800 leading-snug line-clamp-2 hover:text-red-600 transition-colors">
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
              </div>
            );

            return isExternal ? (
              <a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline block"
              >
                {content}
              </a>
            ) : (
              <Link
                key={article.id}
                to={article.url}
                className="no-underline block"
              >
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
