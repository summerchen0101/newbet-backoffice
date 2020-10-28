import { createSelector } from 'reselect';
import { BaseballSingleState, moduleName } from './reducer';

const selectModuleState = (state: { [moduleName]: BaseballSingleState }) =>
  state[moduleName];

export const selectTableData = createSelector(
  selectModuleState,
  (moduleState) => moduleState.tableData,
);
