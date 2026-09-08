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
  let statusBg = 'bg-[#B3C7F7]/20 text-[#B3C7F7] border border-[#8BABF1]/40';
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
    <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 max-w-3xl mx-auto my-6 space-y-6 shadow-xs">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#0073E6] text-white flex items-center justify-center font-bold">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Dog Ideal Weight & Target Calculator</h3>
            <p className="text-xs text-slate-500">WSAVA Body Condition Score (BCS 1-9)</p>
          </div>
        </div>
        <div className="flex bg-slate-100 p-1 rounded-xl">
          <button
            onClick={() => setUnit('kg')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${unit === 'kg' ? 'bg-[#0073E6] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
          >
            KG
          </button>
          <button
            onClick={() => setUnit('lbs')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${unit === 'lbs' ? 'bg-[#0073E6] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
          >
            LBS
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Current Weight ({unit.toUpperCase()})
          </label>
          <input
            type="number"
            min="1"
            max="200"
            value={weight}
            onChange={(e) => setWeight(parseFloat(e.target.value) || 0)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 font-bold text-base focus:outline-none focus:border-[#0073E6] focus:ring-1 focus:ring-[#0073E6]"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Body Condition Score (BCS): <span className="text-[#0073E6] font-extrabold">{bcs} / 9</span>
          </label>
          <input
            type="range"
            min="1"
            max="9"
            step="1"
            value={bcs}
            onChange={(e) => setBcs(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0073E6]"
          />
          <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-medium">
            <span>1 (Emaciated)</span>
            <span className="text-[#0073E6] font-bold">5 (Ideal)</span>
            <span>9 (Obese)</span>
          </div>
        </div>
      </div>

      <div className="bg-[#054FB9] text-white rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#0461CF]">
        <div>
          <div className="text-[#B3C7F7] text-xs font-bold uppercase tracking-wider">Target Healthy Weight</div>
          <div className="text-3xl font-extrabold text-white mt-1">
            {formatNumber(idealWeightUser, 1)} {unit}
          </div>
          {differenceUser !== 0 && (
            <div className="text-xs text-blue-100 mt-1">
              {differenceUser > 0 ? `Target Fat Loss: -${formatNumber(differenceUser, 1)} ${unit}` : `Target Weight Gain: +${formatNumber(Math.abs(differenceUser), 1)} ${unit}`}
            </div>
          )}
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className={`px-3 py-1 rounded-lg text-xs font-bold border ${statusBg}`}>
            {statusText}
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs font-semibold bg-[#0461CF] hover:bg-[#0073E6] text-white px-3.5 py-1.5 rounded-lg border border-[#8BABF1]/40 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[#B3C7F7]" /> : <Copy className="w-3.5 h-3.5 text-[#B3C7F7]" />}
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
    <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 max-w-3xl mx-auto my-6 space-y-6 shadow-xs">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#0073E6] text-white flex items-center justify-center font-bold">
            <Flame className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Daily Calorie & Portion Calculator</h3>
            <p className="text-xs text-slate-500">Resting Energy Requirement: RER = 70 × (Weight kg)^0.75</p>
          </div>
        </div>

        <div className="flex bg-slate-100 p-1 rounded-xl">
          <button
            onClick={() => setUnit('lbs')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${unit === 'lbs' ? 'bg-[#0073E6] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
          >
            LBS
          </button>
          <button
            onClick={() => setUnit('kg')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${unit === 'kg' ? 'bg-[#0073E6] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
          >
            KG
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Dog Weight: <span className="text-[#0073E6] font-extrabold">{weightInput} {unit}</span>
          </label>
          <input
            type="range"
            min="2"
            max="180"
            value={weightInput}
            onChange={(e) => setWeightInput(parseFloat(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0073E6]"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Life Stage / Activity Factor</label>
          <select
            value={multiplier}
            onChange={(e) => setMultiplier(parseFloat(e.target.value))}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-800 text-xs font-bold focus:outline-none focus:border-[#0073E6] focus:ring-1 focus:ring-[#0073E6]"
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

      <div className="bg-[#054FB9] text-white rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-5 border border-[#0461CF]">
        <div className="grid grid-cols-2 gap-6 w-full sm:w-auto">
          <div>
            <div className="text-xs text-[#B3C7F7] font-bold uppercase">Resting Energy (RER)</div>
            <div className="text-2xl font-bold text-white mt-1">{Math.round(rer)} kcal</div>
          </div>
          <div>
            <div className="text-xs text-[#B3C7F7] font-bold uppercase">Daily Target (MER)</div>
            <div className="text-3xl font-extrabold text-[#B3C7F7] mt-1">{Math.round(mer)} kcal/day</div>
          </div>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs font-semibold bg-[#0461CF] hover:bg-[#0073E6] text-white px-4 py-2 rounded-lg border border-[#8BABF1]/40 transition-colors"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-[#B3C7F7]" /> : <Copy className="w-3.5 h-3.5 text-[#B3C7F7]" />}
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
    <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 max-w-3xl mx-auto my-6 space-y-6 shadow-xs">
      <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
        <div className="w-10 h-10 rounded-xl bg-[#0073E6] text-white flex items-center justify-center font-bold">
          <Utensils className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900">Kibble Portion Calculator</h3>
          <p className="text-xs text-slate-500">Calculate exact cups per daily meal</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Daily Calories (kcal)</label>
          <input
            type="number"
            value={dailyCalories}
            onChange={(e) => setDailyCalories(parseFloat(e.target.value) || 0)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 font-bold text-sm focus:outline-none focus:border-[#0073E6]"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Kibble kcal / Cup</label>
          <input
            type="number"
            value={kibbleKcalPerCup}
            onChange={(e) => setKibbleKcalPerCup(parseFloat(e.target.value) || 0)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 font-bold text-sm focus:outline-none focus:border-[#0073E6]"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Meals per Day</label>
          <select
            value={mealsPerDay}
            onChange={(e) => setMealsPerDay(parseInt(e.target.value))}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 font-bold text-sm focus:outline-none focus:border-[#0073E6]"
          >
            <option value={1}>1 Meal / Day</option>
            <option value={2}>2 Meals / Day</option>
            <option value={3}>3 Meals / Day</option>
          </select>
        </div>
      </div>

      <div className="bg-[#054FB9] text-white rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 border border-[#0461CF]">
        <div>
          <div className="text-[#B3C7F7] text-xs font-bold uppercase">Total Daily Amount</div>
          <div className="text-3xl font-extrabold text-[#B3C7F7] mt-1">{formatNumber(totalCups, 2)} cups</div>
        </div>
        <div>
          <div className="text-[#B3C7F7] text-xs font-bold uppercase">Per Meal Portion</div>
          <div className="text-3xl font-extrabold text-white mt-1">{formatNumber(cupsPerMeal, 2)} cups / meal</div>
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
    <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 max-w-3xl mx-auto my-6 space-y-6 shadow-xs">
      <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
        <div className="w-10 h-10 rounded-xl bg-[#0073E6] text-white flex items-center justify-center font-bold">
          <Utensils className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900">BARF & Raw Diet Ratio Calculator</h3>
          <p className="text-xs text-slate-500">Standard 80:10:10 Raw Food Ratio Model</p>
        </div>
      </div>

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
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Daily Feeding Rate (% Body Weight)</label>
          <select
            value={percentage}
            onChange={(e) => setPercentage(parseFloat(e.target.value))}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 font-bold text-sm focus:outline-none focus:border-[#0073E6]"
          >
            <option value={1.5}>1.5% (Senior / Weight Loss)</option>
            <option value={2.0}>2.0% (Low Activity Adult)</option>
            <option value={2.5}>2.5% (Standard Adult Maintenance)</option>
            <option value={3.0}>3.0% (Active / High Energy)</option>
            <option value={4.0}>4.0%+ (Puppies & Working Dogs)</option>
          </select>
        </div>
      </div>

      <div className="bg-[#054FB9] text-white p-6 rounded-2xl border border-[#0461CF] space-y-4">
        <div className="text-center pb-3 border-b border-[#0461CF]">
          <div className="text-xs text-[#B3C7F7] font-bold uppercase tracking-wider">Total Raw Daily Intake</div>
          <div className="text-3xl font-extrabold text-[#B3C7F7] mt-1">{totalDailyOz.toFixed(1)} oz ({ (totalDailyOz / 16).toFixed(2) } lbs / day)</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs">
          <div className="bg-[#0461CF]/60 p-3 rounded-xl border border-[#8BABF1]/30">
            <div className="text-blue-100 font-medium">Muscle Meat (80%)</div>
            <div className="text-lg font-bold text-white mt-0.5">{muscleMeatOz.toFixed(1)} oz</div>
          </div>
          <div className="bg-[#0461CF]/60 p-3 rounded-xl border border-[#8BABF1]/30">
            <div className="text-blue-100 font-medium">Raw Edible Bone (10%)</div>
            <div className="text-lg font-bold text-white mt-0.5">{rawBoneOz.toFixed(1)} oz</div>
          </div>
          <div className="bg-[#0461CF]/60 p-3 rounded-xl border border-[#8BABF1]/30">
            <div className="text-blue-100 font-medium">Organ Meat (10%)</div>
            <div className="text-lg font-bold text-[#B3C7F7] mt-0.5">{organOz.toFixed(1)} oz</div>
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
    <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 max-w-3xl mx-auto my-6 space-y-6 shadow-xs">
      <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
        <div className="w-10 h-10 rounded-xl bg-[#0073E6] text-white flex items-center justify-center font-bold">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900">Puppy Adult Weight & Size Predictor</h3>
          <p className="text-xs text-slate-500">WSAVA Growth Velocity Standard Algorithm</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Current Puppy Weight (lbs)</label>
          <input
            type="number"
            value={currentWeightLbs}
            onChange={(e) => setCurrentWeightLbs(parseFloat(e.target.value) || 0)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 font-bold text-sm focus:outline-none focus:border-[#0073E6]"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Puppy Age (Weeks)</label>
          <input
            type="number"
            min="6"
            max="40"
            value={ageWeeks}
            onChange={(e) => setAgeWeeks(parseInt(e.target.value) || 12)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 font-bold text-sm focus:outline-none focus:border-[#0073E6]"
          />
        </div>
      </div>

      <div className="bg-[#054FB9] text-white p-6 rounded-2xl border border-[#0461CF] text-center space-y-2">
        <div className="text-xs text-[#B3C7F7] font-bold uppercase tracking-wider">Predicted Adult Weight</div>
        <div className="text-4xl font-extrabold text-[#B3C7F7]">
          {adultLbs.toFixed(1)} lbs ({adultKg.toFixed(1)} kg)
        </div>
        <p className="text-xs text-blue-100 font-medium">Estimated Target Range: {(adultLbs * 0.9).toFixed(1)} - {(adultLbs * 1.1).toFixed(1)} lbs</p>
      </div>
    </div>
  );
}
