// src/components/home/TopCreators.tsx
import { ChevronRight } from "lucide-react";

const creators = [
  {
    name: "Jimena Morrow",
    outlet: "BBC News",
    avatar: "https://i.pravatar.cc/80?img=5",
  },
  {
    name: "Efrain Howell",
    outlet: "iDN News",
    avatar: "https://i.pravatar.cc/80?img=12",
  },
  {
    name: "Nina Waters",
    outlet: "Bulettin Inc",
    avatar: "https://i.pravatar.cc/80?img=9",
  },
  {
    name: "Jamar Burns",
    outlet: "CNN",
    avatar: "https://i.pravatar.cc/80?img=17",
  },
];

export default function TopCreators() {
  return (
    <section className="px-6 py-8 bg-gray-50 border-t">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-bold text-gray-900 font-serif">
          Top Creator
        </h2>
        <a
          href="/creators"
          className="text-sm text-red-500 font-semibold flex items-center gap-1 hover:gap-2 transition-all no-underline"
        >
          See all <ChevronRight className="w-4 h-4" />
        </a>
      </div>

      <div className="flex gap-10 flex-wrap">
        {creators.map((creator, i) => (
          <div key={i} className="flex items-center gap-3 group cursor-pointer">
            <img
              src={creator.avatar}
              alt={creator.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-transparent group-hover:border-red-400 transition"
            />
            <div>
              <p className="text-sm font-bold text-gray-800 group-hover:text-red-600 transition">
                {creator.name}
              </p>
              <p className="text-xs text-gray-500">{creator.outlet}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
