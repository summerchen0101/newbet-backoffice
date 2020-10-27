import React, { useEffect } from 'react';

import { Select } from 'antd';

const { Option } = Select;

const options = [
  { label: '實貨', value: 1 },
  { label: '虛貨', value: 0 },
];

const Component: React.FC = () => {
  return (
    <Select showSearch allowClear style={{ width: 150 }} placeholder="全部">
      {options.map((opt) => (
        <Option key={opt.value} value={opt.value}>
          {opt.label}
        </Option>
      ))}
    </Select>
  );
};

export default Component;
