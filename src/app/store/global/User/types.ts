import * as actionTypes from './constants';

type UserFetchResponse = {
  username: string;
  email: string;
};

interface UserFetchRequestAction {
  type: typeof actionTypes.USER_FETCH_REQUESTED;
  id: number;
}
interface UserFetchSuccessAction {
  type: typeof actionTypes.USER_FETCH_SUCCESS;
  user: UserFetchResponse;
}
interface UserFetchFailedAction {
  type: typeof actionTypes.USER_FETCH_FAILED;
  message: string;
}

type UserListFetchResponse = UserFetchResponse[];

interface UserListFetchRequestAction {
  type: typeof actionTypes.USER_LIST_FETCH_REQUESTED;
}
interface UserListFetchSuccessAction {
  type: typeof actionTypes.USER_LIST_FETCH_SUCCESS;
  users: UserListFetchResponse;
}
interface UserListFetchFailedAction {
  type: typeof actionTypes.USER_LIST_FETCH_FAILED;
  message: string;
}

export type UserActionType =
  | UserFetchRequestAction
  | UserFetchSuccessAction
  | UserFetchFailedAction
  | UserListFetchRequestAction
  | UserListFetchSuccessAction
  | UserListFetchFailedAction;

interface User {
  name: string;
  email: string;
}

export interface UserState {
  user: null | User;
  users: User[];
}
