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
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs items={[{ label: 'About Us', url: '/about' }]} />

        <div className="space-y-3 border-b border-slate-200 pb-6">
          <span className="bg-blue-50 text-[#0461CF] border border-[#8BABF1]/30 text-xs font-bold uppercase px-3 py-1 rounded-full inline-block">
            ABOUT PAWSMETRIC
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Free Dog Calculator & Health Mathematics
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            PawsMetric provides free, instant dog calculator tools to help dog owners, breeders, and shelter professionals calculate biological age, daily feeding requirements, medication dosage, and growth targets.
          </p>
        </div>

        <div className="clean-card p-8 space-y-6 text-slate-800 text-sm leading-relaxed font-normal">
          <h2 className="text-xl font-bold text-slate-900">Our Mission</h2>
          <p className="text-slate-600">
            Canine health decisions should be powered by empirical science, not historical myths. Outdated rules—like multiplying dog age by 7 or reading generic feeding guidelines on kibble bags—fail to account for breed genetics, weight classes, and physiological metabolic rates.
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-2">Calculations & Research Basis</h2>
          <p className="text-slate-600">
            Every dog calculator on PawsMetric is built using peer-reviewed published formulas from institutions including the American Veterinary Medical Association (AVMA), World Small Animal Veterinary Association (WSAVA), and National Research Council (NRC 2006).
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
              <ShieldCheck className="w-6 h-6 text-[#0073E6] mx-auto mb-2" />
              <div className="font-bold text-slate-900 text-sm">Peer-Reviewed Math</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Based on published literature</div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
              <Heart className="w-6 h-6 text-[#0073E6] mx-auto mb-2" />
              <div className="font-bold text-slate-900 text-sm">100% Free & Open</div>
              <div className="text-xs text-slate-500 font-medium mt-1">No sign-up, ads, or paywalls</div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
              <Award className="w-6 h-6 text-[#0073E6] mx-auto mb-2" />
              <div className="font-bold text-slate-900 text-sm">Instant Client-Side</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Calculates instantly in browser</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

