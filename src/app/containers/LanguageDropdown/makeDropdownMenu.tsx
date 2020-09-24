import { Menu } from 'antd';
import React from 'react';
import { localeOptions } from 'app/store/language/reducer';
import { langCodeMapper } from 'app/utils/i18n';

export default (changeLang) => (
  <Menu onClick={({ key }) => changeLang(key)}>
    {localeOptions.map((t) => (
      <Menu.Item key={t}>{langCodeMapper[t]}</Menu.Item>
    ))}
  </Menu>
);
