import React, { useEffect } from 'react';
import { Table, Space, Checkbox } from 'antd';
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
  },
  {
    title: '代理帳號',
    dataIndex: 'account',
    key: 'account',
  },
  {
    title: '名稱',
    dataIndex: 'nick',
    key: 'nick',
  },
  {
    title: '額度(萬)',
    dataIndex: 'quota',
    key: 'quota',
  },
  {
    title: '佔成',
    key: 'percent',
    render: (text, record) => <a>查看</a>,
  },
  {
    title: '停用',
    dataIndex: 'stopUse',
    key: 'stopUse',
    render: (value) => <Checkbox checked={value} />,
  },
  {
    title: '停押',
    dataIndex: 'stopBet',
    key: 'stopBet',
    render: (value) => <Checkbox checked={value} />,
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
          <a>設定</a>
        )}
      </Space>
    ),
  },
  {
    title: '移桶',
    dataIndex: 'changeRoot',
    key: 'changeRoot',
    render: (value) => (value === 0 ? <a>申請</a> : <span>處理中</span>),
  },
  {
    title: '備註',
    dataIndex: 'notes',
    key: 'notes',
  },
  {
    title: '編輯',
    key: 'action',
    render: (text, record) => <a>修改</a>,
  },
  {
    title: '複製',
    key: 'copy',
    render: (text, record) => <a>複製</a>,
  },
];

const data = [
  {
    key: 1,
    num: 1,
    account: 'summer',
    nick: '夏天',
    quota: 5300,
    stopUse: false,
    stopBet: true,
    loginTime: '2019-12-20 14:58',
    danger: ['#f5222d', '#fadb14'],
    changeParent: 0,
    notes: '',
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
