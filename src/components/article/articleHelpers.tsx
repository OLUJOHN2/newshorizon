// src/components/article/articleHelpers.tsx
import { Link } from "react-router-dom";
import {
  ChevronRight,
  ArrowLeft,
  ThumbsUp,
  Bookmark,
  Share2,
} from "lucide-react";
import { useState } from "react";
import { useArticleActionsStore } from "../../store/useArticleActionsStore";

export const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop";

export function imgFallback(e: React.SyntheticEvent<HTMLImageElement>) {
  (e.target as HTMLImageElement).src = FALLBACK_IMG;
}

export const categoryColors: Record<string, string> = {
  world: "bg-blue-600",
  politics: "bg-red-600",
  business: "bg-emerald-600",
  tech: "bg-violet-600",
  health: "bg-pink-600",
  entertainment: "bg-orange-500",
  sports: "bg-yellow-500",
  lifestyle: "bg-teal-600",
  general: "bg-gray-600",
  news: "bg-gray-600",
};

export function BreadCrumb(props: { category: string; title: string }) {
  return (
    <div className="border-b bg-gray-50 px-4 py-3">
      <div className="max-w-4xl mx-auto flex items-center gap-2 text-sm text-gray-500">
        <Link to="/" className="hover:text-gray-800 no-underline transition">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link
          to={"/category/" + props.category.toLowerCase()}
          className="hover:text-gray-800 no-underline transition capitalize"
        >
          {props.category}
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-gray-400 truncate max-w-xs">{props.title}</span>
      </div>
    </div>
  );
}

export function BackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition mb-6"
    >
      <ArrowLeft className="w-4 h-4" />
      Back
    </button>
  );
}

export function ActionButtons(props: { articleId: string; articleTitle: string }) {
  const { toggleLike, toggleSave, isLiked, isSaved } = useArticleActionsStore();
  const [shareOpen, setShareOpen] = useState(false);
  const [shareMessage, setShareMessage] = useState("");

  const liked = isLiked(props.articleId);
  const saved = isSaved(props.articleId);

  const handleLike = () => {
    toggleLike(props.articleId);
  };

  const handleSave = () => {
    toggleSave(props.articleId);
  };

  const handleShare = async () => {
    const shareUrl = `${window.location.origin}/article/${props.articleId}`;
    const shareData = {
      title: "NewsHorizon",
      text: props.articleTitle,
      url: shareUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          console.error("Error sharing:", err);
        }
      }
    } else {
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(shareUrl);
        setShareMessage("Link copied to clipboard!");
        setTimeout(() => setShareMessage(""), 2000);
      } catch (err) {
        console.error("Error copying to clipboard:", err);
      }
    }
  };

  return (
    <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3 w-full sm:w-auto">
      <button
        onClick={handleLike}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition whitespace-nowrap flex-1 sm:flex-none ${
          liked
            ? "bg-red-50 text-red-600 border border-red-200 hover:bg-red-100"
            : "border border-gray-300 text-gray-600 hover:bg-gray-50"
        }`}
        aria-pressed={liked}
      >
        <ThumbsUp className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${liked ? "fill-current" : ""}`} />
        <span className="hidden sm:inline">Like</span>
        <span className="sm:hidden">Like</span>
      </button>
      <button
        onClick={handleSave}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition whitespace-nowrap flex-1 sm:flex-none ${
          saved
            ? "bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100"
            : "border border-gray-300 text-gray-600 hover:bg-gray-50"
        }`}
        aria-pressed={saved}
      >
        <Bookmark className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${saved ? "fill-current" : ""}`} />
        <span className="hidden sm:inline">Save</span>
        <span className="sm:hidden">Save</span>
      </button>
      <div className="relative flex-1 sm:flex-none">
        <button
          onClick={() => setShareOpen(!shareOpen)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium border border-gray-300 text-gray-600 hover:bg-gray-50 transition w-full sm:w-auto justify-center"
          aria-haspopup="menu"
          aria-expanded={shareOpen}
        >
          <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span className="hidden sm:inline">Share</span>
          <span className="sm:hidden">Share</span>
        </button>
        {shareOpen && (
          <div className="absolute top-full right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10 min-w-max">
            <button
              onClick={handleShare}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition"
            >
              {navigator.share ? "Share Article" : "Copy Link"}
            </button>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(props.articleTitle)}&url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition"
            >
              Twitter
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition border-t"
            >
              Facebook
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition"
            >
              LinkedIn
            </a>
            <button
              onClick={() => setShareOpen(false)}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition border-t"
            >
              Close
            </button>
          </div>
        )}
        {shareMessage && (
          <div className="absolute top-full right-0 mt-2 bg-gray-900 text-white px-3 py-2 rounded-lg text-xs whitespace-nowrap">
            {shareMessage}
          </div>
        )}
      </div>
    </div>
  );
}

export function AuthorBio(props: {
  avatar: string;
  name: string;
  bio: string;
}) {
  return (
    <div className="mt-12 p-6 bg-gray-50 rounded-2xl border flex gap-5 items-start">
      <img
        src={props.avatar}
        alt={props.name}
        className="w-16 h-16 rounded-full object-cover flex-shrink-0"
      />
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
          About the author
        </p>
        <p className="font-bold text-gray-900 mb-1">{props.name}</p>
        <p className="text-sm text-gray-500 leading-relaxed">{props.bio}</p>
      </div>
    </div>
  );
}

export function RelatedSection(props: {
  category: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-14">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900 font-serif">
          Related Articles
        </h2>
        <Link
          to={"/category/" + props.category.toLowerCase()}
          className="text-sm text-red-500 font-semibold flex items-center gap-1 no-underline hover:gap-2 transition-all"
        >
          See all
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {props.children}
      </div>
    </div>
  );
}
