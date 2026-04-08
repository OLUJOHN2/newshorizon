// src/components/article/LiveArticleView.tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Clock, ExternalLink } from "lucide-react";
import type { NewsArticle } from "../../services/newsApi";
import { fetchLatestNews } from "../../services/newsApi";
import {
  categoryColors,
  imgFallback,
  BreadCrumb,
  BackButton,
  ActionButtons,
  RelatedSection,
} from "./articleHelpers";

function RelatedCard(props: { article: NewsArticle; accent: string }) {
  const a = props.article;
  return (
    <Link to={"/article/" + a.uuid} className="group block no-underline">
      <div
        className="overflow-hidden rounded-xl mb-3"
        style={{ height: "176px" }}
      >
        <img
          src={a.image}
          alt={a.title}
          onError={imgFallback}
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
        <span>{a.time}</span>
      </div>
    </Link>
  );
}

export default function LiveArticleView(props: { article: NewsArticle }) {
  const article = props.article;
  const [related, setRelated] = useState<NewsArticle[]>([]);
  const accent =
    categoryColors[article.category.toLowerCase()] ?? "bg-gray-600";

  useEffect(() => {
    fetchLatestNews(4).then((all) => {
      setRelated(all.filter((a) => a.uuid !== article.uuid).slice(0, 3));
    });
  }, [article.uuid]);

  const paragraphs = article.content
    ? article.content.split(/\n\n+/).filter(Boolean)
    : article.excerpt
      ? [article.excerpt]
      : ["Full article content is available at the original source."];

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
          {article.category}
        </span>

        <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-4 font-serif">
          {article.title}
        </h1>

        {article.excerpt && (
          <p className="text-base text-gray-500 leading-relaxed mb-6 border-l-4 border-red-400 pl-4">
            {article.excerpt}
          </p>
        )}

        <div className="flex items-center justify-between flex-wrap gap-4 mb-8 pb-6 border-b">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold">
              {article.sourceIcon}
            </div>
            <div>
              <p className="text-sm font-bold text-gray-800">
                {article.source}
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Clock className="w-3 h-3" />
                <span>{article.time}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <ActionButtons />

            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 border rounded-lg text-xs text-gray-600 hover:bg-gray-50 transition no-underline"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Source
            </a>
          </div>
        </div>

        <div
          className="rounded-2xl overflow-hidden mb-10"
          style={{ height: "380px" }}
        >
          <img
            src={article.image}
            alt={article.title}
            onError={imgFallback}
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

        {related.length > 0 && (
          <RelatedSection category={article.category}>
            {related.map((rel) => (
              <RelatedCard key={rel.uuid} article={rel} accent={accent} />
            ))}
          </RelatedSection>
        )}
      </div>
    </div>
  );
}
