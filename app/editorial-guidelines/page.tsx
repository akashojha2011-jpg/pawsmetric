import React from 'react';
import { Metadata } from 'next';
import { ShieldCheck, BookOpen, UserCheck, CheckCircle2, Award, RefreshCw, AlertCircle } from 'lucide-react';
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = {
  title: 'Editorial & Fact-Checking Guidelines | PawsMetric',
  description: 'Exhaustive Editorial Guidelines explaining how PawsMetric tools, formulas, and guides are developed, peer-reviewed by DVMs, and updated.',
};

export default function EditorialGuidelinesPage() {
  return (
    <div className="bg-[#F0F1EA] min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs items={[{ label: 'Editorial Guidelines', url: '/editorial-guidelines' }]} />

        <div className="space-y-4 border-b border-[#E2E3D8] pb-6">
          <span className="bg-[#8BF03B] text-[#082C1B] text-xs font-black uppercase px-3 py-1 rounded">
            METHODOLOGY & CLINICAL STANDARDS
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#082C1B] tracking-tight">
            PawsMetric Editorial & Fact-Checking Standards
          </h1>
          <p className="text-base text-[#4D534E] leading-relaxed font-semibold">
            How PawsMetric researches, programs, fact-checks, and audits companion animal health calculation engines under DVM medical oversight.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-[#E2E3D8] p-6 md:p-10 shadow-paid space-y-8 text-[#082C1B] text-sm leading-relaxed font-semibold">
          <section className="space-y-3">
            <h2 className="text-xl font-black text-[#082C1B] flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#8BF03B]" /> 1. Scientific Literature Sourcing Standards
            </h2>
            <p className="text-[#4D534E]">
              Every calculator equation, dosage threshold, and guide published on PawsMetric must originate from peer-reviewed clinical veterinary research. Primary data sources include:
            </p>
            <ul className="list-disc pl-5 text-[#4D534E] space-y-1">
              <li>American Veterinary Medical Association (AVMA) Clinical Guidelines</li>
              <li>World Small Animal Veterinary Association (WSAVA) Global Nutrition Committee Datasets</li>
              <li>National Research Council (NRC) Nutrient Requirements of Dogs and Cats</li>
              <li>Journal of Veterinary Internal Medicine (JVIM) Toxicological Threshold Studies</li>
              <li>University of California, San Diego (UCSD) Canine Epigenetic Aging Research</li>
            </ul>
            <p className="text-[#4D534E]">
              We explicitly reject outdated internet myths, such as multiplying dog age by 7 or estimating kibble portions solely from marketing labels on commercial dog food bags.
            </p>
          </section>

          <section className="space-y-3 border-t border-[#F0F1EA] pt-6">
            <h2 className="text-xl font-black text-[#082C1B] flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-[#8BF03B]" /> 2. 4-Step DVM Peer-Review & Audit Process
            </h2>
            <div className="bg-[#F0F1EA] p-6 rounded-2xl border border-[#E2E3D8] space-y-3">
              <h3 className="text-base font-black text-[#082C1B]">The PawsMetric Editorial Review Pipeline</h3>
              <ol className="list-decimal pl-5 text-xs text-[#082C1B] space-y-2 font-bold">
                <li><strong>Phase 1 - Mathematical Modeling:</strong> Biostatisticians draft the mathematical algorithm based on peer-reviewed clinical equations.</li>
                <li><strong>Phase 2 - DVM Medical Review:</strong> A licensed Doctor of Veterinary Medicine (DVM) or DACVIM specialist inspects the equation, safety boundaries, and toxicity ranges.</li>
                <li><strong>Phase 3 - Code QA Testing:</strong> Software engineers run 1,000+ automated test cases to ensure client-side UI calculations match expected clinical outputs with 0 rounding errors.</li>
                <li><strong>Phase 4 - Editorial Sign-Off:</strong> Medical editors review prose explanations, worked examples, and reference tables for clarity before deployment.</li>
              </ol>
            </div>
          </section>

          <section className="space-y-3 border-t border-[#F0F1EA] pt-6">
            <h2 className="text-xl font-black text-[#082C1B] flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-[#8BF03B]" /> 3. Annual Literature Audits & Formula Updates
            </h2>
            <p className="text-[#4D534E]">
              Companion animal veterinary medicine advances rapidly. Our medical review board conducts annual audits of all 38+ calculation engines. When new epidemiological studies or nutritional recommendations are released by the WSAVA or AVMA, our algorithms are updated immediately.
            </p>
          </section>

          <section className="space-y-3 border-t border-[#F0F1EA] pt-6">
            <h2 className="text-xl font-black text-[#082C1B] flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#8BF03B]" /> 4. Editorial Independence & Zero Advertising Bias
            </h2>
            <p className="text-[#4D534E]">
              PawsMetric is completely independent and ad-free. We do not accept sponsored product placements from kibble manufacturers, pet insurance brokers, or supplement companies. Our calculations are designed solely for pet safety and clinical accuracy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
