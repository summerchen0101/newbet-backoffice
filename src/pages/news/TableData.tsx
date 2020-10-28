import React from 'react';
import { Table, Space } from 'antd';
import A from '@/components/A';
import { CheckCircleOutlined } from '@ant-design/icons';

const columns = [
  {
    title: '已讀',
    dataIndex: 'read',
    key: 'read',
    render: (read) => (read ? <CheckCircleOutlined /> : '-'),
    width: '10%',
  },
  {
    title: '分類',
    dataIndex: 'category',
    key: 'category',
    render: (text) => `[${text}]`,
    width: '15%',
  },
  {
    title: '內容',
    dataIndex: 'content',
    key: 'content',
  },
  {
    title: '日期',
    dataIndex: 'updatedDate',
    key: 'updatedDate',
    width: '20%',
  },
  {
    title: '編輯',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>修改</a>
        <A type="danger">刪除</A>
      </Space>
    ),
    width: '15%',
  },
];

const data = [
  {
    key: '1',
    read: false,
    category: '系統公告',
    updatedDate: '2020-07-28 14:08',
    content:
      '07月30日 18:35 CPBL 中華職棒 (富邦悍將 VS 統一獅)因雨延賽.所有注單一律取消不予計算，過關以(1)計算，敬請各位會員留意。',
  },
  {
    key: '2',
    read: true,
    category: '足球',
    updatedDate: '2020-07-28 14:08',
    content:
      '07月30日 18:35 CPBL 中華職棒 (富邦悍將 VS 統一獅)因雨延賽.所有注單一律取消不予計算，過關以(1)計算，敬請各位會員留意。',
  },
  {
    key: '3',
    read: true,
    category: '籃球',
    updatedDate: '2020-07-28 14:08',
    content:
      '07月30日 18:35 CPBL 中華職棒 (富邦悍將 VS 統一獅)因雨延賽.所有注單一律取消不予計算，過關以(1)計算，敬請各位會員留意。',
  },
];

const Component: React.FC = () => {
  return <Table columns={columns} dataSource={data} size="small" />;
};

export default Component;
