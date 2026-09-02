import { NextRequest, NextResponse } from "next/server";
import { client } from "@/lib/sanity";

const BATCH = 4;

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const start = parseInt(searchParams.get("start") || "0", 10);
  try {
    const articles = await client.fetch(
      `*[_type == "article" && defined(slug.current)] | order(publishedAt desc) [${start}...${start + BATCH}] {
        _id, title, slug, category, excerpt, publishedAt, readTime,
        "coverImageUrl": heroImage.asset->url
      }`
    );
    return NextResponse.json(articles);
  } catch {
    return NextResponse.json([], { status: 500 });
  }
}