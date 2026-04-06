// src/components/navbar/NavLinks.tsx
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "World", path: "/category/world" },
  { label: "Politics", path: "/category/politics" },
  { label: "Business", path: "/category/business" },
  { label: "Tech", path: "/category/tech" },
  { label: "Health", path: "/category/health" },
  { label: "Entertainment", path: "/category/entertainment" },
  { label: "Sports", path: "/category/sports" },
  { label: "Lifestyle", path: "/category/lifestyle" },
];

export default function NavLinks() {
  const { pathname } = useLocation();

  return (
    <ul className="hidden md:flex gap-6 text-sm font-medium list-none m-0 p-0">
      {links.map(({ label, path }) => (
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
  );
}
