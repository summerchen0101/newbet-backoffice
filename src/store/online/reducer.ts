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
      console.log("changeRoleSearch")
      console.log(action.payload)
      state.searchRole = action.payload
    },
    gotRoleOptions(state, action: PayloadAction<any[]>) {
      state.roleOptions = action.payload
    },
  },
})

export const {
  gotTableData,
  changeRoleSearch,
  gotRoleOptions
} = counterSlice.actions
export default counterSlice.reducer
