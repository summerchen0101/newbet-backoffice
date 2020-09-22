import * as actionType from '../constants';
import produce from 'immer';

type IMenu = {
  name: string;
  path?: string;
  child?: IMenu[];
  icon?: string;
};
export interface IState {
  menu: IMenu[];
}

const initialState: IState = {
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
};
export default (state = initialState, action) =>
  produce(state, (draft) => {
    //
  });
