import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const moduleName = 'gameResult';

export type GameResultState = {
  keyword: string;
  tableData: any[];
  roleOptions: any[];
};
const initialState: GameResultState = {
  keyword: '',
  tableData: [],
  roleOptions: [],
};

const module = createSlice({
  name: 'gameResult',
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
