export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  iconName: string;
  badgeColor: string;
  count?: number;
}

export const CATEGORIES: Category[] = [
  {
    id: 'age',
    slug: 'age',
    name: 'Age & Life Stage',
    description: 'Accurate biological age conversion, life expectancy, and puppy development stage calculators based on veterinary algorithms.',
    iconName: 'Clock',
    badgeColor: 'bg-slate-100 text-slate-800 border-slate-200',
  },
  {
    id: 'weight',
    slug: 'weight',
    name: 'Weight & Nutrition',
    description: 'Calorie requirements (RER/MER), body condition scoring (BCS), raw food models, feeding portions, and puppy growth charts.',
    iconName: 'Scale',
    badgeColor: 'bg-slate-100 text-slate-800 border-slate-200',
  },
  {
    id: 'health',
    slug: 'health',
    name: 'Health & Safety',
    description: 'Emergency toxicity estimators (chocolate, xylitol, grapes), medication dosage guidelines, water needs, and reproductive trackers.',
    iconName: 'HeartPulse',
    badgeColor: 'bg-slate-100 text-slate-800 border-slate-200',
  },
  {
    id: 'cost',
    slug: 'cost',
    name: 'Cost & Ownership',
    description: 'Financial forecasting tools for lifetime dog ownership, puppy first-year expenses, monthly food budgets, and vet emergency reserves.',
    iconName: 'Coins',
    badgeColor: 'bg-slate-100 text-slate-800 border-slate-200',
  },
  {
    id: 'size',
    slug: 'size',
    name: 'Size & Gear Fit',
    description: 'Calculators for exact crate sizing, harness measurements, airline carrier dimensions, coat lengths, and collar fitting rules.',
    iconName: 'Ruler',
    badgeColor: 'bg-slate-100 text-slate-800 border-slate-200',
  },
  {
    id: 'breed',
    slug: 'breed',
    name: 'Breed & Genetics',
    description: 'Size prediction models for purebred and mixed-breed puppies, litter size estimation, and breed standard comparisons.',
    iconName: 'Dna',
    badgeColor: 'bg-slate-100 text-slate-800 border-slate-200',
  },
  {
    id: 'lifestyle',
    slug: 'lifestyle',
    name: 'Fun & Lifestyle',
    description: 'Exercise calculators, daily walking pace targets, human-to-canine height comparisons, and instant dog name generators.',
    iconName: 'Smile',
    badgeColor: 'bg-slate-100 text-slate-800 border-slate-200',
  },
];
