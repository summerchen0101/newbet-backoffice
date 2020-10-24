import React from 'react';

import { Select } from 'antd';

const { Option } = Select;

const options = [30, 50, 100];

const Component: React.FC = () => {
  return (
    <Select allowClear style={{ width: 100 }} placeholder="全部">
      {options.map((value) => (
        <Option key={value} value={value}>
          {value}
        </Option>
      ))}
    </Select>
  );
};

export default Component;
