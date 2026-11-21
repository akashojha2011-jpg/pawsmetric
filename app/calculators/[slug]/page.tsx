import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  BookOpen,
  HelpCircle,
  ArrowRight,
  Clock,
  UserCheck,
  CheckCircle2,
  ListOrdered,
  FileSpreadsheet,
  Calculator,
  ExternalLink,
} from 'lucide-react';
import { CALCULATORS, getCalculatorBySlug, getCalculatorsByCategory } from '@/lib/data/calculators';
import { CATEGORIES } from '@/lib/data/categories';
import { WidgetDispatcher } from '@/components/widgets/WidgetDispatcher';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { RESOURCES } from '@/lib/data/resources';
import { getToolDeepDive } from '@/lib/data/tool-deep-dives';

interface ToolOrCategoryPageProps {
  params: Promise<{
    slug: string;
  }> | {
    slug: string;
  };
}

export async function generateStaticParams() {
  const categoryParams = CATEGORIES.map((cat) => ({
    slug: cat.slug,
  }));
  const toolParams = CALCULATORS.map((calc) => ({
    slug: calc.slug,
  }));
  const aliasSlugs = [
    'puppy-growth-predictor',
    'puppy-growth-calculator',
    'puppy-growth-chart',
    'dog-food-calculator',
    'dog-pregnancy-calculator',
    'dog-benadryl-calculator',
    'dog-chocolate-calculator',
    'dog-crate-calculator',
    'dog-water-calculator',
    'dog-age',
    'dog-weight',
    'dog-calories',
  ];
  const aliasParams = aliasSlugs.map((slug) => ({ slug }));
  return [...categoryParams, ...toolParams, ...aliasParams];
}

export async function generateMetadata({ params }: ToolOrCategoryPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const category = CATEGORIES.find((c) => c.slug === slug);
  if (category) {
    const metaTitle = `${category.name} Dog Calculators & Tools | PawsMetric`;
    const metaDescription = `Explore science-backed ${category.name.toLowerCase()} calculators for dogs. Free peer-reviewed tools with instant DVM results.`;

    return {
      title: metaTitle,
      description: metaDescription,
      alternates: {
        canonical: `https://www.pawsmetric.com/calculators/${category.slug}`,
      },
      openGraph: {
        title: metaTitle,
        description: metaDescription,
        url: `https://www.pawsmetric.com/calculators/${category.slug}`,
        type: 'website',
      },
    };
  }

  const calc = getCalculatorBySlug(slug);
  if (!calc) return {};

  const fullMetaTitle = calc.metaTitle.includes('PawsMetric')
    ? calc.metaTitle
    : `${calc.metaTitle} | PawsMetric`;

  return {
    title: fullMetaTitle,
    description: calc.metaDescription,
    alternates: {
      canonical: `https://www.pawsmetric.com/calculators/${calc.slug}`,
    },
    openGraph: {
      title: fullMetaTitle,
      description: calc.metaDescription,
      url: `https://www.pawsmetric.com/calculators/${calc.slug}`,
      type: 'website',
    },
  };
}

