import { MetadataRoute } from 'next';
import { CALCULATORS } from '@/lib/data/calculators';
import { CATEGORIES } from '@/lib/data/categories';
import { RESOURCES } from '@/lib/data/resources';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pawsmetric.com';

  const staticPages = [
    '',
    '/calculators',
    '/resources',
    '/team',
    '/about',
    '/editorial-guidelines',
    '/contact',
    '/privacy-policy',
    '/terms-of-service',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const categoryPages = CATEGORIES.map((cat) => ({
    url: `${baseUrl}/calculators/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const calculatorPages = CALCULATORS.map((calc) => ({
    url: `${baseUrl}/calculators/${calc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const resourcePages = RESOURCES.map((article) => ({
    url: `${baseUrl}/resources/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...categoryPages, ...calculatorPages, ...resourcePages];
}
