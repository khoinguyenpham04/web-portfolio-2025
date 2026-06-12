import { MetadataRoute } from 'next';
import { getAllProjectContent } from '@/lib/projects-content';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://noahpham.me';

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = getAllProjectContent().map((record) => ({
    url: `${BASE_URL}/projects/${record.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/resume`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...projectUrls,
  ];
}
