import React from 'react';
import { Metadata } from 'next';
import { ShieldCheck, BookOpen, UserCheck, RefreshCw } from 'lucide-react';
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = {
  title: 'Editorial & Calculation Standards | PawsMetric Dog Calculator',
  description: 'Editorial guidelines explaining how PawsMetric dog calculators, formulas, and guides are developed and verified using published veterinary literature.',
  alternates: {
    canonical: 'https://www.pawsmetric.com/editorial-guidelines',
  },
};

export default function EditorialGuidelinesPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs items={[{ label: 'Editorial Guidelines', url: '/editorial-guidelines' }]} />

        <div className="space-y-3 border-b border-slate-200 pb-6">
          <span className="bg-blue-50 text-[#0461CF] border border-[#8BABF1]/30 text-xs font-bold uppercase px-3 py-1 rounded-full inline-block">
            METHODOLOGY & STANDARDS
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            PawsMetric Dog Calculator Standards
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            How PawsMetric researches, programs, and verifies companion animal calculation engines.
          </p>
        </div>

        <div className="clean-card p-6 md:p-10 space-y-8 text-slate-800 text-sm leading-relaxed font-normal">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#0073E6]" /> 1. Scientific Literature Sourcing Standards
            </h2>
            <p className="text-slate-600">
              Every calculator equation and reference guide published on PawsMetric originates from peer-reviewed clinical veterinary research. Primary data sources include:
            </p>
            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>American Veterinary Medical Association (AVMA) Clinical Guidelines</li>
              <li>World Small Animal Veterinary Association (WSAVA) Global Nutrition Datasets</li>
              <li>National Research Council (NRC) Nutrient Requirements of Dogs and Cats</li>
              <li>Journal of Veterinary Internal Medicine (JVIM) Toxicological Threshold Studies</li>
              <li>University of California, San Diego (UCSD) Epigenetic Aging Clocks</li>
            </ul>
            <p className="text-slate-600">
              We explicitly reject outdated internet myths, such as multiplying dog age by 7 or estimating kibble portions solely from marketing labels on dog food bags.
            </p>
          </section>

          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-[#0073E6]" /> 2. Calculation Verification Process
            </h2>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <h3 className="text-base font-bold text-slate-900">The PawsMetric Quality Standard</h3>
              <ol className="list-decimal pl-5 text-xs text-slate-700 space-y-2 font-medium">
                <li><strong>Equation Sourcing:</strong> Formulas are extracted directly from published veterinary research (WSAVA, AVMA, NRC 2006).</li>
                <li><strong>Mathematical Precision:</strong> Software models calculate precise weight-based thresholds with automated unit conversions.</li>
                <li><strong>UI & Code QA:</strong> Automated test suites verify client-side calculations across edge cases to prevent calculation rounding errors.</li>
                <li><strong>Clear User Guidance:</strong> Output summaries explain the underlying math in plain, accessible language for dog parents.</li>
              </ol>
            </div>
          </section>

          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-[#0073E6]" /> 3. Regular Audits & Formula Updates
            </h2>
            <p className="text-slate-600">
              Companion animal research continuously evolves. We review our calculation engines against newly published recommendations from the WSAVA and AVMA, updating formulas as new literature emerges.
            </p>
          </section>

          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#0073E6]" /> 4. Independence & Transparency
            </h2>
            <p className="text-slate-600">
              PawsMetric is completely independent. We do not accept sponsored product placements or manipulate calculator outputs for commercial endorsements. Our tools exist solely for pet parent convenience and educational reference.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

