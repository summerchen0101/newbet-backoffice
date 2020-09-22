import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import produce from 'immer';
import { connect } from 'react-redux';
import { RootState } from 'store/index';
import Logo from './logo';

const mapStateToProps = (state: RootState) => ({
  menu: state.basic.menu,
});

type IState = {
  collapsed: boolean;
};
const initState: IState = {
  collapsed: false,
};

const iconMap = {
  user: UserOutlined,
  team: TeamOutlined,
  desktop: DesktopOutlined,
  pieChart: PieChartOutlined,
};

const Component: React.FC<ReturnType<typeof mapStateToProps>> = (props) => {
  const [state, setState] = useState(initState);
  const menuRoop = props.menu.map((m, m_i) => {
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
      <Logo />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        {menuRoop}
      </Menu>
    </Layout.Sider>
  );
};
export default connect(mapStateToProps)(Component);
