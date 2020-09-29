import * as actionTypes from './fetchUser/constants';

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
}
