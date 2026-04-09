// src/components/home/MustRead.tsx
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const mainArticle = {
  id: 3,
  author: "Jack Harleom",
  authorAvatar: "https://i.pravatar.cc/40?img=11",
  time: "10 hours ago",
  title:
    "Félicien Kabuga: Rwanda genocide suspect unfit to stand trial, UN court rules",
  excerpt:
    "About 85% of Rwandans are Hutu but the Tutsi minority has long dominated the country. In 1959, the Hutus overthrew the Tutsi monarchy and tens of thousands of Tutsis fled to neighbouring countries.",
  category: "Disaster",
  readTime: "1 min read",
  image:
    "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500&h=320&fit=crop",
};

const sideArticles = [
  {
    id: 21,
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
    id: 14,
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
    id: 6,
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
    <section className="px-4 md:px-6 py-8 md:py-10 bg-gray-50 border-t border-b">
      <div className="flex items-center justify-between mb-6 gap-2">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 font-serif flex-1">
          Must Read
        </h2>
        <Link
          to="/category/world"
          className="text-xs md:text-sm text-red-500 font-semibold flex items-center gap-1 hover:gap-2 transition-all no-underline whitespace-nowrap shrink-0"
        >
          See all <ChevronRight className="w-3 md:w-4 h-3 md:h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {/* Main Article */}
        <Link
          to={`/article/${mainArticle.id}`}
          className="group cursor-pointer no-underline block"
        >
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
        </Link>

        {/* Side Articles */}
        <div className="flex flex-col divide-y">
          {sideArticles.map((article) => (
            <Link
              key={article.id}
              to={`/article/${article.id}`}
              className="group flex gap-4 py-4 cursor-pointer no-underline"
            >
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
