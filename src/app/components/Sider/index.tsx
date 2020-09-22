import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import produce from 'immer';
type IMenu = {
  name: string;
  path?: string;
  child?: IMenu[];
  icon?: string;
};
type IProps = {
  collapsed: boolean;
  menu: IMenu[];
};
const initState: IProps = {
  collapsed: false,
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
export default (props) => {
  const [state, setState] = useState(initState);
  const menuRoop = state.menu.map((m, m_i) => {
    const iconMap = {
      user: UserOutlined,
      team: TeamOutlined,
      desktop: DesktopOutlined,
      pieChart: PieChartOutlined,
    };
    const IconName = iconMap[m.icon ?? 'user'];
    if (!m.child) {
      return (
        <Menu.Item key={m_i} icon={<IconName />}>
          <Link to="/home">{m.name}</Link>
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
  const onCollapse = (collapsed) => {
    setState(
      produce(state, (draft) => {
        draft.collapsed = collapsed;
      }),
    );
  };
  return (
    <Layout.Sider
      collapsible
      collapsed={state.collapsed}
      onCollapse={onCollapse}
    >
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        {menuRoop}
      </Menu>
    </Layout.Sider>
  );
};
