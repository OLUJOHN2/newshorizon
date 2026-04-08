// src/components/article/StaticArticleView.tsx
import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import type { Article } from "../../data/categoryData";
import { getRelatedArticles } from "../../data/categoryData";
import {
  categoryColors,
  BreadCrumb,
  BackButton,
  ActionButtons,
  AuthorBio,
  RelatedSection,
} from "./articleHelpers";

function RelatedCard(props: { article: Article; accent: string }) {
  const a = props.article;
  return (
    <Link to={"/article/" + a.id} className="group block no-underline">
      <div
        className="overflow-hidden rounded-xl mb-3"
        style={{ height: "176px" }}
      >
        <img
          src={a.image}
          alt={a.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <span
        className={
          "inline-block text-white text-xs font-bold px-2 py-0.5 rounded-full mb-2 " +
          props.accent
        }
      >
        {a.category}
      </span>
      <h3 className="text-sm font-bold text-gray-800 leading-snug group-hover:text-red-600 transition-colors line-clamp-2 font-serif">
        {a.title}
      </h3>
      <div className="flex items-center gap-1 mt-2 text-xs text-gray-400">
        <Clock className="w-3 h-3" />
        <span>
          {a.date} • {a.readTime}
        </span>
      </div>
    </Link>
  );
}

export default function StaticArticleView(props: { article: Article }) {
  const article = props.article;
  const related = getRelatedArticles(article);
  const accent = categoryColors[article.category] ?? "bg-gray-700";
  const paragraphs = article.content.split("\n\n").filter(Boolean);

  return (
    <div className="min-h-screen bg-white">
      <BreadCrumb category={article.category} title={article.title} />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <BackButton />

        <span
          className={
            "inline-block text-white text-xs font-bold px-3 py-1 rounded-full mb-4 " +
            accent
          }
        >
          {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
        </span>

        <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-4 font-serif">
          {article.title}
        </h1>

        <p className="text-base text-gray-500 leading-relaxed mb-6 border-l-4 border-red-400 pl-4">
          {article.excerpt}
        </p>

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
          <ActionButtons />
        </div>

        <div
          className="rounded-2xl overflow-hidden mb-10"
          style={{ height: "380px" }}
        >
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          {paragraphs.map((para, i) => (
            <p
              key={i}
              className="text-gray-700 leading-8 mb-6"
              style={{ fontSize: "17px" }}
            >
              {para}
            </p>
          ))}
        </div>

        <AuthorBio
          avatar={article.authorAvatar}
          name={article.author}
          bio={article.authorBio}
        />

        {related.length > 0 && (
          <RelatedSection category={article.category}>
            {related.map((rel) => (
              <RelatedCard key={rel.id} article={rel} accent={accent} />
            ))}
          </RelatedSection>
        )}
      </div>
    </div>
  );
}
