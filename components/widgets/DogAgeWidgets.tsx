'use client';

import React, { useState } from 'react';
import { Calculator, RefreshCw, Copy, Check, CheckCircle2 } from 'lucide-react';

interface DogAgeWidgetProps {
  defaultBreedSize?: 'small' | 'medium' | 'large' | 'giant';
  presetBreedName?: string;
}

export function DogAgeCalculatorWidget({ defaultBreedSize = 'medium', presetBreedName }: DogAgeWidgetProps) {
  const [ageYears, setAgeYears] = useState<number>(3);
  const [ageMonths, setAgeMonths] = useState<number>(0);
  const [sizeClass, setSizeClass] = useState<'small' | 'medium' | 'large' | 'giant'>(defaultBreedSize);
  const [copied, setCopied] = useState<boolean>(false);

  const totalAgeYears = (ageYears || 0) + (ageMonths || 0) / 12;

  let humanYears = 0;
  if (totalAgeYears > 0) {
    if (totalAgeYears <= 1) {
      humanYears = totalAgeYears * 15;
    } else if (totalAgeYears <= 2) {
      humanYears = 15 + (totalAgeYears - 1) * 9;
    } else {
      const base2Years = 24;
      const remainingYears = totalAgeYears - 2;
      const rateMap = { small: 4, medium: 5, large: 6, giant: 7.5 };
      humanYears = base2Years + remainingYears * rateMap[sizeClass];
    }
  }

  let lifeStage = 'Puppy / Adolescent';
  let lifeStageBadge = 'bg-[#8BF03B] text-[#082C1B] font-extrabold';
  if (totalAgeYears >= 1 && totalAgeYears < 3) {
    lifeStage = 'Young Adult';
  } else if (totalAgeYears >= 3 && totalAgeYears < 7) {
    lifeStage = 'Mature Adult';
  } else if (totalAgeYears >= 7) {
    lifeStage = 'Senior / Geriatric';
  }

  const handleReset = () => {
    setAgeYears(3);
    setAgeMonths(0);
    setSizeClass(defaultBreedSize);
  };

  const handleCopy = () => {
    const text = `${presetBreedName || 'Dog'} Age: ${totalAgeYears.toFixed(1)} years = ${Math.round(humanYears)} human years (${lifeStage})`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl border border-[#E2E3D8] p-6 md:p-8 shadow-paid max-w-3xl mx-auto my-6 space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-[#F0F1EA]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#082C1B] text-[#8BF03B] flex items-center justify-center font-bold">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-black text-[#082C1B]">
              {presetBreedName ? `${presetBreedName} Age Calculator` : 'Interactive Dog Age Calculator'}
            </h2>
            <p className="text-xs font-semibold text-[#4D534E]">Exact biological human age equivalent</p>
          </div>
        </div>

        <button
          onClick={handleReset}
          className="flex items-center gap-1 text-xs font-bold text-[#082C1B] px-3 py-1.5 rounded-lg border border-[#E2E3D8] hover:bg-[#F0F1EA] transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" /> Reset
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-2">
            Dog's Age: <span className="text-[#082C1B] font-black">{ageYears} Years</span>
          </label>
          <input
            type="range"
            min="0"
            max="20"
            step="0.5"
            value={ageYears}
            onChange={(e) => setAgeYears(parseFloat(e.target.value))}
            className="w-full h-2 bg-[#E2E3D8] rounded-lg appearance-none cursor-pointer accent-[#082C1B]"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-2">
            Additional Months
          </label>
          <select
            value={ageMonths}
            onChange={(e) => setAgeMonths(parseInt(e.target.value))}
            className="w-full bg-[#F0F1EA] border border-[#E2E3D8] rounded-xl px-4 py-2 text-[#082C1B] font-bold focus:outline-none"
          >
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((m) => (
              <option key={m} value={m}>
                {m} {m === 1 ? 'month' : 'months'}
              </option>
            ))}
          </select>
        </div>

        {!presetBreedName && (
          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-2">
              Breed Size Category
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'small', label: 'Small', sub: '< 20 lbs' },
                { id: 'medium', label: 'Medium', sub: '21-50 lbs' },
                { id: 'large', label: 'Large', sub: '51-90 lbs' },
                { id: 'giant', label: 'Giant', sub: '> 90 lbs' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSizeClass(item.id as any)}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    sizeClass === item.id
                      ? 'border-[#082C1B] bg-[#082C1B] text-[#8BF03B] font-black shadow-sm'
                      : 'border-[#E2E3D8] bg-[#F0F1EA] text-[#082C1B] font-bold hover:bg-white'
                  }`}
                >
                  <div className="text-xs uppercase">{item.label}</div>
                  <div className="text-[10px] opacity-80 font-normal">{item.sub}</div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="bg-[#082C1B] text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-paid-lg border border-[#0d4028]">
        <div className="text-center md:text-left">
          <div className="text-[#A2B5AB] text-xs font-extrabold uppercase tracking-wider mb-1">Human Equivalent Age</div>
          <div className="text-4xl md:text-5xl font-black text-[#8BF03B]">
            {Math.round(humanYears)}{' '}
            <span className="text-lg text-white font-semibold">human years</span>
          </div>
          <div className="mt-2 text-xs text-[#A2B5AB] font-medium">
            Based on {totalAgeYears.toFixed(1)} calendar years in {sizeClass} breed class
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-3">
          <span className={`px-4 py-1.5 rounded-md text-xs uppercase tracking-wider ${lifeStageBadge}`}>
            {lifeStage}
          </span>

          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs font-extrabold bg-[#041B10] hover:bg-[#0d4028] text-white px-4 py-2 rounded-lg border border-[#0d4028] transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-[#8BF03B]" /> : <Copy className="w-4 h-4 text-[#8BF03B]" />}
            <span>{copied ? 'Copied!' : 'Copy Result'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export function PuppyAgeCalculatorWidget() {
  const [weeks, setWeeks] = useState<number>(10);
  const [size, setSize] = useState<'small' | 'medium' | 'large' | 'giant'>('medium');

  let milestone = 'Socialization Window';
  let desc = 'Critical window to expose puppy to new friendly people, calm adult dogs, sounds, and surfaces.';
  if (weeks < 3) {
    milestone = 'Neonatal Phase';
    desc = 'Eyes open around day 10-14. Relies entirely on dam for nursing and warmth.';
  } else if (weeks < 8) {
    milestone = 'Early Socialization & Weaning';
    desc = 'Learning bite inhibition from mother and littermates. Transitioning to soft gruel.';
  } else if (weeks < 12) {
    milestone = 'Critical Socialization & Fear Impact';
    desc = 'Prime window for positive experiences. First fear period occurs around week 8-11.';
  } else if (weeks < 16) {
    milestone = 'Teething & Vaccine Booster Phase';
    desc = 'Losing baby teeth. Completing DHPP core booster vaccine series.';
  } else {
    milestone = 'Adolescence & Growth Phase';
    desc = 'Testing boundaries. High energy. Continue positive reinforcement training.';
  }

  return (
    <div className="bg-white rounded-2xl border border-[#E2E3D8] p-6 md:p-8 shadow-paid max-w-3xl mx-auto my-6 space-y-6">
      <h3 className="text-lg font-black text-[#082C1B]">Puppy Milestone & Age Tracker</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-2">
            Puppy Age: <span className="text-[#082C1B] font-black">{weeks} Weeks</span>
          </label>
          <input
            type="range"
            min="1"
            max="24"
            value={weeks}
            onChange={(e) => setWeeks(parseInt(e.target.value))}
            className="w-full h-2 bg-[#E2E3D8] rounded-lg appearance-none cursor-pointer accent-[#082C1B]"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-2">Target Breed Size</label>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value as any)}
            className="w-full bg-[#F0F1EA] border border-[#E2E3D8] rounded-xl px-4 py-2.5 text-[#082C1B] font-bold"
          >
            <option value="small">Small Breed (&lt; 20 lbs)</option>
            <option value="medium">Medium Breed (21-50 lbs)</option>
            <option value="large">Large Breed (51-90 lbs)</option>
            <option value="giant">Giant Breed (&gt; 90 lbs)</option>
          </select>
        </div>
      </div>

      <div className="bg-[#082C1B] text-white rounded-2xl p-6 border border-[#0d4028]">
        <div className="flex items-center gap-2 text-[#8BF03B] font-extrabold mb-1">
          <CheckCircle2 className="w-5 h-5 text-[#8BF03B]" />
          <span>Stage: {milestone}</span>
        </div>
        <p className="text-xs text-[#A2B5AB] leading-relaxed mt-2 font-medium">{desc}</p>
        <div className="mt-4 text-xs text-[#8BF03B] font-black border-t border-[#0d4028] pt-3 uppercase">
          Human Toddler Equivalent: ~{Math.round(weeks * 0.4 + 1)} year old child
        </div>
      </div>
    </div>
  );
}

export function SmallVsLargeBreedAgeWidget() {
  const [age, setAge] = useState<number>(7);

  const smallHuman = age <= 2 ? (age === 1 ? 15 : 24) : 24 + (age - 2) * 4;
  const largeHuman = age <= 2 ? (age === 1 ? 14 : 22) : 22 + (age - 2) * 6.5;

  return (
    <div className="bg-white rounded-2xl border border-[#E2E3D8] p-6 md:p-8 shadow-paid max-w-3xl mx-auto my-6 space-y-6">
      <h3 className="text-lg font-black text-[#082C1B]">Side-by-Side Small vs Large Breed Aging</h3>
      <div>
        <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-2">
          Dog Calendar Age: <span className="text-[#082C1B] font-black">{age} Years</span>
        </label>
        <input
          type="range"
          min="1"
          max="16"
          value={age}
          onChange={(e) => setAge(parseInt(e.target.value))}
          className="w-full h-2 bg-[#E2E3D8] rounded-lg appearance-none cursor-pointer accent-[#082C1B]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#082C1B] text-white rounded-2xl p-6 text-center border border-[#0d4028]">
          <div className="text-xs uppercase font-extrabold tracking-wider text-[#A2B5AB]">Small Breed (&lt;20 lbs)</div>
          <div className="text-4xl font-black text-[#8BF03B] my-2">{smallHuman} Yrs</div>
          <div className="text-xs text-[#A2B5AB]">Aging Rate: ~4 yrs/yr</div>
        </div>

        <div className="bg-[#082C1B] text-white rounded-2xl p-6 text-center border border-[#0d4028]">
          <div className="text-xs uppercase font-extrabold tracking-wider text-[#A2B5AB]">Large Breed (&gt;60 lbs)</div>
          <div className="text-4xl font-black text-white my-2">{largeHuman} Yrs</div>
          <div className="text-xs text-[#A2B5AB]">Aging Rate: ~6.5 yrs/yr</div>
        </div>
      </div>
      <div className="text-center text-xs text-[#4D534E] font-bold">
        Biological Gap Difference: Large breed is equivalent to{' '}
        <span className="font-black text-[#082C1B]">{Math.round(largeHuman - smallHuman)} human years</span> older.
      </div>
    </div>
  );
}
