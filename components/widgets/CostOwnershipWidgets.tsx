'use client';

import React, { useState } from 'react';
import { Coins, DollarSign, Wallet, ShieldCheck, ShoppingBag, PiggyBank } from 'lucide-react';
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
    <div className="bg-white rounded-2xl border border-[#E2E3D8] p-6 md:p-8 shadow-paid max-w-3xl mx-auto my-6 space-y-6">
      <div className="flex items-center gap-3 pb-4 border-b border-[#F0F1EA]">
        <div className="w-10 h-10 rounded-xl bg-[#082C1B] text-[#8BF03B] flex items-center justify-center font-black">
          <Coins className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-black text-[#082C1B]">Dog Lifetime Cost of Ownership</h3>
          <p className="text-xs font-semibold text-[#4D534E]">Forecast complete lifetime financial investment</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-1.5">Breed Size</label>
          <select
            value={sizeClass}
            onChange={(e) => setSizeClass(e.target.value as any)}
            className="w-full bg-[#F0F1EA] border border-[#E2E3D8] rounded-xl px-3 py-2 text-[#082C1B] font-bold"
          >
            <option value="small">Small (&lt; 20 lbs)</option>
            <option value="medium">Medium (21 - 50 lbs)</option>
            <option value="large">Large (51 - 90 lbs)</option>
            <option value="giant">Giant (&gt; 90 lbs)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-1.5">Care Tier Standard</label>
          <select
            value={tier}
            onChange={(e) => setTier(e.target.value as any)}
            className="w-full bg-[#F0F1EA] border border-[#E2E3D8] rounded-xl px-3 py-2 text-[#082C1B] font-bold"
          >
            <option value="budget">Budget-Conscious</option>
            <option value="average">Standard / Average</option>
            <option value="premium">Premium Care & Fresh Food</option>
          </select>
        </div>

        <div className="flex items-center pt-6">
          <label className="flex items-center gap-2 text-xs font-bold text-[#082C1B] cursor-pointer">
            <input
              type="checkbox"
              checked={includeInsurance}
              onChange={(e) => setIncludeInsurance(e.target.checked)}
              className="w-4 h-4 text-[#082C1B] rounded focus:ring-[#8BF03B]"
            />
            Include Pet Insurance (~$50/mo)
          </label>
        </div>
      </div>

      <div className="bg-[#082C1B] text-white p-6 md:p-8 rounded-2xl border border-[#0d4028]">
        <div className="text-center pb-4 mb-4 border-b border-[#0d4028]">
          <div className="text-xs text-[#A2B5AB] font-extrabold uppercase tracking-wider">Total Estimated Lifetime Cost</div>
          <div className="text-4xl font-black text-[#8BF03B] mt-1">{formatCurrency(lifetimeTotal)}</div>
          <div className="text-xs text-[#A2B5AB] font-semibold mt-1">Over expected {lifespan}-year lifespan (~{formatCurrency(lifetimeTotal / (lifespan * 12))}/month)</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs">
          <div className="bg-[#041B10] p-3 rounded-xl border border-[#0d4028]">
            <div className="text-[#A2B5AB] font-semibold">1st Year Setup</div>
            <div className="text-lg font-black text-white mt-0.5">{formatCurrency(initialCost)}</div>
          </div>
          <div className="bg-[#041B10] p-3 rounded-xl border border-[#0d4028]">
            <div className="text-[#A2B5AB] font-semibold">Annual Recurring</div>
            <div className="text-lg font-black text-white mt-0.5">{formatCurrency(annualCost)} / yr</div>
          </div>
          <div className="bg-[#041B10] p-3 rounded-xl border border-[#0d4028]">
            <div className="text-[#A2B5AB] font-semibold">Senior Care Reserve</div>
            <div className="text-lg font-black text-[#8BF03B] mt-0.5">$2,000</div>
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
    <div className="bg-white rounded-2xl border border-[#E2E3D8] p-6 md:p-8 shadow-paid max-w-3xl mx-auto my-6 space-y-6">
      <h3 className="text-xl font-black text-[#082C1B]">Dog Food Expense & Budget Estimator</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-1.5">Bag Price ($)</label>
          <input
            type="number"
            value={bagPrice}
            onChange={(e) => setBagPrice(parseFloat(e.target.value) || 0)}
            className="w-full bg-[#F0F1EA] border border-[#E2E3D8] rounded-xl px-3 py-2 text-[#082C1B] font-bold"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-1.5">Bag Weight (lbs)</label>
          <input
            type="number"
            value={bagLbs}
            onChange={(e) => setBagLbs(parseFloat(e.target.value) || 1)}
            className="w-full bg-[#F0F1EA] border border-[#E2E3D8] rounded-xl px-3 py-2 text-[#082C1B] font-bold"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-1.5">Daily Intake (Cups)</label>
          <input
            type="number"
            step="0.25"
            value={cupsPerDay}
            onChange={(e) => setCupsPerDay(parseFloat(e.target.value) || 0)}
            className="w-full bg-[#F0F1EA] border border-[#E2E3D8] rounded-xl px-3 py-2 text-[#082C1B] font-bold"
          />
        </div>
      </div>

      <div className="bg-[#082C1B] text-white p-6 rounded-2xl border border-[#0d4028] grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-xs text-[#A2B5AB] font-extrabold uppercase">Daily Cost</div>
          <div className="text-2xl font-black text-white mt-1">{formatCurrency(dailyCost)} / day</div>
        </div>
        <div>
          <div className="text-xs text-[#8BF03B] font-extrabold uppercase">Monthly Expense</div>
          <div className="text-3xl font-black text-[#8BF03B] mt-1">{formatCurrency(monthlyCost)} / mo</div>
        </div>
        <div>
          <div className="text-xs text-[#A2B5AB] font-extrabold uppercase">Annual Total</div>
          <div className="text-2xl font-black text-white mt-1">{formatCurrency(annualCost)} / yr</div>
        </div>
      </div>
    </div>
  );
}

