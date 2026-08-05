import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { ShieldCheck, Award, GraduationCap, CheckCircle2, Code, FileText, BarChart3 } from 'lucide-react';
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = {
  title: 'Executive Team & Medical Review Board | PawsMetric',
  description: 'Meet the Doctors of Veterinary Medicine (DVMs), software engineers, medical editors, and data analysts powering PawsMetric tools.',
};

export const TEAM_MEMBERS = [
  {
    name: 'Dr. Emily Watson, DVM',
    role: 'Lead Veterinary Data Specialist & Medical Officer',
    image: '/images/dr_emily_watson_face.jpg',
    education: 'DVM, UC Davis School of Veterinary Medicine (2012)',
    specialty: 'Canine Metabolic Health & Epigenetic Aging',
    bio: 'Dr. Watson has spent over 14 years in clinical practice and companion animal research. She oversees the mathematical algorithms for biological age conversion and canine caloric expenditure.',
    credentials: [
      'Licensed Doctor of Veterinary Medicine (DVM)',
      'Member, American Veterinary Medical Association (AVMA)',
      'Author of 12+ peer-reviewed companion animal longevity studies',
    ],
  },
  {
    name: 'Dr. Marcus Vance, DACVIM',
    role: 'Board-Certified Internal Medicine Specialist & Toxicologist',
    image: '/images/dr_marcus_vance_face.jpg',
    education: 'DVM, Cornell University College of Veterinary Medicine (2008)',
    specialty: 'Small Animal Internal Medicine & Emergency Toxicology',
    bio: 'Dr. Vance completed his residency in small animal internal medicine at UPenn. He consults on acute toxicity thresholds (theobromine, xylitol, tartaric acid) and medication safety bounds.',
    credentials: [
      'Diplomate, American College of Veterinary Internal Medicine (DACVIM)',
      'Former Emergency Clinical Director at Oakwood Animal Hospital',
      'Specialist reviewer for emergency dosage and toxicity calculators',
    ],
  },
  {
    name: 'Sarah Jenkins, RVT',
    role: 'Chief Canine Behaviorist & Biomechanics Specialist',
    image: '/images/sarah_jenkins_face.jpg',
    education: 'B.S. Animal Science, Purdue University (2015)',
    specialty: 'Puppy Development, Gear Fitting & Canine Ergonomics',
    bio: 'Sarah is a Registered Veterinary Technician (RVT) and Fear Free Certified behaviorist. She designs our gear measurement algorithms (harness, crate, and airline carrier standards).',
    credentials: [
      'Registered Veterinary Technician (RVT)',
      'Fear Free Certified Professional (FFCP)',
      'Member, Association of Professional Dog Trainers (APDT)',
    ],
  },
  {
    name: 'Alex Rivera',
    role: 'Lead Calculation Architect & Engineering Director',
    image: '/images/alex_rivera_face.jpg',
    education: 'M.S. Computer Science, Stanford University (2016)',
    specialty: 'Client-Side Algorithmic Engines & Core Web Vitals Optimization',
    bio: 'Alex leads the software engineering team at PawsMetric. He builds our 0ms-latency, client-side calculation engines ensuring zero server delays and sub-second page loads.',
    credentials: [
      '10+ Years Building High-Scale Web Architecture',
      'Specialist in Mathematical Parsing & Performant Frontend Engineering',
      'Core Contributor to Open-Source Pet Health Frameworks',
    ],
  },
  {
    name: 'Jessica Chen',
    role: 'Senior Medical Content Strategist & Scientific Editor',
    image: '/images/jessica_chen_face.jpg',
    education: 'B.A. Journalism & Health Communications, Northwestern University (2017)',
    specialty: 'Peer-Reviewed Scientific Translation & Editorial Standards',
    bio: 'Jessica manages the editorial workflow at PawsMetric, translating dense veterinary journal studies (AVMA, WSAVA, NRC) into clear, accessible guides for pet owners.',
    credentials: [
      'Certified Medical Publication Professional (CMPP)',
      'Former Senior Health Editor at Companion Animal Digest',
      'Enforces Strict Fact-Checking & Peer-Review Standards',
    ],
  },
  {
    name: 'David Miller',
    role: 'Senior Veterinary Data Analyst & Biostatistician',
    image: '/images/dr_marcus_vance_face.jpg',
    education: 'M.S. Biostatistics, Johns Hopkins Bloomberg School of Public Health (2018)',
    specialty: 'Canine Growth Curves & Population Breed Datasets',
    bio: 'David analyzes purebred and mixed-breed growth velocity datasets to refine our adult size predictor and lifetime cost forecast models.',
    credentials: [
      'Specialist in Longitudinal Growth Velocity Modeling',
      'Data Research Contributor to Purebred Weight Standards',
      '8+ Years Quantitative Biostatistics Experience',
    ],
  },
];

export default function TeamPage() {
  return (
    <div className="bg-[#F0F1EA] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs items={[{ label: 'Veterinary Team', url: '/team' }]} />

        <div className="space-y-4 border-b border-[#E2E3D8] pb-6">
          <span className="bg-[#8BF03B] text-[#082C1B] text-xs font-black uppercase px-3 py-1 rounded">
            EXECUTIVE & MEDICAL REVIEW BOARD
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#082C1B] tracking-tight">
            Meet Our Leadership, Engineering & Veterinary Team
          </h1>
          <p className="text-base text-[#4D534E] max-w-3xl leading-relaxed font-semibold">
            PawsMetric brings together licensed Doctors of Veterinary Medicine (DVMs), software engineers, medical editors, and biostatisticians to deliver accurate, science-backed pet tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.name} className="bg-white rounded-2xl border border-[#E2E3D8] p-6 shadow-paid flex flex-col justify-between space-y-6 group hover:border-[#082C1B] transition-all">
              <div className="space-y-4">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#F0F1EA] border border-[#E2E3D8]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div>
                  <h2 className="text-xl font-black text-[#082C1B]">{member.name}</h2>
                  <div className="text-xs font-bold text-[#4D534E] mt-0.5">{member.role}</div>
                </div>

                <div className="space-y-2 text-xs text-[#4D534E] pt-2 border-t border-[#F0F1EA] font-semibold">
                  <div className="flex items-center gap-1.5 text-[#082C1B]">
                    <GraduationCap className="w-4 h-4 text-[#082C1B] flex-shrink-0" />
                    <span>{member.education}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#082C1B]">
                    <Award className="w-4 h-4 text-[#8BF03B] flex-shrink-0" />
                    <span>{member.specialty}</span>
                  </div>
                </div>

                <p className="text-xs text-[#4D534E] leading-relaxed font-medium">
                  {member.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F0F1EA] space-y-1.5">
                <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#082C1B]">Verified Credentials</div>
                {member.credentials.map((cred, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-xs text-[#082C1B] font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8BF03B] flex-shrink-0 mt-0.5" />
                    <span>{cred}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
