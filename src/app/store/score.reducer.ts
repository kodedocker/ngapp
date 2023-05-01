import { createReducer, on } from '@ngrx/store';

import { createAction } from '@ngrx/store';

export const homeIncrement = createAction('[A Component] Increment');
export const awayIncrement = createAction('[B Component] Decrement');

export interface MatchScore {
  homeScore: number;
  awayScore: number;
}

export const initialState: MatchScore = {
  homeScore: 10,
  awayScore: 20,
};

export const matchScoreReducer = createReducer(
  initialState,
  on(homeIncrement, (state) => {
    return { ...state, homeScore: state.homeScore + 1 };
  }),
  on(awayIncrement, (state) => {
    return { ...state, awayScore: state.awayScore + 1 };
  })
);
