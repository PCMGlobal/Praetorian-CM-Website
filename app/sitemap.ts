import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://praetoriancm.com'
  const pages = [
    '',
    '/about',
    '/services',
    '/praetorian-iq',
    '/projects',
    '/hsse',
    '/careers',
    '/news',
    '/contact',
  ]
  return pages.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.8,
  }))
}