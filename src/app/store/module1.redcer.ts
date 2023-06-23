import { state } from '@angular/animations';
import { createAction, createReducer, on, props } from '@ngrx/store';

export interface Module1Model {
  id: number;
  title: string;
  body: string;
  counter: number;
}

export const demo1Action = createAction('[Module1 Action] Demo1 Action');
export const demo2Action = createAction(
  '[Module1 Action] Demo2 Action',
  props<{ p1: number }>()
);

const initialState: Module1Model = {
  id: 1,
  title: 'Hello World',
  body: 'The quick random fox',
  counter: 100,
};

export const module1Reducer = createReducer(
  initialState,
  on(demo1Action, (state) => ({ ...state, counter: state.counter + 1 })),
  on(demo2Action, (state, { p1 }) => {
    const newState = { ...state, counter: state.counter + p1 };
    return newState;
  })
);
