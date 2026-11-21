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
    <div className="bg-white rounded-3xl border border-[#E8E4DC] p-6 md:p-8 max-w-3xl mx-auto my-6 space-y-6 shadow-warm-xs">
      <div className="flex items-center gap-3 pb-4 border-b border-[#E8E4DC]">
        <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8E4DC] text-[#162737] flex items-center justify-center font-bold">
          <Coins className="w-5 h-5 text-[#162737]" />
        </div>
        <div>
          <h3 className="text-xl font-serif font-bold text-[#1C1917]">Dog Lifetime Cost of Ownership</h3>
          <p className="text-xs text-stone-500 font-sans">Forecast complete lifetime financial investment</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">Breed Size</label>
          <select
            value={sizeClass}
            onChange={(e) => setSizeClass(e.target.value as any)}
            className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-4 py-2.5 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5]"
          >
            <option value="small">Small (&lt; 20 lbs)</option>
            <option value="medium">Medium (21 - 50 lbs)</option>
            <option value="large">Large (51 - 90 lbs)</option>
            <option value="giant">Giant (&gt; 90 lbs)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">Care Tier Standard</label>
          <select
            value={tier}
            onChange={(e) => setTier(e.target.value as any)}
            className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-4 py-2.5 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5]"
          >
            <option value="budget">Budget-Conscious</option>
            <option value="average">Standard / Average</option>
            <option value="premium">Premium Care &amp; Fresh Food</option>
          </select>
        </div>

        <div className="flex items-center pt-6">
          <label className="flex items-center gap-2 text-xs font-bold text-stone-800 cursor-pointer font-sans">
            <input
              type="checkbox"
              checked={includeInsurance}
              onChange={(e) => setIncludeInsurance(e.target.checked)}
              className="w-4 h-4 text-[#0B63E5] rounded focus:ring-[#0B63E5]"
            />
            Include Pet Insurance (~$50/mo)
          </label>
        </div>
      </div>

      <div className="bg-[#162737] text-white p-6 md:p-8 rounded-3xl border border-[#0D1A25] space-y-4 shadow-warm-sm">
        <div className="text-center pb-4 border-b border-white/10">
          <div className="text-xs text-stone-300 font-bold uppercase tracking-wider font-sans">Total Estimated Lifetime Cost</div>
          <div className="text-4xl sm:text-5xl font-serif font-bold text-[#FDF1D0] mt-1">{formatCurrency(lifetimeTotal)}</div>
          <div className="text-xs text-stone-300 font-medium mt-1">Over expected {lifespan}-year lifespan (~{formatCurrency(lifetimeTotal / (lifespan * 12))}/month)</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs">
          <div className="bg-[#213547] p-4 rounded-2xl border border-white/10">
            <div className="text-stone-300 font-medium font-sans">1st Year Setup</div>
            <div className="text-xl font-serif font-bold text-white mt-1">{formatCurrency(initialCost)}</div>
          </div>
          <div className="bg-[#213547] p-4 rounded-2xl border border-white/10">
            <div className="text-stone-300 font-medium font-sans">Annual Recurring</div>
            <div className="text-xl font-serif font-bold text-white mt-1">{formatCurrency(annualCost)} / yr</div>
          </div>
          <div className="bg-[#213547] p-4 rounded-2xl border border-white/10">
            <div className="text-stone-300 font-medium font-sans">Senior Care Reserve</div>
            <div className="text-xl font-serif font-bold text-[#FDF1D0] mt-1">$2,000</div>
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
    <div className="bg-white rounded-3xl border border-[#E8E4DC] p-6 md:p-8 max-w-3xl mx-auto my-6 space-y-6 shadow-warm-xs">
      <h3 className="text-xl font-serif font-bold text-[#1C1917]">Dog Food Expense &amp; Budget Estimator</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">Bag Price ($)</label>
          <input
            type="number"
            value={bagPrice}
            onChange={(e) => setBagPrice(parseFloat(e.target.value) || 0)}
            className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-4 py-2.5 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5]"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">Bag Weight (lbs)</label>
          <input
            type="number"
            value={bagLbs}
            onChange={(e) => setBagLbs(parseFloat(e.target.value) || 1)}
            className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-4 py-2.5 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5]"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">Daily Intake (Cups)</label>
          <input
            type="number"
            step="0.25"
            value={cupsPerDay}
            onChange={(e) => setCupsPerDay(parseFloat(e.target.value) || 0)}
            className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-4 py-2.5 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5]"
          />
        </div>
      </div>

      <div className="bg-[#162737] text-white p-6 sm:p-7 rounded-3xl border border-[#0D1A25] grid grid-cols-1 sm:grid-cols-3 gap-5 text-center shadow-warm-sm">
        <div>
          <div className="text-xs text-stone-300 font-bold uppercase font-sans">Daily Cost</div>
          <div className="text-2xl font-serif font-bold text-white mt-1">{formatCurrency(dailyCost)} / day</div>
        </div>
        <div>
          <div className="text-xs text-stone-300 font-bold uppercase font-sans">Monthly Expense</div>
          <div className="text-3xl font-serif font-bold text-[#FDF1D0] mt-1">{formatCurrency(monthlyCost)} / mo</div>
        </div>
        <div>
          <div className="text-xs text-stone-300 font-bold uppercase font-sans">Annual Budget</div>
          <div className="text-2xl font-serif font-bold text-white mt-1">{formatCurrency(annualCost)} / yr</div>
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
    <div className="bg-white rounded-3xl border border-[#E8E4DC] p-6 md:p-8 max-w-3xl mx-auto my-6 space-y-6 shadow-warm-xs">
      <h3 className="text-xl font-serif font-bold text-[#1C1917]">Pet Insurance Monthly Premium Estimator</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">Dog Age (Years)</label>
          <input
            type="number"
            min="0"
            max="16"
            value={ageYears}
            onChange={(e) => setAgeYears(parseInt(e.target.value) || 0)}
            className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-4 py-2.5 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5]"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">Breed Genetic Health Risk</label>
          <select
            value={breedRisk}
            onChange={(e) => setBreedRisk(e.target.value as any)}
            className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-4 py-2.5 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5]"
          >
            <option value="low">Low Risk (Mixed Breeds, Australian Cattle Dog)</option>
            <option value="medium">Standard Risk (Labrador, Golden Retriever)</option>
            <option value="high">High Risk (French Bulldog, Great Dane, Bernese)</option>
          </select>
        </div>
      </div>

      <div className="bg-[#162737] text-white p-6 sm:p-7 rounded-3xl text-center border border-[#0D1A25] space-y-2 shadow-warm-sm">
        <div className="text-xs text-stone-300 font-bold uppercase tracking-wider font-sans">Estimated Monthly Premium</div>
        <div className="text-4xl sm:text-5xl font-serif font-bold text-[#FDF1D0]">{formatCurrency(monthlyEst)} / mo</div>
        <p className="text-xs text-stone-300 font-medium">Based on 80% reimbursement with a $250 annual deductible.</p>
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
    <div className="bg-white rounded-3xl border border-[#E8E4DC] p-6 md:p-8 max-w-3xl mx-auto my-6 space-y-6 shadow-warm-xs">
      <h3 className="text-xl font-serif font-bold text-[#1C1917]">First-Year Puppy Cost Estimator</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">Adoption / Breeder Fee ($)</label>
          <input
            type="number"
            value={adoptionFee}
            onChange={(e) => setAdoptionFee(parseFloat(e.target.value) || 0)}
            className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-4 py-2 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5]"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">Spay / Neuter Surgery ($)</label>
          <input
            type="number"
            value={spayNeuter}
            onChange={(e) => setSpayNeuter(parseFloat(e.target.value) || 0)}
            className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-4 py-2 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5]"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">Crate, Bed &amp; Gear ($)</label>
          <input
            type="number"
            value={supplies}
            onChange={(e) => setSupplies(parseFloat(e.target.value) || 0)}
            className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-4 py-2 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5]"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">Puppy Shots &amp; Vet ($)</label>
          <input
            type="number"
            value={vaccines}
            onChange={(e) => setVaccines(parseFloat(e.target.value) || 0)}
            className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-4 py-2 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5]"
          />
        </div>
      </div>

      <div className="bg-[#162737] text-white p-6 sm:p-7 rounded-3xl text-center border border-[#0D1A25] space-y-2 shadow-warm-sm">
        <div className="text-xs text-stone-300 font-bold uppercase tracking-wider font-sans">Estimated First-Year Upfront Cost</div>
        <div className="text-4xl sm:text-5xl font-serif font-bold text-[#FDF1D0]">{formatCurrency(initialTotal)}</div>
        <p className="text-xs text-stone-300 font-medium">Excludes recurring monthly food &amp; routine medication.</p>
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
    <div className="bg-white rounded-3xl border border-[#E8E4DC] p-6 md:p-8 max-w-3xl mx-auto my-6 space-y-6 shadow-warm-xs">
      <h3 className="text-xl font-serif font-bold text-[#1C1917]">Dog Breeding &amp; Litter Cost Estimator</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">OFAS / Health Tests ($)</label>
          <input
            type="number"
            value={healthTesting}
            onChange={(e) => setHealthTesting(parseFloat(e.target.value) || 0)}
            className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-4 py-2 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5]"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">Stud Fee ($)</label>
          <input
            type="number"
            value={studFee}
            onChange={(e) => setStudFee(parseFloat(e.target.value) || 0)}
            className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-4 py-2 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5]"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">Ultrasound / X-Rays ($)</label>
          <input
            type="number"
            value={ultrasound}
            onChange={(e) => setUltrasound(parseFloat(e.target.value) || 0)}
            className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-4 py-2 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5]"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">Puppy Care &amp; Shots ($)</label>
          <input
            type="number"
            value={litterShots}
            onChange={(e) => setLitterShots(parseFloat(e.target.value) || 0)}
            className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-4 py-2 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5]"
          />
        </div>
      </div>

      <div className="bg-[#162737] text-white p-6 sm:p-7 rounded-3xl text-center border border-[#0D1A25] space-y-2 shadow-warm-sm">
        <div className="text-xs text-stone-300 font-bold uppercase tracking-wider font-sans">Estimated Total Breeding Investment</div>
        <div className="text-4xl sm:text-5xl font-serif font-bold text-[#FDF1D0]">{formatCurrency(total)}</div>
        <p className="text-xs text-stone-300 font-medium">Excludes potential emergency C-section reserves (~$2,500).</p>
      </div>
    </div>
  );
}

