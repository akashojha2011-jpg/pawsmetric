'use client';

import React, { useState } from 'react';
import { Coins } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

export function LifetimeCostCalculatorWidget() {
  const [sizeClass, setSizeClass] = useState<'small' | 'medium' | 'large' | 'giant'>('medium');
  const [tier, setTier] = useState<'budget' | 'average' | 'premium'>('average');
  const [includeInsurance, setIncludeInsurance] = useState<boolean>(true);

  const lifespanMap = { small: 15, medium: 13, large: 11, giant: 9 };
  const initialSetupMap = { budget: 1200, average: 2200, premium: 3800 };
  const annualBaseMap = {
    small: { budget: 900, average: 1500, premium: 2800 },
    medium: { budget: 1100, average: 1800, premium: 3400 },
    large: { budget: 1400, average: 2400, premium: 4200 },
    giant: { budget: 1800, average: 3100, premium: 5500 },
  };

  const lifespan = lifespanMap[sizeClass];
  const initialCost = initialSetupMap[tier];
  let annualCost = annualBaseMap[sizeClass][tier];
  if (includeInsurance) annualCost += 600;

  const lifetimeTotal = initialCost + annualCost * lifespan + 2000;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 max-w-3xl mx-auto my-6 space-y-6 shadow-xs">
      <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
        <div className="w-10 h-10 rounded-xl bg-[#0073E6] text-white flex items-center justify-center font-bold">
          <Coins className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900">Dog Lifetime Cost of Ownership</h3>
          <p className="text-xs text-slate-500">Forecast complete lifetime financial investment</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Breed Size</label>
          <select
            value={sizeClass}
            onChange={(e) => setSizeClass(e.target.value as any)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 font-bold text-sm focus:outline-none focus:border-[#0073E6]"
          >
            <option value="small">Small (&lt; 20 lbs)</option>
            <option value="medium">Medium (21 - 50 lbs)</option>
            <option value="large">Large (51 - 90 lbs)</option>
            <option value="giant">Giant (&gt; 90 lbs)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Care Tier Standard</label>
          <select
            value={tier}
            onChange={(e) => setTier(e.target.value as any)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 font-bold text-sm focus:outline-none focus:border-[#0073E6]"
          >
            <option value="budget">Budget-Conscious</option>
            <option value="average">Standard / Average</option>
            <option value="premium">Premium Care & Fresh Food</option>
          </select>
        </div>

        <div className="flex items-center pt-6">
          <label className="flex items-center gap-2 text-xs font-bold text-slate-800 cursor-pointer">
            <input
              type="checkbox"
              checked={includeInsurance}
              onChange={(e) => setIncludeInsurance(e.target.checked)}
              className="w-4 h-4 text-[#0073E6] rounded focus:ring-[#0073E6]"
            />
            Include Pet Insurance (~$50/mo)
          </label>
        </div>
      </div>

      <div className="bg-[#054FB9] text-white p-6 md:p-8 rounded-2xl border border-[#0461CF] space-y-4">
        <div className="text-center pb-4 border-b border-[#0461CF]">
          <div className="text-xs text-[#B3C7F7] font-bold uppercase tracking-wider">Total Estimated Lifetime Cost</div>
          <div className="text-4xl font-extrabold text-[#B3C7F7] mt-1">{formatCurrency(lifetimeTotal)}</div>
          <div className="text-xs text-blue-100 font-medium mt-1">Over expected {lifespan}-year lifespan (~{formatCurrency(lifetimeTotal / (lifespan * 12))}/month)</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs">
          <div className="bg-[#0461CF]/60 p-3 rounded-xl border border-[#8BABF1]/30">
            <div className="text-blue-100 font-medium">1st Year Setup</div>
            <div className="text-lg font-bold text-white mt-0.5">{formatCurrency(initialCost)}</div>
          </div>
          <div className="bg-[#0461CF]/60 p-3 rounded-xl border border-[#8BABF1]/30">
            <div className="text-blue-100 font-medium">Annual Recurring</div>
            <div className="text-lg font-bold text-white mt-0.5">{formatCurrency(annualCost)} / yr</div>
          </div>
          <div className="bg-[#0461CF]/60 p-3 rounded-xl border border-[#8BABF1]/30">
            <div className="text-blue-100 font-medium">Senior Care Reserve</div>
            <div className="text-lg font-bold text-[#B3C7F7] mt-0.5">$2,000</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FoodCostCalculatorWidget() {
  const [bagPrice, setBagPrice] = useState<number>(65);
  const [bagLbs, setBagLbs] = useState<number>(30);
  const [cupsPerDay, setCupsPerDay] = useState<number>(2.5);

  const totalCupsInBag = (bagLbs || 1) * 3.8;
  const costPerCup = (bagPrice || 0) / (totalCupsInBag || 1);
  const dailyCost = (cupsPerDay || 0) * costPerCup;
  const monthlyCost = dailyCost * 30.4375;
  const annualCost = dailyCost * 365;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 max-w-3xl mx-auto my-6 space-y-6 shadow-xs">
      <h3 className="text-lg font-bold text-slate-900">Dog Food Expense & Budget Estimator</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Bag Price ($)</label>
          <input
            type="number"
            value={bagPrice}
            onChange={(e) => setBagPrice(parseFloat(e.target.value) || 0)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 font-bold text-sm focus:outline-none focus:border-[#0073E6]"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Bag Weight (lbs)</label>
          <input
            type="number"
            value={bagLbs}
            onChange={(e) => setBagLbs(parseFloat(e.target.value) || 1)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 font-bold text-sm focus:outline-none focus:border-[#0073E6]"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Daily Intake (Cups)</label>
          <input
            type="number"
            step="0.25"
            value={cupsPerDay}
            onChange={(e) => setCupsPerDay(parseFloat(e.target.value) || 0)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 font-bold text-sm focus:outline-none focus:border-[#0073E6]"
          />
        </div>
      </div>

      <div className="bg-[#054FB9] text-white p-6 rounded-2xl border border-[#0461CF] grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-xs text-[#B3C7F7] font-bold uppercase">Daily Cost</div>
          <div className="text-2xl font-extrabold text-white mt-1">{formatCurrency(dailyCost)} / day</div>
        </div>
        <div>
          <div className="text-xs text-[#B3C7F7] font-bold uppercase">Monthly Expense</div>
          <div className="text-3xl font-extrabold text-[#B3C7F7] mt-1">{formatCurrency(monthlyCost)} / mo</div>
        </div>
        <div>
          <div className="text-xs text-[#B3C7F7] font-bold uppercase">Annual Budget</div>
          <div className="text-2xl font-extrabold text-white mt-1">{formatCurrency(annualCost)} / yr</div>
        </div>
      </div>
    </div>
  );
}

export function InsuranceCostEstimatorWidget() {
  const [ageYears, setAgeYears] = useState<number>(3);
  const [breedRisk, setBreedRisk] = useState<'low' | 'medium' | 'high'>('medium');

  const baseRate = 35;
  const ageFactor = 1 + ageYears * 0.08;
  const riskFactor = breedRisk === 'low' ? 0.85 : breedRisk === 'medium' ? 1.1 : 1.45;
  const monthlyEst = baseRate * ageFactor * riskFactor;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 max-w-3xl mx-auto my-6 space-y-6 shadow-xs">
      <h3 className="text-lg font-bold text-slate-900">Pet Insurance Monthly Premium Estimator</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Dog Age (Years)</label>
          <input
            type="number"
            min="0"
            max="16"
            value={ageYears}
            onChange={(e) => setAgeYears(parseInt(e.target.value) || 0)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 font-bold text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Breed Genetic Health Risk</label>
          <select
            value={breedRisk}
            onChange={(e) => setBreedRisk(e.target.value as any)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 font-bold text-sm"
          >
            <option value="low">Low Risk (Mixed Breeds, Australian Cattle Dog)</option>
            <option value="medium">Standard Risk (Labrador, Golden Retriever)</option>
            <option value="high">High Risk (French Bulldog, Great Dane, Bernese)</option>
          </select>
        </div>
      </div>

      <div className="bg-[#054FB9] text-white p-6 rounded-2xl text-center border border-[#0461CF] space-y-2">
        <div className="text-xs text-[#B3C7F7] font-bold uppercase tracking-wider">Estimated Monthly Premium</div>
        <div className="text-4xl font-extrabold text-[#B3C7F7]">{formatCurrency(monthlyEst)} / mo</div>
        <p className="text-xs text-blue-100 font-medium">Based on 80% reimbursement with a $250 annual deductible.</p>
      </div>
    </div>
  );
}

export function PuppyFirstYearCostCalculatorWidget() {
  const [adoptionFee, setAdoptionFee] = useState<number>(350);
  const [spayNeuter, setSpayNeuter] = useState<number>(300);
  const [supplies, setSupplies] = useState<number>(400);
  const [vaccines, setVaccines] = useState<number>(250);

  const initialTotal = (adoptionFee || 0) + (spayNeuter || 0) + (supplies || 0) + (vaccines || 0);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 max-w-3xl mx-auto my-6 space-y-6 shadow-xs">
      <h3 className="text-lg font-bold text-slate-900">First-Year Puppy Cost Estimator</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Adoption / Breeder Fee ($)</label>
          <input
            type="number"
            value={adoptionFee}
            onChange={(e) => setAdoptionFee(parseFloat(e.target.value) || 0)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 font-bold text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Spay / Neuter Surgery ($)</label>
          <input
            type="number"
            value={spayNeuter}
            onChange={(e) => setSpayNeuter(parseFloat(e.target.value) || 0)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 font-bold text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Crate, Bed & Gear ($)</label>
          <input
            type="number"
            value={supplies}
            onChange={(e) => setSupplies(parseFloat(e.target.value) || 0)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 font-bold text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Puppy Shots & Vet ($)</label>
          <input
            type="number"
            value={vaccines}
            onChange={(e) => setVaccines(parseFloat(e.target.value) || 0)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 font-bold text-sm"
          />
        </div>
      </div>

      <div className="bg-[#054FB9] text-white p-6 rounded-2xl text-center border border-[#0461CF] space-y-2">
        <div className="text-xs text-[#B3C7F7] font-bold uppercase tracking-wider">Estimated First-Year Upfront Cost</div>
        <div className="text-4xl font-extrabold text-[#B3C7F7]">{formatCurrency(initialTotal)}</div>
        <p className="text-xs text-blue-100 font-medium">Excludes recurring monthly food & routine medication.</p>
      </div>
    </div>
  );
}

export function BreedingCostCalculatorWidget() {
  const [healthTesting, setHealthTesting] = useState<number>(600);
  const [studFee, setStudFee] = useState<number>(1000);
  const [ultrasound, setUltrasound] = useState<number>(350);
  const [litterShots, setLitterShots] = useState<number>(450);

  const total = healthTesting + studFee + ultrasound + litterShots;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 max-w-3xl mx-auto my-6 space-y-6 shadow-xs">
      <h3 className="text-lg font-bold text-slate-900">Dog Breeding & Litter Cost Estimator</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">OFAS / Health Tests ($)</label>
          <input
            type="number"
            value={healthTesting}
            onChange={(e) => setHealthTesting(parseFloat(e.target.value) || 0)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 font-bold text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Stud Fee ($)</label>
          <input
            type="number"
            value={studFee}
            onChange={(e) => setStudFee(parseFloat(e.target.value) || 0)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 font-bold text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Ultrasound / X-Rays ($)</label>
          <input
            type="number"
            value={ultrasound}
            onChange={(e) => setUltrasound(parseFloat(e.target.value) || 0)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 font-bold text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Puppy Care & Shots ($)</label>
          <input
            type="number"
            value={litterShots}
            onChange={(e) => setLitterShots(parseFloat(e.target.value) || 0)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 font-bold text-sm"
          />
        </div>
      </div>

      <div className="bg-[#054FB9] text-white p-6 rounded-2xl text-center border border-[#0461CF] space-y-2">
        <div className="text-xs text-[#B3C7F7] font-bold uppercase tracking-wider">Estimated Total Breeding Investment</div>
        <div className="text-4xl font-extrabold text-[#B3C7F7]">{formatCurrency(total)}</div>
        <p className="text-xs text-blue-100 font-medium">Excludes potential emergency C-section reserves (~$2,500).</p>
      </div>
    </div>
  );
}

export function VetEmergencyFundCalculatorWidget() {
  const [monthlySavings, setMonthlySavings] = useState<number>(75);
  const targetReserve = 3000;
  const monthsToTarget = Math.ceil(targetReserve / (monthlySavings || 1));

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 max-w-3xl mx-auto my-6 space-y-6 shadow-xs">
      <h3 className="text-lg font-bold text-slate-900">Veterinary Emergency Reserve Fund Calculator</h3>
      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Monthly Emergency Savings ($)</label>
        <input
          type="number"
          value={monthlySavings}
          onChange={(e) => setMonthlySavings(parseFloat(e.target.value) || 1)}
          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 font-bold text-sm focus:outline-none focus:border-[#0073E6]"
        />
      </div>

      <div className="bg-[#054FB9] text-white p-6 rounded-2xl border border-[#0461CF] space-y-2 text-center">
        <div className="text-xs text-[#B3C7F7] font-bold uppercase tracking-wider">Emergency Reserve Target ($3,000)</div>
        <div className="text-4xl font-extrabold text-[#B3C7F7]">{monthsToTarget} Months</div>
        <p className="text-xs text-blue-100 font-medium">Recommended target covers major emergency ER visits and diagnostic imaging.</p>
      </div>
    </div>
  );
}
