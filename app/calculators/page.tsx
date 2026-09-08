import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRight, Calculator, Clock } from 'lucide-react';
import { CALCULATORS } from '@/lib/data/calculators';
import { CATEGORIES } from '@/lib/data/categories';
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = {
  title: 'Canine Calculators Directory: Free Veterinary Tools | PawsMetric',
  description:
    'Browse all scientific veterinary dog calculators for age in human years, Benadryl dosage by weight, kibble calories, chocolate toxicity, crate size, and puppy growth.',
  alternates: {
    canonical: 'https://www.pawsmetric.com/calculators',
  },
};

export default function AllCalculatorsPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs items={[{ label: 'Calculators', url: '/calculators' }]} />

        <div className="space-y-3 border-b border-slate-200 pb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
            Calculators Directory ({CALCULATORS.length} Tools)
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Veterinary Canine Tools
          </h1>
          <p className="text-base text-slate-600 max-w-3xl leading-relaxed font-normal">
            Explore our suite of peer-reviewed canine calculation engines for biological age conversion, nutrition requirements, medication dosage, and safety alerts.
          </p>
        </div>

        {/* Category Filter Pills Bar */}
        <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-slate-200">
          <span className="text-xs font-semibold text-slate-500 mr-2">Category:</span>
          <Link
            href="/calculators"
            className="px-3.5 py-1.5 rounded-lg bg-slate-900 text-white font-semibold text-xs shadow-xs"
          >
            All ({CALCULATORS.length})
          </Link>
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/calculators/${cat.slug}`}
              className="px-3.5 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-700 font-medium text-xs border border-slate-200 transition-colors"
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
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-100">
                    {calc.categoryName}
                  </span>
                  <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" /> ~1 min
                  </span>
                </div>

                <h2 className="text-base font-bold text-slate-900 group-hover:text-emerald-600 leading-snug">
                  {calc.title}
                </h2>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-normal">
                  {calc.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>Updated {calc.lastUpdated}</span>
                <span className="font-semibold text-slate-900 group-hover:text-emerald-600">Open Tool →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
