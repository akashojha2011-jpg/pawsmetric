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
  let lifeStageBadge = 'bg-[#EBF2FE] text-[#054FB9] border border-[#D1E0FC]';
  if (totalAgeYears >= 1 && totalAgeYears < 3) {
    lifeStage = 'Young Adult';
  } else if (totalAgeYears >= 3 && totalAgeYears < 7) {
    lifeStage = 'Mature Adult';
  } else if (totalAgeYears >= 7) {
    lifeStage = 'Senior / Geriatric';
    lifeStageBadge = 'bg-[#EBF2FE] text-[#0461CF] border border-[#B3C7F7]';
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
    <div className="bg-white rounded-xl border border-[#D1E0FC] p-6 md:p-8 max-w-3xl mx-auto my-4 space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#054FB9] text-white flex items-center justify-center font-bold">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#054FB9]">
              {presetBreedName ? `${presetBreedName} Age Calculator` : 'Canine Age Converter'}
            </h2>
            <p className="text-xs font-normal text-slate-500">Biological age based on epigenetic DNA clock math</p>
          </div>
        </div>

        <button
          onClick={handleReset}
          className="flex items-center gap-1 text-xs font-medium text-slate-600 px-2.5 py-1.5 rounded-lg border border-[#D1E0FC] hover:bg-[#F4F7FC] transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5 text-[#0073E6]" /> Reset
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {!presetBreedName && (
          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-[#054FB9] uppercase tracking-wider mb-1.5">
              Select Breed (Optional Auto-Fill)
            </label>
            <select
              value={selectedBreed}
              onChange={handleBreedChange}
              className="w-full bg-[#F4F7FC] border border-[#D1E0FC] rounded-lg px-3.5 py-2 text-slate-800 text-xs font-medium focus:outline-none focus:border-[#0073E6]"
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
          <label className="block text-xs font-bold text-[#054FB9] uppercase tracking-wider mb-2">
            Dog's Age: <span className="text-[#054FB9] font-extrabold">{ageYears} Years</span>
          </label>
          <input
            type="range"
            min="0"
            max="20"
            step="0.5"
            value={ageYears}
            onChange={(e) => setAgeYears(parseFloat(e.target.value))}
            className="w-full h-2 bg-[#D1E0FC] rounded-lg appearance-none cursor-pointer accent-[#0073E6]"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#054FB9] uppercase tracking-wider mb-1.5">
            Additional Months
          </label>
          <select
            value={ageMonths}
            onChange={(e) => setAgeMonths(parseInt(e.target.value))}
            className="w-full bg-[#F4F7FC] border border-[#D1E0FC] rounded-lg px-3.5 py-2 text-slate-800 text-xs font-medium focus:outline-none focus:border-[#0073E6]"
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
            <label className="block text-xs font-bold text-[#054FB9] uppercase tracking-wider mb-2">
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
                  className={`p-2.5 rounded-lg border text-center transition-all ${
                    sizeClass === item.id
                      ? 'border-[#054FB9] bg-[#054FB9] text-white font-bold shadow-xs'
                      : 'border-[#D1E0FC] bg-[#F4F7FC] text-slate-700 font-medium hover:bg-white'
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

      {/* RESULT DISPLAY CARD WITH BLUE THEME & COPY BUTTON */}
      <div className="bg-[#054FB9] text-white rounded-xl p-6 flex flex-col justify-between gap-5 border border-[#0461CF]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="text-[#B3C7F7] text-xs font-medium uppercase tracking-wider mb-1">Human Equivalent Age</div>
            <div className="text-4xl font-extrabold text-white">
              {Math.round(humanYears)}{' '}
              <span className="text-base text-[#B3C7F7] font-normal">human years</span>
            </div>
            <div className="mt-1 text-xs text-[#B3C7F7] font-normal">
              Based on {totalAgeYears.toFixed(1)} calendar years in {sizeClass} breed class
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className={`px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider ${lifeStageBadge}`}>
              {lifeStage}
            </span>

            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-1.5 text-xs font-semibold bg-[#0073E6] hover:bg-[#0461CF] text-white px-3.5 py-2 rounded-lg border border-[#8BABF1]/30 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#B3C7F7]" /> : <Copy className="w-3.5 h-3.5 text-[#B3C7F7]" />}
              <span>{copied ? 'Copied!' : 'Copy Result'}</span>
            </button>
          </div>
        </div>

        {/* Visual Progress Bar */}
        <div className="space-y-1.5 pt-2 border-t border-[#0461CF]">
          <div className="flex justify-between text-[11px] text-[#B3C7F7]">
            <span>Life Stage Progress</span>
            <span className="text-white font-medium">{progressPercent}% of Human Life Scale</span>
          </div>
          <div className="w-full bg-[#0461CF] rounded-full h-2 overflow-hidden">
            <div
              className="bg-[#0073E6] h-2 rounded-full transition-all duration-300"
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
    <div className="bg-white rounded-xl border border-[#D1E0FC] p-6 md:p-8 max-w-3xl mx-auto my-4 space-y-6">
      <h3 className="text-base font-bold text-[#054FB9]">Puppy Milestone & Age Tracker</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#054FB9] uppercase tracking-wider mb-2">
            Puppy Age: <span className="text-[#054FB9] font-extrabold">{weeks} Weeks</span>
          </label>
          <input
            type="range"
            min="1"
            max="24"
            value={weeks}
            onChange={(e) => setWeeks(parseInt(e.target.value))}
            className="w-full h-2 bg-[#D1E0FC] rounded-lg appearance-none cursor-pointer accent-[#0073E6]"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-[#054FB9] uppercase tracking-wider mb-1.5">Target Breed Size</label>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value as any)}
            className="w-full bg-[#F4F7FC] border border-[#D1E0FC] rounded-lg px-3.5 py-2 text-slate-800 text-xs font-medium"
          >
            <option value="small">Small Breed (&lt; 20 lbs)</option>
            <option value="medium">Medium Breed (21-50 lbs)</option>
            <option value="large">Large Breed (51-90 lbs)</option>
            <option value="giant">Giant Breed (&gt; 90 lbs)</option>
          </select>
        </div>
      </div>

      <div className="bg-[#054FB9] text-white rounded-xl p-5 border border-[#0461CF] space-y-2">
        <div className="flex items-center gap-2 text-[#B3C7F7] font-bold text-sm">
          <CheckCircle2 className="w-4 h-4 text-[#0073E6]" />
          <span>Developmental Phase: {milestone}</span>
        </div>
        <p className="text-xs text-[#B3C7F7] leading-relaxed font-normal">{desc}</p>
        <div className="mt-3 text-xs text-white font-semibold border-t border-[#0461CF] pt-2 uppercase">
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
    <div className="bg-white rounded-xl border border-[#D1E0FC] p-6 md:p-8 max-w-3xl mx-auto my-4 space-y-6">
      <h3 className="text-base font-bold text-[#054FB9]">Side-by-Side Small vs Large Breed Aging</h3>
      <div>
        <label className="block text-xs font-bold text-[#054FB9] uppercase tracking-wider mb-2">
          Calendar Age: <span className="text-[#054FB9] font-extrabold">{age} Years</span>
        </label>
        <input
          type="range"
          min="1"
          max="16"
          value={age}
          onChange={(e) => setAge(parseInt(e.target.value))}
          className="w-full h-2 bg-[#D1E0FC] rounded-lg appearance-none cursor-pointer accent-[#0073E6]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#054FB9] text-white rounded-xl p-5 text-center border border-[#0461CF]">
          <div className="text-xs uppercase font-medium text-[#B3C7F7]">Small Breed (&lt;20 lbs)</div>
          <div className="text-3xl font-extrabold text-white my-2">{smallHuman} Yrs</div>
          <div className="text-xs text-[#B3C7F7]">Aging Rate: ~4 yrs/yr</div>
        </div>

        <div className="bg-[#054FB9] text-white rounded-xl p-5 text-center border border-[#0461CF]">
          <div className="text-xs uppercase font-medium text-[#B3C7F7]">Large Breed (&gt;60 lbs)</div>
          <div className="text-3xl font-extrabold text-[#B3C7F7] my-2">{largeHuman} Yrs</div>
          <div className="text-xs text-[#B3C7F7]">Aging Rate: ~6.5 yrs/yr</div>
        </div>
      </div>
    </div>
  );
}
