import { Menu } from 'antd';
import React from 'react';
import { themeOptions } from 'app/store/style/reducer';
import { useDispatch } from 'react-redux';
import { changeTheme } from 'store/style/actions';

export default () => {
  const dispatch = useDispatch()
  return (
  <Menu onClick={({ key }) => dispatch(changeTheme(key))}>
    {themeOptions.map((t) => (
      <Menu.Item key={t}>{t}</Menu.Item>
    ))}
  </Menu>
)
};
