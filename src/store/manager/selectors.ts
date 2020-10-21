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
const selectStatusSearch = createSelector(
  selectManager,
  (manager) => manager.searchStatus
)
export const selectRoleOptions = createSelector(
  selectManager,
  (manager) => manager.roleOptions
)

export const selectFilteredData =
  createSelector(
    [selectTableData, selectRoleSearch, selectStatusSearch],
    (originList, role, status) => {
      return originList.filter(t => {
        const arr = [
          !role || t.role === role,
          !status || t.stop === (status === 'off'),
        ]
        return arr.every(t => !!t)
      })
    }
  )
