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
      canonical: `https://pawsmetric.com/resources/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://pawsmetric.com/resources/${article.slug}`,
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
    image: `https://pawsmetric.com${article.coverImage}`,
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
      url: 'https://pawsmetric.com',
    },
  };

  return (
    <div className="bg-[#F0F1EA] min-h-screen py-8 md:py-12">
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
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#4D534E]">
            <span className="font-extrabold uppercase px-2.5 py-1 rounded bg-[#8BF03B] text-[#082C1B]">
              {article.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 font-semibold">
              <Clock className="w-3.5 h-3.5" /> {article.readTime}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 font-semibold text-[#082C1B]">
              <FileText className="w-3.5 h-3.5 text-[#8BF03B]" /> {article.wordCount?.toLocaleString() || 2000}+ Words
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#082C1B] tracking-tight leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-[#E2E3D8] text-xs text-[#4D534E]">
            <div className="flex items-center gap-1.5 font-bold text-[#082C1B]">
              <UserCheck className="w-4 h-4 text-[#8BF03B]" />
              <span>Written by {article.author.name}</span>
            </div>
            <div className="flex items-center gap-1.5 font-bold text-[#082C1B] bg-white px-3 py-1 rounded-md border border-[#E2E3D8]">
              <ShieldCheck className="w-4 h-4 text-[#8BF03B]" /> DVM Peer-Reviewed Article
            </div>
          </div>
        </div>

        {/* BLOG COVER IMAGE */}
        {article.coverImage && (
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-[#E2E3D8] shadow-paid bg-white">
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
          <div className="bg-white rounded-2xl border border-[#E2E3D8] p-6 shadow-paid space-y-3">
            <div className="flex items-center gap-2 border-b border-[#F0F1EA] pb-3">
              <List className="w-5 h-5 text-[#082C1B]" />
              <h2 className="text-base font-black text-[#082C1B] uppercase tracking-wider">
                Table of Contents
              </h2>
            </div>
            <nav className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-[#082C1B]">
              {article.tableOfContents.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="p-2.5 rounded-lg bg-[#F0F1EA] hover:bg-[#8BF03B] hover:text-[#082C1B] transition-colors line-clamp-1 flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 text-stone-400" />
                  <span>{item.title}</span>
                </a>
              ))}
            </nav>
          </div>
        )}

        {/* Article Body */}
        <div className="bg-white rounded-2xl border border-[#E2E3D8] p-6 md:p-10 shadow-paid prose max-w-none text-[#082C1B] text-sm sm:text-base leading-relaxed font-semibold">
          <div dangerouslySetInnerHTML={{ __html: article.contentHtml }} />
        </div>

        {/* Embedded Related Calculators */}
        {relatedTools.length > 0 && (
          <div className="space-y-4 pt-6">
            <h3 className="text-2xl font-black text-[#082C1B]">Try Related Calculators</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedTools.map((calc) => (
                <Link
                  key={calc.slug}
                  href={`/calculators/${calc.slug}`}
                  className="bg-white rounded-2xl border border-[#E2E3D8] p-5 shadow-paid hover:border-[#082C1B] transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#082C1B] text-[#8BF03B] flex items-center justify-center flex-shrink-0 font-bold">
                      <Calculator className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-extrabold text-[#082C1B] uppercase tracking-wider">{calc.categoryName}</div>
                      <div className="text-sm font-black text-[#082C1B] group-hover:text-[#0d4028] line-clamp-1">
                        {calc.title}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#082C1B] group-hover:translate-x-1 transition-all flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
