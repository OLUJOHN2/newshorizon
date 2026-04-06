// src/components/home/WeeklyHighlight.tsx
import { ChevronRight } from "lucide-react";

const highlights = [
  {
    source: "Formula 1",
    sourceIcon: "F1",
    time: "5 days ago",
    title: "People spend night on roofs and in trees after Ukraine dam breach",
    category: "Sport",
    readTime: "1 min read",
    image:
      "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=300&h=200&fit=crop",
  },
  {
    source: "BBC News",
    sourceIcon: "B",
    time: "10 hours ago",
    title:
      "How legal immigration might solve two of America's toughest problems",
    category: "Politics",
    readTime: "1 min read",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=300&h=200&fit=crop",
  },
  {
    source: "Nina Waters",
    sourceIcon: "N",
    time: "10 hours ago",
    title: "North Korea hackers suspected in new $35 million crypto heist",
    category: "Business",
    readTime: "1 min read",
    image:
      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=300&h=200&fit=crop",
  },
  {
    source: "Jamar Burns",
    sourceIcon: "J",
    time: "10 hours ago",
    title:
      "They said we were getting a recession. Instead, we're getting close to a bull market",
    category: "War",
    readTime: "1 min read",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=300&h=200&fit=crop",
  },
];

export default function WeeklyHighlight() {
  return (
    <section className="px-6 py-10 bg-white">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 font-serif">
          Weekly Highlight
        </h2>
        <a
          href="/weekly"
          className="text-sm text-red-500 font-semibold flex items-center gap-1 hover:gap-2 transition-all no-underline"
        >
          See all <ChevronRight className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {highlights.map((article, i) => (
          <article key={i} className="group cursor-pointer">
            <div className="overflow-hidden rounded-xl mb-3 h-[150px]">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="text-xs font-bold bg-black text-white px-1.5 py-0.5 rounded">
                {article.sourceIcon}
              </span>
              <span className="text-xs text-gray-500">{article.source}</span>
              <span className="text-xs text-gray-400 hidden md:inline">
                • {article.time}
              </span>
            </div>
            <h3 className="text-sm font-bold text-gray-800 leading-snug mb-2 group-hover:text-red-500 transition-colors line-clamp-3 font-serif">
              {article.title}
            </h3>
            <div className="flex items-center gap-1 text-xs">
              <span className="text-red-500 font-semibold">
                {article.category}
              </span>
              <span className="text-gray-400">• {article.readTime}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
