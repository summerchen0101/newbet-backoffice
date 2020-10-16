import { Layout } from 'antd';
import React from 'react';
import Board from './Board';
import { useSelector } from 'react-redux';
import { selectBreadcrumb } from 'app/store/global/selector';
import Breadcrumb from 'app/components/Breadcrumb';
import RouterViews from 'app/components/RouterViews';
import routers from './routers';

const { Content } = Layout;

const Component: React.FC = (props) => {
  const breadcrumb = useSelector(selectBreadcrumb);
  return (
    <Content style={{ margin: '0 16px' }}>
      <Breadcrumb breadcrumb={breadcrumb} />
      <Board>
        <RouterViews routerViews={routers} />
      </Board>
    </Content>
  );
};

export default Component;
