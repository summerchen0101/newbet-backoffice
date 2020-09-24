import * as actionType from './constants';
import { GlobalActionTypes } from './types';

export const userFetchRequest = (id: number): GlobalActionTypes => ({
  type: actionType.USER_FETCH_REQUESTED,
  id,
});
export const userFetchSuccess = (user): GlobalActionTypes => ({
  type: actionType.USER_FETCH_SUCCESS,
  user,
});
export const userFetchFailed = (message: string): GlobalActionTypes => ({
  type: actionType.USER_FETCH_FAILED,
  message,
});
