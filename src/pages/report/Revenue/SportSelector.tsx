import { Select, Checkbox, Space } from 'antd';
import React from 'react';
import sports from '@/lib/sports';

const { Option } = Select;

const Component: React.FC = () => {
  return (
    <Space style={{ marginLeft: 20 }}>
      <Checkbox>全選</Checkbox>
      <Select
        mode="multiple"
        allowClear
        style={{ width: '100%' }}
        placeholder="請選擇球類"
        defaultValue={Object.keys(sports)}
      >
        {Object.keys(sports).map((key) => (
          <Option key={key} value={key}>
            {sports[key]}
          </Option>
        ))}
      </Select>
    </Space>
  );
};

export default Component;
