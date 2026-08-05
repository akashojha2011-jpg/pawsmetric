export interface BreedData {
  id: string;
  name: string;
  sizeCategory: 'small' | 'medium' | 'large' | 'giant';
  avgLifespan: string;
  avgAdultWeightMaleKg: number;
  avgAdultWeightFemaleKg: number;
  avgAdultHeightCm: number;
  growthFactor: number; // Multiplier at 16 weeks
  chocolateSensitivity: number; // baseline
}

export const POPULAR_BREEDS: BreedData[] = [
  { id: 'labrador-retriever', name: 'Labrador Retriever', sizeCategory: 'large', avgLifespan: '10 - 12 years', avgAdultWeightMaleKg: 32, avgAdultWeightFemaleKg: 28, avgAdultHeightCm: 57, growthFactor: 1.8, chocolateSensitivity: 1.0 },
  { id: 'german-shepherd', name: 'German Shepherd', sizeCategory: 'large', avgLifespan: '9 - 13 years', avgAdultWeightMaleKg: 36, avgAdultWeightFemaleKg: 28, avgAdultHeightCm: 62, growthFactor: 1.85, chocolateSensitivity: 1.0 },
  { id: 'golden-retriever', name: 'Golden Retriever', sizeCategory: 'large', avgLifespan: '10 - 12 years', avgAdultWeightMaleKg: 32, avgAdultWeightFemaleKg: 27, avgAdultHeightCm: 58, growthFactor: 1.8, chocolateSensitivity: 1.0 },
  { id: 'french-bulldog', name: 'French Bulldog', sizeCategory: 'small', avgLifespan: '10 - 12 years', avgAdultWeightMaleKg: 12, avgAdultWeightFemaleKg: 10, avgAdultHeightCm: 30, growthFactor: 1.4, chocolateSensitivity: 1.0 },
  { id: 'chihuahua', name: 'Chihuahua', sizeCategory: 'small', avgLifespan: '14 - 18 years', avgAdultWeightMaleKg: 2.5, avgAdultWeightFemaleKg: 2.2, avgAdultHeightCm: 18, growthFactor: 1.3, chocolateSensitivity: 1.0 },
  { id: 'poodle-standard', name: 'Poodle (Standard)', sizeCategory: 'large', avgLifespan: '12 - 15 years', avgAdultWeightMaleKg: 26, avgAdultWeightFemaleKg: 22, avgAdultHeightCm: 50, growthFactor: 1.75, chocolateSensitivity: 1.0 },
  { id: 'poodle-toy', name: 'Poodle (Toy)', sizeCategory: 'small', avgLifespan: '14 - 18 years', avgAdultWeightMaleKg: 4, avgAdultWeightFemaleKg: 3.5, avgAdultHeightCm: 25, growthFactor: 1.35, chocolateSensitivity: 1.0 },
  { id: 'beagle', name: 'Beagle', sizeCategory: 'medium', avgLifespan: '12 - 15 years', avgAdultWeightMaleKg: 11, avgAdultWeightFemaleKg: 9.5, avgAdultHeightCm: 36, growthFactor: 1.5, chocolateSensitivity: 1.0 },
  { id: 'rottweiler', name: 'Rottweiler', sizeCategory: 'giant', avgLifespan: '8 - 10 years', avgAdultWeightMaleKg: 50, avgAdultWeightFemaleKg: 42, avgAdultHeightCm: 64, growthFactor: 2.0, chocolateSensitivity: 1.0 },
  { id: 'dachshund', name: 'Dachshund', sizeCategory: 'small', avgLifespan: '12 - 16 years', avgAdultWeightMaleKg: 9, avgAdultWeightFemaleKg: 8, avgAdultHeightCm: 22, growthFactor: 1.4, chocolateSensitivity: 1.0 },
  { id: 'boxer', name: 'Boxer', sizeCategory: 'large', avgLifespan: '10 - 12 years', avgAdultWeightMaleKg: 32, avgAdultWeightFemaleKg: 27, avgAdultHeightCm: 59, growthFactor: 1.8, chocolateSensitivity: 1.0 },
  { id: 'great-dane', name: 'Great Dane', sizeCategory: 'giant', avgLifespan: '7 - 10 years', avgAdultWeightMaleKg: 70, avgAdultWeightFemaleKg: 58, avgAdultHeightCm: 80, growthFactor: 2.3, chocolateSensitivity: 1.0 },
  { id: 'shih-tzu', name: 'Shih Tzu', sizeCategory: 'small', avgLifespan: '10 - 16 years', avgAdultWeightMaleKg: 7.5, avgAdultWeightFemaleKg: 6.5, avgAdultHeightCm: 25, growthFactor: 1.35, chocolateSensitivity: 1.0 },
  { id: 'siberian-husky', name: 'Siberian Husky', sizeCategory: 'medium', avgLifespan: '12 - 14 years', avgAdultWeightMaleKg: 24, avgAdultWeightFemaleKg: 20, avgAdultHeightCm: 54, growthFactor: 1.65, chocolateSensitivity: 1.0 },
  { id: 'australian-shepherd', name: 'Australian Shepherd', sizeCategory: 'medium', avgLifespan: '12 - 15 years', avgAdultWeightMaleKg: 25, avgAdultWeightFemaleKg: 20, avgAdultHeightCm: 52, growthFactor: 1.65, chocolateSensitivity: 1.0 },
];
