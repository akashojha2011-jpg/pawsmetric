import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  ShieldCheck,
  ArrowRight,
  Clock,
  Scale,
  HeartPulse,
  Ruler,
  CheckCircle2,
  Calculator,
  BookOpen,
  Sparkles,
  Search,
} from 'lucide-react';
import { CATEGORIES } from '@/lib/data/categories';
import { CALCULATORS } from '@/lib/data/calculators';
import { TEAM_MEMBERS } from '@/app/team/page';

export const metadata: Metadata = {
  title: 'PawsMetric: Veterinary Dog Calculators & Health Tools',
  description:
    'Free scientific calculators for dog age conversion, daily caloric requirements, Benadryl dosage by weight, chocolate toxicity risk, crate sizes, and puppy growth. Fact-checked by DVM specialists.',
  alternates: {
    canonical: 'https://www.pawsmetric.com',
  },
  openGraph: {
    title: 'PawsMetric: Veterinary Dog Calculators & Health Tools',
    description:
      'Free scientific calculators for dog age, nutrition, Benadryl dosage, chocolate toxicity, and puppy growth.',
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
    name: 'PawsMetric',
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
    name: 'PawsMetric Companion Animal Calculation Portal',
    description:
      'Veterinary calculations for canine age, nutrition, weight-based dosage, and safety alerts.',
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
        name: 'How does PawsMetric calculate dog age in human years?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We utilize the 2020 UCSD School of Medicine epigenetic clock formula [Human Age = 16 * ln(Dog Age) + 31] adjusted for breed weight classes, replacing outdated multiply-by-7 assumptions.',
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
        name: 'What is the standard Benadryl dose for dogs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The baseline veterinary dose is 1 mg of Benadryl (Diphenhydramine) per 1 lb of body weight administered orally every 8 to 12 hours under veterinary guidance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are PawsMetric calculations a substitute for veterinary care?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. PawsMetric tools are educational reference resources based on published clinical literature. They assist pet parents in daily planning but do not replace evaluation by a licensed Doctor of Veterinary Medicine (DVM).',
        },
      },
    ],
  };

  return (
    <div className="space-y-16 pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* 1. HERO SECTION - CLEAN, MODERN, UNCLUTTERED */}
      <section className="pt-10 pb-12 md:pt-16 md:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text & Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              DVM Medical Board Reviewed
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Science-backed pet tools for every stage of your dog's life
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              Instant, accurate calculations for biological age, daily caloric requirements, emergency food toxicity, and growth tracking—fact-checked by veterinary specialists.
            </p>

            {/* Clean Quick Category Filter Pills */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-medium text-slate-700">
              <Link
                href="/calculators/dog-age-calculator"
                className="px-3.5 py-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 transition-colors shadow-xs flex items-center gap-2"
              >
                <Clock className="w-3.5 h-3.5 text-emerald-600" /> Canine Age Converter
              </Link>
              <Link
                href="/calculators/dog-calorie-calculator"
                className="px-3.5 py-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 transition-colors shadow-xs flex items-center gap-2"
              >
                <Scale className="w-3.5 h-3.5 text-emerald-600" /> Daily Calorie Estimator
              </Link>
              <Link
                href="/calculators/dog-benadryl-dosage-calculator"
                className="px-3.5 py-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 transition-colors shadow-xs flex items-center gap-2"
              >
                <HeartPulse className="w-3.5 h-3.5 text-emerald-600" /> Benadryl Dosage
              </Link>
              <Link
                href="/calculators/dog-chocolate-toxicity-calculator"
                className="px-3.5 py-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 transition-colors shadow-xs flex items-center gap-2"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Chocolate Toxicity
              </Link>
            </div>
          </div>

          {/* Right Column Preview Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Sample Age Calculation</span>
                <span className="bg-emerald-50 text-emerald-700 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-emerald-200">
                  2020 Epigenetic Math
                </span>
              </div>
              <div className="flex items-baseline justify-between border-t border-slate-100 pt-3">
                <div>
                  <div className="text-xs text-slate-500 font-medium">4-Year-Old Medium Dog</div>
                  <div className="text-2xl font-bold text-slate-900">35.3 Human Years</div>
                </div>
                <Link href="/calculators/dog-age-calculator" className="text-xs font-semibold text-emerald-600 hover:text-emerald-700">
                  Run Calculation →
                </Link>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Benadryl Dosage Sample</span>
                <span className="text-xs font-semibold text-emerald-400">1 mg / lb baseline</span>
              </div>
              <div className="flex items-baseline justify-between border-t border-slate-800 pt-3">
                <div>
                  <div className="text-xs text-slate-400 font-normal">50 lb Body Weight</div>
                  <div className="text-2xl font-bold text-emerald-400">50 mg (2 Tablets)</div>
                </div>
                <Link href="/calculators/dog-benadryl-dosage-calculator" className="text-xs font-semibold text-emerald-400 hover:text-emerald-300">
                  Calculate Dose →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ESSENTIAL CALCULATORS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Essential Tools</span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">
              Popular Veterinary Calculators
            </h2>
          </div>
          <Link href="/calculators" className="text-xs font-semibold text-slate-700 hover:text-emerald-600 flex items-center gap-1">
            View All Tools <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />
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
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-100">
                    {calc.categoryName}
                  </span>
                  <span className="text-[11px] font-medium text-slate-500">
                    ~1 min
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-600 leading-snug">
                  {calc.title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-normal">
                  {calc.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>Updated {calc.lastUpdated}</span>
                <span className="font-semibold text-slate-900 group-hover:text-emerald-600">Open Tool →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. CATEGORIES DIRECTORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1 border-b border-slate-200 pb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Browse by Category</span>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Explore All Tool Areas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/calculators/${cat.slug}`}
              className="clean-card p-6 space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-lg bg-slate-900 text-emerald-400 flex items-center justify-center font-bold">
                  <Calculator className="w-4 h-4" />
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-600">{cat.name}</h3>
                <p className="text-xs text-slate-600 font-normal leading-relaxed mt-1 line-clamp-2">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. VETERINARY RESEARCH & CLINICAL METHODOLOGY */}
      <section className="bg-white py-12 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Clinical Methodology</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Grounded in peer-reviewed veterinary literature
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Every PawsMetric calculation engine is built directly from validated clinical studies published by leading companion animal health institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-3">
              <div className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full inline-block">
                AAHA & WSAVA Standards
              </div>
              <h3 className="font-bold text-slate-900 text-base">Metabolic Nutrition Math</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Caloric guidelines follow National Research Council (NRC 2006) equations for Resting Energy Requirement (RER = 70 × BWkg<sup>0.75</sup>) tailored to body condition scoring.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-3">
              <div className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full inline-block">
                UCSD Epigenetics Study
              </div>
              <h3 className="font-bold text-slate-900 text-base">Biological Aging Equations</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Dog age math uses DNA methylation logarithmic clocks [16 × ln(Dog Age) + 31] adjusted for weight-class cellular metabolism.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-3">
              <div className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full inline-block">
                AVMA Toxicology Bounds
              </div>
              <h3 className="font-bold text-slate-900 text-base">Weight-Based Safety Limits</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Emergency dose and food toxicity calculators calculate exact mg/kg thresholds for theobromine, caffeine, and Diphenhydramine.
              </p>
            </div>
          </div>

          {/* DVM Review Board Preview */}
          <div className="pt-6 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Medical Review Board</h3>
                <p className="text-xs text-slate-500">Reviewed by licensed Doctors of Veterinary Medicine</p>
              </div>
              <Link href="/team" className="text-xs font-semibold text-emerald-600 hover:text-emerald-700">
                Meet the Full Team →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {TEAM_MEMBERS.slice(0, 2).map((member) => (
                <div key={member.name} className="bg-slate-50 p-5 rounded-xl border border-slate-200 flex items-start gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-emerald-400 flex-shrink-0">
                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-bold text-slate-900 text-sm">{member.name}</div>
                    <div className="text-[11px] text-emerald-700 font-medium">{member.role}</div>
                    <p className="text-xs text-slate-600 font-normal line-clamp-2 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1 border-b border-slate-200 pb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Frequently Asked Questions</span>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Understanding Canine Calculations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 text-base">How does PawsMetric calculate dog age?</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              We apply the 2020 UCSD School of Medicine logarithmic formula [Human Age = 16 * ln(Dog Age) + 31] adjusted for weight class cellular aging rates rather than outdated 7-year assumptions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 text-base">How are daily calorie and kibble portions calculated?</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Portions use Resting Energy Requirement: RER = 70 * (weight in kg)^0.75 multiplied by life stage multipliers (1.6 for neutered adult, 2.0 for intact adult, 3.0 for puppy growth).
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 text-base">What is the standard Benadryl dose for dogs?</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              The standard veterinary dose is 1 mg of Diphenhydramine per 1 lb of body weight administered orally every 8 to 12 hours. A 50 lb dog receives 50 mg (2 standard 25mg tablets).
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 text-base">Are these calculations a replacement for a vet?</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              No. PawsMetric tools are educational reference resources based on published clinical literature. They do not replace hands-on evaluation by a licensed Doctor of Veterinary Medicine (DVM).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
