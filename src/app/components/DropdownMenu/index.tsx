import React from 'react';
import { Menu } from 'antd';

type MenuItem = {
  label: string;
  code: string;
};

type Props = {
  items: MenuItem[];
  onClick: () => void;
};

const Component: React.FC<Props> = (props, { items = [], onClick }) => (
  <Menu onClick={onClick} {...props}>
    {items.map((t) => (
      <Menu.Item key={t.code}>{t.label}</Menu.Item>
    ))}
  </Menu>
);
export default Component;
