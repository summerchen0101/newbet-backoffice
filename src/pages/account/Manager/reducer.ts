
import produce from 'immer'

export const initState = {
  searchRole: '',
  tableData: [],
  roleOptions: []
}

const reducer =  produce((draft, action) => {
  switch (action.type) {
    case 'GOT_TABLE_DATA':
      draft.tableData = action.list
      break;
    case 'CHANGE_ROLE_SEARCH':
      draft.searchRole = action.value
      break;
    case 'SEARCH_ROLE':
      draft.searchRole = action.value
      draft.tableData = draft.tableData.map(d => d.role.includes(draft.searchRole))
      break;
    case 'GOT_ROLE_OPTIONS':
      draft.roleOptions = action.options
      break;
  }
})
export default reducer
