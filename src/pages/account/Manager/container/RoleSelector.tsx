import React, { useContext, useEffect, useReducer } from 'react'

import { Select } from 'antd';
import context from '../context'
import {getRoleOptions} from '../selectors'

const {Option} = Select;

const roleList = [
  {value: '控盤人員'},
  {value: '網站管理員'},
  {value: 'MIS工程師'},
]

const Component: React.FC = () => {
  const {state, dispatch} = useContext(context)
  const roleOptions = getRoleOptions(state)
  useEffect(() => {
    dispatch({type: 'GOT_ROLE_OPTIONS', options: roleList})
  }, [])
  const onChange = (value) => dispatch({type: 'CHANGE_ROLE_SEARCH', value})
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
