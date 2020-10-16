import { MenuState } from './types';
import produce from 'immer';

const menuState: MenuState = {
  menu: [
    { name: '公告', path: '/home', icon: 'desktop' },
    {
      name: '帳號管理',
      child: [
        { name: '管理員管理', path: '/tom' },
        { name: '在線人員', path: '/jack' },
      ],
      icon: 'team',
    },
    {
      name: '層級管理',
      child: [
        { name: '帳號設定', path: '/tom' },
        { name: '會員輸贏', path: '/jack' },
        { name: '移桶審核', path: '/jack' },
        { name: '公桶設定', path: '/jack' },
      ],
      icon: 'team',
    },
    {
      name: '查詢報表',
      child: [
        { name: '當日報表', path: '/tom' },
        { name: '歷史報表', path: '/jack' },
        { name: '帳務紀錄', path: '/jack' },
        { name: '營收查詢', path: '/jack' },
      ],
      icon: 'team',
    },
    {
      name: '棒球',
      child: [
        { name: '單式', path: '/tom' },
        { name: '過關', path: '/jack' },
        { name: '歷史比賽', path: '/jack' },
      ],
      icon: 'team',
    },
  ],
  collapsed: false,
};

const menuReducer = (state = menuState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      default:
        break;
    }
  });

export default menuReducer;
