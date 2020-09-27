import * as actionType from './constants';
import produce from 'immer';
import { GlobalState, GlobalActionTypes } from './types';

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

export default (state = initialState, action: GlobalActionTypes): GlobalState =>
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
        console.log(action.message);
        break;
    }
  });
