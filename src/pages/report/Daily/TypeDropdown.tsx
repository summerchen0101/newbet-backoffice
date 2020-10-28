import React from 'react';

import { Select } from 'antd';

const { Option } = Select;

const options = [];

const Component: React.FC = () => {
  return (
    <Select showSearch allowClear style={{ width: 120 }} placeholder="全部類型">
      {options.map((opt) => (
        <Option key={opt.value} value={opt.value}>
          {opt.label}
        </Option>
      ))}
    </Select>
  );
};

export default Component;
