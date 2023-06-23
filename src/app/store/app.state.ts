import { CommonItem, commonItemReducer } from './common.reducer';
import { counterReducer } from './counter.reducer';
import { MatchScore, matchScoreReducer } from './score.reducer';

export interface MyAppState {
  counter: number;
  matchScore: MatchScore;
  commonItem: CommonItem;
}

export const rootStore = {
  counter: counterReducer,
  matchScore: matchScoreReducer,
  commonItem: commonItemReducer,
};
