import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  searchRole: undefined,
  searchStatus: undefined,
  searchKeyword: '',
  tableData: [],
  roleOptions: [],
};

const module = createSlice({
  name: 'account',
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
    initSearchState(state) {
      state.searchRole = undefined;
      state.searchStatus = undefined;
      state.searchKeyword = '';
    },
  },
});

export const {
  gotTableData,
  changeRoleSearch,
  changeStatusSearch,
  changeKeywordSearch,
  initSearchState,
  gotRoleOptions,
} = module.actions;
export default module.reducer;
