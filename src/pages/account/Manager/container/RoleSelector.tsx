import React, { useContext, useEffect, useReducer } from 'react'

import { Select } from 'antd';
import {getRoleOption, changeRoleSearch} from '@/store/manager/reducer'
import {getRoleOptions} from '@/store/manager/selectors'
import { useDispatch, useSelector } from 'react-redux';


const {Option} = Select;

const roleList = [
  {value: '控盤人員'},
  {value: '網站管理員'},
  {value: 'MIS工程師'},
]

const Component: React.FC = () => {
  const dispatch = useDispatch()
  const roleOptions = useSelector(getRoleOptions)
  useEffect(() => {
    dispatch(getRoleOption(roleList))
  }, [])
  const onChange = (value) => dispatch(changeRoleSearch(value))
  return (
    <Select
        showSearch
        style={{ width: 200, marginBottom: 20 }}
        placeholder="全部"
        onChange={onChange}
        // defaultValue={searchRole}
    >
      {roleOptions.map(opt => (
        <Option key={opt.value} value={opt.value}>{ opt.value }</Option>
      ))}
    </Select>
  )
}

export default Component
