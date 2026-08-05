'use client';

import React, { useState } from 'react';
import { POPULAR_BREEDS } from '@/lib/data/breeds';
import { Smile, Sparkles, Activity, Dna, Footprints } from 'lucide-react';
import confetti from 'canvas-confetti';

export function BreedWeightHeightPredictorWidget() {
  const [breedId, setBreedId] = useState<string>('labrador-retriever');

  const breed = POPULAR_BREEDS.find((b) => b.id === breedId) || POPULAR_BREEDS[0];

  return (
    <div className="bg-white rounded-2xl border border-[#E2E3D8] p-6 md:p-8 shadow-paid max-w-3xl mx-auto my-6 space-y-6">
      <h3 className="text-xl font-black text-[#082C1B]">Purebred Weight & Height Standards</h3>
      <div>
        <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-1.5">Select Breed</label>
        <select
          value={breedId}
          onChange={(e) => setBreedId(e.target.value)}
          className="w-full bg-[#F0F1EA] border border-[#E2E3D8] rounded-xl px-4 py-2.5 font-bold text-[#082C1B]"
        >
          {POPULAR_BREEDS.map((b) => (
            <option key={b.id} value={b.id}>
              {b.name} ({b.sizeCategory.toUpperCase()})
            </option>
          ))}
        </select>
      </div>

      <div className="bg-[#082C1B] text-white p-6 rounded-2xl border border-[#0d4028] grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-xs text-[#A2B5AB] font-extrabold uppercase">Male Adult Weight</div>
          <div className="text-2xl font-black text-[#8BF03B] mt-1">{breed.avgAdultWeightMaleKg} kg</div>
          <div className="text-xs text-[#A2B5AB]">({Math.round(breed.avgAdultWeightMaleKg * 2.20462)} lbs)</div>
        </div>
        <div>
          <div className="text-xs text-[#A2B5AB] font-extrabold uppercase">Female Adult Weight</div>
          <div className="text-2xl font-black text-[#8BF03B] mt-1">{breed.avgAdultWeightFemaleKg} kg</div>
          <div className="text-xs text-[#A2B5AB]">({Math.round(breed.avgAdultWeightFemaleKg * 2.20462)} lbs)</div>
        </div>
        <div>
          <div className="text-xs text-[#A2B5AB] font-extrabold uppercase">Average Lifespan</div>
          <div className="text-xl font-black text-white mt-1">{breed.avgLifespan}</div>
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
    <div className="bg-white rounded-2xl border border-[#E2E3D8] p-6 md:p-8 shadow-paid max-w-3xl mx-auto my-6 space-y-6">
      <h3 className="text-xl font-black text-[#082C1B]">Mixed Breed Rescue Adult Size Estimator</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-1.5">Current Puppy Weight (kg)</label>
          <input
            type="number"
            value={weightKg}
            onChange={(e) => setWeightKg(parseFloat(e.target.value) || 1)}
            className="w-full bg-[#F0F1EA] border border-[#E2E3D8] rounded-xl px-3 py-2 text-[#082C1B] font-bold"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-1.5">Puppy Age (Weeks)</label>
          <input
            type="number"
            min="6"
            max="40"
            value={ageWeeks}
            onChange={(e) => setAgeWeeks(parseInt(e.target.value) || 12)}
            className="w-full bg-[#F0F1EA] border border-[#E2E3D8] rounded-xl px-3 py-2 text-[#082C1B] font-bold"
          />
        </div>
      </div>

      <div className="bg-[#082C1B] text-white p-6 rounded-2xl border border-[#0d4028] text-center">
        <div className="text-xs text-[#A2B5AB] font-extrabold uppercase">Predicted Adult Size</div>
        <div className="text-4xl font-black text-[#8BF03B] my-2">
          {estimatedKg.toFixed(1)} kg ({Math.round(estimatedKg * 2.20462)} lbs)
        </div>
        <p className="text-xs text-[#A2B5AB] font-semibold">Estimated Range: {(estimatedKg * 0.9).toFixed(1)} - {(estimatedKg * 1.1).toFixed(1)} kg</p>
      </div>
    </div>
  );
}

