import React, { useEffect } from 'react';
import { Table, Space } from 'antd';
import sports from '@/lib/sports';
import moment from 'moment';

const columns = [
  {
    title: '歸帳日',
    dataIndex: 'postingDate',
    key: 'postingDate',
    width: '10%',
  },
  ...Object.keys(sports).map((key) => ({
    title: sports[key],
    dataIndex: key,
    key: key,
    width: '10%',
    render(value) {
      return <span style={{ color: value > 0 ? 'red' : '#333' }}>{value}</span>;
    },
  })),
];

const data = [
  {
    key: 1,
    postingDate: moment(new Date()).format('YYYY-MM-DD'),
    baseball: 0,
    basketball: 10,
    soccer: 8,
    hockey: 10,
  },
  {
    key: 2,
    postingDate: moment(new Date()).subtract(1, 'day').format('YYYY-MM-DD'),
    baseball: 0,
    basketball: 10,
    soccer: 8,
    hockey: 10,
  },
  {
    key: 3,
    postingDate: moment(new Date()).subtract(2, 'day').format('YYYY-MM-DD'),
    baseball: 0,
    basketball: 10,
    soccer: 8,
    hockey: 10,
  },
];

const Component: React.FC = () => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      size="small"
      scroll={{ x: 800, y: 300 }}
    />
  );
};

export default Component;