export function InsuranceCostEstimatorWidget() {
  const [age, setAge] = useState<number>(3);
  const [riskFactor, setRiskFactor] = useState<number>(1.2);
  const [deductible, setDeductible] = useState<number>(250);

  const base = 35;
  const ageMult = 1 + (age || 0) * 0.08;
  const dedMult = deductible === 100 ? 1.3 : deductible === 250 ? 1.0 : 0.75;
  const monthlyEst = base * riskFactor * ageMult * dedMult;

  return (
    <div className="bg-white rounded-2xl border border-[#E2E3D8] p-6 md:p-8 shadow-paid max-w-3xl mx-auto my-6 space-y-6">
      <h3 className="text-xl font-black text-[#082C1B]">Dog Pet Insurance Cost Estimator</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-1.5">Dog Age (Years)</label>
          <input
            type="number"
            min="0"
            max="15"
            value={age}
            onChange={(e) => setAge(parseInt(e.target.value) || 0)}
            className="w-full bg-[#F0F1EA] border border-[#E2E3D8] rounded-xl px-3 py-2 text-[#082C1B] font-bold"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-1.5">Breed Risk Tier</label>
          <select
            value={riskFactor}
            onChange={(e) => setRiskFactor(parseFloat(e.target.value))}
            className="w-full bg-[#F0F1EA] border border-[#E2E3D8] rounded-xl px-3 py-2 text-[#082C1B] font-bold"
          >
            <option value={0.9}>Low Risk (Mixed Breeds, Chihuahuas)</option>
            <option value={1.2}>Moderate Risk (Beagle, Australian Shepherd)</option>
            <option value={1.5}>High Risk (Labrador, Golden Retriever)</option>
            <option value={2.0}>Critical Risk (Frenchie, Great Dane)</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-1.5">Annual Deductible</label>
          <select
            value={deductible}
            onChange={(e) => setDeductible(parseInt(e.target.value))}
            className="w-full bg-[#F0F1EA] border border-[#E2E3D8] rounded-xl px-3 py-2 text-[#082C1B] font-bold"
          >
            <option value={100}>$100 Deductible (Higher Premium)</option>
            <option value={250}>$250 Deductible (Standard)</option>
            <option value={500}>$500 Deductible (Lower Premium)</option>
          </select>
        </div>
      </div>

      <div className="bg-[#082C1B] text-white p-6 rounded-2xl text-center border border-[#0d4028]">
        <div className="text-xs text-[#A2B5AB] font-extrabold uppercase">Estimated Monthly Insurance Premium</div>
        <div className="text-4xl font-black text-[#8BF03B] my-2">{formatCurrency(monthlyEst)} / month</div>
        <p className="text-xs text-[#A2B5AB] font-semibold">Estimated Range: {formatCurrency(monthlyEst * 0.85)} - {formatCurrency(monthlyEst * 1.15)} / mo</p>
      </div>
    </div>
  );
}

