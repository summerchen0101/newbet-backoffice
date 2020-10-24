import React from 'react';
import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { changeKeyword } from '@/store/account';
const { Search } = Input;

const Component: React.FC = () => {
  const dispatch = useDispatch();
  const onSearch = (value) => dispatch(changeKeyword(value));
  return (
    <Search
      allowClear
      placeholder="請輸入帳號"
      onSearch={onSearch}
      style={{ width: 200 }}
    />
  );
};

export default Component;
