import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Logo from './logo';
import { selectMenu } from 'app/store/global/selector';
import { useSelector } from 'react-redux';

const iconMap = {
  user: UserOutlined,
  team: TeamOutlined,
  desktop: DesktopOutlined,
  pieChart: PieChartOutlined,
};

const Component: React.FC = (props) => {
  const [collapsed, toggleCollapsed] = useState(false);
  const menu = useSelector(selectMenu);

  const menuRoop = menu.map((m, m_i) => {
    const IconName = iconMap[m.icon ?? 'user'];
    if (!m.child) {
      return (
        <Menu.Item key={m_i} icon={<IconName />}>
          <Link to={m.path}>{m.name}</Link>
        </Menu.Item>
      );
    } else {
      return (
        <Menu.SubMenu key={m_i} icon={<IconName />} title={m.name}>
          {m.child.map((n, n_i) => {
            return <Menu.Item key={`${m_i}-${n_i}`}>{n.name}</Menu.Item>;
          })}
        </Menu.SubMenu>
      );
    }
  });
  const onCollapse = (collapsed) => toggleCollapsed(!collapsed);
  return (
    <Layout.Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <Logo />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        {menuRoop}
      </Menu>
    </Layout.Sider>
  );
};
export default Component;
