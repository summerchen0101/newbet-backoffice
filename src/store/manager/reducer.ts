import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import produce from 'immer';
const initialState = {
  searchRole: undefined,
  searchStatus: undefined,
  searchKeyword: '',
  tableData: [],
  roleOptions: [],
};

const counterSlice = createSlice({
  name: 'manager',
  initialState,
  reducers: {
    gotTableData(state, action: PayloadAction<any[]>) {
      state.tableData = action.payload;
    },
    changeRoleSearch(state, action: PayloadAction<string>) {
      state.searchRole = action.payload;
    },
    changeStatusSearch(state, action: PayloadAction<string>) {
      state.searchStatus = action.payload;
    },
    changeKeywordSearch(state, action: PayloadAction<string>) {
      state.searchKeyword = action.payload;
    },
    gotRoleOptions(state, action: PayloadAction<any[]>) {
      state.roleOptions = action.payload;
    },
  },
});

export const {
  gotTableData,
  changeRoleSearch,
  changeStatusSearch,
  changeKeywordSearch,
  gotRoleOptions,
} = counterSlice.actions;
export default counterSlice.reducer;