export function VetEmergencyFundCalculatorWidget() {
  const [monthlySavings, setMonthlySavings] = useState<number>(75);
  const targetReserve = 3000;
  const monthsToTarget = Math.ceil(targetReserve / (monthlySavings || 1));

  return (
    <div className="bg-white rounded-3xl border border-[#E8E4DC] p-6 md:p-8 max-w-3xl mx-auto my-6 space-y-6 shadow-warm-xs">
      <h3 className="text-xl font-serif font-bold text-[#1C1917]">Veterinary Emergency Reserve Fund Calculator</h3>
      <div>
        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">Monthly Emergency Savings ($)</label>
        <input
          type="number"
          value={monthlySavings}
          onChange={(e) => setMonthlySavings(parseFloat(e.target.value) || 1)}
          className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-4 py-2.5 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5]"
        />
      </div>

      <div className="bg-[#162737] text-white p-6 sm:p-7 rounded-3xl border border-[#0D1A25] space-y-2 text-center shadow-warm-sm">
        <div className="text-xs text-stone-300 font-bold uppercase tracking-wider font-sans">Emergency Reserve Target ($3,000)</div>
        <div className="text-4xl sm:text-5xl font-serif font-bold text-[#FDF1D0]">{monthsToTarget} Months</div>
        <p className="text-xs text-stone-300 font-medium">Recommended target covers major emergency ER visits and diagnostic imaging.</p>
      </div>
    </div>
  );
}
