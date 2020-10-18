import React, { useContext } from 'react'
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import './style.css';
import {Link, useLocation, useRouteMatch} from 'react-router-dom';
import DashboardContext from '@/contexts/DashboardContext'

const { Sider } = Layout;

const menu = [
  {path: '/home', label: 'Home', iconComp: UserOutlined},
  {path: '/news', label: 'News', iconComp: VideoCameraOutlined},
  {path: '/sample', label: 'Sample', iconComp: UploadOutlined},
]

const Sidebar: React.FC= () => {
  const {collapsed} = useContext(DashboardContext)
  const {pathname} = useLocation()
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={[pathname]}>
        {menu.map((m, i) => (
          <Menu.Item key={m.path} icon={<m.iconComp />}>
            <Link to={m.path}>{m.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  )
}


export default Sidebar
