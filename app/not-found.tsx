import React from 'react';
import Link from 'next/link';
import { Dog, ArrowRight } from 'lucide-react';
import { CALCULATORS } from '@/lib/data/calculators';

export default function NotFound() {
  const topTools = CALCULATORS.slice(0, 6);

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="w-16 h-16 rounded-2xl bg-[#162737] text-white flex items-center justify-center mx-auto shadow-warm-xs">
          <Dog className="w-8 h-8 text-[#FDF1D0]" />
        </div>

        <div className="space-y-3">
          <span className="bg-[#FDF1D0] text-[#162737] border border-[#E8E4DC] text-xs font-bold uppercase px-3.5 py-1 rounded-full inline-block">
            ERROR 404
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#162737] tracking-tight">
            Page Not Found
          </h1>
          <p className="text-stone-600 max-w-lg mx-auto text-sm sm:text-base leading-relaxed font-normal">
            Looks like this leash pulled us off course! The calculator or guide page you are looking for doesn't exist or has moved.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#0B63E5] hover:bg-[#0952be] text-white font-bold px-7 py-3.5 rounded-full transition-all text-sm shadow-warm-xs"
          >
            Return to Homepage <ArrowRight className="w-4 h-4 text-[#FDF1D0]" />
          </Link>
        </div>

        <div className="pt-12 border-t border-[#E8E4DC] text-left space-y-4">
          <h2 className="text-xl font-serif font-bold text-[#162737] text-center">Try Popular Dog Calculators:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {topTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/calculators/${tool.slug}`}
                className="clean-card p-4 hover:border-[#162737] transition-all group flex items-center justify-between"
              >
                <div>
                  <div className="text-[10px] font-bold text-[#0B63E5] uppercase tracking-wider">{tool.categoryName}</div>
                  <div className="text-sm font-serif font-bold text-stone-900 group-hover:text-[#0B63E5] line-clamp-1">{tool.title}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#0B63E5] group-hover:translate-x-1 flex-shrink-0 ml-2" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
