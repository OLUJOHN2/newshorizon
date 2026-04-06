// src/components/home/MustRead.tsx
import { ChevronRight } from "lucide-react";

const mainArticle = {
  author: "Jack Harleom",
  authorAvatar: "https://i.pravatar.cc/40?img=11",
  time: "10 hours ago",
  title:
    "Félicien Kabuga: Rwanda genocide suspect unfit to stand trial, UN court rules",
  excerpt:
    "About 85% of Rwandans are Hutu but the Tutsi minority has long dominated the country. In 1959, the Hutus overthrew the Tutsi monarchy and tens of thousands of Tutsis fled to neighbouring countries, inc Uganda.",
  category: "Disaster",
  readTime: "1 min read",
  image:
    "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500&h=320&fit=crop",
};

const sideArticles = [
  {
    author: "Oliver Grey",
    authorAvatar: "https://i.pravatar.cc/40?img=15",
    time: "5 hours ago",
    title:
      "Stella explains what 'instrumental' Rob Marshall will bring to McLaren in 2024",
    category: "Sport",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=120&h=80&fit=crop",
  },
  {
    author: "Rey Creig",
    authorAvatar: "https://i.pravatar.cc/40?img=22",
    time: "2 hours ago",
    title: "Pope Francis undergoes abdominal surgery in latest health concern",
    category: "World",
    readTime: "3 min read",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=120&h=80&fit=crop",
  },
  {
    author: "Reine Warner",
    authorAvatar: "https://i.pravatar.cc/40?img=33",
    time: "5 hours ago",
    title:
      "Fact check: Trump boasts about a massive oil purchase that never happened",
    category: "Politics",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=120&h=80&fit=crop",
  },
];

export default function MustRead() {
  return (
    <section className="px-6 py-10 bg-gray-50 border-t border-b">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 font-serif">
          Must Read
        </h2>
        <a
          href="/must-read"
          className="text-sm text-red-500 font-semibold flex items-center gap-1 hover:gap-2 transition-all no-underline"
        >
          See all <ChevronRight className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Main Article */}
        <article className="group cursor-pointer">
          <div className="overflow-hidden rounded-lg h-[240px] mb-4">
            <img
              src={mainArticle.image}
              alt={mainArticle.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex items-center gap-2 mb-2">
            <img
              src={mainArticle.authorAvatar}
              alt={mainArticle.author}
              className="w-6 h-6 rounded-full"
            />
            <span className="text-sm font-semibold text-gray-700">
              {mainArticle.author}
            </span>
            <span className="text-xs text-gray-400">• {mainArticle.time}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 leading-snug mb-2 group-hover:text-red-600 transition-colors font-serif">
            {mainArticle.title}
          </h3>
          <p className="text-sm text-gray-500 line-clamp-3 mb-3">
            {mainArticle.excerpt}
          </p>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-red-500 font-semibold">
              {mainArticle.category}
            </span>
            <span className="text-gray-400">• {mainArticle.readTime}</span>
          </div>
        </article>

        {/* Side Articles */}
        <div className="flex flex-col divide-y">
          {sideArticles.map((article, i) => (
            <article key={i} className="group flex gap-4 py-4 cursor-pointer">
              <div className="overflow-hidden rounded-md w-24 h-20 flex-shrink-0">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <img
                    src={article.authorAvatar}
                    alt={article.author}
                    className="w-5 h-5 rounded-full"
                  />
                  <span className="text-xs font-semibold text-gray-700">
                    {article.author}
                  </span>
                  <span className="text-xs text-gray-400">
                    • {article.time}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-gray-800 leading-snug mb-1 group-hover:text-red-600 transition-colors font-serif">
                  {article.title}
                </h3>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-red-500 font-semibold">
                    {article.category}
                  </span>
                  <span className="text-gray-400">• {article.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
