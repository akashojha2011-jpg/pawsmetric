import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { Clock, ArrowRight, FileText } from 'lucide-react';
import { RESOURCES } from '@/lib/data/resources';
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = {
  title: 'Veterinary Canine Care & Health Guides | PawsMetric',
  description: 'Evidence-based dog health, nutrition, dehydration, dosage, and age calculation articles written and reviewed by DVM specialists.',
};

export default function ResourcesIndexPage() {
  return (
    <div className="bg-[#F0F1EA] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs items={[{ label: 'Resources & Guides', url: '/resources' }]} />

        <div className="space-y-4 border-b border-[#E2E3D8] pb-6">
          <span className="bg-[#8BF03B] text-[#082C1B] text-xs font-black uppercase px-3 py-1 rounded">
            EVIDENCE-BASED GUIDES ({RESOURCES.length})
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#082C1B] tracking-tight">
            Canine Health & Care Guides
          </h1>
          <p className="text-base text-[#4D534E] max-w-3xl leading-relaxed font-semibold">
            In-depth 2,000+ word veterinary research articles covering canine nutrition, Benadryl dosage charts, deshedding protocols, nail trimming, and biological age math.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RESOURCES.map((article) => (
            <Link
              key={article.slug}
              href={`/resources/${article.slug}`}
              className="bg-white rounded-2xl border border-[#E2E3D8] p-6 shadow-paid hover:border-[#082C1B] transition-all flex flex-col justify-between group overflow-hidden"
            >
              <div className="space-y-4">
                {article.coverImage && (
                  <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-[#F0F1EA] border border-[#E2E3D8]">
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
                  <div className="flex items-center justify-between text-xs text-[#4D534E]">
                    <span className="bg-[#F0F1EA] text-[#082C1B] text-[10px] font-extrabold uppercase px-2 py-0.5 rounded">
                      {article.category}
                    </span>
                    <span className="font-semibold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {article.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-black text-[#082C1B] group-hover:text-[#0d4028] leading-snug">
                    {article.title}
                  </h2>

                  <p className="text-xs text-[#4D534E] line-clamp-3 leading-relaxed font-medium">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-[#F0F1EA] text-[11px] text-[#4D534E] flex items-center justify-between font-semibold">
                <span>By {article.author.name}</span>
                <span className="font-bold text-[#082C1B]">Read Guide →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
