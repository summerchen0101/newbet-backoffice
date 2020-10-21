import React, { useContext, useEffect, useReducer } from 'react';

import { Select } from 'antd';
import { changeStatusSearch } from '@/store/manager/reducer';
import { useDispatch } from 'react-redux';

const { Option } = Select;

const options = [
  { label: '啟用', value: 'on' },
  { label: '停用', value: 'off' },
];

const Component: React.FC = () => {
  const dispatch = useDispatch();
  const onChange = (value) => dispatch(changeStatusSearch(value));
  return (
    <Select
      showSearch
      allowClear
      style={{ width: 150 }}
      placeholder="全部"
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
