import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AccountState = {
  keyword: string;
  tableData: any[];
  roleOptions: any[];
};
const initialState: AccountState = {
  keyword: '',
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
    changeKeyword(state, action: PayloadAction<string>) {
      state.keyword = action.payload;
    },
    initSearchState(state) {
      state.keyword = '';
    },
  },
});

export const { gotTableData, changeKeyword, initSearchState } = module.actions;
export default module.reducer;