export function LitterSizeEstimatorWidget() {
  const [sizeClass, setSizeClass] = useState<'toy' | 'small' | 'medium' | 'large' | 'giant'>('large');

  const map = { toy: 2, small: 4, medium: 6, large: 8, giant: 10 };
  const avgPups = map[sizeClass];

  return (
    <div className="bg-white rounded-2xl border border-[#E2E3D8] p-6 md:p-8 shadow-paid max-w-3xl mx-auto my-6 space-y-6">
      <h3 className="text-xl font-black text-[#082C1B]">Litter Size Estimator</h3>
      <div>
        <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-1.5">Mother Breed Size Class</label>
        <select
          value={sizeClass}
          onChange={(e) => setSizeClass(e.target.value as any)}
          className="w-full bg-[#F0F1EA] border border-[#E2E3D8] rounded-xl px-4 py-2.5 font-bold text-[#082C1B]"
        >
          <option value="toy">Toy Breed (&lt; 10 lbs)</option>
          <option value="small">Small Breed (11 - 25 lbs)</option>
          <option value="medium">Medium Breed (26 - 50 lbs)</option>
          <option value="large">Large Breed (51 - 90 lbs)</option>
          <option value="giant">Giant Breed (&gt; 90 lbs)</option>
        </select>
      </div>

      <div className="bg-[#082C1B] text-white p-6 rounded-2xl border border-[#0d4028] text-center">
        <div className="text-xs text-[#A2B5AB] font-extrabold uppercase">Expected Litter Size</div>
        <div className="text-4xl font-black text-[#8BF03B] my-2">{avgPups} Puppies</div>
        <p className="text-xs text-[#A2B5AB] font-semibold">Expected Range: {Math.max(1, avgPups - 2)} to {avgPups + 2} puppies</p>
      </div>
    </div>
  );
}

