'use client';

import React, { useState } from 'react';
import { AlertOctagon, AlertTriangle, HeartPulse, ShieldAlert, Thermometer, Droplets, Calendar, Pill } from 'lucide-react';
import { formatNumber } from '@/lib/utils';

export function ChocolateToxicityCalculatorWidget() {
  const [weightKg, setWeightKg] = useState<number>(10);
  const [chocType, setChocType] = useState<string>('dark');
  const [amountGrams, setAmountGrams] = useState<number>(50);

  const concMap: Record<string, number> = {
    white: 0.25,
    milk: 2.3,
    dark: 8.5,
    baking: 16.0,
    cocoa: 28.5,
  };

  const mgPerGram = concMap[chocType] || 2.3;
  const totalMg = (amountGrams || 0) * mgPerGram;
  const doseMgKg = totalMg / (weightKg || 1);

  let hazardLevel = 'MILD / NEGLIGIBLE';
  let actionText = 'Low risk of cardiac toxicity. Watch for mild stomach upset or diarrhea.';

  if (doseMgKg >= 20 && doseMgKg < 40) {
    hazardLevel = 'MODERATE HAZARD';
    actionText = 'Vomiting, diarrhea, restlessness, and increased heart rate expected. Contact vet.';
  } else if (doseMgKg >= 40 && doseMgKg < 60) {
    hazardLevel = 'SEVERE CARDIOTOXIC RISK';
    actionText = 'Cardiotoxicity risk! High heart rate, muscle tremors, and agitation. Seek vet emergency care.';
  } else if (doseMgKg >= 60) {
    hazardLevel = 'CRITICAL EMERGENCY (FATAL DOSE RISK)';
    actionText = 'SEIZURE & FATAL RISK! Seek IMMEDIATE emergency veterinary intervention now or call ASPCA Poison Control (888-426-4435).';
  }

  return (
    <div className="bg-white rounded-2xl border border-[#E2E3D8] p-6 md:p-8 shadow-paid max-w-3xl mx-auto my-6 space-y-6">
      <div className="flex items-center gap-3 pb-4 border-b border-[#F0F1EA]">
        <div className="w-10 h-10 rounded-xl bg-[#082C1B] text-[#8BF03B] flex items-center justify-center font-bold">
          <AlertOctagon className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-black text-[#082C1B]">Chocolate Toxicity Emergency Estimator</h3>
          <p className="text-xs font-semibold text-[#4D534E]">Calculates total methylxanthine (Theobromine + Caffeine) dose in mg/kg</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-1.5">Dog Weight (kg)</label>
          <input
            type="number"
            min="1"
            max="100"
            value={weightKg}
            onChange={(e) => setWeightKg(parseFloat(e.target.value) || 1)}
            className="w-full bg-[#F0F1EA] border border-[#E2E3D8] rounded-xl px-3 py-2 text-[#082C1B] font-bold"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-1.5">Type of Chocolate</label>
          <select
            value={chocType}
            onChange={(e) => setChocType(e.target.value)}
            className="w-full bg-[#F0F1EA] border border-[#E2E3D8] rounded-xl px-3 py-2 text-[#082C1B] font-bold"
          >
            <option value="white">White Chocolate (Low risk)</option>
            <option value="milk">Milk Chocolate</option>
            <option value="dark">Dark Chocolate (45-70%)</option>
            <option value="baking">Baking Chocolate (Unsweetened)</option>
            <option value="cocoa">Dry Cocoa Powder (Extreme)</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-1.5">Amount Eaten (Grams)</label>
          <input
            type="number"
            min="1"
            max="1000"
            value={amountGrams}
            onChange={(e) => setAmountGrams(parseFloat(e.target.value) || 0)}
            className="w-full bg-[#F0F1EA] border border-[#E2E3D8] rounded-xl px-3 py-2 text-[#082C1B] font-bold"
          />
        </div>
      </div>

      <div className="bg-[#082C1B] text-white p-6 rounded-2xl border border-[#0d4028]">
        <div className="flex items-center justify-between gap-4 mb-2">
          <div className="text-xs uppercase font-extrabold text-[#A2B5AB] tracking-wider">Toxicity Severity Rating</div>
          <div className="text-sm font-black text-[#8BF03B]">{doseMgKg.toFixed(1)} mg/kg</div>
        </div>
        <div className="text-2xl font-black text-[#8BF03B] mb-2">{hazardLevel}</div>
        <p className="text-xs text-[#A2B5AB] font-semibold leading-relaxed">{actionText}</p>
      </div>

      <div className="bg-[#041B10] border border-[#0d4028] text-white text-xs p-4 rounded-xl flex items-start gap-2.5">
        <ShieldAlert className="w-5 h-5 text-[#8BF03B] flex-shrink-0 mt-0.5" />
        <div>
          <strong className="font-extrabold text-[#8BF03B]">Emergency Notice:</strong> This calculator provides mathematical estimations only. If your dog consumed chocolate, call ASPCA Poison Control (888-426-4435) or contact an emergency vet immediately.
        </div>
      </div>
    </div>
  );
}

export function BenadrylDosageCalculatorWidget() {
  const [weightLbs, setWeightLbs] = useState<number>(25);

  const currentLbs = weightLbs || 1;
  const targetMg = currentLbs * 1.0;
  const pills25mg = targetMg / 25;
  const liquidMl = (targetMg / 12.5) * 5;

  return (
    <div className="bg-white rounded-2xl border border-[#E2E3D8] p-6 md:p-8 shadow-paid max-w-3xl mx-auto my-6 space-y-6">
      <div className="flex items-center gap-3 pb-4 border-b border-[#F0F1EA]">
        <div className="w-10 h-10 rounded-xl bg-[#082C1B] text-[#8BF03B] flex items-center justify-center font-bold">
          <Pill className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-black text-[#082C1B]">Dog Benadryl (Diphenhydramine) Dosage</h3>
          <p className="text-xs font-semibold text-[#4D534E]">Standard veterinary baseline: 1 mg per lb body weight</p>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-2">
          Dog Body Weight: <span className="text-[#082C1B] font-black">{currentLbs} lbs ({(currentLbs / 2.20462).toFixed(1)} kg)</span>
        </label>
        <input
          type="range"
          min="5"
          max="120"
          value={currentLbs}
          onChange={(e) => setWeightLbs(parseInt(e.target.value))}
          className="w-full h-2 bg-[#E2E3D8] rounded-lg appearance-none cursor-pointer accent-[#082C1B]"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#082C1B] text-white p-6 rounded-2xl border border-[#0d4028]">
        <div>
          <div className="text-xs text-[#A2B5AB] font-extrabold uppercase">Standard 25mg Tablets</div>
          <div className="text-3xl font-black text-[#8BF03B] mt-1">{formatNumber(pills25mg, 1)} Pill(s)</div>
          <div className="text-xs text-[#A2B5AB] font-medium">Target Dose: {targetMg} mg</div>
        </div>
        <div>
          <div className="text-xs text-[#A2B5AB] font-extrabold uppercase">Children's Liquid (12.5mg/5mL)</div>
          <div className="text-3xl font-black text-white mt-1">{formatNumber(liquidMl, 1)} mL</div>
          <div className="text-xs text-[#A2B5AB] font-medium">Administer every 8-12 hours</div>
        </div>
      </div>

      <div className="bg-[#041B10] border border-[#0d4028] text-white p-4 rounded-xl flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-[#8BF03B] flex-shrink-0 mt-0.5" />
        <div className="text-xs leading-relaxed font-semibold">
          <strong className="font-extrabold text-[#8BF03B] uppercase tracking-wider block mb-1">Veterinary Medical Disclaimer</strong>
          This calculator is for informational reference only. Always confirm medication types and dosages with your veterinarian prior to administration. NEVER use products containing decongestants (Pseudoephedrine) or Xylitol, which are toxic to dogs.
        </div>
      </div>
    </div>
  );
}

export function XylitolToxicityCalculatorWidget() {
  const [weightKg, setWeightKg] = useState<number>(10);
  const [xylitolGrams, setXylitolGrams] = useState<number>(1.0);

  const doseGkg = (xylitolGrams || 0) / (weightKg || 1);

  let hazard = 'MILD RISK';
  if (doseGkg >= 0.1 && doseGkg < 0.5) {
    hazard = 'CRITICAL HYPOGLYCEMIA HAZARD (>0.1 g/kg)';
  } else if (doseGkg >= 0.5) {
    hazard = 'ACUTE HEPATIC LIVER FAILURE HAZARD (>0.5 g/kg)';
  }

  return (
    <div className="bg-white rounded-2xl border border-[#E2E3D8] p-6 md:p-8 shadow-paid max-w-3xl mx-auto my-6 space-y-6">
      <h3 className="text-xl font-black text-[#082C1B]">Xylitol (Birch Sugar) Toxicity Estimator</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-1.5">Dog Weight (kg)</label>
          <input
            type="number"
            value={weightKg}
            onChange={(e) => setWeightKg(parseFloat(e.target.value) || 1)}
            className="w-full bg-[#F0F1EA] border border-[#E2E3D8] rounded-xl px-3 py-2 text-[#082C1B] font-bold"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-1.5">Xylitol Ingested (Grams)</label>
          <input
            type="number"
            step="0.1"
            value={xylitolGrams}
            onChange={(e) => setXylitolGrams(parseFloat(e.target.value) || 0)}
            className="w-full bg-[#F0F1EA] border border-[#E2E3D8] rounded-xl px-3 py-2 text-[#082C1B] font-bold"
          />
        </div>
      </div>

      <div className="bg-[#082C1B] text-white p-6 rounded-2xl border border-[#0d4028]">
        <div className="text-xs text-[#A2B5AB] font-extrabold uppercase tracking-wider">Xylitol Dosage Rating</div>
        <div className="text-2xl font-black text-[#8BF03B] my-1">{hazard}</div>
        <div className="text-xs text-[#A2B5AB] font-semibold">Dose: {doseGkg.toFixed(2)} g/kg body weight</div>
      </div>

      <div className="bg-[#041B10] border border-[#0d4028] text-white text-xs p-4 rounded-xl">
        <strong className="font-extrabold text-[#8BF03B]">Emergency Warning:</strong> Xylitol causes a rapid insulin spike within 15-30 minutes. Contact an emergency vet clinic immediately.
      </div>
    </div>
  );
}

export function GrapeToxicityCalculatorWidget() {
  const [weightKg, setWeightKg] = useState<number>(15);
  const [grapeCount, setGrapeCount] = useState<number>(5);
  const [type, setType] = useState<'grape' | 'raisin'>('grape');

  return (
    <div className="bg-white rounded-2xl border border-[#E2E3D8] p-6 md:p-8 shadow-paid max-w-3xl mx-auto my-6 space-y-6">
      <h3 className="text-xl font-black text-[#082C1B]">Grape & Raisin Exposure Estimator</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-1.5">Fruit Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value as any)}
            className="w-full bg-[#F0F1EA] border border-[#E2E3D8] rounded-xl px-3 py-2 text-[#082C1B] font-bold"
          >
            <option value="grape">Fresh Grapes</option>
            <option value="raisin">Raisins (4.5x concentrated)</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-1.5">Number Eaten</label>
          <input
            type="number"
            value={grapeCount}
            onChange={(e) => setGrapeCount(parseInt(e.target.value) || 0)}
            className="w-full bg-[#F0F1EA] border border-[#E2E3D8] rounded-xl px-3 py-2 text-[#082C1B] font-bold"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-1.5">Dog Weight (kg)</label>
          <input
            type="number"
            value={weightKg}
            onChange={(e) => setWeightKg(parseFloat(e.target.value) || 1)}
            className="w-full bg-[#F0F1EA] border border-[#E2E3D8] rounded-xl px-3 py-2 text-[#082C1B] font-bold"
          />
        </div>
      </div>

      <div className="bg-[#082C1B] text-white p-6 rounded-2xl border border-[#0d4028]">
        <div className="font-black text-xl text-[#8BF03B] mb-1">ANY INGESTION IS A POTENTIAL RENAL HAZARD</div>
        <p className="text-xs text-[#A2B5AB] leading-relaxed font-semibold">
          Grapes and raisins contain Tartaric Acid which can cause acute kidney failure in sensitive dogs. Inducing vomiting within 2 hours is strongly advised by toxicologists.
        </p>
      </div>
    </div>
  );
}

export function PregnancyDueDateCalculatorWidget() {
  const [matingDate, setMatingDate] = useState<string>(new Date().toISOString().split('T')[0]);

  const mating = new Date(matingDate || new Date());
  const due = new Date(mating.getTime() + 63 * 24 * 60 * 60 * 1000);
  const ultrasoundStart = new Date(mating.getTime() + 25 * 24 * 60 * 60 * 1000);
  const xrayStart = new Date(mating.getTime() + 50 * 24 * 60 * 60 * 1000);

  return (
    <div className="bg-white rounded-2xl border border-[#E2E3D8] p-6 md:p-8 shadow-paid max-w-3xl mx-auto my-6 space-y-6">
      <div className="flex items-center gap-3 pb-4 border-b border-[#F0F1EA]">
        <div className="w-10 h-10 rounded-xl bg-[#082C1B] text-[#8BF03B] flex items-center justify-center font-bold">
          <Calendar className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-black text-[#082C1B]">Dog Pregnancy Due Date Calculator</h3>
          <p className="text-xs font-semibold text-[#4D534E]">63-Day Gestational Whelping Predictor</p>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-2">First Mating Date</label>
        <input
          type="date"
          value={matingDate}
          onChange={(e) => setMatingDate(e.target.value)}
          className="w-full bg-[#F0F1EA] border border-[#E2E3D8] rounded-xl px-4 py-2.5 text-[#082C1B] font-bold"
        />
      </div>

      <div className="bg-[#082C1B] text-white p-6 rounded-2xl border border-[#0d4028]">
        <div className="text-xs text-[#A2B5AB] font-extrabold uppercase">Expected Whelping Due Date</div>
        <div className="text-3xl font-black text-[#8BF03B] mt-1">{due.toDateString()}</div>
        <div className="text-xs text-[#A2B5AB] font-semibold mt-1">Expected Window: Day 58 to Day 65</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <div className="bg-[#F0F1EA] border border-[#E2E3D8] p-3.5 rounded-xl">
          <div className="font-bold text-[#082C1B]">Ultrasound Window:</div>
          <div className="text-[#4D534E] font-semibold">{ultrasoundStart.toDateString()}</div>
        </div>
        <div className="bg-[#F0F1EA] border border-[#E2E3D8] p-3.5 rounded-xl">
          <div className="font-bold text-[#082C1B]">X-Ray Skull Count Window:</div>
          <div className="text-[#4D534E] font-semibold">{xrayStart.toDateString()}</div>
        </div>
      </div>
    </div>
  );
}

export function WaterIntakeCalculatorWidget() {
  const [weightKg, setWeightKg] = useState<number>(15);

  const currentKg = weightKg || 1;
  const baselineMl = currentKg * 55;
  const cups = baselineMl / 236.588;

  return (
    <div className="bg-white rounded-2xl border border-[#E2E3D8] p-6 md:p-8 shadow-paid max-w-3xl mx-auto my-6 space-y-6">
      <div className="flex items-center gap-3 pb-4 border-b border-[#F0F1EA]">
        <div className="w-10 h-10 rounded-xl bg-[#082C1B] text-[#8BF03B] flex items-center justify-center font-bold">
          <Droplets className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-black text-[#082C1B]">Dog Daily Water Intake Calculator</h3>
          <p className="text-xs font-semibold text-[#4D534E]">Baseline ~50-60 mL per kg body weight</p>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-2">
          Dog Weight: <span className="text-[#082C1B] font-black">{currentKg} kg</span>
        </label>
        <input
          type="range"
          min="2"
          max="70"
          value={currentKg}
          onChange={(e) => setWeightKg(parseInt(e.target.value))}
          className="w-full h-2 bg-[#E2E3D8] rounded-lg appearance-none cursor-pointer accent-[#082C1B]"
        />
      </div>

      <div className="bg-[#082C1B] text-white p-6 rounded-2xl border border-[#0d4028] grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <div className="text-xs text-[#A2B5AB] font-extrabold uppercase">Daily Fluid Volume</div>
          <div className="text-3xl font-black text-[#8BF03B] mt-1">{Math.round(baselineMl)} mL</div>
          <div className="text-xs text-[#A2B5AB] font-semibold">({(baselineMl / 1000).toFixed(2)} Liters / day)</div>
        </div>
        <div>
          <div className="text-xs text-[#A2B5AB] font-extrabold uppercase">Measuring Cups</div>
          <div className="text-3xl font-black text-white mt-1">{cups.toFixed(1)} Cups</div>
          <div className="text-xs text-[#A2B5AB] font-semibold">Clean fresh water daily</div>
        </div>
      </div>
    </div>
  );
}

export function DehydrationRiskCalculatorWidget() {
  const [weightKg, setWeightKg] = useState<number>(20);
  const [tentSpeed, setTentSpeed] = useState<number>(2);

  const currentKg = weightKg || 1;
  const percent = tentSpeed <= 1 ? 4 : tentSpeed <= 3 ? 7 : 11;
  const deficitMl = currentKg * (percent / 100) * 1000;

  return (
    <div className="bg-white rounded-2xl border border-[#E2E3D8] p-6 md:p-8 shadow-paid max-w-3xl mx-auto my-6 space-y-6">
      <h3 className="text-xl font-black text-[#082C1B]">Dehydration Risk & Fluid Deficit Estimator</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-1.5">Dog Weight (kg)</label>
          <input
            type="number"
            value={weightKg}
            onChange={(e) => setWeightKg(parseFloat(e.target.value) || 1)}
            className="w-full bg-[#F0F1EA] border border-[#E2E3D8] rounded-xl px-3 py-2 text-[#082C1B] font-bold"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-1.5">Skin Tent Speed</label>
          <select
            value={tentSpeed}
            onChange={(e) => setTentSpeed(parseInt(e.target.value))}
            className="w-full bg-[#F0F1EA] border border-[#E2E3D8] rounded-xl px-3 py-2 text-[#082C1B] font-bold"
          >
            <option value={1}>Instant (&lt; 1 sec) - Normal</option>
            <option value={2}>Slight Delay (2-3 sec) - Mild/Mod</option>
            <option value={4}>Persistent (&gt; 4 sec) - Severe</option>
          </select>
        </div>
      </div>

      <div className="bg-[#082C1B] text-white p-6 rounded-2xl border border-[#0d4028]">
        <div className="text-xs text-[#A2B5AB] font-extrabold uppercase">Estimated Fluid Deficit</div>
        <div className="text-3xl font-black text-[#8BF03B] my-1">{Math.round(deficitMl)} mL ({percent}% Dehydrated)</div>
        <p className="text-xs text-[#A2B5AB] font-semibold">Requires fluid replacement in addition to maintenance intake.</p>
      </div>
    </div>
  );
}

export function HeatCycleTrackerWidget() {
  const [lastHeatDate, setLastHeatDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [intervalMonths, setIntervalMonths] = useState<number>(6);

  const last = new Date(lastHeatDate || new Date());
  const nextHeat = new Date(last.getTime() + intervalMonths * 30.4375 * 24 * 60 * 60 * 1000);
  const fertileStart = new Date(last.getTime() + 9 * 24 * 60 * 60 * 1000);
  const fertileEnd = new Date(last.getTime() + 15 * 24 * 60 * 60 * 1000);

  return (
    <div className="bg-white rounded-2xl border border-[#E2E3D8] p-6 md:p-8 shadow-paid max-w-3xl mx-auto my-6 space-y-6">
      <h3 className="text-xl font-black text-[#082C1B]">Dog Heat Cycle & Fertile Window Tracker</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-1.5">Start Date of Last Heat</label>
          <input
            type="date"
            value={lastHeatDate}
            onChange={(e) => setLastHeatDate(e.target.value)}
            className="w-full bg-[#F0F1EA] border border-[#E2E3D8] rounded-xl px-3 py-2 text-[#082C1B] font-bold"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-1.5">Cycle Frequency</label>
          <select
            value={intervalMonths}
            onChange={(e) => setIntervalMonths(parseInt(e.target.value))}
            className="w-full bg-[#F0F1EA] border border-[#E2E3D8] rounded-xl px-3 py-2 text-[#082C1B] font-bold"
          >
            <option value={6}>Every 6 Months (Standard)</option>
            <option value={4}>Every 4 Months (Small Breeds)</option>
            <option value={8}>Every 8 Months (Large Breeds)</option>
            <option value={12}>Every 12 Months (Giant Breeds)</option>
          </select>
        </div>
      </div>

      <div className="bg-[#082C1B] text-white p-6 rounded-2xl border border-[#0d4028] grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <div className="text-xs text-[#A2B5AB] font-extrabold uppercase">Predicted Next Season</div>
          <div className="text-2xl font-black text-[#8BF03B] mt-1">{nextHeat.toDateString()}</div>
        </div>
        <div>
          <div className="text-xs text-[#A2B5AB] font-extrabold uppercase">Fertile Estrus Window</div>
          <div className="text-sm font-black text-white mt-1">{fertileStart.toLocaleDateString()} - {fertileEnd.toLocaleDateString()}</div>
        </div>
      </div>
    </div>
  );
}
