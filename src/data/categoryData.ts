// src/data/categoryData.ts

export type Article = {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  authorAvatar: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
};

const allArticles: Article[] = [
  // WORLD
  {
    id: 1,
    title: "Ukraine dam breach leaves hundreds of thousands without water",
    excerpt:
      "Hundreds of thousands of people have been left without access to normal drinking water since the breach of the Kakhovka dam.",
    author: "Jack Harleom",
    authorAvatar: "https://i.pravatar.cc/40?img=11",
    date: "Jun 12, 2023",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600&h=400&fit=crop",
    category: "world",
  },
  {
    id: 2,
    title: "What Turkey's new cabinet says about where the country is headed",
    excerpt:
      "Turkey's newly appointed cabinet signals a shift in economic and diplomatic policy under President Erdogan's continued leadership.",
    author: "Reine Warner",
    authorAvatar: "https://i.pravatar.cc/40?img=33",
    date: "Jun 11, 2023",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=400&fit=crop",
    category: "world",
  },
  {
    id: 3,
    title: "Félicien Kabuga: Rwanda genocide suspect unfit to stand trial",
    excerpt:
      "The UN-backed court ruled that the 87-year-old suspect, once one of the world's most wanted men, is mentally unfit to face justice.",
    author: "Oliver Grey",
    authorAvatar: "https://i.pravatar.cc/40?img=15",
    date: "Jun 10, 2023",
    readTime: "3 min read",
    image:
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=600&h=400&fit=crop",
    category: "world",
  },
  {
    id: 4,
    title: "Brutal killings of two young girls highlight India's safety crisis",
    excerpt:
      "The incidents have sparked nationwide outrage and calls for systemic reform to protect women and children across the country.",
    author: "Nina Waters",
    authorAvatar: "https://i.pravatar.cc/40?img=9",
    date: "Jun 09, 2023",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=400&fit=crop",
    category: "world",
  },

  // POLITICS
  {
    id: 5,
    title:
      "How legal immigration might solve two of America's toughest problems",
    excerpt:
      "Economists argue that targeted immigration reform could ease labour shortages and stabilise the social security system.",
    author: "Jamar Burns",
    authorAvatar: "https://i.pravatar.cc/40?img=17",
    date: "Jun 12, 2023",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&h=400&fit=crop",
    category: "politics",
  },
  {
    id: 6,
    title:
      "Fact check: Trump boasts about a massive oil purchase that never happened",
    excerpt:
      "Multiple fact-checkers and energy analysts have found no record of the deal the former president repeatedly cites at rallies.",
    author: "Reine Warner",
    authorAvatar: "https://i.pravatar.cc/40?img=33",
    date: "Jun 10, 2023",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=600&h=400&fit=crop",
    category: "politics",
  },
  {
    id: 7,
    title: "Senate passes sweeping climate bill in rare bipartisan vote",
    excerpt:
      "The legislation includes funding for renewable energy infrastructure and new emissions targets for 2035.",
    author: "Efrain Howell",
    authorAvatar: "https://i.pravatar.cc/40?img=12",
    date: "Jun 08, 2023",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop",
    category: "politics",
  },

  // BUSINESS
  {
    id: 8,
    title: "North Korea hackers suspected in new $35 million crypto heist",
    excerpt:
      "Blockchain analysts traced the stolen funds through a complex web of mixers and exchanges back to known DPRK wallets.",
    author: "Nina Waters",
    authorAvatar: "https://i.pravatar.cc/40?img=9",
    date: "Jun 12, 2023",
    readTime: "3 min read",
    image:
      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=600&h=400&fit=crop",
    category: "business",
  },
  {
    id: 9,
    title:
      "They said we were getting a recession. Instead, we're getting close to a bull market",
    excerpt:
      "Equity markets have surged over 20% from their October lows, technically entering bull market territory despite earlier fears.",
    author: "Jamar Burns",
    authorAvatar: "https://i.pravatar.cc/40?img=17",
    date: "Jun 11, 2023",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
    category: "business",
  },
  {
    id: 10,
    title: "CNN Chairman and CEO Chris Licht is out after tumultuous tenure",
    excerpt:
      "His exit follows a critical profile and growing internal discontent over the network's editorial direction under his leadership.",
    author: "Jimena Morrow",
    authorAvatar: "https://i.pravatar.cc/40?img=5",
    date: "Jun 09, 2023",
    readTime: "3 min read",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop",
    category: "business",
  },

  // TECH
  {
    id: 11,
    title: "The future of AI in African newsrooms",
    excerpt:
      "Across the continent, media organisations are experimenting with AI-assisted reporting, raising both opportunities and ethical questions.",
    author: "Efrain Howell",
    authorAvatar: "https://i.pravatar.cc/40?img=12",
    date: "Jun 12, 2023",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=400&fit=crop",
    category: "tech",
  },
  {
    id: 12,
    title:
      "Apple's Vision Pro headset lands in stores — here's what reviewers say",
    excerpt:
      "Early hands-on reviews praise the display quality but raise concerns about weight, battery life and the $3,499 price tag.",
    author: "Oliver Grey",
    authorAvatar: "https://i.pravatar.cc/40?img=15",
    date: "Jun 11, 2023",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1633113215168-e0358b0b6ef4?w=600&h=400&fit=crop",
    category: "tech",
  },
  {
    id: 13,
    title:
      "The double-decker airplane seat is back. Here's what it looks like now",
    excerpt:
      "A startup is reviving the controversial stacked seating concept with a redesign that aims to address passenger comfort concerns.",
    author: "Nina Waters",
    authorAvatar: "https://i.pravatar.cc/40?img=9",
    date: "Jun 10, 2023",
    readTime: "3 min read",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop",
    category: "tech",
  },

  // HEALTH
  {
    id: 14,
    title: "Pope Francis undergoes abdominal surgery in latest health concern",
    excerpt:
      "The 86-year-old pontiff was taken to a Rome hospital for what the Vatican described as a scheduled procedure.",
    author: "Rey Creig",
    authorAvatar: "https://i.pravatar.cc/40?img=22",
    date: "Jun 11, 2023",
    readTime: "3 min read",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    category: "health",
  },
  {
    id: 15,
    title: "New study links ultra-processed foods to increased depression risk",
    excerpt:
      "Researchers analysed data from over 31,000 adults and found a significant correlation between processed food consumption and mental health.",
    author: "Jimena Morrow",
    authorAvatar: "https://i.pravatar.cc/40?img=5",
    date: "Jun 10, 2023",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&h=400&fit=crop",
    category: "health",
  },
  {
    id: 16,
    title: "WHO warns of rising antimicrobial resistance as a global threat",
    excerpt:
      "Drug-resistant infections now kill 1.27 million people annually and the figure is expected to rise sharply by 2050.",
    author: "Jack Harleom",
    authorAvatar: "https://i.pravatar.cc/40?img=11",
    date: "Jun 08, 2023",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&fit=crop",
    category: "health",
  },

  // ENTERTAINMENT
  {
    id: 17,
    title: "This country has the best wines in the world for 2023",
    excerpt:
      "A major international wine competition has awarded top honours to a country that is quickly becoming a dominant force in global viticulture.",
    author: "Reine Warner",
    authorAvatar: "https://i.pravatar.cc/40?img=33",
    date: "Jun 11, 2023",
    readTime: "3 min read",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&h=400&fit=crop",
    category: "entertainment",
  },
  {
    id: 18,
    title: "Hollywood writers strike enters third week with no deal in sight",
    excerpt:
      "Negotiations between the WGA and major studios remain stalled over residuals from streaming platforms and the use of AI-generated scripts.",
    author: "Jimena Morrow",
    authorAvatar: "https://i.pravatar.cc/40?img=5",
    date: "Jun 10, 2023",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop",
    category: "entertainment",
  },
  {
    id: 19,
    title: "Beyoncé's Renaissance Tour breaks box office records in Europe",
    excerpt:
      "The first leg of the tour has grossed over $250 million, making it one of the highest-earning concert tours in European history.",
    author: "Nina Waters",
    authorAvatar: "https://i.pravatar.cc/40?img=9",
    date: "Jun 08, 2023",
    readTime: "3 min read",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop",
    category: "entertainment",
  },

  // SPORTS
  {
    id: 20,
    title:
      "F1 teams had big upgrades planned for Imola — but what happens now?",
    excerpt:
      "The cancellation of the Emilia Romagna Grand Prix has disrupted development schedules for several teams heading into the summer.",
    author: "Oliver Grey",
    authorAvatar: "https://i.pravatar.cc/40?img=15",
    date: "Jun 12, 2023",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    category: "sports",
  },
  {
    id: 21,
    title: "Stella explains what Rob Marshall will bring to McLaren in 2024",
    excerpt:
      "The McLaren team principal outlined why Marshall's technical expertise will be key to the team's title challenge next season.",
    author: "Oliver Grey",
    authorAvatar: "https://i.pravatar.cc/40?img=15",
    date: "Jun 10, 2023",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&h=400&fit=crop",
    category: "sports",
  },
  {
    id: 22,
    title:
      "NBA Finals: Heat push series to Game 7 with stunning fourth-quarter comeback",
    excerpt:
      "Miami erased a 17-point deficit in the final quarter to force a decisive seventh game against the Denver Nuggets.",
    author: "Jamar Burns",
    authorAvatar: "https://i.pravatar.cc/40?img=17",
    date: "Jun 09, 2023",
    readTime: "3 min read",
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=400&fit=crop",
    category: "sports",
  },

  // LIFESTYLE
  {
    id: 23,
    title:
      "The minimalist home trend that is taking over interior design in 2023",
    excerpt:
      "Designers are leaning into calm, clutter-free spaces with natural materials as homeowners seek refuge from overstimulation.",
    author: "Jimena Morrow",
    authorAvatar: "https://i.pravatar.cc/40?img=5",
    date: "Jun 12, 2023",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop",
    category: "lifestyle",
  },
  {
    id: 24,
    title: "How to build a morning routine that actually sticks",
    excerpt:
      "Behavioural scientists share the habits that research shows are most likely to last — and the common mistakes that derail most people.",
    author: "Reine Warner",
    authorAvatar: "https://i.pravatar.cc/40?img=33",
    date: "Jun 11, 2023",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop",
    category: "lifestyle",
  },
  {
    id: 25,
    title: "The best travel destinations for solo travellers in 2023",
    excerpt:
      "From the temples of Kyoto to the markets of Marrakech, these cities top the list for safety, affordability and solo-friendly culture.",
    author: "Nina Waters",
    authorAvatar: "https://i.pravatar.cc/40?img=9",
    date: "Jun 09, 2023",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=600&h=400&fit=crop",
    category: "lifestyle",
  },
];

export const categories = [
  "world",
  "politics",
  "business",
  "tech",
  "health",
  "entertainment",
  "sports",
  "lifestyle",
];

export function getArticlesByCategory(category: string): Article[] {
  return allArticles.filter((a) => a.category === category.toLowerCase());
}

export function getAllArticles(): Article[] {
  return allArticles;
}
