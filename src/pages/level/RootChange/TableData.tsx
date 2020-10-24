import React, { useEffect } from 'react';
import { Table, Space } from 'antd';
const columns = [
  {
    title: '#',
    dataIndex: 'num',
    key: 'num',
    width: '5%',
  },
  {
    title: '站台',
    dataIndex: 'branch',
    key: 'branch',
    width: '10%',
  },
  {
    title: '申請時間',
    dataIndex: 'applyingAt',
    key: 'applyingAt',
  },
  {
    title: '審核時間',
    dataIndex: 'reviewAt',
    key: 'reviewAt',
  },
  {
    title: '申請人',
    dataIndex: 'operating',
    key: 'operating',
    render: (operating) =>
      operating && (
        <>
          {operating.account}({operating.nick})
        </>
      ),
  },
  {
    title: '移桶來源帳號',
    dataIndex: 'source',
    key: 'source',
    width: '15%',
    render: (source) =>
      source && (
        <>
          {source.account}({source.nick})
          <span style={{ color: 'red' }}>[{source.level}]</span>
        </>
      ),
  },
  {
    title: '移桶目標帳號',
    dataIndex: 'target',
    key: 'target',
    width: '15%',
    render: (target) =>
      target && (
        <>
          {target.account}({target.nick})
          <span style={{ color: 'red' }}>[{target.level}]</span>
        </>
      ),
  },
  {
    title: '階層資訊',
    dataIndex: 'info',
    key: 'info',
    render: () => <a>查看</a>,
  },
  {
    title: '備註',
    dataIndex: 'notes',
    key: 'notes',
  },
  {
    title: '審核',
    dataIndex: 'review',
    key: 'review',
    render: (review, record) =>
      review === 0 ? <a>審核</a> : <span>處理中...</span>,
  },
];

const columesForType = {
  applying: columns.filter((t) => t.key !== 'reviewAt'),
  success: columns.filter((t) => t.key !== 'review'),
  cancel: columns.filter((t) => t.key !== 'review'),
};

const data = [
  {
    key: 1,
    num: 1,
    branch: '站台一',
    applyingAt: '07-30 16:44',
    reviewAt: '07-31 10:02',
    operating: { account: 'summer', nick: '夏天' },
    source: { account: 'jason', nick: 'Jason', level: '總監' },
    target: { account: 'cindy', nick: 'Cindy', level: '大總監' },
    notes: '測試123',
    review: 0,
  },
  {
    key: 2,
    num: 2,
    branch: '站台一',
    applyingAt: '07-30 16:44',
    reviewAt: '07-31 10:02',
    operating: { account: 'summer', nick: '夏天' },
    source: { account: 'jason', nick: 'Jason', level: '總監' },
    target: { account: 'cindy', nick: 'Cindy', level: '大總監' },
    notes: '測試123',
    review: 1,
  },
];

const Component: React.FC<{ type: string }> = ({ type }) => {
  return (
    <Table
      columns={columesForType[type]}
      dataSource={data}
      size="small"
      scroll={{ x: 1200, y: 300 }}
    />
  );
};

export default Component;
