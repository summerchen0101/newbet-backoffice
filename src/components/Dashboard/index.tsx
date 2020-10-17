import React, { useState } from 'react'

import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import './style.css';
import {Link} from 'react-router-dom'
import RouteWithSubRoutes from '@/utils/RouteWithWubRoutes'

const { Header, Sider, Content } = Layout;

type Route = {
  path: string;
  component: React.ElementType
}
type Props = {
  routes: Route[]
}

const Component: React.FC<Props> = ({children, routes}) => {
  const [collapsed, changeCollapsed] = useState(false)
  return (
    <Layout className="dashboard">
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
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: (e) => changeCollapsed(!collapsed),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
        </Content>
      </Layout>
    </Layout>
  );
}

export default Component
