// src/components/navbar/NavLinks.tsx

const links = [
  "US",
  "World",
  "Politics",
  "Business",
  "Opinion",
  "Health",
  "Entertainment",
  "Travel",
  "Sports",
];

export default function NavLinks() {
  return (
    <ul className="hidden md:flex gap-6 text-sm text-gray-300 font-medium list-none m-0 p-0">
      {links.map((link) => (
        <li key={link}>
          <a
            href={`/category/${link.toLowerCase()}`}
            className="hover:text-white transition-colors no-underline text-gray-300"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  );
}
