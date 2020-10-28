import { createSelector } from 'reselect';
import { RevenueState, moduleName } from './reducer';

const selectModuleState = (state: { [moduleName]: RevenueState }) =>
  state[moduleName];

export const selectTableData = createSelector(
  selectModuleState,
  (moduleState) => moduleState.tableData,
);
