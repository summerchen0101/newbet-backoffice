import React from 'react';

import { Select } from 'antd';
import { changeStatusSearch } from '@/store/manager';
import { useDispatch, useSelector } from 'react-redux';
import { selectStatusSearch } from '@/store/manager/selectors';

const { Option } = Select;

const options = [];

const Component: React.FC = () => {
  const dispatch = useDispatch();
  const onChange = (value) => dispatch(changeStatusSearch(value));
  return (
    <Select
      showSearch
      allowClear
      style={{ width: 120 }}
      placeholder="全部類型"
      onChange={onChange}
    >
      {options.map((opt) => (
        <Option key={opt.value} value={opt.value}>
          {opt.label}
        </Option>
      ))}
    </Select>
  );
};

export default Component;
