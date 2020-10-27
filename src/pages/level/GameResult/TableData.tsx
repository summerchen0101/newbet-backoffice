import React, { useEffect } from 'react';
import { Table, Space } from 'antd';
import { gotTableData } from '@/pages/account/Manager/reducer';
import { selectFilteredData } from '@/pages/account/Manager/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { toCurrency } from '@/utils/transfer';

const columns = [
  {
    title: '排名',
    dataIndex: 'rank',
    key: 'rank',
  },
  {
    title: '會員帳號',
    dataIndex: 'account',
    key: 'account',
    render: (value, record) => (
      <>
        {value}({record.nick})
      </>
    ),
  },
  {
    title: '輸贏結果',
    dataIndex: 'result',
    key: 'result',
  },
  {
    title: '贏',
    dataIndex: 'win',
    key: 'win',
  },
  {
    title: '輸',
    dataIndex: 'loose',
    key: 'loose',
  },
  {
    title: '勝率',
    key: 'odds',
    render: (_, { loose, win }) => {
      const odds = ((win / (loose + win)) * 100).toFixed(2);
      return <>{odds}%</>;
    },
  },
  {
    title: '備註',
    dataIndex: 'notes',
    key: 'notes',
  },
];

const data = [
  {
    key: 1,
    rank: 1,
    account: 'summer',
    nick: '夏天',
    result: 3420,
    win: 5,
    loose: 2,
  },
];

const Component: React.FC = () => {
  const dispatch = useDispatch();
  const filterdData = useSelector(selectFilteredData);
  useEffect(() => {
    dispatch(gotTableData(data));
  }, []);
  return (
    <Table
      columns={columns}
      dataSource={filterdData}
      size="small"
      scroll={{ x: 1200, y: 300 }}
    />
  );
};

export default Component;
