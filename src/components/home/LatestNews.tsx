// src/components/home/LatestNews.tsx
import { useEffect, useState } from "react";
import { ChevronRight, ExternalLink } from "lucide-react";
import { fetchLatestNews } from "../../services/newsApi";
import type { NewsArticle } from "../../services/newsApi";

const STATIC = [
  {
    id: "st1",
    title:
      "F1 teams had big upgrades planned for Imola – but what happens now?",
    excerpt:
      "One of the many disruptions the Emilia Romagna Grand Prix not going ahead has caused is that of the teams' development programmes...",
    category: "Sport",
    time: "10 hours ago",
    source: "Formula 1",
    sourceIcon: "F1",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=260&fit=crop",
    url: "/article/20",
  },
  {
    id: "st2",
    title:
      "Ukraine war: Wagner boss rubbishes Russian claims of Ukrainian casualties",
    excerpt:
      "Speaking to state media, Russian Defence Minister Sergei Shoigu insisted that his forces had inflicted over 3,715 casualties on Ukraine...",
    category: "War",
    time: "10 hours ago",
    source: "BBC News",
    sourceIcon: "B",
    image:
      "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?w=400&h=260&fit=crop",
    url: "/article/8",
  },
  {
    id: "st3",
    title:
      "Brutal killings of two young girls show one of India's biggest problems is getting worse",
    excerpt:
      "An even younger girl suffers a similar fate, allegedly at the hands of her own father...",
    category: "World",
    time: "10 hours ago",
    source: "CNN News",
    sourceIcon: "CNN",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=260&fit=crop",
    url: "/article/4",
  },
];

export default function LatestNews() {
  const [articles, setArticles] = useState<typeof STATIC>(STATIC);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLatestNews(3).then((data: NewsArticle[]) => {
      if (data.length >= 2) {
        setArticles(
          data.slice(0, 3).map((a) => ({
            id: a.id,
            title: a.title,
            excerpt: a.excerpt,
            category: a.category,
            time: a.time,
            source: a.source,
            sourceIcon: a.sourceIcon,
            image: a.image,
            url: a.url,
          })),
        );
      }
      setLoading(false);
    });

    const interval = setInterval(
      () => {
        fetchLatestNews(3).then((data: any) => {
          if (data.length >= 2) {
            setArticles(
              data.slice(0, 3).map((a: any) => ({
                id: a.id,
                title: a.title,
                excerpt: a.excerpt,
                category: a.category,
                time: a.time,
                source: a.source,
                sourceIcon: a.sourceIcon,
                image: a.image,
                url: a.url,
              })),
            );
          }
        });
      },
      5 * 60 * 1000,
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-4 md:px-6 py-8 md:py-10 bg-white max-w-full overflow-hidden">
      <div className="flex items-center justify-between mb-6 gap-2">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 font-serif flex-1">
          Latest News
          {loading && (
            <span className="ml-2 text-xs text-gray-400 font-normal animate-pulse">
              updating…
            </span>
          )}
        </h2>
        <a
          href="/category/world"
          className="text-xs md:text-sm text-red-500 font-semibold flex items-center gap-1 hover:gap-2 transition-all no-underline whitespace-nowrap shrink-0"
        >
          See all <ChevronRight className="w-3 md:w-4 h-3 md:h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {articles.map((article) => {
          const isExternal = article.url.startsWith("http");
          const card = (
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg mb-4 h-45 md:h-50">
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
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold bg-black text-white px-1.5 py-0.5 rounded">
                  {article.sourceIcon}
                </span>
                <span className="text-xs text-gray-500 font-medium">
                  {article.source}
                </span>
                <span className="text-xs text-gray-400">• {article.time}</span>
                {isExternal && (
                  <ExternalLink className="w-3 h-3 text-gray-300 ml-auto" />
                )}
              </div>
              <h3 className="font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-red-600 transition-colors font-serif line-clamp-2">
                {article.title}
              </h3>
              <p className="text-sm text-gray-500 line-clamp-2 mb-3">
                {article.excerpt}
              </p>
              <span className="text-xs text-red-500 font-semibold">
                {article.category}
              </span>
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
              {card}
            </a>
          ) : (
            <a
              key={article.id}
              href={article.url}
              className="no-underline block"
            >
              {card}
            </a>
          );
        })}
      </div>
    </section>
  );
}
