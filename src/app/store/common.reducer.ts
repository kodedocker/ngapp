import { createReducer, on } from '@ngrx/store';
import { createAction } from '@ngrx/store';

export const increment = createAction('[CommonItem Component] Increment');
export const decrement = createAction('[CommonItem Component] Decrement');
export const reset = createAction('[CommonItem Component] Reset');

export interface CommonItem {
  counter: number;
  title: string;
}

export const initialState: CommonItem = {
  counter: 100,
  title: 'NgRx',
};

export const commonReducer = createReducer(initialState);
