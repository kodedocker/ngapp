import { createAction, createReducer, on } from '@ngrx/store';

export interface AjaxItem1 {
  counter: number;
  message: string;
}

export const ajaxAction1 = createAction('[A Component] Action1');

export const initialState: AjaxItem1 = {
  counter: 10,
  message: 'Hello World',
};

export const ajaxItem1Reducer = createReducer(
  initialState,
  on(ajaxAction1, (state) => {
    const newstate = { ...state, counter: state.counter + 10 };
    return newstate;
  })
);
