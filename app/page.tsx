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
  BookOpen,
  Search,
  Sparkles,
  Zap,
  Activity,
  Award,
} from 'lucide-react';
import { CATEGORIES } from '@/lib/data/categories';
import { CALCULATORS } from '@/lib/data/calculators';
import { RESOURCES } from '@/lib/data/resources';

export const metadata: Metadata = {
  title: 'PawsMetric: Free Veterinary Dog Calculators & Canine Health Math',
  description:
    'Free scientific dog calculator tools for biological age conversion, daily caloric requirements, Benadryl dosage by weight, chocolate toxicity risk, crate sizes, and puppy growth prediction.',
  alternates: {
    canonical: 'https://www.pawsmetric.com',
  },
  openGraph: {
    title: 'PawsMetric: Free Veterinary Dog Calculators & Canine Health Math',
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
      'puppy-weight-predictor',
      'dog-crate-size-calculator',
    ].includes(c.slug)
  );

  const emergencyTools = CALCULATORS.filter((c) =>
    [
      'dog-chocolate-toxicity-calculator',
      'dog-benadryl-dosage-calculator',
      'dog-xylitol-toxicity-calculator',
      'dog-grape-toxicity-calculator',
      'dog-dehydration-risk-calculator',
      'dog-water-intake-calculator',
    ].includes(c.slug)
  );

  const nutritionTools = CALCULATORS.filter((c) =>
    [
      'dog-calorie-calculator',
      'dog-food-portion-calculator',
      'raw-diet-calculator',
      'dog-weight-loss-calculator',
      'dog-ideal-weight-calculator',
      'dog-food-cost-calculator',
    ].includes(c.slug)
  );

  const breedGrowthTools = CALCULATORS.filter((c) =>
    [
      'puppy-age-calculator',
      'puppy-weight-predictor',
      'dog-life-expectancy-calculator',
      'dog-breed-weight-height-predictor',
      'mixed-breed-adult-size-estimator',
      'litter-size-estimator',
    ].includes(c.slug)
  );

  // Schema.org Structured Data
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
    <div className="space-y-16 md:space-y-24 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* 1. HERO SECTION - WARM LINEN BACKGROUND WITH GOOD DOG AESTHETIC */}
      <section className="pt-10 pb-8 md:pt-16 md:pb-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Headline & Search */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDF1D0] text-[#1C1917] text-xs font-semibold border border-[#F6DF9C] shadow-warm-xs">
              <Sparkles className="w-3.5 h-3.5 text-stone-800" />
              Free Client-Side Canine Health Engines (47 Tools)
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1C1917] tracking-tight leading-[1.12]">
              A better way to understand your dog
            </h1>

            <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed max-w-2xl">
              Connect your dog&apos;s age, weight, and diet to peer-reviewed veterinary algorithms—so you can make informed decisions with confidence.
            </p>

            {/* Good Dog Style Search / Selector Bar */}
            <div className="pt-2">
              <Link
                href="/calculators"
                className="bg-white rounded-2xl border border-[#E8E4DC] p-3 sm:p-4 shadow-warm-md flex items-center justify-between gap-3 hover:border-stone-400 transition-all group"
              >
                <div className="flex items-center gap-3 text-stone-500 text-sm">
                  <Search className="w-5 h-5 text-stone-400 group-hover:text-[#0B63E5] transition-colors" />
                  <span className="font-normal text-stone-500">Search calculators (e.g., dog age, chocolate toxicity, calories)...</span>
                </div>
                <span className="bg-[#162737] group-hover:bg-[#0B63E5] text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors whitespace-nowrap shadow-warm-xs">
                  Find Tool
                </span>
              </Link>
            </div>

            {/* Quick Category Filter Pills (Good Dog Style) */}
            <div className="pt-1 flex flex-wrap gap-2 text-xs font-medium text-stone-700">
              <Link
                href="/calculators/dog-age-calculator"
                className="px-3.5 py-2 rounded-full bg-white hover:bg-stone-50 border border-[#E8E4DC] transition-all shadow-warm-xs flex items-center gap-2 text-stone-800"
              >
                <Clock className="w-3.5 h-3.5 text-[#0B63E5]" /> Canine Age
              </Link>
              <Link
                href="/calculators/dog-calorie-calculator"
                className="px-3.5 py-2 rounded-full bg-white hover:bg-stone-50 border border-[#E8E4DC] transition-all shadow-warm-xs flex items-center gap-2 text-stone-800"
              >
                <Scale className="w-3.5 h-3.5 text-[#0B63E5]" /> Daily Calories
              </Link>
              <Link
                href="/calculators/dog-benadryl-dosage-calculator"
                className="px-3.5 py-2 rounded-full bg-white hover:bg-stone-50 border border-[#E8E4DC] transition-all shadow-warm-xs flex items-center gap-2 text-stone-800"
              >
                <HeartPulse className="w-3.5 h-3.5 text-[#0B63E5]" /> Benadryl Dosage
              </Link>
              <Link
                href="/calculators/dog-chocolate-toxicity-calculator"
                className="px-3.5 py-2 rounded-full bg-white hover:bg-stone-50 border border-[#E8E4DC] transition-all shadow-warm-xs flex items-center gap-2 text-stone-800"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#0B63E5]" /> Chocolate Toxicity
              </Link>
              <Link
                href="/calculators/puppy-weight-predictor"
                className="px-3.5 py-2 rounded-full bg-white hover:bg-stone-50 border border-[#E8E4DC] transition-all shadow-warm-xs flex items-center gap-2 text-stone-800"
              >
                <Activity className="w-3.5 h-3.5 text-[#0B63E5]" /> Puppy Growth
              </Link>
            </div>
          </div>

          {/* Right Column: Clean Editorial Visual Showcase */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-7 rounded-3xl border border-[#E8E4DC] shadow-warm-md space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider font-sans">
                  Featured Epigenetic Model
                </span>
                <span className="bg-[#EBF2FE] text-[#0B63E5] text-[11px] font-semibold px-3 py-1 rounded-full border border-[#B8D4F7]">
                  Cell Systems 2020
                </span>
              </div>
              <div>
                <div className="text-xs text-stone-500 font-medium">4-Year-Old Medium Dog (Weight 35 lbs)</div>
                <div className="text-3xl font-serif font-bold text-[#1C1917] mt-1">35.3 Human Years</div>
                <p className="text-xs text-stone-500 mt-1 font-normal">
                  UCSD logarithmic DNA methylation formula replacing the obsolete 7-year myth.
                </p>
              </div>
              <div className="pt-4 border-t border-[#E8E4DC] flex items-center justify-between">
                <span className="text-xs text-stone-500 font-medium">Life Stage: Young Adult</span>
                <Link
                  href="/calculators/dog-age-calculator"
                  className="text-xs font-semibold text-[#0B63E5] hover:underline flex items-center gap-1"
                >
                  Run Calculation <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="bg-[#162737] text-white p-7 rounded-3xl border border-[#0D1A25] shadow-warm-md space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs text-stone-300 font-medium uppercase tracking-wider font-sans">
                  Emergency Toxicology Protocol
                </span>
                <span className="text-xs font-semibold text-[#FDF1D0]">ASPCA APCC Standards</span>
              </div>
              <div>
                <div className="text-xs text-stone-400 font-normal">Benadryl Baseline Protocol</div>
                <div className="text-3xl font-serif font-bold text-white mt-1">1 mg / lb of Body Weight</div>
                <p className="text-xs text-stone-300 mt-1 font-normal">
                  Oral diphenhydramine HCl every 8 to 12 hours for acute insect bites or mild hives.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-stone-400">Zero combination decongestants</span>
                <Link
                  href="/calculators/dog-benadryl-dosage-calculator"
                  className="text-xs font-semibold text-[#FDF1D0] hover:underline flex items-center gap-1"
                >
                  Calculate Dose <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED CALCULATORS ("ONE TRUSTED PLACE TO START") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1917] tracking-tight">
            One safe place to start
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-normal">
            Explore 47 verified calculators across nutrition, toxicology, growth, and genetics.
          </p>
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
                  <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-[#EBF2FE] text-[#0B63E5] border border-[#B8D4F7]">
                    {calc.categoryName}
                  </span>
                  <span className="text-[11px] font-medium text-stone-400 font-sans">
                    ~1 min
                  </span>
                </div>
                <h3 className="text-lg font-serif font-bold text-[#1C1917] group-hover:text-[#0B63E5] transition-colors leading-snug">
                  {calc.title}
                </h3>
                <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed font-normal">
                  {calc.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8E4DC] flex items-center justify-between text-xs text-stone-500 font-medium">
                <span>Updated {calc.lastUpdated}</span>
                <span className="font-semibold text-[#0B63E5] group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                  Open Tool <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. WARM BUTTER YELLOW BANNER: "WHY PAWSMETRIC IS DIFFERENT" (GOOD DOG IMAGE 1) */}
      <section className="bg-[#FDF1D0] border-y border-[#F6DF9C] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-stone-700 font-sans">
            Why PawsMetric is different
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1C1917] tracking-tight leading-snug">
            We replace obsolete pet shortcuts with peer-reviewed equations, so caring for your dog is safer and simpler.
          </h2>
          <div className="pt-2">
            <Link
              href="/editorial-guidelines"
              className="inline-flex items-center gap-2 bg-white hover:bg-stone-50 text-[#1C1917] font-semibold text-xs px-6 py-3 rounded-full border border-[#E8E4DC] transition-all shadow-warm-xs"
            >
              Our standards &amp; scientific screening <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. DARK SLATE NAVY SHOWCASE: "HOW CANINE CALCULATIONS WORK" (GOOD DOG IMAGE 2) */}
      <section className="bg-[#162737] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FDF1D0] font-sans">
              Peer-Reviewed Foundations
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Calculations grounded in canine biology
            </h2>
            <p className="text-sm text-stone-300 font-normal">
              Generic advice fails because domestic dogs have the highest morphological diversity of any land mammal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#213547] p-7 rounded-3xl border border-white/10 space-y-4">
              <Zap className="w-6 h-6 text-[#FDF1D0]" />
              <h3 className="font-serif font-bold text-xl text-white">Non-Linear Epigenetics</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-normal">
                Canine aging is non-linear. Dogs reach reproductive maturity in year one, mirroring human adolescence. Cellular aging then diverges based on adult body mass and telomere erosion.
              </p>
              <Link href="/calculators/dog-age-calculator" className="text-xs font-semibold text-[#FDF1D0] hover:underline flex items-center gap-1 pt-1">
                Explore Age Engine →
              </Link>
            </div>

            <div className="bg-[#213547] p-7 rounded-3xl border border-white/10 space-y-4">
              <Scale className="w-6 h-6 text-[#FDF1D0]" />
              <h3 className="font-serif font-bold text-xl text-white">Metabolic Surface Mass (kg^0.75)</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-normal">
                Basal energy needs scale with body surface area rather than linear weight. Our calorie tools implement WSAVA Resting Energy Requirement (RER) formulas adjusted for neuter status.
              </p>
              <Link href="/calculators/dog-calorie-calculator" className="text-xs font-semibold text-[#FDF1D0] hover:underline flex items-center gap-1 pt-1">
                Calculate Daily Calories →
              </Link>
            </div>

            <div className="bg-[#213547] p-7 rounded-3xl border border-white/10 space-y-4">
              <ShieldCheck className="w-6 h-6 text-[#FDF1D0]" />
              <h3 className="font-serif font-bold text-xl text-white">Exact Toxicology Clearance</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-normal">
                Canine hepatic enzymes clear theobromine and tartaric acid much slower than human livers. Our emergency tools calculate milligram-per-kilogram exposure thresholds.
              </p>
              <Link href="/calculators/dog-chocolate-toxicity-calculator" className="text-xs font-semibold text-[#FDF1D0] hover:underline flex items-center gap-1 pt-1">
                Check Chocolate Hazard →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CURATED THEMATIC TOOL CLUSTERS (STRONG INTERNAL LINKING) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Cluster 1: Emergency & Wellness */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-[#E8E4DC] pb-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B63E5] font-sans">Emergency &amp; Wellness</span>
              <h3 className="text-2xl font-serif font-bold text-[#1C1917]">Canine Health, Toxicology &amp; Medication</h3>
            </div>
            <Link href="/calculators/health" className="text-xs font-semibold text-[#0B63E5] hover:underline flex items-center gap-1">
              View Health Category <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {emergencyTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/calculators/${tool.slug}`}
                className="clean-card p-5 hover:border-stone-400 transition-all space-y-2 group flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] font-semibold text-[#0B63E5] uppercase tracking-wider">{tool.categoryName}</div>
                  <h4 className="text-base font-serif font-bold text-stone-900 group-hover:text-[#0B63E5] leading-snug mt-1">{tool.title}</h4>
                  <p className="text-xs text-stone-600 line-clamp-2 mt-1 font-normal">{tool.description}</p>
                </div>
                <span className="text-xs font-semibold text-[#0B63E5] pt-3 flex items-center gap-1">
                  Launch Tool <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Cluster 2: Nutrition & Diet */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-[#E8E4DC] pb-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B63E5] font-sans">Nutrition &amp; Feeding</span>
              <h3 className="text-2xl font-serif font-bold text-[#1C1917]">Dog Calorie, Portion &amp; Raw Diet Calculators</h3>
            </div>
            <Link href="/calculators/weight" className="text-xs font-semibold text-[#0B63E5] hover:underline flex items-center gap-1">
              View Nutrition Category <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {nutritionTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/calculators/${tool.slug}`}
                className="clean-card p-5 hover:border-stone-400 transition-all space-y-2 group flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] font-semibold text-[#0B63E5] uppercase tracking-wider">{tool.categoryName}</div>
                  <h4 className="text-base font-serif font-bold text-stone-900 group-hover:text-[#0B63E5] leading-snug mt-1">{tool.title}</h4>
                  <p className="text-xs text-stone-600 line-clamp-2 mt-1 font-normal">{tool.description}</p>
                </div>
                <span className="text-xs font-semibold text-[#0B63E5] pt-3 flex items-center gap-1">
                  Launch Tool <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Cluster 3: Growth & Breed */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-[#E8E4DC] pb-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B63E5] font-sans">Growth &amp; Development</span>
              <h3 className="text-2xl font-serif font-bold text-[#1C1917]">Puppy Development, Weight &amp; Breed Sizing</h3>
            </div>
            <Link href="/calculators/breed" className="text-xs font-semibold text-[#0B63E5] hover:underline flex items-center gap-1">
              View Breed Category <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {breedGrowthTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/calculators/${tool.slug}`}
                className="clean-card p-5 hover:border-stone-400 transition-all space-y-2 group flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] font-semibold text-[#0B63E5] uppercase tracking-wider">{tool.categoryName}</div>
                  <h4 className="text-base font-serif font-bold text-stone-900 group-hover:text-[#0B63E5] leading-snug mt-1">{tool.title}</h4>
                  <p className="text-xs text-stone-600 line-clamp-2 mt-1 font-normal">{tool.description}</p>
                </div>
                <span className="text-xs font-semibold text-[#0B63E5] pt-3 flex items-center gap-1">
                  Launch Tool <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SOFT POWDER BLUE TESTIMONIAL / SOURCING BANNER (GOOD DOG IMAGE 3) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#DCE8F9] rounded-3xl p-8 sm:p-12 border border-[#B8D4F7]">
          <div className="bg-[#162737] rounded-2xl p-8 sm:p-10 text-white space-y-4 max-w-4xl mx-auto shadow-warm-md">
            <span className="text-xs font-semibold text-[#FDF1D0] uppercase tracking-wider font-sans">
              Clinical Integrity Standard
            </span>
            <p className="text-lg sm:text-2xl font-serif font-normal text-white leading-relaxed">
              &ldquo;Every canine formula on PawsMetric is strictly calibrated against peer-reviewed protocols from the American Veterinary Medical Association (AVMA), WSAVA Global Nutrition Committee, and the UCSD Canine Epigenetics Project.&rdquo;
            </p>
            <div className="text-xs text-stone-300 font-sans pt-2">
              PawsMetric Editorial Review Board • Reviewed August 2026
            </div>
          </div>
        </div>
      </section>

      {/* 7. KEEP EXPLORING: VETERINARY LEARNING CENTER (GOOD DOG IMAGE 3) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-[#E8E4DC] pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B63E5] font-sans">Keep Exploring</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1917] tracking-tight mt-1">
              Veterinary Library &amp; Care Guides
            </h2>
          </div>
          <Link href="/resources" className="text-xs font-semibold text-stone-700 hover:text-[#0B63E5] flex items-center gap-1">
            Browse All Guides <ArrowRight className="w-3.5 h-3.5 text-[#0B63E5]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESOURCES.map((article, idx) => {
            const cardBgStyles = [
              'bg-[#EFE8FA] border-[#DED0F7]',
              'bg-[#FDF1D0] border-[#F6DF9C]',
              'bg-white border-[#E8E4DC]',
              'bg-[#DCE8F9] border-[#B8D4F7]',
            ];
            const currentStyle = cardBgStyles[idx % cardBgStyles.length];

            return (
              <Link
                key={article.slug}
                href={`/resources/${article.slug}`}
                className={`p-6 rounded-3xl border ${currentStyle} shadow-warm-xs hover:shadow-warm-md transition-all flex flex-col justify-between group`}
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-600 bg-white/70 px-2.5 py-1 rounded-full border border-stone-200">
                    {article.category}
                  </span>
                  <h3 className="text-base font-serif font-bold text-stone-900 group-hover:text-[#0B63E5] leading-snug line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-stone-700 line-clamp-3 font-normal leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
                <div className="pt-4 text-xs font-semibold text-stone-900 flex items-center gap-1 mt-4">
                  Read Guide <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 8. CATEGORIES DIRECTORY (CLEAN GOOD DOG GRID) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1 border-b border-[#E8E4DC] pb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0B63E5] font-sans">Browse by Domain</span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1917] tracking-tight">
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
                <h3 className="text-base font-serif font-bold text-[#1C1917] group-hover:text-[#0B63E5] transition-colors">
                  {cat.name}
                </h3>
                <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#0B63E5] group-hover:translate-x-1 transition-all flex-shrink-0" />
              </div>
              <p className="text-xs text-stone-600 font-normal leading-relaxed line-clamp-2">
                {cat.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1 border-b border-[#E8E4DC] pb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0B63E5] font-sans">FAQ</span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1917] tracking-tight">
            Understanding Canine Calculations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="clean-card p-6 space-y-2">
            <h3 className="font-serif font-bold text-[#1C1917] text-base">How does PawsMetric calculate dog age?</h3>
            <p className="text-xs text-stone-600 leading-relaxed font-normal">
              We apply the 2020 UCSD School of Medicine logarithmic formula [Human Age = 16 * ln(Dog Age) + 31] adjusted for weight class cellular aging rates rather than outdated 7-year assumptions.
            </p>
          </div>

          <div className="clean-card p-6 space-y-2">
            <h3 className="font-serif font-bold text-[#1C1917] text-base">How are daily calorie and kibble portions calculated?</h3>
            <p className="text-xs text-stone-600 leading-relaxed font-normal">
              Portions use Resting Energy Requirement: RER = 70 * (weight in kg)^0.75 multiplied by life stage multipliers (1.6 for neutered adult, 2.0 for intact adult, 3.0 for puppy growth).
            </p>
          </div>

          <div className="clean-card p-6 space-y-2">
            <h3 className="font-serif font-bold text-[#1C1917] text-base">What is the standard Benadryl dose for dogs?</h3>
            <p className="text-xs text-stone-600 leading-relaxed font-normal">
              The standard veterinary dose is 1 mg of Diphenhydramine per 1 lb of body weight administered orally every 8 to 12 hours. A 50 lb dog receives 50 mg (2 standard 25mg tablets).
            </p>
          </div>

          <div className="clean-card p-6 space-y-2">
            <h3 className="font-serif font-bold text-[#1C1917] text-base">Are these calculations a replacement for a vet?</h3>
            <p className="text-xs text-stone-600 leading-relaxed font-normal">
              No. PawsMetric tools are educational reference resources based on published clinical literature. They do not replace hands-on evaluation by a licensed Doctor of Veterinary Medicine (DVM).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
