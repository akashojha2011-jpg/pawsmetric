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
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs items={[{ label: 'Contact Us', url: '/contact' }]} />

        <div className="space-y-3 border-b border-slate-200 pb-6">
          <span className="bg-blue-50 text-[#0461CF] border border-[#8BABF1]/30 text-xs font-bold uppercase px-3 py-1 rounded-full inline-block">
            GET IN TOUCH
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact PawsMetric
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Have feedback on a calculator, a tool request, or a veterinary editorial inquiry? We'd love to hear from you.
          </p>
        </div>

        <div className="clean-card p-8 space-y-6">
          <form className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Your Name</label>
              <input
                type="text"
                placeholder="Jane Doe"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-900 font-bold text-sm focus:outline-none focus:border-[#0073E6]"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Email Address</label>
              <input
                type="email"
                placeholder="jane@example.com"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-900 font-bold text-sm focus:outline-none focus:border-[#0073E6]"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Message / Suggestion</label>
              <textarea
                rows={4}
                placeholder="How can we improve PawsMetric tools for your dog?"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-900 font-bold text-sm focus:outline-none focus:border-[#0073E6]"
                required
              ></textarea>
            </div>
            <button
              type="button"
              className="bg-[#0073E6] hover:bg-[#0461CF] text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition-all shadow-xs flex items-center gap-2"
            >
              <Send className="w-4 h-4 text-[#B3C7F7]" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
