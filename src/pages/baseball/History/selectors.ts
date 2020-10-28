import { createSelector } from 'reselect';
import { BaseballHistoryState, moduleName } from './reducer';

const selectModuleState = (state: { [moduleName]: BaseballHistoryState }) =>
  state[moduleName];

export const selectTableData = createSelector(
  selectModuleState,
  (moduleState) => moduleState.tableData,
);
