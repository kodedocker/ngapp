import { createAction, createReducer, on, props } from '@ngrx/store';

export interface PostModel {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface AjaxItem1 {
  counter: number;
  list: PostModel[];
}

export const counterAction1 = createAction('[A Component] Action1 Counter');
export const ajaxAction1 = createAction('[A Component] Action1 Ajax1');
export const ajaxSuccessAction1 = createAction(
  '[A Component] Action1 Success Ajax1',
  props<{ list: any }>()
);

export const initialState: AjaxItem1 = {
  counter: 1,
  list: [],
};

export const ajaxItem1Reducer = createReducer(
  initialState,
  on(counterAction1, (state) => {
    const newstate = { ...state, counter: state.counter + 1 };
    return newstate;
  }),
  on(ajaxAction1, (state) => {
    let newState = { ...state };
    return newState;
  }),
  on(ajaxSuccessAction1, (state, { list }) => {
    console.log(list);
    let newState = { ...state, list: list };
    return newState;
  })
);
