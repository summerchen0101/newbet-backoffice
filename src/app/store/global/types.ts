import * as actionTypes from './constants';

export interface User {
  name: string;
  email: string;
}

type MenuItem = {
  name: string;
  path?: string;
  child?: MenuItem[];
  icon?: string;
};
export interface GlobalState {
  menu: MenuItem[];
  breadcrumb: string[];
  user: null | User;
  users: User[];
}

/**
 * Actions
 */

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

export type GlobalActionTypes =
  | UserFetchRequestAction
  | UserFetchSuccessAction
  | UserFetchFailedAction;
