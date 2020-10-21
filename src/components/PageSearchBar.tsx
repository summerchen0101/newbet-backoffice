import React from 'react';
import { Space } from 'antd';

const PageSearchBar: React.FC = ({ children, ...props }) => {
  return (
    <Space size="small" style={{ marginBottom: 20 }} {...props}>
      {children}
    </Space>
  );
};

export default PageSearchBar;
