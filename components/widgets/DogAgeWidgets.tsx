'use client';

import React, { useState } from 'react';
import { Calculator, RefreshCw, Copy, Check, CheckCircle2 } from 'lucide-react';

const TOP_BREEDS = [
  { name: 'Labrador Retriever', size: 'large' },
  { name: 'French Bulldog', size: 'small' },
  { name: 'Golden Retriever', size: 'large' },
  { name: 'German Shepherd', size: 'large' },
  { name: 'Poodle (Standard)', size: 'large' },
  { name: 'Chihuahua', size: 'small' },
  { name: 'Beagle', size: 'medium' },
  { name: 'Rottweiler', size: 'large' },
  { name: 'Dachshund', size: 'small' },
  { name: 'Boxer', size: 'large' },
  { name: 'Shih Tzu', size: 'small' },
  { name: 'Great Dane', size: 'giant' },
];

interface DogAgeWidgetProps {
  defaultBreedSize?: 'small' | 'medium' | 'large' | 'giant';
  presetBreedName?: string;
}

export function DogAgeCalculatorWidget({ defaultBreedSize = 'medium', presetBreedName }: DogAgeWidgetProps) {
  const [ageYears, setAgeYears] = useState<number>(3);
  const [ageMonths, setAgeMonths] = useState<number>(0);
  const [sizeClass, setSizeClass] = useState<'small' | 'medium' | 'large' | 'giant'>(defaultBreedSize);
  const [selectedBreed, setSelectedBreed] = useState<string>(presetBreedName || '');
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
  let lifeStageBadge = 'bg-[#EBF2FE] text-[#0B63E5] border border-[#B8D4F7]';
  if (totalAgeYears >= 1 && totalAgeYears < 3) {
    lifeStage = 'Young Adult';
  } else if (totalAgeYears >= 3 && totalAgeYears < 7) {
    lifeStage = 'Mature Adult';
  } else if (totalAgeYears >= 7) {
    lifeStage = 'Senior / Geriatric';
    lifeStageBadge = 'bg-[#FDF1D0] text-[#1C1917] border border-[#F6DF9C]';
  }

  const handleBreedChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const breedName = e.target.value;
    setSelectedBreed(breedName);
    const found = TOP_BREEDS.find((b) => b.name === breedName);
    if (found) {
      setSizeClass(found.size as any);
    }
  };

  const handleReset = () => {
    setAgeYears(3);
    setAgeMonths(0);
    setSizeClass(defaultBreedSize);
    setSelectedBreed('');
  };

  const handleCopy = () => {
    const name = selectedBreed || presetBreedName || 'Dog';
    const text = `${name} Age: ${totalAgeYears.toFixed(1)} years = ${Math.round(humanYears)} human years (${lifeStage})`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const progressPercent = Math.min(100, Math.round((humanYears / 100) * 100));

  return (
    <div className="bg-white rounded-3xl border border-[#E8E4DC] p-6 md:p-8 max-w-3xl mx-auto my-4 space-y-6 shadow-warm-xs">
      <div className="flex items-center justify-between pb-4 border-b border-[#E8E4DC]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8E4DC] text-[#162737] flex items-center justify-center font-bold">
            <Calculator className="w-5 h-5 text-[#162737]" />
          </div>
          <div>
            <h2 className="text-xl font-serif font-bold text-[#1C1917]">
              {presetBreedName ? `${presetBreedName} Age Calculator` : 'Canine Age Converter'}
            </h2>
            <p className="text-xs font-normal text-stone-500 font-sans">Biological age based on epigenetic DNA clock math</p>
          </div>
        </div>

        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 text-xs font-semibold text-stone-600 px-3 py-1.5 rounded-full border border-[#E8E4DC] hover:bg-stone-50 transition-colors shadow-warm-xs"
        >
          <RefreshCw className="w-3.5 h-3.5 text-stone-400" /> Reset
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {!presetBreedName && (
          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">
              Select Breed (Optional Auto-Fill)
            </label>
            <select
              value={selectedBreed}
              onChange={handleBreedChange}
              className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-4 py-2.5 text-stone-900 text-xs font-medium focus:outline-none focus:border-[#0B63E5]"
            >
              <option value="">Custom Breed / Mixed Breed</option>
              {TOP_BREEDS.map((b) => (
                <option key={b.name} value={b.name}>
                  {b.name} ({b.size} size)
                </option>
              ))}
            </select>
          </div>
        )}

        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">
            Dog&apos;s Age: <span className="text-[#0B63E5] font-extrabold">{ageYears} Years</span>
          </label>
          <input
            type="range"
            min="0"
            max="20"
            step="0.5"
            value={ageYears}
            onChange={(e) => setAgeYears(parseFloat(e.target.value))}
            className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#0B63E5]"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">
            Additional Months
          </label>
          <select
            value={ageMonths}
            onChange={(e) => setAgeMonths(parseInt(e.target.value))}
            className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-4 py-2.5 text-stone-900 text-xs font-medium focus:outline-none focus:border-[#0B63E5]"
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
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">
              Breed Size Category
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
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
                  className={`p-3 rounded-2xl border text-center transition-all ${
                    sizeClass === item.id
                      ? 'border-[#162737] bg-[#162737] text-white font-bold shadow-warm-xs'
                      : 'border-[#E8E4DC] bg-[#FAF8F5] text-stone-700 font-medium hover:bg-white'
                  }`}
                >
                  <div className="text-xs">{item.label}</div>
                  <div className="text-[10px] opacity-75 font-normal">{item.sub}</div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* RESULT DISPLAY CARD - GOOD DOG MIDNIGHT NAVY & WARM BUTTER BADGE */}
      <div className="bg-[#162737] text-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between gap-5 border border-[#0D1A25] shadow-warm-md">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="text-stone-300 text-xs font-medium uppercase tracking-wider mb-1 font-sans">Human Equivalent Age</div>
            <div className="text-4xl sm:text-5xl font-serif font-bold text-white">
              {Math.round(humanYears)}{' '}
              <span className="text-lg text-stone-300 font-sans font-normal">human years</span>
            </div>
            <div className="mt-1 text-xs text-stone-400 font-normal">
              Based on {totalAgeYears.toFixed(1)} calendar years in {sizeClass} breed class
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${lifeStageBadge}`}>
              {lifeStage}
            </span>

            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-1.5 text-xs font-semibold bg-[#0B63E5] hover:bg-[#094EB8] text-white px-4 py-2 rounded-full transition-all shadow-warm-xs"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5 text-white" />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* Visual Progress Bar */}
        <div className="space-y-1.5 pt-3 border-t border-white/10">
          <div className="flex justify-between text-[11px] text-stone-300 font-sans">
            <span>Life Stage Progress</span>
            <span className="text-white font-medium">{progressPercent}% of Human Life Scale</span>
          </div>
          <div className="w-full bg-[#0D1A25] rounded-full h-2 overflow-hidden">
            <div
              className="bg-[#0B63E5] h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
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
    <div className="bg-white rounded-3xl border border-[#E8E4DC] p-6 md:p-8 max-w-3xl mx-auto my-4 space-y-6 shadow-warm-xs">
      <h3 className="text-xl font-serif font-bold text-[#1C1917]">Puppy Milestone &amp; Age Tracker</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">
            Puppy Age: <span className="text-[#0B63E5] font-extrabold">{weeks} Weeks</span>
          </label>
          <input
            type="range"
            min="1"
            max="24"
            value={weeks}
            onChange={(e) => setWeeks(parseInt(e.target.value))}
            className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#0B63E5]"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">Target Breed Size</label>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value as any)}
            className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-4 py-2.5 text-stone-900 text-xs font-medium focus:outline-none focus:border-[#0B63E5]"
          >
            <option value="small">Small Breed (&lt; 20 lbs)</option>
            <option value="medium">Medium Breed (21-50 lbs)</option>
            <option value="large">Large Breed (51-90 lbs)</option>
            <option value="giant">Giant Breed (&gt; 90 lbs)</option>
          </select>
        </div>
      </div>

      <div className="bg-[#162737] text-white rounded-3xl p-6 border border-[#0D1A25] space-y-3 shadow-warm-sm">
        <div className="flex items-center gap-2 text-[#FDF1D0] font-bold text-sm font-sans">
          <CheckCircle2 className="w-4 h-4 text-[#FDF1D0]" />
          <span>Developmental Phase: {milestone}</span>
        </div>
        <p className="text-xs text-stone-300 leading-relaxed font-normal">{desc}</p>
        <div className="mt-3 text-xs text-white font-semibold border-t border-white/10 pt-2.5 uppercase font-sans">
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
    <div className="bg-white rounded-3xl border border-[#E8E4DC] p-6 md:p-8 max-w-3xl mx-auto my-4 space-y-6 shadow-warm-xs">
      <h3 className="text-xl font-serif font-bold text-[#1C1917]">Side-by-Side Small vs Large Breed Aging</h3>
      <div>
        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">
          Calendar Age: <span className="text-[#0B63E5] font-extrabold">{age} Years</span>
        </label>
        <input
          type="range"
          min="1"
          max="16"
          value={age}
          onChange={(e) => setAge(parseInt(e.target.value))}
          className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#0B63E5]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#FAF8F5] text-stone-900 rounded-3xl p-6 text-center border border-[#E8E4DC] shadow-warm-xs">
          <div className="text-xs uppercase font-bold text-stone-500 font-sans">Small Breed (&lt;20 lbs)</div>
          <div className="text-4xl font-serif font-bold text-[#1C1917] my-2">{smallHuman} Yrs</div>
          <div className="text-xs text-stone-500 font-sans">Aging Rate: ~4 yrs/yr</div>
        </div>

        <div className="bg-[#162737] text-white rounded-3xl p-6 text-center border border-[#0D1A25] shadow-warm-xs">
          <div className="text-xs uppercase font-medium text-stone-300 font-sans">Large Breed (&gt;60 lbs)</div>
          <div className="text-4xl font-serif font-bold text-[#FDF1D0] my-2">{largeHuman} Yrs</div>
          <div className="text-xs text-stone-300 font-sans">Aging Rate: ~6.5 yrs/yr</div>
        </div>
      </div>
    </div>
  );
}
