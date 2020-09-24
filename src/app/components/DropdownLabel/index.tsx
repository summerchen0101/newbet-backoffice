import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import A from 'app/components/A';

const Component: React.FC<{ title: string }> = (props) => (
  <A onClick={(e) => e.preventDefault()} {...props}>
    {props.title} <DownOutlined />
  </A>
);

export default Component;
