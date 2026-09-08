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
      {/* Top Banner Notice */}
      <div className="bg-[#054FB9] text-white text-xs font-medium py-2 px-4 text-center border-b border-[#0461CF] flex items-center justify-center gap-2">
        <span className="bg-[#0073E6] text-white text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full flex-shrink-0">
          100% Free
        </span>
        <span className="truncate text-[#B3C7F7]">Instant, client-side canine health & nutrition calculators</span>
      </div>

      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#D1E0FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* PawsMetric Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <Image
              src="/images/pawsmetric_logo.png"
              alt="PawsMetric Logo"
              width={34}
              height={34}
              className="w-8 h-8 rounded-lg object-contain shadow-xs"
              priority
            />
            <span className="text-xl font-extrabold text-[#054FB9] tracking-tight">
              Paws<span className="text-[#0073E6]">Metric</span>
            </span>
          </Link>

          {/* Desktop Search Trigger */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="flex-1 max-w-md hidden md:flex items-center gap-2.5 bg-[#F4F7FC] hover:bg-[#EBF2FE] border border-[#D1E0FC] rounded-lg px-3.5 py-2 text-slate-500 text-xs transition-colors"
          >
            <Search className="w-4 h-4 text-[#0073E6]" />
            <span className="text-slate-600 font-normal truncate">Search tools (age, calories, Benadryl, toxicity)...</span>
            <kbd className="ml-auto font-mono text-[10px] bg-white text-[#054FB9] px-1.5 py-0.5 rounded border border-[#D1E0FC]">
              ⌘K
            </kbd>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-[#0F172A]">
            <Link href="/calculators" className="hover:text-[#0073E6] transition-colors">
              Calculators
            </Link>

            {/* Dropdown */}
            <div className="relative group py-2">
              <button className="flex items-center gap-1 hover:text-[#0073E6] transition-colors">
                Categories
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-lg border border-[#D1E0FC] p-1.5 hidden group-hover:block animate-fade-in z-50">
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/calculators/${cat.slug}`}
                    className="block px-3 py-2 text-xs font-medium text-slate-700 hover:bg-[#F4F7FC] hover:text-[#0073E6] rounded-lg transition-colors"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/resources" className="hover:text-[#0073E6] transition-colors">
              Guides
            </Link>

            <Link href="/about" className="hover:text-[#0073E6] transition-colors">
              About
            </Link>
          </nav>

          {/* Action Buttons: Desktop CTA + Mobile Buttons */}
          <div className="flex items-center gap-2">
            {/* Mobile Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="md:hidden p-2 rounded-lg text-[#054FB9] bg-[#F4F7FC] border border-[#D1E0FC] flex items-center justify-center"
              aria-label="Search Tools"
            >
              <Search className="w-4.5 h-4.5 text-[#054FB9]" />
            </button>

            {/* Desktop CTA */}
            <Link
              href="/calculators"
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#0073E6] hover:bg-[#0461CF] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors shadow-xs"
            >
              All Tools <ArrowRight className="w-3.5 h-3.5 text-[#B3C7F7]" />
            </Link>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#054FB9] bg-[#F4F7FC] border border-[#D1E0FC] flex items-center justify-center"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[#D1E0FC] bg-white px-5 py-5 space-y-4 animate-fade-in">
            <Link
              href="/calculators"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block font-bold text-[#054FB9] text-sm py-1"
            >
              All Calculators
            </Link>
            <div className="space-y-1 pl-3 border-l-2 border-[#0073E6]">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Categories</div>
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/calculators/${cat.slug}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-xs font-medium text-slate-700 py-1"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
            <Link
              href="/resources"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block font-medium text-slate-700 text-xs py-1"
            >
              Guides & Articles
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block font-medium text-slate-700 text-xs py-1"
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
