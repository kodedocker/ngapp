import { createReducer, on } from '@ngrx/store';

export interface CommonItem {
  counter: number;
  message: string;
}

export const initialState: CommonItem = {
  counter: 10,
  message: 'Hello World',
};

export const commonItemReducer = createReducer(initialState);
