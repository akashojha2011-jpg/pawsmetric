'use client';

import React, { useState } from 'react';
import { AlertOctagon, AlertTriangle, ShieldAlert, Pill, Check, Copy, Droplets, Calendar, HeartPulse } from 'lucide-react';
import { formatNumber } from '@/lib/utils';

export function ChocolateToxicityCalculatorWidget() {
  const [weightLbs, setWeightLbs] = useState<number>(22);
  const [chocType, setChocType] = useState<string>('dark');
  const [amountOz, setAmountOz] = useState<number>(2.0);
  const [copied, setCopied] = useState<boolean>(false);

  const weightKg = weightLbs / 2.20462;
  const amountGrams = amountOz * 28.3495;

  const concMap: Record<string, number> = {
    white: 0.25,
    milk: 2.3,
    dark: 8.5,
    baking: 16.0,
    cocoa: 28.5,
  };

  const mgPerGram = concMap[chocType] || 2.3;
  const totalMg = amountGrams * mgPerGram;
  const doseMgKg = totalMg / (weightKg || 1);

  let hazardLevel = 'MILD / NEGLIGIBLE RISK';
  let hazardBadge = 'bg-[#FDF1D0] text-[#1C1917] border border-[#F6DF9C]';
  let actionText = 'Low risk of cardiac toxicity. Monitor for mild gastrointestinal upset.';

  if (doseMgKg >= 20 && doseMgKg < 40) {
    hazardLevel = 'MODERATE HAZARD';
    hazardBadge = 'bg-amber-500/20 text-amber-200 border border-amber-500/40';
    actionText = 'Increased heart rate, restlessness, and gastrointestinal distress expected. Contact your veterinarian.';
  } else if (doseMgKg >= 40 && doseMgKg < 60) {
    hazardLevel = 'SEVERE CARDIOTOXIC RISK';
    hazardBadge = 'bg-rose-500/20 text-rose-200 border border-rose-500/40';
    actionText = 'Cardiotoxicity risk! Muscle tremors, rapid pulse, and severe agitation. Seek immediate emergency care.';
  } else if (doseMgKg >= 60) {
    hazardLevel = 'CRITICAL EMERGENCY (SEIZURE / FATAL DOSE)';
    hazardBadge = 'bg-rose-600 text-white border border-rose-700';
    actionText = 'SEIZURE & CRITICAL RISK! Seek IMMEDIATE emergency veterinary intervention or call ASPCA Poison Control (888-426-4435).';
  }

  const handleCopy = () => {
    const text = `Chocolate Risk: ${weightLbs} lb dog ate ${amountOz} oz of ${chocType} chocolate. Toxin Dose: ${doseMgKg.toFixed(1)} mg/kg (${hazardLevel})`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-3xl border border-[#E8E4DC] p-6 md:p-8 max-w-3xl mx-auto my-6 space-y-6 shadow-warm-xs">
      <div className="flex items-center justify-between pb-4 border-b border-[#E8E4DC]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#162737] text-white flex items-center justify-center font-bold shadow-warm-xs">
            <AlertOctagon className="w-5 h-5 text-rose-400" />
          </div>
          <div>
            <h3 className="text-xl font-serif font-bold text-[#1C1917]">Chocolate Toxicity Estimator</h3>
            <p className="text-xs text-stone-500 font-sans">Total methylxanthine (Theobromine + Caffeine) dose in mg/kg</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">Dog Weight (lbs)</label>
          <input
            type="number"
            min="1"
            max="200"
            value={weightLbs}
            onChange={(e) => setWeightLbs(parseFloat(e.target.value) || 1)}
            className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-4 py-2.5 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5]"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">Chocolate Type</label>
          <select
            value={chocType}
            onChange={(e) => setChocType(e.target.value)}
            className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-4 py-2.5 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5]"
          >
            <option value="white">White Chocolate (Low Toxin)</option>
            <option value="milk">Milk Chocolate (Standard)</option>
            <option value="dark">Dark Chocolate (45-70%)</option>
            <option value="baking">Unsweetened Baker&apos;s Chocolate</option>
            <option value="cocoa">Dry Cocoa Powder (Extreme)</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">Amount Eaten (Ounces)</label>
          <input
            type="number"
            min="0.1"
            max="50"
            step="0.5"
            value={amountOz}
            onChange={(e) => setAmountOz(parseFloat(e.target.value) || 0)}
            className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-4 py-2.5 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5]"
          />
        </div>
      </div>

      <div className="bg-[#162737] text-white p-6 sm:p-7 rounded-3xl border border-[#0D1A25] space-y-4 shadow-warm-sm">
        <div className="flex items-center justify-between gap-4">
          <div className="text-xs uppercase font-bold text-stone-300 font-sans">Estimated Toxin Load</div>
          <div className="text-lg font-bold font-mono text-[#FDF1D0]">{doseMgKg.toFixed(1)} mg/kg</div>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${hazardBadge}`}>
            {hazardLevel}
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
        <p className="text-xs text-stone-300 font-medium leading-relaxed pt-3 border-t border-white/10">{actionText}</p>
      </div>

      <div className="bg-[#FDF1D0] border border-[#F6DF9C] text-stone-900 text-xs p-5 rounded-2xl flex items-start gap-3 shadow-warm-xs">
        <ShieldAlert className="w-5 h-5 text-stone-800 flex-shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <strong className="font-bold text-stone-900 font-sans uppercase tracking-wider block mb-0.5">Emergency Notice:</strong> This calculator provides mathematical estimations only. If your dog consumed chocolate, contact ASPCA Poison Control (888-426-4435) or visit an emergency vet immediately.
        </div>
      </div>
    </div>
  );
}

export function BenadrylDosageCalculatorWidget() {
  const [weightLbs, setWeightLbs] = useState<number>(25);
  const [copied, setCopied] = useState<boolean>(false);

  const currentLbs = weightLbs || 1;
  const targetMg = currentLbs * 1.0;
  const pills25mg = targetMg / 25;
  const liquidMl = (targetMg / 12.5) * 5;

  const handleCopy = () => {
    const text = `Benadryl Dosage for ${currentLbs} lb dog: ${targetMg} mg (${formatNumber(pills25mg, 1)} x 25mg tablets OR ${formatNumber(liquidMl, 1)} mL liquid).`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-3xl border border-[#E8E4DC] p-6 md:p-8 max-w-3xl mx-auto my-6 space-y-6 shadow-warm-xs">
      <div className="flex items-center justify-between pb-4 border-b border-[#E8E4DC]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#162737] text-white flex items-center justify-center font-bold shadow-warm-xs">
            <Pill className="w-5 h-5 text-[#0B63E5]" />
          </div>
          <div>
            <h3 className="text-xl font-serif font-bold text-[#1C1917]">Benadryl (Diphenhydramine) Dosage</h3>
            <p className="text-xs text-stone-500 font-sans">Standard veterinary baseline: 1 mg per lb body weight</p>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">
          Dog Body Weight: <span className="text-[#0B63E5] font-extrabold">{currentLbs} lbs ({(currentLbs / 2.20462).toFixed(1)} kg)</span>
        </label>
        <input
          type="range"
          min="5"
          max="120"
          value={currentLbs}
          onChange={(e) => setWeightLbs(parseInt(e.target.value))}
          className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#0B63E5]"
        />
      </div>

      <div className="bg-[#162737] text-white p-6 sm:p-7 rounded-3xl border border-[#0D1A25] space-y-4 shadow-warm-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <div className="text-xs text-stone-300 font-bold uppercase font-sans">Standard 25mg Tablets</div>
            <div className="text-4xl font-serif font-bold text-[#FDF1D0] mt-1">{formatNumber(pills25mg, 1)} Pill(s)</div>
            <div className="text-xs text-stone-300 font-medium mt-1">Target Dose: {targetMg} mg</div>
          </div>
          <div>
            <div className="text-xs text-stone-300 font-bold uppercase font-sans">Children&apos;s Liquid (12.5mg/5mL)</div>
            <div className="text-4xl font-serif font-bold text-white mt-1">{formatNumber(liquidMl, 1)} mL</div>
            <div className="text-xs text-stone-300 font-medium mt-1">Administer every 8-12 hours</div>
          </div>
        </div>

        <div className="pt-3 border-t border-white/10 flex justify-end">
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

      <div className="bg-[#FDF1D0] border border-[#F6DF9C] text-stone-900 p-5 rounded-2xl flex items-start gap-3 shadow-warm-xs">
        <AlertTriangle className="w-5 h-5 text-stone-800 flex-shrink-0 mt-0.5" />
        <div className="text-xs leading-relaxed font-normal">
          <strong className="font-bold text-stone-900 font-sans uppercase tracking-wider block mb-1">Veterinary Medical Disclaimer</strong>
          This calculator is for informational reference only. Always confirm medication types and dosages with your veterinarian prior to administration. NEVER use products containing decongestants (Pseudoephedrine) or Xylitol, which are toxic to dogs.
        </div>
      </div>
    </div>
  );
}

export function XylitolToxicityCalculatorWidget() {
  const [weightLbs, setWeightLbs] = useState<number>(30);
  const [amountGrams, setAmountGrams] = useState<number>(1.5);

  const weightKg = weightLbs / 2.20462;
  const doseMgKg = (amountGrams * 1000) / (weightKg || 1);

  const isHypoglycemia = doseMgKg >= 100;
  const isHepaticFailure = doseMgKg >= 500;

  return (
    <div className="bg-white rounded-3xl border border-[#E8E4DC] p-6 md:p-8 max-w-3xl mx-auto my-6 space-y-6 shadow-warm-xs">
      <div className="flex items-center gap-3 pb-4 border-b border-[#E8E4DC]">
        <div className="w-10 h-10 rounded-2xl bg-[#162737] text-white flex items-center justify-center font-bold shadow-warm-xs">
          <AlertOctagon className="w-5 h-5 text-rose-400" />
        </div>
        <div>
          <h3 className="text-xl font-serif font-bold text-[#1C1917]">Xylitol (Birch Sugar) Toxicity Calculator</h3>
          <p className="text-xs text-stone-500 font-sans">Hypoglycemia threshold &gt;100 mg/kg | Acute Liver Failure &gt;500 mg/kg</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">Dog Weight (lbs)</label>
          <input
            type="number"
            value={weightLbs}
            onChange={(e) => setWeightLbs(parseFloat(e.target.value) || 1)}
            className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-4 py-2.5 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5]"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">Xylitol Consumed (Grams)</label>
          <input
            type="number"
            step="0.1"
            value={amountGrams}
            onChange={(e) => setAmountGrams(parseFloat(e.target.value) || 0)}
            className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-4 py-2.5 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5]"
          />
        </div>
      </div>

      <div className="bg-[#162737] text-white p-6 sm:p-7 rounded-3xl border border-[#0D1A25] space-y-3 text-center shadow-warm-sm">
        <div className="text-xs text-stone-300 font-bold uppercase tracking-wider font-sans">Calculated Dose Load</div>
        <div className="text-4xl sm:text-5xl font-serif font-bold text-[#FDF1D0]">{doseMgKg.toFixed(0)} mg/kg</div>
        <p className="text-xs text-stone-300 font-medium">
          {isHepaticFailure
            ? 'CRITICAL RISK FOR ACUTE HEPATIC (LIVER) FAILURE! Emergency vet care required immediately.'
            : isHypoglycemia
            ? 'HIGH RISK FOR SEVERE HYPOGLYCEMIA (Low Blood Sugar). Contact Emergency Vet or Poison Control immediately.'
            : 'Low risk threshold detected. Monitor for lethargy or vomiting.'}
        </p>
      </div>
    </div>
  );
}

export function GrapeToxicityCalculatorWidget() {
  const [weightLbs, setWeightLbs] = useState<number>(40);
  const [grapeCount, setGrapeCount] = useState<number>(5);

  return (
    <div className="bg-white rounded-3xl border border-[#E8E4DC] p-6 md:p-8 max-w-3xl mx-auto my-6 space-y-6 shadow-warm-xs">
      <div className="flex items-center gap-3 pb-4 border-b border-[#E8E4DC]">
        <div className="w-10 h-10 rounded-2xl bg-[#162737] text-white flex items-center justify-center font-bold shadow-warm-xs">
          <AlertOctagon className="w-5 h-5 text-rose-400" />
        </div>
        <div>
          <h3 className="text-xl font-serif font-bold text-[#1C1917]">Grape &amp; Raisin Toxicity Estimator</h3>
          <p className="text-xs text-stone-500 font-sans">Idiosyncratic Tartaric Acid Nephrotoxicity Risk</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">Dog Weight (lbs)</label>
          <input
            type="number"
            value={weightLbs}
            onChange={(e) => setWeightLbs(parseFloat(e.target.value) || 1)}
            className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-4 py-2.5 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5]"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">Grapes or Raisins Eaten</label>
          <input
            type="number"
            value={grapeCount}
            onChange={(e) => setGrapeCount(parseInt(e.target.value) || 0)}
            className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-4 py-2.5 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5]"
          />
        </div>
      </div>

      <div className="bg-[#162737] text-white p-6 sm:p-7 rounded-3xl border border-[#0D1A25] space-y-3 text-center shadow-warm-sm">
        <div className="text-xs text-stone-300 font-bold uppercase tracking-wider font-sans">Clinical Risk Assessment</div>
        <div className="text-2xl sm:text-3xl font-serif font-bold text-[#FDF1D0]">POTENTIAL ACUTE RENAL FAILURE RISK</div>
        <p className="text-xs text-stone-300 font-normal leading-relaxed max-w-xl mx-auto">
          Grape toxicity is idiosyncratic (unpredictable based on weight). Even a single grape or raisin can trigger acute kidney failure in sensitive dogs. Contact ASPCA Poison Control (888-426-4435) or visit a vet immediately.
        </p>
      </div>
    </div>
  );
}

export function PregnancyDueDateCalculatorWidget() {
  const [matingDate, setMatingDate] = useState<string>('2026-08-01');

  const dateObj = new Date(matingDate || Date.now());
  const dueDateMin = new Date(dateObj);
  dueDateMin.setDate(dueDateMin.getDate() + 58);

  const dueDateAvg = new Date(dateObj);
  dueDateAvg.setDate(dueDateAvg.getDate() + 63);

  const dueDateMax = new Date(dateObj);
  dueDateMax.setDate(dueDateMax.getDate() + 68);

  return (
    <div className="bg-white rounded-3xl border border-[#E8E4DC] p-6 md:p-8 max-w-3xl mx-auto my-6 space-y-6 shadow-warm-xs">
      <div className="flex items-center gap-3 pb-4 border-b border-[#E8E4DC]">
        <div className="w-10 h-10 rounded-2xl bg-[#162737] text-white flex items-center justify-center font-bold shadow-warm-xs">
          <Calendar className="w-5 h-5 text-[#0B63E5]" />
        </div>
        <div>
          <h3 className="text-xl font-serif font-bold text-[#1C1917]">Canine Pregnancy Due Date Calculator</h3>
          <p className="text-xs text-stone-500 font-sans">Standard 63-day canine gestation calculation</p>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">First Mating / Ovulation Date</label>
        <input
          type="date"
          value={matingDate}
          onChange={(e) => setMatingDate(e.target.value)}
          className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-4 py-2.5 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5]"
        />
      </div>

      <div className="bg-[#162737] text-white p-6 sm:p-7 rounded-3xl border border-[#0D1A25] space-y-3 text-center shadow-warm-sm">
        <div className="text-xs text-stone-300 font-bold uppercase tracking-wider font-sans">Estimated Whelping (Due Date)</div>
        <div className="text-3xl sm:text-4xl font-serif font-bold text-[#FDF1D0]">{dueDateAvg.toDateString()}</div>
        <p className="text-xs text-stone-300 font-medium">Standard Window (63 days): {dueDateMin.toLocaleDateString()} – {dueDateMax.toLocaleDateString()}</p>
      </div>
    </div>
  );
}

export function WaterIntakeCalculatorWidget() {
  const [weightLbs, setWeightLbs] = useState<number>(30);
  const weightKg = weightLbs / 2.20462;
  const minMl = weightKg * 50;
  const maxMl = weightKg * 60;
  const minOz = minMl / 29.5735;
  const maxOz = maxMl / 29.5735;

  return (
    <div className="bg-white rounded-3xl border border-[#E8E4DC] p-6 md:p-8 max-w-3xl mx-auto my-6 space-y-6 shadow-warm-xs">
      <div className="flex items-center gap-3 pb-4 border-b border-[#E8E4DC]">
        <div className="w-10 h-10 rounded-2xl bg-[#162737] text-white flex items-center justify-center font-bold shadow-warm-xs">
          <Droplets className="w-5 h-5 text-[#0B63E5]" />
        </div>
        <div>
          <h3 className="text-xl font-serif font-bold text-[#1C1917]">Daily Dog Water Intake Calculator</h3>
          <p className="text-xs text-stone-500 font-sans">Baseline requirement: 50-60 mL water per kg body weight</p>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">Dog Weight (lbs)</label>
        <input
          type="number"
          value={weightLbs}
          onChange={(e) => setWeightLbs(parseFloat(e.target.value) || 1)}
          className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-4 py-2.5 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5]"
        />
      </div>

      <div className="bg-[#162737] text-white p-6 sm:p-7 rounded-3xl border border-[#0D1A25] space-y-3 text-center shadow-warm-sm">
        <div className="text-xs text-stone-300 font-bold uppercase tracking-wider font-sans">Recommended Daily Water Intake</div>
        <div className="text-3xl sm:text-4xl font-serif font-bold text-[#FDF1D0]">{minOz.toFixed(0)} - {maxOz.toFixed(0)} Fluid Ounces</div>
        <p className="text-xs text-stone-300 font-medium">({Math.round(minMl)} - {Math.round(maxMl)} mL / day). Increase in hot weather or active exertion.</p>
      </div>
    </div>
  );
}

export function DehydrationRiskCalculatorWidget() {
  const [skinTurgorSec, setSkinTurgorSec] = useState<number>(1);

  let status = 'Normal Hydration (0-5%)';
  if (skinTurgorSec >= 4) status = 'Severe Dehydration (>10%) - Emergency Vet Care Needed!';
  else if (skinTurgorSec >= 2) status = 'Moderate Dehydration (6-9%) - Offer Fluid Replacement';

  return (
    <div className="bg-white rounded-3xl border border-[#E8E4DC] p-6 md:p-8 max-w-3xl mx-auto my-6 space-y-6 shadow-warm-xs">
      <h3 className="text-xl font-serif font-bold text-[#1C1917]">Dog Dehydration Risk &amp; Skin Turgor Checker</h3>
      <div>
        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">Skin Snap-Back Time (Seconds)</label>
        <input
          type="number"
          step="0.5"
          value={skinTurgorSec}
          onChange={(e) => setSkinTurgorSec(parseFloat(e.target.value) || 0)}
          className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-4 py-2.5 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5]"
        />
      </div>

      <div className="bg-[#162737] text-white p-6 sm:p-7 rounded-3xl border border-[#0D1A25] space-y-3 text-center shadow-warm-sm">
        <div className="text-xs text-stone-300 font-bold uppercase tracking-wider font-sans">Hydration Status Assessment</div>
        <div className="text-2xl sm:text-3xl font-serif font-bold text-[#FDF1D0]">{status}</div>
        <p className="text-xs text-stone-300 font-medium">Check sticky gums, sunken eyes, or lethargy if dehydration is suspected.</p>
      </div>
    </div>
  );
}

export function HeatCycleTrackerWidget() {
  const [lastHeatDate, setLastHeatDate] = useState<string>('2026-03-01');

  const d = new Date(lastHeatDate || Date.now());
  const nextHeat = new Date(d);
  nextHeat.setMonth(nextHeat.getMonth() + 6);

  return (
    <div className="bg-white rounded-3xl border border-[#E8E4DC] p-6 md:p-8 max-w-3xl mx-auto my-6 space-y-6 shadow-warm-xs">
      <h3 className="text-xl font-serif font-bold text-[#1C1917]">Dog Heat Cycle (Estrus) Predictor</h3>
      <div>
        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-sans">Start Date of Last Heat Cycle</label>
        <input
          type="date"
          value={lastHeatDate}
          onChange={(e) => setLastHeatDate(e.target.value)}
          className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-4 py-2.5 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5]"
        />
      </div>

      <div className="bg-[#162737] text-white p-6 sm:p-7 rounded-3xl border border-[#0D1A25] space-y-3 text-center shadow-warm-sm">
        <div className="text-xs text-stone-300 font-bold uppercase tracking-wider font-sans">Estimated Next Heat Window</div>
        <div className="text-3xl sm:text-4xl font-serif font-bold text-[#FDF1D0]">{nextHeat.toDateString()}</div>
        <p className="text-xs text-stone-300 font-medium">Average estrus frequency is every 6 months (range: 5-8 months depending on size).</p>
      </div>
    </div>
  );
}
