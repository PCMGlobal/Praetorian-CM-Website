import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { client } from "@/lib/sanity";

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
  body: any[];
};

async function getArticle(slug: string): Promise<Article | null> {
  try {
    return await client.fetch(
      `*[_type == "article" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        category,
        excerpt,
        publishedAt,
        readTime,
        "coverImageUrl": heroImage.asset->url,
        body
      }`,
      { slug }
    );
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  try {
    const slugs: { slug: string }[] = await client.fetch(
      `*[_type == "article" && defined(slug.current)] { "slug": slug.current }`
    );
    return slugs.map((s) => ({ slug: s.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const article = await getArticle(params.slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: `${article.title} | Praetorian Construction Management`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: article.coverImageUrl ? [{ url: article.coverImageUrl }] : [],
    },
  };
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-CA", { day: "numeric", month: "long", year: "numeric" });
}

const ptComponents = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p style={{ fontSize: "17px", lineHeight: "1.75", color: "#3a3f42", margin: "0 0 22px" }}>{children}</p>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "26px", color: "#003E52", margin: "42px 0 16px", lineHeight: "1.25" }}>{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "21px", color: "#003E52", margin: "32px 0 12px", lineHeight: "1.25" }}>{children}</h3>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote style={{ borderLeft: "3px solid #B06533", paddingLeft: "20px", margin: "28px 0", color: "#5b6266", fontStyle: "italic" }}>{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul style={{ fontSize: "17px", lineHeight: "1.75", color: "#3a3f42", margin: "0 0 22px", paddingLeft: "22px" }}>{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol style={{ fontSize: "17px", lineHeight: "1.75", color: "#3a3f42", margin: "0 0 22px", paddingLeft: "22px" }}>{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li style={{ marginBottom: "6px" }}>{children}</li>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <li style={{ marginBottom: "6px" }}>{children}</li>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong style={{ fontWeight: "700", color: "#1a2226" }}>{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em>{children}</em>
    ),
  },
};

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug);
  if (!article) notFound();

  return (
    <main>
      <section style={{ position: "relative", overflow: "hidden", minHeight: "420px" }}>
        <div style={{ position: "absolute", inset: "0", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", ...(article.coverImageUrl ? { backgroundImage: `url(${article.coverImageUrl})` } : { background: "#003E52" }) }} />
        <div style={{ position: "absolute", inset: "0", background: "linear-gradient(100deg,rgba(0,15,22,.9) 0%,rgba(0,25,36,.82) 48%,rgba(0,15,22,.6) 100%)" }} />
        <div style={{ position: "relative", maxWidth: "1400px", margin: "0 auto", padding: "clamp(40px,5vw,72px) clamp(16px,4vw,44px)" }}>
          <Link href="/news" style={{ background: "none", border: "0", padding: "0", color: "#e3ab7c", fontSize: "13px", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px", fontFamily: "var(--font-sora), sans-serif", fontWeight: "600", textDecoration: "none" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
            News and Insights
          </Link>
          <div style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "700", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "#e3ab7c", marginTop: "22px" }}>{article.category}</div>
          <h1 style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "800", fontSize: "clamp(28px,3.8vw,52px)", margin: "14px 0 0", color: "#fff", lineHeight: "1.1", maxWidth: "28ch" }}>{article.title}</h1>
          <div style={{ display: "flex", gap: "16px", marginTop: "18px", fontSize: "13px", color: "#9ab0b8" }}>
            <span>{formatDate(article.publishedAt)}</span>
            {article.readTime && <span>{article.readTime} min read</span>}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: "740px", margin: "0 auto", padding: "clamp(46px,6vw,72px) clamp(16px,4vw,44px)" }}>
        {article.excerpt && (
          <p style={{ fontSize: "19px", lineHeight: "1.65", color: "#003E52", fontWeight: "500", margin: "0 0 36px", borderBottom: "1px solid #e4e6e7", paddingBottom: "36px" }}>{article.excerpt}</p>
        )}
        {article.body && (
          <PortableText value={article.body} components={ptComponents} />
        )}
        <div style={{ marginTop: "52px", paddingTop: "36px", borderTop: "1px solid #e4e6e7" }}>
          <Link href="/news" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#B06533", fontFamily: "var(--font-sora), sans-serif", fontWeight: "600", fontSize: "14px", textDecoration: "none" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
            Back to News and Insights
          </Link>
        </div>
      </section>

    </main>
  );
}