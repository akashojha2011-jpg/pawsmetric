import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/scratch/'],
    },
    sitemap: 'https://www.pawsmetric.com/sitemap.xml',
  };
}

