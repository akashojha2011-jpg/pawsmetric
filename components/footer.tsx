'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import { CATEGORIES } from '@/lib/data/categories';

export function Footer() {
  return (
    <footer className="bg-[#162737] text-white border-t border-[#0D1A25]">
      {/* Ready to get started banner - Warm Butter Accent or Clean Minimal Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 border-b border-white/10">
        <div className="bg-[#213547] rounded-3xl p-8 sm:p-10 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-warm-lg">
          <div className="space-y-2 text-center sm:text-left max-w-xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FDF1D0] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Client-Side Canine Health Math
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white tracking-tight">
              Evidence-based canine calculations
            </h2>
            <p className="text-sm text-stone-300 leading-relaxed font-normal">
              Zero paywalls or app downloads. Compute biological age, resting energy, toxic thresholds, and gear dimensions in seconds.
            </p>
          </div>

          <Link
            href="/calculators"
            className="bg-[#0B63E5] hover:bg-[#094EB8] text-white font-semibold text-xs px-6 py-3.5 rounded-full transition-all shadow-warm-xs flex items-center gap-2 whitespace-nowrap"
          >
            Explore All 47 Tools <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-10">
          {/* Brand & Newsletter Column (Matching Good Dog Footer) */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/pawsmetric_logo.png"
                alt="PawsMetric Logo"
                width={30}
                height={30}
                className="w-7 h-7 rounded-lg object-contain"
              />
              <span className="text-xl font-bold font-serif text-white tracking-tight">
                paws<span className="text-[#FDF1D0]">metric</span>
              </span>
            </Link>

            <p className="text-xs text-stone-300 leading-relaxed max-w-sm font-normal">
              PawsMetric is a dedicated companion animal calculation suite built around published veterinary research (AAHA, WSAVA, NRC 2006). Designed for responsible dog owners and veterinary professionals.
            </p>

            <div className="pt-2 space-y-2 max-w-sm">
              <span className="text-xs font-semibold text-white">Canine health updates in your inbox</span>
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email address"
                  className="bg-[#0D1A25] border border-white/15 rounded-full px-4 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#0B63E5] flex-1"
                />
                <button
                  type="submit"
                  className="bg-white hover:bg-stone-100 text-[#162737] text-xs font-semibold px-4 py-2 rounded-full transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Categories */}
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-3.5 font-sans">
              Tool Categories
            </div>
            <ul className="space-y-2.5 text-xs font-normal text-stone-300">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link href={`/calculators/${cat.slug}`} className="hover:text-white transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Tools */}
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-3.5 font-sans">
              Popular Calculators
            </div>
            <ul className="space-y-2.5 text-xs font-normal text-stone-300">
              <li><Link href="/calculators/dog-age-calculator" className="hover:text-white transition-colors">Dog Age Calculator</Link></li>
              <li><Link href="/calculators/dog-calorie-calculator" className="hover:text-white transition-colors">Daily Calorie & Portion</Link></li>
              <li><Link href="/calculators/dog-chocolate-toxicity-calculator" className="hover:text-white transition-colors">Chocolate Toxicity Risk</Link></li>
              <li><Link href="/calculators/dog-benadryl-dosage-calculator" className="hover:text-white transition-colors">Benadryl Dosage</Link></li>
              <li><Link href="/calculators/puppy-weight-predictor" className="hover:text-white transition-colors">Puppy Growth Predictor</Link></li>
              <li><Link href="/calculators/dog-crate-size-calculator" className="hover:text-white transition-colors">Crate Sizing Calculator</Link></li>
            </ul>
          </div>

          {/* Resources & Legal */}
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-3.5 font-sans">
              Resources & Legal
            </div>
            <ul className="space-y-2.5 text-xs font-normal text-stone-300">
              <li><Link href="/about" className="hover:text-white transition-colors">About PawsMetric</Link></li>
              <li><Link href="/editorial-guidelines" className="hover:text-white transition-colors">Editorial Guidelines</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">Evidence-Based Guides</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-[11px] text-stone-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} PawsMetric. All rights reserved.</div>
          <div className="text-center sm:text-right text-stone-400">
            Calculations are for educational and informational reference. Always consult a licensed veterinarian for urgent diagnosis.
          </div>
        </div>
      </div>
    </footer>
  );
}
