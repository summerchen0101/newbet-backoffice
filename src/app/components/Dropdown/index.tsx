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
    <Menu.Item key="en">English</Menu.Item>
    <Menu.Item key="zh">Chinese</Menu.Item>
  </Menu>
);

export default (props) => (
  <Dropdown overlay={menu} {...props}>
    <A onClick={(e) => e.preventDefault()}>
      Language <DownOutlined />
    </A>
  </Dropdown>
);
