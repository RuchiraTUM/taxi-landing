/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FleetMetrics {
  fleetSize: number;
  dailyTripsPerCar: number;
  currentEmptyKmPct: number; // e.g. 35%
  avgFarePrice: number; // e.g. 24
  fuelCostPerKm: number; // e.g. 0.22
  avgTripDistanceKm: number; // e.g. 9
}

export interface RoiResult {
  currentEmptyKmsYearly: number;
  projectedEmptyKmsYearly: number;
  savedEmptyKmYearly: number;
  directFuelSavingsYearly: number;
  extraFaresHandledYearly: number;
  additionalRevenueYearly: number;
  totalAnnualValue: number;
  co2SavedKgYearly: number;
}

export interface TaxiVehicle {
  id: string;
  callSign: string;
  driverName: string;
  status: 'idle' | 'en_route_pickup' | 'in_trip' | 'repositioning';
  x: number; // 0 - 100 percentage coordinates
  y: number;
  destX?: number;
  destY?: number;
  speed: number;
  assignedTripId?: string;
  batteryOrFuelPct: number;
  driverScore: number;
  currentEarningsToday: number;
  emptyKmsToday: number;
  paidKmsToday: number;
}

export interface TripRequest {
  id: string;
  passengerName: string;
  pickupAddress: string;
  dropoffAddress: string;
  originX: number;
  originY: number;
  destX: number;
  destY: number;
  estimatedFare: number;
  urgencyScore: number;
  surgeMultiplier: number;
  timestamp: string;
  status: 'pending' | 'matched_legacy' | 'matched_ai' | 'completed';
  matchedVehicleId?: string;
  emptyApproachKm: number;
  etaMinutes: number;
}

export interface DispatchModeComparison {
  mode: 'legacy_gut' | 'fleetmind_ai';
  emptyKmRate: number; // %
  avgWaitTimeMin: number;
  dispatchDecisionTimeMs: number;
  dailyRevenuePerCar: number;
  dispatcherStressLevel: 'Overloaded' | 'Calm / Automated';
  unfulfilledDemandPct: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface ValueBenefit {
  id: string;
  title: string;
  headline: string;
  description: string;
  metric: string;
  metricLabel: string;
  iconName: string;
  badge: string;
  details: string[];
}

export interface UserJourneyStep {
  stepNumber: string;
  phase: string;
  title: string;
  mindset: string;
  gutFeelingPain: string;
  fleetMindSolution: string;
  operationalOutcome: string;
  kpiHighlight: string;
}

export interface PocEvaluationRequest {
  fleetSize: number;
  city: string;
  primaryFleetType: string;
  currentDispatchMethod: string;
  mainPainPoint: string;
}

export interface PocEvaluationResult {
  feasibilityScore: number;
  estimatedEmptyKmReduction: string;
  monthlyRevenueUpside: string;
  aiTrainingDaysRequired: number;
  recommendedDeploymentPhases: string[];
  customStrategyNote: string;
}