export function DogNameGeneratorWidget() {
  const [gender, setGender] = useState<'male' | 'female' | 'unisex'>('female');
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
    <div className="bg-white rounded-2xl border border-[#E2E3D8] p-6 md:p-8 shadow-paid max-w-3xl mx-auto my-6 space-y-6">
      <div className="flex items-center gap-3 pb-4 border-b border-[#F0F1EA]">
        <div className="w-10 h-10 rounded-xl bg-[#082C1B] text-[#8BF03B] flex items-center justify-center font-bold">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-black text-[#082C1B]">Instant Dog Name Generator</h3>
          <p className="text-xs font-semibold text-[#4D534E]">Acoustic two-syllable canine call names</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-1.5">Gender Preference</label>
          <div className="flex bg-[#F0F1EA] p-1 rounded-xl">
            {(['female', 'male', 'unisex'] as const).map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => setGender(g)}
                className={`flex-1 py-1.5 text-xs font-bold capitalize rounded-lg ${gender === g ? 'bg-[#082C1B] text-[#8BF03B] shadow-sm' : 'text-[#4D534E]'}`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-1.5">Style / Vibe</label>
          <select
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            className="w-full bg-[#F0F1EA] border border-[#E2E3D8] rounded-xl px-3 py-2 text-[#082C1B] font-bold"
          >
            <option value="cute">Cute & Playful</option>
            <option value="classic">Classic & Traditional</option>
            <option value="tough">Tough & Strong</option>
          </select>
        </div>
      </div>

      <button
        type="button"
        onClick={handleGenerate}
        className="w-full bg-[#082C1B] hover:bg-[#0d4028] text-white font-extrabold py-3 px-6 rounded-xl shadow-paid transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
      >
        <Sparkles className="w-4 h-4 text-[#8BF03B]" />
        Generate Dog Names
      </button>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {generatedNames.map((n) => (
          <div key={n} className="bg-[#082C1B] text-[#8BF03B] font-black text-xl py-4 rounded-xl text-center shadow-paid border border-[#0d4028]">
            {n}
          </div>
        ))}
      </div>
    </div>
  );
}

export function WalkingPaceCalculatorWidget() {
  const [weightKg, setWeightKg] = useState<number>(20);
  const [energyTier, setEnergyTier] = useState<number>(3);

  const baseMiles = (energyTier || 1) * 1.2;

  return (
    <div className="bg-white rounded-2xl border border-[#E2E3D8] p-6 md:p-8 shadow-paid max-w-3xl mx-auto my-6 space-y-6">
      <h3 className="text-xl font-black text-[#082C1B]">Dog Walking Distance & Pace Calculator</h3>
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
          <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-1.5">Breed Energy Tier</label>
          <select
            value={energyTier}
            onChange={(e) => setEnergyTier(parseInt(e.target.value))}
            className="w-full bg-[#F0F1EA] border border-[#E2E3D8] rounded-xl px-3 py-2 text-[#082C1B] font-bold"
          >
            <option value={1}>Low Energy (e.g. Basset Hound)</option>
            <option value={2}>Moderate Energy (e.g. Beagle)</option>
            <option value={3}>High Energy (e.g. Labrador Retriever)</option>
            <option value={4}>Working / Athletic (e.g. Border Collie)</option>
          </select>
        </div>
      </div>

      <div className="bg-[#082C1B] text-white p-6 rounded-2xl border border-[#0d4028] text-center">
        <div className="text-xs text-[#A2B5AB] font-extrabold uppercase">Recommended Daily Distance</div>
        <div className="text-4xl font-black text-[#8BF03B] my-2">{baseMiles.toFixed(1)} Miles</div>
        <p className="text-xs text-[#A2B5AB] font-semibold">Target Duration: {Math.round(baseMiles * 22)} minutes total daily walking</p>
      </div>
    </div>
  );
}

export function ExerciseNeedsCalculatorWidget() {
  const [tier, setTier] = useState<number>(3);

  const physicalMap = [30, 60, 85, 110];
  const mentalMap = [15, 25, 35, 50];

  const currentTier = tier || 1;
  const physicalMins = physicalMap[currentTier - 1];
  const mentalMins = mentalMap[currentTier - 1];

  return (
    <div className="bg-white rounded-2xl border border-[#E2E3D8] p-6 md:p-8 shadow-paid max-w-3xl mx-auto my-6 space-y-6">
      <h3 className="text-xl font-black text-[#082C1B]">Daily Exercise & Mental Enrichment Calculator</h3>
      <div>
        <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-1.5">Breed Energy Tier</label>
        <select
          value={tier}
          onChange={(e) => setTier(parseInt(e.target.value))}
          className="w-full bg-[#F0F1EA] border border-[#E2E3D8] rounded-xl px-4 py-2.5 font-bold text-[#082C1B]"
        >
          <option value={1}>Tier 1: Low Energy (30-45 mins)</option>
          <option value={2}>Tier 2: Moderate Energy (60 mins)</option>
          <option value={3}>Tier 3: High Energy (80-90 mins)</option>
          <option value={4}>Tier 4: Ultra Working Tier (120+ mins)</option>
        </select>
      </div>

      <div className="bg-[#082C1B] text-white p-6 rounded-2xl border border-[#0d4028] grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
        <div>
          <div className="text-xs text-[#A2B5AB] font-extrabold uppercase">Physical Activity</div>
          <div className="text-3xl font-black text-[#8BF03B] mt-1">{physicalMins} Mins / day</div>
        </div>
        <div>
          <div className="text-xs text-[#A2B5AB] font-extrabold uppercase">Brain Enrichment</div>
          <div className="text-3xl font-black text-white mt-1">{mentalMins} Mins / day</div>
        </div>
      </div>
    </div>
  );
}

export function HeightComparisonCalculatorWidget() {
  const [dogHeightCm, setDogHeightCm] = useState<number>(58);
  const [humanHeightCm, setHumanHeightCm] = useState<number>(175);

  const dogH = dogHeightCm || 1;
  const humanH = humanHeightCm || 1;

  const ratio = (dogH / humanH) * 100;
  const hindReachCm = dogH * 2.3;

  return (
    <div className="bg-white rounded-2xl border border-[#E2E3D8] p-6 md:p-8 shadow-paid max-w-3xl mx-auto my-6 space-y-6">
      <h3 className="text-xl font-black text-[#082C1B]">Dog to Human Height Comparison</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-1.5">Dog Shoulder Height (cm)</label>
          <input
            type="number"
            value={dogHeightCm}
            onChange={(e) => setDogHeightCm(parseFloat(e.target.value) || 1)}
            className="w-full bg-[#F0F1EA] border border-[#E2E3D8] rounded-xl px-3 py-2 text-[#082C1B] font-bold"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-[#082C1B] uppercase tracking-wider mb-1.5">Human Standing Height (cm)</label>
          <input
            type="number"
            value={humanHeightCm}
            onChange={(e) => setHumanHeightCm(parseFloat(e.target.value) || 1)}
            className="w-full bg-[#F0F1EA] border border-[#E2E3D8] rounded-xl px-3 py-2 text-[#082C1B] font-bold"
          />
        </div>
      </div>

      <div className="bg-[#082C1B] text-white p-6 rounded-2xl border border-[#0d4028] text-center">
        <div className="text-xs text-[#A2B5AB] font-extrabold uppercase">Proportional Height Ratio</div>
        <div className="text-4xl font-black text-[#8BF03B] my-2">{ratio.toFixed(1)}% of Human Height</div>
        <p className="text-xs text-[#A2B5AB] font-semibold">Hind legs reach: ~{Math.round(hindReachCm)} cm ({Math.round(hindReachCm / 2.54)} inches)</p>
      </div>
    </div>
  );
}
