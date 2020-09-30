/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import * as UserModule from './user/reducer';
import * as TodoModule from './todos/reducer';
import { combineReducers } from 'redux';

type ActionType = {
  type: string;
  [s: string]: any;
};

export const rootReducer = combineReducers({
  user: UserModule.reducer,
  todos: TodoModule.reducer,
});

export const rootState = {
  user: UserModule.state,
  todos: TodoModule.state,
};

export const contextState = {
  store: rootState,
  mutate: (action: ActionType) => {},
};
export const CustomStore = React.createContext(contextState);
