import React, { useEffect } from 'react';
import { Table, Space } from 'antd';
import A from '@/components/A';
import { CheckOutlined } from '@ant-design/icons';
import { gotTableData } from '@/store/manager/reducer';
import { selectFilteredData } from '@/store/manager/selectors';
import { useSelector, useDispatch } from 'react-redux';
import ColorBox from '@/components/ColorBox';

const columns = [
  {
    title: '#',
    dataIndex: 'num',
    key: 'num',
    width: '10%',
  },
  {
    title: '代理帳號',
    dataIndex: 'branch',
    key: 'branch',
  },
  {
    title: '名稱',
    dataIndex: 'account',
    key: 'account',
  },
  {
    title: '額度(萬)',
    dataIndex: 'nick',
    key: 'nick',
  },
  {
    title: '佔成',
    dataIndex: 'role',
    key: 'role',
  },
  {
    title: '停用',
    dataIndex: 'stop',
    key: 'stop',
    render: (stop) => stop && <CheckOutlined style={{ color: 'red' }} />,
  },
  {
    title: '停押',
    dataIndex: 'stop',
    key: 'stop',
    render: (stop) => stop && <CheckOutlined style={{ color: 'red' }} />,
  },
  {
    title: '最後登入',
    dataIndex: 'loginTime',
    key: 'loginTime',
  },
  {
    title: '危險等級',
    key: 'danger',
    dataIndex: 'danger',
    render: (list) => (
      <Space size="small">
        {list && list.length > 0 ? (
          list.map((t, i) => <ColorBox key={i} color={t} />)
        ) : (
          <a className="text-danger">設定</a>
        )}
      </Space>
    ),
    width: '15%',
  },
  {
    title: '移桶',
    dataIndex: 'changeRoot',
    key: 'changeRoot',
  },
  {
    title: '備註',
    dataIndex: 'notes',
    key: 'notes',
  },
  {
    title: '編輯',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a className="text-danger">修改</a>
        <A type="danger">刪除</A>
      </Space>
    ),
    width: '15%',
  },
  {
    title: '複製',
    key: 'copy',
  },
];

const data = [
  {
    key: 1,
    num: 1,
    branch: '站台名稱',
    account: 'summer',
    nick: '夏天',
    role: '網站管理員',
    stop: false,
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
