import { Module1Model, module1Reducer } from './module1.redcer';
import { Module2Model, module2Reducer } from './module2.redcer';

export interface AppRootState {
  module1: Module1Model;
  module2: Module2Model;
}

export const rootReducer = {
  module1: module1Reducer,
  module2: module2Reducer,
};
