// src/components/navbar/Navbar.tsx
import { Search, User, Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSearchStore } from "../../store/useSearchStore";
import { useAuthStore } from "../../store/useAuthStore";
import SearchBar from "./Search";

const categories = [
  { label: "World", path: "/category/world" },
  { label: "Politics", path: "/category/politics" },
  { label: "Business", path: "/category/business" },
  { label: "Tech", path: "/category/tech" },
  { label: "Health", path: "/category/health" },
  { label: "Entertainment", path: "/category/entertainment" },
  { label: "Sports", path: "/category/sports" },
  { label: "Lifestyle", path: "/category/lifestyle" },
];

export default function Navbar() {
  const { open, toggle } = useSearchStore();
  const { user } = useAuthStore();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const catRef = useRef<HTMLDivElement>(null);

  // Close category dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (catRef.current && !catRef.current.contains(e.target as Node)) {
        setCatOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setCatOpen(false);
  }, [pathname]);

  function handleUserClick() {
    if (user) {
      navigate("/dashboard");
    } else {
      navigate("/auth/signin");
    }
  }

  return (
    <nav className="w-full border-b bg-[#111] sticky top-0 z-50">
      {/* ── Main bar ── */}
      <div className="px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl md:text-2xl font-bold text-white tracking-tight font-serif no-underline"
        >
          NewsHorizon
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex gap-5 text-sm font-medium list-none m-0 p-0">
          {categories.map(({ label, path }) => (
            <li key={label}>
              <Link
                to={path}
                className={`no-underline transition-colors ${
                  pathname === path
                    ? "text-white font-semibold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right icons */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="text-gray-300 hover:text-white transition"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            onClick={handleUserClick}
            className="text-gray-300 hover:text-white transition"
            aria-label="Account"
          >
            {user ? (
              <div className="w-7 h-7 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-xs">
                {user.name[0].toUpperCase()}
              </div>
            ) : (
              <User className="w-6 h-6" />
            )}
          </button>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden text-gray-300 hover:text-white transition"
            aria-label="Menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* ── Search bar dropdown ── */}
      {open && <SearchBar />}

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#1a1a1a] border-t border-gray-800 px-4 py-4">
          {/* Categories accordion */}
          <div ref={catRef}>
            <button
              onClick={() => setCatOpen((v) => !v)}
              className="w-full flex items-center justify-between text-sm font-semibold text-gray-200 py-2 px-3 rounded-lg hover:bg-gray-800 transition"
            >
              <span>Categories</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  catOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {catOpen && (
              <div className="mt-1 ml-2 space-y-1">
                {categories.map(({ label, path }) => (
                  <Link
                    key={label}
                    to={path}
                    className={`block text-sm py-2 px-4 rounded-lg no-underline transition-colors ${
                      pathname === path
                        ? "bg-red-500 text-white font-semibold"
                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Auth links */}
          <div className="mt-3 pt-3 border-t border-gray-800 space-y-1">
            {user ? (
              <Link
                to="/dashboard"
                className="block text-sm py-2 px-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white no-underline transition"
              >
                My Dashboard
              </Link>
            ) : (
              <>
                <Link
                  to="/auth/signin"
                  className="block text-sm py-2 px-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white no-underline transition"
                >
                  Sign In
                </Link>
                <Link
                  to="/auth/signup"
                  className="block text-sm py-2 px-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white no-underline transition"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
