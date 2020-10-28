import React, { useEffect } from 'react';
import { Table, Space } from 'antd';
import moment from 'moment';
moment.locale('zh-tw');

const columns = [
  ...moment.monthsShort().map((t, i) => ({
    title: t,
    dataIndex: i + 1,
    key: i + 1,
    width: '10%',
  })),
  {
    title: '總計',
    dataIndex: 'total',
    key: 'total',
    width: '10%',
  },
];

const monthsData = {};
moment.monthsShort().forEach((m, i) => {
  monthsData[i + 1] = 200;
});
const data = [
  {
    key: 1,
    ...monthsData,
    total: 900,
  },
];

const MonthlyRevenueTable: React.FC = () => {
  return (
    <>
      <h4>單月總計</h4>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        size="small"
        scroll={{ x: 800, y: 300 }}
      />
    </>
  );
};

export default MonthlyRevenueTable;
