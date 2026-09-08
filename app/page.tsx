import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  ShieldCheck,
  ArrowRight,
  Clock,
  Scale,
  HeartPulse,
  CheckCircle2,
} from 'lucide-react';
import { CATEGORIES } from '@/lib/data/categories';
import { CALCULATORS } from '@/lib/data/calculators';

export const metadata: Metadata = {
  title: 'Dog Calculator: Free Canine Health, Nutrition & Growth Tools | PawsMetric',
  description:
    'Free scientific dog calculator tools for biological age conversion, daily caloric requirements, Benadryl dosage by weight, chocolate toxicity risk, crate sizes, and puppy growth prediction.',
  alternates: {
    canonical: 'https://www.pawsmetric.com',
  },
  openGraph: {
    title: 'Dog Calculator: Free Canine Health, Nutrition & Growth Tools | PawsMetric',
    description:
      'Free scientific dog calculator tools for age, calories, Benadryl dosage, chocolate toxicity, and puppy growth.',
    url: 'https://www.pawsmetric.com',
    siteName: 'PawsMetric',
    type: 'website',
  },
};

export default function HomePage() {
  const featuredCalculators = CALCULATORS.filter((c) =>
    [
      'dog-age-calculator',
      'dog-calorie-calculator',
      'dog-chocolate-toxicity-calculator',
      'dog-benadryl-dosage-calculator',
      'puppy-growth-predictor',
      'dog-crate-size-calculator',
    ].includes(c.slug)
  );

  // Schema.org WebSite, Organization, WebApplication, and FAQPage JSON-LD
  const homeSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'PawsMetric Dog Calculator',
    url: 'https://www.pawsmetric.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.pawsmetric.com/calculators?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'PawsMetric Dog Calculator & Canine Health Portal',
    description:
      'Free canine calculations for biological age, nutrition, weight-based dosage, and toxicity safety.',
    url: 'https://www.pawsmetric.com',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How does the PawsMetric dog age calculator convert to human years?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We apply the 2020 UCSD School of Medicine epigenetic clock equation [Human Age = 16 * ln(Dog Age) + 31] adjusted for breed weight classes, replacing outdated multiply-by-7 rules.',
        },
      },
      {
        '@type': 'Question',
        name: 'How are daily food calories and kibble portions determined?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Caloric calculations use Resting Energy Requirement: RER = 70 * (weight in kg)^0.75 multiplied by life stage factors (1.6 for neutered adult, 2.0 for intact adult, 3.0 for growing puppy).',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the baseline Benadryl dose for dogs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The baseline veterinary dose is 1 mg of Benadryl (Diphenhydramine) per 1 lb of body weight administered orally every 8 to 12 hours under veterinary guidance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are PawsMetric dog calculator tools free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. All PawsMetric dog calculators are 100% free, run directly in your browser without requiring registration or app downloads.',
        },
      },
    ],
  };

  return (
    <div className="space-y-16 pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* 1. HERO SECTION - CLEAN, BLUE THEMED */}
      <section className="pt-10 pb-12 md:pt-16 md:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text & Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EBF2FE] text-[#054FB9] text-xs font-semibold border border-[#D1E0FC]">
              <CheckCircle2 className="w-4 h-4 text-[#0073E6]" />
              100% Free Client-Side Canine Tools
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.15]">
              Dog Calculator & Free Canine Health Tools
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              Instant, accurate calculations for dog biological age, daily caloric intake, emergency chocolate & medication safety limits, crate size, and puppy growth.
            </p>

            {/* Quick Category Filter Pills */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-medium text-slate-700">
              <Link
                href="/calculators/dog-age-calculator"
                className="px-3.5 py-2 rounded-lg bg-white hover:bg-[#F4F7FC] border border-[#D1E0FC] transition-colors shadow-xs flex items-center gap-2 text-[#054FB9]"
              >
                <Clock className="w-3.5 h-3.5 text-[#0073E6]" /> Canine Age Converter
              </Link>
              <Link
                href="/calculators/dog-calorie-calculator"
                className="px-3.5 py-2 rounded-lg bg-white hover:bg-[#F4F7FC] border border-[#D1E0FC] transition-colors shadow-xs flex items-center gap-2 text-[#054FB9]"
              >
                <Scale className="w-3.5 h-3.5 text-[#0073E6]" /> Daily Calorie Estimator
              </Link>
              <Link
                href="/calculators/dog-benadryl-dosage-calculator"
                className="px-3.5 py-2 rounded-lg bg-white hover:bg-[#F4F7FC] border border-[#D1E0FC] transition-colors shadow-xs flex items-center gap-2 text-[#054FB9]"
              >
                <HeartPulse className="w-3.5 h-3.5 text-[#0073E6]" /> Benadryl Dosage
              </Link>
              <Link
                href="/calculators/dog-chocolate-toxicity-calculator"
                className="px-3.5 py-2 rounded-lg bg-white hover:bg-[#F4F7FC] border border-[#D1E0FC] transition-colors shadow-xs flex items-center gap-2 text-[#054FB9]"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#0073E6]" /> Chocolate Toxicity
              </Link>
            </div>
          </div>

          {/* Right Column Preview Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-6 rounded-2xl border border-[#D1E0FC] shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Sample Age Calculation</span>
                <span className="bg-[#EBF2FE] text-[#054FB9] text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-[#D1E0FC]">
                  2020 Epigenetic Math
                </span>
              </div>
              <div className="flex items-baseline justify-between border-t border-[#F4F7FC] pt-3">
                <div>
                  <div className="text-xs text-slate-500 font-medium">4-Year-Old Medium Dog</div>
                  <div className="text-2xl font-bold text-[#054FB9]">35.3 Human Years</div>
                </div>
                <Link href="/calculators/dog-age-calculator" className="text-xs font-semibold text-[#0073E6] hover:text-[#054FB9]">
                  Run Calculation →
                </Link>
              </div>
            </div>

            <div className="bg-[#054FB9] text-white p-6 rounded-2xl border border-[#0461CF] shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#B3C7F7] font-medium uppercase tracking-wider">Benadryl Dosage Sample</span>
                <span className="text-xs font-semibold text-[#B3C7F7]">1 mg / lb baseline</span>
              </div>
              <div className="flex items-baseline justify-between border-t border-[#0461CF] pt-3">
                <div>
                  <div className="text-xs text-[#B3C7F7] font-normal">50 lb Body Weight</div>
                  <div className="text-2xl font-bold text-white">50 mg (2 Tablets)</div>
                </div>
                <Link href="/calculators/dog-benadryl-dosage-calculator" className="text-xs font-semibold text-[#B3C7F7] hover:text-white">
                  Calculate Dose →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ESSENTIAL CALCULATORS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-[#D1E0FC] pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0073E6]">Essential Dog Calculators</span>
            <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight mt-1">
              Popular Dog Calculators
            </h2>
          </div>
          <Link href="/calculators" className="text-xs font-semibold text-slate-700 hover:text-[#0073E6] flex items-center gap-1">
            View All Tools <ArrowRight className="w-3.5 h-3.5 text-[#0073E6]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCalculators.map((calc) => (
            <Link
              key={calc.slug}
              href={`/calculators/${calc.slug}`}
              className="clean-card p-6 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-[#EBF2FE] text-[#054FB9] border border-[#D1E0FC]">
                    {calc.categoryName}
                  </span>
                  <span className="text-[11px] font-medium text-slate-500">
                    ~1 min
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#0F172A] group-hover:text-[#0073E6] leading-snug">
                  {calc.title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-normal">
                  {calc.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>Updated {calc.lastUpdated}</span>
                <span className="font-semibold text-[#054FB9] group-hover:text-[#0073E6]">Open Tool →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. CATEGORIES DIRECTORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1 border-b border-[#D1E0FC] pb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0073E6]">Browse by Category</span>
          <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight">
            Dog Calculator Categories
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/calculators/${cat.slug}`}
              className="clean-card p-6 space-y-2.5 group"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-[#0F172A] group-hover:text-[#0073E6] transition-colors">{cat.name}</h3>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0073E6] group-hover:translate-x-1 transition-all flex-shrink-0" />
              </div>
              <p className="text-xs text-slate-600 font-normal leading-relaxed line-clamp-2">{cat.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. VETERINARY RESEARCH & CLINICAL METHODOLOGY */}
      <section className="bg-white py-12 border-y border-[#D1E0FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0073E6]">Calculation Methodology</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
              Standardized companion animal equations
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Every calculation engine on PawsMetric is built using established formulas published in veterinary reference literature.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#F4F7FC] p-6 rounded-xl border border-[#D1E0FC] space-y-3">
              <div className="text-xs font-semibold text-[#054FB9] bg-[#EBF2FE] px-2.5 py-0.5 rounded-full inline-block">
                AAHA & WSAVA Standards
              </div>
              <h3 className="font-bold text-[#0F172A] text-base">Metabolic Nutrition Math</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Caloric guidelines follow National Research Council (NRC 2006) equations for Resting Energy Requirement (RER = 70 × BWkg<sup>0.75</sup>) tailored to body condition scoring.
              </p>
            </div>

            <div className="bg-[#F4F7FC] p-6 rounded-xl border border-[#D1E0FC] space-y-3">
              <div className="text-xs font-semibold text-[#054FB9] bg-[#EBF2FE] px-2.5 py-0.5 rounded-full inline-block">
                UCSD Epigenetics Study
              </div>
              <h3 className="font-bold text-[#0F172A] text-base">Biological Aging Equations</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Dog age math uses DNA methylation logarithmic clocks [16 × ln(Dog Age) + 31] adjusted for weight-class cellular metabolism.
              </p>
            </div>

            <div className="bg-[#F4F7FC] p-6 rounded-xl border border-[#D1E0FC] space-y-3">
              <div className="text-xs font-semibold text-[#054FB9] bg-[#EBF2FE] px-2.5 py-0.5 rounded-full inline-block">
                AVMA Toxicology Bounds
              </div>
              <h3 className="font-bold text-[#0F172A] text-base">Weight-Based Safety Limits</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Emergency dose and food toxicity calculators calculate exact mg/kg thresholds for theobromine, caffeine, and Diphenhydramine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1 border-b border-[#D1E0FC] pb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0073E6]">Frequently Asked Questions</span>
          <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight">
            Understanding Dog Calculations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-[#D1E0FC] space-y-2">
            <h3 className="font-bold text-[#0F172A] text-base">How does PawsMetric calculate dog age?</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              We apply the 2020 UCSD School of Medicine logarithmic formula [Human Age = 16 * ln(Dog Age) + 31] adjusted for weight class cellular aging rates rather than outdated 7-year assumptions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#D1E0FC] space-y-2">
            <h3 className="font-bold text-[#0F172A] text-base">How are daily calorie and kibble portions calculated?</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Portions use Resting Energy Requirement: RER = 70 * (weight in kg)^0.75 multiplied by life stage multipliers (1.6 for neutered adult, 2.0 for intact adult, 3.0 for puppy growth).
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#D1E0FC] space-y-2">
            <h3 className="font-bold text-[#0F172A] text-base">What is the standard Benadryl dose for dogs?</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              The standard veterinary dose is 1 mg of Diphenhydramine per 1 lb of body weight administered orally every 8 to 12 hours. A 50 lb dog receives 50 mg (2 standard 25mg tablets).
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#D1E0FC] space-y-2">
            <h3 className="font-bold text-[#0F172A] text-base">Are these calculations a replacement for a vet?</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              No. PawsMetric tools are educational reference resources based on published clinical literature. They do not replace hands-on evaluation by a licensed Doctor of Veterinary Medicine (DVM).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

