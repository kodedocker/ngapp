import { ajaxItem1Reducer } from './ajax1.reducer';
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
  ajaxItem1: ajaxItem1Reducer,
};
