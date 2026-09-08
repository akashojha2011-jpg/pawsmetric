'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, X, ArrowRight } from 'lucide-react';
import { CALCULATORS } from '@/lib/data/calculators';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          const btn = document.querySelector('[aria-label="Search"]') as HTMLButtonElement;
          if (btn) btn.click();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = query.trim() === ''
    ? CALCULATORS.slice(0, 6)
    : CALCULATORS.filter(
        (c) =>
          c.title.toLowerCase().includes(query.toLowerCase()) ||
          c.description.toLowerCase().includes(query.toLowerCase()) ||
          c.categoryName.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 px-4 animate-fade-in">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#0073E6]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search PawsMetric dog calculators (e.g. age, chocolate, kibble, crate size)..."
            className="w-full bg-transparent text-sm font-semibold text-slate-900 outline-none placeholder:text-slate-400 placeholder:font-normal"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 overflow-y-auto space-y-2 flex-1">
          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">
            {query.trim() === '' ? 'Popular Dog Calculators' : `Found ${filtered.length} matching tools`}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-8 text-xs text-slate-500 font-medium">
              No dog calculators found matching "{query}". Try searching "age", "chocolate", or "calories".
            </div>
          ) : (
            filtered.map((calc) => (
              <Link
                key={calc.slug}
                href={`/calculators/${calc.slug}`}
                onClick={onClose}
                className="flex items-center justify-between p-3.5 rounded-xl hover:bg-[#F4F7FC] border border-transparent hover:border-[#D1E0FC] transition-all group"
              >
                <div>
                  <div className="text-[10px] font-bold text-[#0461CF] uppercase tracking-wider">{calc.categoryName}</div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-[#0073E6] transition-colors">{calc.title}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0073E6] group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
              </Link>
            ))
          )}
        </div>

        <div className="p-3 bg-[#F4F7FC] border-t border-slate-200 text-[11px] text-slate-500 font-medium flex items-center justify-between">
          <span>Press ESC or click outside to close</span>
          <span className="bg-white px-2.5 py-0.5 rounded border border-[#D1E0FC] text-[#054FB9] font-semibold">PawsMetric Search</span>
        </div>
      </div>
    </div>
  );
}

