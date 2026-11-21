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
          const btn = document.querySelector('[aria-label="Search Tools"]') as HTMLButtonElement;
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
    <div className="fixed inset-0 z-50 bg-stone-900/40 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 px-4 animate-fade-in">
      <div className="bg-white rounded-3xl border border-[#E8E4DC] shadow-warm-lg w-full max-w-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#E8E4DC] flex items-center gap-3">
          <Search className="w-5 h-5 text-stone-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search 47 dog calculators (e.g. age, chocolate, calories, Benadryl)..."
            className="w-full bg-transparent text-sm font-medium text-stone-900 outline-none placeholder:text-stone-400"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-stone-100 text-stone-400 hover:text-stone-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-2 flex-1">
          <div className="text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-2 font-sans">
            {query.trim() === '' ? 'Popular Dog Calculators' : `Found ${filtered.length} matching tools`}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-8 text-xs text-stone-500 font-normal">
              No dog calculators found matching "{query}". Try searching "age", "chocolate", or "calories".
            </div>
          ) : (
            filtered.map((calc) => (
              <Link
                key={calc.slug}
                href={`/calculators/${calc.slug}`}
                onClick={onClose}
                className="flex items-center justify-between p-3.5 rounded-2xl hover:bg-[#FAF8F5] border border-transparent hover:border-[#E8E4DC] transition-all group"
              >
                <div>
                  <div className="text-[10px] font-semibold text-[#0B63E5] uppercase tracking-wider">{calc.categoryName}</div>
                  <div className="text-sm font-bold font-serif text-stone-900 group-hover:text-[#0B63E5] transition-colors">{calc.title}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-[#0B63E5] group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
              </Link>
            ))
          )}
        </div>

        <div className="p-3.5 bg-[#FAF8F5] border-t border-[#E8E4DC] text-[11px] text-stone-500 font-medium flex items-center justify-between">
          <span>Press ESC or click outside to dismiss</span>
          <span className="bg-white px-3 py-1 rounded-full border border-[#E8E4DC] text-stone-700 font-semibold text-[10px]">
            PawsMetric Engine
          </span>
        </div>
      </div>
    </div>
  );
}
