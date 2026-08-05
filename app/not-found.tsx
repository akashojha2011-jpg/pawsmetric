import React from 'react';
import Link from 'next/link';
import { Dog, ArrowRight } from 'lucide-react';
import { CALCULATORS } from '@/lib/data/calculators';

export default function NotFound() {
  const topTools = CALCULATORS.slice(0, 6);

  return (
    <div className="bg-[#F0F1EA] min-h-screen py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="w-16 h-16 rounded-2xl bg-[#082C1B] text-[#8BF03B] flex items-center justify-center mx-auto shadow-paid border border-[#0d4028]">
          <Dog className="w-8 h-8" />
        </div>

        <div className="space-y-3">
          <span className="bg-[#8BF03B] text-[#082C1B] text-xs font-black uppercase px-3 py-1 rounded">
            ERROR 404
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#082C1B] tracking-tight">
            Page Not Found
          </h1>
          <p className="text-[#4D534E] max-w-lg mx-auto text-sm sm:text-base leading-relaxed font-semibold">
            Looks like this leash pulled us off course! The calculator or guide page you are looking for doesn't exist or has moved.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#082C1B] hover:bg-[#0d4028] text-white font-bold px-6 py-3 rounded-lg shadow-paid transition-all text-xs"
          >
            Return to Homepage <ArrowRight className="w-4 h-4 text-[#8BF03B]" />
          </Link>
        </div>

        <div className="pt-10 border-t border-[#E2E3D8] text-left space-y-4">
          <h2 className="text-lg font-black text-[#082C1B] text-center">Try Popular Dog Calculators:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {topTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/calculators/${tool.slug}`}
                className="bg-white p-4 rounded-xl border border-[#E2E3D8] hover:border-[#082C1B] shadow-paid transition-all group flex items-center justify-between"
              >
                <div>
                  <div className="text-[10px] font-extrabold text-[#082C1B] uppercase tracking-wider">{tool.categoryName}</div>
                  <div className="text-sm font-black text-[#082C1B] group-hover:text-[#0d4028] line-clamp-1">{tool.title}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#082C1B] group-hover:translate-x-1 flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
