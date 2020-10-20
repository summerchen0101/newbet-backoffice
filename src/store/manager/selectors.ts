import { RootState } from '@/store';
import {createSelector} from 'reselect';

const getManager = (state: RootState) => state.manager
const getTableData = createSelector(
  getManager,
  (manager) => manager.tableData
)
const getRoleSearch = createSelector(
  getManager,
  (manager) => manager.searchRole
)
export const getRoleOptions = createSelector(
  getManager,
  (manager) => manager.roleOptions
)

export const getFilteredData =
  createSelector(
    [getTableData, getRoleSearch],
    (data, text) => text ? data.filter(d => d.role.includes(text)) : data
  )