export function PuppyFirstYearCostCalculatorWidget() {
  const [adoptionFee, setAdoptionFee] = useState<number>(350);
  const [gear, setGear] = useState<number>(300);
  const [vetVaccines, setVetVaccines] = useState<number>(450);
  const [training, setTraining] = useState<number>(200);

  const totalFirstYear = (adoptionFee || 0) + (gear || 0) + (vetVaccines || 0) + (training || 0) + 600;

  return (
    <div className="bg-white rounded-2xl border border-[#E2E3D8] p-6 md:p-8 shadow-paid max-w-3xl mx-auto my-6 space-y-6">
      <h3 className="text-xl font-black text-[#082C1B]">Puppy First-Year Expense Estimator</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-1.5">Acquisition Fee ($)</label>
          <input
            type="number"
            value={adoptionFee}
            onChange={(e) => setAdoptionFee(parseInt(e.target.value) || 0)}
            className="w-full bg-[#F0F1EA] border border-[#E2E3D8] rounded-xl px-3 py-2 text-[#082C1B] font-bold"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-1.5">Puppy Vaccine Series ($)</label>
          <input
            type="number"
            value={vetVaccines}
            onChange={(e) => setVetVaccines(parseInt(e.target.value) || 0)}
            className="w-full bg-[#F0F1EA] border border-[#E2E3D8] rounded-xl px-3 py-2 text-[#082C1B] font-bold"
          />
        </div>
      </div>

      <div className="bg-[#082C1B] text-white p-6 rounded-2xl text-center border border-[#0d4028]">
        <div className="text-xs text-[#A2B5AB] font-extrabold uppercase">Total First-Year Investment</div>
        <div className="text-4xl font-black text-[#8BF03B] my-2">{formatCurrency(totalFirstYear)}</div>
        <p className="text-xs text-[#A2B5AB] font-semibold">Includes supplies, vaccines, spay/neuter, training, and 1 year puppy food.</p>
      </div>
    </div>
  );
}

