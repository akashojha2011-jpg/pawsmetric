'use client';

import React, { useState } from 'react';
import { Box } from 'lucide-react';

export function CrateSizeCalculatorWidget() {
  const [lengthInches, setLengthInches] = useState<number>(28);
  const [heightInches, setHeightInches] = useState<number>(20);

  const currentLength = lengthInches || 1;
  const currentHeight = heightInches || 1;

  const minCrateLength = currentLength + 4;
  const minCrateHeight = currentHeight + 3;

  let crateSizeCategory = '30-Inch Medium Crate';
  if (minCrateLength <= 24) crateSizeCategory = '24-Inch Small Crate';
  else if (minCrateLength <= 30) crateSizeCategory = '30-Inch Medium Crate';
  else if (minCrateLength <= 36) crateSizeCategory = '36-Inch Large Crate';
  else if (minCrateLength <= 42) crateSizeCategory = '42-Inch XL Crate';
  else crateSizeCategory = '48-Inch XXL Giant Crate';

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 max-w-3xl mx-auto my-6 space-y-6 shadow-xs">
      <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
        <div className="w-10 h-10 rounded-xl bg-[#0073E6] text-white flex items-center justify-center font-bold">
          <Box className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900">Dog Crate Sizing Calculator</h3>
          <p className="text-xs text-slate-500">Veterinary clearance: +4" length & +3" headroom rule</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Dog Nose-to-Tail Length (Inches)</label>
          <input
            type="number"
            value={lengthInches}
            onChange={(e) => setLengthInches(parseFloat(e.target.value) || 0)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 font-bold text-sm focus:outline-none focus:border-[#0073E6]"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Standing Head Height (Inches)</label>
          <input
            type="number"
            value={heightInches}
            onChange={(e) => setHeightInches(parseFloat(e.target.value) || 0)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 font-bold text-sm focus:outline-none focus:border-[#0073E6]"
          />
        </div>
      </div>

      <div className="bg-[#054FB9] text-white p-6 rounded-2xl border border-[#0461CF] text-center space-y-2">
        <div className="text-xs text-[#B3C7F7] font-bold uppercase tracking-wider">Recommended Crate Standard</div>
        <div className="text-3xl font-extrabold text-[#B3C7F7]">{crateSizeCategory}</div>
        <p className="text-xs text-blue-100 font-medium">Min Interior Dimensions: {minCrateLength}" Long × {minCrateHeight}" Tall</p>
      </div>
    </div>
  );
}

export function HarnessSizeCalculatorWidget() {
  const [girthInches, setGirthInches] = useState<number>(24);
  const [weightLbs, setWeightLbs] = useState<number>(35);

  const currentGirth = girthInches || 1;

  let size = 'Medium Harness';
  if (currentGirth < 16) size = 'Extra Small (XS)';
  else if (currentGirth < 22) size = 'Small (S)';
  else if (currentGirth < 28) size = 'Medium (M)';
  else if (currentGirth < 34) size = 'Large (L)';
  else size = 'Extra Large (XL)';

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 max-w-3xl mx-auto my-6 space-y-6 shadow-xs">
      <h3 className="text-lg font-bold text-slate-900">Dog Harness Sizing Calculator</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Chest Girth Measurement (Inches)</label>
          <input
            type="number"
            value={girthInches}
            onChange={(e) => setGirthInches(parseFloat(e.target.value) || 0)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 font-bold text-sm focus:outline-none focus:border-[#0073E6]"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Dog Weight (lbs)</label>
          <input
            type="number"
            value={weightLbs}
            onChange={(e) => setWeightLbs(parseFloat(e.target.value) || 0)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 font-bold text-sm focus:outline-none focus:border-[#0073E6]"
          />
        </div>
      </div>

      <div className="bg-[#054FB9] text-white p-6 rounded-2xl border border-[#0461CF] text-center space-y-2">
        <div className="text-xs text-[#B3C7F7] font-bold uppercase tracking-wider">Recommended Harness Size</div>
        <div className="text-3xl font-extrabold text-[#B3C7F7]">{size}</div>
        <p className="text-xs text-blue-100 font-medium">Always apply the 2-finger fit test behind front legs.</p>
      </div>
    </div>
  );
}

export function CollarSizeCalculatorWidget() {
  const [neckInches, setNeckInches] = useState<number>(14);

  const currentNeck = neckInches || 1;
  const collarMin = currentNeck + 1.5;
  const collarMax = currentNeck + 3.0;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 max-w-3xl mx-auto my-6 space-y-6 shadow-xs">
      <h3 className="text-lg font-bold text-slate-900">Dog Collar Size Calculator</h3>
      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Exact Neck Circumference (Inches)</label>
        <input
          type="number"
          value={neckInches}
          onChange={(e) => setNeckInches(parseFloat(e.target.value) || 0)}
          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 font-bold text-sm focus:outline-none focus:border-[#0073E6]"
        />
      </div>

      <div className="bg-[#054FB9] text-white p-6 rounded-2xl border border-[#0461CF] text-center space-y-2">
        <div className="text-xs text-[#B3C7F7] font-bold uppercase tracking-wider">Adjustable Collar Range Target</div>
        <div className="text-3xl font-extrabold text-[#B3C7F7]">{collarMin.toFixed(1)}" - {collarMax.toFixed(1)}" Collar</div>
        <p className="text-xs text-blue-100 font-medium">Allows comfortable 2-finger breathing and neck safety room.</p>
      </div>
    </div>
  );
}

export function CoatSizeCalculatorWidget() {
  const [backLengthInches, setBackLengthInches] = useState<number>(18);

  const currentBack = backLengthInches || 1;

  let coatSize = 'Medium Coat (18")';
  if (currentBack < 12) coatSize = 'Extra Small Coat (10-12")';
  else if (currentBack < 16) coatSize = 'Small Coat (14-16")';
  else if (currentBack < 22) coatSize = 'Medium Coat (18-20")';
  else if (currentBack < 28) coatSize = 'Large Coat (22-26")';
  else coatSize = 'Extra Large Coat (28"+)';

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 max-w-3xl mx-auto my-6 space-y-6 shadow-xs">
      <h3 className="text-lg font-bold text-slate-900">Dog Coat & Sweater Size Calculator</h3>
      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Back Length (Base of Neck to Tail Base, Inches)</label>
        <input
          type="number"
          value={backLengthInches}
          onChange={(e) => setBackLengthInches(parseFloat(e.target.value) || 0)}
          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 font-bold text-sm focus:outline-none focus:border-[#0073E6]"
        />
      </div>

      <div className="bg-[#054FB9] text-white p-6 rounded-2xl border border-[#0461CF] text-center space-y-2">
        <div className="text-xs text-[#B3C7F7] font-bold uppercase tracking-wider">Recommended Apparel Size</div>
        <div className="text-3xl font-extrabold text-[#B3C7F7]">{coatSize}</div>
        <p className="text-xs text-blue-100 font-medium">Provides full spinal coverage without interfering with bathroom breaks.</p>
      </div>
    </div>
  );
}

export const CoatSweaterSizeCalculatorWidget = CoatSizeCalculatorWidget;

export function AirlineCarrierCalculatorWidget() {
  const [weightLbs, setWeightLbs] = useState<number>(14);
  const [heightInches, setHeightInches] = useState<number>(9);

  const eligible = (weightLbs || 0) <= 20 && (heightInches || 0) <= 10.5;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 max-w-3xl mx-auto my-6 space-y-6 shadow-xs">
      <h3 className="text-lg font-bold text-slate-900">Airline In-Cabin Pet Carrier Eligibility</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Dog Weight (lbs)</label>
          <input
            type="number"
            value={weightLbs}
            onChange={(e) => setWeightLbs(parseFloat(e.target.value) || 0)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 font-bold text-sm focus:outline-none focus:border-[#0073E6]"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Standing Height (Inches)</label>
          <input
            type="number"
            value={heightInches}
            onChange={(e) => setHeightInches(parseFloat(e.target.value) || 0)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 font-bold text-sm focus:outline-none focus:border-[#0073E6]"
          />
        </div>
      </div>

      <div className="bg-[#054FB9] text-white p-6 rounded-2xl border border-[#0461CF] text-center space-y-2">
        <div className="text-xs text-[#B3C7F7] font-bold uppercase tracking-wider">TSA Under-Seat Eligibility Status</div>
        <div className="text-3xl font-extrabold text-[#B3C7F7]">{eligible ? 'ELIGIBLE FOR IN-CABIN FLIGHT' : 'EXCEEDS IN-CABIN SIZE LIMITS'}</div>
        <p className="text-xs text-blue-100 font-medium">{eligible ? 'Fits standard 17.5" L × 11" W × 10.5" H soft-sided carrier.' : 'Requires FAA approved cargo crate transport.'}</p>
      </div>
    </div>
  );
}

export const CarrierSizeCalculatorWidget = AirlineCarrierCalculatorWidget;
