'use client';

import React, { useState } from 'react';
import { Scale, Flame, Utensils, Award, AlertTriangle, Activity, RefreshCw, Copy, Check } from 'lucide-react';
import { formatNumber, formatCurrency } from '@/lib/utils';

export function DogWeightCalculatorWidget() {
  const [unit, setUnit] = useState<'lbs' | 'kg'>('kg');
  const [weight, setWeight] = useState<number>(30);
  const [bcs, setBcs] = useState<number>(7);
  const [copied, setCopied] = useState<boolean>(false);

  const currentWeight = weight || 1;
  const weightKg = unit === 'lbs' ? currentWeight / 2.20462 : currentWeight;
  
  const percentageDev = (bcs - 5) * 0.10;
  const idealWeightKg = weightKg / (1 + percentageDev);
  const idealWeightUser = unit === 'lbs' ? idealWeightKg * 2.20462 : idealWeightKg;
  const differenceUser = currentWeight - idealWeightUser;

  let statusText = 'Ideal Healthy Weight';
  let statusBg = 'bg-slate-100 text-slate-900 border-slate-300';
  if (bcs < 4) {
    statusText = 'Underweight (Calorie Deficit)';
    statusBg = 'bg-slate-100 text-slate-900 border-slate-300';
  } else if (bcs > 5) {
    statusText = `Overweight by ~${Math.round(Math.abs(percentageDev * 100))}%`;
    statusBg = 'bg-slate-100 text-slate-900 border-slate-300';
  }

  const handleCopy = () => {
    const text = `Current Weight: ${currentWeight} ${unit} (BCS ${bcs}/9). Ideal Target: ${formatNumber(idealWeightUser, 1)} ${unit}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-card max-w-3xl mx-auto my-6 space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">Dog Ideal Weight & Target Calculator</h3>
            <p className="text-xs text-slate-500">Based on WSAVA Body Condition Score (BCS 1-9)</p>
          </div>
        </div>
        <div className="flex bg-slate-100 p-1 rounded-xl">
          <button
            onClick={() => setUnit('kg')}
            className={`px-3 py-1 rounded-lg text-xs font-bold ${unit === 'kg' ? 'bg-white text-slate-900 shadow-subtle' : 'text-slate-500'}`}
          >
            KG
          </button>
          <button
            onClick={() => setUnit('lbs')}
            className={`px-3 py-1 rounded-lg text-xs font-bold ${unit === 'lbs' ? 'bg-white text-slate-900 shadow-subtle' : 'text-slate-500'}`}
          >
            LBS
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Current Weight ({unit.toUpperCase()})
          </label>
          <input
            type="number"
            min="1"
            max="200"
            value={weight}
            onChange={(e) => setWeight(parseFloat(e.target.value) || 0)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-900 font-bold text-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Body Condition Score (BCS 1-9): <span className="text-slate-900 font-bold">{bcs} / 9</span>
          </label>
          <input
            type="range"
            min="1"
            max="9"
            step="1"
            value={bcs}
            onChange={(e) => setBcs(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
          />
          <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-semibold">
            <span>1 (Emaciated)</span>
            <span className="text-slate-900 font-bold">5 (Ideal)</span>
            <span>9 (Obese)</span>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Target Healthy Weight</div>
          <div className="text-3xl md:text-4xl font-black text-emerald-400 mt-1">
            {formatNumber(idealWeightUser, 1)} {unit}
          </div>
          {differenceUser !== 0 && (
            <div className="text-xs text-slate-300 mt-1">
              {differenceUser > 0 ? `Target Fat Loss: -${formatNumber(differenceUser, 1)} ${unit}` : `Target Weight Gain: +${formatNumber(Math.abs(differenceUser), 1)} ${unit}`}
            </div>
          )}
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className={`px-4 py-1.5 rounded-full text-xs font-bold border ${statusBg}`}>
            {statusText}
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 px-3.5 py-1.5 rounded-xl border border-slate-700 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied!' : 'Copy Result'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export function DogCalorieCalculatorWidget() {
  const [weightKg, setWeightKg] = useState<number>(15);
  const [multiplier, setMultiplier] = useState<number>(1.6);
  const [copied, setCopied] = useState<boolean>(false);

  const currentKg = weightKg || 1;
  const rer = 70 * Math.pow(currentKg, 0.75);
  const mer = rer * multiplier;

  const handleCopy = () => {
    const text = `Dog Weight: ${currentKg} kg (${(currentKg * 2.20462).toFixed(1)} lbs). RER: ${Math.round(rer)} kcal. Daily MER Calorie Target: ${Math.round(mer)} kcal/day.`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-card max-w-3xl mx-auto my-6 space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
            <Flame className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">Dog Daily Calorie Calculator (RER / MER)</h3>
            <p className="text-xs text-slate-500">Scientific metabolic equation: RER = 70 × (Weight kg)^0.75</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Dog Weight: <span className="text-slate-900 font-bold">{currentKg} kg ({(currentKg * 2.20462).toFixed(1)} lbs)</span>
          </label>
          <input
            type="range"
            min="1"
            max="80"
            value={currentKg}
            onChange={(e) => setWeightKg(parseFloat(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Life Stage / Activity Factor</label>
          <select
            value={multiplier}
            onChange={(e) => setMultiplier(parseFloat(e.target.value))}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-slate-800 font-medium focus:ring-2 focus:ring-slate-900 focus:outline-none"
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

      <div className="bg-slate-900 text-white rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="grid grid-cols-2 gap-6 w-full sm:w-auto">
          <div>
            <div className="text-xs text-slate-400 font-semibold uppercase">Resting (RER)</div>
            <div className="text-2xl font-bold text-slate-200 mt-1">{Math.round(rer)} kcal</div>
          </div>
          <div>
            <div className="text-xs text-amber-400 font-semibold uppercase">Daily Need (MER)</div>
            <div className="text-3xl font-black text-amber-400 mt-1">{Math.round(mer)} kcal/day</div>
          </div>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-xl border border-slate-700 transition-colors"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
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
  const gramsPerDay = (calories / 380) * 100;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-card max-w-3xl mx-auto my-6 space-y-6">
      <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
        <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
          <Utensils className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">Dog Food Portion Calculator</h3>
          <p className="text-xs text-slate-500">Calculate exact cups & grams per meal</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">Target Daily Calories (kcal)</label>
          <input
            type="number"
            value={dailyCalories}
            onChange={(e) => setDailyCalories(parseInt(e.target.value) || 0)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 font-bold"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">Food Kcal per Cup</label>
          <input
            type="number"
            value={kibbleKcalPerCup}
            onChange={(e) => setKibbleKcalPerCup(parseInt(e.target.value) || 1)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 font-bold"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">Meals per Day</label>
          <select
            value={mealsPerDay}
            onChange={(e) => setMealsPerDay(parseInt(e.target.value))}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800 font-medium"
          >
            <option value={1}>1 Meal / Day</option>
            <option value={2}>2 Meals / Day</option>
            <option value={3}>3 Meals / Day</option>
          </select>
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <div className="text-xs text-slate-400 font-semibold uppercase">Total Daily Portion</div>
          <div className="text-3xl font-black text-amber-400 mt-1">{formatNumber(totalCups, 2)} cups</div>
          <div className="text-xs text-slate-300">(~{Math.round(gramsPerDay)} grams total per day)</div>
        </div>
        <div className="border-t sm:border-t-0 sm:border-l border-slate-700 pt-4 sm:pt-0 sm:pl-6">
          <div className="text-xs text-slate-400 font-semibold uppercase">Amount Per Meal</div>
          <div className="text-3xl font-black text-emerald-400 mt-1">{formatNumber(cupsPerMeal, 2)} cups</div>
          <div className="text-xs text-slate-300">Split into {meals} meals daily</div>
        </div>
      </div>
    </div>
  );
}

export function RawDietCalculatorWidget() {
  const [weightKg, setWeightKg] = useState<number>(20);
  const [feedPercent, setFeedPercent] = useState<number>(2.5);
  const [model, setModel] = useState<'BARF' | 'PMR'>('BARF');

  const currentKg = weightKg || 1;
  const totalRawGrams = currentKg * 1000 * (feedPercent / 100);
  
  const muscleMeat = model === 'BARF' ? totalRawGrams * 0.70 : totalRawGrams * 0.80;
  const bone = totalRawGrams * 0.10;
  const liver = totalRawGrams * 0.05;
  const organ = totalRawGrams * 0.05;
  const veg = model === 'BARF' ? totalRawGrams * 0.10 : 0;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-card max-w-3xl mx-auto my-6 space-y-6">
      <h3 className="text-xl font-bold text-slate-900">Raw Diet Ratio Calculator ({model} Model)</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">Model Standard</label>
          <div className="flex bg-slate-100 p-1 rounded-xl">
            <button
              type="button"
              onClick={() => setModel('BARF')}
              className={`flex-1 py-1 text-xs font-bold rounded-lg ${model === 'BARF' ? 'bg-slate-900 text-white shadow-subtle' : 'text-slate-500'}`}
            >
              BARF (70/10/10/10)
            </button>
            <button
              type="button"
              onClick={() => setModel('PMR')}
              className={`flex-1 py-1 text-xs font-bold rounded-lg ${model === 'PMR' ? 'bg-slate-900 text-white shadow-subtle' : 'text-slate-500'}`}
            >
              PMR (80/10/10)
            </button>
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">Dog Weight (kg)</label>
          <input
            type="number"
            value={weightKg}
            onChange={(e) => setWeightKg(parseFloat(e.target.value) || 0)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-slate-900 font-bold"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">Daily Ratio %</label>
          <select
            value={feedPercent}
            onChange={(e) => setFeedPercent(parseFloat(e.target.value))}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-slate-800 font-medium"
          >
            <option value={2.0}>2.0% (Senior / Inactive)</option>
            <option value={2.5}>2.5% (Standard Adult)</option>
            <option value={3.0}>3.0% (Active Adult)</option>
            <option value={4.0}>4.0% (Highly Active)</option>
          </select>
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-2xl p-6">
        <div className="text-center pb-4 mb-4 border-b border-slate-800">
          <div className="text-xs text-slate-400 uppercase font-semibold">Total Daily Raw Amount</div>
          <div className="text-4xl font-black text-amber-400 mt-1">{Math.round(totalRawGrams)} grams / day</div>
          <div className="text-xs text-slate-400">({(totalRawGrams / 28.3495).toFixed(1)} oz / day)</div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
          <div className="bg-slate-800 p-3 rounded-xl">
            <div className="text-slate-400 font-medium">Muscle Meat</div>
            <div className="text-lg font-bold text-white mt-1">{Math.round(muscleMeat)}g</div>
          </div>
          <div className="bg-slate-800 p-3 rounded-xl">
            <div className="text-slate-400 font-medium">Edible Bone</div>
            <div className="text-lg font-bold text-white mt-1">{Math.round(bone)}g</div>
          </div>
          <div className="bg-slate-800 p-3 rounded-xl">
            <div className="text-slate-400 font-medium">Liver & Organ</div>
            <div className="text-lg font-bold text-white mt-1">{Math.round(liver + organ)}g</div>
          </div>
          {model === 'BARF' && (
            <div className="bg-slate-800 p-3 rounded-xl">
              <div className="text-slate-400 font-medium">Veggies / Seeds</div>
              <div className="text-lg font-bold text-emerald-400 mt-1">{Math.round(veg)}g</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function PuppyGrowthPredictorWidget() {
  const [weightKg, setWeightKg] = useState<number>(10);
  const [ageWeeks, setAgeWeeks] = useState<number>(16);

  const currentKg = weightKg || 1;
  const currentWeeks = ageWeeks || 8;
  const growthFactor = currentWeeks <= 12 ? 0.35 : currentWeeks <= 16 ? 0.52 : currentWeeks <= 24 ? 0.70 : 0.90;
  const predictedAdultKg = currentKg / growthFactor;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-card max-w-3xl mx-auto my-6 space-y-6">
      <h3 className="text-xl font-bold text-slate-900">Puppy Growth & Adult Weight Predictor</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Current Puppy Weight (kg)</label>
          <input
            type="number"
            value={weightKg}
            onChange={(e) => setWeightKg(parseFloat(e.target.value) || 0)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-slate-900 font-bold"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Current Age: {currentWeeks} Weeks</label>
          <input
            type="range"
            min="8"
            max="36"
            value={currentWeeks}
            onChange={(e) => setAgeWeeks(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
          />
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-2xl p-6 text-center">
        <div className="text-xs text-slate-400 font-semibold uppercase">Estimated Full Adult Weight</div>
        <div className="text-4xl font-black text-emerald-400 my-2">
          {formatNumber(predictedAdultKg, 1)} kg{' '}
          <span className="text-lg text-slate-300 font-normal">({formatNumber(predictedAdultKg * 2.20462, 1)} lbs)</span>
        </div>
        <p className="text-xs text-slate-400">Target Range: {formatNumber(predictedAdultKg * 0.9, 1)} - {formatNumber(predictedAdultKg * 1.1, 1)} kg</p>
      </div>
    </div>
  );
}
