import { createReducer, on, props } from '@ngrx/store';
import { createAction } from '@ngrx/store';

// ACTIONS
export const increment = createAction('[Counter Component Sunil ] Increment1');
export const decrement = createAction('[Counter Compaonent Sunil] Decrement1');
export const incrementWithPayload = createAction(
  '[Counter Compaonent With paylaod] Increment With Payload',
  props<{ incrementBy: number }>()
);

export const initialState = 100;

export const counterReducer = createReducer(
  initialState,

  on(increment, (state) => {
    // ...
    return state + 1;
  }),

  on(decrement, (state) => {
    return state - 1;
  }),

  on(incrementWithPayload, (state, { incrementBy }) => {
    let newstate = state + incrementBy;
    return newstate;
  })
);
