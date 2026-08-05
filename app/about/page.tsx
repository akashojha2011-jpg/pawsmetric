import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { ShieldCheck, Heart, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { TEAM_MEMBERS } from '@/app/team/page';

export const metadata: Metadata = {
  title: 'About PawsMetric: DVM Medical Review Board & Mission',
  description: 'Learn about PawsMetric, our mission to empower dog parents with peer-reviewed veterinary calculation tools, and our medical review board.',
};

export default function AboutPage() {
  return (
    <div className="bg-[#F0F1EA] min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs items={[{ label: 'About Us', url: '/about' }]} />

        <div className="space-y-4">
          <span className="bg-[#8BF03B] text-[#082C1B] text-xs font-black uppercase px-3 py-1 rounded">
            ABOUT PAWSMETRIC
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#082C1B] tracking-tight">
            Science-Backed Pet Mathematics
          </h1>
          <p className="text-base text-[#4D534E] leading-relaxed font-semibold">
            PawsMetric was created to empower dog owners, breeders, and shelter professionals with peer-reviewed, free veterinary calculators.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-[#E2E3D8] p-8 shadow-paid space-y-6 text-[#082C1B] text-sm leading-relaxed font-semibold">
          <h2 className="text-xl font-black text-[#082C1B]">Our Mission</h2>
          <p className="text-[#4D534E]">
            Canine healthcare decisions should be powered by empirical science, not historical myths. Outdated rules—like multiplying dog age by 7 or reading generic feeding guidelines on kibble bags—fail to account for breed genetics, weight classes, and physiological metabolic rates.
          </p>

          <h2 className="text-xl font-black text-[#082C1B] pt-2">Scientific Rigor</h2>
          <p className="text-[#4D534E]">
            Every tool hosted on PawsMetric is developed using verified peer-reviewed research from institutions including the American Veterinary Medical Association (AVMA), World Small Animal Veterinary Association (WSAVA), National Research Council (NRC), and the Royal Veterinary College Companion Animal datasets.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="bg-[#F0F1EA] p-4 rounded-xl border border-[#E2E3D8] text-center">
              <ShieldCheck className="w-6 h-6 text-[#082C1B] mx-auto mb-2" />
              <div className="font-black text-[#082C1B] text-sm">Fact-Checked</div>
              <div className="text-xs text-[#4D534E] font-medium mt-1">Reviewed by DVM specialists</div>
            </div>
            <div className="bg-[#F0F1EA] p-4 rounded-xl border border-[#E2E3D8] text-center">
              <Heart className="w-6 h-6 text-[#082C1B] mx-auto mb-2" />
              <div className="font-black text-[#082C1B] text-sm">100% Free</div>
              <div className="text-xs text-[#4D534E] font-medium mt-1">No sign-up or paywalls</div>
            </div>
            <div className="bg-[#F0F1EA] p-4 rounded-xl border border-[#E2E3D8] text-center">
              <Award className="w-6 h-6 text-[#082C1B] mx-auto mb-2" />
              <div className="font-black text-[#082C1B] text-sm">Instant Client-Side</div>
              <div className="text-xs text-[#4D534E] font-medium mt-1">Zero server calculation delay</div>
            </div>
          </div>
        </div>

        {/* VETERINARY TEAM PREVIEW */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#E2E3D8] pb-4">
            <div>
              <h2 className="text-2xl font-black text-[#082C1B]">Veterinary Medical Review Board</h2>
              <p className="text-xs font-semibold text-[#4D534E] mt-0.5">Meet the licensed veterinarians and specialists behind our tools</p>
            </div>
            <Link href="/team" className="text-xs font-bold text-[#082C1B] hover:text-[#4D534E] flex items-center gap-1">
              View All Team <ArrowRight className="w-4 h-4 text-[#8BF03B]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl border border-[#E2E3D8] p-5 shadow-paid text-center space-y-3">
                <div className="relative w-20 h-20 rounded-full mx-auto overflow-hidden border-2 border-[#8BF03B]">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="font-black text-[#082C1B] text-sm">{member.name}</div>
                  <div className="text-[11px] text-[#4D534E] font-bold mt-0.5">{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
