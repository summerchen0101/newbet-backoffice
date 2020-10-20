import {createSelector} from 'reselect';
import {initState} from './reducer'

const getTableData = (state = initState) => state.tableData
const getRoleSearch = (state = initState) => state.searchRole
export const getRoleOptions = (state = initState) => state.roleOptions

export const getFilteredData =
  createSelector(
    [getTableData, getRoleSearch],
    (data, text) => text ? data.filter(d => d.role.includes(text)) : data
  )
