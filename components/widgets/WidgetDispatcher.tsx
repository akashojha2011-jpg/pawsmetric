'use client';

import React from 'react';
import { getCalculatorBySlug } from '@/lib/data/calculators';
import {
  DogAgeCalculatorWidget,
  PuppyAgeCalculatorWidget,
  SmallVsLargeBreedAgeWidget,
} from './DogAgeWidgets';

import {
  DogWeightCalculatorWidget,
  DogCalorieCalculatorWidget,
  DogFoodPortionWidget,
  RawDietCalculatorWidget,
  PuppyGrowthPredictorWidget,
} from './WeightNutritionWidgets';

import {
  ChocolateToxicityCalculatorWidget,
  BenadrylDosageCalculatorWidget,
  XylitolToxicityCalculatorWidget,
  GrapeToxicityCalculatorWidget,
  PregnancyDueDateCalculatorWidget,
  WaterIntakeCalculatorWidget,
  DehydrationRiskCalculatorWidget,
  HeatCycleTrackerWidget,
} from './HealthSafetyWidgets';

import {
  LifetimeCostCalculatorWidget,
  FoodCostCalculatorWidget,
  InsuranceCostEstimatorWidget,
  PuppyFirstYearCostCalculatorWidget,
  BreedingCostCalculatorWidget,
  VetEmergencyFundCalculatorWidget,
} from './CostOwnershipWidgets';

import {
  CrateSizeCalculatorWidget,
  HarnessSizeCalculatorWidget,
  CollarSizeCalculatorWidget,
  CoatSweaterSizeCalculatorWidget,
  CarrierSizeCalculatorWidget,
} from './SizeFitWidgets';

import {
  BreedWeightHeightPredictorWidget,
  MixedBreedSizeEstimatorWidget,
  LitterSizeEstimatorWidget,
  DogNameGeneratorWidget,
  WalkingPaceCalculatorWidget,
  ExerciseNeedsCalculatorWidget,
  HeightComparisonCalculatorWidget,
} from './BreedLifestyleWidgets';

interface WidgetDispatcherProps {
  widgetType?: string;
  slug?: string;
}

export function WidgetDispatcher({ widgetType, slug }: WidgetDispatcherProps) {
  let effectiveType = widgetType;

  if (!effectiveType && slug) {
    const calc = getCalculatorBySlug(slug);
    if (calc) {
      effectiveType = calc.widgetType;
    }
  }

  switch (effectiveType) {
    // Age & Breed Variants
    case 'DogAgeCalculator':
      return <DogAgeCalculatorWidget />;
    case 'DogBreedAgeCalculator':
      return <DogAgeCalculatorWidget defaultBreedSize="medium" />;
    case 'PuppyAgeCalculator':
      return <PuppyAgeCalculatorWidget />;
    case 'SeniorDogAgeCalculator':
      return <DogAgeCalculatorWidget defaultBreedSize="large" />;
    case 'DogLifeExpectancyCalculator':
      return <DogAgeCalculatorWidget defaultBreedSize="medium" />;
    case 'LabradorAgeCalculator':
      return <DogAgeCalculatorWidget defaultBreedSize="large" presetBreedName="Labrador Retriever" />;
    case 'GermanShepherdAgeCalculator':
      return <DogAgeCalculatorWidget defaultBreedSize="large" presetBreedName="German Shepherd" />;
    case 'GoldenRetrieverAgeCalculator':
      return <DogAgeCalculatorWidget defaultBreedSize="large" presetBreedName="Golden Retriever" />;
    case 'FrenchBulldogAgeCalculator':
      return <DogAgeCalculatorWidget defaultBreedSize="small" presetBreedName="French Bulldog" />;
    case 'ChihuahuaAgeCalculator':
      return <DogAgeCalculatorWidget defaultBreedSize="small" presetBreedName="Chihuahua" />;
    case 'PoodleAgeCalculator':
      return <DogAgeCalculatorWidget defaultBreedSize="medium" presetBreedName="Poodle" />;
    case 'SmallVsLargeBreedAgeCalculator':
      return <SmallVsLargeBreedAgeWidget />;

    // Weight & Nutrition
    case 'DogWeightCalculator':
      return <DogWeightCalculatorWidget />;
    case 'DogBmiCalculator':
      return <DogWeightCalculatorWidget />;
    case 'DogCalorieCalculator':
      return <DogCalorieCalculatorWidget />;
    case 'DogFoodCalculator':
      return <DogFoodPortionWidget />;
    case 'DogFoodPortionCalculator':
      return <DogFoodPortionWidget />;
    case 'DogTreatCalorieCalculator':
      return <DogCalorieCalculatorWidget />;
    case 'DogWeightLossCalculator':
      return <DogCalorieCalculatorWidget />;
    case 'RawDogFoodCalculator':
    case 'RawDietCalculator':
      return <RawDietCalculatorWidget />;
    case 'PuppyGrowthPredictor':
      return <PuppyGrowthPredictorWidget />;

    // Health & Safety
    case 'ChocolateToxicityCalculator':
      return <ChocolateToxicityCalculatorWidget />;
    case 'BenadrylDosageCalculator':
      return <BenadrylDosageCalculatorWidget />;
    case 'XylitolToxicityCalculator':
      return <XylitolToxicityCalculatorWidget />;
    case 'GrapeToxicityCalculator':
      return <GrapeToxicityCalculatorWidget />;
    case 'PregnancyDueDateCalculator':
      return <PregnancyDueDateCalculatorWidget />;
    case 'WaterIntakeCalculator':
      return <WaterIntakeCalculatorWidget />;
    case 'DehydrationRiskCalculator':
      return <DehydrationRiskCalculatorWidget />;
    case 'HeatCycleTracker':
      return <HeatCycleTrackerWidget />;

    // Cost & Ownership
    case 'LifetimeCostCalculator':
      return <LifetimeCostCalculatorWidget />;
    case 'FoodCostCalculator':
      return <FoodCostCalculatorWidget />;
    case 'InsuranceCostEstimator':
      return <InsuranceCostEstimatorWidget />;
    case 'PuppyFirstYearCostCalculator':
      return <PuppyFirstYearCostCalculatorWidget />;
    case 'BreedingCostCalculator':
      return <BreedingCostCalculatorWidget />;
    case 'VetEmergencyFundCalculator':
      return <VetEmergencyFundCalculatorWidget />;

    // Size & Fit
    case 'CrateSizeCalculator':
      return <CrateSizeCalculatorWidget />;
    case 'HarnessSizeCalculator':
      return <HarnessSizeCalculatorWidget />;
    case 'CollarSizeCalculator':
      return <CollarSizeCalculatorWidget />;
    case 'CoatSweaterSizeCalculator':
      return <CoatSweaterSizeCalculatorWidget />;
    case 'CarrierSizeCalculator':
      return <CarrierSizeCalculatorWidget />;

    // Breed & Lifestyle
    case 'BreedWeightHeightPredictor':
      return <BreedWeightHeightPredictorWidget />;
    case 'MixedBreedSizeEstimator':
      return <MixedBreedSizeEstimatorWidget />;
    case 'LitterSizeEstimator':
      return <LitterSizeEstimatorWidget />;
    case 'DogNameGenerator':
      return <DogNameGeneratorWidget />;
    case 'WalkingPaceCalculator':
      return <WalkingPaceCalculatorWidget />;
    case 'ExerciseNeedsCalculator':
      return <ExerciseNeedsCalculatorWidget />;
    case 'HeightComparisonCalculator':
      return <HeightComparisonCalculatorWidget />;

    default:
      return <DogAgeCalculatorWidget />;
  }
}
