// src/pages/WriterDashboard.tsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import {
  LayoutDashboard,
  FileText,
  PlusCircle,
  Eye,
  ThumbsUp,
  MessageSquare,
  TrendingUp,
  LogOut,
  ChevronRight,
  Clock,
  BookOpen,
} from "lucide-react";

const stats = [
  {
    label: "Total Articles",
    value: "24",
    icon: FileText,
    color: "bg-blue-50 text-blue-600",
  },
  {
    label: "Total Views",
    value: "18.4K",
    icon: Eye,
    color: "bg-green-50 text-green-600",
  },
  {
    label: "Total Likes",
    value: "1,230",
    icon: ThumbsUp,
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    label: "Comments",
    value: "342",
    icon: MessageSquare,
    color: "bg-purple-50 text-purple-600",
  },
];

const recentArticles = [
  {
    id: 1,
    title: "North Korea hackers suspected in new $35 million crypto heist",
    category: "Business",
    status: "published",
    views: "4.2K",
    date: "Jun 12, 2023",
  },
  {
    id: 2,
    title:
      "How legal immigration might solve two of America's toughest problems",
    category: "Politics",
    status: "published",
    views: "3.1K",
    date: "Jun 10, 2023",
  },
  {
    id: 3,
    title: "The future of AI in African newsrooms",
    category: "Tech",
    status: "draft",
    views: "—",
    date: "Jun 08, 2023",
  },
  {
    id: 4,
    title: "They said we were getting a recession. Instead, a bull market",
    category: "Business",
    status: "published",
    views: "2.8K",
    date: "Jun 05, 2023",
  },
];

const navItems = [
  { icon: LayoutDashboard, label: "Overview", id: "overview" },
  { icon: FileText, label: "Articles", id: "articles" },
  { icon: PlusCircle, label: "New Article", id: "new" },
  { icon: TrendingUp, label: "Analytics", id: "analytics" },
  { icon: BookOpen, label: "Drafts", id: "drafts" },
];

