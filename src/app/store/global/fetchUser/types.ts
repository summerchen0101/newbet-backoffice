import * as actionTypes from './constants';

type FetchedResponse = {
  username: string;
  email: string;
};

interface UserFetchRequestAction {
  type: typeof actionTypes.USER_FETCH_REQUESTED;
  id: number;
}
interface UserFetchSuccessAction {
  type: typeof actionTypes.USER_FETCH_SUCCESS;
  user: FetchedResponse;
}
interface UserFetchFailedAction {
  type: typeof actionTypes.USER_FETCH_FAILED;
  message: string;
}

export type UserActionType =
  | UserFetchRequestAction
  | UserFetchSuccessAction
  | UserFetchFailedAction;
