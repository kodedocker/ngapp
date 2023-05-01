import { createReducer, on } from '@ngrx/store';

export const initialState = 100;

export const counterReducer = createReducer(initialState);
