import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRight, Calculator, Clock, Search } from 'lucide-react';
import { CALCULATORS } from '@/lib/data/calculators';
import { CATEGORIES } from '@/lib/data/categories';
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = {
  title: 'Dog Calculator Directory: 38+ Free Tools for Dog Owners | PawsMetric',
  description:
    'Browse 38+ free veterinary dog calculators for age in human years, Benadryl dosage by weight, kibble calories, chocolate toxicity, crate size, and puppy growth.',
  keywords: [
    'dog calculator directory',
    'free dog calculators',
    'dog age calculator',
    'dog food calculator',
    'dog weight calculator',
    'benadryl calculator for dogs',
    'chocolate toxicity calculator',
  ],
  alternates: {
    canonical: 'https://pawsmetric.com/calculators',
  },
};

export default function AllCalculatorsPage() {
  return (
    <div className="bg-[#F0F1EA] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs items={[{ label: 'Calculators', url: '/calculators' }]} />

        <div className="space-y-4 border-b border-[#E2E3D8] pb-6">
          <span className="bg-[#8BF03B] text-[#082C1B] text-xs font-black uppercase px-3 py-1 rounded">
            CALCULATOR DIRECTORY INDEX ({CALCULATORS.length} TOOLS)
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#082C1B] tracking-tight">
            Free Dog Calculator Tools Directory
          </h1>
          <p className="text-base text-[#4D534E] max-w-3xl leading-relaxed font-semibold">
            Explore 38+ free peer-reviewed canine calculators. Fast, mobile-friendly tools for age conversion, nutrition, emergency toxicity, dosage by weight, gear sizing, and costs.
          </p>
        </div>

        {/* Category Filter Matrix Pills Bar */}
        <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-[#E2E3D8]">
          <span className="text-xs font-bold uppercase tracking-wider text-[#4D534E] mr-2">Filter Category:</span>
          <Link
            href="/calculators"
            className="px-3.5 py-1.5 rounded-xl bg-[#082C1B] text-[#8BF03B] font-black text-xs shadow-paid"
          >
            All ({CALCULATORS.length})
          </Link>
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/calculators/${cat.slug}`}
              className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-[#8BF03B] text-[#082C1B] font-bold text-xs border border-[#E2E3D8] transition-all shadow-sm"
            >
              {cat.name}
            </Link>
          ))}
        </div>

        {/* Tool Grid with Search Tags & Calculation Time Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CALCULATORS.map((calc) => (
            <Link
              key={calc.slug}
              href={`/calculators/${calc.slug}`}
              className="bg-white rounded-2xl border border-[#E2E3D8] p-6 shadow-paid hover:border-[#082C1B] transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded bg-[#8BF03B] text-[#082C1B]">
                    {calc.categoryName}
                  </span>
                  <span className="text-[11px] font-bold text-[#4D534E] bg-[#F0F1EA] px-2 py-0.5 rounded flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#082C1B]" /> ~30 sec
                  </span>
                </div>

                <h2 className="text-lg font-black text-[#082C1B] group-hover:text-[#0d4028] leading-snug">
                  {calc.title}
                </h2>

                <p className="text-xs text-[#4D534E] line-clamp-2 leading-relaxed font-medium">
                  {calc.description}
                </p>

                {/* SEO Micro Search Tag Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="bg-[#F0F1EA] text-[#082C1B] text-[10px] font-bold px-2 py-0.5 rounded border border-[#E2E3D8]">
                    {calc.slug.replace(/-/g, ' ')}
                  </span>
                  <span className="bg-[#F0F1EA] text-[#082C1B] text-[10px] font-bold px-2 py-0.5 rounded border border-[#E2E3D8]">
                    free calculator
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0F1EA] flex items-center justify-between text-[11px] text-[#4D534E] font-semibold">
                <span>Updated {calc.lastUpdated}</span>
                <span className="font-bold text-[#082C1B] group-hover:text-[#0d4028]">Open Tool →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
