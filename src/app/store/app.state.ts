import { CommonItem } from './common.reducer';
import { MatchScore } from './score.reducer';

export interface MyAppState {
  counter: number;
  matchScore: MatchScore;
  commonItem: CommonItem;
}
