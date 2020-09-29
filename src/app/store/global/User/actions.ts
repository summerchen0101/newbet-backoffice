import * as actionType from './constants';
import { UserActionType } from './types';

export default class UserAction {
  static userFetchRequest(id: number): UserActionType {
    return { type: actionType.USER_FETCH_REQUESTED, id };
  }
  static userFetchSuccess(user): UserActionType {
    return { type: actionType.USER_FETCH_SUCCESS, user };
  }
  static userFetchFailed(message: string): UserActionType {
    return { type: actionType.USER_FETCH_FAILED, message };
  }

  static userListFetchRequest(): UserActionType {
    return { type: actionType.USER_LIST_FETCH_REQUESTED };
  }
  static userListFetchSuccess(users): UserActionType {
    return { type: actionType.USER_LIST_FETCH_SUCCESS, users };
  }
  static userListFetchFailed(message: string): UserActionType {
    return { type: actionType.USER_LIST_FETCH_FAILED, message };
  }
}
