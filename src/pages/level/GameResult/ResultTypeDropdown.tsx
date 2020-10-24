import React from 'react';

import { Select } from 'antd';

const { Option } = Select;

const options = [
  { label: '最大輸額', value: 'loose' },
  { label: '最大贏額', value: 'win' },
];

const Component: React.FC = () => {
  return (
    <Select allowClear style={{ width: 150 }} placeholder="全部">
      {options.map((opt) => (
        <Option key={opt.value} value={opt.value}>
          {opt.label}
        </Option>
      ))}
    </Select>
  );
};

export default Component;
