import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES } from '@/lib/data/categories';

export function Footer() {
  return (
    <footer className="bg-[#054FB9] text-white border-t border-[#0461CF]">
      {/* Ready to get started banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8 border-b border-[#0461CF]">
        <div className="bg-[#0461CF] rounded-2xl p-6 sm:p-8 border border-[#0073E6] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Science-backed canine calculations</h2>
            <p className="text-xs text-[#B3C7F7]">
              Free, accurate tools for biological age, nutrition, medication dosage, and toxicity safety.
            </p>
          </div>

          <Link
            href="/calculators"
            className="bg-[#0073E6] hover:bg-[#054FB9] text-white font-bold text-xs px-5 py-2.5 rounded-lg transition-colors shadow-sm flex items-center gap-2 whitespace-nowrap border border-[#8BABF1]/30"
          >
            Explore All Tools <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/pawsmetric_logo.png"
                alt="PawsMetric Logo"
                width={28}
                height={28}
                className="w-7 h-7 rounded-md object-contain"
              />
              <span className="text-lg font-extrabold text-white tracking-tight">
                Paws<span className="text-[#B3C7F7]">Metric</span>
              </span>
            </Link>
            <p className="text-xs text-[#B3C7F7] leading-relaxed max-w-sm">
              Companion animal health calculation engines built around published veterinary research (AAHA, WSAVA, NRC 2006). Zero paywalls or account sign-ups.
            </p>
          </div>

          {/* Categories */}
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#B3C7F7] mb-3">Tool Categories</div>
            <ul className="space-y-2 text-xs font-normal text-[#8BABF1]">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link href={`/calculators/${cat.slug}`} className="hover:text-white transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Tools */}
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#B3C7F7] mb-3">Popular Calculators</div>
            <ul className="space-y-2 text-xs font-normal text-[#8BABF1]">
              <li><Link href="/calculators/dog-age-calculator" className="hover:text-white transition-colors">Dog Age Calculator</Link></li>
              <li><Link href="/calculators/dog-calorie-calculator" className="hover:text-white transition-colors">Daily Calorie & Portion</Link></li>
              <li><Link href="/calculators/dog-chocolate-toxicity-calculator" className="hover:text-white transition-colors">Chocolate Toxicity Risk</Link></li>
              <li><Link href="/calculators/dog-benadryl-dosage-calculator" className="hover:text-white transition-colors">Benadryl Dosage</Link></li>
              <li><Link href="/calculators/puppy-growth-predictor" className="hover:text-white transition-colors">Puppy Growth Predictor</Link></li>
            </ul>
          </div>

          {/* Company / Legal */}
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#B3C7F7] mb-3">Resources & Legal</div>
            <ul className="space-y-2 text-xs font-normal text-[#8BABF1]">
              <li><Link href="/about" className="hover:text-white transition-colors">About PawsMetric</Link></li>
              <li><Link href="/editorial-guidelines" className="hover:text-white transition-colors">Editorial Guidelines</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">Evidence-Based Guides</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-[#0461CF] text-[11px] text-[#8BABF1] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} PawsMetric. All rights reserved.</div>
          <div>Calculations are for educational reference and do not replace professional veterinary consultation.</div>
        </div>
      </div>
    </footer>
  );
}
