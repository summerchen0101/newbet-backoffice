import React, { useContext } from 'react'
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
import {Link, useLocation, useRouteMatch} from 'react-router-dom';
import DashboardContext from '@/contexts/DashboardContext'
import MenuWithSubMenu from '@/utils/MenuWithSubMenu'
import * as mPath from '@/lib/menuPath'

const { Sider } = Layout;

const menu = [
  {path: '/sample', label: '範例頁', iconComp: DashboardOutlined},
  {path: '/news', label: '公告', iconComp: NotificationOutlined},
  {path: '/account', label: '帳號管理', iconComp: UserOutlined, children: [
    {path: mPath.ACCOUNT_MANAGER, label: '管理員管理'},
    {path: mPath.ACCOUNT_ONLINE, label: '在線管理'},
  ]},
  {path: '/level', label: '層級管理', iconComp: UsergroupAddOutlined, children: [
    {path: '/account-setting', label: '帳號設定'},
    {path: '/result', label: '會員輸贏'},
    {path: '/root-change', label: '移桶審核'},
    {path: '/share-account', label: '公桶設定'},
  ]},
  {path: '/report', label: '查詢報表', iconComp: FileSearchOutlined, children: [
    {path: '/today', label: '當日報表'},
    {path: '/history', label: '歷史報表'},
    {path: '/accounting', label: '帳務紀錄'},
    {path: '/revenue', label: '營收查詢'},
  ]},
  {path: '/baseball', label: '棒球', iconComp: StarOutlined, children: [
    {path: '/single', label: '單式'},
    {path: '/multiple', label: '過關'},
    {path: '/history', label: '歷史比賽'},
  ]},
]

const Sidebar: React.FC= () => {
  const {collapsed} = useContext(DashboardContext)
  const {pathname} = useLocation()
  let openKeys= ['/' + pathname.split('/')[1]]
  let selectKey = [pathname]
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={selectKey} defaultOpenKeys={openKeys}>
        {menu.map((m) => MenuWithSubMenu(m))}
      </Menu>
    </Sider>
  )
}


export default Sidebar
