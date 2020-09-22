import { Menu } from 'antd';
import React from 'react';
import Wrap from './Wrap';

const Component = (props) => {
  return (
    <Wrap>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Wrap>
  );
};

export default Component;
