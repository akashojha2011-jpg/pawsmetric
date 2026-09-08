import React from 'react';
import Link from 'next/link';
import { Dog, ArrowRight } from 'lucide-react';
import { CALCULATORS } from '@/lib/data/calculators';

export default function NotFound() {
  const topTools = CALCULATORS.slice(0, 6);

  return (
    <div className="bg-slate-50 min-h-screen py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="w-16 h-16 rounded-2xl bg-[#0073E6] text-white flex items-center justify-center mx-auto shadow-xs">
          <Dog className="w-8 h-8" />
        </div>

        <div className="space-y-3">
          <span className="bg-blue-50 text-[#0461CF] border border-[#8BABF1]/30 text-xs font-bold uppercase px-3 py-1 rounded-full inline-block">
            ERROR 404
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Page Not Found
          </h1>
          <p className="text-slate-600 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
            Looks like this leash pulled us off course! The calculator or guide page you are looking for doesn't exist or has moved.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#0073E6] hover:bg-[#0461CF] text-white font-bold px-6 py-3 rounded-xl transition-all text-xs shadow-xs"
          >
            Return to Homepage <ArrowRight className="w-4 h-4 text-[#B3C7F7]" />
          </Link>
        </div>

        <div className="pt-10 border-t border-slate-200 text-left space-y-4">
          <h2 className="text-lg font-bold text-slate-900 text-center">Try Popular Dog Calculators:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {topTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/calculators/${tool.slug}`}
                className="clean-card p-4 hover:border-[#0073E6] transition-all group flex items-center justify-between"
              >
                <div>
                  <div className="text-[10px] font-bold text-[#0461CF] uppercase tracking-wider">{tool.categoryName}</div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-[#0073E6] line-clamp-1">{tool.title}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0073E6] group-hover:translate-x-1 flex-shrink-0 ml-2" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
