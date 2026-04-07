// src/pages/ArticlePage.tsx
import { useParams, Link } from "react-router-dom";
import {
  Clock,
  ChevronRight,
  ArrowLeft,
  Share2,
  Bookmark,
  ThumbsUp,
} from "lucide-react";
import { getArticleById, getRelatedArticles } from "../data/categoryData";
import type { Article } from "../data/categoryData";

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

export default function ArticlePage() {
  const { id } = useParams<{ id: string }>();
  const article = getArticleById(Number(id));

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        <div className="text-center">
          <p className="text-4xl font-bold text-gray-800 mb-2">404</p>
          <p className="text-lg mb-4">Article not found.</p>
          <Link
            to="/"
            className="text-red-500 font-semibold hover:underline no-underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const related = getRelatedArticles(article);
  const accent = categoryColors[article.category] ?? "bg-gray-700";
  const paragraphs = article.content.split("\n\n").filter(Boolean);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b bg-gray-50 px-6 md:px-16 py-3">
        <div className="max-w-4xl mx-auto flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-gray-800 no-underline transition">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link
            to={`/category/${article.category}`}
            className="hover:text-gray-800 no-underline transition capitalize"
          >
            {article.category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-400 truncate max-w-xs">
            {article.title}
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-8 py-10">
        {/* Back button */}
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        {/* Category badge */}
        <span
          className={`inline-block text-white text-xs font-bold px-3 py-1 rounded-full mb-4 ${accent}`}
        >
          {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
        </span>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4 font-serif">
          {article.title}
        </h1>

        {/* Excerpt / standfirst */}
        <p className="text-lg text-gray-500 leading-relaxed mb-6 border-l-4 border-red-400 pl-4">
          {article.excerpt}
        </p>

        {/* Author + meta row */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8 pb-6 border-b">
          <div className="flex items-center gap-3">
            <img
              src={article.authorAvatar}
              alt={article.author}
              className="w-11 h-11 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-bold text-gray-800">
                {article.author}
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Clock className="w-3 h-3" />
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 px-3 py-1.5 border rounded-lg text-xs text-gray-600 hover:bg-gray-50 transition">
              <ThumbsUp className="w-3.5 h-3.5" /> Like
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 border rounded-lg text-xs text-gray-600 hover:bg-gray-50 transition">
              <Bookmark className="w-3.5 h-3.5" /> Save
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 border rounded-lg text-xs text-gray-600 hover:bg-gray-50 transition">
              <Share2 className="w-3.5 h-3.5" /> Share
            </button>
          </div>
        </div>

        {/* Hero image */}
        <div className="rounded-2xl overflow-hidden mb-10 h-[360px] md:h-[460px]">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article body */}
        <div className="max-w-none">
          {paragraphs.map((para, i) => (
            <p key={i} className="text-gray-700 leading-8 text-[17px] mb-6">
              {para}
            </p>
          ))}
        </div>

        {/* Author bio card */}
        <div className="mt-12 p-6 bg-gray-50 rounded-2xl border flex gap-5 items-start">
          <img
            src={article.authorAvatar}
            alt={article.author}
            className="w-16 h-16 rounded-full object-cover flex-shrink-0"
          />
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
              About the author
            </p>
            <p className="font-bold text-gray-900 mb-1">{article.author}</p>
            <p className="text-sm text-gray-500 leading-relaxed">
              {article.authorBio}
            </p>
          </div>
        </div>

        {/* Related Articles */}
        {related.length > 0 && (
          <div className="mt-14">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 font-serif">
                Related Articles
              </h2>
              <Link
                to={`/category/${article.category}`}
                className="text-sm text-red-500 font-semibold flex items-center gap-1 hover:gap-2 transition-all no-underline"
              >
                See all <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((rel) => (
                <RelatedCard key={rel.id} article={rel} accent={accent} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function RelatedCard({
  article,
  accent,
}: {
  article: Article;
  accent: string;
}) {
  return (
    <Link to={`/article/${article.id}`} className="group block no-underline">
      <div className="overflow-hidden rounded-xl h-44 mb-3">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <span
        className={`inline-block text-white text-[10px] font-bold px-2 py-0.5 rounded-full mb-2 ${accent}`}
      >
        {article.category}
      </span>
      <h3 className="text-sm font-bold text-gray-800 leading-snug group-hover:text-red-600 transition-colors line-clamp-2 font-serif">
        {article.title}
      </h3>
      <div className="flex items-center gap-1 mt-2 text-xs text-gray-400">
        <Clock className="w-3 h-3" />
        <span>
          {article.date} • {article.readTime}
        </span>
      </div>
    </Link>
  );
}
