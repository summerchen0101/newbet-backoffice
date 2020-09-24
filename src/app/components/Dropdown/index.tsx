import { Menu, Dropdown, message } from 'antd';
import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import A from 'app/components/A';
import styled from 'styled-components';

const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const menu = (
  <Menu onClick={onClick}>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd memu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

export default (props) => (
  <Dropdown overlay={menu} {...props}>
    <A onClick={(e) => e.preventDefault()}>
      Language <DownOutlined />
    </A>
  </Dropdown>
);
