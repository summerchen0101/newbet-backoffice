import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

function disabledDate(current) {
  return current && current < moment().endOf('day');
}

const Component: React.FC = () => {
  return (
    <RangePicker
      disabledDate={disabledDate}
      placeholder={['起始日', '結束日']}
    />
  );
};

export default Component;
