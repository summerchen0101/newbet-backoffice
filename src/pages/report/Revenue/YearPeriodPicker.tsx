import { Radio } from 'antd';
import React from 'react';
const Component: React.FC = () => {
  const options = [
    { label: '全年', value: 'all' },
    { label: 'Q1', value: 'q1' },
    { label: 'Q2', value: 'q2' },
    { label: 'Q3', value: 'q3' },
    { label: 'Q4', value: 'q4' },
  ];
  return (
    <Radio.Group
      options={options}
      value="all"
      buttonStyle="solid"
      optionType="button"
    ></Radio.Group>
  );
};

export default Component;