export default async function DynamicCalculatorOrCategoryPage({ params }: ToolOrCategoryPageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  // Category landing page
  const category = CATEGORIES.find((c) => c.slug === slug);

  if (category) {
    const categoryTools = getCalculatorsByCategory(category.id);

    const categorySchema = {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: `${category.name} Dog Calculators`,
      description: category.description,
      url: `https://www.pawsmetric.com/calculators/${category.slug}`,
    };

    return (
      <div className="bg-[#F4F7FC] min-h-screen py-8 md:py-12">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(categorySchema) }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <Breadcrumbs
            items={[
              { label: 'Calculators', url: '/calculators' },
              { label: category.name, url: `/calculators/${category.slug}` },
            ]}
          />

          <div className="space-y-3 border-b border-[#D1E0FC] pb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0073E6]">
              {category.name} ({categoryTools.length} Tools)
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#054FB9] tracking-tight">
              {category.name} Calculators
            </h1>
            <p className="text-base text-slate-600 max-w-3xl leading-relaxed font-normal">
              {category.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/calculators/${tool.slug}`}
                className="clean-card p-6 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-[#EBF2FE] text-[#054FB9] border border-[#D1E0FC]">
                      {tool.categoryName}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0073E6] group-hover:translate-x-1 transition-all" />
                  </div>
                  <h2 className="text-base font-bold text-[#0F172A] group-hover:text-[#0073E6] leading-snug">
                    {tool.title}
                  </h2>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-normal">
                    {tool.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>Updated {tool.lastUpdated}</span>
                  <span className="font-semibold text-[#054FB9] group-hover:text-[#0073E6]">Calculate →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Individual tool landing page
  const calc = getCalculatorBySlug(slug);
  if (!calc) {
    notFound();
  }

  const categoryObj = CATEGORIES.find((c) => c.id === calc.category);
  const deepDive = getToolDeepDive(calc.slug, calc);

  // Prioritize tools explicitly defined in calc.relatedSlugs, then fill with category tools
  const explicitRelated = (calc.relatedSlugs || [])
    .map((s) => CALCULATORS.find((c) => c.slug === s))
    .filter((c): c is typeof CALCULATORS[0] => !!c && c.slug !== calc.slug);

  const fallbackCategoryTools = CALCULATORS.filter(
    (c) => c.category === calc.category && c.slug !== calc.slug && !explicitRelated.some((er) => er.slug === c.slug)
  );

  const relatedTools = [...explicitRelated, ...fallbackCategoryTools].slice(0, 6);
  const relatedGuides = RESOURCES.slice(0, 3);
  const siblingCategories = CATEGORIES.filter((cat) => cat.id !== calc.category).slice(0, 4);

  // Schema.org WebApplication, HowTo, & FAQPage JSON-LD
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: calc.title,
    description: calc.description,
    url: `https://www.pawsmetric.com/calculators/${calc.slug}`,
    applicationCategory: 'HealthApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Organization',
      name: 'PawsMetric',
      url: 'https://www.pawsmetric.com',
    },
  };

  const howToSchema = calc.howToUse?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: `How to use the ${calc.title}`,
        step: calc.howToUse.map((stepText, idx) => ({
          '@type': 'HowToStep',
          position: idx + 1,
          text: stepText,
        })),
      }
    : null;

  const faqSchema = calc.faqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: calc.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <div className="bg-[#F4F7FC] min-h-screen py-8 md:py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      {howToSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      )}
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs
          items={[
            { label: 'Calculators', url: '/calculators' },
            ...(categoryObj
              ? [{ label: categoryObj.name, url: `/calculators/${categoryObj.slug}` }]
              : []),
            { label: calc.title, url: `/calculators/${calc.slug}` },
          ]}
        />

        {/* 1. Tool Header & Medical Review Board Badges */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <span className="font-semibold px-2.5 py-0.5 rounded-md bg-[#EBF2FE] text-[#054FB9] border border-[#D1E0FC]">
              {calc.categoryName}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 font-medium text-slate-500">
              <Clock className="w-3.5 h-3.5 text-[#0073E6]" /> Updated {calc.lastUpdated}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#054FB9] tracking-tight">
            {calc.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {calc.description}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-[#D1E0FC] text-xs text-slate-600">
            <div className="flex items-center gap-1.5 font-semibold text-[#054FB9]">
              <CheckCircle2 className="w-4 h-4 text-[#0073E6]" />
              <span>Verified Formula Sourcing</span>
            </div>
            <div className="flex items-center gap-1.5 font-semibold text-slate-700 bg-white px-3 py-1 rounded-md border border-[#D1E0FC]">
              <ShieldCheck className="w-4 h-4 text-[#0073E6]" /> Instant Client-Side Math
            </div>
          </div>
        </div>

        {/* 2. INTERACTIVE CALCULATOR WIDGET ENGINE */}
        <div className="clean-card p-6 md:p-8">
          <WidgetDispatcher slug={calc.slug} />
        </div>

        {/* 3. STEP-BY-STEP INSTRUCTIONS ("HOW TO USE THIS TOOL") */}
        {calc.howToUse && calc.howToUse.length > 0 && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <ListOrdered className="w-5 h-5 text-slate-900" />
              <h2 className="text-lg font-bold text-slate-900">
                How to Use the {calc.title}
              </h2>
            </div>
            <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-slate-700 font-normal">
              {calc.howToUse.map((step, idx) => (
                <li key={idx} className="leading-relaxed">
                  {step}
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* 4. FORMULA & SCIENTIFIC METHODOLOGY BOX */}
        {calc.methodology && (
          <div className="clean-card p-6 md:p-8 space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <BookOpen className="w-5 h-5 text-[#054FB9]" />
              <h2 className="text-lg font-bold text-[#054FB9]">
                Clinical Methodology & Formula Breakdown
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              {calc.methodology.summary}
            </p>
            <div className="bg-[#054FB9] text-white p-5 rounded-xl border border-[#0461CF] space-y-2">
              <div className="text-xs font-semibold text-[#B3C7F7] uppercase tracking-wider">Clinical Veterinary Formula</div>
              <div className="text-xs sm:text-sm font-bold text-[#B3C7F7]">{calc.methodology.formulaText}</div>
            </div>

            {calc.methodology.sources && calc.methodology.sources.length > 0 && (
              <div className="pt-3 border-t border-slate-100">
                <div className="text-[11px] font-bold uppercase text-slate-500">Peer-Reviewed Scientific Sources:</div>
                <ul className="list-disc pl-5 text-xs text-slate-600 font-normal space-y-1 mt-1">
                  {calc.methodology.sources.map((src, i) => (
                    <li key={i}>{src}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* 5. WORKED CLINICAL EXAMPLE BOX */}
        {calc.workedExample && (
          <div className="clean-card p-6 md:p-8 space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <CheckCircle2 className="w-5 h-5 text-[#054FB9]" />
              <h2 className="text-lg font-bold text-[#054FB9]">
                Worked Clinical Example
              </h2>
            </div>
            <div className="bg-[#F4F7FC] p-5 rounded-xl border border-[#D1E0FC] space-y-3">
              <div>
                <div className="text-[11px] font-bold uppercase text-[#054FB9]">Scenario</div>
                <div className="text-xs text-slate-700 font-medium">{calc.workedExample.scenario}</div>
              </div>
              <div className="border-t border-[#D1E0FC] pt-2">
                <div className="text-[11px] font-bold uppercase text-[#054FB9]">Mathematical Calculation</div>
                <div className="text-xs text-[#054FB9] font-bold font-mono">{calc.workedExample.calculation}</div>
              </div>
              <div className="border-t border-[#D1E0FC] pt-2">
                <div className="text-[11px] font-bold uppercase text-[#054FB9]">Veterinary Interpretation</div>
                <div className="text-xs text-[#0F172A] font-extrabold">{calc.workedExample.result}</div>
              </div>
            </div>
          </div>
        )}

        {/* 6. REFERENCE CONVERSION & COMPARISON CHART TABLE */}
        {calc.referenceTable && calc.referenceTable.headers && (
          <div className="clean-card p-6 md:p-8 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="w-5 h-5 text-[#054FB9]" />
                <h2 className="text-lg font-bold text-[#054FB9]">
                  {calc.referenceTable.title}
                </h2>
              </div>
            </div>

            <div className="overflow-x-auto border border-[#D1E0FC] rounded-xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#054FB9] text-white font-bold uppercase">
                  <tr>
                    {calc.referenceTable.headers.map((h, i) => (
                      <th key={i} className="p-3 border-b border-[#0461CF]">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white font-medium">
                  {calc.referenceTable.rows.map((row, rIdx) => (
                    <tr key={rIdx} className={rIdx % 2 === 1 ? 'bg-[#F4F7FC]' : ''}>
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className={`p-3 ${cIdx === 0 ? 'font-bold text-[#054FB9]' : 'text-slate-600'}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 7. CLINICAL DEEP DIVE & COMPREHENSIVE GUIDE */}
        {deepDive && (
          <div className="clean-card p-6 md:p-8 space-y-6">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <BookOpen className="w-5 h-5 text-[#054FB9]" />
              <h2 className="text-xl font-bold text-[#054FB9]">
                Clinical Guide & Veterinary Deep Dive
              </h2>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed font-normal">
              {deepDive.overview}
            </p>

            <div className="space-y-4 pt-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#054FB9]">
                Key Biological & Physiological Factors
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {deepDive.keyFactors.map((factor, idx) => (
                  <div key={idx} className="bg-[#F4F7FC] p-4 rounded-xl border border-[#D1E0FC] space-y-1.5">
                    <h4 className="text-xs font-bold text-[#054FB9]">{factor.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{factor.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#0461CF] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0073E6]" /> Practical Veterinary Tips
                </h3>
                <ul className="list-disc pl-4 text-xs text-slate-600 space-y-1 leading-relaxed">
                  {deepDive.clinicalTips.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#EBF2FE]/60 p-5 rounded-xl border border-[#D1E0FC] space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#054FB9] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#0073E6]" /> When to Consult a Licensed DVM
                </h3>
                <ul className="list-disc pl-4 text-xs text-slate-700 space-y-1 leading-relaxed">
                  {deepDive.whenToConsultVet.map((alert, idx) => (
                    <li key={idx}>{alert}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* 8. FREQUENTLY ASKED QUESTIONS (FAQ) */}
        {calc.faqs && calc.faqs.length > 0 && (
          <div className="clean-card p-6 md:p-8 space-y-6">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <HelpCircle className="w-5 h-5 text-slate-900" />
              <h2 className="text-lg font-bold text-slate-900">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {calc.faqs.map((faq, i) => (
                <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                  <h3 className="text-sm font-bold text-slate-900">{faq.question}</h3>
                  <p className="text-xs text-slate-600 font-normal leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 9. STRONG INTERNAL LINKING: RELATED CALCULATORS & VETERINARY HUBS */}
        <div className="space-y-8 pt-4">
          {relatedTools.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#D1E0FC] pb-2">
                <h3 className="text-lg font-bold text-slate-900">Recommended Dog Calculators</h3>
                <Link href="/calculators" className="text-xs font-semibold text-[#0073E6] hover:underline flex items-center gap-1">
                  All 47 Tools <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {relatedTools.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/calculators/${rel.slug}`}
                    className="clean-card p-4 hover:border-[#0073E6] transition-all space-y-2 group flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-50 text-[#0461CF]">
                        {rel.categoryName}
                      </span>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-[#0073E6] mt-1.5 leading-snug">
                        {rel.title}
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-2 mt-1 font-normal">
                        {rel.description}
                      </p>
                    </div>
                    <div className="text-xs font-semibold text-[#0073E6] flex items-center gap-1 pt-2">
                      Use Calculator <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {relatedGuides.length > 0 && (
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between border-b border-[#D1E0FC] pb-2">
                <h3 className="text-lg font-bold text-slate-900">Clinical Veterinary Guides</h3>
                <Link href="/resources" className="text-xs font-semibold text-[#0073E6] hover:underline flex items-center gap-1">
                  View Library <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedGuides.map((guide) => (
                  <Link
                    key={guide.slug}
                    href={`/resources/${guide.slug}`}
                    className="clean-card p-4 hover:border-[#0073E6] transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        {guide.category}
                      </span>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-[#0073E6] mt-2 line-clamp-2 leading-snug">
                        {guide.title}
                      </div>
                    </div>
                    <div className="text-xs text-slate-400 group-hover:text-[#0073E6] flex items-center gap-1 pt-3 font-medium">
                      Read Guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Sibling Category Hubs for High Authority Navigation */}
          <div className="clean-card p-6 bg-[#F4F7FC]/70 border border-[#D1E0FC] space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Explore Canine Calculation Categories
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              {siblingCategories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/calculators/${cat.slug}`}
                  className="p-3 rounded-lg bg-white hover:bg-[#EBF2FE] border border-[#D1E0FC] transition-colors font-semibold text-slate-800 hover:text-[#054FB9] flex items-center justify-between group"
                >
                  <span className="truncate">{cat.name}</span>
                  <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-[#054FB9] flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

