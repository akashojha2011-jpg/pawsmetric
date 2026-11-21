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

          <div className="space-y-3 border-b border-[#E8E4DC] pb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B63E5]">
              {category.name} ({categoryTools.length} Veterinary Tools)
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#162737] tracking-tight">
              {category.name} Calculators
            </h1>
            <p className="text-base text-stone-600 max-w-3xl leading-relaxed font-normal">
              {category.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/calculators/${tool.slug}`}
                className="clean-card p-6 flex flex-col justify-between group hover:border-[#162737] transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#FAF8F5] text-stone-700 border border-[#E8E4DC]">
                      {tool.categoryName}
                    </span>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#0B63E5] group-hover:translate-x-1 transition-all" />
                  </div>
                  <h2 className="text-lg font-serif font-bold text-[#162737] group-hover:text-[#0B63E5] leading-snug">
                    {tool.title}
                  </h2>
                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed font-normal">
                    {tool.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8E4DC] flex items-center justify-between text-xs text-stone-500 font-medium">
                  <span>Updated {tool.lastUpdated}</span>
                  <span className="font-bold text-[#0B63E5] group-hover:underline">Calculate →</span>
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
    <div className="bg-[#FAF8F5] min-h-screen py-8 md:py-12">
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

        {/* 1. Tool Header & Badges */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 font-sans">
            <span className="font-semibold px-3 py-1 rounded-full bg-[#EBF2FE] text-[#0B63E5] border border-[#B8D4F7]">
              {calc.categoryName}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 font-medium text-stone-500">
              <Clock className="w-3.5 h-3.5 text-stone-400" /> Updated {calc.lastUpdated}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1917] tracking-tight">
            {calc.title}
          </h1>

          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
            {calc.description}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-[#E8E4DC] text-xs text-stone-600 font-sans">
            <div className="flex items-center gap-1.5 font-semibold text-[#1C1917]">
              <CheckCircle2 className="w-4 h-4 text-[#0B63E5]" />
              <span>Verified Formula Sourcing</span>
            </div>
            <div className="flex items-center gap-1.5 font-semibold text-stone-700 bg-white px-3 py-1 rounded-full border border-[#E8E4DC] shadow-warm-xs">
              <ShieldCheck className="w-4 h-4 text-[#0B63E5]" /> Instant Client-Side Math
            </div>
          </div>
        </div>

        {/* 2. INTERACTIVE CALCULATOR WIDGET ENGINE */}
        <div className="clean-card p-6 md:p-8">
          <WidgetDispatcher slug={calc.slug} />
        </div>

        {/* 3. STEP-BY-STEP INSTRUCTIONS ("HOW TO USE THIS TOOL") */}
        {calc.howToUse && calc.howToUse.length > 0 && (
          <div className="clean-card p-6 md:p-8 space-y-4">
            <div className="flex items-center gap-2 border-b border-[#E8E4DC] pb-3">
              <ListOrdered className="w-5 h-5 text-stone-700" />
              <h2 className="text-lg font-serif font-bold text-[#1C1917]">
                How to Use the {calc.title}
              </h2>
            </div>
            <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-stone-700 font-normal">
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
            <div className="flex items-center gap-2 border-b border-[#E8E4DC] pb-3">
              <BookOpen className="w-5 h-5 text-stone-700" />
              <h2 className="text-lg font-serif font-bold text-[#1C1917]">
                Clinical Methodology &amp; Formula Breakdown
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 font-normal leading-relaxed">
              {calc.methodology.summary}
            </p>
            <div className="bg-[#162737] text-white p-6 rounded-2xl border border-[#0D1A25] space-y-2 shadow-warm-sm">
              <div className="text-xs font-semibold text-[#FDF1D0] uppercase tracking-wider font-sans">Clinical Veterinary Formula</div>
              <div className="text-xs sm:text-sm font-bold text-white font-mono">{calc.methodology.formulaText}</div>
            </div>

            {calc.methodology.sources && calc.methodology.sources.length > 0 && (
              <div className="pt-3 border-t border-[#E8E4DC]">
                <div className="text-[11px] font-bold uppercase text-stone-500 font-sans">Peer-Reviewed Scientific Sources:</div>
                <ul className="list-disc pl-5 text-xs text-stone-600 font-normal space-y-1 mt-1.5">
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
            <div className="flex items-center gap-2 border-b border-[#E8E4DC] pb-3">
              <CheckCircle2 className="w-5 h-5 text-[#0B63E5]" />
              <h2 className="text-lg font-serif font-bold text-[#1C1917]">
                Worked Clinical Example
              </h2>
            </div>
            <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E8E4DC] space-y-3">
              <div>
                <div className="text-[11px] font-bold uppercase text-stone-500 font-sans">Scenario</div>
                <div className="text-xs text-stone-800 font-medium">{calc.workedExample.scenario}</div>
              </div>
              <div className="border-t border-[#E8E4DC] pt-2">
                <div className="text-[11px] font-bold uppercase text-stone-500 font-sans">Mathematical Calculation</div>
                <div className="text-xs text-[#0B63E5] font-bold font-mono">{calc.workedExample.calculation}</div>
              </div>
              <div className="border-t border-[#E8E4DC] pt-2">
                <div className="text-[11px] font-bold uppercase text-stone-500 font-sans">Veterinary Interpretation</div>
                <div className="text-xs text-[#1C1917] font-extrabold">{calc.workedExample.result}</div>
              </div>
            </div>
          </div>
        )}

        {/* 6. REFERENCE CONVERSION & COMPARISON CHART TABLE */}
        {calc.referenceTable && calc.referenceTable.headers && (
          <div className="clean-card p-6 md:p-8 space-y-4">
            <div className="flex items-center justify-between border-b border-[#E8E4DC] pb-3">
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="w-5 h-5 text-stone-700" />
                <h2 className="text-lg font-serif font-bold text-[#1C1917]">
                  {calc.referenceTable.title}
                </h2>
              </div>
            </div>

            <div className="overflow-x-auto border border-[#E8E4DC] rounded-2xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#162737] text-white font-bold uppercase font-sans">
                  <tr>
                    {calc.referenceTable.headers.map((h, i) => (
                      <th key={i} className="p-3.5 border-b border-[#0D1A25]">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E4DC] bg-white font-medium">
                  {calc.referenceTable.rows.map((row, rIdx) => (
                    <tr key={rIdx} className={rIdx % 2 === 1 ? 'bg-[#FAF8F5]' : ''}>
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className={`p-3.5 ${cIdx === 0 ? 'font-bold text-[#1C1917]' : 'text-stone-600'}`}>
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
            <div className="flex items-center gap-2 border-b border-[#E8E4DC] pb-3">
              <BookOpen className="w-5 h-5 text-stone-700" />
              <h2 className="text-xl font-serif font-bold text-[#1C1917]">
                Clinical Guide &amp; Veterinary Deep Dive
              </h2>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed font-normal">
              {deepDive.overview}
            </p>

            <div className="space-y-4 pt-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 font-sans">
                Key Biological &amp; Physiological Factors
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {deepDive.keyFactors.map((factor, idx) => (
                  <div key={idx} className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E8E4DC] space-y-1.5">
                    <h4 className="text-xs font-bold text-[#1C1917] font-sans">{factor.title}</h4>
                    <p className="text-xs text-stone-600 leading-relaxed font-normal">{factor.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-5 rounded-2xl border border-[#E8E4DC] shadow-warm-xs space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#1C1917] flex items-center gap-1.5 font-sans">
                  <CheckCircle2 className="w-4 h-4 text-[#0B63E5]" /> Practical Veterinary Tips
                </h3>
                <ul className="list-disc pl-4 text-xs text-stone-600 space-y-1 leading-relaxed font-normal">
                  {deepDive.clinicalTips.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              </div>

              {/* Good Dog Butter Yellow Alert Box for Vet Advice */}
              <div className="bg-[#FDF1D0] p-5 rounded-2xl border border-[#F6DF9C] space-y-2 shadow-warm-xs">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#1C1917] flex items-center gap-1.5 font-sans">
                  <ShieldCheck className="w-4 h-4 text-stone-800" /> When to Consult a Licensed DVM
                </h3>
                <ul className="list-disc pl-4 text-xs text-stone-800 space-y-1 leading-relaxed font-normal">
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
            <div className="flex items-center gap-2 border-b border-[#E8E4DC] pb-3">
              <HelpCircle className="w-5 h-5 text-stone-700" />
              <h2 className="text-lg font-serif font-bold text-[#1C1917]">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-3">
              {calc.faqs.map((faq, i) => (
                <div key={i} className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E8E4DC] space-y-1.5">
                  <h3 className="text-sm font-bold font-serif text-[#1C1917]">{faq.question}</h3>
                  <p className="text-xs text-stone-600 font-normal leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 9. STRONG INTERNAL LINKING: RELATED CALCULATORS & VETERINARY HUBS */}
        <div className="space-y-8 pt-4">
          {relatedTools.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#E8E4DC] pb-2">
                <h3 className="text-lg font-serif font-bold text-[#1C1917]">Recommended Dog Calculators</h3>
                <Link href="/calculators" className="text-xs font-semibold text-[#0B63E5] hover:underline flex items-center gap-1 font-sans">
                  All 47 Tools <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {relatedTools.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/calculators/${rel.slug}`}
                    className="clean-card p-5 hover:border-stone-400 transition-all space-y-2 group flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-[#EBF2FE] text-[#0B63E5]">
                        {rel.categoryName}
                      </span>
                      <div className="text-sm font-serif font-bold text-[#1C1917] group-hover:text-[#0B63E5] mt-2 leading-snug">
                        {rel.title}
                      </div>
                      <p className="text-xs text-stone-500 line-clamp-2 mt-1 font-normal">
                        {rel.description}
                      </p>
                    </div>
                    <div className="text-xs font-semibold text-[#0B63E5] flex items-center gap-1 pt-3 font-sans">
                      Use Calculator <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {relatedGuides.length > 0 && (
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between border-b border-[#E8E4DC] pb-2">
                <h3 className="text-lg font-serif font-bold text-[#1C1917]">Clinical Veterinary Guides</h3>
                <Link href="/resources" className="text-xs font-semibold text-[#0B63E5] hover:underline flex items-center gap-1 font-sans">
                  View Library <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedGuides.map((guide) => (
                  <Link
                    key={guide.slug}
                    href={`/resources/${guide.slug}`}
                    className="clean-card p-5 hover:border-stone-400 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <span className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-700">
                        {guide.category}
                      </span>
                      <div className="text-xs font-serif font-bold text-[#1C1917] group-hover:text-[#0B63E5] mt-2 line-clamp-2 leading-snug">
                        {guide.title}
                      </div>
                    </div>
                    <div className="text-xs text-stone-400 group-hover:text-[#0B63E5] flex items-center gap-1 pt-3 font-medium font-sans">
                      Read Guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Sibling Category Hubs for High Authority Navigation */}
          <div className="clean-card p-6 bg-[#FAF8F5] border border-[#E8E4DC] space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 font-sans">
              Explore Canine Calculation Categories
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              {siblingCategories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/calculators/${cat.slug}`}
                  className="p-3.5 rounded-2xl bg-white hover:bg-stone-50 border border-[#E8E4DC] transition-colors font-semibold text-stone-800 hover:text-[#0B63E5] flex items-center justify-between group shadow-warm-xs"
                >
                  <span className="truncate">{cat.name}</span>
                  <ArrowRight className="w-3 h-3 text-stone-400 group-hover:text-[#0B63E5] flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

