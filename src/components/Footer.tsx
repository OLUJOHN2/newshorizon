// src/components/Footer.tsx
import { Link } from "react-router-dom";

const footerLinks: Record<string, { label: string; path: string }[]> = {
  Product: [
    { label: "Overview", path: "/product/overview" },
    { label: "Features", path: "/product/features" },
    { label: "Solution", path: "/product/solution" },
    { label: "Releases", path: "/product/releases" },
  ],
  Company: [
    { label: "About Us", path: "/company/about" },
    { label: "Careers", path: "/company/careers" },
    { label: "Media", path: "/company/media" },
    { label: "Contact", path: "/company/contact" },
  ],
  Resources: [
    { label: "Blog", path: "/resources/blog" },
    { label: "Newsletter", path: "/resources/newsletter" },
    { label: "Events", path: "/resources/events" },
    { label: "Help Center", path: "/resources/help" },
  ],
  Social: [
    { label: "Twitter", path: "https://twitter.com" },
    { label: "LinkedIn", path: "https://linkedin.com" },
    { label: "Facebook", path: "https://facebook.com" },
    { label: "GitHub", path: "https://github.com" },
  ],
};

const bottomLinks = [
  { label: "Terms of Service", path: "/terms" },
  { label: "Policy service", path: "/policy" },
  { label: "Cookie Policy", path: "/cookies" },
  { label: "Partners", path: "/partners" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t w-full">
      <div className="px-4 md:px-6 lg:px-16 py-8 md:py-12">
        {/* Top section: brand col + spacer + link columns */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-0">
          {/* Brand + Subscribe */}
          <div className="w-full md:w-64 shrink-0">
            <h2 className="text-lg md:text-xl font-bold mb-3">NewsHorizon</h2>
            <p className="text-xs md:text-sm text-gray-500 mb-6 leading-relaxed">
              Craft narratives that ignite inspiration, knowledge, and
              entertainment.
            </p>
            <div className="flex gap-2 mr-10">
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 text-xs md:text-sm px-3 py-2 rounded-l-md flex-1 focus:outline-none focus:border-red-400 min-w-0"
              />
              <button
                type="button"
                className="bg-red-500 text-white text-xs md:text-sm px-3 md:px-4 py-2 rounded-r-md hover:bg-red-600 transition whitespace-nowrap shrink-0"
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Gap between brand and link columns */}
          <div className="hidden md:block md:w-24 shrink-0" />

          {/* Link columns — evenly spread across remaining space */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 flex-1">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h3 className="font-semibold text-gray-900 mb-4 text-sm">
                  {heading}
                </h3>
                <ul className="space-y-3 list-none p-0 m-0">
                  {links.map(({ label, path }) => (
                    <li key={label}>
                      {path.startsWith("http") ? (
                        <a
                          href={path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-500 hover:text-gray-900 transition no-underline"
                        >
                          {label}
                        </a>
                      ) : (
                        <Link
                          to={path}
                          className="text-sm text-gray-500 hover:text-gray-900 transition no-underline"
                        >
                          {label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full-width divider — outside the padded container so it spans 100% */}
      <div className="w-full border-t" />

      {/* Bottom bar */}
      <div className="px-4 md:px-6 lg:px-16 py-4 md:py-6 flex flex-col items-start md:items-center justify-between gap-2 md:gap-4">
        <p className="text-xs text-gray-400">
          © 2022 NewsHorizon. All rights reserved
        </p>
        <div className="flex flex-wrap gap-3 md:gap-6 text-xs text-gray-400">
          {bottomLinks.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              className="hover:text-gray-700 transition no-underline whitespace-nowrap"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
