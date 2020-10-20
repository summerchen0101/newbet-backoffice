import React, {useEffect} from 'react'
import { Table, Space } from 'antd';
import A from '@/components/A'
import { CheckOutlined } from '@ant-design/icons'
import {gotTableData} from '@/store/manager/reducer'
import {getFilteredData} from '@/store/manager/selectors'
import { useSelector, useDispatch } from 'react-redux';
const columns = [
  {
    title: '#',
    dataIndex: 'num',
    key: 'num',
    width: '10%',
  },
  {
    title: '站台',
    dataIndex: 'branch',
    key: 'branch',
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
    title: '角色',
    dataIndex: 'role',
    key: 'role',
  },
  {
    title: '停用',
    dataIndex: 'stop',
    key: 'stop',
    render: stop => stop && <CheckOutlined style={{color: "red"}}  />
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
];

const data = [
  {
    key: 1,
    num: 1,
    branch: "站台名稱",
    account: "summer",
    nick: "夏天",
    role: "網站管理員",
    stop: false,
  },
  {
    key: 2,
    num: 2,
    branch: "站台名稱",
    account: "benson99",
    nick: "Benson",
    role: "控盤人員",
    stop: true,
  },
  {
    key: 3,
    num: 3,
    branch: "站台名稱",
    account: "gogoro123",
    nick: "Gogoro",
    role: "MIS工程師",
    stop: false,
  },
];

const Component: React.FC = () => {
  const dispatch = useDispatch()
  const filterdData = useSelector(getFilteredData)
  useEffect(() => {
    dispatch(gotTableData(data))
  }, [])
  return (
    <Table columns={columns} dataSource={filterdData} size="small" />
  )
}

export default Component
