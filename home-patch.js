const fs = require('fs');
const bt = String.fromCharCode(96);
const file = 'C:\\Users\\Austin\\pcml-website\\app\\page.tsx';
let c = fs.readFileSync(file, 'utf8');
c = c.replace(/\r\n/g, '\n');

c = c.replace(
  'import Link from "next/link";',
  'import Link from "next/link";\nimport { client } from "@/lib/sanity";'
);

const additions = '\ntype HomeArticle = {\n  _id: string;\n  title: string;\n  slug: { current: string };\n  category: string;\n  publishedAt: string;\n  readTime: number;\n  coverImageUrl: string | null;\n};\n\nfunction formatHomeDate(dateStr) {\n  if (!dateStr) return "";\n  const d = new Date(dateStr);\n  return d.toLocaleDateString("en-CA", { month: "short", year: "numeric" });\n}\n\nasync function getLatestArticles() {\n  try {\n    return await client.fetch(\n      ' + bt + '*[_type == "article" && defined(slug.current)] | order(publishedAt desc) [0...3] {\n        _id, title, slug, category, publishedAt, readTime,\n        "coverImageUrl": heroImage.asset->url\n      }' + bt + '\n    );\n  } catch {\n    return [];\n  }\n}\n';

c = c.replace(
  'export default function HomePage()',
  additions + '\nexport default async function HomePage()'
);

c = c.replace(
  'export default async function HomePage() {\n  return (',
  'export default async function HomePage() {\n  const latestArticles = await getLatestArticles();\n  return ('
);

const gridMarker = "              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))'";
const gridStart = c.indexOf(gridMarker);
const sectionCloseMarker = '\n          </section>\n        </div>\n    </main>';
const sectionEnd = c.indexOf(sectionCloseMarker, gridStart);

if (gridStart === -1 || sectionEnd === -1) {
  console.error('Could not find grid. gridStart:', gridStart, 'sectionEnd:', sectionEnd);
  process.exit(1);
}

const newGrid =
  "              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(20px,2.6vw,30px)' }}>\n" +
  "                {latestArticles.map((article) => (\n" +
  "                  <Link\n" +
  "                    key={article._id}\n" +
  "                    href={'/news/' + article.slug.current}\n" +
  "                    data-reveal=''\n" +
  "                    style={{ textDecoration: 'none', color: 'inherit', display: 'block', background: '#fff', boxShadow: '0 2px 14px rgba(0,20,30,.06)' }}\n" +
  "                  >\n" +
  "                    <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>\n" +
  "                      {article.coverImageUrl ? (\n" +
  "                        <div style={{ position: 'absolute', inset: '0', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundImage: 'url(' + article.coverImageUrl + ')' }} />\n" +
  "                      ) : (\n" +
  "                        <div style={{ position: 'absolute', inset: '0', background: '#003E52' }} />\n" +
  "                      )}\n" +
  "                    </div>\n" +
  "                    <div style={{ padding: '18px 20px 22px' }}>\n" +
  "                      <span style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600', fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', color: '#B06533' }}>{article.category}</span>\n" +
  "                      <h4 style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '20px', margin: '10px 0 8px', lineHeight: '1.25', color: '#003E52' }}>{article.title}</h4>\n" +
  "                      <div style={{ fontSize: '12.5px', color: '#7d8288' }}>{formatHomeDate(article.publishedAt)}{article.readTime ? ' \\u00B7 ' + article.readTime + ' min read' : ''}</div>\n" +
  "                    </div>\n" +
  "                  </Link>\n" +
  "                ))}\n" +
  "              </div>\n" +
  "              <div style={{ textAlign: 'center', marginTop: '40px' }}>\n" +
  "                <Link href='/news' style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#003E52', color: '#fff', textDecoration: 'none', minHeight: '44px', padding: '0 24px', fontFamily: 'var(--font-sora), sans-serif', fontWeight: '600', fontSize: '14px' }}>View All Articles</Link>\n" +
  "              </div>";

c = c.substring(0, gridStart) + newGrid + c.substring(sectionEnd);
fs.writeFileSync(file, c, 'utf8');
console.log('Done. Lines:', c.split('\n').length);
