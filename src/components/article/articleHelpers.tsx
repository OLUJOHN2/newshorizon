// src/components/article/articleHelpers.tsx
import { Link } from "react-router-dom";
import {
  ChevronRight,
  ArrowLeft,
  ThumbsUp,
  Bookmark,
  Share2,
} from "lucide-react";

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

export function ActionButtons() {
  return (
    <div className="flex items-center gap-2">
      <button className="flex items-center gap-1.5 px-3 py-1.5 border rounded-lg text-xs text-gray-600 hover:bg-gray-50 transition">
        <ThumbsUp className="w-3.5 h-3.5" />
        Like
      </button>
      <button className="flex items-center gap-1.5 px-3 py-1.5 border rounded-lg text-xs text-gray-600 hover:bg-gray-50 transition">
        <Bookmark className="w-3.5 h-3.5" />
        Save
      </button>
      <button className="flex items-center gap-1.5 px-3 py-1.5 border rounded-lg text-xs text-gray-600 hover:bg-gray-50 transition">
        <Share2 className="w-3.5 h-3.5" />
        Share
      </button>
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
