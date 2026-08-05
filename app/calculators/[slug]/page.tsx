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
        canonical: `https://pawsmetric.com/calculators/${category.slug}`,
      },
      openGraph: {
        title: metaTitle,
        description: metaDescription,
        url: `https://pawsmetric.com/calculators/${category.slug}`,
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
      canonical: `https://pawsmetric.com/calculators/${calc.slug}`,
    },
    openGraph: {
      title: fullMetaTitle,
      description: calc.metaDescription,
      url: `https://pawsmetric.com/calculators/${calc.slug}`,
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
      url: `https://pawsmetric.com/calculators/${category.slug}`,
    };

    return (
      <div className="bg-[#F0F1EA] min-h-screen py-8 md:py-12">
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

          <div className="space-y-4 border-b border-[#E2E3D8] pb-6">
            <span className="bg-[#8BF03B] text-[#082C1B] text-xs font-black uppercase px-3 py-1 rounded">
              CATEGORY DIRECTORY ({categoryTools.length} TOOLS)
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-[#082C1B] tracking-tight">
              {category.name} Calculators
            </h1>
            <p className="text-base text-[#4D534E] max-w-3xl leading-relaxed font-semibold">
              {category.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/calculators/${tool.slug}`}
                className="bg-white rounded-2xl border border-[#E2E3D8] p-6 shadow-paid hover:border-[#082C1B] transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded bg-[#8BF03B] text-[#082C1B]">
                      {tool.categoryName}
                    </span>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#082C1B] group-hover:translate-x-1 transition-all" />
                  </div>
                  <h2 className="text-lg font-black text-[#082C1B] group-hover:text-[#0d4028] leading-snug">
                    {tool.title}
                  </h2>
                  <p className="text-xs text-[#4D534E] line-clamp-2 leading-relaxed font-medium">
                    {tool.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F0F1EA] flex items-center justify-between text-[11px] text-[#4D534E] font-semibold">
                  <span>Updated {tool.lastUpdated}</span>
                  <span className="font-bold text-[#082C1B] group-hover:text-[#0d4028]">Calculate →</span>
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
  const relatedTools = CALCULATORS.filter(
    (c) => c.category === calc.category && c.slug !== calc.slug
  ).slice(0, 3);

  const relatedGuides = RESOURCES.slice(0, 2);

  // Schema.org WebApplication, HowTo, & FAQPage JSON-LD
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: calc.title,
    description: calc.description,
    url: `https://pawsmetric.com/calculators/${calc.slug}`,
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
      url: 'https://pawsmetric.com',
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
    <div className="bg-[#F0F1EA] min-h-screen py-8 md:py-12">
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
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#4D534E]">
            <span className="font-extrabold uppercase px-2.5 py-1 rounded bg-[#8BF03B] text-[#082C1B]">
              {calc.categoryName}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 font-semibold">
              <Clock className="w-3.5 h-3.5 text-[#082C1B]" /> Updated {calc.lastUpdated}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-[#082C1B] tracking-tight">
            {calc.title}
          </h1>

          <p className="text-sm sm:text-base text-[#4D534E] leading-relaxed font-semibold">
            {calc.description}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-[#E2E3D8] text-xs text-[#4D534E]">
            <div className="flex items-center gap-1.5 font-bold text-[#082C1B]">
              <UserCheck className="w-4 h-4 text-[#8BF03B]" />
              <span>Medical Review: {calc.author?.name || 'Dr. Emily Watson, DVM'}</span>
            </div>
            <div className="flex items-center gap-1.5 font-bold text-[#082C1B] bg-white px-3 py-1 rounded-md border border-[#E2E3D8]">
              <ShieldCheck className="w-4 h-4 text-[#8BF03B]" /> Peer-Reviewed DVM Formula
            </div>
          </div>
        </div>

        {/* 2. INTERACTIVE CALCULATOR WIDGET ENGINE */}
        <div className="bg-white rounded-2xl border border-[#E2E3D8] p-6 md:p-8 shadow-paid">
          <WidgetDispatcher slug={calc.slug} />
        </div>

        {/* 3. STEP-BY-STEP INSTRUCTIONS ("HOW TO USE THIS TOOL") */}
        {calc.howToUse && calc.howToUse.length > 0 && (
          <div className="bg-white rounded-2xl border border-[#E2E3D8] p-6 md:p-8 shadow-paid space-y-4">
            <div className="flex items-center gap-2 border-b border-[#F0F1EA] pb-3">
              <ListOrdered className="w-5 h-5 text-[#082C1B]" />
              <h2 className="text-lg sm:text-xl font-black text-[#082C1B]">
                How to Use the {calc.title}
              </h2>
            </div>
            <ol className="list-decimal pl-5 space-y-2.5 text-xs sm:text-sm text-[#082C1B] font-semibold">
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
          <div className="bg-white rounded-2xl border border-[#E2E3D8] p-6 md:p-8 shadow-paid space-y-4">
            <div className="flex items-center gap-2 border-b border-[#F0F1EA] pb-3">
              <BookOpen className="w-5 h-5 text-[#082C1B]" />
              <h2 className="text-lg sm:text-xl font-black text-[#082C1B]">
                Clinical Methodology & Formula Breakdown
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#4D534E] font-medium leading-relaxed">
              {calc.methodology.summary}
            </p>
            <div className="bg-[#082C1B] text-white p-5 rounded-xl border border-[#0d4028] space-y-2">
              <div className="text-xs font-extrabold text-[#8BF03B] uppercase tracking-wider">Clinical Veterinary Formula</div>
              <div className="text-xs sm:text-sm font-black text-[#8BF03B]">{calc.methodology.formulaText}</div>
            </div>

            {calc.methodology.sources && calc.methodology.sources.length > 0 && (
              <div className="pt-3 border-t border-[#F0F1EA]">
                <div className="text-[11px] font-extrabold uppercase text-[#082C1B]">Peer-Reviewed Scientific Sources:</div>
                <ul className="list-disc pl-5 text-xs text-[#4D534E] font-semibold space-y-1 mt-1">
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
          <div className="bg-white rounded-2xl border border-[#E2E3D8] p-6 md:p-8 shadow-paid space-y-4">
            <div className="flex items-center gap-2 border-b border-[#F0F1EA] pb-3">
              <CheckCircle2 className="w-5 h-5 text-[#082C1B]" />
              <h2 className="text-lg sm:text-xl font-black text-[#082C1B]">
                Worked Clinical Example
              </h2>
            </div>
            <div className="bg-[#F0F1EA] p-5 rounded-xl border border-[#E2E3D8] space-y-3">
              <div>
                <div className="text-[11px] font-extrabold uppercase text-[#082C1B]">Scenario</div>
                <div className="text-xs text-[#4D534E] font-semibold">{calc.workedExample.scenario}</div>
              </div>
              <div className="border-t border-[#E2E3D8] pt-2">
                <div className="text-[11px] font-extrabold uppercase text-[#082C1B]">Mathematical Calculation</div>
                <div className="text-xs text-[#082C1B] font-bold font-mono">{calc.workedExample.calculation}</div>
              </div>
              <div className="border-t border-[#E2E3D8] pt-2">
                <div className="text-[11px] font-extrabold uppercase text-[#082C1B]">Veterinary Interpretation</div>
                <div className="text-xs text-[#082C1B] font-black">{calc.workedExample.result}</div>
              </div>
            </div>
          </div>
        )}

        {/* 6. REFERENCE CONVERSION & COMPARISON CHART TABLE */}
        {calc.referenceTable && calc.referenceTable.headers && (
          <div className="bg-white rounded-2xl border border-[#E2E3D8] p-6 md:p-8 shadow-paid space-y-4">
            <div className="flex items-center justify-between border-b border-[#F0F1EA] pb-3">
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="w-5 h-5 text-[#082C1B]" />
                <h2 className="text-lg sm:text-xl font-black text-[#082C1B]">
                  {calc.referenceTable.title}
                </h2>
              </div>
            </div>

            <div className="overflow-x-auto border border-[#E2E3D8] rounded-xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#082C1B] text-white font-extrabold uppercase">
                  <tr>
                    {calc.referenceTable.headers.map((h, i) => (
                      <th key={i} className="p-3 border-b border-[#0d4028]">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F0F1EA] bg-white font-semibold">
                  {calc.referenceTable.rows.map((row, rIdx) => (
                    <tr key={rIdx} className={rIdx % 2 === 1 ? 'bg-[#F0F1EA]/50' : ''}>
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className={`p-3 ${cIdx === 0 ? 'font-bold text-[#082C1B]' : 'text-[#4D534E]'}`}>
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

        {/* 7. FREQUENTLY ASKED QUESTIONS (FAQ) */}
        {calc.faqs && calc.faqs.length > 0 && (
          <div className="bg-white rounded-2xl border border-[#E2E3D8] p-6 md:p-8 shadow-paid space-y-6">
            <div className="flex items-center gap-2 border-b border-[#F0F1EA] pb-3">
              <HelpCircle className="w-5 h-5 text-[#082C1B]" />
              <h2 className="text-lg sm:text-xl font-black text-[#082C1B]">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {calc.faqs.map((faq, i) => (
                <div key={i} className="bg-[#F0F1EA] p-4 rounded-xl border border-[#E2E3D8] space-y-1.5">
                  <h3 className="text-sm font-black text-[#082C1B]">{faq.question}</h3>
                  <p className="text-xs text-[#4D534E] font-semibold leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 8. RELATED CALCULATORS & VETERINARY GUIDES CROSS-LINKS */}
        <div className="space-y-6 pt-4">
          {relatedTools.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#082C1B]">Related Dog Calculators</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedTools.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/calculators/${rel.slug}`}
                    className="bg-white rounded-xl border border-[#E2E3D8] p-4 shadow-paid hover:border-[#082C1B] transition-all space-y-2 group"
                  >
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-[#8BF03B] text-[#082C1B]">
                      {rel.categoryName}
                    </span>
                    <div className="text-xs font-black text-[#082C1B] group-hover:text-[#0d4028] line-clamp-2 leading-snug">
                      {rel.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {relatedGuides.length > 0 && (
            <div className="space-y-4 pt-2">
              <h3 className="text-xl font-black text-[#082C1B]">Related Veterinary Research Guides</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedGuides.map((guide) => (
                  <Link
                    key={guide.slug}
                    href={`/resources/${guide.slug}`}
                    className="bg-white rounded-xl border border-[#E2E3D8] p-4 shadow-paid hover:border-[#082C1B] transition-all flex items-center justify-between group"
                  >
                    <div>
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-[#F0F1EA] text-[#082C1B]">
                        {guide.category}
                      </span>
                      <div className="text-xs font-black text-[#082C1B] group-hover:text-[#0d4028] mt-1 line-clamp-1">
                        {guide.title}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#082C1B] group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
