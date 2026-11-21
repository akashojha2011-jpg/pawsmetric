import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, UserCheck, ShieldCheck, ArrowRight, Calculator, List, FileText } from 'lucide-react';
import { RESOURCES, getResourceBySlug } from '@/lib/data/resources';
import { CALCULATORS } from '@/lib/data/calculators';
import { Breadcrumbs } from '@/components/breadcrumbs';

interface ResourcePageProps {
  params: Promise<{
    slug: string;
  }> | {
    slug: string;
  };
}

export async function generateStaticParams() {
  return RESOURCES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ResourcePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const article = getResourceBySlug(resolvedParams.slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `https://www.pawsmetric.com/resources/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://www.pawsmetric.com/resources/${article.slug}`,
      type: 'article',
      images: [
        {
          url: article.coverImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  };
}

export default async function IndividualResourcePage({ params }: ResourcePageProps) {
  const resolvedParams = await params;
  const article = getResourceBySlug(resolvedParams.slug);
  if (!article) {
    notFound();
  }

  const relatedTools = CALCULATORS.filter((c) => article.relatedToolSlugs.includes(c.slug));

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: `https://www.pawsmetric.com${article.coverImage}`,
    wordCount: article.wordCount,
    author: {
      '@type': 'Person',
      name: article.author.name,
      jobTitle: article.author.role,
    },
    datePublished: article.publishedDate,
    publisher: {
      '@type': 'Organization',
      name: 'PawsMetric',
      url: 'https://www.pawsmetric.com',
    },
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-8 md:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs
          items={[
            { label: 'Resources', url: '/resources' },
            { label: article.title, url: `/resources/${article.slug}` },
          ]}
        />

        {/* Article Header & Metadata */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 font-sans">
            <span className="font-semibold px-3 py-1 rounded-full bg-[#EBF2FE] text-[#0B63E5] border border-[#B8D4F7]">
              {article.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 font-medium text-stone-500">
              <Clock className="w-3.5 h-3.5 text-stone-400" /> {article.readTime}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 font-medium text-stone-600">
              <FileText className="w-3.5 h-3.5 text-[#0B63E5]" /> {article.wordCount?.toLocaleString() || 2000}+ Words
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1C1917] tracking-tight leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-[#E8E4DC] text-xs text-stone-600 font-sans">
            <div className="flex items-center gap-1.5 font-semibold text-stone-900">
              <UserCheck className="w-4 h-4 text-[#0B63E5]" />
              <span>Written by {article.author.name}</span>
            </div>
            <div className="flex items-center gap-1.5 font-semibold text-stone-800 bg-white px-3 py-1 rounded-full border border-[#E8E4DC] shadow-warm-xs">
              <ShieldCheck className="w-4 h-4 text-[#0B63E5]" /> DVM Peer-Reviewed
            </div>
          </div>
        </div>

        {/* BLOG COVER IMAGE */}
        {article.coverImage && (
          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden border border-[#E8E4DC] shadow-warm-md bg-white">
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
        )}

        {/* INTERACTIVE TABLE OF CONTENTS (TOC) BOX */}
        {article.tableOfContents && article.tableOfContents.length > 0 && (
          <div className="clean-card p-6 space-y-3">
            <div className="flex items-center gap-2 border-b border-[#E8E4DC] pb-3">
              <List className="w-5 h-5 text-stone-700" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-stone-800 font-sans">
                Table of Contents
              </h2>
            </div>
            <nav className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-stone-800">
              {article.tableOfContents.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="p-3 rounded-2xl bg-[#FAF8F5] hover:bg-[#162737] hover:text-white transition-colors line-clamp-1 flex items-center gap-2 border border-[#E8E4DC]"
                >
                  <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 text-stone-400" />
                  <span>{item.title}</span>
                </a>
              ))}
            </nav>
          </div>
        )}

        {/* Article Body */}
        <div className="clean-card p-6 md:p-10 prose max-w-none text-stone-800 text-sm sm:text-base leading-relaxed">
          <div dangerouslySetInnerHTML={{ __html: article.contentHtml }} />
        </div>

        {/* Embedded Related Calculators */}
        {relatedTools.length > 0 && (
          <div className="space-y-4 pt-6">
            <h3 className="text-2xl font-serif font-bold text-[#1C1917]">Try Related Calculators</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedTools.map((calc) => (
                <Link
                  key={calc.slug}
                  href={`/calculators/${calc.slug}`}
                  className="clean-card p-5 hover:border-stone-400 transition-all flex items-center justify-between group"
                >
                  <div>
                    <div className="text-[10px] font-semibold text-[#0B63E5] uppercase tracking-wider">{calc.categoryName}</div>
                    <div className="text-sm font-serif font-bold text-stone-900 group-hover:text-[#0B63E5] line-clamp-1 transition-colors mt-0.5">
                      {calc.title}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#0B63E5] group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
