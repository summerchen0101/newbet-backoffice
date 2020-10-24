import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
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
