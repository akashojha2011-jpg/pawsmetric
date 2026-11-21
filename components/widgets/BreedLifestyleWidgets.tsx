'use client';

import React, { useState } from 'react';
import { POPULAR_BREEDS } from '@/lib/data/breeds';
import { Sparkles, Dna, Activity, Footprints, Ruler, HeartHandshake } from 'lucide-react';
import confetti from 'canvas-confetti';

export function BreedWeightHeightPredictorWidget() {
  const [breedId, setBreedId] = useState<string>('labrador-retriever');

  const breed = POPULAR_BREEDS.find((b) => b.id === breedId) || POPULAR_BREEDS[0];

  return (
    <div className="bg-white rounded-2xl border border-[#E8E4DC] p-6 md:p-8 max-w-3xl mx-auto my-6 space-y-6 shadow-warm-xs">
      <div className="flex items-center gap-3 pb-4 border-b border-[#E8E4DC]">
        <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8E4DC] text-[#162737] flex items-center justify-center font-bold">
          <Dna className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-serif font-bold text-[#162737]">Purebred Weight & Height Standards</h3>
          <p className="text-xs text-stone-500">Official AKC standard reference ranges</p>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">Select Breed</label>
        <select
          value={breedId}
          onChange={(e) => setBreedId(e.target.value)}
          className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-4 py-2.5 font-bold text-stone-900 text-sm focus:outline-none focus:border-[#0B63E5] focus:bg-white"
        >
          {POPULAR_BREEDS.map((b) => (
            <option key={b.id} value={b.id}>
              {b.name} ({b.sizeCategory.toUpperCase()})
            </option>
          ))}
        </select>
      </div>

      <div className="bg-[#162737] text-white p-6 md:p-8 rounded-2xl border border-stone-800 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center shadow-warm-sm">
        <div>
          <div className="text-xs text-stone-400 font-bold uppercase tracking-wider">Male Adult Weight</div>
          <div className="text-2xl font-serif font-extrabold text-[#FDF1D0] mt-1">{breed.avgAdultWeightMaleKg} kg</div>
          <div className="text-xs text-stone-300">({Math.round(breed.avgAdultWeightMaleKg * 2.20462)} lbs)</div>
        </div>
        <div>
          <div className="text-xs text-stone-400 font-bold uppercase tracking-wider">Female Adult Weight</div>
          <div className="text-2xl font-serif font-extrabold text-[#FDF1D0] mt-1">{breed.avgAdultWeightFemaleKg} kg</div>
          <div className="text-xs text-stone-300">({Math.round(breed.avgAdultWeightFemaleKg * 2.20462)} lbs)</div>
        </div>
        <div>
          <div className="text-xs text-stone-400 font-bold uppercase tracking-wider">Average Lifespan</div>
          <div className="text-2xl font-serif font-extrabold text-white mt-1">{breed.avgLifespan}</div>
          <div className="text-xs text-stone-300">Expected range</div>
        </div>
      </div>
    </div>
  );
}

export function MixedBreedSizeEstimatorWidget() {
  const [weightKg, setWeightKg] = useState<number>(8);
  const [ageWeeks, setAgeWeeks] = useState<number>(14);

  const currentKg = weightKg || 1;
  const currentWeeks = ageWeeks || 8;
  const factor = (52 / currentWeeks) ** 0.75;
  const estimatedKg = currentKg * factor;

  return (
    <div className="bg-white rounded-2xl border border-[#E8E4DC] p-6 md:p-8 max-w-3xl mx-auto my-6 space-y-6 shadow-warm-xs">
      <div className="flex items-center gap-3 pb-4 border-b border-[#E8E4DC]">
        <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8E4DC] text-[#162737] flex items-center justify-center font-bold">
          <HeartHandshake className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-serif font-bold text-[#162737]">Mixed Breed Rescue Adult Size Estimator</h3>
          <p className="text-xs text-stone-500">Non-linear exponential puppy growth curve</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">Current Puppy Weight (kg)</label>
          <input
            type="number"
            value={weightKg}
            onChange={(e) => setWeightKg(parseFloat(e.target.value) || 1)}
            className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-3.5 py-2.5 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5] focus:bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">Puppy Age (Weeks)</label>
          <input
            type="number"
            min="6"
            max="40"
            value={ageWeeks}
            onChange={(e) => setAgeWeeks(parseInt(e.target.value) || 12)}
            className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-3.5 py-2.5 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5] focus:bg-white"
          />
        </div>
      </div>

      <div className="bg-[#162737] text-white p-6 md:p-8 rounded-2xl border border-stone-800 text-center space-y-2 shadow-warm-sm">
        <div className="text-xs text-stone-400 font-bold uppercase tracking-wider">Predicted Adult Size</div>
        <div className="text-3xl md:text-4xl font-serif font-extrabold text-[#FDF1D0]">
          {estimatedKg.toFixed(1)} kg ({Math.round(estimatedKg * 2.20462)} lbs)
        </div>
        <p className="text-xs text-stone-300 font-medium">Estimated Range: {(estimatedKg * 0.9).toFixed(1)} – {(estimatedKg * 1.1).toFixed(1)} kg</p>
      </div>
    </div>
  );
}

export function LitterSizeEstimatorWidget() {
  const [sizeClass, setSizeClass] = useState<'toy' | 'small' | 'medium' | 'large' | 'giant'>('large');

  const map = { toy: 2, small: 4, medium: 6, large: 8, giant: 10 };
  const avgPups = map[sizeClass];

  return (
    <div className="bg-white rounded-2xl border border-[#E8E4DC] p-6 md:p-8 max-w-3xl mx-auto my-6 space-y-6 shadow-warm-xs">
      <div className="flex items-center gap-3 pb-4 border-b border-[#E8E4DC]">
        <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8E4DC] text-[#162737] flex items-center justify-center font-bold">
          <Footprints className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-serif font-bold text-[#162737]">Litter Size Estimator</h3>
          <p className="text-xs text-stone-500">Maternal size and biological averages</p>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">Mother Breed Size Class</label>
        <select
          value={sizeClass}
          onChange={(e) => setSizeClass(e.target.value as any)}
          className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-4 py-2.5 font-bold text-stone-900 text-sm focus:outline-none focus:border-[#0B63E5] focus:bg-white"
        >
          <option value="toy">Toy Breed (&lt; 10 lbs)</option>
          <option value="small">Small Breed (11 – 25 lbs)</option>
          <option value="medium">Medium Breed (26 – 50 lbs)</option>
          <option value="large">Large Breed (51 – 90 lbs)</option>
          <option value="giant">Giant Breed (&gt; 90 lbs)</option>
        </select>
      </div>

      <div className="bg-[#162737] text-white p-6 md:p-8 rounded-2xl border border-stone-800 text-center space-y-2 shadow-warm-sm">
        <div className="text-xs text-stone-400 font-bold uppercase tracking-wider">Expected Litter Size</div>
        <div className="text-3xl md:text-4xl font-serif font-extrabold text-[#FDF1D0]">{avgPups} Puppies</div>
        <p className="text-xs text-stone-300 font-medium">Expected Range: {Math.max(1, avgPups - 2)} to {avgPups + 2} puppies</p>
      </div>
    </div>
  );
}

export function DogNameGeneratorWidget() {
  const [gender, setGender] = useState<'female' | 'male' | 'unisex'>('female');
  const [style, setStyle] = useState<string>('cute');
  const [generatedNames, setGeneratedNames] = useState<string[]>(['Bella', 'Luna', 'Daisy', 'Sadie']);

  const nameDb: Record<string, string[]> = {
    female_cute: ['Bella', 'Luna', 'Daisy', 'Sadie', 'Molly', 'Rosie', 'Coco', 'Chloe', 'Penny', 'Ruby'],
    female_classic: ['Lady', 'Maggie', 'Sophie', 'Zloe', 'Abby', 'Gracie', 'Lola', 'Sasha'],
    female_tough: ['Rory', 'Athena', 'Xena', 'Freya', 'Kira', 'Shadow', 'Storm', 'Nyx'],
    male_cute: ['Milo', 'Teddy', 'Buddy', 'Charlie', 'Max', 'Oliver', 'Toby', 'Archie', 'Finn'],
    male_classic: ['Duke', 'Buster', 'Sam', 'Jack', 'Henry', 'George', 'Jasper', 'Winston'],
    male_tough: ['Rex', 'Zeus', 'Thor', 'Diesel', 'Bruno', 'Titan', 'Maverick', 'Gunner'],
    unisex_cute: ['Coco', 'Bailey', 'River', 'Skye', 'Peanut', 'Ziggy', 'Scout', 'Riley'],
  };

  const handleGenerate = () => {
    const key = `${gender}_${style}`;
    const pool = nameDb[key] || nameDb['female_cute'];
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    setGeneratedNames(shuffled.slice(0, 4));

    try {
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });
    } catch (e) {
      // fallback
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-[#E8E4DC] p-6 md:p-8 max-w-3xl mx-auto my-6 space-y-6 shadow-warm-xs">
      <div className="flex items-center gap-3 pb-4 border-b border-[#E8E4DC]">
        <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8E4DC] text-[#162737] flex items-center justify-center font-bold">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-serif font-bold text-[#162737]">Puppy & Dog Name Generator</h3>
          <p className="text-xs text-stone-500">Filter by personality style and gender preference</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value as any)}
            className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-3.5 py-2.5 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5] focus:bg-white"
          >
            <option value="female">Female / Girl</option>
            <option value="male">Male / Boy</option>
            <option value="unisex">Unisex / Gender Neutral</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">Vibe / Style</label>
          <select
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-3.5 py-2.5 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5] focus:bg-white"
          >
            <option value="cute">Cute & Playful</option>
            <option value="classic">Classic & Timeless</option>
            <option value="tough">Strong & Feisty</option>
          </select>
        </div>
      </div>

      <button
        onClick={handleGenerate}
        className="w-full bg-[#0B63E5] hover:bg-[#0952be] text-white font-bold py-3.5 rounded-full transition-all shadow-warm-xs flex items-center justify-center gap-2"
      >
        <Sparkles className="w-4 h-4 text-[#FDF1D0]" />
        <span>Generate Top Names</span>
      </button>

      <div className="bg-[#162737] text-white p-6 md:p-8 rounded-2xl border border-stone-800 text-center space-y-3 shadow-warm-sm">
        <div className="text-xs text-stone-400 font-bold uppercase tracking-wider">Suggested Dog Names</div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {generatedNames.map((n) => (
            <div key={n} className="bg-[#213547] border border-stone-700 py-3 px-3 rounded-xl font-serif font-bold text-[#FDF1D0] text-lg">
              {n}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function WalkingPaceCalculatorWidget() {
  const [distanceMiles, setDistanceMiles] = useState<number>(2.5);
  const [dogSize, setDogSize] = useState<'small' | 'medium' | 'large'>('medium');

  const paceMinutesPerMile = dogSize === 'small' ? 24 : dogSize === 'medium' ? 18 : 15;
  const totalMinutes = distanceMiles * paceMinutesPerMile;

  return (
    <div className="bg-white rounded-2xl border border-[#E8E4DC] p-6 md:p-8 max-w-3xl mx-auto my-6 space-y-6 shadow-warm-xs">
      <div className="flex items-center gap-3 pb-4 border-b border-[#E8E4DC]">
        <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8E4DC] text-[#162737] flex items-center justify-center font-bold">
          <Footprints className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-serif font-bold text-[#162737]">Dog Walking Pace & Duration Calculator</h3>
          <p className="text-xs text-stone-500">Accounts for stride frequency and sniffing stops</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">Distance (Miles)</label>
          <input
            type="number"
            step="0.5"
            value={distanceMiles}
            onChange={(e) => setDistanceMiles(parseFloat(e.target.value) || 0)}
            className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-3.5 py-2.5 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5] focus:bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">Dog Stride Size</label>
          <select
            value={dogSize}
            onChange={(e) => setDogSize(e.target.value as any)}
            className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-3.5 py-2.5 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5] focus:bg-white"
          >
            <option value="small">Small Dog (Short Stride, ~24 min/mile)</option>
            <option value="medium">Medium Dog (Standard Stride, ~18 min/mile)</option>
            <option value="large">Large Dog (Long Stride, ~15 min/mile)</option>
          </select>
        </div>
      </div>

      <div className="bg-[#162737] text-white p-6 md:p-8 rounded-2xl border border-stone-800 space-y-2 text-center shadow-warm-sm">
        <div className="text-xs text-stone-400 font-bold uppercase tracking-wider">Estimated Walk Duration</div>
        <div className="text-3xl md:text-4xl font-serif font-extrabold text-[#FDF1D0]">{Math.round(totalMinutes)} Minutes</div>
        <p className="text-xs text-stone-300 font-medium">Allows comfortable sniffing stops and natural stride rhythm.</p>
      </div>
    </div>
  );
}

export function ExerciseNeedsCalculatorWidget() {
  const [weightKg, setWeightKg] = useState<number>(25);
  const [breedType, setBreedType] = useState<'working' | 'companion' | 'brachycephalic'>('working');

  const baseMinutes = 45;
  const mult = breedType === 'working' ? 1.5 : breedType === 'companion' ? 1.0 : 0.6;
  const targetMinutes = Math.round(baseMinutes * mult);

  return (
    <div className="bg-white rounded-2xl border border-[#E8E4DC] p-6 md:p-8 max-w-3xl mx-auto my-6 space-y-6 shadow-warm-xs">
      <div className="flex items-center gap-3 pb-4 border-b border-[#E8E4DC]">
        <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8E4DC] text-[#162737] flex items-center justify-center font-bold">
          <Activity className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-serif font-bold text-[#162737]">Daily Exercise Requirement Calculator</h3>
          <p className="text-xs text-stone-500">Calculate physical activity target per day</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">Dog Weight (kg)</label>
          <input
            type="number"
            value={weightKg}
            onChange={(e) => setWeightKg(parseFloat(e.target.value) || 0)}
            className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-3.5 py-2.5 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5] focus:bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">Breed Activity Group</label>
          <select
            value={breedType}
            onChange={(e) => setBreedType(e.target.value as any)}
            className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-3.5 py-2.5 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5] focus:bg-white"
          >
            <option value="working">High Energy / Working (Husky, Border Collie, Shepherds)</option>
            <option value="companion">Moderate Energy / Companion (Retriever, Spaniel)</option>
            <option value="brachycephalic">Low Energy / Flat-Faced (Pug, French Bulldog)</option>
          </select>
        </div>
      </div>

      <div className="bg-[#162737] text-white p-6 md:p-8 rounded-2xl border border-stone-800 text-center space-y-2 shadow-warm-sm">
        <div className="text-xs text-stone-400 font-bold uppercase tracking-wider">Recommended Daily Activity Target</div>
        <div className="text-3xl md:text-4xl font-serif font-extrabold text-[#FDF1D0]">{targetMinutes} Minutes / Day</div>
        <p className="text-xs text-stone-300 font-medium">Split into 2 daily walking sessions of ~{Math.round(targetMinutes / 2)} minutes each.</p>
      </div>
    </div>
  );
}

export function HeightComparisonCalculatorWidget() {
  const [shoulderInches, setShoulderInches] = useState<number>(24);
  const humanInches = 68; // 5'8"
  const ratio = (shoulderInches / humanInches) * 100;

  return (
    <div className="bg-white rounded-2xl border border-[#E8E4DC] p-6 md:p-8 max-w-3xl mx-auto my-6 space-y-6 shadow-warm-xs">
      <div className="flex items-center gap-3 pb-4 border-b border-[#E8E4DC]">
        <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8E4DC] text-[#162737] flex items-center justify-center font-bold">
          <Ruler className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-serif font-bold text-[#162737]">Dog Shoulder Height & Human Ratio Visualizer</h3>
          <p className="text-xs text-stone-500">Proportional anatomical scale comparison</p>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">Dog Shoulder Height (Inches)</label>
        <input
          type="number"
          value={shoulderInches}
          onChange={(e) => setShoulderInches(parseFloat(e.target.value) || 1)}
          className="w-full bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl px-3.5 py-2.5 text-stone-900 font-bold text-sm focus:outline-none focus:border-[#0B63E5] focus:bg-white"
        />
      </div>

      <div className="bg-[#162737] text-white p-6 md:p-8 rounded-2xl border border-stone-800 space-y-2 text-center shadow-warm-sm">
        <div className="text-xs text-stone-400 font-bold uppercase tracking-wider">Height Proportion Relative to Average Human (5'8")</div>
        <div className="text-3xl md:text-4xl font-serif font-extrabold text-[#FDF1D0]">{ratio.toFixed(0)}% Human Knee/Hip Height</div>
        <p className="text-xs text-stone-300 font-medium">Standing height at shoulder (withers): {shoulderInches} inches.</p>
      </div>
    </div>
  );
}
