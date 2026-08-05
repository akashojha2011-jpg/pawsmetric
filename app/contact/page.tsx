import React from 'react';
import { Metadata } from 'next';
import { Send } from 'lucide-react';
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = {
  title: 'Contact Us | PawsMetric',
  description: 'Have a question or calculator recommendation? Contact the PawsMetric team and veterinary board.',
};

export default function ContactPage() {
  return (
    <div className="bg-[#F0F1EA] min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs items={[{ label: 'Contact Us', url: '/contact' }]} />

        <div className="space-y-4">
          <span className="bg-[#8BF03B] text-[#082C1B] text-xs font-black uppercase px-3 py-1 rounded">
            GET IN TOUCH
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#082C1B] tracking-tight">
            Contact PawsMetric
          </h1>
          <p className="text-base text-[#4D534E] leading-relaxed font-semibold">
            Have feedback on a calculator, a tool request, or a veterinary editorial inquiry? We'd love to hear from you.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-[#E2E3D8] p-8 shadow-paid space-y-6">
          <form className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-1.5">Your Name</label>
              <input
                type="text"
                placeholder="Jane Doe"
                className="w-full bg-[#F0F1EA] border border-[#E2E3D8] rounded-xl px-4 py-2.5 text-[#082C1B] font-bold text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-1.5">Email Address</label>
              <input
                type="email"
                placeholder="jane@example.com"
                className="w-full bg-[#F0F1EA] border border-[#E2E3D8] rounded-xl px-4 py-2.5 text-[#082C1B] font-bold text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-1.5">Message / Suggestion</label>
              <textarea
                rows={4}
                placeholder="How can we improve PawsMetric tools for your dog?"
                className="w-full bg-[#F0F1EA] border border-[#E2E3D8] rounded-xl px-4 py-2.5 text-[#082C1B] font-bold text-sm"
                required
              ></textarea>
            </div>
            <button
              type="button"
              className="bg-[#082C1B] hover:bg-[#0d4028] text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3 rounded-xl shadow-paid transition-all flex items-center gap-2"
            >
              <Send className="w-4 h-4 text-[#8BF03B]" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
