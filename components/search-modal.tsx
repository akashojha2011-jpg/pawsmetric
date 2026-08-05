'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, X, Calculator, ArrowRight } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 bg-[#082C1B]/60 backdrop-blur-sm flex items-start justify-center pt-16 sm:pt-24 px-4 animate-fade-in">
      <div className="bg-white rounded-2xl border border-[#E2E3D8] shadow-paid-lg w-full max-w-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#E2E3D8] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#082C1B]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search PawsMetric tools (e.g. age, chocolate, kibble, crate size)..."
            className="w-full bg-transparent text-sm font-bold text-[#082C1B] outline-none placeholder:text-stone-400 placeholder:font-normal"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-[#F0F1EA] text-[#082C1B]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 overflow-y-auto space-y-2 flex-1">
          <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#4D534E] mb-2">
            {query.trim() === '' ? 'Popular Dog Calculators' : `Found ${filtered.length} matching tools`}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-8 text-xs text-[#4D534E] font-semibold">
              No calculators found matching "{query}". Try searching "age", "chocolate", or "calories".
            </div>
          ) : (
            filtered.map((calc) => (
              <Link
                key={calc.slug}
                href={`/calculators/${calc.slug}`}
                onClick={onClose}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-[#F0F1EA] border border-transparent hover:border-[#E2E3D8] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#082C1B] text-[#8BF03B] flex items-center justify-center font-bold">
                    <Calculator className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-extrabold text-[#082C1B] uppercase tracking-wider">{calc.categoryName}</div>
                    <div className="text-xs font-black text-[#082C1B] group-hover:text-[#0d4028]">{calc.title}</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#082C1B] group-hover:translate-x-1 transition-all" />
              </Link>
            ))
          )}
        </div>

        <div className="p-3 bg-[#F0F1EA] border-t border-[#E2E3D8] text-[11px] text-[#4D534E] font-semibold flex items-center justify-between">
          <span>Press ESC or click outside to close</span>
          <span className="bg-white px-2 py-0.5 rounded border border-[#E2E3D8] text-[#082C1B] font-bold">PawsMetric Search</span>
        </div>
      </div>
    </div>
  );
}
