import { state } from '@angular/animations';
import { createAction, createReducer, on, props } from '@ngrx/store';

export interface Module2Model {
  id: number;
  story: string;
  counter: number;
}

export const demo1Module2Action = createAction('[Module2 Action] Demo1 Action');
export const demo2Module2Action = createAction(
  '[Module2 Action] Demo2 Action',
  props<{ p1: number }>()
);

const initialState: Module2Model = {
  id: 1,
  story: 'Helloo Story',
  counter: 100,
};

export const module2Reducer = createReducer(
  initialState,
  on(demo1Module2Action, (state) => ({ ...state, counter: state.counter + 1 })),
  on(demo2Module2Action, (state, { p1 }) => {
    const newState = { ...state, counter: state.counter + p1 };
    return newState;
  })
);
