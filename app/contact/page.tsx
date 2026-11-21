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
    <div className="bg-[#FAF8F5] min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs items={[{ label: 'Contact Us', url: '/contact' }]} />

        <div className="space-y-3 border-b border-[#E8E4DC] pb-8">
          <span className="bg-[#FDF1D0] text-[#162737] border border-[#E8E4DC] text-xs font-bold uppercase px-3.5 py-1 rounded-full inline-block">
            GET IN TOUCH
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#162737] tracking-tight">
            Contact PawsMetric
          </h1>
          <p className="text-base text-stone-600 leading-relaxed max-w-2xl">
            Have feedback on a calculator, a tool request, or a veterinary editorial inquiry? We'd love to hear from you.
          </p>
        </div>

        <div className="clean-card p-8 space-y-6">
          <form className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">Your Name</label>
              <input
                type="text"
                placeholder="Jane Doe"
                className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-4 py-2.5 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5] focus:bg-white"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">Email Address</label>
              <input
                type="email"
                placeholder="jane@example.com"
                className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-4 py-2.5 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5] focus:bg-white"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">Message / Suggestion</label>
              <textarea
                rows={4}
                placeholder="How can we improve PawsMetric tools for your dog?"
                className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-4 py-2.5 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5] focus:bg-white"
                required
              ></textarea>
            </div>
            <button
              type="button"
              className="bg-[#0B63E5] hover:bg-[#0952be] text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all shadow-warm-xs flex items-center gap-2"
            >
              <Send className="w-4 h-4 text-[#FDF1D0]" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
