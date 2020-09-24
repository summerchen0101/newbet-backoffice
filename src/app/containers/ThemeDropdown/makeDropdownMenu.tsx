import { Menu } from 'antd';
import React from 'react';
import { themeOptions } from 'app/store/style/reducer';

export default (changeTheme) => (
  <Menu onClick={({ key }) => changeTheme(key)}>
    {themeOptions.map((t) => (
      <Menu.Item key={t}>{t}</Menu.Item>
    ))}
  </Menu>
);
