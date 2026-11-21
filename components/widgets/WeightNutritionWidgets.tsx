'use client';

import React, { useState } from 'react';
import { Scale, Flame, Utensils, Copy, Check, HeartPulse, Sparkles } from 'lucide-react';
import { formatNumber } from '@/lib/utils';

export function DogWeightCalculatorWidget() {
  const [unit, setUnit] = useState<'lbs' | 'kg'>('lbs');
  const [weight, setWeight] = useState<number>(50);
  const [bcs, setBcs] = useState<number>(7);
  const [copied, setCopied] = useState<boolean>(false);

  const currentWeight = weight || 1;
  const weightKg = unit === 'lbs' ? currentWeight / 2.20462 : currentWeight;

  const percentageDev = (bcs - 5) * 0.10;
  const idealWeightKg = weightKg / (1 + percentageDev);
  const idealWeightUser = unit === 'lbs' ? idealWeightKg * 2.20462 : idealWeightKg;
  const differenceUser = currentWeight - idealWeightUser;

  let statusText = 'Ideal Healthy Weight';
  let statusBg = 'bg-[#EBF2FE] text-[#0B63E5] border border-[#B8D4F7]';
  if (bcs < 4) {
    statusText = 'Underweight (Calorie Deficit)';
    statusBg = 'bg-amber-500/20 text-amber-200 border border-amber-500/40';
  } else if (bcs > 5) {
    statusText = `Overweight by ~${Math.round(Math.abs(percentageDev * 100))}%`;
    statusBg = 'bg-rose-500/20 text-rose-200 border border-rose-500/40';
  }

  const handleCopy = () => {
    const text = `Current Weight: ${currentWeight} ${unit} (BCS ${bcs}/9). Ideal Target: ${formatNumber(idealWeightUser, 1)} ${unit}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-3xl border border-[#E8E4DC] p-6 md:p-8 max-w-3xl mx-auto my-6 space-y-6 shadow-warm-xs">
      <div className="flex items-center justify-between pb-4 border-b border-[#E8E4DC]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#162737] text-white flex items-center justify-center font-bold shadow-warm-xs">
            <Scale className="w-5 h-5 text-[#0B63E5]" />
          </div>
          <div>
            <h3 className="text-xl font-serif font-bold text-[#1C1917]">Dog Ideal Weight &amp; Target Calculator</h3>
            <p className="text-xs text-stone-500 font-sans">WSAVA Body Condition Score (BCS 1-9)</p>
          </div>
        </div>
        <div className="flex bg-[#FAF8F5] p-1 rounded-full border border-[#E8E4DC]">
          <button
            onClick={() => setUnit('kg')}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${unit === 'kg' ? 'bg-[#162737] text-white shadow-warm-xs' : 'text-stone-600 hover:text-stone-900'}`}
          >
            KG
          </button>
          <button
            onClick={() => setUnit('lbs')}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${unit === 'lbs' ? 'bg-[#162737] text-white shadow-warm-xs' : 'text-stone-600 hover:text-stone-900'}`}
          >
            LBS
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">
            Current Weight ({unit.toUpperCase()})
          </label>
          <input
            type="number"
            min="1"
            max="200"
            value={weight}
            onChange={(e) => setWeight(parseFloat(e.target.value) || 0)}
            className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-4 py-2.5 text-stone-900 font-bold text-base focus:outline-none focus:border-[#0B63E5]"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">
            Body Condition Score (BCS): <span className="text-[#0B63E5] font-extrabold">{bcs} / 9</span>
          </label>
          <input
            type="range"
            min="1"
            max="9"
            step="1"
            value={bcs}
            onChange={(e) => setBcs(parseInt(e.target.value))}
            className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#0B63E5]"
          />
          <div className="flex justify-between text-[10px] text-stone-400 mt-1 font-medium font-sans">
            <span>1 (Emaciated)</span>
            <span className="text-[#0B63E5] font-bold">5 (Ideal)</span>
            <span>9 (Obese)</span>
          </div>
        </div>
      </div>

      <div className="bg-[#162737] text-white rounded-3xl p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#0D1A25] shadow-warm-sm">
        <div>
          <div className="text-stone-300 text-xs font-bold uppercase tracking-wider font-sans">Target Healthy Weight</div>
          <div className="text-4xl font-serif font-bold text-[#FDF1D0] mt-1">
            {formatNumber(idealWeightUser, 1)} {unit}
          </div>
          {differenceUser !== 0 && (
            <div className="text-xs text-stone-300 mt-1 font-medium">
              {differenceUser > 0 ? `Target Fat Loss: -${formatNumber(differenceUser, 1)} ${unit}` : `Target Weight Gain: +${formatNumber(Math.abs(differenceUser), 1)} ${unit}`}
            </div>
          )}
        </div>
        <div className="flex flex-col items-end gap-2.5">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusBg}`}>
            {statusText}
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs font-semibold bg-[#0B63E5] hover:bg-[#094EB8] text-white px-4 py-2 rounded-full transition-all shadow-warm-xs"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5 text-white" />}
            <span>{copied ? 'Copied!' : 'Copy Result'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export function DogCalorieCalculatorWidget() {
  const [unit, setUnit] = useState<'lbs' | 'kg'>('lbs');
  const [weightInput, setWeightInput] = useState<number>(33);
  const [multiplier, setMultiplier] = useState<number>(1.6);
  const [copied, setCopied] = useState<boolean>(false);

  const weightKg = unit === 'lbs' ? weightInput / 2.20462 : weightInput;
  const currentKg = weightKg || 1;
  const rer = 70 * Math.pow(currentKg, 0.75);
  const mer = rer * multiplier;

  const handleCopy = () => {
    const text = `Dog Weight: ${weightInput} ${unit}. RER: ${Math.round(rer)} kcal. Daily MER Target: ${Math.round(mer)} kcal/day.`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-3xl border border-[#E8E4DC] p-6 md:p-8 max-w-3xl mx-auto my-6 space-y-6 shadow-warm-xs">
      <div className="flex items-center justify-between pb-4 border-b border-[#E8E4DC]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#162737] text-white flex items-center justify-center font-bold shadow-warm-xs">
            <Flame className="w-5 h-5 text-[#0B63E5]" />
          </div>
          <div>
            <h3 className="text-xl font-serif font-bold text-[#1C1917]">Daily Calorie &amp; Portion Calculator</h3>
            <p className="text-xs text-stone-500 font-sans">Resting Energy Requirement: RER = 70 × (Weight kg)^0.75</p>
          </div>
        </div>

        <div className="flex bg-[#FAF8F5] p-1 rounded-full border border-[#E8E4DC]">
          <button
            onClick={() => setUnit('lbs')}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${unit === 'lbs' ? 'bg-[#162737] text-white shadow-warm-xs' : 'text-stone-600 hover:text-stone-900'}`}
          >
            LBS
          </button>
          <button
            onClick={() => setUnit('kg')}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${unit === 'kg' ? 'bg-[#162737] text-white shadow-warm-xs' : 'text-stone-600 hover:text-stone-900'}`}
          >
            KG
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">
            Dog Weight: <span className="text-[#0B63E5] font-extrabold">{weightInput} {unit}</span>
          </label>
          <input
            type="range"
            min="2"
            max="180"
            value={weightInput}
            onChange={(e) => setWeightInput(parseFloat(e.target.value))}
            className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#0B63E5]"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">Life Stage / Activity Factor</label>
          <select
            value={multiplier}
            onChange={(e) => setMultiplier(parseFloat(e.target.value))}
            className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-4 py-2.5 text-stone-900 text-xs font-bold focus:outline-none focus:border-[#0B63E5]"
          >
            <option value={1.6}>Neutered Adult (1.6x RER)</option>
            <option value={1.8}>Intact Adult (1.8x RER)</option>
            <option value={1.0}>Weight Loss Plan (1.0x RER)</option>
            <option value={1.2}>Senior / Inactive (1.2x RER)</option>
            <option value={2.0}>Active / Working Dog (2.0x RER)</option>
            <option value={3.0}>Puppy under 4 months (3.0x RER)</option>
            <option value={2.0}>Puppy 4-12 months (2.0x RER)</option>
          </select>
        </div>
      </div>

      <div className="bg-[#162737] text-white rounded-3xl p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-5 border border-[#0D1A25] shadow-warm-sm">
        <div className="grid grid-cols-2 gap-8 w-full sm:w-auto">
          <div>
            <div className="text-xs text-stone-300 font-bold uppercase font-sans">Resting Energy (RER)</div>
            <div className="text-2xl font-bold font-mono text-white mt-1">{Math.round(rer)} kcal</div>
          </div>
          <div>
            <div className="text-xs text-stone-300 font-bold uppercase font-sans">Daily Target (MER)</div>
            <div className="text-4xl font-serif font-bold text-[#FDF1D0] mt-1">{Math.round(mer)} kcal/day</div>
          </div>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs font-semibold bg-[#0B63E5] hover:bg-[#094EB8] text-white px-5 py-2.5 rounded-full transition-all shadow-warm-xs"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5 text-white" />}
          <span>{copied ? 'Copied!' : 'Copy Result'}</span>
        </button>
      </div>
    </div>
  );
}

export function DogFoodPortionWidget() {
  const [dailyCalories, setDailyCalories] = useState<number>(850);
  const [kibbleKcalPerCup, setKibbleKcalPerCup] = useState<number>(380);
  const [mealsPerDay, setMealsPerDay] = useState<number>(2);

  const calories = dailyCalories || 1;
  const kcalCup = kibbleKcalPerCup || 1;
  const meals = mealsPerDay || 1;

  const totalCups = calories / kcalCup;
  const cupsPerMeal = totalCups / meals;

  return (
    <div className="bg-white rounded-3xl border border-[#E8E4DC] p-6 md:p-8 max-w-3xl mx-auto my-6 space-y-6 shadow-warm-xs">
      <div className="flex items-center gap-3 pb-4 border-b border-[#E8E4DC]">
        <div className="w-10 h-10 rounded-2xl bg-[#162737] text-white flex items-center justify-center font-bold shadow-warm-xs">
          <Utensils className="w-5 h-5 text-[#0B63E5]" />
        </div>
        <div>
          <h3 className="text-xl font-serif font-bold text-[#1C1917]">Kibble Portion Calculator</h3>
          <p className="text-xs text-stone-500 font-sans">Calculate exact cups per daily meal</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">Daily Calories (kcal)</label>
          <input
            type="number"
            value={dailyCalories}
            onChange={(e) => setDailyCalories(parseFloat(e.target.value) || 0)}
            className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-4 py-2.5 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5]"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">Kibble kcal / Cup</label>
          <input
            type="number"
            value={kibbleKcalPerCup}
            onChange={(e) => setKibbleKcalPerCup(parseFloat(e.target.value) || 0)}
            className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-4 py-2.5 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5]"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">Meals per Day</label>
          <select
            value={mealsPerDay}
            onChange={(e) => setMealsPerDay(parseInt(e.target.value))}
            className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-4 py-2.5 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5]"
          >
            <option value={1}>1 Meal / Day</option>
            <option value={2}>2 Meals / Day</option>
            <option value={3}>3 Meals / Day</option>
          </select>
        </div>
      </div>

      <div className="bg-[#162737] text-white rounded-3xl p-6 sm:p-7 grid grid-cols-1 sm:grid-cols-2 gap-5 border border-[#0D1A25] shadow-warm-sm">
        <div>
          <div className="text-stone-300 text-xs font-bold uppercase font-sans">Total Daily Amount</div>
          <div className="text-3xl font-serif font-bold text-[#FDF1D0] mt-1">{formatNumber(totalCups, 2)} cups</div>
        </div>
        <div>
          <div className="text-stone-300 text-xs font-bold uppercase font-sans">Per Meal Portion</div>
          <div className="text-3xl font-serif font-bold text-white mt-1">{formatNumber(cupsPerMeal, 2)} cups / meal</div>
        </div>
      </div>
    </div>
  );
}

export function RawDietCalculatorWidget() {
  const [weightLbs, setWeightLbs] = useState<number>(50);
  const [percentage, setPercentage] = useState<number>(2.5);

  const currentLbs = weightLbs || 1;
  const totalDailyOz = currentLbs * (percentage / 100) * 16;
  const muscleMeatOz = totalDailyOz * 0.80;
  const rawBoneOz = totalDailyOz * 0.10;
  const organOz = totalDailyOz * 0.10;

  return (
    <div className="bg-white rounded-3xl border border-[#E8E4DC] p-6 md:p-8 max-w-3xl mx-auto my-6 space-y-6 shadow-warm-xs">
      <div className="flex items-center gap-3 pb-4 border-b border-[#E8E4DC]">
        <div className="w-10 h-10 rounded-2xl bg-[#162737] text-white flex items-center justify-center font-bold shadow-warm-xs">
          <Utensils className="w-5 h-5 text-[#0B63E5]" />
        </div>
        <div>
          <h3 className="text-xl font-serif font-bold text-[#1C1917]">BARF &amp; Raw Diet Ratio Calculator</h3>
          <p className="text-xs text-stone-500 font-sans">Standard 80:10:10 Raw Food Ratio Model</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">Dog Weight (lbs)</label>
          <input
            type="number"
            value={weightLbs}
            onChange={(e) => setWeightLbs(parseFloat(e.target.value) || 0)}
            className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-4 py-2.5 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5]"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">Daily Feeding Rate (% Body Weight)</label>
          <select
            value={percentage}
            onChange={(e) => setPercentage(parseFloat(e.target.value))}
            className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-4 py-2.5 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5]"
          >
            <option value={1.5}>1.5% (Senior / Weight Loss)</option>
            <option value={2.0}>2.0% (Low Activity Adult)</option>
            <option value={2.5}>2.5% (Standard Adult Maintenance)</option>
            <option value={3.0}>3.0% (Active / High Energy)</option>
            <option value={4.0}>4.0%+ (Puppies &amp; Working Dogs)</option>
          </select>
        </div>
      </div>

      <div className="bg-[#162737] text-white p-6 sm:p-7 rounded-3xl border border-[#0D1A25] space-y-4 shadow-warm-sm">
        <div className="text-center pb-3 border-b border-white/10">
          <div className="text-xs text-stone-300 font-bold uppercase tracking-wider font-sans">Total Raw Daily Intake</div>
          <div className="text-3xl font-serif font-bold text-[#FDF1D0] mt-1">{totalDailyOz.toFixed(1)} oz ({ (totalDailyOz / 16).toFixed(2) } lbs / day)</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs">
          <div className="bg-[#213547] p-4 rounded-2xl border border-white/10">
            <div className="text-stone-300 font-medium font-sans">Muscle Meat (80%)</div>
            <div className="text-xl font-serif font-bold text-white mt-1">{muscleMeatOz.toFixed(1)} oz</div>
          </div>
          <div className="bg-[#213547] p-4 rounded-2xl border border-white/10">
            <div className="text-stone-300 font-medium font-sans">Raw Edible Bone (10%)</div>
            <div className="text-xl font-serif font-bold text-white mt-1">{rawBoneOz.toFixed(1)} oz</div>
          </div>
          <div className="bg-[#213547] p-4 rounded-2xl border border-white/10">
            <div className="text-stone-300 font-medium font-sans">Organ Meat (10%)</div>
            <div className="text-xl font-serif font-bold text-[#FDF1D0] mt-1">{organOz.toFixed(1)} oz</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PuppyGrowthPredictorWidget() {
  const [currentWeightLbs, setCurrentWeightLbs] = useState<number>(18);
  const [ageWeeks, setAgeWeeks] = useState<number>(12);

  const weightKg = currentWeightLbs / 2.20462;
  const weeks = ageWeeks || 8;
  const growthFactor = Math.pow(52 / weeks, 0.75);
  const adultKg = weightKg * growthFactor;
  const adultLbs = adultKg * 2.20462;

  return (
    <div className="bg-white rounded-3xl border border-[#E8E4DC] p-6 md:p-8 max-w-3xl mx-auto my-6 space-y-6 shadow-warm-xs">
      <div className="flex items-center gap-3 pb-4 border-b border-[#E8E4DC]">
        <div className="w-10 h-10 rounded-2xl bg-[#162737] text-white flex items-center justify-center font-bold shadow-warm-xs">
          <Sparkles className="w-5 h-5 text-[#0B63E5]" />
        </div>
        <div>
          <h3 className="text-xl font-serif font-bold text-[#1C1917]">Puppy Adult Weight &amp; Size Predictor</h3>
          <p className="text-xs text-stone-500 font-sans">WSAVA Growth Velocity Standard Algorithm</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">Current Puppy Weight (lbs)</label>
          <input
            type="number"
            value={currentWeightLbs}
            onChange={(e) => setCurrentWeightLbs(parseFloat(e.target.value) || 0)}
            className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-4 py-2.5 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5]"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">Puppy Age (Weeks)</label>
          <input
            type="number"
            min="6"
            max="40"
            value={ageWeeks}
            onChange={(e) => setAgeWeeks(parseInt(e.target.value) || 12)}
            className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-4 py-2.5 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5]"
          />
        </div>
      </div>

      <div className="bg-[#162737] text-white p-6 sm:p-7 rounded-3xl border border-[#0D1A25] text-center space-y-2 shadow-warm-sm">
        <div className="text-xs text-stone-300 font-bold uppercase tracking-wider font-sans">Predicted Adult Weight</div>
        <div className="text-4xl sm:text-5xl font-serif font-bold text-[#FDF1D0]">
          {adultLbs.toFixed(1)} lbs ({adultKg.toFixed(1)} kg)
        </div>
        <p className="text-xs text-stone-300 font-medium">Estimated Target Range: {(adultLbs * 0.9).toFixed(1)} - {(adultLbs * 1.1).toFixed(1)} lbs</p>
      </div>
    </div>
  );
}
