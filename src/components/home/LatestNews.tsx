// src/components/home/LatestNews.tsx
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const articles = [
  {
    id: 20,
    source: "Formula 1",
    sourceIcon: "F1",
    time: "10 hours ago",
    title:
      "F1 teams had big upgrades planned for Imola – but what happens now?",
    excerpt:
      "One of the many disruptions the Emilia Romagna Grand Prix not going ahead has caused is that of the teams' development programmes...",
    category: "Sport",
    readTime: "1 min read",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=260&fit=crop",
  },
  {
    id: 8,
    source: "BBC News",
    sourceIcon: "B",
    time: "10 hours ago",
    title:
      "Ukraine war: Wagner boss rubbishes Russian claims of Ukrainian casualties",
    excerpt:
      "Speaking to state media, Russian Defence Minister Sergei Shoigu insisted that his forces had inflicted over 3,715 casualties on Ukraine...",
    category: "War",
    readTime: "1 min read",
    image:
      "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?w=400&h=260&fit=crop",
  },
  {
    id: 4,
    source: "CNN News",
    sourceIcon: "CNN",
    time: "10 hours ago",
    title:
      "Brutal killings of two young girls show one of India's biggest problems is getting worse",
    excerpt:
      "An even younger girl suffers a similar fate, allegedly at the hands of her own father because she and her mother wanted to sleep on the patio...",
    category: "World",
    readTime: "1 min read",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=260&fit=crop",
  },
];

export default function LatestNews() {
  return (
    <section className="px-6 py-10 bg-white">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 font-serif">
          Latest News
        </h2>
        <Link
          to="/category/world"
          className="text-sm text-red-500 font-semibold flex items-center gap-1 hover:gap-2 transition-all no-underline"
        >
          See all <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link
            key={article.id}
            to={`/article/${article.id}`}
            className="group cursor-pointer no-underline block"
          >
            <div className="overflow-hidden rounded-lg mb-4 h-[200px]">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
            </div>
            <h3 className="font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-red-600 transition-colors font-serif">
              {article.title}
            </h3>
            <p className="text-sm text-gray-500 line-clamp-2 mb-3">
              {article.excerpt}
            </p>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-red-500 font-semibold">
                {article.category}
              </span>
              <span className="text-gray-400">• {article.readTime}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
