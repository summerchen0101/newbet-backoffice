import React, { useEffect } from 'react';
import { Table, Space } from 'antd';
import A from '@/components/A';
import { gotTableData } from '@/store/shareAccount';
import { selectFilteredData } from '@/store/shareAccount/selectors';
import { useSelector, useDispatch } from 'react-redux';

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
    title: '公桶帳號(暱稱)',
    dataIndex: 'share',
    key: 'share',
    render: (share) =>
      share && (
        <>
          {share.account}({share.nick})
        </>
      ),
  },
  {
    title: '備註',
    dataIndex: 'notes',
    key: 'notes',
    width: '12%',
  },
  {
    title: '下層',
    dataIndex: 'subs',
    key: 'subs',
    render: () => <a>查看</a>,
  },
  {
    title: '更新時間',
    dataIndex: 'updateAt',
    key: 'updateAt',
    width: '15%',
  },
  {
    title: '更新人員',
    dataIndex: 'operator',
    key: 'operator',
  },
  {
    title: '功能',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <A type="danger">刪除</A>
      </Space>
    ),
    width: '10%',
  },
];

const data = [
  {
    key: 1,
    num: 1,
    branch: '站台一',
    share: { account: 'share99', nick: '公桶大總監一號' },
    subs: [],
    notes: '測試00',
    updateAt: '2020-10-09 14:33',
    operator: 'summer',
  },
];

const Component: React.FC = () => {
  const dispatch = useDispatch();
  const filterdData = useSelector(selectFilteredData);
  useEffect(() => {
    dispatch(gotTableData(data));
  }, []);
  return <Table columns={columns} dataSource={filterdData} size="small" />;
};

export default Component;
