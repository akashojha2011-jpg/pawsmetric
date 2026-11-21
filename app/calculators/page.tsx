import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRight, Clock, Sparkles } from 'lucide-react';
import { CALCULATORS } from '@/lib/data/calculators';
import { CATEGORIES } from '@/lib/data/categories';
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = {
  title: 'Canine Calculators Directory: Free Veterinary Tools | PawsMetric',
  description:
    'Browse all 47 scientific veterinary dog calculators for age in human years, Benadryl dosage by weight, kibble calories, chocolate toxicity, crate size, and puppy growth.',
  alternates: {
    canonical: 'https://www.pawsmetric.com/calculators',
  },
};

export default function AllCalculatorsPage() {
  return (
    <div className="bg-[#FAF8F5] min-h-screen py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs items={[{ label: 'Calculators', url: '/calculators' }]} />

        <div className="space-y-3 border-b border-[#E8E4DC] pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF1D0] text-[#1C1917] text-xs font-semibold border border-[#F6DF9C]">
            <Sparkles className="w-3.5 h-3.5" /> 47 Client-Side Math Engines
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#1C1917] tracking-tight">
            Canine Health Calculators
          </h1>
          <p className="text-base text-stone-600 max-w-3xl leading-relaxed font-normal">
            Explore our complete suite of peer-reviewed canine calculation engines for biological age conversion, nutrition requirements, medication dosage, and emergency safety alerts.
          </p>
        </div>

        {/* Category Filter Pills Bar */}
        <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-[#E8E4DC]">
          <span className="text-xs font-semibold text-stone-500 mr-2 font-sans">Filter by:</span>
          <Link
            href="/calculators"
            className="px-4 py-2 rounded-full bg-[#162737] text-white font-semibold text-xs shadow-warm-xs"
          >
            All ({CALCULATORS.length})
          </Link>
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/calculators/${cat.slug}`}
              className="px-4 py-2 rounded-full bg-white hover:bg-stone-50 text-stone-700 font-medium text-xs border border-[#E8E4DC] transition-all shadow-warm-xs"
            >
              {cat.name}
            </Link>
          ))}
        </div>

        {/* Tool Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CALCULATORS.map((calc) => (
            <Link
              key={calc.slug}
              href={`/calculators/${calc.slug}`}
              className="clean-card p-6 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-[#EBF2FE] text-[#0B63E5] border border-[#B8D4F7]">
                    {calc.categoryName}
                  </span>
                  <span className="text-[11px] font-medium text-stone-400 flex items-center gap-1 font-sans">
                    <Clock className="w-3 h-3 text-stone-400" /> ~1 min
                  </span>
                </div>

                <h2 className="text-lg font-serif font-bold text-[#1C1917] group-hover:text-[#0B63E5] transition-colors leading-snug">
                  {calc.title}
                </h2>

                <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed font-normal">
                  {calc.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8E4DC] flex items-center justify-between text-xs text-stone-500 font-medium">
                <span>Updated {calc.lastUpdated}</span>
                <span className="font-semibold text-[#0B63E5] group-hover:translate-x-0.5 transition-transform flex items-center gap-1 font-sans">
                  Open Tool <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
