import { createSelector } from 'reselect';
import { BaseballState, moduleName } from './reducer';

const selectModuleState = (state: { [moduleName]: BaseballState }) =>
  state[moduleName];

export const selectTableData = createSelector(
  selectModuleState,
  (moduleState) => moduleState.tableData,
);
