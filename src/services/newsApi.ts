// src/services/newsApi.ts

const GNEWS_API_KEY = "d84fcc36a5a1f32ca4920edff879f1a3";
const THENEWS_API_KEY = "j16nPaqPRiW8HBQJWQR8J5hohKj0h19RrsBZpsN9";

export type NewsArticle = {
  id: string;
  uuid: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  source: string;
  sourceIcon: string;
  time: string;
  category: string;
  url: string;
  publishedAt: string;
};

export function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 2) return "just now";
  if (mins < 60) return `${mins} mins ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs} hour${hrs !== 1 ? "s" : ""} ago`;
  const days = Math.floor(hrs / 24);
  return `${days} day${days !== 1 ? "s" : ""} ago`;
}

export function initials(source: string): string {
  return source
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 3);
}

function mapTnaArticle(a: any, i: number): NewsArticle {
  return {
    id: a.uuid ?? `tna-${i}`,
    uuid: a.uuid ?? "",
    title: a.title ?? "Untitled",
    excerpt: a.description ?? a.snippet ?? "",
    content: a.body ?? a.snippet ?? a.description ?? "",
    image:
      a.image_url && a.image_url.startsWith("http")
        ? a.image_url
        : "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop",
    source: a.source ?? "News",
    sourceIcon: initials(a.source ?? "N"),
    time: timeAgo(a.published_at),
    category: a.categories?.[0]
      ? a.categories[0].charAt(0).toUpperCase() + a.categories[0].slice(1)
      : "News",
    url: a.url ?? "",
    publishedAt: a.published_at ?? "",
  };
}

// ── GNews: breaking ticker ──────────────────────────────────────────
export async function fetchBreakingHeadlines(): Promise<string[]> {
  try {
    const res = await fetch(
      `https://gnews.io/api/v4/top-headlines?lang=en&max=6&apikey=${GNEWS_API_KEY}`,
    );
    if (!res.ok) throw new Error();
    const data = await res.json();
    return (data.articles ?? []).map((a: any) => a.title as string);
  } catch {
    return [];
  }
}

// ── Hero main articles ──────────────────────────────────────────────
export async function fetchHeroArticles(count = 5): Promise<NewsArticle[]> {
  try {
    const res = await fetch(
      `https://api.thenewsapi.com/v1/news/top?api_token=${THENEWS_API_KEY}&language=en&limit=${count}`,
    );
    if (!res.ok) throw new Error();
    const data = await res.json();
    return (data.data ?? []).map(mapTnaArticle);
  } catch {
    return [];
  }
}

// ── ✅ FIXED: Hero side articles (this was missing) ─────────────────
export async function fetchHeroSideArticles(): Promise<NewsArticle[]> {
  try {
    const res = await fetch(
      `https://api.thenewsapi.com/v1/news/top?api_token=${THENEWS_API_KEY}&language=en&limit=4`,
    );
    if (!res.ok) throw new Error();
    const data = await res.json();
    return (data.data ?? []).map(mapTnaArticle);
  } catch {
    return [];
  }
}

// ── Latest news feed ────────────────────────────────────────────────
export async function fetchLatestNews(count = 6): Promise<NewsArticle[]> {
  try {
    const res = await fetch(
      `https://api.thenewsapi.com/v1/news/top?api_token=${THENEWS_API_KEY}&language=en&limit=${count}`,
    );
    if (!res.ok) throw new Error();
    const data = await res.json();
    return (data.data ?? []).map(mapTnaArticle);
  } catch {
    return [];
  }
}

// ── Category news ───────────────────────────────────────────────────
const CATEGORY_MAP: Record<string, string> = {
  world: "general",
  politics: "politics",
  business: "business",
  tech: "tech",
  health: "health",
  entertainment: "entertainment",
  sports: "sports",
  lifestyle: "lifestyle",
};

export async function fetchNewsByCategory(
  category: string,
  count = 9,
): Promise<NewsArticle[]> {
  const mapped = CATEGORY_MAP[category.toLowerCase()] ?? "general";
  try {
    const res = await fetch(
      `https://api.thenewsapi.com/v1/news/top?api_token=${THENEWS_API_KEY}&language=en&categories=${mapped}&limit=${count}`,
    );
    if (!res.ok) throw new Error();
    const data = await res.json();
    return (data.data ?? []).map(mapTnaArticle);
  } catch {
    return [];
  }
}

// ── Single article ──────────────────────────────────────────────────
export async function fetchArticleByUUID(
  uuid: string,
): Promise<NewsArticle | null> {
  try {
    const res = await fetch(
      `https://api.thenewsapi.com/v1/news/uuid/${uuid}?api_token=${THENEWS_API_KEY}`,
    );
    if (!res.ok) throw new Error();
    const a = await res.json();
    return mapTnaArticle(a, 0);
  } catch {
    return null;
  }
}

// ── Search ──────────────────────────────────────────────────────────
export async function searchNews(query: string): Promise<NewsArticle[]> {
  try {
    const res = await fetch(
      `https://api.thenewsapi.com/v1/news/all?api_token=${THENEWS_API_KEY}&language=en&search=${encodeURIComponent(query)}&limit=9`,
    );
    if (!res.ok) throw new Error();
    const data = await res.json();
    return (data.data ?? []).map(mapTnaArticle);
  } catch {
    return [];
  }
}
