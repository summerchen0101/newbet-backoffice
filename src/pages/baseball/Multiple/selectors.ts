import { createSelector } from 'reselect';
import { BaseballMultipleState, moduleName } from './reducer';

const selectModuleState = (state: { [moduleName]: BaseballMultipleState }) =>
  state[moduleName];

export const selectTableData = createSelector(
  selectModuleState,
  (moduleState) => moduleState.tableData,
);
