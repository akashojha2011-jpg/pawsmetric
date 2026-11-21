import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.pawsmetric.com',
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        item: `https://www.pawsmetric.com${item.url}`,
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-stone-500 font-medium py-1">
        <Link href="/" className="hover:text-[#1C1917] flex items-center gap-1 transition-colors">
          <Home className="w-3.5 h-3.5 text-stone-400" />
          <span>Home</span>
        </Link>

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <React.Fragment key={item.url}>
              <ChevronRight className="w-3.5 h-3.5 text-stone-300 flex-shrink-0" />
              {isLast ? (
                <span className="font-semibold text-[#1C1917] line-clamp-1">{item.label}</span>
              ) : (
                <Link href={item.url} className="hover:text-[#1C1917] line-clamp-1 transition-colors">
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </>
  );
}
