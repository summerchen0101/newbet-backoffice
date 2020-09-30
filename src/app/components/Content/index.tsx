import { Layout } from 'antd';
import React from 'react';
import Home from 'app/containers/HomePage';
import Profile from 'app/containers/Profile';
import Board from './Board';
import { useSelector } from 'react-redux';
import { selectBreadcrumb } from 'app/store/global/selector';
import Breadcrumb from 'app/components/Breadcrumb';
import RouterViews from 'app/components/RouterViews';

const routerViews = [
  { path: '/home', component: Home },
  { path: '/profile', component: Profile },
];

const { Content } = Layout;

const Component: React.FC = (props) => {
  const breadcrumb = useSelector(selectBreadcrumb);
  return (
    <Content style={{ margin: '0 16px' }}>
      <Breadcrumb breadcrumb={breadcrumb} />
      <Board>
        <RouterViews routerViews={routerViews} />
      </Board>
    </Content>
  );
};

export default Component;
