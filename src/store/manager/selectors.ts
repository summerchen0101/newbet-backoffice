import { RootState } from '@/store';
import {createSelector} from 'reselect';

const selectManager = (state: RootState) => state.manager
const selectTableData = createSelector(
  selectManager,
  (manager) => manager.tableData
)
const selectRoleSearch = createSelector(
  selectManager,
  (manager) => manager.searchRole
)
export const selectRoleOptions = createSelector(
  selectManager,
  (manager) => manager.roleOptions
)

export const selectFilteredData =
  createSelector(
    [selectTableData, selectRoleSearch],
    (data, text) => text ? data.filter(d => d.role.includes(text)) : data
  )
