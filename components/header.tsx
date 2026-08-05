'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Menu, X, ChevronDown, ShieldCheck, Dog, ArrowRight } from 'lucide-react';
import { SearchModal } from './search-modal';
import { CATEGORIES } from '@/lib/data/categories';

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Banner Notice */}
      <div className="bg-[#082C1B] text-white text-[11px] sm:text-xs font-semibold py-2 px-3 text-center border-b border-[#0d4028] flex items-center justify-center gap-2">
        <span className="bg-[#8BF03B] text-[#082C1B] text-[10px] font-extrabold uppercase px-2 py-0.5 rounded flex-shrink-0">
          NEW
        </span>
        <span className="line-clamp-1">Peer-reviewed DVM calculation algorithms for 38+ dog tools</span>
      </div>

      <header className="sticky top-0 z-40 bg-[#F0F1EA]/95 backdrop-blur-md border-b border-[#E2E3D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
          {/* PawsMetric Brand Logo */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="w-8 h-8 rounded-lg bg-[#082C1B] text-[#8BF03B] flex items-center justify-center shadow-sm">
              <Dog className="w-5 h-5" />
            </div>
            <span className="text-xl font-black text-[#082C1B] tracking-tight">
              Paws<span className="text-[#8BF03B]">Metric</span>
            </span>
          </Link>

          {/* Desktop Search Trigger */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="flex-1 max-w-md hidden md:flex items-center gap-2.5 bg-white hover:bg-white/80 border border-[#E2E3D8] rounded-lg px-3.5 py-2 text-stone-500 text-xs transition-all shadow-sm"
          >
            <Search className="w-4 h-4 text-stone-400" />
            <span className="text-[#4D534E] font-normal truncate">Search calculators (age, calorie, chocolate toxicity)...</span>
            <kbd className="ml-auto font-mono text-[10px] bg-[#F0F1EA] text-[#082C1B] px-1.5 py-0.5 rounded border border-[#E2E3D8]">
              ⌘K
            </kbd>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-bold text-[#082C1B]">
            <Link href="/calculators" className="hover:text-[#4D534E] transition-colors">
              Calculators
            </Link>

            {/* Dropdown */}
            <div className="relative group py-2">
              <button className="flex items-center gap-1 hover:text-[#4D534E] transition-colors">
                Categories
                <ChevronDown className="w-3.5 h-3.5 text-stone-400 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-0 w-60 bg-white rounded-xl shadow-paid-lg border border-[#E2E3D8] p-2 hidden group-hover:block animate-fade-in z-50">
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/calculators/${cat.slug}`}
                    className="block px-3 py-2 text-xs font-bold text-[#082C1B] hover:bg-[#F0F1EA] rounded-lg transition-colors"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/team" className="hover:text-[#4D534E] transition-colors">
              Veterinary Team
            </Link>

            <Link href="/resources" className="hover:text-[#4D534E] transition-colors">
              Guides
            </Link>
          </nav>

          {/* Action Buttons: Desktop CTA + Mobile Buttons */}
          <div className="flex items-center gap-2">
            {/* Mobile Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="md:hidden min-w-[40px] min-h-[40px] p-2.5 rounded-lg text-[#082C1B] bg-white border border-[#E2E3D8] flex items-center justify-center"
              aria-label="Search Tools"
            >
              <Search className="w-4 h-4 text-[#082C1B]" />
            </button>

            {/* Desktop CTA */}
            <Link
              href="/calculators"
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#082C1B] hover:bg-[#0d4028] text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-all shadow-sm min-h-[40px]"
            >
              Get Started <ArrowRight className="w-3.5 h-3.5 text-[#8BF03B]" />
            </Link>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden min-w-[40px] min-h-[40px] p-2.5 rounded-lg text-[#082C1B] bg-white border border-[#E2E3D8] flex items-center justify-center"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[#E2E3D8] bg-[#F0F1EA] px-5 py-6 space-y-4 animate-fade-in">
            <Link
              href="/calculators"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block font-black text-[#082C1B] text-base py-1"
            >
              All Calculators Directory
            </Link>
            <div className="space-y-2 pl-3 border-l-2 border-[#082C1B]">
              <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#4D534E]">Categories</div>
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/calculators/${cat.slug}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-xs font-bold text-[#082C1B] py-1.5"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
            <Link
              href="/team"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block font-bold text-[#082C1B] text-sm py-1"
            >
              Veterinary Team
            </Link>
            <Link
              href="/resources"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block font-bold text-[#082C1B] text-sm py-1"
            >
              Guides & Research
            </Link>
          </div>
        )}
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
