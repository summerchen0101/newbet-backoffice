import { sampleReducer } from './sample/reducers'
import managerReducer from './manager/reducer'
import onlineReducer from './online/reducer'
import { configureStore } from '@reduxjs/toolkit'

const reducer = {
  manager: managerReducer,
  online: onlineReducer,
  sample: sampleReducer
}

export type RootState = {
  manager: ReturnType<typeof managerReducer>,
  online: ReturnType<typeof onlineReducer>,
  sample: ReturnType<typeof sampleReducer>,
}

export default configureStore({ reducer })



