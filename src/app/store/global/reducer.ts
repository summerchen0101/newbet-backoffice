import * as actionType from './constants';
import produce from 'immer';

type IMenu = {
  name: string;
  path?: string;
  child?: IMenu[];
  icon?: string;
};
export interface IState {
  menu: IMenu[];
  breadcrumb: string[];
  user: null | any;
}

const initialState: IState = {
  user: null,
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

export default (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case actionType.USER_FETCH_SUCCESS:
        draft.user = action.user;
        break;
    }
  });
