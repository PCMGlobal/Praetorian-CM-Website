import type { Metadata } from "next";
import Link from "next/link";
import { client } from "@/lib/sanity";
import ArticleGrid from "@/app/news/ArticleGrid";

export const metadata: Metadata = {
  title: "News and Insights | Praetorian Construction Management",
  description: "Perspectives from the owner's side of the table. Cost intelligence, project controls and safety leadership.",
};

export const revalidate = 60;

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

async function getInitialArticles(): Promise<Article[]> {
  try {
    return await client.fetch(
      `*[_type == "article" && defined(slug.current)] | order(publishedAt desc) [0...4] {
        _id, title, slug, category, excerpt, publishedAt, readTime,
        "coverImageUrl": heroImage.asset->url
      }`
    );
  } catch {
    return [];
  }
}

async function getTotalCount(): Promise<number> {
  try {
    return await client.fetch(`count(*[_type == "article" && defined(slug.current)])`);
  } catch {
    return 0;
  }
}

export default async function NewsPage() {
  const [articles, total] = await Promise.all([getInitialArticles(), getTotalCount()]);
  return (
    <main>
      <div>
        <section style={{ position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: "0", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundImage: "url(https://images.unsplash.com/photo-1444136393836-70a14068c669?w=1400&auto=format&fit=crop&q=80)" }} />
          <div style={{ position: "absolute", inset: "0", background: "linear-gradient(100deg,rgba(0,15,22,.9) 0%,rgba(0,25,36,.72) 48%,rgba(0,15,22,.4) 100%)" }} />
          <div style={{ position: "relative", maxWidth: "1400px", margin: "0 auto", padding: "clamp(40px,5vw,72px) clamp(16px,4vw,44px)" }}>
            <Link href="/" style={{ background: "none", border: "0", padding: "0", color: "#e3ab7c", fontSize: "13px", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px", fontFamily: "var(--font-sora), sans-serif", fontWeight: "600", textDecoration: "none" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
              Home
            </Link>
            <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#e3ab7c", marginTop: "22px" }}>News and Insights</div>
            <h1 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "800", fontSize: "clamp(34px,4.6vw,58px)", margin: "14px 0 0", color: "#fff", lineHeight: "1.04", maxWidth: "26ch" }}>Perspectives from the owner's side of the table</h1>
            <p style={{ fontSize: "16.5px", lineHeight: "1.62", maxWidth: "62ch", color: "#c3d0d4", margin: "18px 0 0" }}>Praetorian's team writes about cost intelligence, project controls, safety leadership, and the application of AI to mining construction management.</p>
          </div>
        </section>
        <section style={{ maxWidth: "1400px", margin: "0 auto", padding: "clamp(46px,6vw,84px) clamp(16px,4vw,44px)" }}>
          {articles.length === 0 ? (
            <p style={{ color: "#5b6266", fontSize: "16px", textAlign: "center" }}>No articles published yet. Check back soon.</p>
          ) : (
            <ArticleGrid initialArticles={articles} total={total} />
          )}
          <div style={{ textAlign: "center", marginTop: "46px", paddingTop: "34px", borderTop: "1px solid #e4e6e7" }}>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#003E52", color: "#fff", textDecoration: "none", minHeight: "44px", padding: "0 22px", fontFamily: "var(--font-sora), sans-serif", fontWeight: "600", fontSize: "14px" }}>Subscribe to Insights</Link>
          </div>
        </section>
      </div>
    </main>
  );
}