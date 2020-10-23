import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  searchRole: undefined,
  tableData: [],
  roleOptions: [],
};

const counterSlice = createSlice({
  name: 'online',
  initialState,
  reducers: {
    gotTableData(state, action: PayloadAction<any[]>) {
      state.tableData = action.payload;
    },
    changeRoleSearch(state, action: PayloadAction<string>) {
      state.searchRole = action.payload;
    },
    gotRoleOptions(state, action: PayloadAction<any[]>) {
      state.roleOptions = action.payload;
    },
    initSearchState(state) {
      state.searchRole = undefined;
    },
  },
});

export const {
  gotTableData,
  changeRoleSearch,
  gotRoleOptions,
  initSearchState,
} = counterSlice.actions;
export default counterSlice.reducer;