export function BreedingCostCalculatorWidget() {
  const [puppyCount, setPuppyCount] = useState<number>(6);
  const [puppyPrice, setPuppyPrice] = useState<number>(1800);
  const [csectionReserve, setCsectionReserve] = useState<boolean>(true);

  const grossRevenue = (puppyCount || 0) * (puppyPrice || 0);
  const fixedExpenses = 1500 + 1200 + 600 + (csectionReserve ? 3000 : 0);
  const netProfit = grossRevenue - fixedExpenses;

  return (
    <div className="bg-white rounded-2xl border border-[#E2E3D8] p-6 md:p-8 shadow-paid max-w-3xl mx-auto my-6 space-y-6">
      <h3 className="text-xl font-black text-[#082C1B]">Litter Breeding Cost & Profit Estimator</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-1.5">Expected Puppies</label>
          <input
            type="number"
            value={puppyCount}
            onChange={(e) => setPuppyCount(parseInt(e.target.value) || 0)}
            className="w-full bg-[#F0F1EA] border border-[#E2E3D8] rounded-xl px-3 py-2 text-[#082C1B] font-bold"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-1.5">Price per Puppy ($)</label>
          <input
            type="number"
            value={puppyPrice}
            onChange={(e) => setPuppyPrice(parseInt(e.target.value) || 0)}
            className="w-full bg-[#F0F1EA] border border-[#E2E3D8] rounded-xl px-3 py-2 text-[#082C1B] font-bold"
          />
        </div>
        <div className="flex items-center pt-6">
          <label className="flex items-center gap-2 text-xs font-bold text-[#082C1B] cursor-pointer">
            <input
              type="checkbox"
              checked={csectionReserve}
              onChange={(e) => setCsectionReserve(e.target.checked)}
              className="w-4 h-4 text-[#082C1B] rounded focus:ring-[#8BF03B]"
            />
            Include C-Section Reserve ($3k)
          </label>
        </div>
      </div>

      <div className="bg-[#082C1B] text-white p-6 rounded-2xl border border-[#0d4028] grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-xs text-[#A2B5AB] font-extrabold uppercase">Gross Revenue</div>
          <div className="text-2xl font-black text-white mt-1">{formatCurrency(grossRevenue)}</div>
        </div>
        <div>
          <div className="text-xs text-[#A2B5AB] font-extrabold uppercase">Estimated Expenses</div>
          <div className="text-2xl font-black text-[#A2B5AB] mt-1">{formatCurrency(fixedExpenses)}</div>
        </div>
        <div>
          <div className="text-xs text-[#8BF03B] font-extrabold uppercase">Net Return</div>
          <div className="text-3xl font-black text-[#8BF03B] mt-1">{formatCurrency(netProfit)}</div>
        </div>
      </div>
    </div>
  );
}

export function VetEmergencyFundCalculatorWidget() {
  const [metro, setMetro] = useState<'low' | 'med' | 'high'>('med');
  const [hasInsurance, setHasInsurance] = useState<boolean>(false);

  const factor = metro === 'low' ? 0.8 : metro === 'med' ? 1.0 : 1.3;
  const baseTarget = 4500 * factor;
  const finalTarget = hasInsurance ? 1200 : baseTarget;

  return (
    <div className="bg-white rounded-2xl border border-[#E2E3D8] p-6 md:p-8 shadow-paid max-w-3xl mx-auto my-6 space-y-6">
      <h3 className="text-xl font-black text-[#082C1B]">Vet Emergency Fund Target Estimator</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-1.5">Area Cost of Living</label>
          <select
            value={metro}
            onChange={(e) => setMetro(e.target.value as any)}
            className="w-full bg-[#F0F1EA] border border-[#E2E3D8] rounded-xl px-3 py-2 text-[#082C1B] font-bold"
          >
            <option value="low">Suburban / Small Town</option>
            <option value="med">Standard City / Metro</option>
            <option value="high">High Cost Major Metropolitan</option>
          </select>
        </div>
        <div className="flex items-center pt-6">
          <label className="flex items-center gap-2 text-xs font-bold text-[#082C1B] cursor-pointer">
            <input
              type="checkbox"
              checked={hasInsurance}
              onChange={(e) => setHasInsurance(e.target.checked)}
              className="w-4 h-4 text-[#082C1B] rounded focus:ring-[#8BF03B]"
            />
            Pet Insurance Active (Covers 80%)
          </label>
        </div>
      </div>

      <div className="bg-[#082C1B] text-white p-6 rounded-2xl text-center border border-[#0d4028]">
        <div className="text-xs text-[#A2B5AB] font-extrabold uppercase">Recommended Emergency Fund Reserve</div>
        <div className="text-4xl font-black text-[#8BF03B] my-2">{formatCurrency(finalTarget)}</div>
        <p className="text-xs text-[#A2B5AB] font-semibold">Protects against unexpected surgery, bloat, ACL tears & toxicities.</p>
      </div>
    </div>
  );
}
