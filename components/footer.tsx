import React from 'react';
import Link from 'next/link';
import { Dog, ShieldCheck, ArrowRight } from 'lucide-react';
import { CATEGORIES } from '@/lib/data/categories';

export function Footer() {
  return (
    <footer className="bg-[#082C1B] text-white border-t border-[#0d4028]">
      {/* Ready to get started banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 border-b border-[#0d4028]">
        <div className="bg-[#041B10] rounded-2xl p-8 md:p-10 border border-[#0d4028] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-black text-white">Ready to get started with PawsMetric?</h2>
            <p className="text-xs text-[#8BF03B] font-medium">
              Join thousands of pet parents calculating accurate dog nutrition & health standards daily.
            </p>
          </div>

          <Link
            href="/calculators"
            className="bg-[#8BF03B] hover:bg-[#7ce428] text-[#082C1B] font-black text-xs px-6 py-3 rounded-lg transition-all shadow-sm flex items-center gap-2 whitespace-nowrap"
          >
            Explore All Calculators <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-10">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#8BF03B] text-[#082C1B] flex items-center justify-center font-black">
                <Dog className="w-4 h-4" />
              </div>
              <span className="text-lg font-black text-white tracking-tight">
                Paws<span className="text-[#8BF03B]">Metric</span>
              </span>
            </Link>
            <p className="text-xs text-[#A2B5AB] leading-relaxed max-w-sm">
              Scientific canine calculations without ads or sign-up walls. Powered by peer-reviewed DVM literature.
            </p>
            <div className="inline-flex items-center gap-2 text-[11px] text-[#8BF03B] font-bold bg-[#041B10] px-3 py-1.5 rounded-md border border-[#0d4028]">
              <ShieldCheck className="w-3.5 h-3.5" /> DVM Medical Board Reviewed
            </div>
          </div>

          {/* Categories */}
          <div>
            <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#8BF03B] mb-4">Calculators</div>
            <ul className="space-y-2 text-xs font-semibold text-[#A2B5AB]">
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
            <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#8BF03B] mb-4">Popular Tools</div>
            <ul className="space-y-2 text-xs font-semibold text-[#A2B5AB]">
              <li><Link href="/calculators/dog-age-calculator" className="hover:text-white">Dog Age Calculator</Link></li>
              <li><Link href="/calculators/dog-calorie-calculator" className="hover:text-white">Calorie Calculator</Link></li>
              <li><Link href="/calculators/dog-chocolate-toxicity-calculator" className="hover:text-white">Chocolate Toxicity</Link></li>
              <li><Link href="/calculators/dog-benadryl-dosage-calculator" className="hover:text-white">Benadryl Dosage</Link></li>
              <li><Link href="/calculators/dog-crate-size-calculator" className="hover:text-white">Crate Sizing</Link></li>
            </ul>
          </div>

          {/* Company / Legal */}
          <div>
            <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#8BF03B] mb-4">Company</div>
            <ul className="space-y-2 text-xs font-semibold text-[#A2B5AB]">
              <li><Link href="/team" className="hover:text-white">Veterinary Team</Link></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/editorial-guidelines" className="hover:text-white">Methodology</Link></li>
              <li><Link href="/resources" className="hover:text-white">Guides</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-[#0d4028] text-[11px] text-[#6B8577] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} PawsMetric. All rights reserved.</div>
          <div>DVM-verified companion animal health calculation engines.</div>
        </div>
      </div>
    </footer>
  );
}
