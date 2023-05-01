import { createReducer, on } from '@ngrx/store';
import { createAction } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');

export const initialState = 10;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return state + 1;
  }),
  on(decrement, (state) => {
    return state - 1;
  }),
  on(reset, (state) => {
    return 10;
  })
);
