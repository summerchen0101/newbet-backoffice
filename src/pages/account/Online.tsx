import React from 'react'
import Dashboard from '@/components/Dashboard'

import { Table, Space, Select } from 'antd';
import PageHeader from '@/components/PageHeader'
import ColorBox from '@/components/ColorBox'

const { Option } = Select;

const columns = [
  {
    title: '#',
    dataIndex: 'num',
    key: 'num',
    width: '10%',
  },
  {
    title: '帳號',
    dataIndex: 'account',
    key: 'account',
  },
  {
    title: '暱稱',
    dataIndex: 'nick',
    key: 'nick',
  },
  {
    title: '層級角色',
    dataIndex: 'role',
    key: 'role',
  },
  {
    title: '登入時間',
    dataIndex: 'loginTime',
    key: 'loginTime',
  },
  {
    title: '登入IP',
    dataIndex: 'ip',
    key: 'ip',
  },
  {
    title: '危險等級',
    key: 'danger',
    dataIndex: 'danger',
    render: (list) => (
      <Space size="small">
        { list.length > 0
          ? list.map((t, i) => <ColorBox key={i} color={t} />)
          : <a className="text-danger">設定</a> }
      </Space>
    ),
    width: '15%',
  },
];

const data = [
  {
    key: 1,
    num: 1,
    account: "summer",
    nick: "夏天",
    role: "十級代理",
    loginTime: "2018-12-18 16:42:44",
    ip: "192.168.111.26",
    danger: ['#f5222d', '#fadb14'],
  },
  {
    key: 2,
    num: 2,
    account: "sunny123",
    nick: "Sunny",
    role: "八級代理",
    loginTime: "2018-12-18 16:42:44",
    ip: "192.168.111.26",
    danger: [],
  },
];

const routes = [
  {
    path: '/home',
    breadcrumbName: '首頁',
  },
  {
    path: '',
    breadcrumbName: '帳號管理',
  },
  {
    path: '/account/manager',
    breadcrumbName: '在線人員',
  },
];

const roleList = [
  {value: '6級代理'},
  {value: '7級代理'},
  {value: '8級代理'},
  {value: '9級代理'},
  {value: '10級代理'},
]

const Component: React.FC = () => {
  const onChange = value => console.log(`selected ${value}`);
  return (
    <Dashboard>
      <PageHeader title="在線人員" breadcrumb={{ routes }} />
      <Select
          showSearch
          style={{ width: 200, marginBottom: 20 }}
          placeholder="全部"
          onChange={onChange}
      >
        {roleList.map(opt => (
          <Option key={opt.value} value={opt.value}>{ opt.value }</Option>
        ))}
      </Select>
      <Table columns={columns} dataSource={data} size="small" />
    </Dashboard>
  )
}

export default Component
