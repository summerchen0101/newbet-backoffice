import React, { useContext } from 'react'
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import './style.css';
import {Link} from 'react-router-dom';
import DashboardContext from '@/contexts/DashboardContext'

const { Sider } = Layout;

const Sidebar: React.FC= () => {
  const {collapsed} = useContext(DashboardContext)
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="/home">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          <Link to="/sample">Sample</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}


export default Sidebar
