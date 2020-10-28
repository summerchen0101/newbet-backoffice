import { createSelector } from 'reselect';
import { RootChangeState, moduleName } from './reducer';

const selectModuleState = (state: { [moduleName]: RootChangeState }) =>
  state[moduleName];

export const selectTableData = createSelector(
  selectModuleState,
  (moduleState) => moduleState.tableData,
);
