import { state } from '@angular/animations';
import { createAction, createReducer, on, props } from '@ngrx/store';

export interface PostModel {
  id?: number;
  userId?: number;
  title?: string;
  body?: string;
}

const initialState: PostModel = {};

export const postReducer = createReducer(initialState);
