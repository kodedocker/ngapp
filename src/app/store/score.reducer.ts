import { createReducer, on } from '@ngrx/store';

export interface MatchScore {
  homeScore: number;
  awayScore: number;
}

export const initialState: MatchScore = {
  homeScore: 10,
  awayScore: 20,
};

export const matchScoreReducer = createReducer(initialState);
