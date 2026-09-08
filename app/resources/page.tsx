import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { Clock } from 'lucide-react';
import { RESOURCES } from '@/lib/data/resources';
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = {
  title: 'Veterinary Canine Care & Health Guides | PawsMetric',
  description: 'Evidence-based dog health, nutrition, dehydration, dosage, and age calculation articles written and reviewed by DVM specialists.',
};

export default function ResourcesIndexPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs items={[{ label: 'Resources & Guides', url: '/resources' }]} />

        <div className="space-y-3 border-b border-slate-200 pb-6">
          <span className="bg-blue-50 text-[#0461CF] border border-[#8BABF1]/30 text-xs font-bold uppercase px-3 py-1 rounded-full inline-block">
            EVIDENCE-BASED GUIDES ({RESOURCES.length})
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Canine Health & Care Guides
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            In-depth 2,000+ word veterinary research articles covering canine nutrition, Benadryl dosage charts, deshedding protocols, nail trimming, and biological age math.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RESOURCES.map((article) => (
            <Link
              key={article.slug}
              href={`/resources/${article.slug}`}
              className="clean-card p-6 hover:border-[#0073E6] transition-all flex flex-col justify-between group overflow-hidden"
            >
              <div className="space-y-4">
                {article.coverImage && (
                  <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
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
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="bg-blue-50 text-[#0461CF] text-[10px] font-bold uppercase px-2.5 py-0.5 rounded">
                      {article.category}
                    </span>
                    <span className="font-medium flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {article.readTime}
                    </span>
                  </div>

                  <h2 className="text-base font-bold text-slate-900 group-hover:text-[#0073E6] leading-snug">
                    {article.title}
                  </h2>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between font-medium">
                <span>By {article.author.name}</span>
                <span className="font-bold text-[#0073E6]">Read Guide →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
