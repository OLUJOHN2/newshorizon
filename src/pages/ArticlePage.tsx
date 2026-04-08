// src/pages/ArticlePage.tsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticleById } from "../data/categoryData";
import { fetchArticleByUUID } from "../services/newsApi";
import type { NewsArticle } from "../services/newsApi";
import StaticArticleView from "../components/article/StaticArticleView";
import LiveArticleView from "../components/article/LiveArticleView";

export default function ArticlePage() {
  const { id } = useParams<{ id: string }>();
  const [liveArticle, setLiveArticle] = useState<NewsArticle | null>(null);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const numericId = Number(id);
  const isNumeric =
    id !== undefined && !isNaN(numericId) && String(numericId) === id;
  const staticArticle = isNumeric ? getArticleById(numericId) : undefined;

  useEffect(() => {
    if (!id || isNumeric) return;
    setLoading(true);
    setNotFound(false);
    fetchArticleByUUID(id)
      .then((data) => {
        if (data) {
          setLiveArticle(data);
        } else {
          setNotFound(true);
        }
        setLoading(false);
      })
      .catch(() => {
        setNotFound(true);
        setLoading(false);
      });
  }, [id, isNumeric]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white max-w-4xl mx-auto px-8 py-10 animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-1/4 mb-6" />
        <div className="h-10 bg-gray-200 rounded mb-4" />
        <div className="h-10 bg-gray-200 rounded w-3/4 mb-8" />
        <div className="h-96 bg-gray-200 rounded-2xl mb-8" />
        <div className="h-5 bg-gray-200 rounded mb-4" />
        <div className="h-5 bg-gray-200 rounded mb-4" />
        <div className="h-5 bg-gray-200 rounded mb-4" />
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-4xl font-bold text-gray-800 mb-2">404</p>
          <p className="text-lg text-gray-400 mb-4">Article not found.</p>
          <Link
            to="/"
            className="text-red-500 font-semibold no-underline hover:underline"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  if (staticArticle) {
    return <StaticArticleView article={staticArticle} />;
  }

  if (liveArticle) {
    return <LiveArticleView article={liveArticle} />;
  }

  return null;
}
