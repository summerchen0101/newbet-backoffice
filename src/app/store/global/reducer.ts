import * as actionType from './User/constants';
import produce from 'immer';
import { GlobalState } from './types';
import { UserActionType } from './User/types';

const initialState: GlobalState = {
  user: null,
  users: [],
  menu: [
    { name: 'Home', path: '/home', icon: 'desktop' },
    { name: 'Profile', path: '/profile', icon: 'user' },
    {
      name: 'User',
      child: [
        { name: 'Tom', path: '/tom' },
        { name: 'Jack', path: '/jack' },
      ],
      icon: 'team',
    },
  ],
  breadcrumb: ['Master', 'Agency'],
};

export default (state = initialState, action: UserActionType): GlobalState =>
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
    }
  });
