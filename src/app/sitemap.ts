import { MetadataRoute } from 'next';
import { appProjectEntries } from '@/lib/projectRoutes';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: 'https://async-atharv.com',
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://async-atharv.com/about',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://async-atharv.com/#hello',
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://async-atharv.com/#title',
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://async-atharv.com/#social-content',
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://async-atharv.com/#skills',
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://async-atharv.com/#intro-projects',
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // Project sections change less often → monthly
    {
      url: 'https://async-atharv.com/#personal-projects',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://async-atharv.com/#AI-and-web3-projects',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://async-atharv.com/#Opensource-projects',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // App detail pages
    ...appProjectEntries.map((entry) => ({
      url: `https://async-atharv.com/apps/${entry.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.85
    })),
    {
      url: 'https://async-atharv.com/#contact-me',
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // Footer rarely changes → monthly
    {
      url: 'https://async-atharv.com/#footer',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ];
}
