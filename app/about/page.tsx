import React from 'react';
import { Metadata } from 'next';
import { ShieldCheck, Heart, Award } from 'lucide-react';
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = {
  title: 'About PawsMetric: Free Dog Calculator Tools & Mission',
  description: 'Learn about PawsMetric, our mission to empower dog parents with instant, free companion animal calculation tools built from established veterinary literature.',
  alternates: {
    canonical: 'https://www.pawsmetric.com/about',
  },
};

export default function AboutPage() {
  return (
    <div className="bg-[#FAF8F5] min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs items={[{ label: 'About Us', url: '/about' }]} />

        <div className="space-y-3 border-b border-[#E8E4DC] pb-8">
          <span className="bg-[#FDF1D0] text-[#162737] border border-[#E8E4DC] text-xs font-bold uppercase px-3.5 py-1 rounded-full inline-block">
            ABOUT PAWSMETRIC
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#162737] tracking-tight">
            Free Dog Calculator & Health Mathematics
          </h1>
          <p className="text-base text-stone-600 max-w-3xl leading-relaxed">
            PawsMetric provides free, instant dog calculator tools to help dog owners, breeders, and shelter professionals calculate biological age, daily feeding requirements, medication dosage, and growth targets.
          </p>
        </div>

        <div className="clean-card p-6 md:p-10 space-y-6 text-stone-700 text-sm leading-relaxed font-normal">
          <h2 className="text-2xl font-serif font-bold text-[#162737]">Our Mission</h2>
          <p className="text-stone-600">
            Canine health decisions should be powered by empirical science, not historical myths. Outdated rules—like multiplying dog age by 7 or reading generic feeding guidelines on kibble bags—fail to account for breed genetics, weight classes, and physiological metabolic rates.
          </p>

          <h2 className="text-2xl font-serif font-bold text-[#162737] pt-4">Calculations & Research Basis</h2>
          <p className="text-stone-600">
            Every dog calculator on PawsMetric is built using peer-reviewed published formulas from institutions including the American Veterinary Medical Association (AVMA), World Small Animal Veterinary Association (WSAVA), and National Research Council (NRC 2006).
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4">
            <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E8E4DC] text-center">
              <ShieldCheck className="w-6 h-6 text-[#162737] mx-auto mb-2.5" />
              <div className="font-serif font-bold text-[#162737] text-base">Peer-Reviewed Math</div>
              <div className="text-xs text-stone-500 font-medium mt-1">Based on published literature</div>
            </div>
            <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E8E4DC] text-center">
              <Heart className="w-6 h-6 text-[#162737] mx-auto mb-2.5" />
              <div className="font-serif font-bold text-[#162737] text-base">100% Free & Open</div>
              <div className="text-xs text-stone-500 font-medium mt-1">No sign-up, ads, or paywalls</div>
            </div>
            <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E8E4DC] text-center">
              <Award className="w-6 h-6 text-[#162737] mx-auto mb-2.5" />
              <div className="font-serif font-bold text-[#162737] text-base">Instant Client-Side</div>
              <div className="text-xs text-stone-500 font-medium mt-1">Calculates instantly in browser</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
