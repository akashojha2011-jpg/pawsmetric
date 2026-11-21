'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { SearchModal } from './search-modal';
import { CATEGORIES } from '@/lib/data/categories';

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Banner Notice - Soft Warm Butter Pill */}
      <div className="bg-[#FDF1D0] text-[#1C1917] text-xs font-medium py-1.5 px-4 text-center border-b border-[#F6DF9C] flex items-center justify-center gap-2">
        <span className="bg-[#162737] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full flex-shrink-0">
          Free Utility
        </span>
        <span className="truncate text-stone-800 font-normal">
          Evidence-based canine health, nutrition, and emergency calculation tools
        </span>
      </div>

      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* PawsMetric Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <Image
              src="/images/pawsmetric_logo.png"
              alt="PawsMetric Logo"
              width={32}
              height={32}
              className="w-8 h-8 rounded-lg object-contain shadow-warm-xs"
              priority
            />
            <span className="text-xl font-bold font-serif text-[#1C1917] tracking-tight">
              paws<span className="text-[#0B63E5]">metric</span>
            </span>
          </Link>

          {/* Desktop Search Trigger - Pill Shaped */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="flex-1 max-w-md hidden md:flex items-center gap-2.5 bg-white hover:bg-stone-50 border border-[#E8E4DC] rounded-full px-4 py-2 text-stone-500 text-xs transition-all shadow-warm-xs group"
          >
            <Search className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#0B63E5] transition-colors" />
            <span className="text-stone-500 font-normal truncate">Search 47 tools (age, calories, Benadryl, toxicity)...</span>
            <kbd className="ml-auto font-mono text-[10px] bg-[#FAF8F5] text-stone-600 px-2 py-0.5 rounded-full border border-[#E8E4DC]">
              ⌘K
            </kbd>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold text-stone-700">
            <Link href="/calculators" className="hover:text-[#162737] transition-colors">
              Calculators
            </Link>

            {/* Dropdown */}
            <div className="relative group py-2">
              <button className="flex items-center gap-1 hover:text-[#162737] transition-colors">
                Categories
                <ChevronDown className="w-3.5 h-3.5 text-stone-400 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-0 w-60 bg-white rounded-2xl shadow-warm-lg border border-[#E8E4DC] p-2 hidden group-hover:block animate-fade-in z-50">
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/calculators/${cat.slug}`}
                    className="block px-3 py-2 text-xs font-medium text-stone-700 hover:bg-[#FAF8F5] hover:text-[#0B63E5] rounded-xl transition-colors"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/resources" className="hover:text-[#162737] transition-colors">
              Guides
            </Link>

            <Link href="/about" className="hover:text-[#162737] transition-colors">
              About
            </Link>
          </nav>

          {/* Action Buttons: Desktop CTA + Mobile Buttons */}
          <div className="flex items-center gap-2">
            {/* Mobile Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="md:hidden p-2 rounded-full text-stone-700 bg-white border border-[#E8E4DC] flex items-center justify-center shadow-warm-xs"
              aria-label="Search Tools"
            >
              <Search className="w-4 h-4 text-stone-600" />
            </button>

            {/* Desktop CTA - Vibrant Blue Pill (Good Dog Style) */}
            <Link
              href="/calculators"
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#0B63E5] hover:bg-[#094EB8] text-white text-xs font-semibold px-4.5 py-2 rounded-full transition-all shadow-warm-xs"
            >
              Explore Tools <ArrowRight className="w-3.5 h-3.5 text-white/80" />
            </Link>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-stone-700 bg-white border border-[#E8E4DC] flex items-center justify-center shadow-warm-xs"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[#E8E4DC] bg-white px-5 py-5 space-y-4 animate-fade-in shadow-warm-lg">
            <Link
              href="/calculators"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block font-bold text-[#1C1917] text-sm py-1 font-serif"
            >
              All Calculators
            </Link>
            <div className="space-y-1 pl-3 border-l-2 border-[#162737]">
              <div className="text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-1">Categories</div>
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/calculators/${cat.slug}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-xs font-medium text-stone-700 py-1"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
            <Link
              href="/resources"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block font-medium text-stone-700 text-xs py-1"
            >
              Guides & Articles
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block font-medium text-stone-700 text-xs py-1"
            >
              About Us
            </Link>
          </div>
        )}
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
