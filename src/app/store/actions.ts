import {
  ADD_COUNTER,
  SUB_COUNTER,
  USER_FETCH_SUCCESS,
  USER_FETCH_FAILED,
  USER_FETCH_REQUESTED,
} from './constants';

export const addCounter = (num: number) => ({
  type: ADD_COUNTER,
  value: num,
});

export const subCounter = (num: number) => ({
  type: SUB_COUNTER,
  value: num,
});

export const userFetchRequest = (id) => ({
  type: USER_FETCH_REQUESTED,
  id,
});
export const userFetchSuccess = (user) => ({
  type: USER_FETCH_SUCCESS,
  user,
});
export const userFetchFailed = (message) => ({
  type: USER_FETCH_FAILED,
  message,
});
