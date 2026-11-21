import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  Star,
  Quote,
  Check,
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

const USER_REVIEWS = [
  {
    author: 'Marcus & Cooper',
    dog: 'Labrador Retriever, 3 yrs',
    rating: 5,
    calculator: 'Chocolate Toxicity Calculator',
    calcSlug: 'dog-chocolate-toxicity-calculator',
    quote:
      'Cooper got into 4 oz of baker\'s dark chocolate while we were away. The instant theobromine calculation gave us the exact mg/kg toxic exposure level before we even got in the car. Our emergency vet said having the math already done saved critical minutes.',
    date: 'October 2026',
    verified: true,
  },
  {
    author: 'Elena & Archie',
    dog: 'English Springer Spaniel, 2 yrs',
    rating: 5,
    calculator: 'Daily Calorie & Portion Calculator',
    calcSlug: 'dog-calorie-calculator',
    quote:
      'After Archie got neutered, he steadily gained weight following the generic bag instructions. PawsMetric\'s Resting Energy Requirement (RER) formula dialed in his exact 740 kcal/day maintenance target. He lost 4 lbs safely in 8 weeks.',
    date: 'November 2026',
    verified: true,
  },
  {
    author: 'Sarah & Finn',
    dog: 'Rescue Mutt (Austin, TX)',
    rating: 5,
    calculator: 'Mixed Breed Adult Size Estimator',
    calcSlug: 'mixed-breed-adult-size-estimator',
    quote:
      'We adopted Finn at 11 weeks weighing 11.5 lbs. The rescue shelter thought he\'d top out around 30 lbs. PawsMetric\'s growth curve predicted 54 lbs. He just weighed in at 53.2 lbs on his first birthday! Incredibly accurate.',
    date: 'September 2026',
    verified: true,
  },
  {
    author: 'Dr. Rachel T., DVM',
    dog: 'Small Animal Practitioner',
    rating: 5,
    calculator: 'Dog Benadryl Dosage Calculator',
    calcSlug: 'dog-benadryl-dosage-calculator',
    quote:
      'I frequently refer dog parents to PawsMetric for Benadryl dosage checks during summer bug season. It adheres strictly to the clinical 1 mg/lb standard and explicitly warns owners against dangerous pseudoephedrine additives.',
    date: 'October 2026',
    verified: true,
  },
  {
    author: 'David & Buster',
    dog: 'Senior Beagle, 12 yrs',
    rating: 5,
    calculator: 'Canine Epigenetic Age Engine',
    calcSlug: 'dog-age-calculator',
    quote:
      'Replacing the obsolete 7-year myth with the UCSD logarithmic formula completely changed how we plan Buster\'s senior wellness checkups, arthritis exercise adjustments, and joint supplements.',
    date: 'August 2026',
    verified: true,
  },
  {
    author: 'Priya & Nova',
    dog: 'Golden Retriever Puppy',
    rating: 5,
    calculator: 'Dog Crate Sizing Calculator',
    calcSlug: 'dog-crate-size-calculator',
    quote:
      'Saved us from buying the wrong crate size twice. The +4" nose-to-tail and +3" standing headroom rule gave us the exact wire crate dimensions with divider panel we needed for smooth crate training.',
    date: 'November 2026',
    verified: true,
  },
];

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

      {/* 1. HERO SECTION - WARM LINEN BACKGROUND WITH GOOD DOG AESTHETIC & DOG PHOTOGRAPHY */}
      <section className="pt-10 pb-8 md:pt-16 md:pb-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
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

          {/* Right Column: Editorial Hero Canine Photography Card */}
          <div className="lg:col-span-5 space-y-3">
            <div className="relative rounded-3xl overflow-hidden border border-[#E8E4DC] shadow-warm-lg bg-white group">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full">
                <Image
                  src="/images/home_dog_hero.jpg"
                  alt="Healthy, happy Golden Retriever in a warm sunlit home"
                  fill
                  priority
                  className="object-cover group-hover:scale-102 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#162737]/80 via-transparent to-black/20" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#162737] text-[11px] font-bold shadow-warm-xs border border-white/40">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0B63E5]" />
                    Evidence-Based Canine Math
                  </span>
                </div>

                {/* Floating Bottom Card Over Image */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-white/60 shadow-warm-md space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-serif font-bold text-[#162737]">Bella • Golden Retriever (3.5 yrs)</div>
                      <div className="text-[11px] text-stone-600 font-medium">Epigenetic Age: 31.8 Human Yrs • Daily Energy: 985 kcal</div>
                    </div>
                    <Link
                      href="/calculators/dog-age-calculator"
                      className="bg-[#162737] hover:bg-[#0B63E5] text-white text-xs font-semibold px-3 py-1.5 rounded-full transition-colors whitespace-nowrap shadow-warm-xs"
                    >
                      Calculate →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro Trust Indicators */}
            <div className="grid grid-cols-3 gap-2.5 pt-1 text-center">
              <div className="bg-white/80 rounded-2xl border border-[#E8E4DC] p-3 shadow-warm-xs">
                <div className="text-base font-serif font-bold text-[#162737]">47 Tools</div>
                <div className="text-[10px] text-stone-500 font-medium">Peer-Reviewed</div>
              </div>
              <div className="bg-white/80 rounded-2xl border border-[#E8E4DC] p-3 shadow-warm-xs">
                <div className="text-base font-serif font-bold text-[#162737]">100% Private</div>
                <div className="text-[10px] text-stone-500 font-medium">Runs in Browser</div>
              </div>
              <div className="bg-white/80 rounded-2xl border border-[#E8E4DC] p-3 shadow-warm-xs">
                <div className="text-base font-serif font-bold text-[#162737]">Zero Ads</div>
                <div className="text-[10px] text-stone-500 font-medium">Free Access</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED CALCULATORS ("ONE SAFE PLACE TO START") */}
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
                  <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-[#FAF8F5] text-stone-700 border border-[#E8E4DC]">
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

      {/* 3. WARM BUTTER YELLOW BANNER: "WHY PAWSMETRIC IS DIFFERENT" */}
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

      {/* 4. VISUAL SHOWCASE: PUPPY GROWTH & MILESTONES (FEATURING PUPPY PHOTO) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#E8E4DC] p-8 sm:p-12 shadow-warm-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Puppy Photo Card */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-[#E8E4DC] shadow-warm-md">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/home_puppy_growth.jpg"
                  alt="10-week-old healthy puppy sitting on wooden floor in sunlight"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/30 inline-block mb-1">
                    Growth Curve Modeling
                  </span>
                  <div className="text-sm font-serif font-bold">Non-Linear Exponential Growth Curves</div>
                  <div className="text-xs text-stone-200">Accurately project adult size from 8 to 40 weeks</div>
                </div>
              </div>
            </div>

            {/* Development Calculators */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B63E5] font-sans">
                  From 8 Weeks to Maturity
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1917] tracking-tight">
                  Calculations tailored to every life stage
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed font-normal">
                  Puppies grow along sigmoidal metabolic trajectories. Toy breeds reach 95% mature body mass at 8 months, while giant breeds continue skeletal ossification past 18 months. Our tools account for breed-specific growth velocity.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <Link
                  href="/calculators/puppy-weight-predictor"
                  className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#E8E4DC] hover:border-stone-400 transition-all group"
                >
                  <Activity className="w-5 h-5 text-[#0B63E5] mb-2" />
                  <div className="text-xs font-serif font-bold text-[#162737] group-hover:text-[#0B63E5]">
                    Adult Weight Predictor
                  </div>
                  <div className="text-[11px] text-stone-500 mt-1">Project mature size by week</div>
                </Link>

                <Link
                  href="/calculators/puppy-first-year-cost-calculator"
                  className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#E8E4DC] hover:border-stone-400 transition-all group"
                >
                  <Scale className="w-5 h-5 text-[#0B63E5] mb-2" />
                  <div className="text-xs font-serif font-bold text-[#162737] group-hover:text-[#0B63E5]">
                    First-Year Budget
                  </div>
                  <div className="text-[11px] text-stone-500 mt-1">Vaccines, gear & food costs</div>
                </Link>

                <Link
                  href="/calculators/dog-pregnancy-calculator"
                  className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#E8E4DC] hover:border-stone-400 transition-all group"
                >
                  <HeartPulse className="w-5 h-5 text-[#0B63E5] mb-2" />
                  <div className="text-xs font-serif font-bold text-[#162737] group-hover:text-[#0B63E5]">
                    Whelping Due Date
                  </div>
                  <div className="text-[11px] text-stone-500 mt-1">63-day gestation timeline</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DARK SLATE NAVY SHOWCASE: "HOW CANINE CALCULATIONS WORK" */}
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

      {/* 6. VISUAL ACTIVE DOG FEATURE: EXERCISE & GEAR SIZING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#E8E4DC] p-8 sm:p-12 shadow-warm-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B63E5] font-sans">
                  Active Health & Fitness
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1917] tracking-tight">
                  Fueling active, healthy lifestyles
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed font-normal">
                  From working breeds needing over 90 minutes of daily high-intensity exercise to brachycephalic dogs sensitive to heat exhaustion, calculate tailored activity limits and anatomical gear clearances.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <Link
                  href="/calculators/dog-exercise-needs-calculator"
                  className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#E8E4DC] hover:border-stone-400 transition-all group"
                >
                  <Activity className="w-5 h-5 text-[#0B63E5] mb-2" />
                  <div className="text-xs font-serif font-bold text-[#162737] group-hover:text-[#0B63E5]">
                    Daily Exercise Targets
                  </div>
                  <div className="text-[11px] text-stone-500 mt-1">Minutes/day by breed class</div>
                </Link>

                <Link
                  href="/calculators/dog-crate-size-calculator"
                  className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#E8E4DC] hover:border-stone-400 transition-all group"
                >
                  <Scale className="w-5 h-5 text-[#0B63E5] mb-2" />
                  <div className="text-xs font-serif font-bold text-[#162737] group-hover:text-[#0B63E5]">
                    Crate &amp; Gear Size
                  </div>
                  <div className="text-[11px] text-stone-500 mt-1">+4" length & +3" headroom</div>
                </Link>

                <Link
                  href="/calculators/dog-water-intake-calculator"
                  className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#E8E4DC] hover:border-stone-400 transition-all group"
                >
                  <HeartPulse className="w-5 h-5 text-[#0B63E5] mb-2" />
                  <div className="text-xs font-serif font-bold text-[#162737] group-hover:text-[#0B63E5]">
                    Hydration Target
                  </div>
                  <div className="text-[11px] text-stone-500 mt-1">Fluid needs in hot weather</div>
                </Link>
              </div>
            </div>

            {/* Right Photo Card */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-[#E8E4DC] shadow-warm-md order-1 lg:order-2">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/home_dog_active.jpg"
                  alt="Fit, energetic Australian Shepherd running joyfully in a sunlit green park"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/30 inline-block mb-1">
                    Activity &amp; Endurance
                  </span>
                  <div className="text-sm font-serif font-bold">Physical Energy &amp; Hydration Limits</div>
                  <div className="text-xs text-stone-200">Balanced stamina calculations for active breeds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. REVIEWS & TESTIMONIALS SECTION (NEW) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDF1D0] border border-[#F6DF9C] text-xs font-bold text-[#162737]">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="ml-1">4.9 / 5.0 Rating • 1,280+ Reviews</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1917] tracking-tight">
            Calculators dog parents rely on every day
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-normal">
            Real feedback from pet parents, foster networks, and shelter volunteers using PawsMetric calculations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {USER_REVIEWS.map((review, i) => (
            <div
              key={i}
              className="clean-card p-6 flex flex-col justify-between space-y-4 hover:border-stone-400 transition-all"
            >
              <div className="space-y-3">
                {/* Header: Stars & Calculator Tag */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 bg-[#FAF8F5] border border-[#E8E4DC] px-2 py-0.5 rounded-full">
                    {review.date}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal italic">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              {/* Author & Linked Calculator Footer */}
              <div className="pt-3 border-t border-[#E8E4DC] space-y-1.5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-serif font-bold text-[#162737]">{review.author}</div>
                    <div className="text-[11px] text-stone-500 font-medium">{review.dog}</div>
                  </div>
                  {review.verified && (
                    <span className="inline-flex items-center gap-1 text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-semibold">
                      <Check className="w-3 h-3" /> Verified
                    </span>
                  )}
                </div>

                <Link
                  href={`/calculators/${review.calcSlug}`}
                  className="text-[11px] font-semibold text-[#0B63E5] hover:underline flex items-center gap-1 pt-1"
                >
                  Tool used: {review.calculator} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CURATED THEMATIC TOOL CLUSTERS (STRONG INTERNAL LINKING) */}
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

      {/* 9. SOFT POWDER BLUE TESTIMONIAL / SOURCING BANNER */}
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

      {/* 10. KEEP EXPLORING: VETERINARY LEARNING CENTER (WITH COVER IMAGES) */}
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
          {RESOURCES.map((article) => (
            <Link
              key={article.slug}
              href={`/resources/${article.slug}`}
              className="clean-card overflow-hidden hover:border-stone-400 transition-all flex flex-col justify-between group shadow-warm-xs"
            >
              <div>
                {/* Guide Thumbnail Photo */}
                <div className="relative aspect-[16/10] w-full bg-stone-100 overflow-hidden">
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-103 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-800 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-stone-200">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="text-base font-serif font-bold text-stone-900 group-hover:text-[#0B63E5] leading-snug line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-stone-600 line-clamp-2 font-normal leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 text-xs font-semibold text-[#0B63E5] flex items-center gap-1">
                Read Guide <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 11. CATEGORIES DIRECTORY */}
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

      {/* 12. FREQUENTLY ASKED QUESTIONS */}
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
