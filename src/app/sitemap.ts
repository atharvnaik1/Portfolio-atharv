import { MetadataRoute } from 'next'

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

    // Contact is important → weekly
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
