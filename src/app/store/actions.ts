import * as actionType from './constants';

export const userFetchRequest = (id) => ({
  type: actionType.USER_FETCH_REQUESTED,
  id,
});
export const userFetchSuccess = (user) => ({
  type: actionType.USER_FETCH_SUCCESS,
  user,
});
export const userFetchFailed = (message) => ({
  type: actionType.USER_FETCH_FAILED,
  message,
});
