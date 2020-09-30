import produce from 'immer';
import { UserState, UserActionType } from './types';
import * as actionType from './constants';
const userState: UserState = {
  user: null,
  users: [],
};

const userReducer = (state = userState, action: UserActionType): UserState =>
  produce(state, (draft) => {
    switch (action.type) {
      case actionType.USER_FETCH_SUCCESS:
        draft.user = {
          name: action.user.username,
          email: action.user.email,
        };
        break;
      case actionType.USER_FETCH_FAILED:
        draft.user = null;
        break;
      case actionType.USER_LIST_FETCH_SUCCESS:
        draft.users = action.users.map((u) => ({
          name: u.username,
          email: u.email,
        }));
        break;
      case actionType.USER_LIST_FETCH_FAILED:
        draft.users = [];
        break;

      default:
        break;
    }
  });

export default userReducer;
