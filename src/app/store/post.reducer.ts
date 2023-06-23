import { state } from '@angular/animations';
import { createAction, createReducer, on, props } from '@ngrx/store';

// SEGMENT 1 :: MODEL
export interface PostModel {
  id?: number;
  userId?: number;
  title?: string;
  body?: string;
}

// SEGEMETN 2 :: ACTIONS
export const getPostAction = createAction(
  '[Post Action] Get Post Action',
  props<{ id: number }>()
);
export const getPostSuccessAction = createAction(
  '[Post Action] Get Post Success Action',
  props<{ post: PostModel }>()
);

// SEGMETNT 3 :: INITAL STATE
const initialState: PostModel = {};

// SEGMENT 4 ::  ACTION HANDLER
export const postReducer = createReducer(
  initialState,
  on(getPostAction, (state) => state),
  on(getPostSuccessAction, (state, { post }) => {
    let newState = { ...state, ...post };
    return newState;
  })
);
