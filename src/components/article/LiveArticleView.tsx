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
      <div className="w-full max-w-4xl mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-10">
        <BackButton />

        <span
          className={
            "inline-block text-white text-xs font-bold px-3 py-1 rounded-full mb-4 " +
            accent
          }
        >
          {article.category}
        </span>

        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4 font-serif">
          {article.title}
        </h1>

        {article.excerpt && (
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-6 border-l-4 border-red-400 pl-4">
            {article.excerpt}
          </p>
        )}

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-8 pb-6 border-b">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gray-200 shrink-0 flex items-center justify-center text-gray-600 font-bold text-sm">
              {article.sourceIcon}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold text-gray-800 truncate">
                {article.source}
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Clock className="w-3 h-3 shrink-0" />
                <span className="truncate">{article.time}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
            <ActionButtons
              articleId={article.uuid}
              articleTitle={article.title}
            />
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 px-3 py-1.5 border rounded-lg text-xs sm:text-sm text-gray-600 hover:bg-gray-50 transition no-underline whitespace-nowrap font-medium"
            >
              <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="hidden sm:inline">Source</span>
              <span className="sm:hidden">View</span>
            </a>
          </div>
        </div>

        <div
          className="rounded-xl sm:rounded-2xl overflow-hidden mb-8 sm:mb-10 w-full"
          style={{
            aspectRatio: "16/9",
            maxHeight: "500px",
          }}
        >
          <img
            src={article.image}
            alt={article.title}
            onError={imgFallback}
            className="w-full h-full object-cover"
          />
        </div>

        <article className="prose prose-sm sm:prose md:prose-lg max-w-none">
          {paragraphs.map((para, i) => (
            <p
              key={i}
              className="text-gray-700 leading-7 sm:leading-8 mb-6 text-sm sm:text-base"
            >
              {para}
            </p>
          ))}
        </article>

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
