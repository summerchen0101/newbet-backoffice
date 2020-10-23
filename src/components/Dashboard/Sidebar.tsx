import React, { useContext } from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  NotificationOutlined,
  DashboardOutlined,
  FileSearchOutlined,
  UsergroupAddOutlined,
  StarOutlined,
} from '@ant-design/icons';
import './style.css';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import DashboardContext from '@/contexts/DashboardContext';
import MenuWithSubMenu from '@/utils/MenuWithSubMenu';
import * as mPath from '@/lib/menuPath';

const { Sider } = Layout;

const menu = [
  { path: '/sample', label: '範例頁', iconComp: DashboardOutlined },
  { path: '/news', label: '公告', iconComp: NotificationOutlined },
  {
    path: '/account',
    label: '帳號管理',
    iconComp: UserOutlined,
    children: [
      { path: mPath.ACCOUNT_MANAGER, label: '管理員管理' },
      { path: mPath.ACCOUNT_ONLINE, label: '在線人員' },
    ],
  },
  {
    path: '/level',
    label: '層級管理',
    iconComp: UsergroupAddOutlined,
    children: [
      { path: mPath.LEVEL_ACCOUNT, label: '帳號設定' },
      { path: mPath.GAME_RESULT, label: '會員輸贏' },
      { path: mPath.ROOT_CHANGE, label: '移桶審核' },
      { path: mPath.SHARE_ACCOUNT, label: '公桶設定' },
    ],
  },
  {
    path: '/report',
    label: '查詢報表',
    iconComp: FileSearchOutlined,
    children: [
      { path: mPath.DAILY_REPORT, label: '當日報表' },
      { path: mPath.HISTORY_REPORT, label: '歷史報表' },
      { path: mPath.ACCOUNTING_REPORT, label: '帳務紀錄' },
      { path: mPath.REVENUE_REPORT, label: '營收查詢' },
    ],
  },
  {
    path: '/baseball',
    label: '棒球',
    iconComp: StarOutlined,
    children: [
      { path: mPath.BASEBALL_SINGLE, label: '單式' },
      { path: mPath.BASEBALL_MUITIPLE, label: '過關' },
      { path: mPath.BASEBALL_HISTORY, label: '歷史比賽' },
    ],
  },
];

const Sidebar: React.FC = () => {
  const { collapsed } = useContext(DashboardContext);
  const { pathname } = useLocation();
  const openKeys = ['/' + pathname.split('/')[1]];
  const selectKey = [pathname];
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo">{!collapsed ? '新體育後台' : '體'}</div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={selectKey}
        defaultOpenKeys={openKeys}
      >
        {menu.map((m) => MenuWithSubMenu(m))}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
