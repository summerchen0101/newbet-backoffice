import { RootState } from '@/store';
import { createSelector } from 'reselect';

const selectModuleState = (state: RootState) => state.manager;
const selectTableData = createSelector(
  selectModuleState,
  (manager) => manager.tableData,
);
export const selectRoleSearch = createSelector(
  selectModuleState,
  (manager) => manager.searchRole,
);
export const selectStatusSearch = createSelector(
  selectModuleState,
  (manager) => manager.searchStatus,
);
export const selectRoleOptions = createSelector(
  selectModuleState,
  (manager) => manager.roleOptions,
);

export const selectFilteredData = createSelector(
  [selectTableData, selectRoleSearch, selectStatusSearch],
  (originList, role, status) => {
    return originList.filter((t) => {
      const arr = [
        !role || t.role === role,
        !status || t.stop === (status === 'off'),
      ];
      return arr.every((t) => !!t);
    });
  },
);
