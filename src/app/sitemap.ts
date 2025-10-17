import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://web-saora.vercel.app'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/why-cant-i-fall-asleep`,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/science-of-white-noise`,
      lastModified: new Date('2025-01-12'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/best-bedtime-habits`,
      lastModified: new Date('2025-01-10'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/stop-overthinking-at-night`,
      lastModified: new Date('2025-01-08'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/screen-time-sleep-impact`,
      lastModified: new Date('2025-01-05'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/anxiety-sleep-issues`,
      lastModified: new Date('2025-01-03'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/ultimate-guide-deep-sleep`,
      lastModified: new Date('2024-12-30'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/how-many-hours-sleep`,
      lastModified: new Date('2024-12-28'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/natural-sleep-aids`,
      lastModified: new Date('2024-12-25'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/perfect-sleep-environment`,
      lastModified: new Date('2024-12-22'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}

