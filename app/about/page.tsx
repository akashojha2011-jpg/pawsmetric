import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { ShieldCheck, Heart, Award, ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { TEAM_MEMBERS } from '@/app/team/page';

export const metadata: Metadata = {
  title: 'About PawsMetric: DVM Medical Review Board & Mission',
  description: 'Learn about PawsMetric, our mission to empower dog parents with peer-reviewed veterinary calculation tools, and our medical review board.',
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
            Science-Backed Pet Mathematics
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            PawsMetric was created to empower dog owners, breeders, and shelter professionals with peer-reviewed, free veterinary calculators.
          </p>
        </div>

        <div className="clean-card p-8 space-y-6 text-slate-800 text-sm leading-relaxed font-normal">
          <h2 className="text-xl font-bold text-slate-900">Our Mission</h2>
          <p className="text-slate-600">
            Canine healthcare decisions should be powered by empirical science, not historical myths. Outdated rules—like multiplying dog age by 7 or reading generic feeding guidelines on kibble bags—fail to account for breed genetics, weight classes, and physiological metabolic rates.
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-2">Scientific Rigor</h2>
          <p className="text-slate-600">
            Every tool hosted on PawsMetric is developed using verified peer-reviewed research from institutions including the American Veterinary Medical Association (AVMA), World Small Animal Veterinary Association (WSAVA), National Research Council (NRC), and the Royal Veterinary College Companion Animal datasets.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
              <ShieldCheck className="w-6 h-6 text-[#0073E6] mx-auto mb-2" />
              <div className="font-bold text-slate-900 text-sm">Fact-Checked</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Reviewed by DVM specialists</div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
              <Heart className="w-6 h-6 text-[#0073E6] mx-auto mb-2" />
              <div className="font-bold text-slate-900 text-sm">100% Free</div>
              <div className="text-xs text-slate-500 font-medium mt-1">No sign-up or paywalls</div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
              <Award className="w-6 h-6 text-[#0073E6] mx-auto mb-2" />
              <div className="font-bold text-slate-900 text-sm">Instant Client-Side</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Zero server calculation delay</div>
            </div>
          </div>
        </div>

        {/* VETERINARY TEAM PREVIEW */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Veterinary Medical Review Board</h2>
              <p className="text-xs font-medium text-slate-500 mt-0.5">Meet the licensed veterinarians and specialists behind our tools</p>
            </div>
            <Link href="/team" className="text-xs font-bold text-[#0073E6] hover:underline flex items-center gap-1">
              View All Team <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.name} className="clean-card p-5 text-center space-y-3">
                <div className="relative w-20 h-20 rounded-full mx-auto overflow-hidden border-2 border-[#0073E6]">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">{member.name}</div>
                  <div className="text-[11px] text-[#0461CF] font-bold mt-0.5">{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
