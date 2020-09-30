import { Breadcrumb } from 'antd';
import React from 'react';

const Component: React.FC<{ breadcrumb: string[] }> = ({ breadcrumb }) => {
  return (
    <Breadcrumb>
      {breadcrumb.map((label) => (
        <Breadcrumb.Item key={label}>{label}</Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default Component;
