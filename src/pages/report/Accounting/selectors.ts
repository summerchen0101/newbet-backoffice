import { createSelector } from 'reselect';
import { AccountingState, moduleName } from './reducer';

const selectModuleState = (state: { [moduleName]: AccountingState }) =>
  state[moduleName];

export const selectTableData = createSelector(
  selectModuleState,
  (moduleState) => moduleState.tableData,
);
