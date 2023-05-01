import { createReducer, on } from '@ngrx/store';
import { createAction } from '@ngrx/store';

export const commonIncrement = createAction('[CommonItem Component] Increment');
export const commonDecrement = createAction('[CommonItem Component] Decrement');
export const commonReset = createAction('[CommonItem Component] Reset');

export interface CommonItem {
  counter: number;
  title: string;
}

export const initialState: CommonItem = {
  counter: 100,
  title: 'NgRx',
};

export const commonReducer = createReducer(
  initialState,
  on(commonIncrement, (state) => {
    return { ...state, counter: state.counter + 1 };
  })
);
