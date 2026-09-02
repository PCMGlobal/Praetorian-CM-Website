"use client";

import { useState } from "react";
import Link from "next/link";

const BATCH = 4;

type Article = {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  excerpt: string;
  publishedAt: string;
  readTime: number;
  coverImageUrl: string | null;
};

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-CA", { month: "short", year: "numeric" });
}

async function fetchMore(start: number): Promise<Article[]> {
  try {
    const res = await fetch(`/api/articles?start=${start}`);
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default function ArticleGrid({
  initialArticles,
  total,
}: {
  initialArticles: Article[];
  total: number;
}) {
  const [articles, setArticles] = useState<Article[]>(initialArticles);
  const [loading, setLoading] = useState(false);

  const hasMore = articles.length < total;

  async function loadMore() {
    setLoading(true);
    try {
      const next = await fetchMore(articles.length);
      setArticles((prev) => [...prev, ...next]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "clamp(20px,2.6vw,30px)" }}>
        {articles.map((article) => (
          <Link
            key={article._id}
            href={`/news/${article.slug.current}`}
            data-reveal=""
            style={{ textDecoration: "none", color: "inherit", display: "block", background: "#fff", boxShadow: "0 2px 14px rgba(0,20,30,.06)" }}
          >
            <div style={{ position: "relative", height: "210px", overflow: "hidden" }}>
              {article.coverImageUrl ? (
                <div style={{ position: "absolute", inset: "0", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundImage: `url(${article.coverImageUrl})` }} />
              ) : (
                <div style={{ position: "absolute", inset: "0", background: "#003E52" }} />
              )}
            </div>
            <div style={{ padding: "20px 22px 24px" }}>
              <span style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "600", fontSize: "11px", letterSpacing: ".1em", textTransform: "uppercase", color: "#B06533" }}>{article.category}</span>
              <h4 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "20px", margin: "10px 0 8px", lineHeight: "1.25", color: "#003E52" }}>{article.title}</h4>
              <p style={{ fontSize: "13.5px", lineHeight: "1.6", color: "#5b6266", margin: "0 0 14px" }}>{article.excerpt}</p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "12.5px", color: "#7d8288" }}>
                <span>{formatDate(article.publishedAt)}{article.readTime ? ` \u00B7 ${article.readTime} min read` : ""}</span>
                <span style={{ color: "#B06533", fontWeight: "600" }}>Read</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {hasMore && (
        <div style={{ textAlign: "center", marginTop: "46px" }}>
          <button
            onClick={loadMore}
            disabled={loading}
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: loading ? "#7d8288" : "#003E52", color: "#fff", border: "none", cursor: loading ? "default" : "pointer", minHeight: "44px", padding: "0 28px", fontFamily: "var(--font-sora), sans-serif", fontWeight: "600", fontSize: "14px" }}
          >
            {loading ? "Loading..." : "Load More Articles"}
          </button>
        </div>
      )}
    </>
  );
}