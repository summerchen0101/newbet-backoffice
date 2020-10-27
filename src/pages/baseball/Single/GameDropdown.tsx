import React, { useEffect } from 'react';

import { Select } from 'antd';
import games from '@/lib/games';

const { Option } = Select;

const options = Object.keys(games).map((key) => ({
  label: games[key],
  value: key,
}));

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
