import React from 'react';
import { Metadata } from 'next';
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = {
  title: 'Privacy Policy | PawsMetric',
  description: 'Comprehensive Privacy Policy for PawsMetric. Learn how client-side calculation privacy, zero PII retention, and strict data security are maintained.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#F0F1EA] min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs items={[{ label: 'Privacy Policy', url: '/privacy-policy' }]} />

        <div className="space-y-4 border-b border-[#E2E3D8] pb-6">
          <span className="bg-[#8BF03B] text-[#082C1B] text-xs font-black uppercase px-3 py-1 rounded">
            DATA PROTECTION & TRANSPARENCY
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#082C1B] tracking-tight">
            PawsMetric Privacy Policy
          </h1>
          <p className="text-sm text-[#4D534E] font-semibold">Effective Date: August 4, 2026 | Last Updated: August 2026</p>
        </div>

        <div className="bg-white rounded-2xl border border-[#E2E3D8] p-6 md:p-10 shadow-paid space-y-8 text-[#082C1B] text-sm leading-relaxed font-semibold">
          <section className="space-y-3">
            <h2 className="text-xl font-black text-[#082C1B]">1. Introduction & Commitment to Privacy</h2>
            <p className="text-[#4D534E]">
              PawsMetric ("we," "our," or "us") operates the companion animal calculation portal located at <a href="https://pawsmetric.com" className="text-[#082C1B] underline font-bold">https://pawsmetric.com</a>. We believe that pet parents should have access to accurate veterinary calculations without sacrificing their personal data or privacy. This Privacy Policy outlines our strict client-side data handling practices.
            </p>
          </section>

          <section className="space-y-3 border-t border-[#F0F1EA] pt-6">
            <h2 className="text-xl font-black text-[#082C1B]">2. Zero Client-Side Data Retention Policy</h2>
            <div className="bg-[#082C1B] text-white p-5 rounded-xl border border-[#0d4028] space-y-2">
              <div className="text-xs font-extrabold text-[#8BF03B] uppercase tracking-wider">Core Privacy Guarantee</div>
              <p className="text-xs text-[#A2B5AB] leading-relaxed">
                All 38+ interactive calculators (including age conversions, kibble portioning, Benadryl dosage, and toxicity risks) compute results <strong>entirely within your web browser (client-side memory)</strong>.
              </p>
            </div>
            <p className="text-[#4D534E]">
              When you input your dog's weight, age, or feeding parameters into a PawsMetric tool, those inputs are processed instantly in your device's RAM. Your data is <strong>never transmitted, logged, stored, or sold to external remote servers</strong>.
            </p>
          </section>

          <section className="space-y-3 border-t border-[#F0F1EA] pt-6">
            <h2 className="text-xl font-black text-[#082C1B]">3. Information We Do Not Collect</h2>
            <p className="text-[#4D534E]">To maintain maximum privacy protection, PawsMetric does not collect:</p>
            <ul className="list-disc pl-5 text-[#4D534E] space-y-1">
              <li>Personally Identifiable Information (PII) such as full names, home addresses, or phone numbers.</li>
              <li>User registration or account credentials (we have zero login forms or paywalls).</li>
              <li>Pet medical histories, veterinary clinic records, or microchip identification numbers.</li>
              <li>Financial payment details or credit card information (PawsMetric is 100% free).</li>
            </ul>
          </section>

          <section className="space-y-3 border-t border-[#F0F1EA] pt-6">
            <h2 className="text-xl font-black text-[#082C1B]">4. Cookies, Analytics & Performance Metrics</h2>
            <p className="text-[#4D534E]">
              We do not deploy third-party advertising cookies, cross-site tracking pixels (such as Meta Pixel or TikTok Pixel), or behavioral profiling trackers.
            </p>
            <p className="text-[#4D534E]">
              We use privacy-centric, aggregate performance analytics strictly to monitor server uptime, page load speed, and Core Web Vitals performance. This aggregate data contains no IP addresses or individual user identification.
            </p>
          </section>

          <section className="space-y-3 border-t border-[#F0F1EA] pt-6">
            <h2 className="text-xl font-black text-[#082C1B]">5. Your Rights Under GDPR & CCPA/CPRA</h2>
            <p className="text-[#4D534E]">
              Under the European Union General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA/CPRA), users have rights regarding data access, deletion, and opt-out. Because PawsMetric stores 0 bytes of personal data, there is no personal data to delete, export, or monetarily sell.
            </p>
          </section>

          <section className="space-y-3 border-t border-[#F0F1EA] pt-6">
            <h2 className="text-xl font-black text-[#082C1B]">6. Contacting Our Privacy Officer</h2>
            <p className="text-[#4D534E]">
              If you have questions regarding this Privacy Policy, please contact our privacy compliance team via our <a href="/contact" className="text-[#082C1B] underline font-bold">Contact Form</a> or email us directly at <span className="font-bold text-[#082C1B]">privacy@pawsmetric.com</span>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
