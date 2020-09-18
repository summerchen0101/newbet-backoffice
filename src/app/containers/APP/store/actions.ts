import { ADD_COUNTER, SUB_COUNTER } from './constants';

export const addCounter = (num: number) => ({
  type: ADD_COUNTER,
  value: num,
});

export const subCounter = (num: number) => ({
  type: SUB_COUNTER,
  value: num,
});
