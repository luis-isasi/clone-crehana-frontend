import {
  RECOMENDATIONS,
  MENTORS,
  EXCLUSIVE_PREMIUM,
  YOUR_ACTIVITY,
} from '../contants';

export type SelectedName =
  | typeof RECOMENDATIONS
  | typeof MENTORS
  | typeof EXCLUSIVE_PREMIUM
  | typeof YOUR_ACTIVITY;
