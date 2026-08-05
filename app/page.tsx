import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  Search,
  ShieldCheck,
  ArrowRight,
  Clock,
  Scale,
  HeartPulse,
  Coins,
  Ruler,
  Dna,
  Smile,
  CheckCircle2,
  Star,
  Dog,
  Sparkles,
  ChevronRight,
  TrendingUp,
  HelpCircle,
  Calculator,
  BookOpen,
} from 'lucide-react';
import { CATEGORIES } from '@/lib/data/categories';
import { CALCULATORS } from '@/lib/data/calculators';
import { RESOURCES } from '@/lib/data/resources';
import { TEAM_MEMBERS } from '@/app/team/page';

export const metadata: Metadata = {
  title: 'Dog Calculator: Free Dog Age, Calorie, Benadryl & Toxicity Tools | PawsMetric',
  description:
    'Free scientific dog calculators for age in human years, Benadryl dosage by weight, daily kibble calories, chocolate toxicity, crate sizes, and puppy growth. DVM verified.',
  keywords: [
    'dog calculator',
    'dog age calculator',
    'dog food calculator',
    'dog weight calculator',
    'dog benadryl dosage calculator',
    'dog chocolate toxicity calculator',
    'puppy growth calculator',
    'how old is my dog in human years',
    'how much to feed my dog calculator',
    'dog crate size calculator',
  ],
  alternates: {
    canonical: 'https://pawsmetric.com',
  },
  openGraph: {
    title: 'Dog Calculator: Free Dog Age, Calorie, Benadryl & Toxicity Tools | PawsMetric',
    description: 'Free scientific dog calculators for age in human years, Benadryl dosage by weight, daily calories, chocolate toxicity, crate sizes, and puppy growth.',
    url: 'https://pawsmetric.com',
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
      'dog-crate-size-calculator',
      'dog-cost-calculator',
      'puppy-growth-predictor',
      'dog-pregnancy-due-date-calculator',
      'raw-dog-food-calculator',
    ].includes(c.slug)
  );

  // Schema.org WebSite, Organization, WebApplication, and FAQPage JSON-LD
  const homeSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'PawsMetric - Free Dog Calculators & Health Tools',
    url: 'https://pawsmetric.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://pawsmetric.com/calculators?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'PawsMetric Dog Calculator Suite',
    description: 'Free web app with 38+ dog calculators for age, food, weight, puppy growth, pregnancy, Benadryl dosage, and chocolate toxicity safety.',
    url: 'https://pawsmetric.com',
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
        name: 'What is a dog calculator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A dog calculator is an online veterinary tool that uses your dog\'s age, weight, breed, size, or activity level to compute precise health metrics such as human-equivalent age, daily kibble calories, medication dosages (e.g. Benadryl), ideal weight ranges, and emergency food toxicities.',
        },
      },
      {
        '@type': 'Question',
        name: 'How accurate is the dog age calculator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our Dog Age Calculator replaces the obsolete 7-year myth with the 2020 UCSD School of Medicine epigenetic clock research equation [Human Age = 16 * ln(Dog Age) + 31] adjusted for breed size and weight class.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much Benadryl can I give my dog?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The standard veterinary dose is 1 mg of Benadryl (Diphenhydramine) per 1 lb of body weight administered orally every 8 to 12 hours. A 50 lb dog receives 50 mg (2 standard 25mg tablets).',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you calculate daily dog calories and kibble portions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Daily caloric needs are calculated using Resting Energy Requirement: RER = 70 * (weight in kg)^0.75 multiplied by life stage activity factors (1.6 for neutered adult, 2.0 for intact adult, 3.0 for growing puppy).',
        },
      },
      {
        '@type': 'Question',
        name: 'Are these dog calculators a replacement for a veterinarian?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. PawsMetric calculators are educational reference tools built around published veterinary formulas and nutrition standards. They are ideal for daily pet planning, but do not replace hands-on evaluation by a licensed Doctor of Veterinary Medicine (DVM).',
        },
      },
    ],
  };

  return (
    <div className="space-y-16 pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* 1. HERO SECTION - KEYWORD & MATRIX INSPIRED BY DOGCALCULATOR.NET */}
      <section className="pt-10 pb-14 md:pt-14 md:pb-18 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column Text & Search */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#8BF03B] text-[#082C1B] text-xs font-black uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#082C1B]" />
              The Ultimate Dog Calculator Hub (38+ Free Tools)
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#082C1B] tracking-tight leading-[1.1]">
              Dog Calculator <br />
              <span className="text-[#082C1B]">Free Tools for Every Dog Owner</span>
            </h1>

            <p className="text-base sm:text-lg text-[#4D534E] font-medium leading-relaxed max-w-2xl">
              38+ practical calculators for dog age in human years, kibble calories, weight, Benadryl dosage, chocolate toxicity, crate size, and puppy growth—no sign-up or accounts required.
            </p>

            {/* Micro Quick Jump Keywords Bar */}
            <div className="flex flex-wrap gap-2 text-xs font-bold text-[#082C1B]">
              <Link href="/calculators/dog-age-calculator" className="px-3.5 py-1.5 rounded-lg bg-white hover:bg-[#8BF03B] border border-[#E2E3D8] transition-colors shadow-sm flex items-center gap-1.5">
                <Calculator className="w-3.5 h-3.5 text-[#082C1B]" /> Age (~30 sec)
              </Link>
              <Link href="/calculators/dog-benadryl-dosage-calculator" className="px-3.5 py-1.5 rounded-lg bg-white hover:bg-[#8BF03B] border border-[#E2E3D8] transition-colors shadow-sm flex items-center gap-1.5">
                <Calculator className="w-3.5 h-3.5 text-[#082C1B]" /> Benadryl (~15 sec)
              </Link>
              <Link href="/calculators/dog-calorie-calculator" className="px-3.5 py-1.5 rounded-lg bg-white hover:bg-[#8BF03B] border border-[#E2E3D8] transition-colors shadow-sm flex items-center gap-1.5">
                <Calculator className="w-3.5 h-3.5 text-[#082C1B]" /> Food & Calories (~45 sec)
              </Link>
              <Link href="/calculators/dog-chocolate-toxicity-calculator" className="px-3.5 py-1.5 rounded-lg bg-white hover:bg-[#8BF03B] border border-[#E2E3D8] transition-colors shadow-sm flex items-center gap-1.5">
                <Calculator className="w-3.5 h-3.5 text-[#082C1B]" /> Chocolate Toxicity (~20 sec)
              </Link>
              <Link href="/calculators/puppy-growth-predictor" className="px-3.5 py-1.5 rounded-lg bg-white hover:bg-[#8BF03B] border border-[#E2E3D8] transition-colors shadow-sm flex items-center gap-1.5">
                <Calculator className="w-3.5 h-3.5 text-[#082C1B]" /> Puppy Growth (~40 sec)
              </Link>
            </div>
          </div>

          {/* Right Column Interactive Cards + Dog Hero Banner Image */}
          <div className="lg:col-span-5 relative space-y-4">
            <div className="bg-white p-6 rounded-2xl border border-[#E2E3D8] shadow-paid space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase text-[#4D534E]">Dog Age Calculator Preview</span>
                <span className="bg-[#8BF03B] text-[#082C1B] text-[10px] font-black px-2.5 py-0.5 rounded">
                  2020 DNA Formula
                </span>
              </div>
              <div className="flex items-baseline justify-between border-t border-[#F0F1EA] pt-3">
                <div>
                  <div className="text-xs text-[#4D534E] font-bold">Dog Age: 4 Years (Medium)</div>
                  <div className="text-2xl font-black text-[#082C1B]">35.3 Human Yrs</div>
                </div>
                <Link href="/calculators/dog-age-calculator" className="text-xs font-bold text-[#082C1B] underline">
                  Try Age Tool →
                </Link>
              </div>
            </div>

            <div className="bg-[#082C1B] text-white p-6 rounded-2xl border border-[#0d4028] shadow-paid space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#A2B5AB] font-extrabold uppercase">Benadryl Dosage Calculator</span>
                <span className="text-xs font-black text-[#8BF03B]">1 mg / lb</span>
              </div>
              <div className="flex items-baseline justify-between border-t border-[#0d4028] pt-3">
                <div>
                  <div className="text-xs text-[#A2B5AB] font-semibold">50 lb Dog Target</div>
                  <div className="text-2xl font-black text-[#8BF03B]">50 mg (2 Tablets)</div>
                </div>
                <Link href="/calculators/dog-benadryl-dosage-calculator" className="text-xs font-bold text-[#8BF03B] underline">
                  Calculate Dose →
                </Link>
              </div>
            </div>

            {/* HERO DOG BANNER IMAGE RESTORED */}
            <div className="relative h-56 rounded-2xl overflow-hidden border border-[#E2E3D8] shadow-paid">
              <Image
                src="/images/hero_dog_banner.jpg"
                alt="Happy Golden Retriever running outdoors"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082C1B]/80 via-transparent to-transparent flex items-end p-5">
                <div className="text-white">
                  <div className="text-xs font-extrabold text-[#8BF03B] uppercase">DVM Peer-Reviewed Math</div>
                  <div className="text-sm font-black">Trusted by 50,000+ dog parents monthly</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY HUBS FOR ALL DOG CALCULATOR KEYWORDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2 border-b border-[#E2E3D8] pb-4">
          <span className="bg-[#8BF03B] text-[#082C1B] text-[10px] font-extrabold uppercase px-2.5 py-1 rounded">
            CALCULATOR MATRIX (38+ TOOLS)
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#082C1B] tracking-tight">
            Dog Calculator Tools Directory
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/calculators/${cat.slug}`}
              className="bg-white p-6 rounded-2xl border border-[#E2E3D8] shadow-paid hover:border-[#082C1B] transition-all space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#082C1B] text-[#8BF03B] flex items-center justify-center font-bold">
                  <Calculator className="w-5 h-5" />
                </div>
                <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#082C1B] group-hover:translate-x-1 transition-all" />
              </div>
              <div>
                <h3 className="text-lg font-black text-[#082C1B] group-hover:text-[#0d4028]">{cat.name} Calculators</h3>
                <p className="text-xs text-[#4D534E] font-medium leading-relaxed mt-1 line-clamp-2">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. POPULAR CALCULATOR MATRIX WITH SEARCH TAG PILLS & TIME STAMPS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-[#E2E3D8] pb-4">
          <div>
            <span className="bg-[#8BF03B] text-[#082C1B] text-[10px] font-extrabold uppercase px-2.5 py-1 rounded">
              FREE TOOLS AT A GLANCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#082C1B] tracking-tight mt-1">
              Top-Ranked Dog Calculators
            </h2>
          </div>
          <Link href="/calculators" className="text-xs font-bold text-[#082C1B] hover:text-[#4D534E] flex items-center gap-1">
            Browse All 38+ Tools <ArrowRight className="w-4 h-4 text-[#8BF03B]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCalculators.map((calc) => (
            <Link
              key={calc.slug}
              href={`/calculators/${calc.slug}`}
              className="bg-white rounded-2xl border border-[#E2E3D8] p-6 shadow-paid hover:border-[#082C1B] transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded bg-[#8BF03B] text-[#082C1B]">
                    {calc.categoryName}
                  </span>
                  <span className="text-[11px] font-bold text-[#4D534E] bg-[#F0F1EA] px-2 py-0.5 rounded">
                    ~30 sec
                  </span>
                </div>
                <h3 className="text-lg font-black text-[#082C1B] group-hover:text-[#0d4028] leading-snug">
                  {calc.title}
                </h3>
                <p className="text-xs text-[#4D534E] line-clamp-2 leading-relaxed font-medium">
                  {calc.description}
                </p>

                {/* SEO Micro Search Tag Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="bg-[#F0F1EA] text-[#082C1B] text-[10px] font-bold px-2 py-0.5 rounded border border-[#E2E3D8]">
                    {calc.slug.replace(/-/g, ' ')}
                  </span>
                  <span className="bg-[#F0F1EA] text-[#082C1B] text-[10px] font-bold px-2 py-0.5 rounded border border-[#E2E3D8]">
                    free tool
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0F1EA] flex items-center justify-between text-[11px] text-[#4D534E] font-semibold">
                <span>Updated {calc.lastUpdated}</span>
                <span className="font-bold text-[#082C1B] group-hover:text-[#0d4028]">Try Tool →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. COMPREHENSIVE SEO FAQ SECTION (INSPIRED BY DOGCALCULATOR.NET) */}
      <section className="bg-white py-12 border-y border-[#E2E3D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2">
            <span className="bg-[#8BF03B] text-[#082C1B] text-[10px] font-extrabold uppercase px-2.5 py-1 rounded">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#082C1B] tracking-tight">
              Everything You Need to Know About Dog Calculators
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#F0F1EA] p-6 rounded-2xl border border-[#E2E3D8] space-y-3">
              <h3 className="font-black text-[#082C1B] text-base">What is a dog calculator?</h3>
              <p className="text-xs text-[#4D534E] font-semibold leading-relaxed">
                A <strong>dog calculator</strong> is an online tool that uses your dog's weight, age, breed, or activity level to compute precise health metrics such as human-equivalent age, daily kibble calories, Benadryl dosage, and chocolate toxicity risk.
              </p>
              <Link href="/calculators" className="inline-flex items-center gap-1 text-xs font-bold text-[#082C1B] underline">
                Explore All Calculators →
              </Link>
            </div>

            <div className="bg-[#F0F1EA] p-6 rounded-2xl border border-[#E2E3D8] space-y-3">
              <h3 className="font-black text-[#082C1B] text-base">Which dog calculator should I use first?</h3>
              <p className="text-xs text-[#4D534E] font-semibold leading-relaxed">
                Most dog parents start with the <strong>Dog Age Calculator</strong> to understand life stage, or the <strong>Dog Calorie Calculator</strong> to determine daily kibble cups.
              </p>
              <Link href="/calculators/dog-age-calculator" className="inline-flex items-center gap-1 text-xs font-bold text-[#082C1B] underline">
                Try Dog Age Calculator →
              </Link>
            </div>

            <div className="bg-[#F0F1EA] p-6 rounded-2xl border border-[#E2E3D8] space-y-3">
              <h3 className="font-black text-[#082C1B] text-base">How much Benadryl can I give my dog?</h3>
              <p className="text-xs text-[#4D534E] font-semibold leading-relaxed">
                The standard veterinary dose is <strong>1 mg of Benadryl per 1 lb of body weight</strong>. For a 50 lb dog, administer 50 mg (2 standard 25mg tablets) every 8 to 12 hours.
              </p>
              <Link href="/calculators/dog-benadryl-dosage-calculator" className="inline-flex items-center gap-1 text-xs font-bold text-[#082C1B] underline">
                Benadryl Dosage Calculator →
              </Link>
            </div>

            <div className="bg-[#F0F1EA] p-6 rounded-2xl border border-[#E2E3D8] space-y-3">
              <h3 className="font-black text-[#082C1B] text-base">Are these calculators a replacement for a vet?</h3>
              <p className="text-xs text-[#4D534E] font-semibold leading-relaxed">
                No. PawsMetric calculators are educational reference tools built around published veterinary formulas. They are ideal for daily planning, but do not replace hands-on evaluation by a licensed DVM.
              </p>
              <Link href="/editorial-guidelines" className="inline-flex items-center gap-1 text-xs font-bold text-[#082C1B] underline">
                Read DVM Guidelines →
              </Link>
            </div>

            <div className="bg-[#F0F1EA] p-6 rounded-2xl border border-[#E2E3D8] space-y-3">
              <h3 className="font-black text-[#082C1B] text-base">How accurate is the dog age calculator?</h3>
              <p className="text-xs text-[#4D534E] font-semibold leading-relaxed">
                Our calculator uses the 2020 UCSD logarithmic formula [Human Age = 16 * ln(Dog Age) + 31] adjusted for weight class cellular aging rates rather than obsolete multiply-by-7 rules.
              </p>
              <Link href="/resources/how-to-calculate-dog-age-beyond-7-year-myth" className="inline-flex items-center gap-1 text-xs font-bold text-[#082C1B] underline">
                Read Dog Age Guide →
              </Link>
            </div>

            <div className="bg-[#F0F1EA] p-6 rounded-2xl border border-[#E2E3D8] space-y-3">
              <h3 className="font-black text-[#082C1B] text-base">Is PawsMetric free to use on mobile?</h3>
              <p className="text-xs text-[#4D534E] font-semibold leading-relaxed">
                Yes! PawsMetric is 100% free, fast, and mobile-optimized with 0 ads, 0 paywalls, and 0 user accounts required.
              </p>
              <Link href="/about" className="inline-flex items-center gap-1 text-xs font-bold text-[#082C1B] underline">
                About PawsMetric →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VETERINARY TEAM TRUST SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-[#E2E3D8] pb-4">
          <div>
            <span className="bg-[#8BF03B] text-[#082C1B] text-[10px] font-extrabold uppercase px-2.5 py-1 rounded">
              CREDIBILITY & TRUST
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#082C1B] tracking-tight mt-1">
              DVM Medical Board Peer-Reviewed Tools
            </h2>
          </div>
          <Link href="/team" className="text-xs font-bold text-[#082C1B] hover:text-[#4D534E] flex items-center gap-1">
            Meet All Team Members <ArrowRight className="w-4 h-4 text-[#8BF03B]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {TEAM_MEMBERS.slice(0, 3).map((member) => (
            <div key={member.name} className="bg-white rounded-2xl border border-[#E2E3D8] p-6 shadow-paid space-y-4">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#8BF03B] flex-shrink-0">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-black text-[#082C1B] text-sm">{member.name}</h3>
                  <div className="text-[11px] text-[#4D534E] font-bold">{member.role}</div>
                </div>
              </div>
              <p className="text-xs text-[#4D534E] font-medium leading-relaxed line-clamp-3">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
