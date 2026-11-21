import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { Clock, ArrowRight } from 'lucide-react';
import { RESOURCES } from '@/lib/data/resources';
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = {
  title: 'Veterinary Canine Care & Health Guides | PawsMetric',
  description: 'Evidence-based dog health, nutrition, dehydration, dosage, and age calculation articles written and reviewed by DVM specialists.',
};

export default function ResourcesIndexPage() {
  return (
    <div className="bg-[#FAF8F5] min-h-screen py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs items={[{ label: 'Resources & Guides', url: '/resources' }]} />

        <div className="space-y-3 border-b border-[#E8E4DC] pb-6">
          <span className="bg-[#EBF2FE] text-[#0B63E5] border border-[#B8D4F7] text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full inline-block">
            Evidence-Based Guides ({RESOURCES.length})
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#1C1917] tracking-tight">
            Canine Health &amp; Care Guides
          </h1>
          <p className="text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed font-normal">
            In-depth veterinary research articles covering canine nutrition, Benadryl dosage protocols, deshedding practices, nail trimming, and biological age math.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RESOURCES.map((article) => (
            <Link
              key={article.slug}
              href={`/resources/${article.slug}`}
              className="clean-card p-6 hover:border-stone-400 transition-all flex flex-col justify-between group overflow-hidden"
            >
              <div className="space-y-4">
                {article.coverImage && (
                  <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-stone-100 border border-[#E8E4DC]">
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-stone-500 font-sans">
                    <span className="bg-[#EBF2FE] text-[#0B63E5] text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                      {article.category}
                    </span>
                    <span className="font-medium flex items-center gap-1 text-stone-400">
                      <Clock className="w-3.5 h-3.5" /> {article.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-serif font-bold text-[#1C1917] group-hover:text-[#0B63E5] transition-colors leading-snug">
                    {article.title}
                  </h2>

                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed font-normal">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8E4DC] text-xs text-stone-500 flex items-center justify-between font-medium">
                <span>By {article.author.name}</span>
                <span className="font-semibold text-[#0B63E5] flex items-center gap-1">
                  Read Guide <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
