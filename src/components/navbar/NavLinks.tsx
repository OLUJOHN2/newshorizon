// components/navbar/NavLinks.tsx

const links = [
  "World",
  "Politics",
  "Business",
  "Tech",
  "Health",
  "Entertainment",
  "Sport",
  "Lifestyle",
];

export default function NavLinks() {
  return (
    <ul className="hidden md:flex gap-6 text-sm text-gray-700 font-medium">
      {links.map((link) => (
        <li key={link}>
          <a href={`/category/${link.toLowerCase()}`}>{link}</a>
        </li>
      ))}
    </ul>
  );
}