export default function WriterDashboard() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-60 bg-[#111] flex-shrink-0 flex flex-col sticky top-0 h-screen">
        {/* Logo */}
        <div className="px-6 py-5 border-b border-gray-800">
          <Link
            to="/"
            className="text-xl font-bold text-white font-serif no-underline"
          >
            NewsHub
          </Link>
          <p className="text-xs text-gray-500 mt-0.5">Writer Studio</p>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          {navItems.map(({ icon: Icon, label, id }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition ${
                activeTab === id
                  ? "bg-red-500 text-white font-semibold"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              {label}
            </button>
          ))}
        </nav>

        {/* User + logout */}
        <div className="px-4 py-5 border-t border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              {(user as any)?.name?.[0]?.toUpperCase() ?? "W"}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white truncate">
                {(user as any)?.name ?? "Writer"}
              </p>
              <p className="text-xs text-gray-500 truncate">
                {(user as any)?.email ?? ""}
              </p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-400 hover:bg-gray-800 hover:text-red-400 transition"
          >
            <LogOut className="w-4 h-4" />
            Sign out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <div className="bg-white border-b px-8 py-5 flex items-center justify-between sticky top-0 z-10">
          <div>
            <h1 className="text-xl font-bold text-gray-900">
              {activeTab === "overview" && "Dashboard Overview"}
              {activeTab === "articles" && "My Articles"}
              {activeTab === "new" && "New Article"}
              {activeTab === "analytics" && "Analytics"}
              {activeTab === "drafts" && "Drafts"}
            </h1>
            <p className="text-sm text-gray-500">
              Welcome back, {(user as any)?.name?.split(" ")[0] ?? "Writer"} 👋
            </p>
          </div>
          <button
            onClick={() => setActiveTab("new")}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition"
          >
            <PlusCircle className="w-4 h-4" />
            New Article
          </button>
        </div>

        <div className="px-8 py-8">
          {/* OVERVIEW TAB */}
          {activeTab === "overview" && (
            <div className="space-y-8">
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                {stats.map(({ label, value, icon: Icon, color }) => (
                  <div
                    key={label}
                    className="bg-white rounded-xl border p-5 flex items-center gap-4"
                  >
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center ${color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">
                        {value}
                      </p>
                      <p className="text-xs text-gray-500">{label}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Articles */}
              <div className="bg-white rounded-xl border">
                <div className="flex items-center justify-between px-6 py-4 border-b">
                  <h2 className="font-bold text-gray-800">Recent Articles</h2>
                  <button
                    onClick={() => setActiveTab("articles")}
                    className="text-sm text-red-500 flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    See all <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="divide-y">
                  {recentArticles.map((article) => (
                    <div
                      key={article.id}
                      className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-800 truncate">
                          {article.title}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-red-500 font-medium">
                            {article.category}
                          </span>
                          <span className="text-xs text-gray-400">•</span>
                          <Clock className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-400">
                            {article.date}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0">
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Eye className="w-3.5 h-3.5" />
                          {article.views}
                        </div>
                        <span
                          className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                            article.status === "published"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {article.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ARTICLES TAB */}
          {activeTab === "articles" && (
            <div className="bg-white rounded-xl border">
              <div className="px-6 py-4 border-b flex items-center justify-between">
                <h2 className="font-bold text-gray-800">All Articles</h2>
                <span className="text-xs text-gray-500">
                  {recentArticles.length} articles
                </span>
              </div>
              <div className="divide-y">
                {recentArticles.map((article) => (
                  <div
                    key={article.id}
                    className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-800 truncate">
                        {article.title}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-red-500 font-medium">
                          {article.category}
                        </span>
                        <span className="text-xs text-gray-400">
                          • {article.date}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Eye className="w-3.5 h-3.5" /> {article.views}
                      </div>
                      <span
                        className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                          article.status === "published"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {article.status}
                      </span>
                      <button className="text-xs text-gray-400 hover:text-red-500 transition">
                        Edit
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* NEW ARTICLE TAB */}
          {activeTab === "new" && (
            <div className="bg-white rounded-xl border p-8 max-w-2xl">
              <h2 className="font-bold text-gray-800 mb-6">
                Write a New Article
              </h2>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter article title..."
                    className="border border-gray-300 w-full px-3 py-2 rounded-lg text-sm focus:outline-none focus:border-red-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select className="border border-gray-300 w-full px-3 py-2 rounded-lg text-sm focus:outline-none focus:border-red-400 bg-white">
                    {[
                      "Politics",
                      "Business",
                      "Tech",
                      "Health",
                      "Entertainment",
                      "Sports",
                      "World",
                      "Travel",
                    ].map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Cover Image URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://..."
                    className="border border-gray-300 w-full px-3 py-2 rounded-lg text-sm focus:outline-none focus:border-red-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Content
                  </label>
                  <textarea
                    rows={10}
                    placeholder="Write your article here..."
                    className="border border-gray-300 w-full px-3 py-2 rounded-lg text-sm focus:outline-none focus:border-red-400 resize-none"
                  />
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    className="flex-1 border border-gray-300 text-gray-700 text-sm font-semibold py-2.5 rounded-lg hover:bg-gray-50 transition"
                  >
                    Save as Draft
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold py-2.5 rounded-lg transition"
                  >
                    Publish Article
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* ANALYTICS TAB */}
          {activeTab === "analytics" && (
            <div className="bg-white rounded-xl border p-8 text-center text-gray-400">
              <TrendingUp className="w-12 h-12 mx-auto mb-3 text-gray-300" />
              <p className="font-semibold text-gray-600">
                Analytics coming soon
              </p>
              <p className="text-sm mt-1">
                Charts and performance data will appear here.
              </p>
            </div>
          )}

          {/* DRAFTS TAB */}
          {activeTab === "drafts" && (
            <div className="bg-white rounded-xl border">
              <div className="px-6 py-4 border-b">
                <h2 className="font-bold text-gray-800">Drafts</h2>
              </div>
              {recentArticles.filter((a) => a.status === "draft").length ===
              0 ? (
                <div className="p-8 text-center text-gray-400">
                  <BookOpen className="w-10 h-10 mx-auto mb-3 text-gray-300" />
                  <p className="text-sm">No drafts yet.</p>
                </div>
              ) : (
                <div className="divide-y">
                  {recentArticles
                    .filter((a) => a.status === "draft")
                    .map((article) => (
                      <div
                        key={article.id}
                        className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-gray-800 truncate">
                            {article.title}
                          </p>
                          <p className="text-xs text-gray-400 mt-0.5">
                            {article.date}
                          </p>
                        </div>
                        <button className="text-xs text-red-500 hover:underline">
                          Continue editing
                        </button>
                      </div>
                    ))}
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
