import React from 'react';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = {
  title: 'Privacy Policy | PawsMetric',
  description: 'Comprehensive Privacy Policy for PawsMetric. Learn how client-side calculation privacy, zero PII retention, and strict data security are maintained.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs items={[{ label: 'Privacy Policy', url: '/privacy-policy' }]} />

        <div className="space-y-3 border-b border-slate-200 pb-6">
          <span className="bg-blue-50 text-[#0461CF] border border-[#8BABF1]/30 text-xs font-bold uppercase px-3 py-1 rounded-full inline-block">
            DATA PROTECTION & TRANSPARENCY
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            PawsMetric Privacy Policy
          </h1>
          <p className="text-xs font-semibold text-slate-500">Effective Date: August 4, 2026 | Last Updated: September 2026</p>
        </div>

        <div className="clean-card p-6 md:p-10 space-y-8 text-slate-800 text-sm leading-relaxed font-normal">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">1. Introduction & Commitment to Privacy</h2>
            <p className="text-slate-600">
              PawsMetric ("we," "our," or "us") operates the companion animal calculation portal located at <a href="https://www.pawsmetric.com" className="text-[#0073E6] hover:underline font-bold">https://www.pawsmetric.com</a>. We believe that pet parents should have access to accurate veterinary calculations without sacrificing their personal data or privacy. This Privacy Policy outlines our strict client-side data handling practices.
            </p>
          </section>

          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-xl font-bold text-slate-900">2. Zero Client-Side Data Retention Policy</h2>
            <div className="bg-[#054FB9] text-white p-5 rounded-2xl border border-[#0461CF] space-y-2">
              <div className="text-xs font-bold text-[#B3C7F7] uppercase tracking-wider">Core Privacy Guarantee</div>
              <p className="text-xs text-blue-100 leading-relaxed font-medium">
                All 38+ interactive calculators (including age conversions, kibble portioning, Benadryl dosage, and toxicity risks) compute results <strong>entirely within your web browser (client-side memory)</strong>.
              </p>
            </div>
            <p className="text-slate-600">
              When you input your dog's weight, age, or feeding parameters into a PawsMetric tool, those inputs are processed instantly in your device's RAM. Your data is <strong>never transmitted, logged, stored, or sold to external remote servers</strong>.
            </p>
          </section>

          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-xl font-bold text-slate-900">3. Information We Do Not Collect</h2>
            <p className="text-slate-600">To maintain maximum privacy protection, PawsMetric does not collect:</p>
            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Personally Identifiable Information (PII) such as full names, home addresses, or phone numbers.</li>
              <li>User registration or account credentials (we have zero login forms or paywalls).</li>
              <li>Pet medical histories, veterinary clinic records, or microchip identification numbers.</li>
              <li>Financial payment details or credit card information (PawsMetric is 100% free).</li>
            </ul>
          </section>

          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-xl font-bold text-slate-900">4. Cookies, Analytics & Performance Metrics</h2>
            <p className="text-slate-600">
              We do not deploy third-party advertising cookies, cross-site tracking pixels (such as Meta Pixel or TikTok Pixel), or behavioral profiling trackers.
            </p>
            <p className="text-slate-600">
              We use privacy-centric, aggregate performance analytics strictly to monitor server uptime, page load speed, and Core Web Vitals performance. This aggregate data contains no IP addresses or individual user identification.
            </p>
          </section>

          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-xl font-bold text-slate-900">5. Your Rights Under GDPR & CCPA/CPRA</h2>
            <p className="text-slate-600">
              Under the European Union General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA/CPRA), users have rights regarding data access, deletion, and opt-out. Because PawsMetric stores 0 bytes of personal data, there is no personal data to delete, export, or monetarily sell.
            </p>
          </section>

          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-xl font-bold text-slate-900">6. Contacting Our Privacy Officer</h2>
            <p className="text-slate-600">
              If you have questions regarding this Privacy Policy, please contact our privacy compliance team via our <a href="/contact" className="text-[#0073E6] underline font-bold">Contact Form</a> or email us directly at <span className="font-bold text-slate-900">privacy@pawsmetric.com</span>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
