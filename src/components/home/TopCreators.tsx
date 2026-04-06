// src/components/Footer.tsx

const footerLinks: Record<string, string[]> = {
  Product: ["Overview", "Features", "Solution", "Releases"],
  Company: ["About Us", "Careers", "Media", "Contact"],
  Resources: ["Blog", "Newsletter", "Events", "Help Center"],
  Social: ["Twitter", "LinkedIn", "Facebook", "GitHub"],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold font-serif mb-3">NewsHub</h2>
          <p className="text-sm text-gray-500 mb-5 leading-relaxed">
            Craft narratives that ignite inspiration, knowledge, and
            entertainment.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
            <input
              type="email"
              placeholder="Your Email"
              className="border text-sm px-3 py-2 rounded-md flex-1 focus:outline-none focus:border-red-400"
            />
            <button
              type="submit"
              className="bg-red-500 text-white text-sm px-4 py-2 rounded-md hover:bg-red-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Links */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h3 className="font-bold text-gray-900 mb-4 text-sm">{heading}</h3>
            <ul className="space-y-2 list-none p-0 m-0">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-gray-900 transition no-underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-gray-400">
          © 2022 NewsHub. All rights reserved
        </p>
        <div className="flex gap-6 text-xs text-gray-400">
          {[
            "Terms of Service",
            "Policy service",
            "Cookie Policy",
            "Partners",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-gray-700 transition no-underline"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
