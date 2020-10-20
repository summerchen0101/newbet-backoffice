import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  searchRole: '',
  tableData: [],
  roleOptions: []
}

const counterSlice = createSlice({
  name: 'manager',
  initialState,
  reducers: {
    gotTableData(state, action: PayloadAction<any[]>) {
      state.tableData = action.payload
    },
    changeRoleSearch(state, action: PayloadAction<string>) {
      state.searchRole = action.payload
    },
    searchRole(state, action: PayloadAction<string>) {
      state.searchRole = action.payload
      state.tableData = state.tableData.map(d => d.role.includes(state.searchRole))
    },
    getRoleOption(state, action: PayloadAction<any[]>) {
      state.roleOptions = action.payload
    },
  },
})

export const { gotTableData, changeRoleSearch, searchRole, getRoleOption } = counterSlice.actions
export default counterSlice.reducer